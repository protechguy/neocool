import { NextResponse } from "next/server";
import { orderSchema } from "@/lib/validators";
import { sendOrderEmail } from "@/lib/email";
import { clientIpFromRequest, rateLimit } from "@/lib/rate-limit";
import { captureError, logInfo, logWarn } from "@/lib/logger";

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

export async function POST(request: Request) {
  const ip = clientIpFromRequest(request);

  const { ok, retryAfterSeconds } = rateLimit(`order:${ip}`, RATE_LIMIT, RATE_WINDOW_MS);
  if (!ok) {
    logWarn("order.rate_limited", { ip, retryAfterSeconds });
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch (err) {
    captureError("order.invalid_json", err, { ip });
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = orderSchema.safeParse(body);
  if (!result.success) {
    logInfo("order.validation_failed", {
      ip,
      fields: Object.keys(result.error.flatten().fieldErrors),
    });
    return NextResponse.json({ errors: result.error.flatten().fieldErrors }, { status: 400 });
  }

  try {
    await sendOrderEmail(result.data);
    logInfo("order.received", { ip, stage: result.data.stage, model: result.data.model });
    return NextResponse.json({ success: true });
  } catch (err) {
    captureError("order.send_failed", err, { ip, stage: result.data.stage });
    return NextResponse.json({ error: "Failed to process order. Please try again." }, { status: 500 });
  }
}

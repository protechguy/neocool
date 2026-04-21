import { NextResponse } from "next/server";
import { orderSchema } from "@/lib/validators";
import { sendOrderEmail } from "@/lib/email";
import { checkRateLimit, clientIp, sweepExpired } from "@/lib/rateLimit";

const RATE_LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

export async function POST(request: Request) {
  sweepExpired();
  const ip = clientIp(request);
  const rl = checkRateLimit(`order:${ip}`, RATE_LIMIT, WINDOW_MS);
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Too many order requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSeconds) } }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const result = orderSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  try {
    await sendOrderEmail(result.data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[api/order] failed to send order email:", error);
    return NextResponse.json(
      { error: "Failed to process order. Please try again." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { orderSchema } from "@/lib/validators";
import { sendOrderEmail } from "@/lib/email";
import { clientIpFromRequest, rateLimit } from "@/lib/rate-limit";

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

export async function POST(request: Request) {
  const ip = clientIpFromRequest(request);
  const { ok, retryAfterSeconds } = rateLimit(`order:${ip}`, RATE_LIMIT, RATE_WINDOW_MS);
  if (!ok) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } },
    );
  }

  try {
    const body = await request.json();
    const result = orderSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ errors: result.error.flatten().fieldErrors }, { status: 400 });
    }

    await sendOrderEmail(result.data);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to process order. Please try again." }, { status: 500 });
  }
}

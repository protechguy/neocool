import { NextResponse } from "next/server";
import { orderSchema } from "@/lib/validators";
import { sendOrderEmail } from "@/lib/email";

export async function POST(request: Request) {
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

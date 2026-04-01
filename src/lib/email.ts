import nodemailer from "nodemailer";
import { OrderSchema } from "@/lib/validators";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendOrderEmail(data: OrderSchema) {
  const stageLabel = data.stage === "both" ? "Stage 1 + Stage 2 Bundle" : data.stage === "stage-1" ? "Stage 1 — Thermal Pad" : "Stage 2 — Copper Heatsink";

  await transporter.sendMail({
    from: `"Neocool Orders" <${process.env.SMTP_USER}>`,
    to: process.env.ORDER_EMAIL_TO,
    replyTo: data.email,
    subject: `New Order Request: ${stageLabel}`,
    html: `
      <h2>New Neocool Order Request</h2>
      <table style="border-collapse:collapse;">
        <tr><td style="padding:8px;font-weight:bold;">Mod:</td><td style="padding:8px;">${stageLabel}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Name:</td><td style="padding:8px;">${data.name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Email:</td><td style="padding:8px;">${data.email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Model:</td><td style="padding:8px;">${data.model}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Message:</td><td style="padding:8px;">${data.message || "—"}</td></tr>
      </table>
    `,
  });
}

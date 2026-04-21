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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendOrderEmail(data: OrderSchema) {
  const stageLabel = data.stage === "both" ? "Stage 1 + Stage 2 Bundle" : data.stage === "stage-1" ? "Stage 1 — Thermal Pad" : "Stage 2 — Copper Heatsink";

  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const model = escapeHtml(data.model);
  const message = data.message ? escapeHtml(data.message) : "—";

  await transporter.sendMail({
    from: `"Neocool Orders" <${process.env.SMTP_USER}>`,
    to: process.env.ORDER_EMAIL_TO,
    replyTo: data.email,
    subject: `New Order Request: ${stageLabel}`,
    text: `New Neocool Order Request\n\nMod: ${stageLabel}\nName: ${data.name}\nEmail: ${data.email}\nModel: ${data.model}\nMessage: ${data.message || "—"}\n`,
    html: `
      <h2>New Neocool Order Request</h2>
      <table style="border-collapse:collapse;">
        <tr><td style="padding:8px;font-weight:bold;">Mod:</td><td style="padding:8px;">${stageLabel}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Name:</td><td style="padding:8px;">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Email:</td><td style="padding:8px;">${email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Model:</td><td style="padding:8px;">${model}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Message:</td><td style="padding:8px;white-space:pre-wrap;">${message}</td></tr>
      </table>
    `,
  });
}

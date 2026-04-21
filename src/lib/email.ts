import nodemailer from "nodemailer";
import { OrderSchema } from "@/lib/validators";
import { STAGE_LABELS } from "@/lib/constants";

const REQUIRED_ENV = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "ORDER_EMAIL_TO"] as const;

function getSmtpConfig() {
  const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing required SMTP environment variables: ${missing.join(", ")}`);
  }
  return {
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT) || 465,
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
    to: process.env.ORDER_EMAIL_TO!,
  };
}

let cachedTransporter: nodemailer.Transporter | null = null;
function getTransporter() {
  if (cachedTransporter) return cachedTransporter;
  const cfg = getSmtpConfig();
  cachedTransporter = nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: true,
    auth: { user: cfg.user, pass: cfg.pass },
  });
  return cachedTransporter;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendOrderEmail(data: OrderSchema) {
  const cfg = getSmtpConfig();
  const stageLabel = STAGE_LABELS[data.stage];
  const safe = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    model: escapeHtml(data.model),
    message: escapeHtml(data.message || "—"),
    stage: escapeHtml(stageLabel),
  };

  await getTransporter().sendMail({
    from: `"Neocool Orders" <${cfg.user}>`,
    to: cfg.to,
    replyTo: data.email,
    subject: `New Order Request: ${stageLabel}`,
    text: [
      `New Neocool Order Request`,
      ``,
      `Mod:     ${stageLabel}`,
      `Name:    ${data.name}`,
      `Email:   ${data.email}`,
      `Model:   ${data.model}`,
      `Message: ${data.message || "—"}`,
    ].join("\n"),
    html: `
      <h2>New Neocool Order Request</h2>
      <table style="border-collapse:collapse;">
        <tr><td style="padding:8px;font-weight:bold;">Mod:</td><td style="padding:8px;">${safe.stage}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Name:</td><td style="padding:8px;">${safe.name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Email:</td><td style="padding:8px;">${safe.email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Model:</td><td style="padding:8px;">${safe.model}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Message:</td><td style="padding:8px;">${safe.message}</td></tr>
      </table>
    `,
  });
}

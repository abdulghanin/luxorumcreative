// lib/resend.ts
import { Resend } from "resend";
import type { ContactFormData } from "@/types";

const resend    = new Resend(process.env.RESEND_API_KEY);
const FROM      = process.env.FROM_EMAIL  ?? "noreply@luxorumcreative.com";
const TO        = process.env.TO_EMAIL    ?? "contact@luxorumcreative.com";
const BRAND     = "#6366F1";

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    await resend.emails.send({
      from:    FROM,
      to:      TO,
      subject: `New inquiry from ${data.fullName} — ${data.service}`,
      html:    buildInternalEmail(data),
      replyTo: data.email,
    });
    await resend.emails.send({
      from:    FROM,
      to:      data.email,
      subject: "We received your message — Luxorum Creative",
      html:    buildConfirmationEmail(data),
    });
    return { success: true };
  } catch (err) {
    console.error("Resend error:", err);
    return { success: false, error: "Email send failed" };
  }
}

function row(label: string, value: string) {
  return `<div style="margin-bottom:14px"><div style="font-size:11px;color:#94A3B8;margin-bottom:4px;text-transform:uppercase;letter-spacing:1px">${label}</div><div style="font-size:14px;color:#F8FAFC;background:rgba(99,102,241,.06);border:1px solid #1E293B;border-radius:8px;padding:10px 14px">${value}</div></div>`;
}

function buildInternalEmail(d: ContactFormData) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head>
<body style="background:#0B0F19;color:#F8FAFC;font-family:Inter,Arial,sans-serif;margin:0;padding:20px">
<div style="max-width:600px;margin:0 auto;background:#111827;border:1px solid #1E293B;border-radius:16px;padding:32px">
  <div style="text-align:center;margin-bottom:28px">
    <div style="font-size:22px;font-weight:700;color:${BRAND}">Luxorum Creative</div>
    <div style="display:inline-block;background:rgba(99,102,241,.1);border:1px solid rgba(99,102,241,.3);border-radius:50px;padding:4px 16px;font-size:11px;color:${BRAND};margin-top:8px">New Contact Request</div>
  </div>
  ${row("Full Name", d.fullName)}
  ${row("Email", d.email)}
  ${d.phone   ? row("Phone",   d.phone)   : ""}
  ${d.company ? row("Company", d.company) : ""}
  ${row("Service Required", d.service)}
  ${row("Project Details", d.details.replace(/\n/g, "<br>"))}
  <div style="text-align:center;margin-top:28px;font-size:11px;color:#475569">© ${new Date().getFullYear()} Luxorum Creative · Dubai, UAE</div>
</div></body></html>`;
}

function buildConfirmationEmail(d: ContactFormData) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head>
<body style="background:#0B0F19;color:#F8FAFC;font-family:Inter,Arial,sans-serif;margin:0;padding:20px">
<div style="max-width:560px;margin:0 auto;background:#111827;border:1px solid #1E293B;border-radius:16px;padding:40px;text-align:center">
  <div style="font-size:26px;font-weight:700;color:${BRAND};margin-bottom:8px">Luxorum Creative</div>
  <div style="font-size:48px;margin:20px 0">✅</div>
  <h2 style="font-size:20px;font-weight:600;margin:0 0 12px">Hi ${d.fullName}!</h2>
  <p style="font-size:14px;color:#94A3B8;line-height:1.8;margin-bottom:20px">
    We received your inquiry and one of our experts will get back to you within <strong style="color:#F8FAFC">24 hours</strong> to discuss your project.
  </p>
  <p style="font-size:13px;color:#94A3B8;margin-bottom:28px">Service: <strong style="color:#F8FAFC">${d.service}</strong></p>
  <a href="https://wa.me/971505032186" style="display:inline-block;background:${BRAND};color:#fff;padding:12px 28px;border-radius:10px;text-decoration:none;font-weight:600;font-size:14px">Chat on WhatsApp</a>
  <div style="margin-top:32px;font-size:11px;color:#475569">
    <p>Luxorum Creative · Dubai, United Arab Emirates</p>
    <p>contact@luxorumcreative.com</p>
  </div>
</div></body></html>`;
}

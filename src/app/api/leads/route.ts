import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/schemas";
import { supabaseAdmin } from "@/lib/supabase";
import { resend } from "@/lib/resend";
import { brand } from "@/lib/brand";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please check the form and try again.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const lead = parsed.data;

  // Honeypot tripped — pretend success so bots don't probe.
  if (lead.website && lead.website.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // 1. Save to Supabase
  try {
    const { error } = await supabaseAdmin().from("leads").insert({
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      address: lead.address,
      service: lead.service,
      message: lead.message ?? null,
      source: "website",
      status: "new",
    });
    if (error) {
      console.error("[leads] supabase insert failed:", error);
      return NextResponse.json(
        { error: "Couldn't save your request. Please call us at " + brand.phone + "." },
        { status: 500 },
      );
    }
  } catch (err) {
    console.error("[leads] supabase exception:", err);
    return NextResponse.json(
      { error: "Couldn't save your request. Please call us at " + brand.phone + "." },
      { status: 500 },
    );
  }

  // 2. Send notification email via Resend (don't block lead capture if it fails)
  const fromEmail = process.env.FROM_EMAIL || "leads@mail.glowmigoshomeservices.com";
  const toEmail = process.env.NOTIFICATION_EMAIL || brand.email;

  try {
    await resend().emails.send({
      from: `${brand.name} Leads <${fromEmail}>`,
      to: toEmail,
      replyTo: lead.email,
      subject: `🚨 NEW LEAD: ${lead.service} — ${lead.name} — ${lead.phone}`,
      html: renderLeadEmail(lead),
    });
  } catch (err) {
    // Email failure isn't fatal — we already saved to Supabase.
    console.error("[leads] resend send failed:", err);
  }

  // 3. Send customer auto-confirmation (best-effort — must never fail the request)
  try {
    await resend().emails.send({
      from: `Glowmigos Roofing & Home Services <${fromEmail}>`,
      to: lead.email,
      replyTo: toEmail,
      subject: "We got your message — Glowmigos Roofing & Home Services",
      html: renderCustomerConfirmationEmail(lead),
    });
  } catch (err) {
    console.error("[leads] customer confirmation send failed:", err);
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}

function renderLeadEmail(lead: {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message?: string;
}) {
  const phoneHref = `tel:${lead.phone.replace(/[^\d+]/g, "")}`;
  const mailHref = `mailto:${lead.email}`;
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lead.address)}`;
  const safe = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  return `
<!doctype html>
<html>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:#0f172a;">
  <div style="max-width:560px;margin:0 auto;padding:24px;">
    <div style="background:#0f172a;color:#fff;padding:20px 24px;border-radius:12px 12px 0 0;">
      <p style="margin:0;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#fbbf24;font-weight:700;">New Lead</p>
      <h1 style="margin:6px 0 0;font-size:22px;">${safe(lead.service)} — ${safe(lead.name)}</h1>
    </div>

    <div style="background:#fff;padding:24px;border-radius:0 0 12px 12px;">
      <table style="width:100%;border-collapse:collapse;font-size:15px;">
        <tr>
          <td style="padding:8px 0;color:#64748b;width:120px;">Name</td>
          <td style="padding:8px 0;color:#0f172a;font-weight:600;">${safe(lead.name)}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#64748b;">Phone</td>
          <td style="padding:8px 0;"><a href="${phoneHref}" style="color:#0f172a;font-weight:600;">${safe(lead.phone)}</a></td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#64748b;">Email</td>
          <td style="padding:8px 0;"><a href="${mailHref}" style="color:#0f172a;font-weight:600;">${safe(lead.email)}</a></td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#64748b;vertical-align:top;">Address</td>
          <td style="padding:8px 0;">
            <a href="${mapHref}" style="color:#0f172a;font-weight:600;">${safe(lead.address)}</a>
            <div style="margin-top:2px;font-size:12px;"><a href="${mapHref}" style="color:#d97706;">Open in Google Maps →</a></div>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#64748b;">Service</td>
          <td style="padding:8px 0;color:#0f172a;font-weight:600;">${safe(lead.service)}</td>
        </tr>
        ${
          lead.message
            ? `<tr>
                <td style="padding:8px 0;color:#64748b;vertical-align:top;">Message</td>
                <td style="padding:8px 0;color:#0f172a;white-space:pre-wrap;">${safe(lead.message)}</td>
              </tr>`
            : ""
        }
      </table>

      <div style="margin-top:20px;padding-top:20px;border-top:1px solid #e2e8f0;display:flex;gap:8px;">
        <a href="${phoneHref}" style="display:inline-block;background:#f59e0b;color:#0f172a;padding:10px 16px;border-radius:6px;text-decoration:none;font-weight:700;font-size:14px;">Call ${safe(lead.phone)}</a>
        <a href="${mailHref}" style="display:inline-block;background:#0f172a;color:#fff;padding:10px 16px;border-radius:6px;text-decoration:none;font-weight:700;font-size:14px;margin-left:8px;">Reply by email</a>
      </div>

      <p style="margin:24px 0 0;font-size:12px;color:#94a3b8;">Submitted via the Glowmigos website.</p>
    </div>
  </div>
</body>
</html>`;
}

function renderCustomerConfirmationEmail(lead: {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message?: string;
}) {
  const safe = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const firstName = lead.name.trim().split(/\s+/)[0] || "there";
  const phoneHref = brand.phoneHref;

  return `
<!doctype html>
<html>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:#0f172a;">
  <div style="max-width:560px;margin:0 auto;padding:24px;">
    <div style="background:#000;color:#fff;padding:24px;border-radius:12px 12px 0 0;text-align:center;">
      <p style="margin:0;font-size:15px;letter-spacing:0.18em;text-transform:uppercase;color:#fbbf24;font-weight:800;">Glowmigos</p>
      <p style="margin:4px 0 0;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#94a3b8;font-weight:700;">Construction + Lighting</p>
    </div>

    <div style="background:#fff;padding:28px 24px;">
      <p style="margin:0 0 12px;font-size:17px;font-weight:600;color:#0f172a;">Hey ${safe(firstName)},</p>
      <p style="margin:0;font-size:15px;line-height:1.6;color:#334155;">
        Thanks for reaching out — we got your message and we&rsquo;ll be in touch soon.
      </p>

      <div style="margin:20px 0;padding:16px;background:#f8fafc;border-left:3px solid #fbbf24;border-radius:4px;">
        <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#64748b;font-weight:700;">What you sent us</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr>
            <td style="padding:4px 0;color:#64748b;width:90px;vertical-align:top;">Service</td>
            <td style="padding:4px 0;color:#0f172a;font-weight:600;">${safe(lead.service)}</td>
          </tr>
          ${
            lead.message
              ? `<tr>
                  <td style="padding:4px 0;color:#64748b;vertical-align:top;">Message</td>
                  <td style="padding:4px 0;color:#0f172a;white-space:pre-wrap;">${safe(lead.message)}</td>
                </tr>`
              : ""
          }
        </table>
      </div>

      <p style="margin:0;font-size:15px;line-height:1.6;color:#334155;">
        We&rsquo;ll review your request and reach out within 24 hours &mdash; usually faster. If you need to talk sooner, give us a call at <a href="${phoneHref}" style="color:#0f172a;font-weight:700;text-decoration:none;border-bottom:2px solid #fbbf24;">${safe(brand.phone)}</a>.
      </p>

      <p style="margin:24px 0 0;font-size:15px;color:#334155;">
        Thanks for thinking of us,<br/>
        <strong style="color:#0f172a;">&mdash; Ronny &amp; the Glowmigos team</strong>
      </p>
    </div>

    <div style="background:#000;color:#94a3b8;padding:20px 24px;border-radius:0 0 12px 12px;text-align:center;">
      <p style="margin:0;color:#fff;font-weight:700;font-size:14px;">Glowmigos Roofing &amp; Home Services</p>
      <p style="margin:4px 0 0;color:#fbbf24;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;font-weight:700;">Construction + Lighting</p>
      <p style="margin:10px 0 0;font-size:12px;color:#94a3b8;">${safe(brand.address.full)}</p>
      <p style="margin:4px 0 0;font-size:12px;">
        <a href="${phoneHref}" style="color:#94a3b8;text-decoration:none;">${safe(brand.phone)}</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

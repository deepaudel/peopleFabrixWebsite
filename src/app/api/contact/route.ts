import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "deep@peoplefabrix.com";
// Must be an address on a domain verified with Resend — see .env.local.example.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

interface ContactPayload {
  name: string;
  email: string;
  company: string;
  title?: string;
  challenge?: string;
  message?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send contact form emails.");
    return NextResponse.json(
      { error: "The contact form isn't fully configured yet. Please try again later." },
      { status: 500 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, title, challenge, message } = payload;

  if (!name?.trim() || !email?.trim() || !company?.trim()) {
    return NextResponse.json(
      { error: "Name, work email, and company are required." },
      { status: 400 }
    );
  }

  const rows: [string, string | undefined][] = [
    ["Name", name],
    ["Work email", email],
    ["Company", company],
    ["Job title", title],
    ["Challenge", challenge],
    ["Message", message],
  ];

  const htmlRows = rows
    .filter(([, value]) => value?.trim())
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#666;vertical-align:top;white-space:nowrap;"><strong>${escapeHtml(
          label
        )}</strong></td><td style="padding:4px 0;">${escapeHtml(value as string).replace(/\n/g, "<br />")}</td></tr>`
    )
    .join("");

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `People Fabrix Website <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New contact form submission from ${name} (${company})`,
      html: `<table cellpadding="0" cellspacing="0">${htmlRows}</table>`,
    });

    if (error) {
      console.error("Resend error sending contact form email:", error);
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please try again." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Unexpected error sending contact form email:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}

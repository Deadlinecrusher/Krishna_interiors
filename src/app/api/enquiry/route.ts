import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, budget, message } = body;

    if (!name || !phone || !service) {
      return NextResponse.json({ error: 'Name, phone and service are required.' }, { status: 400 });
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('MISSING ENV: SMTP_USER or SMTP_PASS not set');
      return NextResponse.json({ error: 'Server configuration error. Please call us directly.' }, { status: 500 });
    }

    // ─── Build email HTML ───────────────────────────────────────────────────
    const emailHtml = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0e0e0e; color: #e8e0d0; padding: 40px; border-top: 3px solid #C9A96E;">
        <h2 style="color: #C9A96E; font-weight: 300; font-size: 28px; margin-bottom: 8px;">New Enquiry 🏠</h2>
        <p style="color: #888; font-size: 13px; margin-bottom: 32px;">Krishna Interiors — krishnainteriors.in</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #e8e0d0;">${name}</td></tr>
          <tr><td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222;"><a href="tel:${phone}" style="color: #C9A96E;">${phone}</a></td></tr>
          <tr><td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #e8e0d0;">${email || '—'}</td></tr>
          <tr><td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Service</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #C9A96E; font-weight: bold;">${service}</td></tr>
          <tr><td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Budget</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #e8e0d0;">${budget || '—'}</td></tr>
          <tr><td style="padding: 12px 16px 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #e8e0d0; line-height: 1.7;">${message || '—'}</td></tr>
        </table>
        <div style="margin-top: 32px; padding: 16px; background: #1a1a1a; border-left: 3px solid #C9A96E;">
          <p style="margin: 0; font-size: 12px; color: #888;">Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
        </div>
        <div style="margin-top: 24px; text-align: center;">
          <a href="https://wa.me/${phone.replace(/\D/g, '')}" style="display: inline-block; background: #25D366; color: white; padding: 12px 28px; text-decoration: none; font-size: 13px; font-family: sans-serif;">Reply on WhatsApp</a>
        </div>
      </div>
    `;

    const emailSubject = `🏠 New Enquiry — ${service} | ${name} | ${phone}`;
    const whatsappBody = `*New Enquiry — Krishna Interiors* 🏠\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email || '—'}\n*Service:* ${service}\n*Budget:* ${budget || '—'}\n\n*Message:*\n${message || '—'}\n\n_${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST_`;

    // ─── Helper: send via any Gmail account ────────────────────────────────
    const sendEmail = (smtpUser: string, smtpPass: string) => {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: { user: smtpUser, pass: smtpPass },
      });
      return transporter.sendMail({
        from: `"Krishna Interiors" <${smtpUser}>`,
        to: smtpUser,
        subject: emailSubject,
        html: emailHtml,
        replyTo: email || undefined,
      });
    };

    // ─── Helper: send via any Twilio account ───────────────────────────────
    const sendWhatsApp = async (sid: string, token: string, from: string, to: string) => {
      const twilio = (await import('twilio')).default;
      const client = twilio(sid, token);
      return client.messages.create({
        from: `whatsapp:${from}`,
        to: `whatsapp:${to}`,
        body: whatsappBody,
      });
    };

    // ─── Fire ALL simultaneously ────────────────────────────────────────────
    const tasks: Promise<unknown>[] = [];

    // Gmail 1 (required)
    tasks.push(sendEmail(process.env.SMTP_USER, process.env.SMTP_PASS));

    // Gmail 2 (optional)
    if (process.env.SMTP_USER_2 && process.env.SMTP_PASS_2) {
      tasks.push(sendEmail(process.env.SMTP_USER_2, process.env.SMTP_PASS_2));
    }

    // Twilio 1 (optional)
    if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_WHATSAPP_FROM && process.env.NOTIFY_WHATSAPP_NUMBER) {
      tasks.push(sendWhatsApp(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN, process.env.TWILIO_WHATSAPP_FROM, process.env.NOTIFY_WHATSAPP_NUMBER));
    }

    // Twilio 2 (optional)
    if (process.env.TWILIO_ACCOUNT_SID_2 && process.env.TWILIO_AUTH_TOKEN_2 && process.env.TWILIO_WHATSAPP_FROM_2 && process.env.NOTIFY_WHATSAPP_NUMBER_2) {
      tasks.push(sendWhatsApp(process.env.TWILIO_ACCOUNT_SID_2, process.env.TWILIO_AUTH_TOKEN_2, process.env.TWILIO_WHATSAPP_FROM_2, process.env.NOTIFY_WHATSAPP_NUMBER_2));
    }

    // Wait for all simultaneously — individual failures are logged but don't block
    const results = await Promise.allSettled(tasks);
    results.forEach((result, i) => {
      if (result.status === 'rejected') {
        console.error(`Task ${i + 1} failed:`, result.reason);
      }
    });

    // Only fail the request if Gmail 1 (primary) failed
    if (results[0].status === 'rejected') {
      const msg = results[0].reason instanceof Error ? results[0].reason.message : 'Unknown error';
      return NextResponse.json({ error: `Primary email failed: ${msg}` }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (err: unknown) {
    console.error('=== ENQUIRY ERROR ===', err);
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: `Failed: ${msg}` }, { status: 500 });
  }
}
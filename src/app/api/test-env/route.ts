import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    SMTP_USER_set: !!process.env.SMTP_USER,
    SMTP_USER_value: process.env.SMTP_USER ? process.env.SMTP_USER.replace(/(.{2}).*(@.*)/, '$1***$2') : 'NOT SET ❌',
    SMTP_PASS_set: !!process.env.SMTP_PASS,
    SMTP_PASS_length: process.env.SMTP_PASS?.replace(/\s/g, '').length ?? 0,
    TWILIO_SID_set: !!process.env.TWILIO_ACCOUNT_SID,
    TWILIO_TOKEN_set: !!process.env.TWILIO_AUTH_TOKEN,
    TWILIO_FROM_set: !!process.env.TWILIO_WHATSAPP_FROM,
    NOTIFY_NUMBER_set: !!process.env.NOTIFY_WHATSAPP_NUMBER,
    NOTIFY_NUMBER_value: process.env.NOTIFY_WHATSAPP_NUMBER ?? 'NOT SET ❌',
    node_env: process.env.NODE_ENV,
  });
}

import twilio from "twilio";
import type { Twilio } from "twilio";

let client: Twilio | null = null;

export function twilioClient(): Twilio {
  if (client) return client;
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  if (!sid || !token) {
    throw new Error("Missing TWILIO_ACCOUNT_SID or TWILIO_AUTH_TOKEN");
  }
  client = twilio(sid, token);
  return client;
}

import { Resend } from "resend";

let client: Resend | null = null;

export function resend(): Resend {
  if (client) return client;
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("Missing RESEND_API_KEY");
  client = new Resend(key);
  return client;
}

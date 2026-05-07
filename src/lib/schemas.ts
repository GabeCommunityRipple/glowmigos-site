import { z } from "zod";
import { serviceFormOptions } from "./brand";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(30),
  email: z.string().trim().email("Please enter a valid email").max(160),
  address: z.string().trim().min(3, "Please enter your address or city").max(240),
  service: z.enum(serviceFormOptions as [string, ...string[]]),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  // Honeypot — must be empty.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;

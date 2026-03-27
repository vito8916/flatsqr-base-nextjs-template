import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Please enter your name" })
    .max(200, { message: "Name is too long" }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(1, { message: "Please enter a subject" })
    .max(200, { message: "Subject is too long" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(5000, { message: "Message is too long" }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
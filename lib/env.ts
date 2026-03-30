import { z } from "zod";

const envSchema = z.object({
  // Site
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),

  // Analytics — all optional, activated by presence
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  NEXT_PUBLIC_VERCEL_ANALYTICS: z
    .enum(["true", "false"])
    .optional()
    .default("false"),
  NEXT_PUBLIC_FB_PIXEL_ID: z.string().optional(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    "❌ Invalid environment variables:\n",
    parsed.error.flatten().fieldErrors,
  );
  throw new Error("Invalid environment variables");
}

export const env = parsed.data;

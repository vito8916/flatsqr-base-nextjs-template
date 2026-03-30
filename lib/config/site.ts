export const siteConfig = {
  name: "FLATSQR Template",
  shortName: "FLATSQR",
  description:
    "A production-ready Next.js base template. Clone, customize, and ship fast.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/og.png",
  links: {
    twitter: "https://twitter.com/flatsqr",
    github: "https://github.com/flatsqr",
  },
  analytics: {
    googleId: process.env.NEXT_PUBLIC_GA_ID,
    vercelAnalytics: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS === "true",
    facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  },
} as const;

export type SiteConfig = typeof siteConfig;

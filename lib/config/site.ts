export const siteConfig = {
  name: "Acme - Build faster, ship smarter",
  shortName: "Acme",
  description:
    "The modern platform that helps teams move from idea to launch in record time. No complexity, just results.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/og.png",
  links: {
    twitter: "https://twitter.com/acme",
    github: "https://github.com/acme",
  },
  analytics: {
    googleId: process.env.NEXT_PUBLIC_GA_ID,
    vercelAnalytics: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS === "true",
    facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "FlatSqr - Solving problems without adding complexity.",
  shortName: "BaseKit",
  description:
    "A Next.js 16 template with landing page, SEO, forms, dark mode and config-driven content — ready to clone and customize.",
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

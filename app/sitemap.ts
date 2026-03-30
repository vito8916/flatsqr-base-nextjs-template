import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Add additional pages here as your project grows, e.g.:
    // { url: `${base}/about`, lastModified: new Date(), priority: 0.8 },
  ];
}

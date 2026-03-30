import type { Metadata } from "next";

import { siteConfig } from "@/lib/config/site";

type MetadataOverrides = {
  title?: string;
  description?: string;
  /** Relative path or absolute URL to the page OG image. Defaults to siteConfig.ogImage. */
  image?: string;
  /** Canonical path (e.g. "/blog/post-slug"). Defaults to the site root. */
  path?: string;
  noIndex?: boolean;
};

/**
 * Creates consistent page-level metadata that inherits global defaults.
 *
 * Usage:
 *   export const metadata = createMetadata({ title: "Pricing", path: "/pricing" });
 */
export function createMetadata(overrides: MetadataOverrides = {}): Metadata {
  const {
    title,
    description = siteConfig.description,
    image = siteConfig.ogImage,
    path = "/",
    noIndex = false,
  } = overrides;

  const url = `${siteConfig.url}${path}`;
  const ogImage = image.startsWith("http") ? image : `${siteConfig.url}${image}`;

  return {
    title: title ?? siteConfig.name,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: title ?? siteConfig.name,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title ?? siteConfig.name }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? siteConfig.name,
      description,
      images: [ogImage],
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}

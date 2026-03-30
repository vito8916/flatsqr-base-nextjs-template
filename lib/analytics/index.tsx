import { siteConfig } from "@/lib/config/site";
import { GoogleAnalytics } from "./providers/google";
import { VercelAnalytics } from "./providers/vercel";
import { FacebookPixel } from "./providers/facebook";

/**
 * AnalyticsProvider — mounts all active analytics integrations.
 *
 * Each provider is conditionally rendered based on the presence of the
 * corresponding environment variable. No hardcoded IDs anywhere.
 *
 * Mount this once in app/layout.tsx inside <body>.
 */
export function AnalyticsProvider() {
  const { googleId, vercelAnalytics, facebookPixelId } = siteConfig.analytics;

  return (
    <>
      {googleId && <GoogleAnalytics id={googleId} />}
      {vercelAnalytics && <VercelAnalytics />}
      {facebookPixelId && <FacebookPixel pixelId={facebookPixelId} />}
    </>
  );
}

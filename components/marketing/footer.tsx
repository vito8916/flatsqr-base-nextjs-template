import Link from "next/link";
import { Globe, MessageSquare } from "lucide-react";

import { footerConfig } from "@/lib/config/marketing";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-heading font-semibold text-sm tracking-tight mb-2">
              {footerConfig.brand.name}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
              {footerConfig.brand.description}
            </p>
          </div>

          {/* Link columns */}
          {footerConfig.columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-medium text-foreground mb-3">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">{footerConfig.legal}</p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {siteConfig.links.twitter && (
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageSquare className="size-3.5" />
              </a>
            )}
            {siteConfig.links.github && (
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="size-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

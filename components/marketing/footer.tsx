import Link from "next/link";
import { footerConfig } from "@/lib/config/marketing";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top */}
        <div className="py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex size-8 items-center justify-center rounded-lg bg-foreground">
                <span className="text-sm font-bold text-background">A</span>
              </div>
              <span className="font-semibold tracking-tight">
                {footerConfig.brand.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">
              {footerConfig.brand.description}
            </p>
          </div>

          {/* Link columns */}
          {footerConfig.columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-medium text-foreground mb-4">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {footerConfig.legal}
          </p>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            {footerConfig.legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

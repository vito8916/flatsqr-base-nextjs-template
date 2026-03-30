"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { navConfig } from "@/lib/config/marketing";
import { siteConfig } from "@/lib/config/site";
import { Button } from "@/components/ui/button";
import LinkButton from "@/components/shared/link-button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon-sm" aria-label="Toggle theme">
        <Sun className="size-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </Button>
  );
}

export function Navbar() {
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) setMobileOpen(false);
  }, [isMobile]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading font-semibold text-sm tracking-tight shrink-0"
        >
          {siteConfig.shortName}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navConfig.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-1.5 shrink-0">
          <ThemeToggle />
          <div className="hidden md:block">
            <LinkButton
              href={navConfig.cta.href}
              variant="default"
              size="sm"
            >
              {navConfig.cta.label}
            </LinkButton>
          </div>
          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon-sm"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="md:hidden border-t border-border bg-background"
          >
            <ul className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-1">
              {navConfig.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <LinkButton
                  href={navConfig.cta.href}
                  variant="default"
                  size="sm"
                  className="w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  {navConfig.cta.label}
                </LinkButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

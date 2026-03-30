"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "motion/react"
import { ModeToggle } from "@/components/shared/theme-mode-toggle"

import { navConfig } from "@/lib/config/marketing";
import { siteConfig } from "@/lib/config/site";

export function Navbar2() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center bg-foreground">
            <span className="text-sm font-bold text-background font-mono">Fq</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">{siteConfig.shortName}</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {navConfig.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          {/*<Link href="#cta" className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>*/}
          <ModeToggle />
          <Button variant="default" className="bg-foreground text-background hover:bg-foreground/90 font-mono text-sm px-5 py-2 h-10">
            <Link href="#cta">Book a Call</Link>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex size-11 items-center justify-center md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navConfig.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
                {/*<Link href="#cta" className="py-2 font-mono text-sm text-muted-foreground">
                  Contact
                </Link>*/}
                <Button variant="default" className="bg-foreground text-background hover:bg-foreground/90 font-mono text-sm h-12 w-full">
                  <Link href="#cta">Book a Call</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

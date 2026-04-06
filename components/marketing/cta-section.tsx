"use client";

import { ctaConfig } from "@/lib/config/marketing";
import Link from "next/link";
import { AnimateIn, scaleUp } from "@/components/shared/animate-in";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateIn variants={scaleUp} className="rounded-2xl bg-foreground text-background p-10 md:p-16 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-balance">
            {ctaConfig.title}
          </h2>
          <p className="text-background/70 max-w-lg mx-auto mb-8 leading-relaxed text-pretty">
            {ctaConfig.description}
          </p>
          <Link
            href={ctaConfig.primaryCta.href}
            className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all h-10 px-8 bg-background text-foreground hover:bg-background/90"
          >
            {ctaConfig.primaryCta.label}
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}

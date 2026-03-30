"use client";

import { motion } from "motion/react";
import { heroConfig } from "@/lib/config/marketing";
import LinkButton from "@/components/shared/link-button";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100svh-3.5rem)] pt-20 pb-16 overflow-hidden">
      {/* Subtle dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 dark:opacity-20"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.556 0 0 / 0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-6">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {heroConfig.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] max-w-4xl"
        >
          {heroConfig.headline}{" "}
          <span className="italic font-normal">
            {heroConfig.headlineHighlight}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
        >
          {heroConfig.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <LinkButton
            href={heroConfig.primaryCta.href}
            variant="default"
            size="lg"
          >
            {heroConfig.primaryCta.label}
          </LinkButton>
          <LinkButton
            type="anchor"
            href={heroConfig.secondaryCta.href}
            variant="outline"
            size="lg"
            target="_blank"
          >
            {heroConfig.secondaryCta.label}
          </LinkButton>
        </motion.div>

        {/* Geometric visual */}
        <motion.div
          custom={0.45}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 w-full max-w-3xl"
        >
          <VisualPlaceholder />
        </motion.div>
      </div>
    </section>
  );
}

function VisualPlaceholder() {
  return (
    <>
      {/* Visual Placeholder */}
      <div className="w-full aspect-video border border-white/10 bg-zinc-950 flex items-center justify-center relative group">
        {/* Simulated Terminal / Code Interface */}
        <div className="absolute top-0 left-0 w-full h-8 border-b border-white/10 flex items-center px-4 gap-2">
          <div className="w-2 h-2 bg-white/20"></div>
          <div className="w-2 h-2 bg-white/20"></div>
          <div className="w-2 h-2 bg-white/20"></div>
          <div className="ml-4 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            system_architecture.ts
          </div>
        </div>
        <div className="font-mono text-sm text-primary-foreground flex items-center gap-2 dark:text-white">
          <span className="opacity-50">&gt;</span>
          <span>Initializing Flatsqr Base Next.js Template...</span>
          <span className="w-2 h-4 bg-primary-foreground animate-pulse"></span>
        </div>
      </div>
    </>
  );
}

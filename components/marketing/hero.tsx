"use client";

import { motion } from "motion/react";
import { heroConfig } from "@/lib/config/marketing";
import LinkButton from "@/components/shared/link-button";
import { Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-6">
        {/* Social Proof Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
            <Users className="size-4" />
            {heroConfig.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl text-balance"
        >
          {heroConfig.headline}{" "}
          <span className="italic font-normal text-muted-foreground">
            {heroConfig.headlineHighlight}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed text-pretty"
        >
          {heroConfig.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center gap-3 mt-2"
        >
          <LinkButton
            href={heroConfig.primaryCta.href}
            variant="default"
            size="lg"
            className="rounded-lg px-6"
          >
            {heroConfig.primaryCta.label}
          </LinkButton>
          <LinkButton
            href={heroConfig.secondaryCta.href}
            variant="outline"
            size="lg"
            className="rounded-lg px-6"
          >
            {heroConfig.secondaryCta.label}
          </LinkButton>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-12 w-full max-w-4xl"
        >
          <div className="relative aspect-video rounded-xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-muted-foreground/40 text-sm">
                Product Preview
              </div>
            </div>
            {/* Simulated UI elements */}
            <div className="absolute top-0 left-0 right-0 h-10 border-b border-border bg-muted/30 flex items-center px-4 gap-2">
              <div className="size-2.5 rounded-full bg-border" />
              <div className="size-2.5 rounded-full bg-border" />
              <div className="size-2.5 rounded-full bg-border" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

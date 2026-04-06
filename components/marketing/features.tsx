"use client";

import { featuresConfig } from "@/lib/config/marketing";
import { cn } from "@/lib/utils";
import { AnimateIn, Stagger, fadeUp } from "@/components/shared/animate-in";

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimateIn variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {featuresConfig.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            {featuresConfig.description}
          </p>
        </AnimateIn>

        {/* Bento Grid */}
        <Stagger staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuresConfig.items.map((feature) => {
            const Icon = feature.icon;
            const isLarge = feature.size === "large";
            return (
              <AnimateIn
                key={feature.title}
                variants={fadeUp}
                className={cn(
                  "group rounded-xl border border-border bg-card p-6 md:p-8",
                  "transition-all duration-200 hover:shadow-sm hover:border-muted-foreground/20",
                  isLarge && "md:row-span-1"
                )}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-muted">
                    <Icon className="size-5 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  {isLarge && (
                    <div className="mt-6 flex-1 min-h-32 rounded-lg bg-muted/50 border border-border" />
                  )}
                </div>
              </AnimateIn>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

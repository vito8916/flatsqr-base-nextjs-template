import { ctaConfig } from "@/lib/config/marketing";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-foreground text-background p-10 md:p-16 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-balance">
            {ctaConfig.title}
          </h2>
          <p className="text-background/70 max-w-lg mx-auto mb-8 leading-relaxed text-pretty">
            {ctaConfig.description}
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-lg px-8 bg-background text-foreground hover:bg-background/90"
          >
            <Link href={ctaConfig.primaryCta.href}>
              {ctaConfig.primaryCta.label}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

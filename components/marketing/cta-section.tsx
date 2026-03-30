import { ctaConfig } from "@/lib/config/marketing";
import LinkButton from "@/components/shared/link-button";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          {ctaConfig.title}
        </h2>
        <p className="text-primary-foreground/70 max-w-md mx-auto mb-8 leading-relaxed">
          {ctaConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <LinkButton href={ctaConfig.primaryCta.href} variant="secondary" size="lg">
            {ctaConfig.primaryCta.label}
          </LinkButton>
          <LinkButton
            href={ctaConfig.secondaryCta.href}
            variant="ghost"
            size="lg"
            className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            {ctaConfig.secondaryCta.label}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

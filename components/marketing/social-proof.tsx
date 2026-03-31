import { socialProofConfig } from "@/lib/config/marketing";
import { Star } from "lucide-react";

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function SocialProof() {
  return (
    <section id="reviews" className="py-20 md:py-28 border-y border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {socialProofConfig.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {socialProofConfig.description}
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {socialProofConfig.testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4"
            >
              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-foreground text-foreground"
                  />
                ))}
              </div>
              <blockquote className="text-sm text-foreground leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-2 border-t border-border">
                {/* Avatar fallback */}
                <div className="size-9 rounded-full bg-muted border border-border flex items-center justify-center shrink-0">
                  <span className="text-xs font-medium text-muted-foreground">
                    {getInitials(t.name)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.country}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

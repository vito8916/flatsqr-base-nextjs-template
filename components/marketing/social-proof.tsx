import { socialProofConfig } from "@/lib/config/marketing";

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
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
            {socialProofConfig.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {socialProofConfig.description}
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {socialProofConfig.testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-xl border border-border bg-background p-6 flex flex-col gap-4"
            >
              <blockquote className="text-sm text-foreground leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                {/* Avatar fallback */}
                <div className="size-8 rounded-full bg-muted border border-border flex items-center justify-center shrink-0">
                  <span className="text-xs font-medium text-muted-foreground">
                    {getInitials(t.name)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

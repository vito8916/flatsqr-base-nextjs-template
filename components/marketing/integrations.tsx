import { integrationsConfig } from "@/lib/config/marketing";

export function Integrations() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {integrationsConfig.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {integrationsConfig.description}
          </p>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {integrationsConfig.logos.map((logo) => (
            <div
              key={logo.name}
              className="text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              <span className="text-xl font-semibold tracking-wider">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

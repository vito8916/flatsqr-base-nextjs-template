import { featuresConfig } from "@/lib/config/marketing";
import { cn } from "@/lib/utils";

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-xl mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
            {featuresConfig.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {featuresConfig.description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuresConfig.items.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={cn(
                  "group rounded-xl border border-border bg-background p-5",
                  "transition-colors hover:bg-muted/50",
                )}
              >
                <div className="mb-3 inline-flex size-8 items-center justify-center rounded-lg border border-border bg-muted">
                  <Icon className="size-4 text-foreground" />
                </div>
                <h3 className="font-medium text-sm mb-1.5">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

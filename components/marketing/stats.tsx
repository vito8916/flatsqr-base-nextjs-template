import { statsConfig } from "@/lib/config/marketing";

export function Stats() {
  return (
    <section className="py-20 md:py-28 border-y border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="lg:sticky lg:top-28">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              {statsConfig.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {statsConfig.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {statsConfig.items.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6"
              >
                <p className="font-heading text-4xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-foreground mt-2">
                  {stat.label}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

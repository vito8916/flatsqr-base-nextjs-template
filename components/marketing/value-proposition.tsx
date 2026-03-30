import { valuePropConfig } from "@/lib/config/marketing";

export function ValueProposition() {
  return (
    <section className="py-20 md:py-28 border-y border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
              {valuePropConfig.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {valuePropConfig.description}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {valuePropConfig.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-background p-5"
              >
                <p className="font-heading text-3xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

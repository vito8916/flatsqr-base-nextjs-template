import { whyChooseUsConfig } from "@/lib/config/marketing";

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 border-y border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {whyChooseUsConfig.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Make your strengths obvious. This is where you stand out.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {whyChooseUsConfig.items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="text-center">
                <div className="mb-4 mx-auto inline-flex size-12 items-center justify-center rounded-full bg-card border border-border">
                  <Icon className="size-5 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

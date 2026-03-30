import { benefitsConfig } from "@/lib/config/marketing";

export function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-xl mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
            {benefitsConfig.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {benefitsConfig.description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefitsConfig.items.map((item, i) => (
            <div key={item.title} className="flex gap-4">
              <div className="shrink-0 mt-0.5">
                <span className="inline-flex size-6 items-center justify-center rounded-full border border-border text-xs font-medium text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

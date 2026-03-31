import { howItWorksConfig } from "@/lib/config/marketing";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              {howItWorksConfig.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Clarity converts. Break down your SaaS flow in 3 short simple
              steps. People don&apos;t buy what they don&apos;t understand.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {howItWorksConfig.steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-border bg-card p-6 md:p-8"
            >
              <span className="inline-block text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                Step {step.number}
              </span>
              <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {/* Visual placeholder */}
              <div className="mt-6 h-32 rounded-lg bg-muted/50 border border-border" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

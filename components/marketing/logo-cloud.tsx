import { logoCloudConfig } from "@/lib/config/marketing";

export function LogoCloud() {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
          {logoCloudConfig.title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logoCloudConfig.logos.map((logo) => (
            <div
              key={logo.name}
              className="text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              <span className="text-lg font-semibold tracking-wider">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

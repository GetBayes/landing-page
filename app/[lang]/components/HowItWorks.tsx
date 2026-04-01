import type { Dictionary } from "../dictionaries";

type HowItWorksProps = {
  howItWorks: Dictionary["howItWorks"];
};

export default function HowItWorks({ howItWorks }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground-muted mb-3">
            {howItWorks.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            {howItWorks.headline}
          </h2>
        </div>

        {/* Vertical timeline */}
        <div className="relative max-w-xl mx-auto pl-12">
          {/* Timeline line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-border-dark" />

          {howItWorks.steps.map((step, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Number circle */}
              <div className="absolute -left-12 w-9 h-9 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-sans text-sm font-semibold">
                {index + 1}
              </div>
              {/* Content */}
              <div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-base font-sans text-foreground-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

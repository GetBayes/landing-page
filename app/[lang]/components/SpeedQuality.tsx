import type { Dictionary, Locale } from "../dictionaries";
import { Cog, ShieldCheck, Award, ArrowRight } from "lucide-react";
import { topicPath, type TopicKey } from "../../../content/slugs";
import ScrollReveal from "./ScrollReveal";

type SpeedQualityProps = {
  lang: Locale;
  speedQuality: Dictionary["speedQuality"];
};

const icons = [Cog, ShieldCheck, Award];

export default function SpeedQuality({ lang, speedQuality }: SpeedQualityProps) {
  return (
    <section className="py-20 md:py-28 bg-background-warm">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground-muted mb-3">
              {speedQuality.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              {speedQuality.headline}
            </h2>
            <p className="text-base font-sans text-foreground-muted leading-relaxed">
              {speedQuality.subtext}
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {speedQuality.items.map((item, index) => {
            const Icon = icons[index];
            const link = "linkKey" in item ? item : null;

            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-background border border-border rounded-xl p-6 h-full flex flex-col">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={20} className="text-foreground" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-serif font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-sans text-foreground-muted leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>
                  {link && (
                    <a
                      href={topicPath(link.linkKey as TopicKey, lang)}
                      className="inline-flex items-center gap-1 text-sm font-sans font-medium text-foreground hover:opacity-70 transition-opacity"
                    >
                      {link.linkText}
                      <ArrowRight size={14} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

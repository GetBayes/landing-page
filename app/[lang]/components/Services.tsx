import type { Dictionary } from "../dictionaries";
import { BarChart3, MessageCircle, Compass, FlaskConical } from "lucide-react";

type ServicesProps = {
  services: Dictionary["services"];
};

const supportIcons = [BarChart3, MessageCircle, Compass];

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="py-20 md:py-28 bg-background-warm">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground-muted mb-3">
            {services.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            {services.headline}
          </h2>
        </div>

        {/* Featured card */}
        <div className="bg-background border border-border rounded-xl p-8 mb-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <FlaskConical size={24} className="text-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                {services.featured.title}
              </h3>
              <p className="text-base font-sans text-foreground-muted leading-relaxed">
                {services.featured.description}
              </p>
            </div>
          </div>
        </div>

        {/* Supporting cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.items.map((item, index) => {
            const Icon = supportIcons[index];
            const isComingSoon = "badge" in item && item.badge;

            return (
              <div
                key={index}
                className={`bg-background border border-border rounded-xl p-6 text-center ${
                  isComingSoon ? "opacity-60" : ""
                }`}
              >
                {isComingSoon && (
                  <div className="flex justify-end mb-2">
                    <span className="text-[10px] font-sans font-medium bg-accent text-accent-foreground px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                )}
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-foreground" />
                </div>
                <h3 className="text-base font-serif font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-sans text-foreground-muted leading-relaxed">
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

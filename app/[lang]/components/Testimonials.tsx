import type { Dictionary } from "../dictionaries";
import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type TestimonialsProps = {
  testimonials: Dictionary["testimonials"];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" aria-label="Testimonials" className="py-20 md:py-28 bg-background-warm">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground-muted mb-3">
              {testimonials.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              {testimonials.headline}
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.items.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 100}>
              <div className="bg-background border border-border rounded-xl p-8 flex flex-col items-center text-center h-full">
                <Quote size={32} className="text-border-dark mb-6" />
                <p className="text-sm font-sans text-foreground-muted italic mb-6 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-auto">
                  <div
                    aria-hidden="true"
                    className="w-10 h-10 rounded-full bg-accent text-accent-foreground font-serif font-semibold flex items-center justify-center mx-auto mb-3"
                  >
                    {item.name.charAt(0)}
                  </div>
                  <p className="text-sm font-sans font-semibold text-foreground mb-1">
                    {item.name}
                  </p>
                  <p className="text-xs font-sans text-foreground-muted">
                    {item.role}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

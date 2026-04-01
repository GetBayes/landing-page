import type { Dictionary } from "../dictionaries";
import { Quote } from "lucide-react";

type TestimonialsProps = {
  testimonials: Dictionary["testimonials"];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-20 md:py-28 bg-background-warm">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground-muted mb-3">
            {testimonials.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            {testimonials.headline}
          </h2>
        </div>

        {/* Placeholder cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="bg-background border border-border rounded-xl p-8 flex flex-col items-center text-center"
            >
              <Quote size={32} className="text-border-dark mb-6" />
              <p className="text-sm font-sans text-foreground-muted italic mb-6">
                {testimonials.placeholder}
              </p>
              <div className="mt-auto">
                <div className="w-10 h-10 bg-border rounded-full mx-auto mb-3" />
                <div className="w-24 h-3 bg-border rounded mx-auto mb-2" />
                <div className="w-32 h-2 bg-border/60 rounded mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

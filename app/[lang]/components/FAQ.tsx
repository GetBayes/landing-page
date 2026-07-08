import { Plus, Minus } from "lucide-react";
import type { Dictionary } from "../dictionaries";
import ScrollReveal from "./ScrollReveal";

type FAQProps = {
  faq: Dictionary["faq"];
};

// Server component on purpose: answers must exist in the SSR HTML so
// crawlers that don't execute JS can read them. <details>/<summary>
// keeps the accordion behavior without any client-side state.
export default function FAQ({ faq }: FAQProps) {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground-muted mb-3">
              {faq.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              {faq.headline}
            </h2>
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <ScrollReveal>
        <div className="space-y-3">
          {faq.items.map((item, index) => (
            <details
              key={index}
              className="group border border-border rounded-lg overflow-hidden"
            >
              <summary className="flex items-center justify-between px-6 py-4 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-background-warm/50 transition-colors">
                <span className="text-base font-sans font-medium text-foreground pr-4">
                  {item.question}
                </span>
                <Plus size={18} className="text-foreground-muted flex-shrink-0 group-open:hidden" aria-hidden="true" />
                <Minus size={18} className="text-foreground-muted flex-shrink-0 hidden group-open:block" aria-hidden="true" />
              </summary>
              <div className="px-6 pb-4">
                <p className="text-sm font-sans text-foreground-muted leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

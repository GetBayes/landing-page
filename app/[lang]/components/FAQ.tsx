"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { Dictionary } from "../dictionaries";

type FAQProps = {
  faq: Dictionary["faq"];
};

export default function FAQ({ faq }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground-muted mb-3">
            {faq.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            {faq.headline}
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-background-warm/50 transition-colors"
                >
                  <span className="text-base font-sans font-medium text-foreground pr-4">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <Minus size={18} className="text-foreground-muted flex-shrink-0" />
                  ) : (
                    <Plus size={18} className="text-foreground-muted flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-4">
                    <p className="text-sm font-sans text-foreground-muted leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

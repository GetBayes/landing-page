"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "../dictionaries";
import ScrollReveal from "./ScrollReveal";

type HowItWorksProps = {
  howItWorks: Dictionary["howItWorks"];
};

export default function HowItWorks({ howItWorks }: HowItWorksProps) {
  const [animating, setAnimating] = useState(false);
  const pipelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = pipelineRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimating(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground-muted mb-3">
              {howItWorks.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              {howItWorks.headline}
            </h2>
          </div>
        </ScrollReveal>

        {/* Pipeline animation */}
        <div
          ref={pipelineRef}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-16"
        >
          {/* Stage 1: Upload */}
          <div className="text-center">
            <div
              className="w-28 h-24 border rounded-xl flex flex-col items-center justify-center bg-background"
              style={animating ? {
                animation: "stageHighlight 4s ease-in-out infinite",
              } : { borderColor: "var(--border)" }}
            >
              <div className="font-mono text-[9px] text-foreground-muted leading-relaxed">
                id,age,score<br />1,24,87.3<br />2,31,92.1
              </div>
            </div>
            <p className="text-xs font-sans text-foreground-muted mt-2">{howItWorks.steps[0].title}</p>
          </div>

          {/* Arrow */}
          <span
            className="text-xl text-border-dark rotate-90 md:rotate-0"
            style={animating ? { animation: "arrowPulse 4s ease-in-out infinite 0.8s" } : {}}
          >
            →
          </span>

          {/* Stage 2: Analyze */}
          <div className="text-center">
            <div
              className="w-28 h-24 border rounded-xl flex items-center justify-center bg-background"
              style={animating ? {
                animation: "stageHighlight 4s ease-in-out infinite 1.5s",
              } : { borderColor: "var(--border)" }}
            >
              <span
                className="text-2xl inline-block"
                style={animating ? { animation: "spinGear 3s linear infinite" } : {}}
              >
                ⚙
              </span>
            </div>
            <p className="text-xs font-sans text-foreground-muted mt-2">{howItWorks.steps[1].title}</p>
          </div>

          {/* Arrow */}
          <span
            className="text-xl text-border-dark rotate-90 md:rotate-0"
            style={animating ? { animation: "arrowPulse 4s ease-in-out infinite 2.3s" } : {}}
          >
            →
          </span>

          {/* Stage 3: Report */}
          <div className="text-center">
            <div
              className="w-28 h-24 border rounded-xl flex flex-col items-center justify-center gap-1 bg-background"
              style={animating ? {
                animation: "stageHighlight 4s ease-in-out infinite 3s",
              } : { borderColor: "var(--border)" }}
            >
              <div className="flex flex-col gap-1 items-center">
                <div className="h-[2px] w-10 bg-foreground rounded" />
                <div className="h-[2px] w-7 bg-foreground/60 rounded" />
                <div className="h-[2px] w-11 bg-foreground/40 rounded" />
                <div className="h-[2px] w-6 bg-foreground/60 rounded" />
              </div>
            </div>
            <p className="text-xs font-sans text-foreground-muted mt-2">{howItWorks.steps[3].title}</p>
          </div>
        </div>

        {/* Step descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {howItWorks.steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="text-center">
                <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-sans text-sm font-semibold mx-auto mb-3">
                  {index + 1}
                </div>
                <h3 className="text-sm font-serif font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-sans text-foreground-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

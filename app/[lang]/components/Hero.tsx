import type { Dictionary } from "../dictionaries";
import HeroAnimation from "./HeroAnimation";
import CountUp from "./CountUp";

type HeroProps = {
  hero: Dictionary["hero"];
  heroPreview: Dictionary["heroPreview"];
  trustBar: Dictionary["trustBar"];
};

export default function Hero({ hero, trustBar }: HeroProps) {
  return (
    <section aria-label="Hero" className="bg-gradient-to-b from-background to-background-warm">
      {/* Split hero */}
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left column - text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground-muted mb-4">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight text-foreground mb-6">
            {hero.headline}
          </h1>
          <p className="text-lg font-sans text-foreground-muted leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            {hero.subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-sans font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              {hero.cta}
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-3 border border-border-dark text-foreground font-sans font-medium rounded-lg hover:bg-background-warm transition-colors"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Right column - animated preview */}
        <HeroAnimation />
      </div>

      {/* Trust bar with count-up */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          <div className="text-center">
            <p className="text-2xl font-serif font-semibold text-foreground">
              <CountUp end={500} suffix="+" />
            </p>
            <p className="text-sm font-sans text-foreground-muted mt-1">{trustBar.analyses}</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border-dark" />
          <div className="text-center">
            <p className="text-2xl font-serif font-semibold text-foreground">
              <CountUp end={15} suffix=" min" />
            </p>
            <p className="text-sm font-sans text-foreground-muted mt-1">{trustBar.delivery}</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border-dark" />
          <div className="text-center">
            <p className="text-2xl font-serif font-semibold text-foreground">
              <CountUp end={98} suffix="%" />
            </p>
            <p className="text-sm font-sans text-foreground-muted mt-1">{trustBar.satisfaction}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

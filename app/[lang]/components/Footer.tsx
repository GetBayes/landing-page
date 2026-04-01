import type { Dictionary, Locale } from "../dictionaries";
import { Instagram, Mail } from "lucide-react";
import LanguageToggle from "./LanguageToggle";

type FooterProps = {
  lang: Locale;
  nav: Dictionary["nav"];
  footer: Dictionary["footer"];
};

export default function Footer({ lang, nav, footer }: FooterProps) {
  return (
    <footer className="bg-foreground text-accent-foreground">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold font-sans tracking-tight mb-2">GetBayes</p>
            <p className="text-sm font-sans text-accent-foreground/60">
              {footer.tagline}
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <a href="#how-it-works" className="text-sm font-sans text-accent-foreground/60 hover:text-accent-foreground transition-colors">
              {nav.howItWorks}
            </a>
            <a href="#services" className="text-sm font-sans text-accent-foreground/60 hover:text-accent-foreground transition-colors">
              {nav.services}
            </a>
            <a href="#faq" className="text-sm font-sans text-accent-foreground/60 hover:text-accent-foreground transition-colors">
              {nav.faq}
            </a>
            <a href="#contact" className="text-sm font-sans text-accent-foreground/60 hover:text-accent-foreground transition-colors">
              {nav.contact}
            </a>
          </div>

          {/* Social + language */}
          <div className="flex flex-col gap-3">
            <a
              href="https://instagram.com/getbayes.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-sans text-accent-foreground/60 hover:text-accent-foreground transition-colors"
            >
              <Instagram size={16} />
              @getbayes.me
            </a>
            <a
              href="mailto:info@getbayes.me"
              className="flex items-center gap-2 text-sm font-sans text-accent-foreground/60 hover:text-accent-foreground transition-colors"
            >
              <Mail size={16} />
              info@getbayes.me
            </a>
            <div className="mt-2">
              <LanguageToggle currentLang={lang} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-accent-foreground/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs font-sans text-accent-foreground/40">
            {footer.copyright}
          </p>
          <div className="flex gap-4">
            <span className="text-xs font-sans text-accent-foreground/40 cursor-default">
              {footer.privacy}
            </span>
            <span className="text-xs font-sans text-accent-foreground/40 cursor-default">
              {footer.terms}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

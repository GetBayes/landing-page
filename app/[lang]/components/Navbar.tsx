"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import type { Locale } from "../dictionaries";
import { localizedPath } from "../slugs";
import { topicPath } from "../../../content/slugs";

type NavbarProps = {
  lang: Locale;
  nav: {
    howItWorks: string;
    services: string;
    guides: string;
    about: string;
    faq: string;
    contact: string;
  };
};

export default function Navbar({ lang, nav }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { key: "howItWorks", href: "#how-it-works" },
    { key: "services", href: "#services" },
    { key: "guides", href: localizedPath("guides", lang) },
    { key: "about", href: topicPath("about-us", lang) },
    { key: "faq", href: "#faq" },
    { key: "contact", href: "#contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border" role="banner">
      <nav aria-label="Main navigation" className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href={`/${lang}`} className="text-xl font-bold font-sans tracking-tight">
          GetBayes
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-sans text-foreground-muted hover:text-foreground transition-colors"
            >
              {nav[link.key]}
            </a>
          ))}
          <LanguageToggle currentLang={lang} />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-6 pt-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-sans text-foreground-muted hover:text-foreground transition-colors"
              >
                {nav[link.key]}
              </a>
            ))}
            <div className="pt-2 border-t border-border">
              <LanguageToggle currentLang={lang} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

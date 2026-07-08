"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import { localizedPath, type Locale } from "../slugs";

const STORAGE_KEY = "getbayes-analytics-consent";

type Consent = "granted" | "denied";

type Props = {
  lang: Locale;
  gaId: string | undefined;
  copy: {
    message: string;
    accept: string;
    decline: string;
    privacy: string;
  };
};

// Analytics only load after an explicit opt-in (KVKK/GDPR). Declining
// loads nothing; the choice persists in localStorage.
export default function CookieConsent({ lang, gaId, copy }: Props) {
  const [consent, setConsent] = useState<Consent | null | undefined>(undefined);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setConsent(stored === "granted" || stored === "denied" ? stored : null);
  }, []);

  if (!gaId) return null;

  const choose = (value: Consent) => {
    localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  };

  return (
    <>
      {consent === "granted" && <GoogleAnalytics gaId={gaId} />}
      {consent === null && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label={copy.privacy}
          className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-50 bg-background border border-border-dark rounded-xl shadow-lg p-5"
        >
          <p className="text-sm text-foreground-muted leading-relaxed mb-4">
            {copy.message}{" "}
            <Link
              href={localizedPath("privacy", lang)}
              className="underline hover:text-foreground transition-colors"
            >
              {copy.privacy}
            </Link>
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => choose("granted")}
              className="inline-flex items-center justify-center px-5 py-2 bg-accent text-accent-foreground font-sans font-medium text-sm rounded-lg hover:opacity-90 transition-opacity"
            >
              {copy.accept}
            </button>
            <button
              onClick={() => choose("denied")}
              className="inline-flex items-center justify-center px-5 py-2 border border-border-dark text-foreground font-sans font-medium text-sm rounded-lg hover:bg-background-warm transition-colors"
            >
              {copy.decline}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

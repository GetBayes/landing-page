// Typed content registry for SEO/GEO topic pages. Structure is deliberately
// rigid: every page must ship an answer-first lead, an explicit audience
// block, substantive sections, and FAQ items — the parts search engines and
// answer engines quote. Both locales live in one Topic so a page can never
// be published half-translated.

import type { TopicKey } from "./slugs";

export type Locale = "en" | "tr";

// "service" emits Service schema, "guide" emits Article schema (with
// datePublished/dateModified as the freshness signal), "about" emits
// AboutPage schema.
export type TopicKind = "service" | "guide" | "about";

export type FaqItem = {
  question: string;
  answer: string;
};

export type Section =
  | { type: "paragraphs"; heading?: string; body: string[] }
  | {
      type: "steps";
      heading: string;
      intro?: string;
      steps: { title: string; description: string }[];
    }
  | { type: "bullets"; heading: string; intro?: string; items: string[] }
  | {
      type: "table";
      heading: string;
      intro?: string;
      columns: string[];
      rows: string[][];
    };

export type TopicLocaleContent = {
  metaTitle: string;
  metaDescription: string;
  headline: string;
  // Answer-first paragraphs; the first one must answer the target query on
  // its own — it is what answer engines quote.
  lead: string[];
  audience: { heading: string; items: string[] };
  sections: Section[];
  faqHeading: string;
  faq: FaqItem[];
  cta: { heading: string; text: string; button: string; whatsapp: string };
  relatedHeading: string;
};

export type Topic = {
  key: TopicKey;
  kind: TopicKind;
  // ISO dates; bump dateModified on any content change.
  datePublished: string;
  dateModified: string;
  // Service schema's serviceType (service pages only).
  serviceType?: string;
  related: TopicKey[];
  locales: Record<Locale, TopicLocaleContent>;
};

# GetBayes Landing Page - Design Specification

## Overview

Single-page scroll landing page for GetBayes, a statistical analysis service for academic research. The page explains the service and generates leads (contact form, consultation requests).

**Positioning:** Academic research companion (not AI-focused). Tone is collaborative, professional but approachable - like a knowledgeable peer, not a robot.

**Target audience:** Graduate students (Master's/PhD) and academic researchers/professors.

**Tech stack:** Next.js 16, React 19, Tailwind CSS 4, TypeScript.

---

## Visual Direction: Warm Minimal

- **Background:** Warm neutrals - cream/stone tones (`#fafaf9`, `#f5f0eb`)
- **Text:** Dark stone (`#292524`) for headings, muted stone (`#78716c`) for body text
- **Borders:** Light stone (`#e7e5e4`, `#d6d3d1`)
- **Accents:** Dark charcoal (`#292524`) for buttons and emphasis
- **Headings font:** Serif (Georgia or similar) - evokes academic publications
- **Body font:** Clean sans-serif (Geist Sans, already in the project)
- **Overall feel:** Like a well-designed academic book cover or research paper. Human, trustworthy, warm.

---

## Internationalization (i18n)

- **Languages:** English (EN) and Turkish (TR)
- **Detection:** Auto-detect from browser `Accept-Language` header
- **Manual toggle:** EN/TR toggle in the navbar, persists user choice
- **Routing:** `app/[lang]/` dynamic segment using Next.js 16 conventions
- **Locale routing:** `proxy.ts` (Next.js 16's replacement for middleware) handles detection and redirect
- **Dictionaries:** JSON files at `app/[lang]/dictionaries/en.json` and `app/[lang]/dictionaries/tr.json`
- **Default locale:** EN (fallback if browser language is neither EN nor TR)

### File Structure

```
app/
  [lang]/
    layout.tsx          # Root layout with lang param, sets <html lang>
    page.tsx            # Single landing page
    dictionaries.ts     # getDictionary helper
    dictionaries/
      en.json           # English translations
      tr.json           # Turkish translations
    components/
      Navbar.tsx
      Hero.tsx
      HowItWorks.tsx
      Services.tsx
      FAQ.tsx
      Testimonials.tsx
      Contact.tsx
      Footer.tsx
      LanguageToggle.tsx
proxy.ts                # i18n detection + redirect (Next.js 16 proxy file)
```

---

## Page Sections (top to bottom)

### 1. Navbar

- **Left:** GetBayes logo/wordmark (sans-serif, bold)
- **Center/Right:** Navigation links - How It Works, Services, FAQ, Contact (smooth scroll anchors)
- **Far right:** EN | TR language toggle with visual indicator for active language
- **Behavior:** Sticky on scroll, subtle bottom border. Transparent on top, gets background on scroll.
- **Mobile:** Hamburger menu with slide-out drawer

### 2. Hero Section (Split + Trust Bar)

**Layout:** Two-column split

**Left column:**
- Eyebrow text: "Your Academic Research Companion" (uppercase, small, muted)
- Headline (serif, large): "Professional Statistical Analysis for Your Research"
- Subtext (sans-serif, muted): "From data to publication-ready results. Comprehensive statistical analysis, tables, charts, and reports - delivered in 15 minutes."
- Two CTAs:
  - Primary: "Get Started" (dark charcoal button) → scrolls to Contact section
  - Secondary: "Learn More" (outlined button) → scrolls to How It Works

**Right column:**
- Visual preview card showing sample statistical output
- Styled like a mini report snippet: p-value, effect size, power stats, small bar chart representation
- Warm stone background with subtle border

**Trust bar (below hero, full width):**
- Three metrics in a row, separated by subtle dividers
- Example metrics: "500+ Analyses Completed", "15 min Average Delivery", "98% Satisfaction Rate"
- Numbers will be updated with real data as available

### 3. How It Works (Vertical Timeline)

**Heading:** "How It Works" (eyebrow) + "From Data to Publication" (main heading), centered

**Layout:** Vertical timeline with a connecting line, 4 steps:

1. **Upload Your Data** - "Share your research papers, datasets, and any relevant documents."
2. **Triage & Review** - "We identify gaps, issues, and determine the best statistical approach for your research."
3. **Full Analysis** - "Complete statistical analysis with tables, charts, and detailed interpretations."
4. **Publication-Ready Report** - "Receive a polished, academic report ready for your publication."

Each step: numbered circle on the timeline line, title (serif, bold), description (sans-serif, muted).

### 4. Services (Featured + Supporting)

**Heading:** "Our Services" (eyebrow) + "Everything Your Research Needs" (main heading), centered

**Layout:** One large featured card + three smaller cards below

**Featured card (full width):**
- **Statistical Analysis** - icon + title + description
- "Complete analysis pipeline: triage to identify issues, full statistical analysis, and publication-ready reports with tables and charts."
- Horizontal layout: icon left, text right

**Three supporting cards (equal width row):**

1. **A Priori Power Analysis** - "Determine optimal sample sizes before you begin data collection."
2. **QA Agent** - "Ask anything about your results, methods, and statistical process. Get instant, knowledgeable answers."
3. **ResearchMate** - "Guided research planning - methods, surveys, data collection formats." **[COMING SOON badge]** - card is slightly faded/muted with a dark "Coming Soon" pill badge.

### 5. FAQ (Accordion)

**Heading:** "Frequently Asked Questions" (eyebrow) + "Got Questions?" (main heading), centered

**Layout:** Accordion with expand/collapse, +/- icons, warm stone borders

**Questions (7 items):**
1. What data formats do you accept?
2. How long does the analysis take?
3. What's included in the statistical report?
4. How does the QA Agent work?
5. Do you support different statistical methods?
6. What languages do you support?
7. How do I get started / What does it cost?

Exact answer content will be written during implementation in both EN and TR.

### 6. Testimonials (Placeholder)

**Heading:** "Trusted by Researchers" (eyebrow) + main heading, centered

**Layout:** 3-column card layout

**Each card structure:**
- Quote area (large quotation mark decorative element)
- Name placeholder
- Title/University placeholder

**Placeholder state:** Cards show the structural design but with a subtle "Testimonials coming soon" message or simply empty card shells. No fake quotes or names.

### 7. Contact Section (Split Layout)

**Heading:** "Get In Touch" (eyebrow) + inviting subtext, centered

**Layout:** Two columns

**Left column - Contact form:**
- Fields: Name, Email, Subject (dropdown or text), Message (textarea)
- Submit button (dark charcoal, full width of form)
- Form will need a backend endpoint or third-party service (to be decided during implementation)

**Right column - Contact info:**
- Email: info@getbayes.me (with mail icon)
- Instagram: @getbayes.me (with Instagram icon, links to profile)
- Brief encouraging message: "We'd love to hear about your research."

### 8. Footer

**Layout:** Three columns + bottom bar

- **Left:** GetBayes wordmark + one-line tagline ("Your Academic Research Companion")
- **Center:** Navigation links (How It Works, Services, FAQ, Contact)
- **Right:** Instagram link, email link, EN/TR language toggle
- **Bottom bar:** Copyright line "© 2026 GetBayes. All rights reserved." + Privacy Policy / Terms of Service links

---

## Responsive Design

- **Desktop (1024px+):** Full layouts as described above
- **Tablet (768-1023px):** Hero becomes stacked (text above, visual below). Services grid adjusts. Timeline stays vertical.
- **Mobile (<768px):** Single column throughout. Navbar becomes hamburger menu. Trust bar stacks vertically or becomes a horizontal scroll. FAQ accordion stays the same. Contact form goes full width above contact info.

---

## Key Content Guidelines

- **Never mention AI** in any user-facing copy. Position as "our team", "our analysis", "we review", etc.
- **Tone:** Professional but warm. Academic but not intimidating. Collaborative ("your research companion").
- **CTA language:** "Get Started", "Contact Us", "Learn More" - action-oriented but not pushy.
- **Metrics in trust bar:** Use real numbers when available, placeholder-friendly structure until then.

---

## Dependencies to Install

- `@formatjs/intl-localematcher` - for locale matching in proxy.ts
- `negotiator` + `@types/negotiator` - for parsing Accept-Language header
- `server-only` - to ensure dictionary loading stays server-side
- Icon library (lucide-react or similar) - for service icons, social icons, UI elements

---

## Out of Scope

- User authentication / signup flow (separate platform)
- Pricing page
- Blog
- Documentation / Guides / API pages
- Backend for contact form (placeholder form action for now)
- Analytics integration
- SEO meta tags beyond basic title/description (can be added later)

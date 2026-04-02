"use client";

import { useState } from "react";
import type { Dictionary } from "../dictionaries";
import { Mail, Loader2 } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import ScrollReveal from "./ScrollReveal";

type ContactProps = {
  contact: Dictionary["contact"];
};

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact({ contact }: ContactProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground-muted mb-3">
              {contact.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              {contact.headline}
            </h2>
            <p className="text-base font-sans text-foreground-muted">
              {contact.subtext}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact form */}
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                  {contact.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={contact.form.namePlaceholder}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                  {contact.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={contact.form.emailPlaceholder}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                  {contact.form.subject}
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder={contact.form.subjectPlaceholder}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                  {contact.form.message}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={contact.form.messagePlaceholder}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3 bg-accent text-accent-foreground font-sans font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === "loading" && <Loader2 size={16} className="animate-spin" />}
                {contact.form.submit}
              </button>

              {status === "success" && (
                <p className="text-sm font-sans text-green-600 text-center">
                  {contact.form.success}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-sans text-red-600 text-center">
                  {errorMessage}
                </p>
              )}
            </form>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={150}>
            <div className="flex flex-col justify-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-sans font-medium text-foreground">{contact.info.emailLabel}</p>
                  <a
                    href="mailto:info@getbayes.me"
                    className="text-sm font-sans text-foreground-muted hover:text-foreground transition-colors"
                  >
                    info@getbayes.me
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <InstagramIcon size={22} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-sans font-medium text-foreground">{contact.info.instagramLabel}</p>
                  <a
                    href="https://instagram.com/getbayes.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-sans text-foreground-muted hover:text-foreground transition-colors"
                  >
                    @getbayes.me
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import type { Dictionary } from "../dictionaries";
import { Loader2 } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

type InfoFormProps = {
  form: Dictionary["info"]["form"];
  researchAreas: Dictionary["info"]["researchAreas"];
};

type FormStatus = "idle" | "loading" | "success" | "error";

export default function InfoForm({ form, researchAreas }: InfoFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showOther, setShowOther] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    try {
      const res = await fetch("/api/info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          contact: formData.get("contact") || undefined,
          researchArea: formData.get("researchArea") || undefined,
          otherArea: formData.get("otherArea") || undefined,
          question: formData.get("question"),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || form.error);
      }

      setStatus("success");
      setShowOther(false);
      formEl.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : form.error);
    }
  }

  return (
    <ScrollReveal>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="info-email" className="block text-sm font-sans font-medium text-foreground mb-1.5">
            {form.email} <span className="text-red-500">*</span>
          </label>
          <input
            id="info-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder={form.emailPlaceholder}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="info-contact" className="block text-sm font-sans font-medium text-foreground mb-1.5">
            {form.contact}
          </label>
          <input
            id="info-contact"
            type="text"
            name="contact"
            placeholder={form.contactPlaceholder}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="info-research-area" className="block text-sm font-sans font-medium text-foreground mb-1.5">
            {form.researchArea}
          </label>
          <select
            id="info-research-area"
            name="researchArea"
            defaultValue=""
            onChange={(e) => {
              const lastIndex = researchAreas.length - 1;
              setShowOther(e.target.selectedIndex - 1 === lastIndex);
            }}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          >
            <option value="" disabled>
              {form.researchAreaPlaceholder}
            </option>
            {researchAreas.map((area: string) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        {showOther && (
          <div>
            <label htmlFor="info-other-area" className="block text-sm font-sans font-medium text-foreground mb-1.5">
              {form.otherArea}
            </label>
            <input
              id="info-other-area"
              type="text"
              name="otherArea"
              placeholder={form.otherAreaPlaceholder}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
            />
          </div>
        )}

        <div>
          <label htmlFor="info-question" className="block text-sm font-sans font-medium text-foreground mb-1.5">
            {form.question} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="info-question"
            name="question"
            required
            rows={4}
            placeholder={form.questionPlaceholder}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3 bg-accent text-accent-foreground font-sans font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {status === "loading" && (
            <Loader2 size={16} className="animate-spin" />
          )}
          {form.submit}
        </button>

        {status === "success" && (
          <p className="text-sm font-sans text-green-600 text-center">
            {form.success}
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-sans text-red-600 text-center">
            {errorMessage}
          </p>
        )}
      </form>
    </ScrollReveal>
  );
}

"use client";

import { useState } from "react";
import type { Dictionary } from "../dictionaries";
import { Loader2 } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

type PowerFormProps = {
  form: Dictionary["power"]["form"];
};

type FormStatus = "idle" | "loading" | "success" | "error";

export default function PowerForm({ form }: PowerFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    try {
      const res = await fetch("/api/power", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          instagram: formData.get("instagram") || undefined,
          description: formData.get("description") || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || form.error);
      }

      setStatus("success");
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
          <label htmlFor="power-email" className="block text-sm font-sans font-medium text-foreground mb-1.5">
            {form.email} <span className="text-red-500">*</span>
          </label>
          <input
            id="power-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder={form.emailPlaceholder}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label htmlFor="power-instagram" className="block text-sm font-sans font-medium text-foreground mb-1.5">
            {form.instagram}
          </label>
          <input
            id="power-instagram"
            type="text"
            name="instagram"
            placeholder={form.instagramPlaceholder}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label htmlFor="power-description" className="block text-sm font-sans font-medium text-foreground mb-1.5">
            {form.description}
          </label>
          <textarea
            id="power-description"
            name="description"
            rows={3}
            placeholder={form.descriptionPlaceholder}
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

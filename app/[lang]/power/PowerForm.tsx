"use client";

import { useState } from "react";
import { Loader2, Info, Paperclip } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import type { Dictionary } from "../dictionaries";

type FormStatus = "idle" | "loading" | "success" | "error";

type Copy = Dictionary["power"]["form"];

type PowerFormProps = {
  form: Copy;
};

function OptionalTag({ label }: { label: string }) {
  return (
    <span className="ml-1.5 text-[11px] font-sans font-normal text-foreground-muted/70">
      ({label})
    </span>
  );
}

const fieldClass =
  "w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors";

function FileField({
  id,
  name,
  accept,
  multiple,
  label,
  help,
  placeholder,
  optionalLabel,
  manyLabel,
  maxFiles,
  tooManyLabel,
}: {
  id: string;
  name: string;
  accept: string;
  multiple?: boolean;
  label: string;
  help?: string;
  placeholder: string;
  optionalLabel: string;
  manyLabel: string;
  maxFiles?: number;
  tooManyLabel?: string;
}) {
  const [display, setDisplay] = useState("");
  const [tooMany, setTooMany] = useState(false);
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="block text-sm font-sans font-medium text-foreground mb-1"
      >
        {label}
        <OptionalTag label={optionalLabel} />
      </label>
      {help && (
        <p className="text-xs font-sans text-foreground-muted mb-1.5 min-h-[2.5rem]">
          {help}
        </p>
      )}
      <label
        htmlFor={id}
        className={`mt-auto flex items-center gap-2 px-4 py-3 bg-background border border-dashed rounded-lg cursor-pointer transition-colors ${
          tooMany ? "border-red-400" : "border-border hover:border-accent"
        }`}
      >
        <Paperclip
          size={16}
          className="text-foreground-muted shrink-0"
          aria-hidden="true"
        />
        <span className="text-sm font-sans text-foreground-muted truncate">
          {display || placeholder}
        </span>
      </label>
      {tooMany && tooManyLabel && (
        <p className="text-xs font-sans text-red-600 mt-1">{tooManyLabel}</p>
      )}
      <input
        id={id}
        type="file"
        name={name}
        accept={accept}
        multiple={multiple}
        className="sr-only"
        onChange={(e) => {
          const files = e.target.files;
          if (!files || files.length === 0) {
            setTooMany(false);
            return setDisplay("");
          }
          setTooMany(maxFiles != null && files.length > maxFiles);
          setDisplay(
            files.length === 1
              ? files[0].name
              : manyLabel.replace("{n}", String(files.length))
          );
        }}
      />
    </div>
  );
}

export default function PowerForm({ form: copy }: PowerFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [effectSize, setEffectSize] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    try {
      const res = await fetch("/api/power", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || copy.error);
      }

      setStatus("success");
      formEl.reset();
      setEffectSize("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : copy.error);
    }
  }

  return (
    <ScrollReveal>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5"
      >
        {/* ---- Contact (two columns) ---- */}
        <div>
          <label
            htmlFor="power-email"
            className="block text-sm font-sans font-medium text-foreground mb-1.5"
          >
            {copy.email} <span className="text-red-500">*</span>
          </label>
          <input
            id="power-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder={copy.emailPlaceholder}
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor="power-contact"
            className="block text-sm font-sans font-medium text-foreground mb-1.5"
          >
            {copy.contact}
            <OptionalTag label={copy.optional} />
          </label>
          <input
            id="power-contact"
            type="text"
            name="contact"
            placeholder={copy.contactPlaceholder}
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-2 h-px bg-border" />

        {/* ---- Summary (full width) ---- */}
        <div className="sm:col-span-2">
          <label
            htmlFor="power-summary"
            className="block text-sm font-sans font-medium text-foreground mb-1"
          >
            {copy.summary} <span className="text-red-500">*</span>
          </label>
          <p className="text-xs font-sans text-foreground-muted mb-1.5">
            {copy.summaryHelp}
          </p>
          <textarea
            id="power-summary"
            name="summary"
            required
            rows={3}
            placeholder={copy.summaryPlaceholder}
            className={`${fieldClass} resize-none`}
          />
        </div>

        {/* ---- Comparison (full width) ---- */}
        <div className="sm:col-span-2">
          <label
            htmlFor="power-comparison"
            className="block text-sm font-sans font-medium text-foreground mb-1"
          >
            {copy.comparison} <span className="text-red-500">*</span>
          </label>
          <p className="text-xs font-sans text-foreground-muted mb-1.5">
            {copy.comparisonHelp}
          </p>
          <textarea
            id="power-comparison"
            name="comparison"
            required
            rows={2}
            placeholder={copy.comparisonPlaceholder}
            className={`${fieldClass} resize-none`}
          />
        </div>

        {/* ---- Primary outcome (left) + expected effect (right) ---- */}
        <div className="flex flex-col">
          <label
            htmlFor="power-primary"
            className="block text-sm font-sans font-medium text-foreground mb-1"
          >
            {copy.primary} <span className="text-red-500">*</span>
          </label>
          <p className="text-xs font-sans text-foreground-muted mb-1.5 min-h-[2.5rem]">
            {copy.primaryHelp}
          </p>
          <input
            id="power-primary"
            type="text"
            name="primary"
            required
            placeholder={copy.primaryPlaceholder}
            className={`${fieldClass} mt-auto`}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="power-effect"
            className="block text-sm font-sans font-medium text-foreground mb-1"
          >
            {copy.effect}
            <OptionalTag label={copy.optional} />
          </label>
          <p className="text-xs font-sans text-foreground-muted mb-1.5 min-h-[2.5rem]">
            {copy.effectHelp}
          </p>
          <select
            id="power-effect"
            name="effectSize"
            value={effectSize}
            onChange={(e) => setEffectSize(e.target.value)}
            className={`${fieldClass} mt-auto appearance-none cursor-pointer`}
          >
            <option value="">{copy.effectUnknown}</option>
            <option value="small">{copy.effectSmall}</option>
            <option value="medium">{copy.effectMedium}</option>
            <option value="large">{copy.effectLarge}</option>
            <option value="custom">{copy.effectCustom}</option>
          </select>
          {effectSize === "custom" && (
            <input
              type="text"
              name="effectText"
              placeholder={copy.effectPlaceholder}
              className={`${fieldClass} mt-2`}
            />
          )}
        </div>

        {/* ---- Secondary (full width) ---- */}
        <div className="sm:col-span-2">
          <label
            htmlFor="power-secondary"
            className="block text-sm font-sans font-medium text-foreground mb-1"
          >
            {copy.secondary}
            <OptionalTag label={copy.optional} />
          </label>
          <p className="text-xs font-sans text-foreground-muted mb-1.5">
            {copy.secondaryHelp}
          </p>
          <input
            id="power-secondary"
            type="text"
            name="secondary"
            placeholder={copy.secondaryPlaceholder}
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-2 h-px bg-border" />

        {/* ---- References warning (full width, sits above the uploads) ---- */}
        <div className="sm:col-span-2 flex items-start gap-2 px-3 py-2 bg-accent/5 border border-accent/20 rounded-lg">
          <Info
            size={14}
            className="text-accent mt-0.5 shrink-0"
            aria-hidden="true"
          />
          <p className="text-xs font-sans text-foreground-muted leading-relaxed">
            {copy.referencesWarning}
          </p>
        </div>

        {/* ---- File uploads (two columns) ---- */}
        <FileField
          id="power-reffiles"
          name="referenceFiles"
          accept=".pdf,.doc,.docx"
          multiple
          label={copy.references}
          help={copy.referenceFilesHelp}
          placeholder={copy.referenceFilesPlaceholder}
          optionalLabel={copy.optional}
          manyLabel={copy.filesSelected}
          maxFiles={5}
          tooManyLabel={copy.filesTooMany}
        />
        <FileField
          id="power-data"
          name="data"
          accept=".csv,.xlsx,.xls,.sav,.dta,.txt,.tsv,.json"
          multiple
          label={copy.dataFile}
          help={copy.dataFileHelp}
          placeholder={copy.dataFilePlaceholder}
          optionalLabel={copy.optional}
          manyLabel={copy.filesSelected}
          maxFiles={5}
          tooManyLabel={copy.filesTooMany}
        />

        {/* ---- Submit + status (full width) ---- */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="sm:col-span-2 w-full py-3 bg-accent text-accent-foreground font-sans font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {status === "loading" && <Loader2 size={16} className="animate-spin" />}
          {copy.submit}
        </button>

        {status === "success" && (
          <p className="sm:col-span-2 text-sm font-sans text-green-600 text-center">
            {copy.success}
          </p>
        )}
        {status === "error" && (
          <p className="sm:col-span-2 text-sm font-sans text-red-600 text-center">
            {errorMessage}
          </p>
        )}
      </form>
    </ScrollReveal>
  );
}

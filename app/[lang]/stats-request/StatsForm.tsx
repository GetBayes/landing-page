"use client";

import { useRef, useState } from "react";
import type { Dictionary } from "../dictionaries";
import { Loader2, Paperclip, X } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

type StatsFormProps = {
  form: Dictionary["stats"]["form"];
};

type FormStatus = "idle" | "loading" | "success" | "error";

const MAX_FILE_BYTES = 15 * 1024 * 1024;
const MAX_FILES = 5;

const DATA_ACCEPT = ".csv,.xls,.xlsx,.sav,.dta,.rdata,.rds,.txt,.tsv,.ods,.json";
const DOC_ACCEPT =
  ".pdf,.doc,.docx,.ppt,.pptx,.rtf,.odt,.md,.txt,.png,.jpg,.jpeg,.zip,.csv,.xls,.xlsx";

type FileFieldProps = {
  id: string;
  label: string;
  hint: string;
  accept: string;
  buttonLabel: string;
  noneLabel: string;
  files: File[];
  onAdd: (selected: File[]) => void;
  onRemove: (index: number) => void;
};

function FileField({
  id,
  label,
  hint,
  accept,
  buttonLabel,
  noneLabel,
  files,
  onAdd,
  onRemove,
}: FileFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.currentTarget.files ?? []);
    // Reset the input so re-selecting the same file fires onChange again.
    e.currentTarget.value = "";
    if (selected.length > 0) onAdd(selected);
  }

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-sans font-medium text-foreground mb-1.5">
        {label}
      </label>
      <input
        id={id}
        ref={inputRef}
        type="file"
        multiple
        accept={accept}
        onChange={handleChange}
        className="sr-only"
      />
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={files.length >= MAX_FILES}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-background border border-border rounded-lg font-sans text-sm font-medium text-foreground hover:border-accent transition-colors shrink-0 disabled:opacity-50 disabled:hover:border-border disabled:cursor-not-allowed"
        >
          <Paperclip size={15} aria-hidden="true" />
          {buttonLabel}
        </button>
        {files.length === 0 && (
          <span className="text-sm font-sans text-foreground-muted/70 truncate">
            {noneLabel}
          </span>
        )}
      </div>
      {files.length > 0 && (
        <ul className="mt-2.5 space-y-1.5 list-none">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${file.size}-${index}`}
              className="flex items-center gap-2 px-3 py-2 bg-accent/5 border border-border rounded-lg text-sm font-sans text-foreground"
            >
              <Paperclip size={14} className="text-foreground-muted shrink-0" aria-hidden="true" />
              <span className="truncate flex-1 min-w-0">{file.name}</span>
              <button
                type="button"
                onClick={() => onRemove(index)}
                aria-label={`Remove ${file.name}`}
                className="text-foreground-muted hover:text-foreground transition-colors shrink-0"
              >
                <X size={15} />
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-1.5 text-xs font-sans text-foreground-muted">{hint}</p>
    </div>
  );
}

export default function StatsForm({ form }: StatsFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [dataFiles, setDataFiles] = useState<File[]>([]);
  const [docFiles, setDocFiles] = useState<File[]>([]);

  function addFiles(
    selected: File[],
    current: File[],
    setter: React.Dispatch<React.SetStateAction<File[]>>
  ) {
    if (selected.some((f) => f.size > MAX_FILE_BYTES)) {
      setStatus("error");
      setErrorMessage(form.fileTooLarge);
      return;
    }
    // De-duplicate by name + size so the same file isn't added twice.
    const merged = [...current];
    for (const f of selected) {
      if (!merged.some((m) => m.name === f.name && m.size === f.size)) {
        merged.push(f);
      }
    }
    if (merged.length > MAX_FILES) {
      setStatus("error");
      setErrorMessage(form.fileTooMany);
      setter(merged.slice(0, MAX_FILES));
      return;
    }
    setStatus("idle");
    setErrorMessage("");
    setter(merged);
  }

  function removeFile(
    index: number,
    setter: React.Dispatch<React.SetStateAction<File[]>>
  ) {
    setter((prev) => prev.filter((_, i) => i !== index));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formEl = e.currentTarget;
    // Text fields come from the form; the file inputs have no name, so we
    // append the managed lists manually under "file" and "document".
    const formData = new FormData(formEl);
    for (const file of dataFiles) formData.append("file", file);
    for (const file of docFiles) formData.append("document", file);

    try {
      // Let the browser set the multipart boundary — don't set Content-Type.
      const res = await fetch("/api/stats", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || form.error);
      }

      setStatus("success");
      formEl.reset();
      setDataFiles([]);
      setDocFiles([]);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : form.error);
    }
  }

  return (
    <ScrollReveal>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="stats-fullname" className="block text-sm font-sans font-medium text-foreground mb-1.5">
            {form.fullName}
          </label>
          <input
            id="stats-fullname"
            type="text"
            name="fullName"
            autoComplete="name"
            placeholder={form.fullNamePlaceholder}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="stats-title" className="block text-sm font-sans font-medium text-foreground mb-1.5">
            {form.title} <span className="text-red-500">*</span>
          </label>
          <input
            id="stats-title"
            type="text"
            name="title"
            required
            placeholder={form.titlePlaceholder}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="stats-contact" className="block text-sm font-sans font-medium text-foreground mb-1.5">
            {form.contact} <span className="text-red-500">*</span>
          </label>
          <input
            id="stats-contact"
            type="text"
            name="contact"
            required
            placeholder={form.contactPlaceholder}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          />
        </div>

        <FileField
          id="stats-data"
          label={form.dataFile}
          hint={form.dataFileHint}
          accept={DATA_ACCEPT}
          buttonLabel={form.fileButton}
          noneLabel={form.fileNone}
          files={dataFiles}
          onAdd={(selected) => addFiles(selected, dataFiles, setDataFiles)}
          onRemove={(index) => removeFile(index, setDataFiles)}
        />

        <FileField
          id="stats-docs"
          label={form.docFile}
          hint={form.docFileHint}
          accept={DOC_ACCEPT}
          buttonLabel={form.fileButton}
          noneLabel={form.fileNone}
          files={docFiles}
          onAdd={(selected) => addFiles(selected, docFiles, setDocFiles)}
          onRemove={(index) => removeFile(index, setDocFiles)}
        />

        <div>
          <label htmlFor="stats-purpose" className="block text-sm font-sans font-medium text-foreground mb-1.5">
            {form.purpose} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="stats-purpose"
            name="purpose"
            required
            rows={4}
            placeholder={form.purposePlaceholder}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3 bg-accent text-accent-foreground font-sans font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {status === "loading" && <Loader2 size={16} className="animate-spin" />}
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

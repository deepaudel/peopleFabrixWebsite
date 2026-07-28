"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-black/[.08] p-8 text-center dark:border-white/[.1]">
        <h3 className="text-lg font-semibold">Thanks for reaching out.</h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Someone from our team will be in touch shortly.
        </p>
      </div>
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Work email" name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" name="company" required />
        <Field label="Job title" name="title" />
      </div>
      <Field label="What challenge are you trying to solve?" name="challenge" />
      <Field label="Message" name="message" textarea />
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="mt-2 w-full rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Sending…" : "Start the Conversation"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const baseClasses =
    "mt-1.5 w-full rounded-lg border border-black/[.08] bg-[var(--background)] px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-white/[.145]";
  return (
    <label className="block text-sm font-medium">
      {label}
      {required && <span className="text-cyan-700 dark:text-[#46e5f9]"> *</span>}
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={baseClasses} />
      ) : (
        <input name={name} type={type} required={required} className={baseClasses} />
      )}
    </label>
  );
}

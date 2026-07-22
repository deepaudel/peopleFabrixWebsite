"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid gap-5"
    >
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
      <button
        type="submit"
        className="mt-2 w-full rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-90 sm:w-auto"
      >
        Start the Conversation
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
      {required && <span className="text-blue-600 dark:text-blue-400"> *</span>}
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={baseClasses} />
      ) : (
        <input name={name} type={type} required={required} className={baseClasses} />
      )}
    </label>
  );
}

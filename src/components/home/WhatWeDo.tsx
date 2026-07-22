import Link from "next/link";
import { pillars } from "@/content/pillars";

export function WhatWeDo() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
          What We Do
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          One Platform for People Data and AI-Powered HR
        </h2>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-2xl border border-black/[.08] p-6 dark:border-white/[.1]"
          >
            <h3 className="font-semibold">{pillar.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {pillar.summary}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/platform"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          Explore the Platform &rarr;
        </Link>
      </div>
    </section>
  );
}

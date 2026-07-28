import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center sm:pt-28">
      <p className="text-sm font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
        People Data. Connected. Intelligent.
      </p>
      <h1 className="mx-auto mt-2 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        One Platform for People Data and AI-Powered HR
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        A conversational assistant that answers HR policy questions from your
        real handbook, updates HR records with a human always confirming the
        change, and answers workforce questions in plain English.
      </p>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        Less time searching for answers and building reports — more time on
        the work that actually needs a person.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="/contact"
          className="w-full rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-90 sm:w-auto"
        >
          Request a Demo
        </Link>
        <Link
          href="/solutions"
          className="w-full rounded-full border border-black/[.08] px-6 py-3 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06] sm:w-auto"
        >
          Explore Our Solutions
        </Link>
      </div>
    </section>
  );
}

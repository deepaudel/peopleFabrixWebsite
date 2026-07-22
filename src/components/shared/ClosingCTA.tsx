import Link from "next/link";

export function ClosingCTA() {
  return (
    <section className="border-t border-black/[.08] py-20 dark:border-white/[.1]">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Ready to Build an AI-First People Experience?
        </h2>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Discover how People Fabrix can help connect your people data,
          improve employee support, and modernize HR processes.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="w-full rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-90 sm:w-auto"
          >
            Request a Demo
          </Link>
          <Link
            href="/contact"
            className="w-full rounded-full border border-black/[.08] px-6 py-3 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06] sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

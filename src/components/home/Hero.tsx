import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="pb-16">
      <div className="relative h-20 w-full overflow-hidden sm:aspect-[3048/516] sm:h-auto">
        <Image
          src="/banner.png"
          alt="AI-Powered HR, Built Around People — Trusted answers, Intelligent processes, Better experiences"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left sm:object-contain"
        />
      </div>
      <div className="mx-auto max-w-6xl px-6 pt-10 text-center">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
          Agentic AI for HR
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          People Fabrix is an agentic AI platform for HR that gives employees, managers, and HR teams a conversational assistant to answer policy questions from your organization's handbook, update HR records with human confirmation, and analyze workforce data using plain English.
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
      </div>
    </section>
  );
}

import Image from "next/image";
import { PageHeader } from "@/components/shared/PageHeader";

const ACCENT = "#46e5f9";

const beliefs = [
  {
    title: "Technology should simplify work, not add complexity.",
    body: "Employees shouldn't have to become experts in HR systems to get an answer.",
  },
  {
    title: "Speed and trust aren't a trade-off.",
    body: "The fastest answer is worthless if no one believes it — so answers should be quick and provably grounded at the same time.",
  },
  {
    title: "People stay in control of decisions about their own work.",
    body: "AI can prepare, suggest, and draft — but the person it affects gets the final say.",
  },
  {
    title: "HR's time belongs on people, not paperwork.",
    body: "Every routine request automated is time back for coaching, culture, and the moments that need real judgment.",
  },
];

export function AboutContent() {
  return (
    <>
      <PageHeader
        eyebrow="About People Fabrix"
        title="Reimagining How People and Organizations Work With HR Technology"
      />

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          The Problem
        </h2>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Organizations have invested millions in HR technology, yet
          employees still struggle to find answers to everyday questions,
          managers spend valuable time chasing guidance, and HR teams spend
          their day on repetitive requests instead of the strategic work only
          people can do.
        </p>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          The problem isn&apos;t a lack of technology. The challenge is
          making the technology organizations already own easier for people
          to access, understand, and trust.
        </p>
      </section>

      <section className="border-y border-black/[.08] bg-zinc-50 py-16 dark:border-white/[.1] dark:bg-white/[.03]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Our Approach
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            People Fabrix works alongside the HR systems organizations
            already have — helping unlock more value from what&apos;s
            already been invested, not replacing it.
          </p>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Employees ask questions in plain language and get answers
            grounded in their own organization&apos;s policies and
            documentation, with a citation back to the source. When a
            request touches an actual HR record — like a PTO change —
            it&apos;s staged and requires the employee&apos;s explicit
            confirmation before anything is applied; the software is built
            so it cannot act without that step. And every organization&apos;s
            data stays walled off from every other&apos;s.
          </p>
        </div>
      </section>

      <div className="h-3 bg-white" />
      <section className="bg-[#0f172a] py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2
            className="text-2xl font-bold tracking-tight sm:text-3xl"
            style={{ color: ACCENT }}
          >
            What We Believe
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 px-6 sm:grid-cols-2">
          {beliefs.map((belief) => (
            <div
              key={belief.title}
              className="rounded-2xl border border-white/[.15] bg-white/[.04] p-6"
            >
              <h3 className="font-semibold text-white">{belief.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{belief.body}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="h-3 bg-white" />

      <section className="border-y border-black/[.08] bg-zinc-50 py-16 dark:border-white/[.1] dark:bg-white/[.03]">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-cyan-700 dark:text-[#46e5f9]">
            Our Mission
          </p>
          <p className="mt-4 text-xl font-medium tracking-tight sm:text-2xl">
            Our mission is to redefine how people experience HR through
            intelligent technology that delivers trusted answers, meaningful
            insights, and seamless processes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <Image
          src="/deep-paudel.png"
          alt="Deep Paudel, Founder of People Fabrix"
          width={160}
          height={160}
          className="mx-auto h-28 w-28 rounded-full object-cover sm:h-36 sm:w-36"
        />
        <h2 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
          Meet the Founder
        </h2>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Deep Paudel founded People Fabrix after two decades building HR
          technology, data, and analytics functions at Oracle, McDonald&apos;s,
          Rackspace, Goldman Sachs, and USAA.
        </p>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Every one of those roles put him on both sides of the same gap:
          employees who couldn&apos;t get a straight answer, and HR teams
          rebuilding the same reporting and service work at every company he
          joined. People Fabrix is built the way it is because of that
          pattern — grounded answers instead of guesses, and a confirmation
          step that makes sure nothing touches an employee&apos;s record
          without them saying yes first. He holds an MBA from Northern
          Illinois University and a B.E. in Computer Science &amp;
          Engineering.
        </p>
        <blockquote
          className="mx-auto mt-8 max-w-xl border-l-4 pl-5 text-left text-lg italic text-zinc-700 dark:text-zinc-300"
          style={{ borderColor: "#46e5f9" }}
        >
          &ldquo;The future of HR isn&apos;t replacing people with AI
          &mdash; it&apos;s giving people instant access to the knowledge
          and tools they need, while letting HR focus on the moments that
          truly require human judgment.&rdquo;
          <footer className="mt-3 text-sm font-medium not-italic text-zinc-500 dark:text-zinc-500">
            — Deep Paudel, Founder
          </footer>
        </blockquote>
      </section>
    </>
  );
}

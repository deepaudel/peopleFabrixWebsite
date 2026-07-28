import { PageHeader } from "@/components/shared/PageHeader";

export function AboutContent() {
  return (
    <>
      <PageHeader
        eyebrow="About People Fabrix"
        title="Reimagining How People and Organizations Work With HR Technology"
      />
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          People Fabrix was created around a simple belief: employees should
          not need to understand complex HR systems to get help, and HR teams
          should not spend their time repeatedly answering questions that
          technology can responsibly support.
        </p>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          We bring together people data, HR expertise, and AI to create more
          connected employee experiences and more intelligent people
          processes.
        </p>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Our goal is to help organizations make HR simpler, more responsive,
          and more human.
        </p>
      </section>
    </>
  );
}

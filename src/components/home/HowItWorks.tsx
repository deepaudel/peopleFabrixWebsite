const steps = [
  {
    step: "1",
    title: "Connect",
    body: "Connect HR platforms, workforce data, policies, documents, and knowledge sources.",
  },
  {
    step: "2",
    title: "Understand",
    body: "Organize the information so AI can retrieve the right content and provide relevant answers.",
  },
  {
    step: "3",
    title: "Engage",
    body: "Give employees, managers, and HR teams conversational tools that are easy to use.",
  },
  {
    step: "4",
    title: "Act",
    body: "Automate workflows, guide decisions, and help users complete HR processes more efficiently.",
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
          How It Works
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          From Fragmented Data to Intelligent Experiences
        </h2>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.step} className="text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--foreground)] text-sm font-semibold text-[var(--background)]">
              {s.step}
            </div>
            <h3 className="mt-4 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

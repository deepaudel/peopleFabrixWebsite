const principles = [
  {
    title: "Connected",
    body: "Bring information from multiple HR systems and sources into one intelligent experience.",
  },
  {
    title: "Relevant",
    body: "Provide responses and guidance based on the employee's question, role, and available company information.",
  },
  {
    title: "Action-Oriented",
    body: "Move beyond answering questions by helping employees, managers, and HR teams complete the next step.",
  },
  {
    title: "Responsible",
    body: "Support transparent, governed, and human-centered use of AI across HR and people processes.",
  },
];

export function WhyPeopleFabrix() {
  return (
    <section className="border-y border-black/[.08] bg-zinc-50 py-20 dark:border-white/[.1] dark:bg-white/[.03]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-cyan-700 dark:text-[#46e5f9]">
            Why People Fabrix
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Human-Centered AI for HR
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            AI should make work easier for employees and HR teams—not add
            more complexity. People Fabrix combines people data, HR
            expertise, and AI to create solutions that are:
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-black/[.08] p-6 text-center dark:border-white/[.1]"
            >
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

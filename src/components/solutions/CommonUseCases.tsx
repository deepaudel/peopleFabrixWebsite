const useCases = [
  {
    title: "Employee Questions",
    body: "Help employees find trusted answers without searching across multiple systems and documents.",
  },
  {
    title: "HR Service Delivery",
    body: "Improve how HR requests are received, categorized, routed, and resolved.",
  },
  {
    title: "Employee Onboarding",
    body: "Guide new employees through policies, benefits, required activities, and important resources.",
  },
  {
    title: "Manager Support",
    body: "Provide managers with easier access to HR guidance, processes, and organizational information.",
  },
  {
    title: "Policy and Knowledge Discovery",
    body: "Make HR policies, procedures, and internal resources easier to locate and understand.",
  },
  {
    title: "Workforce Insights",
    body: "Bring together people data to identify trends, risks, and opportunities.",
  },
];

export function CommonUseCases() {
  return (
    <section className="border-y border-black/[.08] bg-zinc-50 py-20 dark:border-white/[.1] dark:bg-white/[.03]">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          Common Use Cases
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <div
              key={u.title}
              className="rounded-2xl border border-black/[.08] bg-[var(--background)] p-6 dark:border-white/[.1]"
            >
              <h3 className="font-semibold">{u.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {u.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

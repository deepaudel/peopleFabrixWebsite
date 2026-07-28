const points = [
  {
    title: "Role-Scoped Access",
    body: "Employees see their own information, managers see their team, and HR sees the full picture — enforced automatically, not left to the AI to decide.",
  },
  {
    title: "Nothing Changes Without Confirmation",
    body: "Any update to an HR record is staged and shown to you first. It's only applied after you explicitly confirm it — a real gate in the software, not a prompt asking the AI to be careful.",
  },
  {
    title: "Your Company's Data Stays Yours",
    body: "Each organization's information is kept separate and isolated from every other organization using People Fabrix.",
  },
];

export function TrustSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-cyan-700 dark:text-[#46e5f9]">
          How We Handle Your Data
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Built to Be Trusted With HR Data
        </h2>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {points.map((point) => (
          <div
            key={point.title}
            className="rounded-2xl border border-black/[.08] p-6 dark:border-white/[.1]"
          >
            <h3 className="font-semibold">{point.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {point.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

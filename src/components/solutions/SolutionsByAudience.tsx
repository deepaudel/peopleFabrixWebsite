const audiences = [
  {
    title: "For Employees",
    body: "Find HR information quickly, receive personalized guidance, and navigate workplace processes with less confusion.",
  },
  {
    title: "For Managers",
    body: "Get timely support for common people-management questions, employee situations, and HR processes.",
  },
  {
    title: "For HR Teams",
    body: "Reduce repetitive inquiries, streamline service delivery, and give HR professionals more time for high-value work.",
  },
  {
    title: "For People Leaders",
    body: "Access connected workforce information and insights to support better organizational decisions.",
  },
  {
    title: "For HR Technology Teams",
    body: "Build an AI-enabled experience across existing HR systems without requiring employees to navigate every platform individually.",
  },
];

export function SolutionsByAudience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
        Solutions by Audience
      </h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map((a) => (
          <div
            key={a.title}
            className="rounded-2xl border border-black/[.08] p-6 dark:border-white/[.1]"
          >
            <h3 className="font-semibold">{a.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {a.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

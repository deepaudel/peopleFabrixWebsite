const integrations = [
  "HR information systems",
  "Recruiting platforms",
  "Learning-management systems",
  "Payroll and benefits platforms",
  "Employee case-management tools",
  "Document repositories",
  "Survey and engagement platforms",
  "Workforce analytics solutions",
];

export function PlatformPositioning() {
  return (
    <section className="border-y border-black/[.08] bg-zinc-50 py-20 dark:border-white/[.1] dark:bg-white/[.03]">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Designed to Work With Your Existing HR Ecosystem
        </h2>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          People Fabrix is designed to complement the HR systems and
          workforce technologies organizations already use.
        </p>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Rather than creating another disconnected destination, we help
          organizations move toward agentic HR — a simpler, AI-powered
          experience across their people ecosystem.
        </p>
        <p className="mt-8 text-sm font-medium">Potential integrations may include:</p>
        <ul className="mx-auto mt-4 grid max-w-2xl gap-x-8 gap-y-2 text-left text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-2">
          {integrations.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-700 dark:bg-[#46e5f9]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

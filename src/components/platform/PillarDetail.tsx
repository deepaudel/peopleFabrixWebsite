import { pillars } from "@/content/pillars";

export function PillarDetail() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="space-y-12">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="border-b border-black/[.08] pb-12 last:border-b-0 dark:border-white/[.1]"
          >
            <h2 className="text-xl font-semibold tracking-tight">
              {pillar.title}
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              {pillar.summary}
            </p>
            {pillar.bullets.length > 0 && (
              <>
                <p className="mt-4 text-sm font-medium">{pillar.detail}</p>
                <ul className="mt-3 grid gap-x-8 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-2">
                  {pillar.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {pillar.bullets.length === 0 && (
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {pillar.detail}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

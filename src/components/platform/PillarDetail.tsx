import Image from "next/image";
import { pillars } from "@/content/pillars";

export function PillarDetail() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="space-y-16">
        {pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className="grid items-center gap-8 border-b border-black/[.08] pb-16 last:border-b-0 md:grid-cols-2"
          >
            <div className={i % 2 === 1 ? "md:order-2" : undefined}>
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
            {pillar.image && (
              <div
                className={
                  "flex justify-center" + (i % 2 === 1 ? " md:order-1" : "")
                }
              >
                <div className="w-full max-w-[280px] overflow-hidden rounded-2xl border border-black/[.08] shadow-xl shadow-black/10 dark:border-white/[.145] dark:shadow-black/50">
                  <Image
                    src={pillar.image.src}
                    alt={pillar.image.alt}
                    width={pillar.image.width}
                    height={pillar.image.height}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

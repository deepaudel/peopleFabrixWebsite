import Image from "next/image";
import { pillars } from "@/content/pillars";

const SLIDE_BACKGROUND = "bg-[#0f172a]";
const ACCENT = "#46e5f9";

export function PillarDetail() {
  return (
    <div>
      {pillars.map((pillar, i) => (
        <div key={pillar.title}>
          <div className="h-3 bg-white" />
          <section className={`py-20 ${SLIDE_BACKGROUND}`}>
            <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-2">
              <div className={i % 2 === 1 ? "md:order-2" : undefined}>
                <h2
                  className="text-2xl font-bold tracking-tight sm:text-3xl"
                  style={{ color: ACCENT }}
                >
                  {pillar.title}
                </h2>
                <p className="mt-4 text-lg text-slate-300">
                  {pillar.summary}
                </p>
                {pillar.bullets.length > 0 && (
                  <>
                    <p className="mt-5 text-base font-medium text-slate-200">
                      {pillar.detail}
                    </p>
                    <ul className="mt-4 grid gap-x-8 gap-y-3 text-base text-slate-300 sm:grid-cols-2">
                      {pillar.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: ACCENT }}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {pillar.bullets.length === 0 && (
                  <p className="mt-3 text-lg text-slate-300">
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
                  <div className="w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/[.15] shadow-xl shadow-black/30">
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
          </section>
        </div>
      ))}
      <div className="h-3 bg-white" />
    </div>
  );
}

import { AudienceIcon } from "@/components/icons/AudienceIcon";
import { audiences } from "@/content/audiences";

const SLIDE_BACKGROUND = "bg-[#0f172a]";
const ACCENT = "#46e5f9";

export function SolutionsByAudience() {
  return (
    <div>
      {audiences.map((a, i) => (
        <div key={a.title}>
          <div className="h-3 bg-white" />
          <section id={a.id} className={`py-20 ${SLIDE_BACKGROUND}`}>
            <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-2">
              <div
                className={
                  "flex justify-center" + (i % 2 === 0 ? " md:order-2" : "")
                }
              >
                <div className="flex h-36 w-36 items-center justify-center rounded-2xl border border-white/[.15] bg-white/[.04] shadow-xl shadow-black/30 sm:h-44 sm:w-44">
                  <AudienceIcon
                    name={a.icon}
                    className="h-16 w-16 sm:h-20 sm:w-20"
                    style={{ color: ACCENT }}
                  />
                </div>
              </div>
              <div>
                <h2
                  className="text-2xl font-bold tracking-tight sm:text-3xl"
                  style={{ color: ACCENT }}
                >
                  {a.title}
                </h2>
                <p className="mt-4 text-lg text-slate-300">{a.summary}</p>
                {a.detail && (
                  <p className="mt-5 text-base font-medium text-slate-200">
                    {a.detail}
                  </p>
                )}
                <ul className="mt-4 grid gap-3 text-base text-slate-300">
                  {a.examples.map((example) => (
                    <li key={example} className="flex items-start gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: ACCENT }}
                      />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      ))}
      <div className="h-3 bg-white" />
    </div>
  );
}

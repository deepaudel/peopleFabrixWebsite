const ACCENT = "#46e5f9";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-[#0f172a] py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        {eyebrow && (
          <p
            className="text-sm font-medium uppercase tracking-wide"
            style={{ color: ACCENT }}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className={
            "text-3xl font-bold tracking-tight text-white sm:text-4xl" +
            (eyebrow ? " mt-2" : "")
          }
        >
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-slate-300">{description}</p>
        )}
      </div>
    </section>
  );
}

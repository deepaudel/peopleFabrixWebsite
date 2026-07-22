import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — People Fabrix",
};

export default function Terms() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="text-3xl font-semibold tracking-tight">Terms of Use</h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Our terms of use are being finalized. Please contact us directly
          with any questions.
        </p>
      </div>
    </main>
  );
}

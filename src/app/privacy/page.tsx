import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — People Fabrix",
};

export default function Privacy() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Our privacy policy is being finalized. Please contact us directly
          with any questions about how we handle data.
        </p>
      </div>
    </main>
  );
}

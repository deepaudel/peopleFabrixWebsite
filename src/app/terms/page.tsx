import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Terms of Use — People Fabrix",
};

export default function Terms() {
  return (
    <main className="flex-1">
      <PageHeader title="Terms of Use" />
      <div className="mx-auto max-w-2xl px-6 py-16">
        <p className="text-zinc-600 dark:text-zinc-400">
          Our terms of use are being finalized. Please contact us directly
          with any questions.
        </p>
      </div>
    </main>
  );
}

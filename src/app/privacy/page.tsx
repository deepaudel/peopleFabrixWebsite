import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy — People Fabrix",
};

export default function Privacy() {
  return (
    <main className="flex-1">
      <PageHeader title="Privacy Policy" />
      <div className="mx-auto max-w-2xl px-6 py-16">
        <p className="text-zinc-600 dark:text-zinc-400">
          Our privacy policy is being finalized. Please contact us directly
          with any questions about how we handle data.
        </p>
      </div>
    </main>
  );
}

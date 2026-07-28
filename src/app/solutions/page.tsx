import { SolutionsByAudience } from "@/components/solutions/SolutionsByAudience";
import { CommonUseCases } from "@/components/solutions/CommonUseCases";
import { ClosingCTA } from "@/components/shared/ClosingCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Solutions — People Fabrix",
  description:
    "Solutions for employees, managers, HR teams, people leaders, and HR technology teams — plus the most common People Fabrix use cases.",
});

export default function Solutions() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-2xl px-6 pt-20 pb-4 text-center sm:pt-28">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Solutions
        </h1>
      </div>
      <SolutionsByAudience />
      <CommonUseCases />
      <ClosingCTA />
    </main>
  );
}

import { SolutionsByAudience } from "@/components/solutions/SolutionsByAudience";
import { CommonUseCases } from "@/components/solutions/CommonUseCases";
import { ClosingCTA } from "@/components/shared/ClosingCTA";
import { PageHeader } from "@/components/shared/PageHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Solutions — People Fabrix",
  description:
    "Solutions for employees, managers, HR teams, people leaders, and HR technology teams — plus the most common People Fabrix use cases.",
});

export default function Solutions() {
  return (
    <main className="flex-1">
      <PageHeader title="Solutions" />
      <SolutionsByAudience />
      <CommonUseCases />
      <ClosingCTA />
    </main>
  );
}

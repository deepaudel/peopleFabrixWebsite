import { SolutionsByAudience } from "@/components/solutions/SolutionsByAudience";
import { ClosingCTA } from "@/components/shared/ClosingCTA";
import { PageHeader } from "@/components/shared/PageHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI for HR Solutions — People Fabrix",
  description:
    "Agentic AI for HR solutions for employees, managers, HR teams, people leaders, and HR technology teams — see how our AI HR agents help each audience.",
  path: "/solutions",
});

export default function Solutions() {
  return (
    <main className="flex-1">
      <PageHeader
        title="Solutions"
        description="How People Fabrix's agentic AI for HR shows up for employees, managers, HR teams, leaders, and the people who run HR technology."
      />
      <SolutionsByAudience />
      <ClosingCTA />
    </main>
  );
}

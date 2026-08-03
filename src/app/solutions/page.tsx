import { SolutionsByAudience } from "@/components/solutions/SolutionsByAudience";
import { ClosingCTA } from "@/components/shared/ClosingCTA";
import { PageHeader } from "@/components/shared/PageHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Solutions — People Fabrix",
  description:
    "Solutions for employees, managers, HR teams, people leaders, and HR technology teams.",
  path: "/solutions",
});

export default function Solutions() {
  return (
    <main className="flex-1">
      <PageHeader
        title="Solutions"
        description="How People Fabrix shows up for employees, managers, HR teams, leaders, and the people who run HR technology."
      />
      <SolutionsByAudience />
      <ClosingCTA />
    </main>
  );
}

import { PlatformHero } from "@/components/platform/PlatformHero";
import { PillarDetail } from "@/components/platform/PillarDetail";
import { PlatformPositioning } from "@/components/platform/PlatformPositioning";
import { ClosingCTA } from "@/components/shared/ClosingCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Platform — People Fabrix",
  description:
    "Cited policy answers from your real handbook, HR record changes confirmed by a human before anything is written, and workforce questions answered in plain English.",
});

export default function Platform() {
  return (
    <main className="flex-1">
      <PlatformHero />
      <PillarDetail />
      <PlatformPositioning />
      <ClosingCTA />
    </main>
  );
}

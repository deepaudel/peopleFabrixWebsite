import type { Metadata } from "next";
import { PlatformHero } from "@/components/platform/PlatformHero";
import { PillarDetail } from "@/components/platform/PillarDetail";
import { PlatformPositioning } from "@/components/platform/PlatformPositioning";
import { ClosingCTA } from "@/components/shared/ClosingCTA";

export const metadata: Metadata = {
  title: "Platform — People Fabrix",
  description:
    "Unified people data, an AI employee assistant, AI-first HR processes, and people insights — one platform for AI-powered HR.",
};

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

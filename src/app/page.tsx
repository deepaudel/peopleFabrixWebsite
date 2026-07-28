import { Hero } from "@/components/home/Hero";
import { DemoVideo } from "@/components/home/DemoVideo";
import { PillarDetail } from "@/components/platform/PillarDetail";
import { PlatformPositioning } from "@/components/platform/PlatformPositioning";
import { WhyPeopleFabrix } from "@/components/home/WhyPeopleFabrix";
import { TrustSection } from "@/components/home/TrustSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ClosingCTA } from "@/components/shared/ClosingCTA";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <DemoVideo />
      <PillarDetail />
      <PlatformPositioning />
      <WhyPeopleFabrix />
      <TrustSection />
      <HowItWorks />
      <ClosingCTA />
    </main>
  );
}

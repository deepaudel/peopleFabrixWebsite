import { Hero } from "@/components/home/Hero";
import { DemoVideo } from "@/components/home/DemoVideo";
import { ValueProp } from "@/components/home/ValueProp";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhyPeopleFabrix } from "@/components/home/WhyPeopleFabrix";
import { TrustSection } from "@/components/home/TrustSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ClosingCTA } from "@/components/shared/ClosingCTA";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <DemoVideo />
      <ValueProp />
      <WhatWeDo />
      <WhyPeopleFabrix />
      <TrustSection />
      <HowItWorks />
      <ClosingCTA />
    </main>
  );
}

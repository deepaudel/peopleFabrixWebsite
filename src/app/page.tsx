import { Hero } from "@/components/home/Hero";
import { ValueProp } from "@/components/home/ValueProp";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhyPeopleFabrix } from "@/components/home/WhyPeopleFabrix";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ClosingCTA } from "@/components/shared/ClosingCTA";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ValueProp />
      <WhatWeDo />
      <WhyPeopleFabrix />
      <HowItWorks />
      <ClosingCTA />
    </main>
  );
}

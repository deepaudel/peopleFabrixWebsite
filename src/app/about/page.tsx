import { AboutContent } from "@/components/about/AboutContent";
import { ClosingCTA } from "@/components/shared/ClosingCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us — People Fabrix",
  description:
    "People Fabrix brings together people data, HR expertise, and AI to create more connected employee experiences and more intelligent people processes.",
});

export default function About() {
  return (
    <main className="flex-1">
      <AboutContent />
      <ClosingCTA />
    </main>
  );
}

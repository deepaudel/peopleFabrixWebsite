import { AboutContent } from "@/components/about/AboutContent";
import { ClosingCTA } from "@/components/shared/ClosingCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us — People Fabrix",
  description:
    "People Fabrix is agentic AI for HR, built by an HR technology veteran to bring people data, HR expertise, and AI together for more connected employee experiences.",
  path: "/about",
});

export default function About() {
  return (
    <main className="flex-1">
      <AboutContent />
      <ClosingCTA />
    </main>
  );
}

import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact — People Fabrix",
  description:
    "Talk to People Fabrix about your AI employee assistant, HR service delivery, or workforce data strategy.",
  path: "/contact",
});

export default function Contact() {
  return (
    <main className="flex-1 pb-20">
      <ContactHero />
      <div className="mx-auto max-w-xl px-6 pt-12">
        <ContactForm />
      </div>
    </main>
  );
}

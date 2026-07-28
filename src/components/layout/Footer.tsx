import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f172a] py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-2">
        <div>
          <Image
            src="/logo.png"
            alt="People Fabrix"
            width={1899}
            height={335}
            className="h-7 w-auto"
          />
          <p className="mt-3 max-w-sm text-sm text-slate-400">
            People data and AI working together to create better employee
            experiences and smarter HR processes.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-400 sm:items-end">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
          <p>&copy; {new Date().getFullYear()} People Fabrix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f172a]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="People Fabrix"
            width={1896}
            height={335}
            priority
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#0f172a] transition-opacity hover:opacity-90"
        >
          Request a Demo
        </Link>
      </div>
    </header>
  );
}

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
    <header className="sticky top-0 z-50 border-b border-black/[.08] bg-[var(--background)]/80 backdrop-blur dark:border-white/[.1]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          People<span className="text-blue-600 dark:text-blue-400">Fabrix</span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[var(--foreground)]">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-90"
        >
          Request a Demo
        </Link>
      </div>
    </header>
  );
}

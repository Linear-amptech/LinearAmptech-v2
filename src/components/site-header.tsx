import Image from "next/image";
import Link from "next/link";
import { Cpu } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#products", label: "Products" },
  { href: "/team", label: "Team" },
  { href: "/careers", label: "Careers" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-slate-200/70 bg-white/86 shadow-[0_12px_40px_rgba(2,6,23,0.08)] backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="flex items-center text-white"
          aria-label="Linear Amptech home"
        >
          <span className="grid h-14 w-[100px] place-items-center">
            <Image
              src="/assets/linear-amptech-logo.png"
              alt="Linear Amptech logo"
              width={96}
              height={56}
              className="h-14 w-auto object-contain"
              priority
            />
          </span>
        </Link>
        <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-cyan-700"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/#contact"
          className="grid size-10 place-items-center rounded-lg border border-cyan-700/20 bg-cyan-50 text-cyan-800 transition-colors hover:bg-cyan-100 md:hidden"
          aria-label="Contact Linear Amptech"
        >
          <Cpu className="size-4" aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}

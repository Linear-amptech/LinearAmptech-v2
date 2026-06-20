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
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-[#03060d]/72 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="flex items-center text-white"
          aria-label="Linear Amptech home"
        >
          <span className="grid h-12 w-[82px] place-items-center rounded-md border border-cyan-300/30 bg-white/95 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
            <Image
              src="/assets/linear-amptech-logo.png"
              alt="Linear Amptech logo"
              width={74}
              height={43}
              className="h-11 w-auto object-contain"
              priority
            />
          </span>
        </Link>
        <div className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.18em] text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-cyan-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/#contact"
          className="grid size-9 place-items-center rounded-lg border border-cyan-200/25 bg-cyan-200/10 text-cyan-100 transition-colors hover:bg-cyan-200/20 md:hidden"
          aria-label="Contact Linear Amptech"
        >
          <Cpu className="size-4" aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}

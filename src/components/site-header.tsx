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
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-cyan-300/20 bg-[#02050a]/85 shadow-[0_0_34px_rgba(34,211,238,0.16)] backdrop-blur-xl">
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
              className="h-14 w-auto object-contain brightness-0 invert"
              priority
            />
          </span>
        </Link>
        <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 md:flex">
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
          className="grid size-10 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-100 transition-colors hover:bg-cyan-300/20 md:hidden"
          aria-label="Contact Linear Amptech"
        >
          <Cpu className="size-4" aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}

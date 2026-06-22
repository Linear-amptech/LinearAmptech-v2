import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Cpu } from "lucide-react";

import { products } from "@/components/landing/data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#products", label: "Products" },
  { href: "/team", label: "Team" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-cyan-300/0 bg-[#02050a]/85  backdrop-blur-sm">
      <nav
        className="mx-auto flex container items-center justify-between px-5 py-3 lg:px-8"
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
              className="h-14 w-auto object-contain "
              priority
            />
          </span>
        </Link>
        <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 md:flex">
          {navItems.map((item) =>
            item.label === "Products" ? (
              <div key={item.href} className="group relative py-3">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-cyan-100"
                >
                  {item.label}
                  <ChevronDown
                    className="size-3.5 transition-transform duration-300 group-hover:rotate-180"
                    aria-hidden="true"
                  />
                </Link>
                <div className="pointer-events-none absolute left-1/2 top-full w-[360px] -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="rounded-lg border border-cyan-200/20 bg-[#06101c]/95 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        className="block rounded-md px-4 py-3 transition-colors hover:bg-cyan-200/10 hover:text-cyan-100"
                      >
                        <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cyan-200/75">
                          {product.category}
                        </span>
                        <span className="mt-1 block text-sm font-semibold normal-case tracking-normal text-white">
                          {product.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-cyan-100"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
        <Link
          href="/contact"
          className="grid size-10 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-100 transition-colors hover:bg-cyan-300/20 md:hidden"
          aria-label="Contact Linear Amptech"
        >
          <Cpu className="size-4" aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}

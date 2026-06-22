"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Cpu, Menu, X } from "lucide-react";

import { products } from "@/components/landing/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openProducts = () => {
    clearCloseTimer();
    setProductsOpen(true);
  };

  const closeProductsSoon = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setProductsOpen(false), 160);
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
        setMobileOpen(false);
        setMobileProductsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      clearCloseTimer();
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-200/10 bg-[#02050a]/88 shadow-[0_18px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl">
      <nav
        className="container mx-auto flex h-20 items-center justify-between px-5 lg:px-8"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="flex items-center text-white"
          aria-label="Linear Amptech home"
          onClick={closeMobileMenu}
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
          <Link
            href="/#products"
            className="inline-flex items-center gap-1.5 py-7 transition-colors hover:text-cyan-100"
            onMouseEnter={openProducts}
            onMouseLeave={closeProductsSoon}
            onFocus={openProducts}
            aria-expanded={productsOpen}
            aria-haspopup="menu"
          >
            Products
            <ChevronDown
              className={cn(
                "size-3.5 transition-transform duration-300",
                productsOpen && "rotate-180",
              )}
              aria-hidden="true"
            />
          </Link>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-7 transition-colors hover:text-cyan-100"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div
          className={cn(
            "pointer-events-none absolute left-1/2 top-full hidden w-[min(720px,calc(100vw-2.5rem))] -translate-x-1/2 origin-top translate-y-4 scale-[0.98] opacity-0 transition-all duration-300 ease-out md:block",
            productsOpen &&
              "pointer-events-auto translate-y-0 scale-100 opacity-100",
          )}
          onMouseEnter={openProducts}
          onMouseLeave={closeProductsSoon}
          onFocus={openProducts}
          onBlur={closeProductsSoon}
          role="menu"
        >
          <div className="mt-1 overflow-hidden rounded-lg border border-cyan-200/18 bg-[#04101d]/96 shadow-[0_34px_110px_rgba(0,0,0,0.56)] backdrop-blur-2xl">
            <div className="border-b border-white/10 bg-white/[0.035] px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                RF Products
              </p>
              <p className="mt-1 text-sm normal-case tracking-normal text-slate-400">
                Direct links to product details and specifications.
              </p>
            </div>
            <div className="grid gap-1 p-2 sm:grid-cols-2">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group/item flex gap-3 rounded-md px-4 py-4 transition-all duration-250 hover:bg-cyan-200/10 focus:bg-cyan-200/10 focus:outline-none"
                  role="menuitem"
                  onClick={() => setProductsOpen(false)}
                >
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-lg border border-cyan-200/18 bg-cyan-200/8 text-cyan-100 transition-colors group-hover/item:border-cyan-100/45 group-hover/item:bg-cyan-200/14">
                    <product.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold normal-case tracking-normal text-white">
                      {product.name}
                    </span>
                    <span className="mt-1 block text-xs font-medium normal-case tracking-normal text-slate-400">
                      {product.category}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          className="border-cyan-300/25 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/20 md:hidden"
          onClick={() => setMobileOpen((current) => !current)}
          aria-label={
            mobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </Button>
      </nav>

      <div
        className={cn(
          "container mx-auto overflow-hidden px-5 transition-[max-height,opacity,transform] duration-300 ease-out lg:px-8 md:hidden",
          mobileOpen
            ? "max-h-[calc(100dvh-5rem)] translate-y-0 opacity-100"
            : "max-h-0 -translate-y-2 opacity-0",
        )}
      >
        <div className="mb-4 rounded-lg border border-cyan-200/14 bg-[#04101d]/96 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.16em] text-slate-100 transition-colors hover:bg-cyan-200/10"
            onClick={() => setMobileProductsOpen((current) => !current)}
            aria-expanded={mobileProductsOpen}
          >
            Products
            <ChevronDown
              className={cn(
                "size-4 transition-transform duration-300",
                mobileProductsOpen && "rotate-180",
              )}
              aria-hidden="true"
            />
          </button>
          <div
            className={cn(
              "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out",
              mobileProductsOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="min-h-0">
              <div className="grid gap-1 border-t border-white/10 px-1 py-2">
                {products.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="flex gap-3 rounded-md px-3 py-3 transition-colors hover:bg-cyan-200/10"
                    onClick={closeMobileMenu}
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-cyan-200/18 bg-cyan-200/8 text-cyan-100">
                      <product.icon className="size-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">
                        {product.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-slate-400">
                        {product.category}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-100 transition-colors hover:bg-cyan-200/10"
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-cyan-200/35 bg-cyan-200/12 px-4 py-3 text-sm font-semibold text-cyan-50 transition-colors hover:bg-cyan-200/20"
            onClick={closeMobileMenu}
          >
            <Cpu className="size-4" aria-hidden="true" />
            Contact Linear Amptech
          </Link>
        </div>
      </div>
    </header>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  BrainCircuit,
  Cpu,
  Package,
  RadioTower,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { products, cyberPhysicalProducts } from "@/components/landing/data";
import { rfPowerAmplifierProducts } from "@/components/products/rf-power-amplifiers-data";
import { Button } from "@/components/ui/button";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#technology", label: "Technology" },
  { href: "/#applications", label: "Applications" },
  { href: "/team", label: "Team" },
  { href: "/careers", label: "Careers" },
];

type ProductCategoryId = "rf" | "ic" | "cps";

/* ------------------------------------------------------------------ */
/* Scroll state                                                        */
/* ------------------------------------------------------------------ */

function useScrolled(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);

  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    const id = requestAnimationFrame(onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(id);
    };
  }, [onScroll]);

  return scrolled;
}

function useCondensedHeader() {
  const [condensed, setCondensed] = React.useState(false);

  React.useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateHeaderSize = () => {
      const currentScrollY = window.scrollY;

      setCondensed((current) => {
        if (currentScrollY <= 24) {
          return false;
        }

        if (currentScrollY < lastScrollY) {
          return false;
        }

        if (currentScrollY > lastScrollY) {
          return true;
        }

        return current;
      });

      lastScrollY = currentScrollY;
    };

    updateHeaderSize();
    window.addEventListener("scroll", updateHeaderSize, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderSize);
  }, []);

  return condensed;
}

/* ------------------------------------------------------------------ */
/* Products mega-menu item                                             */
/* ------------------------------------------------------------------ */

function ProductMenuLink({
  href,
  title,
  onNavigate,
}: {
  href: string;
  title: string;
  onNavigate?: () => void;
}) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        onClick={onNavigate}
        className="group/item flex items-center justify-between gap-3 py-3 text-sm font-medium text-[color:var(--color-text-muted)] transition-colors hover:text-[color:var(--color-text)] focus:text-[color:var(--color-text)] focus:outline-none"
      >
        <span>{title}</span>
        <ArrowRight
          className="size-4 shrink-0 -translate-x-2 text-[#0b1220] opacity-0 transition-[opacity,transform] duration-300 group-hover/item:translate-x-1 group-hover/item:opacity-100 group-focus/item:translate-x-1 group-focus/item:opacity-100"
          aria-hidden
        />
      </Link>
    </NavigationMenuLink>
  );
}

function ProductCategoryLink({
  href,
  title,
  icon: Icon,
  active,
  onSelect,
  onNavigate,
}: {
  href: string;
  title: string;
  icon: LucideIcon;
  active: boolean;
  onSelect: () => void;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group/category flex w-full items-center justify-between gap-3 py-3 text-left text-sm font-semibold transition-colors",
        active
          ? "text-[color:var(--color-text)]"
          : "text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]",
      )}
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onClick={onNavigate}
    >
      <span className="flex items-center gap-2.5">
        <Icon className="size-4 text-[#0b1220]" aria-hidden="true" />
        {title}
      </span>
      {active ? (
        <ArrowRight
          className="size-4 shrink-0 translate-x-1 text-[#0b1220] transition-transform duration-300"
          aria-hidden
        />
      ) : null}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile menu (portal)                                                */
/* ------------------------------------------------------------------ */

function MobileMenu({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div
      id="mobile-menu"
      className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto border-t border-[color:var(--color-border)] bg-[color:var(--color-bg)]/95 backdrop-blur-xl lg:hidden"
    >
      <div className="animate-in fade-in slide-in-from-top-2 flex size-full flex-col gap-6 p-5 ease-out">
        {children}
      </div>
    </div>,
    document.body,
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [activeProductCategory, setActiveProductCategory] =
    React.useState<ProductCategoryId>("rf");
  const [desktopMenuValue, setDesktopMenuValue] = React.useState("");
  const scrolled = useScrolled(12);
  const condensed = useCondensedHeader();
  const pathname = usePathname();

  // Solid chrome when scrolled past the hero, or when the mobile sheet is open.
  const solid = scrolled || open;

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  React.useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMobile = () => setOpen(false);
  const closeDesktopMenu = () => setDesktopMenuValue("");

  // Products shown in the right panel for the active category.
  const productPanel = {
    rf: {
      label: "RF Power Amplifiers",
      items: rfPowerAmplifierProducts.map((product) => ({
        href: `/products/rf/power-amplifiers/${product.slug}`,
        title: product.partNumber,
      })),
    },
    ic: {
      label: "IC Chips and Modules",
      items: products.map((product) => ({
        href: `/products/${product.slug}`,
        title: product.name,
      })),
    },
    cps: {
      label: "Cyber-Physical Systems & AI",
      items: cyberPhysicalProducts.map((product) => ({
        href: `/products/${product.slug}`,
        title: product.name,
      })),
    },
  }[activeProductCategory];

  const isActive = (href: string) =>
    href.startsWith("/#") ? false : pathname === href;

  // Shared nav-link classes. Active page = stronger text color (no underline).
  const deskLink = (active: boolean) =>
    cn(
      "inline-flex h-9 items-center px-1 text-sm font-medium transition-colors",
      solid
        ? active
          ? "text-[color:var(--color-text)]"
          : "text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]"
        : active
          ? "text-white"
          : "text-white/75 hover:text-white",
    );

  return (
    <header
      style={
        {
          "--site-header-height": condensed && !open ? "3rem" : "4rem",
        } as React.CSSProperties
      }
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-300",
        solid
          ? "border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)]/85 shadow-[0_8px_30px_rgb(11_18_32_/_0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      {/* Legibility scrim while transparent over the hero */}
      {!solid ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 via-black/15 to-transparent"
        />
      ) : null}

      <nav
        className={cn(
          "container relative mx-auto flex items-center justify-between gap-4 px-4 transition-[height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:px-4",
          condensed && !open ? "h-13" : "h-16",
        )}
      >
        <div className="flex items-center">
          <Link
            href="/"
            aria-label="Linear-AmpTech home"
            onClick={closeMobile}
            className="flex items-center"
          >
            <Image
              src="/assets/linear-amptech-logo.png"
              alt="Linear-AmpTech logo"
              width={104}
              height={58}
              className={cn(
                "w-auto object-contain transition-[height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                condensed && !open ? "h-11" : "h-13",
              )}
              priority
            />
          </Link>
        </div>

        <NavigationMenu
          value={desktopMenuValue}
          onValueChange={setDesktopMenuValue}
          className="absolute left-1/2 hidden -translate-x-1/2 lg:flex"
        >
          <NavigationMenuList className="gap-5 xl:gap-6">
            <NavigationMenuItem value="products">
              <NavigationMenuLink asChild>
                <Link href="/" className={deskLink(isActive("/"))}>
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "group h-9 gap-1 bg-transparent px-1 text-sm font-medium hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent cursor-pointer",
                  solid
                    ? "text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)] focus:text-[color:var(--color-text)] data-[state=open]:text-[color:var(--color-text)]"
                    : "text-white/75 hover:text-white focus:text-white data-[state=open]:text-white",
                )}
              >
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-transparent p-0">
                <div className="grid w-[min(52rem,calc(100vw-2rem))] md:grid-cols-[0.38fr_0.62fr]">
                  <div className="border-b border-[color:var(--color-border)] p-5 md:border-b-0 md:border-r">
                    <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                      Product categories
                    </p>
                    <div className="mt-3 divide-y divide-[color:var(--color-border)]">
                      <ProductCategoryLink
                        href="/products"
                        title="All Products"
                        icon={Package}
                        active={false}
                        onSelect={() => undefined}
                        onNavigate={closeDesktopMenu}
                      />
                      <ProductCategoryLink
                        href="/products/rf/power-amplifiers"
                        title="RF Power Amplifiers"
                        icon={RadioTower}
                        active={activeProductCategory === "rf"}
                        onSelect={() => setActiveProductCategory("rf")}
                        onNavigate={closeDesktopMenu}
                      />
                      <ProductCategoryLink
                        href="/products"
                        title="IC Chips and Modules"
                        icon={Cpu}
                        active={activeProductCategory === "ic"}
                        onSelect={() => setActiveProductCategory("ic")}
                        onNavigate={closeDesktopMenu}
                      />
                      <ProductCategoryLink
                        href="/products/wait-system"
                        title="Cyber-Physical Systems & AI"
                        icon={BrainCircuit}
                        active={activeProductCategory === "cps"}
                        onSelect={() => setActiveProductCategory("cps")}
                        onNavigate={closeDesktopMenu}
                      />
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                      {productPanel.label}
                    </p>
                    <div className="mt-3 divide-y divide-[color:var(--color-border)]">
                      {productPanel.items.map((item) => (
                        <ProductMenuLink
                          key={item.href}
                          href={item.href}
                          title={item.title}
                          onNavigate={closeDesktopMenu}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {navLinks.slice(1).map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className={deskLink(isActive(item.href))}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Link
          href="/contact"
          className={cn(
            "group hidden h-10 items-center gap-2 px-1 text-sm font-semibold transition-colors lg:inline-flex",
            solid
              ? "text-[color:var(--color-text)] hover:text-[color:var(--color-text-muted)]"
              : "text-white hover:text-white/75",
          )}
        >
          Contact Us
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </Link>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/contact"
            onClick={closeMobile}
            className={cn(
              "group inline-flex h-9 items-center gap-1.5 px-1 text-xs font-semibold transition-colors",
              solid
                ? "text-[color:var(--color-text)] hover:text-[color:var(--color-text-muted)]"
                : "text-white hover:text-white/75",
            )}
          >
            Contact
            <ArrowRight
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
          <Button
            size="icon-lg"
            variant="outline"
            className={cn(
              "transition-colors",
              solid
                ? "border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text)]"
                : "border-white/25 bg-white/10 text-white hover:bg-white/20",
            )}
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <MenuToggleIcon open={open} className="size-5" duration={300} />
          </Button>
        </div>
      </nav>

      <MobileMenu open={open}>
        <div className="flex flex-col gap-1">
          <Link
            href="/"
            onClick={closeMobile}
            className="rounded-xl px-3 py-3 text-sm font-semibold text-[color:var(--color-text)] transition-colors hover:bg-[color:var(--color-surface-soft)]"
          >
            Home
          </Link>
          <p className="px-1 pb-1 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
            Products
          </p>
          <div className="grid gap-2">
            <ProductCategoryLink
              href="/products"
              title="All Products"
              icon={Package}
              active={false}
              onSelect={() => undefined}
              onNavigate={closeMobile}
            />
            <ProductCategoryLink
              href="/products/rf/power-amplifiers"
              title="RF Power Amplifiers"
              icon={RadioTower}
              active={activeProductCategory === "rf"}
              onSelect={() => setActiveProductCategory("rf")}
              onNavigate={closeMobile}
            />
            <ProductCategoryLink
              href="/products"
              title="IC Chips and Modules"
              icon={Cpu}
              active={activeProductCategory === "ic"}
              onSelect={() => setActiveProductCategory("ic")}
              onNavigate={closeMobile}
            />
            <ProductCategoryLink
              href="/products/wait-system"
              title="Cyber-Physical Systems & AI"
              icon={BrainCircuit}
              active={activeProductCategory === "cps"}
              onSelect={() => setActiveProductCategory("cps")}
              onNavigate={closeMobile}
            />
          </div>
          <div className="border-y border-[color:var(--color-border)]">
            <div className="divide-y divide-[color:var(--color-border)]">
              {productPanel.items.map((item) => (
                <ProductMenuLink
                  key={item.href}
                  href={item.href}
                  title={item.title}
                  onNavigate={closeMobile}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid border-t border-[color:var(--color-border)] pt-3">
          {navLinks.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              className={cn(
                "rounded-xl px-3 py-3 text-sm font-semibold transition-colors hover:bg-[color:var(--color-surface-soft)]",
                isActive(item.href)
                  ? "text-[color:var(--color-primary-deep)]"
                  : "text-[color:var(--color-text)]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </MobileMenu>
    </header>
  );
}

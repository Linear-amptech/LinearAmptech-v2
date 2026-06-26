"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { ArrowRight, Moon, Sun } from "lucide-react";

import { products } from "@/components/landing/data";
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
  { href: "/#technology", label: "Technology" },
  { href: "/#applications", label: "Applications" },
  { href: "/#company", label: "Company" },
  { href: "/team", label: "Team" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

/* ------------------------------------------------------------------ */
/* Theme toggle (light/dark) — preserves existing storage + behavior   */
/* ------------------------------------------------------------------ */

type Theme = "light" | "dark";
const themeStorageKey = "linearamptech-theme";
const themeChangeEvent = "linearamptech-theme-change";

function getCurrentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem(themeStorageKey, theme);
  window.dispatchEvent(new Event(themeChangeEvent));
}

function subscribeToThemeChange(onStoreChange: () => void) {
  window.addEventListener(themeChangeEvent, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(themeChangeEvent, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function ThemeToggle({ solid }: { solid: boolean }) {
  const theme = React.useSyncExternalStore(
    subscribeToThemeChange,
    getCurrentTheme,
    () => "light",
  );

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-lg"
      className={cn(
        "rounded-full transition-colors",
        solid
          ? "border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text)] hover:bg-[color:var(--color-surface-soft)]"
          : "border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
      )}
      onClick={() => applyTheme(theme === "dark" ? "light" : "dark")}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      <Sun className={cn("size-4", theme === "dark" && "hidden")} aria-hidden />
      <Moon
        className={cn("size-4", theme === "light" && "hidden")}
        aria-hidden
      />
    </Button>
  );
}

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

/* ------------------------------------------------------------------ */
/* Products mega-menu item                                             */
/* ------------------------------------------------------------------ */

function ProductListItem({
  href,
  icon: Icon,
  title,
  description,
  onNavigate,
}: {
  href: string;
  icon: (typeof products)[number]["icon"];
  title: string;
  description: string;
  onNavigate?: () => void;
}) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        onClick={onNavigate}
        className="group/item flex flex-row gap-x-3 rounded-xl p-3 transition-colors hover:bg-[color:var(--color-surface-soft)] focus:bg-[color:var(--color-surface-soft)] focus:outline-none"
      >
        <div className="flex aspect-square size-11 shrink-0 items-center justify-center rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] text-[color:var(--color-text-muted)] transition-colors group-hover/item:text-[color:var(--color-text)]">
          <Icon className="size-5" aria-hidden />
        </div>
        <div className="flex flex-col items-start justify-center">
          <span className="font-heading text-sm font-semibold text-[color:var(--color-text)]">
            {title}
          </span>
          <span className="line-clamp-2 text-xs leading-5 text-[color:var(--color-text-muted)]">
            {description}
          </span>
        </div>
      </Link>
    </NavigationMenuLink>
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
      className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto border-t border-[color:var(--color-border)] bg-[color:var(--color-bg)]/95 backdrop-blur-xl md:hidden"
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
  const scrolled = useScrolled(12);
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
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-300",
        solid
          ? "border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)]/85 shadow-[0_8px_30px_rgb(11_18_32_/_0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      {/* Legibility scrim while transparent over the dark hero */}
      {!solid ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 via-black/15 to-transparent"
        />
      ) : null}

      <nav className="container relative mx-auto flex h-16 items-center justify-between gap-4 px-5 lg:px-8">
        {/* Left: logo + desktop nav */}
        <div className="flex items-center gap-7">
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
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "group h-9 gap-1 bg-transparent px-1 text-sm font-medium hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent",
                    solid
                      ? "text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)] focus:text-[color:var(--color-text)] data-[state=open]:text-[color:var(--color-text)]"
                      : "text-white/75 hover:text-white focus:text-white data-[state=open]:text-white",
                  )}
                >
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-transparent p-0">
                  <div className="w-[36rem] rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-2 shadow-[0_24px_70px_rgb(11_18_32_/_0.16)]">
                    <ul className="grid grid-cols-2 gap-1">
                      {products.map((product) => (
                        <li key={product.slug}>
                          <ProductListItem
                            href={`/products/${product.slug}`}
                            icon={product.icon}
                            title={product.name}
                            description={product.description}
                          />
                        </li>
                      ))}
                    </ul>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/products"
                        className="mt-1 flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-[color:var(--color-text)] transition-colors hover:bg-[color:var(--color-surface-soft)]"
                      >
                        View all products
                        <ArrowRight className="size-4" aria-hidden />
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {navLinks.map((item) => (
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
        </div>

        {/* Right: theme toggle (desktop) */}
        <div className="hidden md:flex">
          <ThemeToggle solid={solid} />
        </div>

        {/* Right: theme toggle + hamburger (mobile) */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle solid={solid} />
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
          <p className="px-1 pb-1 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
            Products
          </p>
          {products.map((product) => (
            <ProductListItem
              key={product.slug}
              href={`/products/${product.slug}`}
              icon={product.icon}
              title={product.name}
              description={product.description}
              onNavigate={closeMobile}
            />
          ))}
          <Link
            href="/products"
            onClick={closeMobile}
            className="mt-1 flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[color:var(--color-text)]"
          >
            View all products
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="grid border-t border-[color:var(--color-border)] pt-3">
          {navLinks.map((item) => (
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

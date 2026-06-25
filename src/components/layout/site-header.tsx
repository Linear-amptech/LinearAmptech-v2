"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/#technology", label: "Technology" },
  { href: "/#applications", label: "Applications" },
  { href: "/#company", label: "Company" },
  { href: "/team", label: "Team" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

type Theme = "light" | "dark";
const themeStorageKey = "linearamptech-theme";
const themeChangeEvent = "linearamptech-theme-change";

function getCurrentTheme(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

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

function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(
    subscribeToThemeChange,
    getCurrentTheme,
    () => "light",
  );

  const toggleTheme = () => {
    applyTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-lg"
      className={cn(
        "border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text)] rounded-full  hover:bg-[color:var(--color-surface-soft)] cursor-pointer",
        className,
      )}
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      <Sun
        className={cn("size-4", theme === "dark" && "hidden")}
        aria-hidden="true"
      />
      <Moon
        className={cn("size-4", theme === "light" && "hidden")}
        aria-hidden="true"
      />
    </Button>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCondensed, setIsCondensed] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateHeaderState = () => {
      const currentScrollY = window.scrollY;

      setIsCondensed((current) => {
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

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)] backdrop-blur-xl">
      <nav
        className={cn(
          "container mx-auto flex items-center justify-between px-5 transition-[height,padding] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:px-8",
          isCondensed ? "h-16" : "h-20",
        )}
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="flex items-center"
          aria-label="Linear-AmpTech home"
          onClick={closeMobileMenu}
        >
          <span className="grid h-12 w-[110px] place-items-center">
            <Image
              src="/assets/linear-amptech-logo.png"
              alt="Linear-AmpTech logo"
              width={104}
              height={58}
              className={cn(
                "w-auto object-contain transition-[height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isCondensed ? "h-12" : "h-14",
              )}
              priority
            />
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-[color:var(--color-text-muted)] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[color:var(--color-primary-deep)]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text)] hover:border-[color:var(--color-primary)] hover:bg-[color:var(--color-surface-soft)]"
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
        </div>
      </nav>

      <div
        className={cn(
          "container mx-auto overflow-hidden px-5 transition-[max-height,opacity,transform] duration-300 ease-out lg:px-8 md:hidden",
          mobileOpen
            ? isCondensed
              ? "max-h-[calc(100dvh-4rem)] translate-y-0 opacity-100"
              : "max-h-[calc(100dvh-5rem)] translate-y-0 opacity-100"
            : "max-h-0 -translate-y-2 opacity-0",
        )}
      >
        <div className="mb-4 grid gap-1 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-2 shadow-[var(--shadow-card)]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-[color:var(--color-text)] transition-colors hover:bg-[color:var(--color-surface-soft)] hover:text-[color:var(--color-primary-deep)]"
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

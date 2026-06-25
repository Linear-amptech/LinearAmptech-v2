"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

import { productMenuGroups } from "@/components/products/rf-power-amplifiers-data";
import { cn } from "@/lib/utils";

export function ProductsMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative hidden md:block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-2 text-sm font-medium transition-colors",
          isOpen
            ? "text-[color:var(--color-primary-deep)]"
            : "text-[color:var(--color-text-muted)] hover:text-[color:var(--color-primary-deep)]",
        )}
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        Products
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>

      <div
        className={cn(
          "absolute left-0 top-full z-50 w-[520px] max-w-[calc(100vw-2rem)] pt-1 transition-[opacity,transform] duration-200 ease-out",
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0",
        )}
      >
        <div
          className={cn(
            "overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3 shadow-[0_18px_54px_rgb(11_18_32_/_0.14)] transition-transform duration-200 ease-out",
            isOpen ? "scale-100" : "scale-[0.99]",
          )}
          role="menu"
        >
          {productMenuGroups.map((group) => (
            <div key={group.id}>
              <Link
                href={group.href}
                className="flex items-center justify-between rounded-xl px-3 py-3 font-heading text-base font-bold text-[color:var(--color-text)] transition-colors hover:bg-[color:var(--color-surface-soft)]"
                onClick={() => setIsOpen(false)}
              >
                {group.title}
                <ChevronRight
                  className="size-4 text-[color:var(--color-primary-deep)]"
                  aria-hidden="true"
                />
              </Link>

              {group.panels.map((panel) => (
                <div
                  key={panel.title}
                  className="mt-1 border-t border-[color:var(--color-border)] pt-2"
                >
                  <Link
                    href={panel.href}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:bg-[color:var(--color-surface-soft)]"
                    onClick={() => setIsOpen(false)}
                  >
                    {panel.title}
                  </Link>
                  <div className="grid grid-cols-2 gap-1 pt-1">
                    {panel.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-lg px-3 py-2 text-sm font-medium text-[color:var(--color-text-muted)] transition-colors hover:bg-[color:var(--color-surface-soft)] hover:text-[color:var(--color-text)]"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

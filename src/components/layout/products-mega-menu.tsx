"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

import { productMenuGroups } from "@/components/products/rf-power-amplifiers-data";
import { cn } from "@/lib/utils";

export function ProductsMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeGroupId, setActiveGroupId] = useState(productMenuGroups[0]?.id);

  const activeGroup =
    productMenuGroups.find((group) => group.id === activeGroupId) ??
    productMenuGroups[0];

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
        aria-haspopup="dialog"
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

      {isOpen ? (
        <div className="absolute left-1/2 top-[calc(100%+1rem)] z-50 w-[min(1100px,calc(100vw-3rem))] -translate-x-1/2 overflow-hidden rounded-[28px] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_28px_90px_rgb(11_18_32_/_0.18)]">
          <div className="grid min-h-[360px] grid-cols-[280px_1fr]">
            <div className="border-r border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-6">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
                Product Families
              </p>
              <div className="space-y-2">
                {productMenuGroups.map((group) => {
                  const isActive = group.id === activeGroup.id;

                  return (
                    <button
                      key={group.id}
                      type="button"
                      onMouseEnter={() => setActiveGroupId(group.id)}
                      onFocus={() => setActiveGroupId(group.id)}
                      onClick={() => setActiveGroupId(group.id)}
                      className={cn(
                        "w-full rounded-2xl border px-4 py-4 text-left transition-colors",
                        isActive
                          ? "border-[color:var(--color-primary-deep)] bg-[color:var(--color-surface)]"
                          : "border-transparent bg-transparent hover:bg-[color:var(--color-surface)]",
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-heading text-lg font-bold leading-6 text-[color:var(--color-text)]">
                            {group.title}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-[color:var(--color-text-muted)]">
                            {group.description}
                          </p>
                        </div>
                        <ChevronRight
                          className={cn(
                            "mt-1 size-4 shrink-0 text-[color:var(--color-primary-deep)] transition-transform",
                            isActive && "translate-x-1",
                          )}
                          aria-hidden="true"
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-8">
              <div className="max-w-3xl">
                {activeGroup.panels.map((panel) => (
                  <section key={panel.title}>
                    <div className="flex items-start justify-between gap-4 border-b border-[color:var(--color-border)] pb-6">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
                          Product Line
                        </p>
                        <h3 className="mt-3 font-heading text-3xl font-bold text-[color:var(--color-text)]">
                          {panel.title}
                        </h3>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-[color:var(--color-text-muted)]">
                          {panel.description}
                        </p>
                      </div>
                      <Link
                        href={panel.href}
                        className="rounded-full border border-[color:var(--color-border)] px-4 py-2 text-sm font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:border-[color:var(--color-primary-deep)] hover:bg-[color:var(--color-surface-soft)]"
                        onClick={() => setIsOpen(false)}
                      >
                        View Catalog
                      </Link>
                    </div>

                    <div className="grid gap-3 py-6 lg:grid-cols-2">
                      {panel.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-4 py-4 transition-colors hover:border-[color:var(--color-primary-deep)] hover:bg-[color:var(--color-surface)]"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="font-heading text-lg font-bold text-[color:var(--color-text)]">
                                {link.label}
                              </p>
                              <p className="mt-2 text-sm leading-6 text-[color:var(--color-text-muted)]">
                                {link.meta}
                              </p>
                            </div>
                            <ChevronRight
                              className="mt-1 size-4 shrink-0 text-[color:var(--color-primary-deep)]"
                              aria-hidden="true"
                            />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { productMenuGroups } from "@/components/products/rf-power-amplifiers-data";

type ProductsCatalogSidebarProps = {
  activeGroupId?: string;
  activeHref?: string;
};

export function ProductsCatalogSidebar({
  activeGroupId,
  activeHref,
}: ProductsCatalogSidebarProps) {
  return (
    <aside className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)] lg:sticky lg:top-28">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
        Products
      </p>

      <div className="space-y-5">
        {productMenuGroups.map((group) => {
          const isActiveGroup = group.id === activeGroupId;

          return (
            <section key={group.id}>
              <Link
                href={group.href}
                className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition-colors ${
                  isActiveGroup
                    ? "border-slate-300 bg-[color:var(--color-surface-soft)] text-[color:var(--color-text)]"
                    : "border-[color:var(--color-border)] bg-transparent text-[color:var(--color-text-muted)] hover:bg-[color:var(--color-surface-soft)] hover:text-[color:var(--color-text)]"
                }`}
              >
                <span className="font-heading text-lg font-bold leading-6">
                  {group.title}
                </span>
                <ChevronRight className="size-4" aria-hidden="true" />
              </Link>

              {isActiveGroup ? (
                <div className="mt-4 space-y-4">
                  {group.panels.map((panel) => (
                    <div key={panel.title}>
                      <Link
                        href={panel.href}
                        className="text-sm font-semibold text-slate-800 transition-colors hover:text-slate-600"
                      >
                        {panel.title}
                      </Link>
                      <div className="mt-3 space-y-1">
                        {panel.links.map((link) => {
                          const isActiveLink = link.href === activeHref;

                          return (
                            <Link
                              key={link.href}
                              href={link.href}
                              className={`block rounded-xl px-3 py-2 transition-colors ${
                                isActiveLink
                                  ? "bg-[color:var(--color-surface-soft)] text-[color:var(--color-text)]"
                                  : "text-[color:var(--color-text-muted)] hover:bg-[color:var(--color-surface-soft)] hover:text-[color:var(--color-text)]"
                              }`}
                            >
                              <p className="text-sm font-semibold">
                                {link.label}
                              </p>
                              <p className="mt-1 text-xs leading-5 text-[color:var(--color-text-muted)]">
                                {link.meta}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
    </aside>
  );
}

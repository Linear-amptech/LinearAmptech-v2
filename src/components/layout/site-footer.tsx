import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { companyContact } from "@/lib/company-data";

const footerLinks = [
  { href: "/products", label: "Products" },
  { href: "/#technology", label: "Technology" },
  { href: "/#applications", label: "Applications" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
      <div className="container mx-auto px-4 py-12 lg:px-4">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Linear-AmpTech home"
            >
              <span className="grid h-14 w-[112px] place-items-left ">
                <Image
                  src="/assets/linear-amptech-logo.png"
                  alt="Linear-AmpTech logo"
                  width={104}
                  height={58}
                  className="h-12 w-auto object-contain"
                />
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-6 text-[color:var(--color-text-muted)]">
              Linear-AmpTech develops RF front-end technologies, GaN PA modules,
              CMOS/BiCMOS RFICs, mm-wave transceivers, active antennas,
              packaging, validation, and semiconductor R&D programs.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
              Navigation
            </p>
            <div className="mt-5 grid gap-3 text-sm text-[color:var(--color-text-muted)]">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-[color:var(--color-text)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
              Contact
            </p>
            <div className="mt-5 grid gap-4 text-sm text-[color:var(--color-text-muted)]">
              <a
                href={`tel:${companyContact.phone.replaceAll(" ", "")}`}
                className="flex gap-3 transition-colors hover:text-[color:var(--color-text)]"
              >
                <Phone
                  className="mt-0.5 size-4 shrink-0 text-[color:var(--color-text-muted)]"
                  aria-hidden="true"
                />
                {companyContact.phone}
              </a>
              <a
                href={`mailto:${companyContact.email}`}
                className="flex gap-3 transition-colors hover:text-[color:var(--color-text)]"
              >
                <Mail
                  className="mt-0.5 size-4 shrink-0 text-[color:var(--color-text-muted)]"
                  aria-hidden="true"
                />
                {companyContact.email}
              </a>
              <p className="flex gap-3 leading-6">
                <MapPin
                  className="mt-1 size-4 shrink-0 text-[color:var(--color-text-muted)]"
                  aria-hidden="true"
                />
                <span>
                  {companyContact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[color:var(--color-border)] pt-6 text-center text-xs leading-5 text-[color:var(--color-text-muted)]">
          © Linearized Amplifier Technologies and Services Private Ltd. 2026.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

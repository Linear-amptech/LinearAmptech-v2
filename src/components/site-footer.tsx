import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { companyContact, footerProducts } from "@/lib/company-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#02050a] text-slate-100">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/assets/circuit-background.png')] bg-cover bg-center opacity-[0.06]"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
              Quick Links
            </p>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              <Link href="/" className="hover:text-cyan-100">
                Home
              </Link>
              <Link href="/#technology" className="hover:text-cyan-100">
                Technology
              </Link>
              <Link href="/team" className="hover:text-cyan-100">
                Team
              </Link>
              <Link href="/careers" className="hover:text-cyan-100">
                Careers
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
              Products
            </p>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              {footerProducts.map((product) => (
                <span key={product}>{product}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
              Contact Us
            </p>
            <div className="mt-5 grid gap-4 text-sm text-slate-300">
              <a
                href={`tel:${companyContact.phone.replaceAll(" ", "")}`}
                className="flex gap-3 hover:text-cyan-100"
              >
                <Phone
                  className="mt-0.5 size-4 text-cyan-200"
                  aria-hidden="true"
                />
                {companyContact.phone}
              </a>
              <a
                href={`mailto:${companyContact.email}`}
                className="flex gap-3 hover:text-cyan-100"
              >
                <Mail
                  className="mt-0.5 size-4 text-cyan-200"
                  aria-hidden="true"
                />
                {companyContact.email}
              </a>
              <p className="flex gap-3 leading-6">
                <MapPin
                  className="mt-1 size-4 shrink-0 text-cyan-200"
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
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-lg bg-white">
              <Image
                src="/assets/linear-amptech-logo.png"
                alt="Linear Amptech logo"
                width={42}
                height={42}
                className="h-10 w-auto object-contain"
              />
            </span>
            <span className="text-sm font-semibold text-white">
              Linear Amptech
            </span>
          </Link>
          <p className="text-sm text-slate-400">
            © {companyContact.legalName} {year}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

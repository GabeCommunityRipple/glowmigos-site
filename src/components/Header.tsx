import Link from "next/link";
import { Phone } from "lucide-react";
import { brand } from "@/lib/brand";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/nrcia-roof-inspection", label: "NRCIA Inspections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link href="/" className="flex flex-col leading-none" aria-label={brand.name}>
          <span className="font-display text-xl font-extrabold tracking-tight text-slate-900 md:text-2xl">
            Glowmigos
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 md:text-xs">
            Roofing &amp; Home Services
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={brand.phoneHref}
            className="hidden items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {brand.phone}
          </a>
          <Link
            href="/contact"
            className="hidden rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-500 md:inline-block"
          >
            Get Estimate
          </Link>
        </div>
      </div>
    </header>
  );
}

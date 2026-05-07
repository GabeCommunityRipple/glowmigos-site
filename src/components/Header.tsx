import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { brand } from "@/lib/brand";
import { MobileNav } from "./MobileNav";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/inspiration", label: "Inspiration" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link
          href="/"
          aria-label="Glowmigos Construction + Lighting"
          className="block"
        >
          <Image
            src={brand.logo}
            alt="Glowmigos Construction + Lighting"
            width={1493}
            height={575}
            priority
            className="h-11 w-auto md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white hover:text-amber-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={brand.phoneHref}
            className="hidden items-center gap-2 rounded-md bg-slate-800 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-700 sm:inline-flex"
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
          <MobileNav items={nav} />
        </div>
      </div>
    </header>
  );
}

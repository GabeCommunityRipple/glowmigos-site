import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link
            href="/"
            aria-label="Glowmigos Construction + Lighting"
            className="inline-block"
          >
            <Image
              src={brand.logo}
              alt="Glowmigos Construction + Lighting"
              width={1493}
              height={575}
              className="h-auto w-72 max-w-full md:w-80"
            />
          </Link>
          <p className="mt-4 max-w-md text-sm text-slate-400">{brand.tagline}</p>
          <p className="mt-4 text-sm text-slate-400">
            {brand.address.serviceAreaLabel}
            <br />
            {brand.hours.weekdays} · {brand.hours.sunday}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="hover:text-white" href={brand.phoneHref}>
                {brand.phone}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={brand.emailHref}>
                {brand.email}
              </a>
            </li>
            <li className="text-slate-400">{brand.address.full}</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Site</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-white" href="/services">Services</Link></li>
            <li><Link className="hover:text-white" href="/inspiration">Inspiration</Link></li>
            <li><Link className="hover:text-white" href="/portfolio">Portfolio</Link></li>
            <li><Link className="hover:text-white" href="/nrcia-roof-inspection">NRCIA Inspections</Link></li>
            <li><Link className="hover:text-white" href="/about">About</Link></li>
            <li><Link className="hover:text-white" href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p>{brand.certifications.join(" · ")}</p>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <p className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-slate-400">
          Proudly built by{" "}
          <a
            href="https://fulldeckagency.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-300 hover:text-amber-400 hover:underline"
          >
            Full Deck Agency
          </a>
          . Is your company working with a full deck?
        </p>
      </div>
    </footer>
  );
}

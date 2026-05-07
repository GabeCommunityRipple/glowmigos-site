import Link from "next/link";
import { Phone } from "lucide-react";
import { brand } from "@/lib/brand";

export function CTASection() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Got a project? Let&apos;s talk.
          </h2>
          <p className="mt-2 max-w-xl text-slate-300">
            Free estimates, honest answers, no pressure. {brand.address.serviceAreaLabel}.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={brand.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-500 px-5 py-3 text-base font-semibold text-slate-900 hover:bg-sky-400"
          >
            <Phone className="h-5 w-5" />
            {brand.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-base font-semibold hover:bg-white/10"
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}

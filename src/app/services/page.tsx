import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { LeadForm } from "@/components/LeadForm";
import { CTASection } from "@/components/CTASection";
import { services } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Services — Roofing, Decks, Gutters & More",
  description:
    "Full-service exterior contractor in Castle Rock, CO. Roofing, decks, gutters, siding, painting, lighting, and NRCIA roof inspections.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        headline="Full-service exterior contractor."
        sub="Roofing, decks, gutters, siding, painting, lighting, and NRCIA inspections — under one accountable roof."
        showCtas={false}
      />
      <TrustStrip />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <nav className="flex flex-wrap gap-2">
            {services.map((s) => (
              <a
                key={s.key}
                href={`#${s.key}`}
                className="rounded-full border border-slate-200 bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-200"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="mx-auto max-w-5xl px-4 pb-12">
          <div className="space-y-12">
            {services.map((s) => (
              <article
                key={s.key}
                id={s.key}
                className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className={`grid gap-0 ${s.image ? "md:grid-cols-[2fr_3fr]" : ""}`}>
                  {s.image && (
                    <div className="relative aspect-[4/3] bg-slate-100 md:aspect-auto">
                      <Image
                        src={s.image}
                        alt={`${s.title} — Glowmigos Home Services`}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-slate-700">{s.description}</p>

                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-slate-700">
                          <Check className="mt-0.5 h-4 w-4 flex-none text-amber-500" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href="#estimate"
                        className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                      >
                        Get a Quote
                      </Link>
                      {s.key === "nrcia" && (
                        <Link
                          href="/nrcia-roof-inspection"
                          className="inline-flex items-center justify-center rounded-md border border-amber-500 px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50"
                        >
                          Learn about NRCIA
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="estimate" className="scroll-mt-24 bg-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <LeadForm
            heading="Get a Free Estimate"
            subheading="Tell us what you need and we'll get back to you fast."
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}

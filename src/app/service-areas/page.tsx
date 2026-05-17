import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { LeadForm } from "@/components/LeadForm";
import { CTASection } from "@/components/CTASection";
import { locations } from "@/lib/locations";
import { brand } from "@/lib/brand";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://glowmigoshomeservices.com";

export const metadata: Metadata = {
  title: "Service Areas | Glowmigos Roofing & Home Services",
  description:
    "Glowmigos serves Castle Rock, Castle Pines, Parker, Highlands Ranch, Colorado Springs, and surrounding Front Range communities.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "Service Areas | Glowmigos",
    description:
      "Castle Rock-based home contractor serving Douglas County and the Colorado Springs metro.",
    url: `${SITE_URL}/service-areas`,
    type: "website",
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <Hero
        eyebrow="Service Areas"
        headline="Castle Rock and the Front Range."
        sub="Headquartered in Castle Rock. We work homes across Douglas County and the Colorado Springs metro — same crew on every job, owner on site."
        showCtas={false}
      />

      <TrustStrip />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <p className="text-lg text-slate-700">
            Glowmigos covers roofing, decks, siding, gutters, custom iron
            doors, permanent and holiday lighting, painting, NRCIA roof
            inspections, and storm-damage insurance work. Each city below has
            its own page with the local context — neighborhoods we work in,
            specific concerns (hail patterns, HOA requirements, military
            relocations), and the services that matter most there.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 pb-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:border-amber-400 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                  {loc.county} County
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-slate-900 group-hover:text-amber-600">
                  {loc.city}, {loc.state}
                </h2>
                <p className="mt-3 text-sm text-slate-700">{loc.intro}</p>
                {loc.population && (
                  <p className="mt-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                    Population {loc.population}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="estimate" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <LeadForm
            heading="Free estimate anywhere we work"
            subheading={`Tell us where the home is and what you're thinking. ${brand.address.serviceAreaLabel}.`}
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}

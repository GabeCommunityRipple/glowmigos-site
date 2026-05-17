import Link from "next/link";
import {
  Home as HomeIcon,
  Hammer,
  DoorOpen,
  Droplets,
  Square,
  PaintRoller,
  Sparkles,
  ClipboardCheck,
  CloudLightning,
  Building2,
  Phone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { LeadForm } from "@/components/LeadForm";
import { brand, services } from "@/lib/brand";
import type { Location } from "@/lib/locations";
import { locations } from "@/lib/locations";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  roofing: HomeIcon,
  decks: Hammer,
  "iron-doors": DoorOpen,
  gutters: Droplets,
  siding: Square,
  lighting: Sparkles,
  painting: PaintRoller,
  commercial: Building2,
  nrcia: ClipboardCheck,
  storm: CloudLightning,
};

type Service = (typeof services)[number];

function getServiceHref(svc: Service): string {
  return svc.href ?? `/services#${svc.key}`;
}

export function LocationPage({ location }: { location: Location }) {
  const featuredServices = location.servicesEmphasis
    .map((key) => services.find((s) => s.key === key))
    .filter((s): s is Service => Boolean(s));

  const nearby = location.nearbyServeSlugs
    .map((slug) => locations.find((l) => l.slug === slug))
    .filter((l): l is Location => Boolean(l));

  return (
    <>
      <Hero
        eyebrow={`${location.city}, ${location.state}`}
        headline={location.heroHeadline}
        sub={location.heroSub}
      />

      <TrustStrip />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            Working in {location.city}
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Why Glowmigos in {location.city}.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-slate-700">
            {location.introParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            Services in {location.city}
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            What we do for {location.city} homeowners.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((svc) => (
              <ServiceCard
                key={svc.key}
                title={svc.title}
                description={svc.short}
                href={getServiceHref(svc)}
                icon={SERVICE_ICONS[svc.key] ?? HomeIcon}
                image={svc.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            {location.city} specifics
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            What you should know about {location.city}.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-slate-700">
            {location.concernsParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {location.neighborhoods.length > 0 && (
            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">
                Neighborhoods we serve in {location.city}
              </p>
              <p className="mt-2 text-slate-700">
                {location.neighborhoods.join(" · ")}
              </p>
            </div>
          )}
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="bg-slate-100">
          <div className="mx-auto max-w-7xl px-4 py-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
              Nearby
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
              We also serve.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {nearby.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/${loc.slug}`}
                  className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:border-amber-400 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                    {loc.county} County
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-amber-600">
                    {loc.city}, {loc.state}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{loc.intro}</p>
                </Link>
              ))}
            </div>
            <p className="mt-8 text-sm text-slate-500">
              See{" "}
              <Link
                href="/service-areas"
                className="font-semibold text-slate-700 underline underline-offset-4 hover:text-amber-600"
              >
                every Glowmigos service area
              </Link>
              .
            </p>
          </div>
        </section>
      )}

      <section id="estimate" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <LeadForm
            heading={`Free estimate in ${location.city}`}
            subheading="Tell us about your project. We'll get back same day."
          />
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center md:py-16">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            {location.city} homeowners — let&apos;s talk.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Free estimates, honest answers, no pressure.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={brand.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-400 px-6 py-3 text-base font-semibold text-slate-900 hover:bg-amber-500"
            >
              <Phone className="h-5 w-5" />
              Call {brand.phone}
            </a>
            <Link
              href="#estimate"
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

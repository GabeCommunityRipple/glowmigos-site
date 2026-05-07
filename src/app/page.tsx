import Link from "next/link";
import {
  Home as HomeIcon,
  Hammer,
  Droplets,
  Square,
  PaintRoller,
  Sparkles,
  ClipboardCheck,
  CloudLightning,
  Award,
  ShieldCheck,
  Users,
  MapPin,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { LeadForm } from "@/components/LeadForm";
import { CTASection } from "@/components/CTASection";
import { brand } from "@/lib/brand";

const cards = [
  { title: "Roofing", description: "Replacement, repair, hail claims. Class 4 upgrades.", href: "/services#roofing", icon: HomeIcon },
  { title: "Decks", description: "New construction, composite, wood, screened porches.", href: "/services#decks", icon: Hammer },
  { title: "Gutters", description: "Install, repair, cleaning, leaf guards.", href: "/services#gutters", icon: Droplets },
  { title: "Siding", description: "Full siding installs and storm-damage repairs.", href: "/services#siding", icon: Square },
  { title: "Painting", description: "Interior and exterior painting done right.", href: "/services#painting", icon: PaintRoller },
  { title: "Christmas & Permanent Lighting", description: "Holiday installs and year-round permanent lights.", href: "/services#lighting", icon: Sparkles },
  { title: "NRCIA Roof Inspections", description: "1 of only 2 NRCIA-certified inspectors in CO.", href: "/nrcia-roof-inspection", icon: ClipboardCheck, featured: true },
  { title: "Storm Damage / Insurance", description: "Full advocacy through your insurance claim.", href: "/services#storm", icon: CloudLightning },
];

const reasons = [
  {
    icon: Award,
    title: "NRCIA-Certified Inspector",
    body: "Ronny is one of only two NRCIA-certified roof inspectors in Colorado. That credential matters in real estate and insurance fights — and it sets the bar for every roof we touch.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Claim Specialists",
    body: "We meet your adjuster on-site and document storm damage the way it should be documented. You shouldn't be fighting your carrier alone.",
  },
  {
    icon: Users,
    title: "Owner-Operated, Local",
    body: `${brand.owner} is on every job. Castle Rock-based since ${brand.founded}. Nextdoor Neighborhood Favorite in The Village at Castle Pines and Ryder Cup at Plum Creek.`,
  },
  {
    icon: MapPin,
    title: "One Crew, Full Service",
    body: "Roofing, decks, gutters, siding, paint, and lighting. One contractor accountable for the whole exterior of your home — no juggling subs.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={brand.address.serviceAreaLabel}
        headline={brand.heroHeadline}
        sub="Roofing, decks, gutters, siding, paint, and lighting — done right by the guy who actually shows up."
      />

      <TrustStrip />

      {/* Services grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              What we do
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Full-service exterior contractor
            </h2>
            <p className="mt-3 text-slate-600">
              From a single gutter clean to a full re-roof and insurance claim, we handle it.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <ServiceCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Why Glowmigos
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Credentials that matter, work that holds up.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl bg-white p-6 shadow-sm">
                <Icon className="h-8 w-8 text-amber-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline form */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Get a free estimate
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Tell us about your project.
            </h2>
            <p className="mt-3 text-slate-600">
              Quick form, no spam, real answer. Or call{" "}
              <a className="font-semibold text-slate-900 underline" href={brand.phoneHref}>
                {brand.phone}
              </a>
              .
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Service areas</p>
              <p className="mt-1 text-sm text-slate-600">
                {brand.serviceAreas.join(" · ")}
              </p>
            </div>
          </div>

          <LeadForm
            heading="Free Estimate"
            subheading="We'll get back to you fast — usually same day."
          />
        </div>
      </section>

      {/* Reviews placeholder */}
      <section className="border-y border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            What neighbors say
          </p>
          <p className="mt-3 text-lg text-slate-700">
            <strong className="text-slate-900">Nextdoor Neighborhood Favorite</strong> in
            The Village at Castle Pines and Ryder Cup at Plum Creek.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            {/* TODO: integrate Google Reviews via API or manual curation */}
            Google reviews coming soon.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-block rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}

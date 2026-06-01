import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Umbrella,
  ClipboardCheck,
  FileText,
  ShieldCheck,
  Award,
  Hammer,
  Lock,
  MapPin,
} from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { brand } from "@/lib/brand";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://glowmigoshomeservices.com";

export const metadata: Metadata = {
  title:
    "Emergency Storm Response — Hail Damage Repair, Tarping, Inspections | Glowmigos Castle Rock",
  description:
    "Front Range storm response — emergency roof tarping, free NRCIA-certified inspections, and insurance claim documentation. Castle Rock based, same-day service. Call 303-210-3886.",
  alternates: { canonical: "/storm-response" },
  openGraph: {
    title: "Emergency Storm Response | Glowmigos",
    description:
      "Hail damage repair, emergency tarping, NRCIA-certified roof inspections. Front Range same-day service.",
    url: `${SITE_URL}/storm-response`,
    type: "website",
  },
};

const actions = [
  {
    icon: Umbrella,
    title: "Emergency Tarping",
    body: "Active leaks won't wait. We tarp your roof same-day to stop water damage from compounding while you sort out insurance.",
  },
  {
    icon: ClipboardCheck,
    title: "Free Roof Inspection",
    body: "NRCIA-certified inspections (1 of only 2 in Colorado). No pressure, just the facts on what's actually damaged.",
  },
  {
    icon: FileText,
    title: "Insurance Documentation",
    body: "We document damage to the standard insurance adjusters respect. Our reports hold up in disputes.",
  },
];

const steps = [
  "Document everything before cleanup — photos of hail on the ground, on cars, on your roof from a safe distance.",
  "Don't wait on insurance to inspect. They'll be backed up for weeks after a storm this size.",
  "If you have an active leak, get it tarped today. Water damage compounds fast.",
  "Save anything that broke — gutters, vents, screens. Insurance adjusters will want to see it.",
  "Call us. Free inspection, no obligation. We'll tell you straight whether it's worth a claim.",
];

const faqs = [
  {
    q: "How fast can you actually get to my house?",
    a: "Castle Rock, Castle Pines, Parker, Lone Tree, Highlands Ranch — typically within a few hours during active storm response. Denver metro and Front Range — same day or next day. Call us and we'll tell you straight.",
  },
  {
    q: "How much does an emergency tarp cost?",
    a: "We don't gouge during storms. Emergency tarping is typically $300–500 depending on the size of the affected area. If you end up filing an insurance claim and we do the full repair, the tarp cost is often credited toward the project.",
  },
  {
    q: "Will my insurance cover the damage?",
    a: "If you have a standard homeowners policy and the damage is from hail or wind, yes — most policies cover storm damage. We'll document the damage in a way insurance adjusters respect, which gives you the best chance at a fair claim. If your insurer pushes back, our NRCIA-certified reports hold up in disputes.",
  },
  {
    q: "I'm not sure if I have damage. Should I still call?",
    a: "Yes. Hail damage often isn't visible from the ground — granule loss, soft spots, dents on metal vents, hairline cracks. Free inspection, no obligation. We'll tell you the truth either way.",
  },
];

const trustItems = [
  { icon: Award, label: "NRCIA Certified" },
  { icon: ShieldCheck, label: "ICC Certified" },
  { icon: Hammer, label: "G14 Licensed" },
  { icon: Lock, label: "Insured" },
  { icon: MapPin, label: "Castle Rock Local" },
];

const stormServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Storm Damage Restoration",
  name: "Emergency Storm Response",
  description:
    "Emergency roof tarping, NRCIA-certified roof inspections, and insurance damage documentation for hail and wind storms across the Front Range.",
  provider: {
    "@type": "RoofingContractor",
    name: brand.name,
    telephone: brand.phone,
    email: brand.email,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.address.line1,
      addressLocality: brand.address.city,
      addressRegion: brand.address.state,
      postalCode: brand.address.zip,
      addressCountry: "US",
    },
  },
  areaServed: [
    "Castle Rock",
    "Castle Pines",
    "Parker",
    "Lone Tree",
    "Highlands Ranch",
    "Centennial",
    "Aurora",
    "Denver",
    "Boulder",
    "Larimer County",
    "Douglas County",
    "Jefferson County",
    "Adams County",
  ].map((name) => ({ "@type": "Place", name })),
};

export default function StormResponsePage() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-slate-900 text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.7) 55%, rgba(15,23,42,0.35) 100%), url('/images/storm/tarp-placement.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
            Active storm response
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Front Range Storm Response
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200 md:text-xl">
            Emergency tarping. Free inspections. Insurance documentation.
            Available now.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={brand.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-400 px-6 py-3 text-base font-semibold text-slate-900 hover:bg-amber-500"
            >
              <Phone className="h-5 w-5" />
              Call {brand.phone}
            </a>
            <Link
              href="#estimate"
              className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur hover:bg-white/20"
            >
              Request Inspection
            </Link>
          </div>

          <p className="mt-5 text-sm text-slate-300">
            NRCIA-certified — same-day response across Castle Rock, Denver,
            and the Front Range.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
            What we do right now
          </p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            Three things, fast.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {actions.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <Icon className="h-8 w-8 text-amber-400" />
                <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            What to do right now
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            If your home took damage tonight, do this first:
          </h2>
          <ol className="mt-8 space-y-4">
            {steps.map((step, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5"
              >
                <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-amber-400 text-sm font-extrabold text-slate-900">
                  {i + 1}
                </span>
                <p className="text-slate-700">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 md:justify-between">
          {trustItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm font-semibold text-slate-700"
            >
              <Icon className="h-4 w-4 text-amber-500" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="estimate" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <LeadForm
            defaultService="Storm Damage / Insurance Claim"
            heading="Request a free inspection"
            subheading="We respond to storm inquiries within 1 hour."
          />
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Storm response questions.
          </h2>

          <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group p-5 md:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                  <span className="text-base font-bold text-slate-900 md:text-lg">
                    {q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 flex-none text-amber-500 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-slate-700">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center md:py-16">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Call {brand.phone} now.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            We&apos;re answering the phone — even after hours during active
            storm response.
          </p>
          <a
            href={brand.phoneHref}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-amber-400 px-8 py-4 text-lg font-extrabold text-slate-900 hover:bg-amber-500"
          >
            <Phone className="h-5 w-5" />
            Call {brand.phone}
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stormServiceSchema) }}
      />
    </>
  );
}

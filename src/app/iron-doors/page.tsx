import type { Metadata } from "next";
import Image from "next/image";
import { Pencil, Hammer, ShieldCheck, Check } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { CTASection } from "@/components/CTASection";
import { brand } from "@/lib/brand";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://glowmigoshomeservices.com";

export const metadata: Metadata = {
  title: "Custom Iron Entry Doors | Glowmigos Castle Rock",
  description:
    "Hand-forged iron entry doors built to your home's design. Custom architectural steel doors with leaded glass, custom proportions, and structural integrity. Castle Rock-based, residential shipping nationwide.",
};

const approach = [
  {
    icon: Pencil,
    title: "Designed With Your Home",
    body: "We work from your drawings — or sketch a custom design with you. Custom proportions, true arches, balanced to the architecture rather than dropped in from a catalog.",
  },
  {
    icon: Hammer,
    title: "Hand-Forged Detail",
    body: "Solid steel construction. Hand-applied finishes. Custom hardware. Glass options include clear, frosted, leaded, and textured — chosen to match the rest of the home.",
  },
  {
    icon: ShieldCheck,
    title: "Built to Last",
    body: "Structural integrity that stands up to Colorado weather. Multi-decade lifespan. Iron entry doors that age into looking better, not worse.",
  },
];

const included = [
  "Custom design consultation (work from existing drawings or fresh design)",
  "Hand-forged solid steel construction",
  "Glass options: clear, frosted, leaded, textured",
  "Hardware and finish selection",
  "Professional installation in Castle Rock and the Front Range",
  "Custom shipping available for residential projects nationwide",
];

const galleryPhotos = [
  {
    src: "/images/services/iron-doors.jpg",
    alt: "Hand-forged iron entry door — straight on",
  },
  {
    src: "/images/work/iron-door-2.jpg",
    alt: "Custom iron entry door installation",
  },
  {
    src: "/images/work/iron-door-3.jpg",
    alt: "Iron door detail and hardware",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom Iron Doors",
  name: "Custom Iron Entry Doors",
  description:
    "Hand-forged iron entry doors with leaded or textured glass, custom proportions, and architectural integrity. Castle Rock-based, residential shipping nationwide.",
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
  areaServed: brand.serviceAreas.map((a) => ({ "@type": "City", name: a })),
};

export default function IronDoorsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center md:py-28">
          <Image
            src="/images/iron-doors/stag-emblem.png"
            alt=""
            width={400}
            height={400}
            priority
            className="mx-auto h-24 w-24 transition duration-500 hover:scale-[1.04]"
          />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
            Custom Iron Doors
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Custom Iron Entry Doors
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-200 md:text-xl">
            Hand-forged. Built to your home&apos;s design. The detail that
            elevates everything else.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <Image
            src="/images/iron-doors/stag-emblem.png"
            alt=""
            width={200}
            height={200}
            className="mx-auto h-10 w-10 opacity-60"
          />
          <p className="mt-4 text-center text-sm font-semibold uppercase tracking-wider text-amber-500">
            Our approach
          </p>
          <h2 className="mx-auto mt-2 max-w-3xl text-center text-3xl font-extrabold text-slate-900 md:text-4xl">
            Iron doors done the way they used to be done.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {approach.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <Icon className="h-7 w-7 text-amber-500" />
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-200 md:aspect-[3/4]">
            <Image
              src="/images/services/iron-doors.jpg"
              alt="Custom iron entry door"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
              How it pairs with lighting
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
              The first thing visitors see.
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              An iron entry door is the first thing visitors see — and the last
              thing they remember. Pair it with exterior accent lighting and
              your front entrance becomes the centerpiece of your home,
              especially at dusk.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            Recent work
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Iron door installations.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-200"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            What&apos;s included
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Every iron door project includes:
          </h2>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-lg bg-white p-4 shadow-sm"
              >
                <Check className="mt-0.5 h-5 w-5 flex-none text-amber-500" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="order" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <LeadForm
            defaultService="Custom Iron Doors"
            heading="Talk to us about your iron door"
            subheading="Tell us about the project. We'll confirm timeline and design path same day."
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <CTASection />
    </>
  );
}

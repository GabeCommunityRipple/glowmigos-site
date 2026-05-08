import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Lightbulb, TreePine, Lamp, Phone } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { brand } from "@/lib/brand";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://glowmigoshomeservices.com";

export const metadata: Metadata = {
  title: "Permanent & Holiday Lighting | Glowmigos Castle Rock",
  description:
    "Permanent LED home lighting and Christmas light installs in Castle Rock since 2022. Minleon™ systems, architectural accent lighting, holiday displays. The service that started Glowmigos.",
};

const offerings = [
  {
    icon: Lightbulb,
    title: "Permanent LED Systems",
    body: "Minleon™ track-mounted systems built into the eaves. Year-round programmable for holidays, security, and architectural beauty. One install. No more ladders. No more tangled strings.",
  },
  {
    icon: TreePine,
    title: "Holiday Lighting",
    body: "Custom seasonal Christmas light installs and takedowns. Castle Rock has trusted us since 2022.",
  },
  {
    icon: Lamp,
    title: "Architectural & Accent Lighting",
    body: "Pathway lighting, uplighting, deck step lights, soffit washing — finishing touches that pair with our roofing, deck, and siding work.",
  },
];

const steps = [
  {
    title: "Free consultation",
    body: "We walk your property and talk through what you want — permanent, seasonal, or both.",
  },
  {
    title: "Custom design",
    body: "We map out the install based on your home's architecture, eaves, and the look you're after.",
  },
  {
    title: "Professional installation",
    body: "Clean, fast, done right the first time. Same crew every job, owner on site.",
  },
  {
    title: "Year after year",
    body: "Permanent systems are programmable and just turn on. Seasonal installs we handle takedown too.",
  },
];

const galleryPhotos = [
  {
    src: "/images/work/lights-metal-roof.webp",
    alt: "Holiday lights along a metal roofline",
  },
  {
    src: "/images/work/lights-wreath.webp",
    alt: "Holiday lights and wreath installed by Glowmigos",
  },
  {
    src: "/images/work/lights-roof.webp",
    alt: "Permanent lighting system installed on a residential roof",
  },
  {
    src: "/images/work/lights-night-home.jpg",
    alt: "Christmas lights installed at dusk on a Castle Rock home",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Permanent and Holiday Lighting",
  name: "Permanent & Holiday Lighting",
  description:
    "Minleon™ permanent LED systems, custom Christmas light installs, and architectural accent lighting in Castle Rock and the Front Range since 2022.",
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

export default function LightingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center md:py-28">
          <Image
            src="/images/lighting/yeti-emblem.webp"
            alt=""
            width={400}
            height={400}
            priority
            className="mx-auto h-32 w-32 transition duration-500 hover:scale-[1.04]"
          />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
            Permanent &amp; Holiday Lighting
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Permanent &amp; Holiday Lighting
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-200 md:text-xl">
            The service that started it all. Hand-installed Minleon™ permanent
            LED systems, year-round architectural lighting, and the Castle Rock
            Christmas displays you&apos;ve seen us hanging since 2022.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <Image
            src="/images/lighting/yeti-emblem.webp"
            alt=""
            width={200}
            height={200}
            className="mx-auto h-16 w-16 opacity-60"
          />
          <p className="mt-4 text-center text-sm font-semibold uppercase tracking-wider text-amber-500">
            Brand heritage
          </p>
          <h2 className="mx-auto mt-2 max-w-3xl text-center text-3xl font-extrabold text-slate-900 md:text-4xl">
            Yes — the yetis are still here.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            Glowmigos started in 2022 hanging Christmas lights in Castle Rock.
            The yetis came along for the ride, and they&apos;ve been on
            rooftops every December since. The business has grown into full
            home services — roofing, decks, siding, and more — but lighting is
            where it all began. If you&apos;re a returning customer, welcome
            back. If you&apos;re new, glad to meet you. Either way, we&apos;d
            love to make your home glow.
          </p>
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            What we install
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Three ways to make a home glow.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {offerings.map(({ icon: Icon, title, body }) => (
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

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            How it works
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Four steps from first call to fully lit.
          </h2>

          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-base font-extrabold text-slate-900">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            Recent work
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            From the rooftops of Castle Rock.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-200"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            Pairs with everything else we do
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            One crew. One project. One cohesive home.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            Lighting is the finish on every Glowmigos project. When we put on a
            new{" "}
            <Link
              href="/services#roofing"
              className="font-semibold text-slate-900 underline underline-offset-4 hover:text-amber-600"
            >
              roof
            </Link>
            , we can install permanent LEDs in the same trip. When we build a{" "}
            <Link
              href="/services#decks"
              className="font-semibold text-slate-900 underline underline-offset-4 hover:text-amber-600"
            >
              deck
            </Link>
            , we add the under-rail and step lighting that turns evenings
            outside into something special.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            See{" "}
            <Link
              href="/services"
              className="font-semibold text-slate-700 underline underline-offset-4 hover:text-amber-600"
            >
              everything we do
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="estimate" className="scroll-mt-24 bg-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <LeadForm
            defaultService="Lighting"
            heading="Talk to us about your lighting"
            subheading="Tell us what you have in mind — permanent, seasonal, or both. We'll come walk it with you."
          />
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center md:py-16">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Ready to make your home glow?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Free estimates, honest answers, no pressure.{" "}
            {brand.address.serviceAreaLabel}.
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

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

import Image from "next/image";
import {
  Home as HomeIcon,
  Hammer,
  Droplets,
  Square,
  PaintRoller,
  Sparkles,
  ClipboardCheck,
  CloudLightning,
  Building2,
  Award,
  ShieldCheck,
  Users,
  MapPin,
  Tag,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { ReviewsSection } from "@/components/ReviewsSection";
import { LeadForm } from "@/components/LeadForm";
import { CTASection } from "@/components/CTASection";
import { brand, promotions, whyChooseUs, workPhotos } from "@/lib/brand";

const cards = [
  { title: "Residential Roofing", description: "Asphalt shingle, concrete tile, metal — built for Colorado.", href: "/services#roofing", icon: HomeIcon, image: "/images/services/roofing.webp" },
  { title: "Decks", description: "New construction, composite, wood, screened porches.", href: "/services#decks", icon: Hammer, image: "/images/services/decks.jpg" },
  { title: "Gutters & Snow Guards", description: "Gutter Rx™ filtration and Rocky Mountain Snow Guards.", href: "/services#gutters", icon: Droplets, image: "/images/services/gutters.webp" },
  { title: "Siding", description: "Full siding installs and storm-damage repairs.", href: "/services#siding", icon: Square, image: "/images/services/siding.jpg" },
  { title: "Painting", description: "Interior and exterior painting done right.", href: "/services#painting", icon: PaintRoller, image: "/images/services/painting.webp" },
  { title: "Permanent & Holiday Lighting", description: "Minleon™ permanent LED systems. Never hang lights again.", href: "/services#lighting", icon: Sparkles, image: "/images/services/lighting.webp" },
  { title: "Commercial Flat Roofing", description: "EPDM, TPO, and Silicone coatings.", href: "/services#commercial", icon: Building2, image: "/images/services/commercial.webp" },
  { title: "NRCIA Roof Inspections", description: "1 of only 2 NRCIA-certified inspectors in CO.", href: "/nrcia-roof-inspection", icon: ClipboardCheck, image: "/images/services/nrcia.jpg", featured: true },
  { title: "Storm Damage / 24/7 Emergency", description: "Ice dams, wind, hail, emergency tarping.", href: "/services#storm", icon: CloudLightning },
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

      {/* Promotions */}
      <section className="bg-sky-500">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 md:grid-cols-2">
          {promotions.map((p) => (
            <div key={p.title} className="flex items-start gap-3 text-slate-900">
              <Tag className="mt-0.5 h-5 w-5 flex-none" />
              <div>
                <p className="text-sm font-extrabold uppercase tracking-wide">{p.title}</p>
                <p className="text-sm font-medium">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
              What we do
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Full-service exterior contractor
            </h2>
            <p className="mt-3 text-slate-600">
              From a single gutter clean to a full re-roof and insurance claim, we handle it.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <ServiceCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent work gallery */}
      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
              Recent work
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Real jobs. Real photos.
            </h2>
            <p className="mt-3 text-slate-600">
              A few from the field. More coming as we add them.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {workPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-square overflow-hidden rounded-lg bg-slate-200"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* Why us */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
              Why Glowmigos
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Credentials that matter, work that holds up.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <Icon className="h-8 w-8 text-sky-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-slate-600">{body}</p>
              </div>
            ))}
          </div>

          {/* Ronny's own short list */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              The short version
            </p>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Inline form */}
      <section className="bg-slate-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
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

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
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

      <CTASection />
    </>
  );
}

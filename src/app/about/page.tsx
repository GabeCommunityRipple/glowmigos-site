import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { Award, ShieldCheck, Hammer, MapPin, Sparkles } from "lucide-react";
import { brand, faqs } from "@/lib/brand";

export const metadata: Metadata = {
  title: "About Glowmigos — Castle Rock Owner-Operated Contractor",
  description: `Founded in ${brand.founded} by ${brand.owner}. NRCIA, ICC, and G14 licensed. Serving Castle Rock and the Front Range.`,
};

const certs = [
  {
    icon: Award,
    title: "NRCIA Certified",
    body: "The National Roofing Contractors Inspection Agency credential. Ronny is one of only two NRCIA-certified roof inspectors in Colorado. NRCIA inspections carry weight in real estate transactions and insurance disputes.",
  },
  {
    icon: ShieldCheck,
    title: "ICC Certified",
    body: "International Code Council certification — the gold standard for building code knowledge. It means we know the code your municipality enforces, which means fewer surprises at inspection.",
  },
  {
    icon: Hammer,
    title: "G14 Licensed General Contractor",
    body: "Colorado G14 license covers a broad range of residential work. We're planning a Class A upgrade as the deck and remodeling side of the business grows.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About us"
        headline={`Owner-operated since ${brand.founded}.`}
        sub={`${brand.owner} is on every job. That's the whole pitch.`}
        showCtas={false}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
            How we got here.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-slate-700">
            <p>
              Glowmigos started in {brand.founded} as a Christmas lighting
              company. As we worked on more homes — installing lights, then
              helping with the roof above them, then the deck below them — we
              realized we&apos;d become the contractor homeowners called for
              everything that made their house feel finished.
            </p>
            <p>
              Today we&apos;re Castle Rock&apos;s full-service home contractor,
              with a lighting-forward approach that runs through every project.
              Roofs that last, decks built right, and the warm glow that makes
              a house feel like home.
            </p>
            <p>
              {brand.owner} earned the NRCIA roof inspector credential — one of
              only two in the state — and added ICC certification on top of the
              G14 general contractor license. We work insurance claims all day:
              adjusters know us, and we know how to document storm damage so it
              gets paid. Nextdoor Neighborhood Favorite in The Village at Castle
              Pines and Ryder Cup at Plum Creek.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            What our credentials mean
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Certifications that actually matter to you.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {certs.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl bg-white p-6 shadow-sm">
                <Icon className="h-8 w-8 text-amber-500" />
                <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
              Where we work
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Service area
            </h2>
            <p className="mt-3 text-slate-600">{brand.address.serviceAreaLabel}.</p>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-slate-700">
              {brand.serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-500" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
              Why customers choose us
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              The short version.
            </h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <Sparkles className="mt-1 h-5 w-5 flex-none text-amber-500" />
                <span>
                  <strong className="text-slate-900">NRCIA roof inspector</strong> — credentials
                  realtors and insurance carriers respect.
                </span>
              </li>
              <li className="flex gap-3">
                <Sparkles className="mt-1 h-5 w-5 flex-none text-amber-500" />
                <span>
                  <strong className="text-slate-900">Insurance specialists</strong> — we meet your
                  adjuster and document the damage.
                </span>
              </li>
              <li className="flex gap-3">
                <Sparkles className="mt-1 h-5 w-5 flex-none text-amber-500" />
                <span>
                  <strong className="text-slate-900">Owner on every job</strong> — no salespeople,
                  no subbed-out chaos.
                </span>
              </li>
              <li className="flex gap-3">
                <Sparkles className="mt-1 h-5 w-5 flex-none text-amber-500" />
                <span>
                  <strong className="text-slate-900">Local since {brand.founded}</strong> — Castle
                  Rock-based, accountable, here tomorrow.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Common questions.
          </h2>
          <p className="mt-3 text-slate-600">
            Don&apos;t see your question? Call{" "}
            <a className="font-semibold text-slate-900 underline" href={brand.phoneHref}>
              {brand.phone}
            </a>
            .
          </p>

          <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group p-5 md:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                  <span className="text-base font-bold text-slate-900 md:text-lg">{q}</span>
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

      {/* Structured data for FAQ — helps with rich results in search. */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />

      <CTASection />
    </>
  );
}

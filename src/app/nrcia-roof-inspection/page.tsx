import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { CTASection } from "@/components/CTASection";
import { Award, FileCheck, Home, Shield, Building2, Users, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "NRCIA Roof Inspection — 1 of Only 2 Inspectors in Colorado",
  description:
    "Independent NRCIA-certified roof inspections for real estate transactions, insurance disputes, and pre-purchase due diligence. Castle Rock, CO and Front Range.",
};

const useCases = [
  {
    icon: Home,
    title: "Real estate transactions",
    body: "An independent NRCIA inspection cuts through the back-and-forth on roof condition during a sale. Documented, objective, defensible.",
  },
  {
    icon: Shield,
    title: "Insurance disputes",
    body: "When your carrier and your contractor disagree, an NRCIA report carries weight. We document storm damage and code-required repairs.",
  },
  {
    icon: FileCheck,
    title: "Pre-purchase due diligence",
    body: "Before you buy a home, get a real read on the roof — not the 30-second look from a general home inspector.",
  },
  {
    icon: Award,
    title: "Post-storm assessment",
    body: "After hail or wind, we document what's there and what's compromised — with the kind of detail adjusters take seriously.",
  },
];

const audiences = [
  {
    icon: Users,
    title: "Realtors",
    body: "Refer clients to an inspector who'll get the deal closed instead of blowing it up. We deliver fast, written reports.",
  },
  {
    icon: Home,
    title: "Homebuyers",
    body: "Don't get stuck with a $20k roof problem six months after close. Find out before you sign.",
  },
  {
    icon: Building2,
    title: "Homeowners",
    body: "If your insurer is dragging their feet on a claim, an NRCIA report changes the conversation.",
  },
  {
    icon: Shield,
    title: "Insurance agents",
    body: "When you need a credible third-party assessment, send your insureds here. We're not trying to sell them a roof — we're documenting what's there.",
  },
];

const included = [
  "Full exterior roof condition assessment",
  "Storm and hail damage documentation",
  "Photo and measurement records",
  "Flashing, valleys, penetrations, and ventilation review",
  "Code-compliance review where relevant",
  "Written NRCIA-format inspection report",
];

export default function NrciaPage() {
  return (
    <>
      <Hero
        eyebrow="NRCIA Roof Inspection"
        headline="1 of only 2 NRCIA-certified roof inspectors in Colorado."
        sub="Independent, defensible, written roof inspections for real estate, insurance, and homeowners who need a real answer."
        showCtas={false}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
            What is an NRCIA inspection — and why does it matter?
          </h2>
          <div className="mt-5 space-y-4 text-lg text-slate-700">
            <p>
              The National Roofing Contractors Inspection Agency credentials a
              small number of inspectors against a tightly defined standard.
              Two things make NRCIA different: independence and defensibility.
            </p>
            <p>
              <strong className="text-slate-900">Independent</strong> means the
              inspection isn&apos;t a sales pitch. NRCIA inspectors document
              what&apos;s there.
              {" "}
              <strong className="text-slate-900">Defensible</strong> means the
              report is structured to hold up in real estate negotiations,
              insurance disputes, and — when it comes to that — court.
            </p>
            <p>
              In Colorado, where hail and wind drive an enormous volume of
              roofing claims and disputes, that credential is rare and useful.
              Ronny is one of only two NRCIA-certified inspectors in the state.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Use cases
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            When you need an NRCIA inspection.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl bg-white p-6 shadow-sm">
                <Icon className="h-7 w-7 text-amber-600" />
                <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Who this is for
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Who we work with.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-6">
                <Icon className="h-7 w-7 text-slate-700" />
                <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            What&apos;s included
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Every inspection includes:
          </h2>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2 rounded-lg bg-white p-4 shadow-sm">
                <Check className="mt-0.5 h-5 w-5 flex-none text-amber-600" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="order" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <LeadForm
            defaultService="NRCIA Inspection"
            heading="Order an Inspection"
            subheading="Tell us about the property. We'll confirm scheduling and pricing same day."
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}

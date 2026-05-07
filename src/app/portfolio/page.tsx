import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Our Work | Glowmigos Roofing & Home Services",
  description:
    "Real Glowmigos projects in Castle Rock and the Front Range. Portfolio updating as we complete current work — call us for a free estimate.",
};

const previews = [
  {
    title: "Recent Roofing Projects",
    body: "Class 4 hail-resistive replacements, asphalt shingle, metal, and concrete tile.",
  },
  {
    title: "Deck Builds",
    body: "Composite, wood, and screened porches across the Front Range.",
  },
  {
    title: "Permanent Lighting Installs",
    body: "Minleon LED systems on Castle Rock homes.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Hero
        eyebrow="Our work"
        headline="Real projects. Real Castle Rock homes."
        sub="We're putting together a portfolio of completed Glowmigos projects — roofing, decks, lighting, and more. Photos coming soon as we wrap up current work this season."
        showCtas={false}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <p className="text-lg text-slate-700">
            Want to see what&apos;s possible right now? Visit our{" "}
            <Link
              href="/inspiration"
              className="font-semibold text-slate-900 underline underline-offset-4 hover:text-amber-600"
            >
              Design Inspiration
            </Link>{" "}
            page for project ideas and design references. When you&apos;re
            ready to talk about your own home,{" "}
            <a
              href={brand.phoneHref}
              className="font-semibold text-slate-900 underline underline-offset-4 hover:text-amber-600"
            >
              give us a call
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="font-semibold text-slate-900 underline underline-offset-4 hover:text-amber-600"
            >
              request a free estimate
            </Link>
            .
          </p>

          <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
            {previews.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-amber-400 bg-slate-100 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                  Coming soon
                </p>
                <h3 className="mt-2 text-base font-bold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center md:py-16">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Currently booking spring &amp; summer projects.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Get on our calendar before the season fills up. Free estimates, no
            pressure.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-amber-400 px-6 py-3 text-base font-semibold text-slate-900 hover:bg-amber-500"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}

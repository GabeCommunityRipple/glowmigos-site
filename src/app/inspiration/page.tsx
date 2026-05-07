import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Info } from "lucide-react";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Design Inspiration | Glowmigos Roofing & Home Services",
  description:
    "Browse design ideas for roofing, decks, siding, and lighting projects in Castle Rock. Imagine what your home could look like with Glowmigos.",
};

type InspirationImage = {
  src: string;
  alt: string;
  caption: string;
  span2?: boolean;
};

type Category = {
  key: string;
  title: string;
  intro: string;
  images: InspirationImage[];
};

// New images: drop a file into /public/images/inspiration/ and add an entry
// to the matching category's `images` array — the page will pick it up.
const categories: Category[] = [
  {
    key: "decks",
    title: "Decks at Night",
    intro:
      "Composite, wood, or screened porches — finished with under-rail and step lighting that turns evenings outside into something special.",
    images: [
      {
        src: "/images/inspiration/deck-night-1.png",
        alt: "Composite deck with integrated under-rail and step lighting at dusk",
        caption: "Composite deck with integrated under-rail and step lighting.",
        span2: true,
      },
    ],
  },
  {
    key: "exterior",
    title: "Exterior Home Lighting",
    intro:
      "Accent lighting that transforms how a home looks at dusk. Warm LED systems integrated into siding, soffits, and architectural lines.",
    images: [],
  },
  {
    key: "holiday",
    title: "Permanent Holiday Lighting",
    intro:
      "Year-round LED systems that handle holidays, security, and architectural beauty — never hang Christmas lights again.",
    images: [],
  },
  {
    key: "transformations",
    title: "Before & After Transformations",
    intro:
      "What a complete exterior transformation can look like — from tired siding to a home that glows.",
    images: [],
  },
  {
    key: "landscape",
    title: "Landscape & Path Lighting",
    intro:
      "Beauty that shines day and night — lit walkways, gardens, and architectural features.",
    images: [],
  },
];

export default function InspirationPage() {
  return (
    <>
      <Hero
        eyebrow="Design inspiration"
        headline="Imagine what your home could look like."
        sub="Browse design ideas for roofing, decks, siding, and lighting projects. These images show the look and feel of what's possible — when you're ready to build, we'll bring your vision to life."
        showCtas={false}
      />

      <div className="border-t border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-start gap-3 px-4 py-4 md:items-center md:justify-center">
          <Info className="mt-0.5 h-4 w-4 flex-none text-amber-400 md:mt-0" />
          <p className="text-sm text-slate-300">
            These are design renderings to help you envision possibilities. To
            see our actual completed work, visit our{" "}
            <Link
              href="/portfolio"
              className="font-semibold text-amber-400 underline-offset-2 hover:underline"
            >
              portfolio
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Featured composite — a wide showcase across project types */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
            <Image
              src="/images/inspiration/portfolio-grid.png"
              alt="Design inspiration: a range of roofing, decks, siding, and lighting concepts"
              width={1600}
              height={1000}
              className="h-auto w-full object-cover"
              priority
            />
            <span className="absolute right-4 top-4 rounded-full bg-slate-900/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
              Design Inspiration
            </span>
          </div>
          <p className="mt-4 text-sm italic text-slate-600">
            A snapshot of what your project could look like — concepts across
            roofing, decks, siding, and lighting.
          </p>
        </div>
      </section>

      {categories.map((cat, i) => (
        <section
          key={cat.key}
          className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}
        >
          <div className="mx-auto max-w-7xl px-4 py-14">
            <h2 className="max-w-3xl text-2xl font-extrabold text-slate-900 md:text-3xl">
              {cat.title}
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">{cat.intro}</p>

            {cat.images.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cat.images.map((img) => (
                  <ImageCard key={img.src} image={img} />
                ))}
              </div>
            ) : (
              <p className="mt-6 text-sm italic text-slate-500">
                More inspiration imagery for this category coming soon.
              </p>
            )}
          </div>
        </section>
      ))}

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center md:py-16">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Like what you see? Let&apos;s build yours.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Every Glowmigos project starts with understanding what you want.
            Get a free estimate and we&apos;ll help you turn inspiration into
            reality.
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

function ImageCard({ image }: { image: InspirationImage }) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md ${
        image.span2 ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative aspect-[16/10] w-full bg-slate-100">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition group-hover:scale-[1.02]"
        />
        <span className="absolute right-3 top-3 rounded-full bg-slate-900/85 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-amber-400">
          Inspiration
        </span>
      </div>
      <figcaption className="px-5 py-4 text-sm italic text-slate-700">
        {image.caption}
      </figcaption>
    </figure>
  );
}

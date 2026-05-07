import Link from "next/link";
import { Phone } from "lucide-react";
import { brand } from "@/lib/brand";

type Props = {
  eyebrow?: string;
  headline: string;
  sub?: React.ReactNode;
  showCtas?: boolean;
};

export function Hero({ eyebrow, headline, sub, showCtas = true }: Props) {
  return (
    <section
      className="relative overflow-hidden bg-slate-900 text-white"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(15,23,42,0.75), rgba(15,23,42,0.55)), url('/images/work/home-at-dusk.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-400">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          {headline}
        </h1>
        {sub && (
          <p className="mt-5 max-w-2xl text-lg text-slate-200 md:text-xl">{sub}</p>
        )}

        {showCtas && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={brand.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-400 px-5 py-3 text-base font-semibold text-slate-900 hover:bg-amber-500"
            >
              <Phone className="h-5 w-5" />
              Call {brand.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 text-base font-semibold text-white backdrop-blur hover:bg-white/20"
            >
              Get a Free Estimate
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

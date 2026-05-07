import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  image?: string;
  featured?: boolean;
};

export function ServiceCard({ title, description, href, icon: Icon, image, featured }: Props) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col overflow-hidden rounded-xl border transition ${
        featured
          ? "border-amber-400 bg-amber-50 hover:border-amber-500 hover:shadow-md"
          : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
      }`}
    >
      {featured && (
        <span className="absolute right-4 top-3 z-10 rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-900">
          Featured
        </span>
      )}

      {image ? (
        <div className="relative aspect-[16/10] w-full bg-slate-100">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/10] w-full items-center justify-center bg-slate-900">
          <Icon
            className="h-24 w-24 text-amber-400 transition group-hover:scale-105"
            strokeWidth={1.5}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        {image && (
          <Icon className={`h-7 w-7 ${featured ? "text-amber-500" : "text-slate-700"}`} />
        )}
        <h3 className={`text-lg font-bold text-slate-900 ${image ? "mt-4" : ""}`}>
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-slate-600">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 group-hover:text-amber-700">
          Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

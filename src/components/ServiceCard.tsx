import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  featured?: boolean;
};

export function ServiceCard({ title, description, href, icon: Icon, featured }: Props) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col rounded-xl border p-6 transition ${
        featured
          ? "border-amber-500 bg-amber-50 hover:border-amber-600 hover:shadow-md"
          : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
      }`}
    >
      {featured && (
        <span className="absolute -top-2 right-4 rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-900">
          Featured
        </span>
      )}
      <Icon className={`h-7 w-7 ${featured ? "text-amber-600" : "text-slate-700"}`} />
      <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-slate-600">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 group-hover:text-amber-700">
        Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

import Link from "next/link";
import { Phone, ClipboardList } from "lucide-react";
import { brand } from "@/lib/brand";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-slate-200 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden">
      <a
        href={brand.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 bg-slate-900 px-4 py-4 text-sm font-semibold text-white"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 bg-sky-500 px-4 py-4 text-sm font-semibold text-slate-900"
      >
        <ClipboardList className="h-4 w-4" />
        Get Estimate
      </Link>
    </div>
  );
}

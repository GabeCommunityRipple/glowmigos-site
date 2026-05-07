import { ShieldCheck, Award, Hammer, MapPin, Lock } from "lucide-react";
import { brand } from "@/lib/brand";

const items = [
  { icon: Award, label: "NRCIA Certified" },
  { icon: ShieldCheck, label: "ICC Certified" },
  { icon: Hammer, label: "G14 Licensed" },
  { icon: Lock, label: "Insured" },
  { icon: MapPin, label: `${brand.address.city} Local` },
];

export function TrustStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-100">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 md:justify-between">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Icon className="h-4 w-4 text-amber-500" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

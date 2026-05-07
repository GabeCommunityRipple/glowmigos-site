import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contact — Free Estimate",
  description: `Call ${brand.phone} or send a message. ${brand.address.serviceAreaLabel}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">
            Contact
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
            Get a free estimate.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Fastest way to reach us is the phone. Form works too — we get a real
            email and reply same day.
          </p>

          <a
            href={brand.phoneHref}
            className="mt-6 inline-flex items-center gap-3 rounded-lg bg-sky-500 px-6 py-4 text-2xl font-extrabold text-slate-900 hover:bg-sky-400"
          >
            <Phone className="h-7 w-7" />
            {brand.phone}
          </a>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-3">
          <div className="md:col-span-1 md:space-y-6">
            <Info icon={Phone} title="Phone" body={<a className="hover:text-slate-900" href={brand.phoneHref}>{brand.phone}</a>} />
            <Info icon={Mail} title="Email" body={<a className="break-all hover:text-slate-900" href={brand.emailHref}>{brand.email}</a>} />
            <Info
              icon={MapPin}
              title="Service area"
              body={
                <>
                  {brand.address.serviceAreaLabel}
                  <br />
                  <span className="text-sm text-slate-500">
                    {brand.serviceAreas.join(" · ")}
                  </span>
                </>
              }
            />
            <Info
              icon={Clock}
              title="Hours"
              body={
                <>
                  {brand.hours.weekdays}
                  <br />
                  {brand.hours.sunday}
                </>
              }
            />
          </div>

          <div className="md:col-span-2">
            <LeadForm
              heading="Send us a message"
              subheading="We'll get back to you fast — usually same day."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Info({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-sky-100 text-sky-700">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
          {title}
        </p>
        <div className="mt-1 text-slate-700">{body}</div>
      </div>
    </div>
  );
}

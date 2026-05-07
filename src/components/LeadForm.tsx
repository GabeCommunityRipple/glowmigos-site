"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { serviceFormOptions } from "@/lib/brand";

type Status = "idle" | "submitting" | "success" | "error";

type Props = {
  /** Pre-select a service option (e.g. "NRCIA Inspection"). */
  defaultService?: string;
  /** Optional heading rendered above the form. */
  heading?: string;
  /** Optional subheading rendered above the form. */
  subheading?: string;
  /** Form variant — "card" gives a white card on darker bg; "plain" is borderless. */
  variant?: "card" | "plain";
};

export function LeadForm({
  defaultService = "Roofing",
  heading,
  subheading,
  variant = "card",
}: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? "Something went wrong. Please call us instead.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
    }
  }

  const wrapperCls =
    variant === "card"
      ? "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
      : "";

  if (status === "success") {
    return (
      <div className={wrapperCls}>
        <div className="flex flex-col items-center gap-3 py-8 text-center">
          <CheckCircle2 className="h-12 w-12 text-amber-400" />
          <h3 className="text-2xl font-bold text-slate-900">Thanks — we got it.</h3>
          <p className="max-w-md text-slate-600">
            Ronny will get back to you shortly. For urgent issues, call{" "}
            <a className="font-semibold text-slate-900 underline" href="tel:+13032103886">
              303-210-3886
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={wrapperCls}>
      {heading && <h3 className="text-2xl font-bold text-slate-900">{heading}</h3>}
      {subheading && <p className="mt-1 text-slate-600">{subheading}</p>}

      <form
        onSubmit={handleSubmit}
        className={`grid gap-4 md:grid-cols-2 ${heading || subheading ? "mt-6" : ""}`}
        noValidate
      >
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field
          label="Address or City"
          name="address"
          required
          autoComplete="street-address"
        />

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-800">
            Service Needed
          </label>
          <select
            name="service"
            defaultValue={defaultService}
            required
            className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-amber-400/30"
          >
            {serviceFormOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-800">
            Message <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Anything we should know? Hail damage, timing, what you're trying to accomplish..."
            className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-amber-400/30"
          />
        </div>

        {/* Honeypot — bots fill, humans don't. Hidden from users + AT. */}
        <div className="hidden" aria-hidden="true">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-base font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              <>Get My Free Estimate</>
            )}
          </button>
          <p className="mt-3 text-xs text-slate-500">
            We respond fast. For urgent issues, call{" "}
            <a className="font-semibold text-slate-700 underline" href="tel:+13032103886">
              303-210-3886
            </a>
            .
          </p>
        </div>

        {status === "error" && (
          <div className="md:col-span-2 flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">
            <AlertCircle className="mt-0.5 h-4 w-4 flex-none" />
            <span>{errorMsg ?? "Something went wrong. Please call us instead."}</span>
          </div>
        )}
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-slate-800">
        {label}
        {required && <span className="text-amber-500"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-amber-400/30"
      />
    </div>
  );
}

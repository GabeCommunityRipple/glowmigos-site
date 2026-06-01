"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AlertTriangle, Phone, X } from "lucide-react";
import { brand, featureFlags } from "@/lib/brand";

const STORAGE_KEY = "storm_banner_dismissed";

export function StormBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === "true") {
        setVisible(false);
      }
    } catch {
      // ignore localStorage errors (private mode, ITP, etc.)
    }
  }, []);

  if (!featureFlags.stormResponseBannerActive) return null;
  if (!visible) return null;

  const dismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-amber-500 text-slate-900">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-3 py-2 sm:gap-3 sm:px-4">
        <Link
          href="/storm-response"
          className="flex min-w-0 flex-1 items-center gap-2 hover:opacity-90"
        >
          <AlertTriangle className="h-4 w-4 flex-none" />
          <span className="truncate text-xs font-bold sm:text-sm">
            <span className="hidden sm:inline">
              STORM RESPONSE ACTIVE — Emergency Tarping &amp; Free Roof Inspections
            </span>
            <span className="sm:hidden">STORM RESPONSE — Tap for details</span>
          </span>
        </Link>
        <a
          href={brand.phoneHref}
          onClick={(e) => e.stopPropagation()}
          className="hidden items-center gap-1.5 rounded-md bg-slate-900 px-3 py-1.5 text-xs font-bold text-white transition hover:text-amber-500 sm:inline-flex"
        >
          <Phone className="h-3.5 w-3.5" />
          Call {brand.phone}
        </a>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss storm response banner"
          className="rounded-md p-1 text-slate-900 transition hover:bg-amber-600/30"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

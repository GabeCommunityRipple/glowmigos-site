"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { brand } from "@/lib/brand";

export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export function MobileNav({ items }: { items: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-amber-400 md:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-0 z-50 bg-black transition-opacity duration-200 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
            <Link
              href="/"
              aria-label="Glowmigos Construction + Lighting"
              onClick={close}
              className="block"
            >
              <Image
                src={brand.logo}
                alt="Glowmigos Construction + Lighting"
                width={1493}
                height={575}
                className="h-11 w-auto"
              />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-amber-400"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-8">
            <ul className="space-y-1">
              {items.map((item) =>
                item.children ? (
                  <li key={item.label} className="pt-4 first:pt-0">
                    <p className="px-3 pb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                      {item.label}
                    </p>
                    <ul className="space-y-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={close}
                            className="block rounded-md px-3 py-2 text-xl font-semibold text-white transition hover:text-amber-400"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href!}
                      onClick={close}
                      className="block rounded-md px-3 py-3 text-2xl font-semibold text-white transition hover:text-amber-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="border-t border-slate-800 px-4 py-6">
            <a
              href={brand.phoneHref}
              onClick={close}
              className="flex items-center justify-center gap-3 rounded-md bg-amber-400 px-5 py-4 text-lg font-bold text-slate-900 hover:bg-amber-500"
            >
              <Phone className="h-5 w-5" />
              Call {brand.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

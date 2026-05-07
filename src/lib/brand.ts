// Single source of truth for brand-level content.
// Swap this file (or its values) to rebrand to "Big Horn Construction" later.

export const brand = {
  name: "Glowmigos Home Services",
  shortName: "Glowmigos",
  tagline:
    "Castle Rock's trusted home services pro — roofing, decks, gutters, lights, and more.",
  heroHeadline:
    "Castle Rock's Trusted Roofing, Decks & Home Services",
  phone: "303-210-3886",
  phoneHref: "tel:+13032103886",
  email: "glowmigosroofing@gmail.com",
  emailHref: "mailto:glowmigosroofing@gmail.com",
  address: {
    line1: "3028 Trailblazer Way",
    city: "Castle Rock",
    state: "CO",
    zip: "80109",
    full: "3028 Trailblazer Way, Castle Rock, CO 80109",
    serviceAreaLabel: "Serving Castle Rock and the Front Range",
  },
  hours: {
    weekdays: "Mon–Sat 7am–7pm",
    sunday: "Sun by appointment",
  },
  founded: 2022,
  owner: "Ronny Webb",
  serviceAreas: [
    "Castle Rock",
    "Castle Pines",
    "Parker",
    "Lone Tree",
    "Highlands Ranch",
    "Monument",
    "Colorado Springs",
    "Denver Metro",
    "Douglas County",
  ],
  certifications: [
    "NRCIA Certified",
    "ICC Certified",
    "G14 Licensed General Contractor",
    "Insured",
    "Castle Rock Local",
  ],
  social: {
    nextdoor: "Nextdoor Neighborhood Favorite",
  },
} as const;

export type ServiceKey =
  | "roofing"
  | "decks"
  | "gutters"
  | "siding"
  | "painting"
  | "lighting"
  | "nrcia"
  | "storm";

export const services: {
  key: ServiceKey;
  title: string;
  short: string;
  description: string;
  details: string[];
  formValue: string;
}[] = [
  {
    key: "roofing",
    title: "Roofing",
    short: "Replacement, repair, hail damage, insurance claims.",
    description:
      "Full-service residential roofing — from minor repairs to complete tear-offs. We specialize in hail-damage claims and Class 4 impact-resistant shingle upgrades that can lower your insurance premium.",
    details: [
      "Roof replacement & tear-offs",
      "Repairs & leak diagnosis",
      "Hail and wind damage",
      "Class 4 hail-resistive upgrades",
      "Insurance claim advocacy",
    ],
    formValue: "Roofing",
  },
  {
    key: "decks",
    title: "Decks",
    short: "New construction, composite, wood, screened porches.",
    description:
      "A growing part of our business. We build new decks, screened porches, and rebuild old ones using composite (Trex) or traditional wood — built to handle Colorado weather.",
    details: [
      "New deck construction",
      "Composite (Trex) and wood",
      "Screened porches & covers",
      "Repairs & resurfacing",
    ],
    formValue: "Deck",
  },
  {
    key: "gutters",
    title: "Gutters",
    short: "Installation, repair, cleaning, gutter guards.",
    description:
      "Seamless gutter installation, repairs, and cleaning. We install leaf guards that actually keep pine needles and debris out — important for Front Range homes.",
    details: [
      "Seamless gutter installation",
      "Gutter repair & realignment",
      "Cleaning & inspection",
      "Leaf guard systems",
    ],
    formValue: "Gutters",
  },
  {
    key: "siding",
    title: "Siding",
    short: "Installation and repair.",
    description:
      "Siding installation and repair to protect your home from Colorado wind, hail, and snow. We handle both full replacements and storm-damage repairs.",
    details: [
      "Full siding replacement",
      "Storm damage repair",
      "Trim and fascia",
    ],
    formValue: "Siding",
  },
  {
    key: "painting",
    title: "Painting",
    short: "Interior and exterior.",
    description:
      "Interior and exterior painting done right — proper prep, quality materials, clean lines. Often paired with our siding and deck work.",
    details: [
      "Exterior painting",
      "Interior painting",
      "Deck staining & sealing",
      "Trim and accent work",
    ],
    formValue: "Painting",
  },
  {
    key: "lighting",
    title: "Christmas & Permanent Lighting",
    short: "Holiday installs and year-round permanent lighting.",
    description:
      "The original Glowmigos service. Professional Christmas light installation and removal, plus permanent year-round lighting systems controlled from your phone.",
    details: [
      "Holiday Christmas lights",
      "Permanent year-round lights",
      "App-controlled color systems",
      "Install, takedown, storage",
    ],
    formValue: "Lighting",
  },
  {
    key: "nrcia",
    title: "NRCIA Roof Inspections",
    short:
      "1 of only 2 NRCIA-certified roof inspectors in Colorado. Real estate, insurance, pre-purchase.",
    description:
      "Ronny is one of only two NRCIA-certified roof inspectors in the state. NRCIA inspections are the gold standard for real estate transactions, insurance disputes, and pre-purchase due diligence.",
    details: [
      "Real estate transaction inspections",
      "Insurance dispute documentation",
      "Pre-purchase due diligence",
      "Post-storm damage assessment",
    ],
    formValue: "NRCIA Inspection",
  },
  {
    key: "storm",
    title: "Storm Damage / Insurance Claims",
    short: "Full advocacy through the insurance process.",
    description:
      "We work directly with your insurance adjuster to make sure storm damage is properly documented and fully covered. You shouldn't be fighting your carrier alone.",
    details: [
      "Free damage assessment",
      "Adjuster meetings on-site",
      "Full claim documentation",
      "Supplements when needed",
    ],
    formValue: "Storm Damage",
  },
];

export const serviceFormOptions = [
  ...services.map((s) => s.formValue),
  "Other",
];

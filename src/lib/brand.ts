// Single source of truth for brand-level content.
// Swap this file (or its values) to rebrand to "Big Horn Construction" later.

export const brand = {
  name: "Glowmigos Home Services",
  shortName: "Glowmigos",
  tagline:
    "Castle Rock's lighting-forward home contractor — roofing, decks, siding, and the warm glow that ties every project together.",
  heroHeadline: "We make Castle Rock homes glow.",
  phone: "303-210-3886",
  phoneHref: "tel:+13032103886",
  email: "glowmigosroofing@gmail.com",
  emailHref: "mailto:glowmigosroofing@gmail.com",
  logo: "/images/logos/glowmigos-logo.png",
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
  googleReviewsUrl:
    "https://www.google.com/search?q=Glowmigos+Roofing+%26+Home+Services+Reviews",
} as const;

export type ServiceKey =
  | "roofing"
  | "decks"
  | "iron-doors"
  | "gutters"
  | "siding"
  | "painting"
  | "lighting"
  | "nrcia"
  | "storm"
  | "commercial";

export const services: {
  key: ServiceKey;
  title: string;
  short: string;
  description: string;
  details: string[];
  formValue: string;
  image?: string;
}[] = [
  {
    key: "roofing",
    title: "Residential Roofing",
    short: "Asphalt shingle, concrete tile, and metal — built for Colorado.",
    description:
      "Asphalt shingle, concrete tile, metal — built for Colorado winters. Permanent LED lighting can be installed in the same trip — never hang Christmas lights again.",
    details: [
      "Roof replacement & tear-offs",
      "Repairs & leak diagnosis",
      "Hail and wind damage",
      "Class 4 hail-resistive upgrades",
      "Insurance claim advocacy",
    ],
    formValue: "Roofing",
    image: "/images/services/roofing.jpg",
  },
  {
    key: "decks",
    title: "Decks",
    short: "New construction, composite, wood, screened porches.",
    description:
      "New construction in composite, wood, or screened porches. Optional under-rail and step lighting turns evenings outside into something you actually use.",
    details: [
      "New deck construction",
      "Composite (Trex) and wood",
      "Screened porches & covers",
      "Repairs & resurfacing",
    ],
    formValue: "Deck",
    image: "/images/services/decks.jpg",
  },
  {
    key: "iron-doors",
    title: "Custom Iron Doors",
    short: "Hand-forged iron entry doors with leaded or textured glass.",
    description:
      "Hand-forged iron entry doors with leaded or textured glass. The first thing visitors see — done right. Pair with exterior accent lighting and your front entrance becomes the showpiece of your home.",
    details: [
      "Custom design from your drawings or fresh sketches",
      "Solid steel construction, hand-applied finishes",
      "Glass: clear, frosted, leaded, or textured",
      "Custom hardware and finish selection",
      "Residential shipping nationwide",
    ],
    formValue: "Custom Iron Doors",
    image: "/images/services/iron-doors.jpg",
  },
  {
    key: "siding",
    title: "Siding",
    short: "Installation and repair.",
    description:
      "Full siding installs and storm-damage repairs. Pair with exterior accent lighting and your home becomes the one neighbors point to at night.",
    details: [
      "Full siding replacement",
      "Storm damage repair",
      "Trim and fascia",
    ],
    formValue: "Siding",
    image: "/images/services/siding.jpg",
  },
  {
    key: "gutters",
    title: "Gutter Guards & Snow Guards",
    short: "Complete water management — Gutter Rx™ and Rocky Mountain Snow Guards.",
    description:
      "Authorized installers of Gutter Rx™ filtration and Rocky Mountain Snow Guards.",
    details: [
      "Seamless gutter installation",
      "Gutter Rx™ filtration systems",
      "Rocky Mountain Snow Guards",
      "Cleaning & inspection",
      "Repair & realignment",
    ],
    formValue: "Gutters",
    image: "/images/services/gutters.webp",
  },
  {
    key: "lighting",
    title: "Permanent & Holiday Lighting",
    short: "Never hang lights again — Minleon™ permanent LED systems.",
    description:
      "The finish that gives Glowmigos its name. Minleon™ permanent LED systems for year-round holidays, security, and the architectural glow that ties every project we do together.",
    details: [
      "Minleon™ permanent LED systems",
      "Holiday Christmas lights",
      "App-controlled color systems",
      "Install, takedown, storage",
    ],
    formValue: "Lighting",
    image: "/images/services/lighting.webp",
  },
  {
    key: "painting",
    title: "Painting",
    short: "Exterior curb appeal, interior refresh.",
    description: "Interior and exterior painting done right.",
    details: [
      "Exterior painting",
      "Interior painting",
      "Deck staining & sealing",
      "Trim and accent work",
    ],
    formValue: "Painting",
    image: "/images/services/painting.webp",
  },
  {
    key: "commercial",
    title: "Commercial Flat Roofing",
    short: "EPDM, TPO, and Silicone Roof Coatings.",
    description:
      "Specialized solutions for flat and low-slope roofs. Certified experts in EPDM, TPO, and Silicone Roof Coatings to extend commercial roof life.",
    details: [
      "EPDM and TPO membrane systems",
      "Silicone roof coatings",
      "Leak diagnosis and repair",
      "Roof life-extension assessments",
    ],
    formValue: "Commercial Roofing",
    image: "/images/services/commercial.webp",
  },
  {
    key: "storm",
    title: "Storm Damage & Emergency Repair",
    short: "24/7 rapid response — ice dams, wind, hail, emergency tarping.",
    description:
      "24/7 Rapid Response. We specialize in Ice Dam Removal (Steam), Wind Damage, Hail Restoration, and Emergency Tarping. When nature strikes, we secure your home fast.",
    details: [
      "24/7 emergency response",
      "Ice dam removal (steam)",
      "Wind and hail restoration",
      "Emergency tarping",
      "Full insurance claim documentation",
    ],
    formValue: "Storm Damage",
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
    image: "/images/services/nrcia.jpg",
  },
];

export const serviceFormOptions = [
  ...services.map((s) => s.formValue),
  "Other",
];

// Promotions surfaced on the home page.
export const promotions = [
  {
    title: "Military & First Responders",
    body: "10% off all roofing and home services. Thank you for your service.",
  },
  {
    title: "Gutter Cleaning",
    body: "1-Story $300 · 2-Story $400. Schedule before storm season.",
  },
];

// "Why choose us" — Ronny's wording, condensed.
export const whyChooseUs = [
  "Local expertise — we know Colorado weather and what it does to roofs",
  "Full-service contractor — one accountable team for the whole exterior",
  "Honest pricing and reliable turnaround times",
  "Long-lasting results backed by professional-grade materials",
];

// FAQs — pulled verbatim from glowmigoshomeservices.com/about/.
export const faqs = [
  {
    q: "When should I schedule roof repairs?",
    a: "If you notice leaks, missing shingles, sagging, or storm damage, it's important to schedule roof repairs right away. Glowmigos offers prompt and reliable roof repair services in Castle Rock to prevent further damage and protect your property.",
  },
  {
    q: "How much does a new roof cost?",
    a: "The cost of a new roof depends on the size, materials, and complexity of the project. Glowmigos provides free, no-obligation estimates so you'll know exactly what to expect before we start.",
  },
  {
    q: "How long does roof installation or repair take?",
    a: "Most roof repairs can be completed in a single day, while full roof installations typically take 1–3 days, depending on size and materials. Our team works efficiently while ensuring top-quality results that last.",
  },
  {
    q: "Do you install gutter guards and seamless gutters?",
    a: "Yes. We provide complete gutter installation services in Castle Rock, including seamless gutters and clog-resistant guard systems designed to protect your home's foundation and roofing.",
  },
  {
    q: "Can you handle both interior and exterior painting?",
    a: "Absolutely. Our painting crew provides both exterior house painting in Castle Rock to boost curb appeal and interior painting services to refresh and modernize living spaces.",
  },
  {
    q: "Do you offer permanent outdoor lighting?",
    a: "Yes, Glowmigos specializes in permanent and seasonal lighting solutions. We design and install energy-efficient lighting that enhances your home year-round while keeping maintenance low.",
  },
  {
    q: "Are you licensed for general contractor services?",
    a: "Yes. We're an ICC-certified general contractor in Castle Rock, which means we can handle not only roofing but also remodeling, structural improvements, and larger construction projects.",
  },
];

// Real photos of Ronny's work for the home gallery.
export const workPhotos = [
  {
    src: "/images/work/roofing-1.jpg",
    alt: "Glowmigos crew on a residential roofing job in Castle Rock",
  },
  {
    src: "/images/work/roofing-2.jpg",
    alt: "Asphalt shingle roof installation by Glowmigos",
  },
  {
    src: "/images/work/lights-wreath.webp",
    alt: "Holiday lights and wreath installed by Glowmigos",
  },
  {
    src: "/images/work/lights-roof.webp",
    alt: "Permanent lighting system installed on a residential roof",
  },
  {
    src: "/images/work/lights-metal-roof.webp",
    alt: "Holiday lights along a metal roofline",
  },
  {
    src: "/images/work/iron-door-2.jpg",
    alt: "Hand-forged iron entry door installed by Glowmigos",
  },
  {
    src: "/images/work/iron-door-3.jpg",
    alt: "Custom iron door detail and hardware",
  },
];

import { brand, services } from "./brand";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://glowmigoshomeservices.com";

export type Location = {
  slug: string;
  city: string;
  state: string;
  county: string;
  zipCodes?: string[];
  population?: string;
  /** Short blurb used on cards and "we also serve" links. */
  intro: string;
  /** Reasons we work well here (used as bullet support if needed). */
  whyHere: string[];
  /** Headline summary of local issues. */
  localConcerns: string;
  /** Specific named neighborhoods we serve. */
  neighborhoods: string[];
  /** brand.services keys to feature on this page. */
  servicesEmphasis: string[];
  /** Other location slugs to surface in "we also serve nearby". */
  nearbyServeSlugs: string[];
  /** Page hero headline. */
  heroHeadline: string;
  /** Page hero subhead. */
  heroSub: string;
  /** Body paragraphs for the city-intro section. */
  introParagraphs: string[];
  /** Body paragraphs for the local-concerns section. */
  concernsParagraphs: string[];
  /** Landmarks / references for content color. */
  references: string[];
  metaTitle: string;
  metaDescription: string;
};

export const locations: Location[] = [
  {
    slug: "castle-rock",
    city: "Castle Rock",
    state: "CO",
    county: "Douglas",
    zipCodes: ["80104", "80108", "80109"],
    population: "~80,000",
    intro:
      "Castle Rock-based since 2022. Roofing, decks, siding, gutters, custom iron doors, lighting, and storm-damage insurance claims — every neighborhood in town.",
    whyHere: [
      "Headquartered on Trailblazer Way",
      "NRCIA-certified roof inspector on staff",
      "Hail-experienced; insurance-claim specialists",
    ],
    localConcerns:
      "Hail Alley conditions, dramatic UV exposure, freeze-thaw cycles, and gutter ice dams.",
    neighborhoods: [
      "The Meadows",
      "Founders Village",
      "Crystal Valley",
      "Plum Creek",
      "Sapphire Pointe",
      "Castlewood Ranch",
      "Red Hawk",
    ],
    servicesEmphasis: ["roofing", "storm", "lighting", "gutters", "iron-doors", "decks"],
    nearbyServeSlugs: ["castle-pines", "parker", "highlands-ranch"],
    heroHeadline: "Roofing & home services in Castle Rock, CO.",
    heroSub:
      "Castle Rock-based since 2022. Roofing, decks, lighting, and full exterior work for The Meadows, Founders Village, Plum Creek, and every neighborhood in between.",
    introParagraphs: [
      "Glowmigos has been Castle Rock's home contractor since 2022 — owner-operated, owner-on-every-job, headquartered on Trailblazer Way. We started hanging Christmas lights in town and grew into a full-service exterior contractor as customers kept asking us to fix the roof above the lights, the siding behind them, the deck under them.",
      "We work every neighborhood in town — The Meadows, Founders Village, Crystal Valley, Plum Creek, Sapphire Pointe, Castlewood Ranch, Red Hawk, and downtown along Wilcox. The scope covers roofing, decks, siding, gutters, custom iron entry doors, permanent and holiday lighting, painting, and storm-damage insurance work.",
      "Castle Rock sits in one of the most active hail zones in the country — locals call it Hail Alley. We live in that reality every day: documenting damage for adjusters to NRCIA standards, upgrading homes to Class 4 impact-resistive shingles, and repairing fast when storms blow through. We're the contractor neighbors send neighbors to.",
    ],
    concernsParagraphs: [
      "Castle Rock's storm season runs May through August, with sudden afternoon thunderstorms that drop golfball-sized hail without warning. Even minor hail bruising can cut a roof's life in half — but it's often invisible from the ground. Ronny is one of only two NRCIA-certified roof inspectors in Colorado, which means our reports stand up when insurance carriers want to dismiss real damage as wear-and-tear.",
      "On replacement work, we steer homeowners toward Class 4 impact-resistive shingles. Most carriers reward Class 4 with a premium discount, and the longer service life pays back the upgrade quickly in this climate. We pull Class 4 product samples from the major manufacturers so you can see what you're getting before signing.",
      "Beyond hail, Castle Rock's elevation (around 6,200 feet) means strong UV exposure that ages roofs faster than the rest of the Front Range, dramatic freeze-thaw cycles, and gutter ice dams in late winter that can back water under shingles. The same roof system that survives Boulder doesn't always survive Castle Rock — we spec for our weather, not someone else's.",
    ],
    references: [
      "The Rock",
      "downtown Wilcox Street",
      "Festival Park",
      "Outlets at Castle Rock",
      "Castle Rock Starlighting",
    ],
    metaTitle: "Roofing & Home Services in Castle Rock, CO | Glowmigos",
    metaDescription:
      "Castle Rock roofing, decks, siding, gutters, and permanent lighting since 2022. NRCIA-certified, hail-experienced, locally owned. Free estimates.",
  },
  {
    slug: "castle-pines",
    city: "Castle Pines",
    state: "CO",
    county: "Douglas",
    zipCodes: ["80108"],
    population: "~12,000",
    intro:
      "Premium home contractor serving Castle Pines and The Village. Custom iron doors, NRCIA inspections, permanent lighting, and HOA-experienced exterior work.",
    whyHere: [
      "Nextdoor Neighborhood Favorite — The Village at Castle Pines",
      "HOA architectural review experience",
      "NRCIA-certified for high-value real estate transactions",
    ],
    localConcerns:
      "Strict HOA architectural review, premium material expectations, high-stakes real estate transactions.",
    neighborhoods: [
      "The Village at Castle Pines",
      "Castle Pines North",
      "Vista Pointe",
      "Boulder Ridge",
      "Buffalo Ridge",
    ],
    servicesEmphasis: ["iron-doors", "nrcia", "lighting", "roofing", "decks"],
    nearbyServeSlugs: ["castle-rock", "highlands-ranch", "parker"],
    heroHeadline:
      "Castle Pines home contractor — iron doors, lighting, and premium exterior work.",
    heroSub:
      "Premium work for The Village at Castle Pines and Castle Pines North. NRCIA-certified, HOA-experienced, Nextdoor Neighborhood Favorite.",
    introParagraphs: [
      "Castle Pines is one of the highest-income zip codes in Colorado, and homeowners here expect work that matches the homes — premium materials, exacting finishes, and contractors who understand HOA architectural review boards. Glowmigos has worked Castle Pines since 2022, and Ronny is a Nextdoor Neighborhood Favorite in The Village at Castle Pines specifically.",
      "The most-requested services here aren't the same as Parker or Highlands Ranch. Custom hand-forged iron entry doors — with leaded or textured glass and matched proportions — set the tone for the entire front of a home. Permanent LED architectural lighting transforms how a house reads from the street at dusk. And our NRCIA roof inspection credential matters when million-dollar homes change hands and adjusters or buyers want defensible documentation.",
      "We know the gated communities, we know the architectural review process at The Village, and we know what passes review and what doesn't. We submit material samples and shingle specs ahead of work routinely — the lead time isn't a surprise, it's a planned step in every Castle Pines project.",
    ],
    concernsParagraphs: [
      "Castle Pines homeowners face a different operational reality than the rest of Douglas County. Architectural review boards enforce strict material and color requirements, and the same Class 4 hail-resistive shingle we'd put on a Parker home may need a different color or profile to pass review here. We routinely submit specs, samples, and drawings before any work starts, and we plan project timelines around the review window.",
      "Premium homes also mean premium repair expectations. A botched roofing job on a 6,000-square-foot home in The Village isn't just a roofing problem — it's a property-value problem. Our NRCIA certification (one of only two inspectors in the state) is genuinely useful here in real estate transactions, in insurance disputes over higher-value claims, and in pre-purchase due diligence for homes that often top a million dollars.",
      "We're not a high-volume crew. Ronny is on every Castle Pines job personally. If you'd rather have the contractor who'll be on your roof show up to the initial walkthrough — that's how we work.",
    ],
    references: [
      "The Village at Castle Pines",
      "Castle Pines North",
      "Castle Pines Golf Club",
      "Country Club at Castle Pines",
    ],
    metaTitle: "Castle Pines Roofing, Iron Doors & Lighting | Glowmigos",
    metaDescription:
      "Premium home contractor in Castle Pines. Custom iron doors, NRCIA roof inspections, permanent lighting, HOA-experienced. Nextdoor Neighborhood Favorite.",
  },
  {
    slug: "parker",
    city: "Parker",
    state: "CO",
    county: "Douglas",
    zipCodes: ["80134", "80138"],
    population: "~60,000",
    intro:
      "Family-focused exterior work across Parker — first-cycle roof replacements, composite decks, screened porches, and the lighting that makes evenings outside worth staying for.",
    whyHere: [
      "Experienced with first-cycle roof replacements on 1995–2010 builds",
      "Composite decks and screened porches across the Front Range",
      "Permanent and seasonal lighting",
    ],
    localConcerns:
      "Original builder-grade roofs hitting end of life, hail accumulation across recent storm years, outdoor-living projects.",
    neighborhoods: [
      "Stonegate",
      "Stroh Ranch",
      "Canterberry Crossing",
      "Bradbury Ranch",
      "Newlin Meadows",
      "The Pinery",
    ],
    servicesEmphasis: ["roofing", "decks", "lighting", "gutters", "painting"],
    nearbyServeSlugs: ["castle-rock", "castle-pines", "highlands-ranch"],
    heroHeadline: "Parker, CO home contractor — roofing, decks, and lighting.",
    heroSub:
      "Family-focused exterior work across Parker. First-cycle roof replacements, composite decks, screened porches, and the lighting that turns evenings outside into something special.",
    introParagraphs: [
      "Parker is one of the fastest-growing towns in Douglas County, and a lot of the housing stock is reaching an interesting age — 20 to 30 years old, which is exactly when the original builder-grade roofs need their first real replacement. We handle a lot of those calls. Same story with the decks: original cedar that's seen 25 Colorado winters and is ready to come out, composite construction that doesn't need annual sealing, and screened porches built for actually using them.",
      "Parker has a small-town feel anchored by Mainstreet — Fika Coffeehouse, the Parker Days festival each June, the indie shops downtown — and the homes around there reflect that family-first character. Most of our Parker work is repeat business or referrals from neighbors. We're not the contractor that flies in for a hail circuit and disappears; we live here, and we plan to be the people you call ten years from now too.",
    ],
    concernsParagraphs: [
      "Most Parker neighborhoods are newer than the rest of the Glowmigos service area, which means a lot of homes built between 1995 and 2010 are hitting their first-replacement cycle right now. The signs aren't always obvious — granule loss in the gutters, a few missing shingles after a windstorm, the occasional ceiling stain that gets blamed on humidity. Often that's the start of a roof reaching end of life.",
      "If your Parker home was built in the late 1990s or early 2000s and you've never replaced the roof, it's worth a real look. Hail bruising from the storms of 2018, 2019, and 2023 likely accelerated the timeline whether you filed a claim or not. We come out, give you an honest assessment, and document anything that's there — no pressure to replace if it doesn't need it.",
      "Parker's other defining feature is outdoor living. The lot sizes generally support real decks and patio space, and we build that side of the business heavily here — composite construction, integrated LED step lighting, screened additions for the bug season, and built-in seating where the architecture supports it.",
    ],
    references: [
      "Mainstreet Parker",
      "Parker Days",
      "Bingham Lake",
      "Salisbury Equestrian Park",
      "Fika Coffeehouse",
    ],
    metaTitle: "Parker, CO Roofing, Decks & Lighting | Glowmigos",
    metaDescription:
      "Parker home contractor for roofing, decks, gutters, and permanent lighting. Family-focused exteriors near Mainstreet, Bingham Lake, and Salisbury Park.",
  },
  {
    slug: "highlands-ranch",
    city: "Highlands Ranch",
    state: "CO",
    county: "Douglas",
    zipCodes: ["80126", "80129", "80130"],
    population: "~110,000",
    intro:
      "Highlands Ranch home contractor experienced with the master-planned HOA. Roofing, siding, painting, and lighting that gets through architectural review the first time.",
    whyHere: [
      "Experienced with Highlands Ranch architectural review submissions",
      "Approved-palette roofing, siding, and paint specs",
      "Insurance-claim documentation",
    ],
    localConcerns:
      "Strict master-planned HOA enforcement, restricted material palettes, original siding reaching end of life.",
    neighborhoods: [
      "Westridge",
      "Eastridge",
      "Northridge",
      "Southridge",
      "Backcountry",
    ],
    servicesEmphasis: ["roofing", "siding", "painting", "lighting", "nrcia", "gutters"],
    nearbyServeSlugs: ["castle-pines", "castle-rock", "parker"],
    heroHeadline:
      "Highlands Ranch home contractor — HOA-experienced roofing, siding, and lighting.",
    heroSub:
      "Roofing, siding, painting, and permanent lighting that meets Highlands Ranch HOA standards the first time around.",
    introParagraphs: [
      "Highlands Ranch is the largest master-planned community in Colorado — about 110,000 residents across a single, tightly governed HOA. Every exterior change goes through architectural review. Material colors are restricted. Roofing styles are restricted. Paint, siding, garage doors, even shed colors are governed. If you've owned a Highlands Ranch home for more than a year, you already know this. If you're new to the community, welcome to the process.",
      "We work in that reality routinely. We know which Class 4 hail-resistive shingles match the approved color palettes for which sub-neighborhood. We know how to assemble an architectural-review submission that gets approved on the first pass. We know which paint manufacturers' color libraries the HOA maintains active spec sheets for. The HOA isn't an obstacle — it's a process that needs to be planned for, and we plan for it on every project.",
    ],
    concernsParagraphs: [
      "The Highlands Ranch HOA reviews exterior work through its architectural committee, and submissions need specific information: material specifications, color samples, drawings if applicable, and sometimes neighbor notification. Requirements vary slightly by sub-area (Westridge, Eastridge, Northridge, Southridge, Backcountry), but the principle is the same — get it right the first time, because resubmission delays projects by weeks.",
      "We also know the visual consistency the community enforces: roof colors tend toward weathered wood and slate-grey tones; siding colors pull from a constrained palette; even paint accents have approved selections. Our advice when planning a Highlands Ranch exterior project is always the same — pull the approved palette before you fall in love with a color you can't have.",
      "Beyond HOA, Highlands Ranch homes mostly date to the late 1980s through early 2010s, which means a lot of original siding (often hardboard or low-grade vinyl) is now reaching end of life. Storm damage from hail can accelerate that timeline, and we work insurance claims for siding loss routinely. Replacement gives an opportunity to upgrade to materials with longer warranties — within the approved palette.",
    ],
    references: [
      "Highlands Ranch Mansion",
      "Backcountry Wilderness Area",
      "Town Center",
      "Toepfer Park",
      "Civic Green",
    ],
    metaTitle: "Highlands Ranch Roofing, Siding & Painting | Glowmigos",
    metaDescription:
      "Highlands Ranch home contractor experienced with HOA architectural review. Roofing, siding, painting, lighting. NRCIA-certified, locally owned.",
  },
  {
    slug: "colorado-springs",
    city: "Colorado Springs",
    state: "CO",
    county: "El Paso",
    zipCodes: ["80903", "80906", "80907", "80908", "80918", "80920", "80921"],
    population: "~500,000",
    intro:
      "Colorado Springs roofing, storm-damage claims, NRCIA inspections, and lighting. 10% off all work for military, veterans, and first responders.",
    whyHere: [
      "10% military, veteran, and first-responder discount",
      "NRCIA-certified — fast turnaround for relocations",
      "Hail and storm-damage insurance specialists",
    ],
    localConcerns:
      "Military relocation volume, mountain-adjacent fire and snow risk, hail patterns specific to the Springs corridor.",
    neighborhoods: [
      "Briargate",
      "Black Forest",
      "Old Colorado City",
      "Broadmoor",
      "Northgate",
      "Powers",
      "Mountain Shadows",
    ],
    servicesEmphasis: ["nrcia", "roofing", "storm", "lighting", "gutters"],
    nearbyServeSlugs: ["castle-rock", "castle-pines", "parker"],
    heroHeadline:
      "Colorado Springs home contractor — roofing, lighting, and NRCIA inspections.",
    heroSub:
      "Roofing, storm-damage claims, NRCIA inspections, and lighting for Colorado Springs. 10% off all work for military, veterans, and first responders.",
    introParagraphs: [
      "Colorado Springs is the largest city in the Glowmigos service area — around 500,000 residents — and it's home to one of the largest military communities in the country. Fort Carson, Peterson Space Force Base, Schriever, the Air Force Academy, and Cheyenne Mountain all sit in or near the Springs. That mix of military, mountain, and suburban housing makes the work different here than it is up in Castle Rock.",
      "We offer 10% off all roofing and home services for military, veterans, and first responders. It's a discount that pays back what's been earned, not a marketing gimmick. We also do a lot of NRCIA roof inspections here: military families relocate often, and an independent, defensible roof report is exactly what realtors and insurance adjusters need on a fast-moving transaction. Ronny is one of only two NRCIA-certified inspectors in Colorado, which makes that service especially relevant for the Springs.",
    ],
    concernsParagraphs: [
      "Colorado Springs sits at the foot of Pikes Peak, and the elevation and topography drive weather patterns that differ from Denver metro: more dramatic snow loads in higher-elevation neighborhoods, real fire risk in mountain-adjacent areas (Mountain Shadows, parts of Cedar Heights, north Black Forest), and hail patterns that hit harder some seasons than the I-25 corridor north of town. Roof systems here need to be specified for the specific neighborhood, not just generic Front Range.",
      "Older Springs neighborhoods — Old Colorado City, the Westside, downtown — have housing stock dating back nearly a century. The work there often involves historic-style restoration: matching original profiles, working around lath-and-plaster substrates, navigating local historic district guidelines. That's a different project than newer Briargate or Powers corridor neighborhoods, where the work looks more like Castle Rock or Parker.",
      "The Broadmoor area, north Black Forest, and certain Manitou Springs streets carry their own architectural expectations. We adjust accordingly. Bring us a project, tell us the neighborhood, and we'll come understand what's there before we propose anything.",
    ],
    references: [
      "Pikes Peak",
      "Garden of the Gods",
      "Old Colorado City",
      "Broadmoor",
      "Fort Carson",
      "USAFA",
      "Manitou Springs",
      "Cheyenne Mountain",
    ],
    metaTitle: "Colorado Springs Roofing & NRCIA Inspections | Glowmigos",
    metaDescription:
      "Colorado Springs roofing, storm damage repair, NRCIA-certified inspections, and lighting. 10% military discount. Serving Fort Carson, USAFA, and surrounding.",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationSchema(loc: Location) {
  const featuredOffers = loc.servicesEmphasis
    .map((key) => services.find((s) => s.key === key))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.short,
      },
    }));

  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: brand.name,
    image: `${SITE_URL}/og.jpg`,
    telephone: brand.phone,
    email: brand.email,
    url: `${SITE_URL}/${loc.slug}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.address.line1,
      addressLocality: brand.address.city,
      addressRegion: brand.address.state,
      postalCode: brand.address.zip,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: loc.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${loc.county} County, Colorado`,
      },
    },
    hasCredential: brand.certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c,
    })),
    makesOffer: featuredOffers,
    founder: { "@type": "Person", name: brand.owner },
    foundingDate: String(brand.founded),
  };
}

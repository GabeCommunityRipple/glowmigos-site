import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocationBySlug, getLocationSchema } from "@/lib/locations";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://glowmigoshomeservices.com";

const SLUG = "castle-rock";
const location = getLocationBySlug(SLUG)!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: location.metaTitle,
    description: location.metaDescription,
    url: `${SITE_URL}/${SLUG}`,
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <LocationPage location={location} />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getLocationSchema(location)),
        }}
      />
    </>
  );
}

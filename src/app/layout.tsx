import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { brand } from "@/lib/brand";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["600", "700", "800"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://glowmigoshomeservices.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${brand.shortName} — Castle Rock's Lighting-Forward Home Contractor`,
    template: `%s | ${brand.name}`,
  },
  description: brand.tagline,
  openGraph: {
    title: brand.name,
    description: brand.tagline,
    url: SITE_URL,
    siteName: brand.name,
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: brand.name, description: brand.tagline },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: brand.name,
  image: `${SITE_URL}/og.jpg`,
  telephone: brand.phone,
  email: brand.email,
  url: SITE_URL,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.address.line1,
    addressLocality: brand.address.city,
    addressRegion: brand.address.state,
    postalCode: brand.address.zip,
    addressCountry: "US",
  },
  areaServed: brand.serviceAreas.map((a) => ({ "@type": "City", name: a })),
  hasCredential: brand.certifications.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    name: c,
  })),
  openingHours: ["Mo-Sa 07:00-19:00"],
  founder: { "@type": "Person", name: brand.owner },
  foundingDate: String(brand.founded),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}

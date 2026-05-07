import type { NextConfig } from "next";

const wordPressRedirects: { from: string; to: string }[] = [
  { from: "/contact-us", to: "/contact" },
  { from: "/roof-replacement-castle-rock-co", to: "/services" },
  { from: "/roof-repair-in-castle-rock-co", to: "/services" },
  { from: "/gutter-services", to: "/services" },
  { from: "/roofing-services", to: "/services" },
  { from: "/service-areas", to: "/about" },
  { from: "/roof-certification-colorado-mountain-towns", to: "/nrcia-roof-inspection" },
  { from: "/roof-certification-aspen-co", to: "/nrcia-roof-inspection" },
  { from: "/roof-certification-vail-co", to: "/nrcia-roof-inspection" },
  { from: "/jefferson-county-co-roofing", to: "/services" },
  { from: "/douglas-county-co-roofing", to: "/services" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/about/", destination: "/about", statusCode: 301 },
      { source: "/services/", destination: "/services", statusCode: 301 },
      ...wordPressRedirects.flatMap(({ from, to }) => [
        { source: from, destination: to, statusCode: 301 },
        { source: `${from}/`, destination: to, statusCode: 301 },
      ]),
    ];
  },
};

export default nextConfig;

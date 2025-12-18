// components/sections/solutions/renewal-fees-by-country/patent/countries.ts

export type CountryInfo = {
  /** Country display name */
  name: string;

  /** URL slug (used in /solutions/renewal-fees-by-country/patent/[slug]) */
  slug: string;

  /** Flag image path (e.g., /images/renewals/flags/in.svg) */
  flagSrc: string;

  /** Map image/SVG path (e.g., /images/renewals/maps/in.svg) */
  mapSrc: string;

  /** Optional metadata for richer UI (all safe to omit) */
  code?: string; // ISO or short code (e.g., "IN", "AU")
  region?: string; // e.g., "Asia", "Europe", "Oceania"
  subtitle?: string; // e.g., "Annual renewals starting from year 5"
  status?: "active" | "updated" | "coming-soon";
};

export const COUNTRIES: CountryInfo[] = [
  {
    name: "Australia",
    slug: "australia",
    flagSrc: "/images/renewals/flags/australia.png",
    mapSrc: "/images/renewals/maps/au.svg",
    code: "AU",
    region: "Oceania",
    subtitle: "Annual renewals starting from year 5",
    status: "active",
  },
  {
    name: "Austria",
    slug: "austria",
    flagSrc: "/images/renewals/flags/austria.png",
    mapSrc: "/images/renewals/maps/au.svg",
    region: "Europe",
    status: "coming-soon",
  },
  {
    name: "Canada",
    slug: "canada",
    flagSrc: "/images/renewals/flags/canada.png",
    mapSrc: "/images/renewals/maps/au.svg",
    region: "North America",
  },
  {
    name: "China",
    slug: "china",
    flagSrc: "/images/renewals/flags/china.png",
    mapSrc: "/images/renewals/maps/au.svg",
    region: "Asia",
  },
  {
    name: "Denmark",
    slug: "denmark",
    flagSrc: "/images/renewals/flags/denmark.png",
    mapSrc: "/images/renewals/maps/au.svg",
    region: "Europe",
  },
  {
    name: "Europe (EPO)",
    slug: "europe",
    flagSrc: "/images/renewals/flags/europe.png",
    mapSrc: "/images/renewals/maps/au.svg",
    region: "Europe",
    subtitle: "Centralized EP annuity filing system",
    status: "updated",
  },
  {
    name: "Finland",
    slug: "finland",
    flagSrc: "/images/renewals/flags/finland.png",
    mapSrc: "/images/renewals/maps/au.svg",
    region: "Europe",
  },
  {
    name: "France",
    slug: "france",
    flagSrc: "/images/renewals/flags/france.png",
    mapSrc: "/images/renewals/maps/au.svg",
    region: "Europe",
  },
  {
    name: "Germany",
    slug: "germany",
    flagSrc: "/images/renewals/flags/germany.png",
    mapSrc: "/images/renewals/maps/au.svg",
    region: "Europe",
  },
  {
    name: "India",
    slug: "india",
    flagSrc: "/images/renewals/flags/india.png",
    mapSrc: "/images/renewals/maps/au.svg",
    region: "Asia",
  },
];

export const findCountry = (slug: string) =>
  COUNTRIES.find((c) => c.slug === slug);

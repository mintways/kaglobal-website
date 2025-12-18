// components/sections/solutions/renewal-fees-by-country/patent/CountryGrid.tsx
"use client";

import * as React from "react";
import CountryCard from "./CountryCard";
import type { CountryInfo } from "./countries";
import { COUNTRIES as FALLBACK } from "./countries";

type Props = {
    countries?: CountryInfo[] | null;
    className?: string;
    showRegion?: boolean;
};

export default function CountryGrid({
    countries,
    className = "",
    showRegion = false,
}: Props) {
    // Fallback to local static list to avoid empty renders
    const list: CountryInfo[] = Array.isArray(countries) ? countries : FALLBACK;

    if (!list || list.length === 0) {
        return (
            <div
                className={[
                    "rounded-2xl border border-gray-200 bg-white p-8 text-center text-sm text-gray-600",
                    className,
                ].join(" ")}
            >
                No countries to display right now.
            </div>
        );
    }

    return (
        <div
            className={[
                "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                className,
            ].join(" ")}
        >
            {list.map((c) => (
                <CountryCard key={c.slug} c={c} showRegion={showRegion} />
            ))}
        </div>
    );
}

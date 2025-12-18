"use client";

import { COUNTRIES } from "./countries";
import CountryCard from "./CountryCard";

export default function CountryGrid() {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {COUNTRIES.map((c) => (
                <CountryCard key={c.slug} c={c} />
            ))}
        </div>
    );
}

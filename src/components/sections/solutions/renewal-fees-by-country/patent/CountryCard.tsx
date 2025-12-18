// components/sections/renewals/CountryCard.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { CountryInfo } from "./countries";

type Props = {
    c: CountryInfo;
    className?: string;
    showRegion?: boolean;
};

const KA = {
    maroon: "#7F2B38",
    purple: "#4B2E83",
};

function StatusPill({ status }: { status?: CountryInfo["status"] }) {
    const styleMap =
        status === "active"
            ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
            : status === "updated"
                ? "bg-indigo-50 text-indigo-700 ring-indigo-200"
                : status === "coming-soon"
                    ? "bg-amber-50 text-amber-700 ring-amber-200"
                    : "bg-gray-50 text-gray-700 ring-gray-200";

    const label =
        status === "active"
            ? "Active"
            : status === "updated"
                ? "Updated"
                : status === "coming-soon"
                    ? "Coming Soon"
                    : "—";

    return (
        <span
            className={`rounded-full px-2 py-1 text-[11px] font-semibold shadow-sm ring-1 ${styleMap}`}
        >
            {label}
        </span>
    );
}

export default function CountryCard({ c, className = "", showRegion = false }: Props) {
    const disabled = c.status === "coming-soon";

    return (
        <Link
            href={disabled ? "#" : `/solutions/renewal-fees-by-country/patent/${c.slug}`}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 0}
            className={[
                "group relative flex flex-col justify-between rounded-2xl p-6",
                "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70",
                "ring-1 ring-gray-200 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_8px_16px_-6px_rgba(0,0,0,0.2)]",
                "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7F2B38]/40 focus-visible:ring-offset-2",
                disabled && "cursor-not-allowed opacity-75",
                className,
            ].join(" ")}
        >
            {/* Gradient border aura (no layout shift) */}
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    padding: 1,
                    background:
                        "linear-gradient(130deg, rgba(127,43,56,0.9), rgba(127,43,56,0.15), rgba(75,46,131,0.9))",
                    WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor" as any,
                    maskComposite: "exclude" as any,
                }}
            />

            {/* Top metadata row */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
                {showRegion && c.region && (
                    <span className="rounded-full bg-gray-50 px-2 py-0.5 text-[11px] font-medium text-gray-600 ring-1 ring-gray-200">
                        {c.region}
                    </span>
                )}
                <StatusPill status={c.status} />
                {c.code && (
                    <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-medium text-gray-600 ring-1 ring-gray-200">
                        {c.code}
                    </span>
                )}
            </div>

            {/* Country Title + Subtitle */}
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{c.name}</h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                    {c.subtitle ?? "Renewal (annuity) overview"}
                </p>
            </div>

            {/* Bottom row */}
            <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
                <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
                    {c.status === "updated" ? "Recently updated" : "Live dataset"}
                </span>

                <span
                    className={[
                        "relative inline-flex h-9 w-9 items-center justify-center rounded-xl",
                        "border border-gray-200 bg-white text-gray-700 transition-all duration-300",
                        "group-hover:border-[#7F2B38]/30 group-hover:text-[#7F2B38]",
                        disabled && "opacity-70",
                    ].join(" ")}
                >
                    <ChevronRight className="h-5 w-5 translate-x-0 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
            </div>
        </Link>
    );
}

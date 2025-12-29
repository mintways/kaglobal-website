"use client";

import React from "react";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
    text: "#1F2A44",
    muted: "#2B3852",
};

const METRICS = [
    { k: "Patents Managed", v: "30,000+", key: "patents" },
    { k: "Trademarks Managed", v: "20,000+", key: "trademarks" },
    { k: "Clients Served", v: "2,500+", key: "clients" },
    { k: "Jurisdictions", v: "90+", key: "jurisdictions" },
];

const Icon = ({ name }: { name: string }) => {
    const cls = "h-4.5 w-4.5 text-white";
    switch (name) {
        case "patents":
            return (
                <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
                    <path d="M7 3h10a2 2 0 0 1 2 2v8.5a4.5 4.5 0 1 1-5.5 5.5H10A2 2 0 0 1 8 17V7H5a2 2 0 1 1 2-4Zm3 4v10h3.5a4.5 4.5 0 0 1 4.5-4.5V5a1 1 0 0 0-1-1H10a1 1 0 0 0 0 2h0Z" />
                </svg>
            );
        case "trademarks":
            return (
                <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
                    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm-1 14h-2V8H6V6h8v2h-4v8Zm9-3-2.5-3L16 13V6h2v4l1.5-2L21 10Z" />
                </svg>
            );
        case "clients":
            return (
                <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
                    <path d="M12 12a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5Zm-7 8a7 7 0 0 1 14 0v1H5Z" />
                </svg>
            );
        default:
            return (
                <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
                    <path d="M19 3H5a2 2 0 0 0-2 2v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2Zm-2.5 9H13v3h-2v-3H7.5V10H11V7h2v3h3.5Z" />
                </svg>
            );
    }
};

export default function Metrics() {
    return (
        <section className="relative w-full bg-white font-ptsans">
            <div className="relative mx-auto max-w-7xl px-6 py-14">
                <div className="rounded-3xl border border-black/5 bg-[#F8F8F8] p-3 sm:p-4">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                        {METRICS.map((item) => (
                            <div
                                key={item.k}
                                className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5 font-ptsans"
                                role="figure"
                                aria-label={`${item.v} ${item.k}`}
                            >
                                {/* subtle gradient border on hover */}
                                <div className="pointer-events-none absolute inset-px rounded-[14px] opacity-0 transition-opacity group-hover:opacity-100 [background:linear-gradient(180deg,rgba(127,43,56,0.15),rgba(77,20,117,0.15))]" />

                                {/* icon badge */}
                                <div className="relative z-10 mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[#7F2B38] to-[#4D1475] p-2 shadow-sm">
                                    <Icon name={item.key} />
                                </div>

                                {/* number */}
                                <div className="relative z-10 text-2xl font-bold tracking-tight font-playfair">
                                    <span className="bg-gradient-to-r from-[#7F2B38] to-[#4D1475] bg-clip-text text-transparent">
                                        {item.v}
                                    </span>
                                </div>

                                {/* label */}
                                <div className="relative z-10 mt-1 text-sm text-gray-600 font-ptsans">
                                    {item.k}
                                </div>

                                {/* hover shimmer */}
                                <span
                                    aria-hidden
                                    className="pointer-events-none absolute -top-8 left-1/4 h-20 w-1/2 -translate-x-1/2 rotate-[25deg] rounded-full bg-white/40 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* optional mini footnote */}
                <p className="mt-4 text-center text-xs text-gray-500 font-ptsans">
                    * Select figures consolidated across our network; updated periodically.
                </p>
            </div>

            {/* reduced motion safety */}
            <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .hover\\:-translate-y-0\\.5:hover {
            transform: none !important;
          }
        }
      `}</style>
        </section>
    );
}

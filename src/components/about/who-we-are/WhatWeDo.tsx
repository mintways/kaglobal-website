"use client";

import React from "react";

type CardSection = "services" | "expertise";

type Card = {
    t: string;
    d: string;
    section: CardSection;
};

const CARDS: Card[] = [
    // SERVICES
    { t: "Patent", d: "Drafting, filing, prosecution, oppositions, analytics & landscapes.", section: "services" },
    { t: "Trademark", d: "Clearance, filing, prosecution, enforcement & brand strategy.", section: "services" },
    { t: "Design", d: "Aesthetic protection across jurisdictions with fast turnarounds.", section: "services" },
    { t: "Copyright", d: "Aesthetic protection across jurisdictions with fast turnarounds.", section: "services" },

    // EXPERTISE
    { t: "Strategic Advisory", d: "Commercial contracts, governance, and regulatory compliance.", section: "expertise" },
    { t: "Research & Analytics", d: "Prior art, FTO, invalidation, white-space and competitive intel.", section: "expertise" },
    { t: "Portfolio Management", d: "Docketing, annuities, renewals, and global counsel orchestration.", section: "expertise" },
    { t: "Protection & Enforcement", d: "Dispute strategy, cross-border coordination, and defense.", section: "expertise" },
    { t: "Monetisation & Licensing", d: "Licensing, valuation, technology transfer & deal support.", section: "expertise" },
    { t: "Litigation Support", d: "Dispute strategy, cross-border coordination, and defense.", section: "expertise" },
    // { t: "Data & Tools", d: "Custom scrapers, dashboards, and workflow automations.", section: "expertise" },
];

const toSlug = (s: string) =>
    s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const slug = (title: string, section: CardSection) => `/${section}/${toSlug(title)}`;

const Icon = ({ name }: { name: string }) => {
    const base = "h-5 w-5";
    switch (name) {
        case "Patent":
            return (
                <svg viewBox="0 0 24 24" className={base} fill="currentColor" aria-hidden>
                    <path d="M7 4a2 2 0 0 0-2 2v12l7-3 7 3V6a2 2 0 0 0-2-2H7Z" />
                </svg>
            );

        case "Trademark":
            return (
                <svg viewBox="0 0 24 24" className={base} fill="currentColor" aria-hidden>
                    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm-1 14H8V8H6V6h8v2h-4v8Zm9-3-2.5-3L15 13V6h2v4l1.5-2L21 10Z" />
                </svg>
            );

        case "Design":
            return (
                <svg viewBox="0 0 24 24" className={base} fill="currentColor" aria-hidden>
                    <path d="M12 2 2 7l10 5 10-5-10-5Zm0 7L2 4v13l10 5 10-5V4l-10 5Z" />
                </svg>
            );

        case "Copyright":
            return (
                <svg viewBox="0 0 24 24" className={base} fill="currentColor" aria-hidden>
                    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 6a4 4 0 0 1 3.5 2H14a2.5 2.5 0 1 0 0 4h1.5A4 4 0 1 1 12 8Z" />
                </svg>
            );

        case "Portfolio Management":
            return (
                <svg viewBox="0 0 24 24" className={base} fill="currentColor" aria-hidden>
                    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9H3V7Zm4 4h4v2H7v-2Zm0 3h10v2H7v-2Z" />
                </svg>
            );

        case "Monetisation & Licensing":
            return (
                <svg viewBox="0 0 24 24" className={base} fill="currentColor" aria-hidden>
                    <path d="M12 1a4 4 0 0 1 4 4v3h-2V5a2 2 0 1 0-4 0v3H8V5a4 4 0 0 1 4-4Zm-6 9h12v11H6V10Zm6 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                </svg>
            );

        case "Research & Analytics":
            return (
                <svg viewBox="0 0 24 24" className={base} fill="currentColor" aria-hidden>
                    <path d="M10 2a8 8 0 1 1-5.29 14.06l-2.83 2.83 1.41 1.41 2.83-2.83A8 8 0 0 1 10 2Z" />
                </svg>
            );

        case "Strategic Advisory":
            return (
                <svg viewBox="0 0 24 24" className={base} fill="currentColor" aria-hidden>
                    <path d="M12 2 1 7l11 5 11-5-11-5Zm0 7-9-4v10l9 4 9-4V5l-9 4Z" />
                </svg>
            );

        case "Protection & Enforcement":
            return (
                <svg viewBox="0 0 24 24" className={base} fill="currentColor" aria-hidden>
                    <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm-1 6h2v6h-2V8Zm0 8h2v2h-2v-2Z" />
                </svg>
            );

        case "Litigation Support":
            return (
                <svg viewBox="0 0 24 24" className={base} fill="currentColor" aria-hidden>
                    <path d="M7 20h10v2H7zM4 9h16l-2 9H6zM12 2l5 5H7l5-5z" />
                </svg>
            );

        default:
            return (
                <svg viewBox="0 0 24 24" className={base} fill="currentColor" aria-hidden>
                    <path d="M3 5h18v4H3zM3 11h18v4H3zM3 17h18v2H3z" />
                </svg>
            );
    }
};

const WhatWeDo = () => {
    return (
        <section className="relative overflow-hidden bg-white font-ptsans">
            <div className="relative mx-auto max-w-7xl px-6 py-16">
                {/* header */}
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] tracking-[0.18em] text-gray-700 shadow-sm font-ptsans">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#7F2B38]" />
                            WHAT WE DO
                        </div>

                        <h2 className="mt-3 font-playfair text-3xl font-semibold leading-tight md:text-4xl">
                            <span className="bg-gradient-to-r from-[#7F2B38] to-[#4D1475] bg-clip-text text-transparent">
                                Services & Capabilities
                            </span>
                        </h2>
                    </div>

                    <a
                        href="/services"
                        className="rounded-2xl border border-[#4D1475] px-4 py-2 text-sm font-medium text-[#4D1475] transition hover:bg-[#4D1475] hover:text-white font-ptsans"
                    >
                        Explore services
                    </a>
                </div>

                {/* grid */}
                <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {CARDS.map((c) => (
                        <a
                            key={`${c.section}:${c.t}`}
                            href={slug(c.t, c.section)}
                            className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#7F2B38]/40 font-ptsans"
                        >
                            <div className="relative z-10 flex items-start gap-4">
                                <div className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-[#7F2B38] to-[#4D1475] text-white shadow-sm">
                                    <Icon name={c.t} />
                                </div>

                                <div>
                                    <h3 className="font-playfair text-lg font-semibold text-gray-900">{c.t}</h3>
                                    <p className="mt-1.5 text-sm text-[#1F2A44]/90 font-ptsans">{c.d}</p>
                                </div>
                            </div>

                            {/* link hint */}
                            <div className="relative z-10 mt-4 inline-flex items-center text-sm font-medium text-[#4D1475] font-ptsans">
                                Learn more
                                <svg
                                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </div>

                            {/* shimmer sweep */}
                            <span
                                aria-hidden
                                className="pointer-events-none absolute -top-8 left-1/3 h-20 w-2/3 -translate-x-1/2 rotate-[25deg] rounded-full bg-white/40 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                            />
                        </a>
                    ))}
                </div>
            </div>

            {/* reduced-motion safety */}
            <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .hover\\:-translate-y-0\\.5:hover {
            transform: none !important;
          }
        }
      `}</style>
        </section>
    );
};

export default WhatWeDo;

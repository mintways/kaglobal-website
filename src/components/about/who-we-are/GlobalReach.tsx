"use client";

import React from "react";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
};

const GlobalReach = () => {
    return (
        <section className="relative overflow-hidden bg-white font-ptsans">
            <div className="relative mx-auto max-w-7xl px-6 py-16">
                <div className="grid items-center gap-10 md:grid-cols-2">
                    {/* LEFT: copy + regions + stats */}
                    <div>
                        {/* badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] tracking-[0.18em] text-gray-700 shadow-sm font-ptsans">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#7F2B38]" />
                            GLOBAL REACH
                        </div>

                        {/* headline */}
                        <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                            <span className="font-playfair bg-gradient-to-r from-[#7F2B38] to-[#4D1475] bg-clip-text text-transparent">
                                Global Reach, Local Insight
                            </span>
                        </h2>

                        {/* subcopy */}
                        <p className="mt-4 max-w-xl text-gray-700 font-ptsans">
                            Headquartered strategically across the United States and India, and supported by a global network of trusted partners. We ensure consistent,
                            coordinated management of filings, enforcement actions, and transactions across over{" "}
                            <span className="font-semibold text-gray-900">90+ jurisdictions worldwide</span>.
                        </p>

                        {/* region bullets */}
                        <ul className="mt-6 space-y-3 font-ptsans">
                            {[
                                "United States & Canada",
                                "Europe (EPO, EUIPO) & United Kingdom",
                                "APAC (India, China, Japan, Korea, ASEAN)",
                                "Middle East, Africa & Latin America",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-gray-800">
                                    <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-md bg-[#7F2B38]/10">
                                        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-[#7F2B38]" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.707-9.707a1 1 0 0 0-1.414-1.414L9 10.172 7.707 8.879A1 1 0 1 0 6.293 10.293l2 2a1 1 0 0 0 1.414 0l4-4Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* region chips */}
                        <div className="mt-6 flex flex-wrap gap-2 font-ptsans">
                            {["US", "EU/UK", "India", "China", "Japan", "Korea", "ASEAN", "MENA", "Africa", "LatAm"].map((chip) => (
                                <span
                                    key={chip}
                                    className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>

                        {/* stats row */}
                        <div className="mt-8 grid w-full max-w-xl grid-cols-3 gap-3 font-ptsans">
                            {[
                                { k: "90+", v: "Jurisdictions" },
                                { k: "2500+", v: "Clients" },
                                { k: "24/7", v: "Coordination" },
                            ].map((s) => (
                                <div key={s.v} className="rounded-2xl border border-black/10 bg-white p-4 text-center shadow-sm">
                                    <div className="text-xl font-semibold text-gray-900">{s.k}</div>
                                    <div className="mt-1 text-xs text-gray-600">{s.v}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-8 flex gap-3 font-ptsans">
                            <a href="/contact" className="rounded-2xl bg-[#7F2B38] px-5 py-3 text-white shadow-sm transition hover:opacity-90">
                                Coordinate a Filing
                            </a>
                            <a
                                href="/about/offices"
                                className="rounded-2xl border border-[#4D1475] px-5 py-3 text-[#4D1475] transition hover:bg-[#4D1475] hover:text-white"
                            >
                                View Offices & Partners
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: glass card map placeholder */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-3xl border border-[#4D1475]/15 bg-gradient-to-br from-[#F8F1FF] via-white to-[#F8F1FF] p-6 shadow-sm">
                            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/60 blur-2xl" />

                            <div className="relative aspect-[4/3] w-full rounded-2xl bg-white">
                                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle,rgba(77,20,117,0.06)_1px,transparent_1px)] [background-size:16px_16px]" />
                                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_60%_40%,rgba(127,43,56,0.10),transparent_55%)]" />

                                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4D1475] opacity-90">
                                    <span className="absolute inset-0 animate-ping rounded-full bg-[#4D1475]/40" />
                                </div>

                                {[
                                    { x: "30%", y: "35%" },
                                    { x: "65%", y: "32%" },
                                    { x: "72%", y: "50%" },
                                    { x: "78%", y: "42%" },
                                    { x: "83%", y: "38%" },
                                    { x: "55%", y: "65%" },
                                    { x: "45%", y: "75%" },
                                ].map((n, i) => (
                                    <span
                                        key={i}
                                        className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7F2B38]"
                                        style={{ left: n.x, top: n.y }}
                                    />
                                ))}
                            </div>

                            <p className="mt-4 text-center text-sm text-gray-600 font-ptsans">Interactive coverage map coming soon</p>
                        </div>

                        <div className="mt-4 h-2 rounded-full bg-gradient-to-r from-[#7F2B38] to-[#4D1475]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalReach;

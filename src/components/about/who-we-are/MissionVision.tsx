"use client";

import React from "react";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
    text: "#1F2A44",
    muted: "#2B3852",
};

const MissionVision = () => {
    return (
        <section className="relative overflow-hidden bg-white font-ptsans">
            <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
                {/* header */}
                <div className="mb-8 md:mb-10">
                    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] tracking-[0.18em] text-gray-700 shadow-sm font-ptsans">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#7F2B38]" />
                        MISSION & VISION
                    </div>

                    <h2 className="mt-3 font-playfair text-3xl font-semibold leading-tight md:text-4xl">
                        <span className="bg-gradient-to-r from-[#7F2B38] to-[#4D1475] bg-clip-text text-transparent">
                            Why We Exist & Where We’re Headed
                        </span>
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Mission */}
                    <article
                        className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
                        aria-labelledby="mission-title"
                    >
                        {/* decorative edge shimmer */}
                        <div className="pointer-events-none absolute inset-px rounded-[22px] opacity-0 transition-opacity group-hover:opacity-100 [background:linear-gradient(180deg,rgba(127,43,56,0.12),rgba(77,20,117,0.12))]" />

                        <div className="relative z-10 flex items-start gap-4">
                            <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-[#7F2B38] to-[#4D1475] text-white shadow-sm">
                                {/* target icon */}
                                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                                    <path d="M12 2a1 1 0 0 1 1 1v1.055A8.004 8.004 0 0 1 20.945 11H22a1 1 0 1 1 0 2h-1.055A8.004 8.004 0 0 1 13 19.945V21a1 1 0 1 1-2 0v-1.055A8.004 8.004 0 0 1 3.055 13H2a1 1 0 1 1 0-2h1.055A8.004 8.004 0 0 1 11 3.055V3a1 1 0 0 1 1-1Zm0 4a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6Zm0 3a3 3 0 1 1-3 3 3.003 3.003 0 0 1 3-3Z" />
                                </svg>
                            </div>

                            <div>
                                <h3 id="mission-title" className="font-playfair text-xl font-semibold">
                                    Our Mission
                                </h3>
                                <p className="mt-3 text-[#1F2A44]/90 font-ptsans">
                                    To enable innovators and businesses to scale with confidence by delivering precise,
                                    business-aligned intellectual property (IP) and corporate solutions, underpinned by robust
                                    processes, stringent security, and advanced technology.
                                </p>
                            </div>
                        </div>

                        {/* pillars */}
                        <ul className="relative z-10 mt-6 flex flex-wrap gap-2 font-ptsans">
                            {["Precision+", "Process", "Security", "Technology"].map((p) => (
                                <li
                                    key={p}
                                    className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm"
                                >
                                    {p}
                                </li>
                            ))}
                        </ul>

                        {/* bottom ribbon */}
                        <div className="relative z-10 mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#7F2B38] to-[#4D1475]" />
                    </article>

                    {/* Vision */}
                    <article
                        className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
                        aria-labelledby="vision-title"
                    >
                        <div className="pointer-events-none absolute inset-px rounded-[22px] opacity-0 transition-opacity group-hover:opacity-100 [background:linear-gradient(180deg,rgba(77,20,117,0.12),rgba(127,43,56,0.12))]" />

                        <div className="relative z-10 flex items-start gap-4">
                            <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-[#4D1475] to-[#7F2B38] text-white shadow-sm">
                                {/* compass/vision icon */}
                                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                                    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm3.9 5.6-2.3 6.2a2 2 0 0 1-1.2 1.2l-6.3 2.4 2.3-6.2a2 2 0 0 1 1.2-1.2Z" />
                                </svg>
                            </div>

                            <div>
                                <h3 id="vision-title" className="font-playfair text-xl font-semibold">
                                    Our Vision
                                </h3>
                                <p className="mt-3 text-[#1F2A44]/90 font-ptsans">
                                    To be the most trusted global partner for protecting, managing, expanding and monetizing
                                    ideas—where sophisticated legal strategy converges with data intelligence, strategic design,
                                    and operational excellence.
                                </p>
                            </div>
                        </div>

                        {/* focus areas */}
                        <ul className="relative z-10 mt-6 grid grid-cols-2 gap-2 text-sm text-[#1F2A44]/90 sm:grid-cols-3 font-ptsans">
                            {[
                                "Trust & Transparency",
                                "Global Coordination",
                                "Monetisation",
                                "Design Thinking",
                                "Data-led Ops",
                                "Excellence",
                            ].map((f) => (
                                <li key={f} className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2">
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4D1475]" />
                                    <span className="leading-none">{f}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="relative z-10 mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#4D1475] to-[#7F2B38]" />
                    </article>
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

export default MissionVision;

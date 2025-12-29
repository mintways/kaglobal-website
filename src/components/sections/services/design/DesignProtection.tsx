"use client";

import Link from "next/link";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
};

export default function DesignProtection() {
    return (
        <section
            className="relative w-full overflow-hidden"
            // style={{ background: "linear-gradient(180deg, #F6F7F9 0%, #FFFFFF 70%)" }}
        >

            {/* content */}
            <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 sm:px-8 md:grid-cols-12 md:gap-12 md:py-16">
                {/* LEFT ICON */}
                <div className="md:col-span-7 flex justify-start -ml-3 sm:-ml-6 lg:-ml-10">
                    <DesignProtectionIcon className="h-40 w-40 sm:h-56 sm:w-56 md:h-[360px] md:w-[360px]" />
                </div>

                {/* RIGHT CONTENT */}
                <div className="md:col-span-5">
                    {/* Eyebrow */}
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-[11px] font-ptsans font-semibold tracking-widest text-gray-600 backdrop-blur-sm">
                        <span className="h-2 w-2 rounded-full bg-ka-maroon" />
                        PROTECTION
                    </div>

                    {/* Heading */}
                    <h2 className="text-[clamp(1.9rem,3.8vw,2.6rem)] leading-tight text-ka-ink">
                        <span
                            className="font-playfair bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})` }}
                        >
                            Direct & International
                        </span>{" "}
                        Design Protection
                    </h2>

                    {/* Intro paragraph */}
                    <p className="font-ptsans mt-4 sm:mt-5 max-w-2xl text-[15.5px] sm:text-[16.5px] leading-7 text-[#2B3852]/90">
                        Navigate complex global IP landscapes with a strategy that fits your launch plan. We
                        advise on national filings, Paris Convention priorities, and Hague System applications
                        to achieve cost-efficient coverage and seamless global registration.
                    </p>

                    {/* Chips */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        {[
                            "National (Direct) Filing",
                            "Paris Convention – 6/12-month Priority",
                            "Hague System (WIPO) – Centralized",
                        ].map((t) => (
                            <span
                                key={t}
                                className="font-ptsans rounded-full border border-gray-300 bg-white px-4 py-2 text-[13.5px] sm:text-sm text-gray-700"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Bullet list */}
                    <ul className="font-ptsans mt-6 space-y-3 text-[15px] text-[#1F2A44]/90">
                        {[
                            "Jurisdiction-specific formalities (views, shading, legends)",
                            "Priority planning & deferment options where available",
                            "Multi-design and related-design filing strategies",
                            "Centralized renewals and monitoring across territories",
                        ].map((text, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span
                                    className="mt-[6px] inline-block h-2.5 w-2.5 rounded-full"
                                    style={{ background: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})` }}
                                />
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-8">
                        <Link
                            href="/contact"
                            className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-gradient-to-r from-[#7F2B38] to-[#4D1475] px-8 py-3 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                        >
                            Discuss your route
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- Design Protection Icon ---------------- */
function DesignProtectionIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 480 480"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <defs>
                <linearGradient id="gradProtect" x1="60" y1="60" x2="420" y2="420" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7F2B38" />
                    <stop offset="1" stopColor="#4D1475" />
                </linearGradient>
            </defs>

            {/* Document outline */}
            <rect
                x="80"
                y="60"
                width="280"
                height="360"
                rx="24"
                stroke="url(#gradProtect)"
                strokeWidth="10"
                fill="#F9FAFB"
            />

            {/* Folded corner */}
            <path d="M300 60v70c0 8 6 14 14 14h66" stroke="url(#gradProtect)" strokeWidth="10" />
            <path d="M312 60l68 68" stroke="url(#gradProtect)" strokeWidth="10" />

            {/* Shield */}
            <path
                d="M180 190l60-20 60 20v40c0 45-25 80-60 100-35-20-60-55-60-100v-40z"
                stroke="url(#gradProtect)"
                strokeWidth="10"
                fill="none"
            />

            {/* Check mark inside shield */}
            <path d="M210 230l20 20 35-40" stroke="url(#gradProtect)" strokeWidth="8" fill="none" />

            {/* horizontal design lines */}
            {[260, 280, 300, 320].map((y, i) => (
                <line
                    key={i}
                    x1="100"
                    x2="340"
                    y1={y}
                    y2={y}
                    stroke="#1F2A44"
                    strokeOpacity="0.15"
                    strokeWidth="8"
                />
            ))}
        </svg>
    );
}

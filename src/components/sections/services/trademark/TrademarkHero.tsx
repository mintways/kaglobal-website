"use client";

import Link from "next/link";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
    text: "#0B1320",
    muted: "#475467",
};

type Props = {
    title?: string;
    subtitle?: string;
    ctaLabel?: string;
    ctaHref?: string;
};

export default function TrademarkHero({
    title = "Global Strategy for Enduring Brand Identity",
    subtitle = "Protect your brand’s integrity across international borders. KA Global IP provides precision-driven trademark management, from initial availability assessments to robust enforcement, ensuring your identity remains legally secure in a competitive global market.",
    ctaLabel = "Initiate Trademark Application",
    ctaHref = "https://file.kaglobalip.com/",
}: Props) {
    const [first, ...rest] = title.split(" ");
    const tail = rest.join(" ");

    return (
        <section
            className="relative w-full overflow-hidden bg-white px-4 py-10 sm:px-6 md:px-10 lg:px-14 font-ptsans"
            style={{
                background: "linear-gradient(180deg, #F6F7F9 0%, #FFFFFF 70%)",
            }}
        >
            {/* --- decorative grid & auras --- */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
                <div
                    className="absolute -left-28 top-0 h-72 w-72 rounded-full opacity-25 blur-3xl"
                    style={{
                        background: `radial-gradient(closest-side, ${KA.purple}, transparent)`,
                    }}
                />
                <div
                    className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full opacity-25 blur-3xl"
                    style={{
                        background: `radial-gradient(closest-side, ${KA.maroon}, transparent)`,
                    }}
                />
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #0B1320 1px, transparent 1px), linear-gradient(to bottom, #0B1320 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                        maskImage: "radial-gradient(1200px 600px at 50% 12%, #000 35%, transparent 70%)",
                        WebkitMaskImage: "radial-gradient(1200px 600px at 50% 12%, #000 35%, transparent 70%)",
                    }}
                />
            </div>

            {/* --- content --- */}
            <div className="relative z-10 mx-auto max-w-7xl overflow-hidden bg-transparent">
                <div className="relative z-10 grid grid-cols-1 items-center gap-8 px-6 py-10 sm:px-8 md:grid-cols-12 md:py-14">
                    {/* ICON (top on mobile, right on desktop) */}
                    <div className="order-1 md:order-2 md:col-span-5 flex justify-start md:justify-end">
                        <TrademarkIcon className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56" />
                    </div>

                    {/* TEXT (below on mobile, left on desktop) */}
                    <div className="order-2 md:order-1 md:col-span-7">
                        {/* kicker */}
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-[11px] sm:text-xs tracking-widest text-gray-500 backdrop-blur-sm font-ptsans">
                            <span className="h-2 w-2 rounded-full bg-ka-maroon" />
                            TRADEMARKS
                        </div>

                        {/* title (Playfair) */}
                        <h1 className="text-[clamp(1.9rem,4vw,3.2rem)] leading-tight text-ka-ink">
                            <span
                                className="font-playfair bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})`,
                                }}
                            >
                                {first}
                            </span>{" "}
                            {tail}
                        </h1>

                        {/* subtitle (PT Sans) */}
                        <p className="mt-4 max-w-2xl text-[15.5px] sm:text-[16.5px] leading-7 text-[#2b3852]/90 font-ptsans">
                            {subtitle}
                        </p>

                        {/* CTA buttons */}
                        <div className="mt-7 flex flex-col gap-4 font-ptsans">
                            <Link
                                href={ctaHref}
                                className="w-full sm:w-fit rounded-2xl bg-gradient-to-r from-[#7F2B38] to-[#4D1475] px-8 py-3 text-[15px] font-semibold text-white transition hover:opacity-90 text-center"
                            >
                                {ctaLabel}
                            </Link>

                            <div className="flex flex-wrap gap-3">
                                {["Comprehensive Pre-clearance", "Global Filing Strategy", "Opposition & Enforcement"].map((item, i) => (
                                    <span
                                        key={i}
                                        className="rounded-full border border-gray-300 bg-white px-4 py-2 text-[13.5px] sm:text-sm text-gray-700 font-ptsans"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- TM ICON ---------------- */
function TrademarkIcon({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 256 256" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <defs>
                <linearGradient id="tmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7F2B38" />
                    <stop offset="100%" stopColor="#4D1475" />
                </linearGradient>
            </defs>

            <rect x="40" y="32" width="140" height="180" rx="14" stroke="url(#tmGradient)" strokeWidth="4" />
            <path d="M172 32v40a8 8 0 0 0 8 8h40" stroke="url(#tmGradient)" strokeWidth="4" />
            <path d="M180 32l40 40" stroke="url(#tmGradient)" strokeWidth="4" />

            {[70, 86, 102, 122, 138].map((y, i) => (
                <line
                    key={i}
                    x1="56"
                    x2="160"
                    y1={y}
                    y2={y}
                    stroke="#1F2A44"
                    strokeOpacity="0.15"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            ))}

            <circle cx="188" cy="150" r="30" stroke="url(#tmGradient)" strokeWidth="4" fill="white" />
            <text
                x="188"
                y="160"
                textAnchor="middle"
                fontFamily="var(--font-pt-sans), system-ui, sans-serif"
                fontWeight="700"
                fontSize="20"
                fill="#4D1475"
            >
                TM
            </text>
        </svg>
    );
}

"use client";

import Link from "next/link";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
};

export default function DesignHero() {
    const title = "Comprehensive Design Rights Management Globally";
    const [first, ...rest] = title.split(" ");
    const tail = rest.join(" ");

    return (
        <section
            className="relative w-full overflow-hidden"
            style={{ background: "linear-gradient(180deg, #F6F7F9 0%, #FFFFFF 70%)" }}
        >
            {/* --- background layers to match Trademark Hero --- */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
                {/* auras */}
                <div
                    className="absolute -left-28 top-0 h-72 w-72 rounded-full opacity-25 blur-3xl"
                    style={{ background: `radial-gradient(closest-side, ${KA.purple}, transparent)` }}
                />
                <div
                    className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full opacity-25 blur-3xl"
                    style={{ background: `radial-gradient(closest-side, ${KA.maroon}, transparent)` }}
                />
                {/* grid */}
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
            <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 sm:px-8 md:grid-cols-12 md:gap-12 md:py-16">
                {/* LEFT: content */}
                <div className="md:col-span-7">
                    {/* kicker */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-[11px] font-ptsans font-semibold tracking-widest text-gray-600 backdrop-blur-sm">
                        <span className="h-2 w-2 rounded-full bg-ka-maroon" />
                        DESIGNS
                    </div>

                    {/* heading */}
                    <h1 className="font-euclid text-[clamp(1.9rem,4vw,3.1rem)] leading-tight text-ka-ink">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})` }}
                        >
                            {first}
                        </span>{" "}
                        {tail}
                    </h1>

                    <p className="font-ptsans mt-5 max-w-2xl text-[15.5px] sm:text-[16.5px] leading-7 text-[#2B3852]/90">
                        Across 90+ countries, KA Global IP delivers robust design protection solutions. We assist innovators 
                        in securing and maintaining their product designs with accuracy and strategic guidance.
                    </p>

                    {/* CTA block */}
                    <div className="mt-8 flex flex-col gap-4">
                        <Link
                            href="/services/design"
                            className="w-full sm:w-fit rounded-2xl bg-gradient-to-r from-[#7F2B38] to-[#4D1475] px-8 py-3 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 text-center"
                        >
                            Explore
                        </Link>

                        <div className="flex flex-wrap gap-3">
                            {["Hague System", "Novelty & Prior Art Check", "Design Renewals"].map((t) => (
                                <span
                                    key={t}
                                    className="font-ptsans rounded-full border border-gray-300 bg-white px-4 py-2 text-[13.5px] sm:text-sm text-gray-700"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT: Design Icon (SVG) */}
                <div className="md:col-span-5 flex justify-end -mr-6 sm:-mr-10 lg:-mr-14">
                    <DesignIcon className="h-40 w-40 sm:h-56 sm:w-56 md:h-[360px] md:w-[360px]" />
                </div>
            </div>
        </section>
    );
}

/* ---------------- DESIGN ICON ---------------- */
function DesignIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 480 480"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <defs>
                <linearGradient id="designGrad" x1="60" y1="60" x2="420" y2="420" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7F2B38" />
                    <stop offset="1" stopColor="#4D1475" />
                </linearGradient>
            </defs>

            {/* Paper outline */}
            <rect x="80" y="60" width="260" height="360" rx="26" stroke="url(#designGrad)" strokeWidth="10" />

            {/* Folded corner */}
            <path d="M340 60v80c0 8 6 14 14 14h78" stroke="url(#designGrad)" strokeWidth="10" />
            <path d="M352 60l80 80" stroke="url(#designGrad)" strokeWidth="10" />

            {/* Geometric shape - diamond */}
            <path d="M190 160l40-40 40 40-40 40-40-40z" stroke="url(#designGrad)" strokeWidth="8" fill="white" />

            {/* Pencil */}
            <path d="M220 260l120 120 40-40-120-120z" stroke="url(#designGrad)" strokeWidth="10" fill="white" />
            <path d="M220 260l-12 60 60-12z" stroke="url(#designGrad)" strokeWidth="8" fill="white" />

            {/* Dashed design lines */}
            {[280, 310, 340].map((y, i) => (
                <line
                    key={i}
                    x1="100"
                    x2="240"
                    y1={y}
                    y2={y}
                    stroke="#1F2A44"
                    strokeWidth="8"
                    strokeOpacity="0.15"
                    strokeDasharray="10 10"
                />
            ))}
        </svg>
    );
}

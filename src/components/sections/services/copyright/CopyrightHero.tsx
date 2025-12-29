"use client";

import Link from "next/link";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
    text: "#1F2A44",
    muted: "#2B3852",
};

export default function CopyrightHero() {
    const title = "Secure your creative assets globally";
    const [first, ...rest] = title.split(" ");
    const tail = rest.join(" ");

    return (
        <section
            className="relative w-full bg-white overflow-hidden font-ptsans"
            style={{ background: "linear-gradient(180deg, #F6F7F9 0%, #FFFFFF 70%)" }}
        >
            {/* --- background layers --- */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
                <div
                    className="absolute -left-28 top-0 h-72 w-72 rounded-full opacity-25 blur-3xl"
                    style={{ background: `radial-gradient(closest-side, ${KA.purple}, transparent)` }}
                />
                <div
                    className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full opacity-25 blur-3xl"
                    style={{ background: `radial-gradient(closest-side, ${KA.maroon}, transparent)` }}
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

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-12 md:py-20">
                {/* LEFT: copy */}
                <div className="md:col-span-7">
                    {/* Eyebrow chip */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold tracking-widest text-gray-600">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: KA.maroon }} />
                        COPYRIGHTS
                    </div>

                    {/* Heading (Playfair) */}
                    <h1
                        className="font-playfair text-[clamp(2rem,4vw,3rem)] leading-tight"
                        style={{ color: KA.text }}
                    >
                        <span
                            className="font-playfair bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})` }}
                        >
                            {first}
                        </span>{" "}
                        {tail}
                    </h1>

                    {/* Subtitle (PT Sans) */}
                    <p className="mt-5 max-w-2xl text-[17px] leading-7 text-[#2B3852]/90 font-ptsans">
                        We secure your copyrights worldwide—from software and written content to art, music, and film—through
                        strategic registrations, precise recordals, and swift enforcement across 90+ countries.
                    </p>

                    {/* CTA + feature chips */}
                    <div className="mt-8 flex flex-col gap-4 font-ptsans">
                        <Link
                            href="/contact"
                            className="w-fit rounded-2xl bg-gradient-to-r from-[#7F2B38] to-[#4D1475] px-8 py-3 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                        >
                            Contact us
                        </Link>

                        <div className="flex flex-wrap gap-3">
                            {["Registrations & Recordals", "Licensing & Assignments", "Online Enforcement & Takedowns"].map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 font-ptsans"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT: document + © badge icon */}
                <div className="md:col-span-5 flex justify-end -mr-6 sm:-mr-10 lg:-mr-14">
                    <CopyrightDocIcon className="h-[360px] w-[360px]" />
                </div>
            </div>
        </section>
    );
}

/* ---------------- Copyright Document Icon ---------------- */
function CopyrightDocIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 480 480"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            role="img"
            aria-label="Copyright document"
        >
            <defs>
                <linearGradient id="cpGrad" x1="60" y1="60" x2="420" y2="420" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7F2B38" />
                    <stop offset="1" stopColor="#4D1475" />
                </linearGradient>
            </defs>

            <rect x="80" y="60" width="260" height="360" rx="26" stroke="url(#cpGrad)" strokeWidth="10" fill="#F8F9FB" />
            <path d="M340 60v72c0 8 6 14 14 14h66" stroke="url(#cpGrad)" strokeWidth="10" />
            <path d="M352 60l68 68" stroke="url(#cpGrad)" strokeWidth="10" />

            {[130, 164, 198, 232].map((y, i) => (
                <line key={i} x1="110" x2="286" y1={y} y2={y} stroke="#1F2A44" strokeOpacity="0.15" strokeWidth="10" />
            ))}

            {/* © Badge */}
            <circle cx="370" cy="330" r="62" stroke="url(#cpGrad)" strokeWidth="12" fill="white" />
            <circle cx="370" cy="330" r="42" stroke="url(#cpGrad)" strokeWidth="10" fill="none" />
            <text
                x="370"
                y="342"
                textAnchor="middle"
                fontFamily="var(--font-playfair), serif"
                fontSize="44"
                fontWeight="700"
                fill="#4D1475"
            >
                ©
            </text>
        </svg>
    );
}

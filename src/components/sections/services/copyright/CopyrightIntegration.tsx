"use client";

import Link from "next/link";
import { Playfair_Display, PT_Sans } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const ptsans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
};

export default function CopyrightIntegration() {
    return (
        <section className="relative w-full bg-white">
            {/* subtle brand auras */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -left-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
                style={{ background: `radial-gradient(circle, ${KA.purple}33, transparent 70%)` }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full opacity-20 blur-3xl"
                style={{ background: `radial-gradient(circle, ${KA.maroon}33, transparent 70%)` }}
            />

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-12 md:py-20">
                {/* LEFT: copy */}
                <div className="md:col-span-7">
                    {/* Eyebrow */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold tracking-widest text-gray-600">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: KA.maroon }} />
                        INTEGRATION
                    </div>

                    {/* Heading */}
                    <h2 className={`${playfair.className} text-[clamp(2rem,3.8vw,2.8rem)] font-bold leading-tight text-[#1F2A44]`}>
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})` }}
                        >
                            Seamless
                        </span>{" "}
                        IP portfolio management
                    </h2>

                    {/* Intro */}
                    <p className={`${ptsans.className} mt-5 max-w-2xl text-[17px] leading-7 text-[#2B3852]/90`}>
                        Connect all your intellectual property—copyrights, trademarks, patents, and designs—into one unified framework. Our approach ensures filings, renewals, and 
                        enforcement are coordinated, giving your portfolio a consistent story and measurable business value.
                    </p>

                    {/* System chips */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        {["Copyrights", "Trademarks", "Patents", "Designs"].map((t) => (
                            <span
                                key={t}
                                className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Benefits */}
                    <ul className={`${ptsans.className} mt-6 space-y-3 text-[15px] text-[#1F2A44]/90`}>
                        {[
                            "Comprehensive oversight across all IP assets",
                            "Conflict detection and brand consistency across portfolios",
                            "Dashboard reporting with KPIs and portfolio health metrics",
                            "Streamlined licensing and ownership alignment",
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
                            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#7F2B38] to-[#4D1475] px-8 py-3 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                        >
                            Schedule a consultation
                        </Link>
                    </div>
                </div>

                {/* RIGHT: Integration icon (keeps same right-edge alignment as other sections) */}
                <div className="md:col-span-5 flex justify-end -mr-6 sm:-mr-10 lg:-mr-14">
                    <IntegrationIcon className="h-[360px] w-[360px]" />
                </div>
            </div>
        </section>
    );
}

/* ---------------- Integration Icon: center hub + linked badges (©, TM, Patent, Design) ---------------- */
function IntegrationIcon({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 480 480" fill="none" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Integrated IP icon">
            <defs>
                <linearGradient id="ipGrad" x1="60" y1="60" x2="420" y2="420" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7F2B38" />
                    <stop offset="1" stopColor="#4D1475" />
                </linearGradient>
            </defs>

            {/* Orbit ring */}
            <circle cx="240" cy="240" r="160" stroke="url(#ipGrad)" strokeWidth="10" fill="none" />

            {/* Center hub */}
            <circle cx="240" cy="240" r="56" stroke="url(#ipGrad)" strokeWidth="12" fill="white" />
            <text x="240" y="250" textAnchor="middle" fontFamily="Inter, system-ui, Arial" fontSize="28" fontWeight="800" fill="#4D1475">IP</text>

            {/* Connectors */}
            {[
                [240, 180], // top
                [320, 240], // right
                [240, 300], // bottom
                [160, 240], // left
            ].map(([x, y], i) => (
                <line key={i} x1="240" y1="240" x2={x} y2={y} stroke="url(#ipGrad)" strokeWidth="10" />
            ))}

            {/* Top: © badge */}
            <circle cx="240" cy="110" r="40" stroke="url(#ipGrad)" strokeWidth="10" fill="white" />
            <text x="240" y="120" textAnchor="middle" fontFamily="Inter, system-ui, Arial" fontSize="28" fontWeight="800" fill="#4D1475">©</text>

            {/* Right: TM badge */}
            <circle cx="370" cy="240" r="40" stroke="url(#ipGrad)" strokeWidth="10" fill="white" />
            <text x="370" y="250" textAnchor="middle" fontFamily="Inter, system-ui, Arial" fontSize="24" fontWeight="800" fill="#4D1475">TM</text>

            {/* Bottom: Patent shield */}
            <path d="M200 360l40-14 40 14v28c0 32-18 56-40 70-22-14-40-38-40-70v-28z" transform="translate(40,0)" stroke="url(#ipGrad)" strokeWidth="10" fill="white" />

            {/* Left: Design diamond */}
            <path d="M120 240l40-40 40 40-40 40-40-40z" stroke="url(#ipGrad)" strokeWidth="10" fill="white" />
        </svg>
    );
}

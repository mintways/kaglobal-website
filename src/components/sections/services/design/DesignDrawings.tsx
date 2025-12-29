"use client";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
};

export default function DesignDrawings() {
    return (
        <section className="relative w-full bg-white">
            {/* soft brand auras (kept) */}
            <div
                aria-hidden
                className="absolute -top-20 -left-28 h-64 w-64 rounded-full opacity-25 blur-3xl"
                style={{ background: `radial-gradient(circle at center, ${KA.purple}33, transparent 70%)` }}
            />
            <div
                aria-hidden
                className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full opacity-25 blur-3xl"
                style={{ background: `radial-gradient(circle at center, ${KA.maroon}33, transparent 70%)` }}
            />

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-12 md:gap-12 md:py-16">
                {/* LEFT: content */}
                <div className="md:col-span-7">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-ptsans font-semibold tracking-widest text-gray-600">
                        <span className="h-2 w-2 rounded-full bg-ka-maroon" />
                        DRAWINGS
                    </div>

                    <h2 className="text-[clamp(1.9rem,3.8vw,2.6rem)] leading-tight text-ka-ink">
                        <span
                            className="font-playfair bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})` }}
                        >
                            Compliant
                        </span>{" "}
                        design drawings preparation
                    </h2>

                    <p className="font-ptsans mt-4 sm:mt-5 max-w-2xl text-[15.5px] sm:text-[16.5px] leading-7 text-[#2B3852]/90">
                        Our Illustrations team delivers design drawings fully compliant with international IP standards. We ensure 
                        technical accuracy and visual clarity to support smooth approvals.
                    </p>

                    <ul className="font-ptsans mt-5 sm:mt-6 space-y-3 text-[14.5px] sm:text-[15px] text-[#1F2A44]/90">
                        {[
                            "Comprehensive multi-view illustrations (front, side, isometric)",
                            "Precise lines, shading, and sectional representation",
                            "Global-standard sheet formats and labelling",
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
                </div>

                {/* RIGHT: animated design icon (responsive sizes) */}
                <div className="md:col-span-5 flex justify-end -mr-2 sm:-mr-6 lg:-mr-10">
                    <DesignBlueprintIcon className="h-40 w-40 sm:h-56 sm:w-56 md:h-[360px] md:w-[360px]" />
                </div>
            </div>
        </section>
    );
}

/* ---------------- ANIMATED SVG ICON ---------------- */
function DesignBlueprintIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            className={`${className} animate-fadeIn`}
            viewBox="0 0 480 480"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <defs>
                <linearGradient id="grad" x1="60" y1="60" x2="420" y2="420" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7F2B38" />
                    <stop offset="1" stopColor="#4D1475" />
                </linearGradient>

                <style>{`
          @keyframes drawLine {
            from { stroke-dashoffset: 1000; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes fadeInGrid {
            0% { opacity: 0; }
            100% { opacity: 0.08; }
          }
          @keyframes pulse {
            0%, 100% { r: 16; opacity: 1; }
            50% { r: 20; opacity: 0.6; }
          }
          @keyframes slideUp {
            0% { transform: translateY(40px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .draw { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: drawLine 2.4s ease forwards; }
          .fadeGrid { animation: fadeInGrid 1.2s ease forwards; animation-delay: 0.4s; }
          .pulseCircle { animation: pulse 2s ease-in-out infinite; transform-origin: center; }
          .slideUp { animation: slideUp 1s ease forwards; animation-delay: 2s; }
          .animate-fadeIn { animation: fadeIn 1s ease both; }
          @keyframes fadeIn { from { opacity: 0; transform: scale(0.95);} to { opacity: 1; transform: scale(1);} }
        `}</style>
            </defs>

            {/* blueprint sheet */}
            <rect
                x="80"
                y="60"
                width="300"
                height="360"
                rx="26"
                stroke="url(#grad)"
                strokeWidth="10"
                fill="#F8F9FB"
                className="draw"
            />

            {/* folded corner */}
            <path d="M320 60v70c0 8 6 14 14 14h66" stroke="url(#grad)" strokeWidth="10" className="draw" />
            <path d="M332 60l68 68" stroke="url(#grad)" strokeWidth="10" className="draw" />

            {/* drafting grid (fades in) */}
            {Array.from({ length: 5 }).map((_, i) => (
                <line
                    key={`v-${i}`}
                    x1={120 + i * 50}
                    x2={120 + i * 50}
                    y1="120"
                    y2="360"
                    stroke="#1F2A44"
                    strokeOpacity="0.08"
                    strokeWidth="8"
                    className="fadeGrid"
                    style={{ animationDelay: `${0.5 + i * 0.15}s` }}
                />
            ))}
            {Array.from({ length: 5 }).map((_, i) => (
                <line
                    key={`h-${i}`}
                    x1="120"
                    x2="370"
                    y1={120 + i * 50}
                    y2={120 + i * 50}
                    stroke="#1F2A44"
                    strokeOpacity="0.08"
                    strokeWidth="8"
                    className="fadeGrid"
                    style={{ animationDelay: `${0.6 + i * 0.15}s` }}
                />
            ))}

            {/* compass arms */}
            <path
                d="M210 150l80 140M250 290l60-140"
                stroke="url(#grad)"
                strokeWidth="10"
                className="draw"
                style={{ animationDelay: "0.6s" }}
            />

            {/* compass joint with pulse */}
            <circle cx="210" cy="150" r="16" stroke="url(#grad)" strokeWidth="8" fill="white" className="pulseCircle" />

            {/* ruler slides up */}
            <rect x="140" y="320" width="200" height="20" rx="6" stroke="url(#grad)" strokeWidth="8" fill="white" className="slideUp" />
            <path
                d="M140 320l20 20M180 320l20 20M220 320l20 20M260 320l20 20M300 320l20 20M340 320l20 20"
                stroke="#1F2A44"
                strokeOpacity="0.1"
                strokeWidth="6"
                className="slideUp"
            />
        </svg>
    );
}

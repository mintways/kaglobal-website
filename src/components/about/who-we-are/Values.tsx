"use client";

import React from "react";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
    text: "#1F2A44",
    muted: "#2B3852",
};

const VALUES = [
    { t: "Integrity", d: "We do the right thing, every single time—operating with total transparency and accountability.", i: "shield" },
    { t: "Excellence", d: "We deliver flawless, ISO-driven quality (ISO 9001/ISO 27001), backed by relentless attention to every detail.", i: "sparkle" },
    { t: "Client-First", d: "Practical advice meticulously aligned with your risk appetite, speed requirements, and measurable business success.", i: "handshake" },
    { t: "Security", d: "Your sensitive data is locked down. We prioritize stringent data privacy protocols, utilize secure clean rooms and audited controls for ultimate confidentiality.", i: "lock" },
];

const Icon = ({ name }: { name: string }) => {
    const cls = "h-5 w-5";
    switch (name) {
        case "shield":
            return <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z" /></svg>;
        case "sparkle":
            return <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden><path d="M12 2 9 9l-7 3 7 3 3 7 3-7 7-3-7-3-3-7Zm7 2-1 3-3 1 3 1 1 3 1-3 3-1-3-1-1-3Z" /></svg>;
        case "handshake":
            return <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden><path d="M9.5 7 12 9.5l2.5-2.5a3.5 3.5 0 0 1 5 5l-4.7 4.7a2.5 2.5 0 0 1-3.6 0l-.2-.2-.9.9a2.5 2.5 0 0 1-3.5-3.5l.9-.9-.2-.2a2.5 2.5 0 0 1 0-3.6L9.5 7Z" /></svg>;
        default:
            return <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden><path d="M7 10V8a5 5 0 1 1 10 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1Zm2 0h6V8a3 3 0 0 0-6 0v2Z" /></svg>;
    }
};

const Values = () => {
    return (
        <section className="relative overflow-hidden bg-white font-ptsans">
            {/* soft brand glows */}
            {/* <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#7F2B38]/10 blur-3xl" /> */}
            {/* <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#4D1475]/10 blur-3xl" /> */}

            <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
                {/* header */}
                <div className="mb-8 md:mb-10">
                    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] tracking-[0.18em] text-gray-700 shadow-sm font-euclid">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#7F2B38]" />
                        VALUES
                    </div>
                    <h2 className="mt-3 text-3xl font-euclid font-semibold leading-tight md:text-4xl">
                        <span className="bg-gradient-to-r from-[#7F2B38] to-[#4D1475] bg-clip-text text-transparent">
                            What We Stand For: Our Core DNA
                        </span>
                    </h2>
                </div>

                {/* cards */}
                <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {VALUES.map((v) => (
                        <div
                            key={v.t}
                            className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                            {/* gradient edge on hover */}
                            <div className="pointer-events-none absolute inset-px rounded-[22px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:linear-gradient(180deg,rgba(127,43,56,0.12),rgba(77,20,117,0.12))]" />

                            <div className="relative z-10">
                                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7F2B38] to-[#4D1475] text-white shadow-sm">
                                    <Icon name={v.i} />
                                </div>

                                <h3 className="text-base font-euclid font-semibold text-gray-900">{v.t}</h3>
                                <p className="mt-2 text-sm text-gray-700">{v.d}</p>

                                {/* chips row */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {v.t === "Integrity" && ["Transparency", "Accountability"].map((c) => (
                                        <span key={c} className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm font-ptsans">
                                            {c}
                                        </span>
                                    ))}
                                    {v.t === "Excellence" && ["ISO 9001", "ISO 27001"].map((c) => (
                                        <span key={c} className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm font-ptsans">
                                            {c}
                                        </span>
                                    ))}
                                    {v.t === "Client-First" && ["Outcome-Driven", "Speed"].map((c) => (
                                        <span key={c} className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm font-ptsans">
                                            {c}
                                        </span>
                                    ))}
                                    {v.t === "Security" && ["Privacy", "Clean Rooms"].map((c) => (
                                        <span key={c} className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm font-ptsans">
                                            {c}
                                        </span>
                                    ))}
                                </div>

                                {/* bottom ribbon */}
                                <div className="mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#7F2B38] to-[#4D1475]" />
                            </div>

                            {/* shimmer sweep */}
                            <span
                                aria-hidden
                                className="pointer-events-none absolute -top-8 left-1/3 h-20 w-2/3 -translate-x-1/2 rotate-[25deg] rounded-full bg-white/40 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* reduced-motion safety */}
            <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .hover\\:-translate-y-0\\.5:hover { transform: none !important; }
        }
      `}</style>
        </section>
    );
};

export default Values;

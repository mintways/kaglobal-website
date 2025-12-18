"use client";

import React from "react";
import { motion, Variants, easeInOut } from "framer-motion";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
    text: "#1F2A44",
    muted: "#2B3852",
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const float = (delay = 0) => ({
    initial: { y: 0, opacity: 0.7 },
    animate: {
        y: [0, -8, 0],
        opacity: 1,
        transition: { duration: 6, repeat: Infinity, ease: easeInOut, delay },
    },
});

export default function HeroAbout() {
    return (
        <section className="relative w-full bg-white"
        style={{ background: "linear-gradient(180deg, #F6F7F9 0%, #FFFFFF 70%)" }}>
            {/* --- decorative grid & auras --- */}
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
            {/* Subtle grid background */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(2,6,23,0.06)_1px,transparent_1px)] [background-size:28px_28px]"
            />

            <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
                <motion.div
                    className="grid gap-10 md:grid-cols-[1.25fr_1fr]"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                >
                    {/* LEFT: Narrative */}
                    <div className="relative">
                        {/* Animated accent bar */}
                        <motion.span
                            variants={fadeUp}
                            className="absolute -left-6 top-1 hidden h-16 w-1.5 rounded-full md:block"
                            style={{
                                background: "linear-gradient(180deg, #7F2B38 0%, #4D1475 100%)",
                            }}
                        />

                        <motion.div
                            variants={fadeUp}
                            className="font-ptsans inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] tracking-[0.22em] text-gray-700 shadow-sm backdrop-blur"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#7F2B38]" />
                            ABOUT&nbsp;US
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="font-playfair mt-4 text-4xl font-semibold leading-tight md:text-5xl"
                        >
                            <span className="animate-gradient bg-gradient-to-r from-[#7F2B38] via-[#4D1475] to-[#7F2B38] bg-clip-text text-transparent [background-size:200%_auto]">
                                Who We Are
                            </span>
                        </motion.h1>

                        {/* Accent underline */}
                        <motion.span
                            variants={fadeUp}
                            className="mt-3 block h-1 w-0 rounded-full bg-gradient-to-r from-[#7F2B38] to-[#4D1475]"
                            style={{ originX: 0 }}
                            animate={{ width: "6rem" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                        />

                        <motion.p
                            variants={fadeUp}
                            className="font-ptsans mt-6 max-w-3xl text-lg text-gray-700"
                        >
                            KA Global IP is a full-service, technology-forward intellectual property (IP) and corporate advisory partner. 
                            We rigorously protect and strategically grow your innovations—spanning patents, trademarks, designs, 
                            and comprehensive commercial strategy—through seamless global coordination, exceptional quality, 
                            and the delivery of measurable business outcomes.
                        </motion.p>

                        {/* Chips */}
                        <motion.div variants={stagger} className="mt-6 flex flex-wrap gap-3">
                            {["IP that drives revenue", "Data-driven workflows", "Cross-border execution"].map(
                                (chip) => (
                                    <motion.span
                                        key={chip}
                                        variants={fadeUp}
                                        className="font-ptsans rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-gray-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-[#7F2B38]/40 hover:shadow"
                                    >
                                        {chip}
                                    </motion.span>
                                )
                            )}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="/services"
                                className="group relative rounded-2xl bg-[#7F2B38] px-5 py-3 text-white shadow-sm transition-transform hover:-translate-y-0.5"
                            >
                                <span className="relative z-10 font-ptsans">Our Services</span>
                                <span
                                    className="absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-15"
                                    style={{
                                        background:
                                            "radial-gradient(120px 120px at 50% 50%, white, transparent 60%)",
                                    }}
                                />
                            </a>
                            <a
                                href="/about/global"
                                className="font-ptsans rounded-2xl border border-[#4D1475] px-5 py-3 text-[#4D1475] transition hover:-translate-y-0.5 hover:bg-[#4D1475] hover:text-white"
                            >
                                Global Reach
                            </a>
                        </motion.div>
                    </div>

                    {/* RIGHT: Glass card */}
                    <motion.div
                        variants={fadeUp}
                        className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur md:p-8"
                    >
                        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/50 blur-2xl" />

                        {/* Stats */}
                        <motion.div variants={stagger} className="grid grid-cols-3 gap-3 sm:gap-4">
                            {[
                                { k: "30K+", v: "Patents" },
                                { k: "20K+", v: "Trademarks" },
                                { k: "40+", v: "Jurisdictions" },
                            ].map((s) => (
                                <motion.div
                                    key={s.v}
                                    variants={fadeUp}
                                    className="rounded-2xl border border-black/10 bg-white p-4 text-center transition hover:-translate-y-0.5"
                                >
                                    <div className="font-playfair text-xl font-semibold text-gray-900">
                                        {s.k}
                                    </div>
                                    <div className="font-ptsans mt-1 text-xs text-gray-600">{s.v}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-gray-300/70 to-transparent" />

                        <motion.div variants={stagger} className="grid gap-3">
                            {[
                                "Strategy-first patent & TM portfolios",
                                "Monetisation & licensing frameworks",
                                "FTO, DD & risk mitigation",
                                "Lifecycle renewals & recordals",
                            ].map((t) => (
                                <motion.div
                                    key={t}
                                    variants={fadeUp}
                                    className="flex items-start gap-3 rounded-xl border border-black/10 bg-white p-3"
                                >
                                    <div className="mt-0.5 h-6 w-6 rounded-lg bg-gradient-to-br from-[#7F2B38] to-[#4D1475] text-white">
                                        <svg viewBox="0 0 20 20" className="m-1.5 h-3.5 w-3.5" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.707-9.707a1 1 0 0 0-1.414-1.414L9 10.172 7.707 8.879A1 1 0 1 0 6.293 10.293l2 2a1 1 0 0 0 1.414 0l4-4Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-ptsans text-sm text-gray-700">{t}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="mt-6 h-2 rounded-full bg-gradient-to-r from-[#7F2B38] to-[#4D1475]" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Reduced motion fallback */}
            <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-gradient {
            animation: none !important;
          }
        }
        .animate-gradient {
          animation: gradient-move 8s linear infinite;
        }
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
        </section>
    );
}

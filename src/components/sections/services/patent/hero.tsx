// components/sections/Hero.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";

const KA = {
    bgFrom: "#F6F7F9",
    bgTo: "#FFFFFF",
    text: "#0B1320",
    muted: "#344054",
    maroon: "#7F2B38",
    purple: "#4D1475",
};

type Props = {
    kicker?: string;
    title?: string;
    description?: string;
    ctaText?: string;
    ctaHref?: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
    marqueeItems?: string[];
};

const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 230, damping: 26 } as Transition,
    },
};

function PatentIcon() {
    return (
        <div className="relative w-full flex items-center justify-end p-0">
            <svg
                viewBox="0 0 256 256"
                className="h-[160px] xs:h-[200px] sm:h-[260px] md:h-[320px] lg:h-[380px] w-auto drop-shadow-sm"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
            >
                <defs>
                    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={KA.maroon} />
                        <stop offset="100%" stopColor={KA.purple} />
                    </linearGradient>
                </defs>

                <rect x="36" y="24" width="120" height="170" rx="14" stroke="url(#g1)" strokeWidth="3" />
                <path d="M139 24v36a8 8 0 0 0 8 8h36" stroke="url(#g1)" strokeWidth="3" />
                <path d="M147 24l36 36" stroke="url(#g1)" strokeWidth="3" />

                <path d="M52 70h88" stroke={KA.text} strokeOpacity="0.2" strokeWidth="3" />
                <path d="M52 86h88" stroke={KA.text} strokeOpacity="0.2" strokeWidth="3" />
                <path d="M52 102h88" stroke={KA.text} strokeOpacity="0.2" strokeWidth="3" />
                <path d="M52 122h64" stroke={KA.text} strokeOpacity="0.2" strokeWidth="3" />
                <path d="M52 138h64" stroke={KA.text} strokeOpacity="0.2" strokeWidth="3" />

                <circle cx="178" cy="132" r="28" stroke="url(#g1)" strokeWidth="3" />
                <circle cx="178" cy="132" r="16" stroke="url(#g1)" strokeWidth="3" fill="none" />
                <path d="M170 132l5 6 11-14" stroke="url(#g1)" strokeWidth="3" />

                <path d="M164 156l-6 22 18-10" stroke="url(#g1)" strokeWidth="3" />
                <path d="M192 156l6 22-18-10" stroke="url(#g1)" strokeWidth="3" />
            </svg>
        </div>
    );
}

export default function Hero({
    kicker = "Patents",
    title = "Safeguarding Your Innovations Worldwide",
    description = "At KA Global IP, we streamline the complexities of international patent protection and portfolio management. With our broad expertise and global infrastructure, you can rely on us to safeguard your intellectual property wherever you operate.",
    ctaText = "Connect",
    ctaHref = "/contact",
    secondaryCtaText = "See capabilities",
    secondaryCtaHref = "#capabilities",
    marqueeItems = [
        "Prior Art",
        "Drafting & PCT/Paris",
        "Office Action Strategy",
        "Accelerated Programs",
        "Portfolio Analytics",
        "Renewals & Recordals",
    ],
}: Props) {
    const [firstWord, ...rest] = title.split(" ");
    const titleTail = rest.join(" ");

    return (
        <section
            className="relative w-full overflow-hidden font-ptsans"
            style={{ background: `linear-gradient(180deg, ${KA.bgFrom} 0%, ${KA.bgTo} 70%)` }}
        >
            {/* Background auras + subtle grid */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
                <div
                    className="absolute -top-24 -left-28 h-72 w-72 rounded-full opacity-20 blur-3xl"
                    style={{ background: `radial-gradient(closest-side, ${KA.purple}, transparent)` }}
                />
                <div
                    className="absolute -bottom-24 -right-28 h-72 w-72 rounded-full opacity-20 blur-3xl"
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

            <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-12 items-center gap-8 sm:gap-10 px-4 py-10 sm:px-6 sm:py-16 md:gap-12 md:py-24">
                {/* ICON — top on mobile, right on sm+ */}
                <div className="order-1 sm:order-2 sm:col-start-7 sm:col-end-13 w-full">
                    <PatentIcon />
                </div>

                {/* TEXT — bottom on mobile, left on sm+ */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="order-2 sm:order-1 sm:col-span-6 lg:col-span-5"
                >
                    <motion.span
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] tracking-[0.18em] text-[#475467] ring-1 ring-black/5 font-ptsans"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-ka-maroon" />
                        {kicker}
                    </motion.span>

                    <motion.h1
                        variants={fadeUp}
                        className="mt-3 sm:mt-4 leading-[1.08] text-[clamp(1.9rem,6vw,3.2rem)] md:text-[clamp(2.2rem,3.8vw,3.6rem)] lg:text-[clamp(2.6rem,3.2vw,3.9rem)] max-w-[22ch]"
                    >
                        <span
                            className="bg-clip-text text-transparent font-playfair"
                            style={{ backgroundImage: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})` }}
                        >
                            {firstWord}
                        </span>{" "}
                        {titleTail}
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="mt-4 sm:mt-5 text-[15.5px] sm:text-[16px] leading-7 md:max-w-[60ch] font-ptsans"
                        style={{ color: KA.muted }}
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 font-ptsans"
                    >
                        <Link
                            href={ctaHref}
                            className="inline-flex justify-center items-center rounded-2xl bg-gradient-to-r from-ka-maroon to-ka-purple px-6 py-3 text-[15.5px] sm:text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(11,19,32,0.10)] transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ka-maroon focus-visible:ring-offset-2 w-full sm:w-auto"
                        >
                            {ctaText}
                        </Link>

                        <Link
                            href={secondaryCtaHref}
                            className="inline-flex justify-center items-center rounded-2xl px-5 py-3 text-[14px] font-semibold text-ka-ink ring-1 ring-black/10 hover:ring-black/20 w-full sm:w-auto"
                        >
                            {secondaryCtaText}
                        </Link>
                    </motion.div>

                    <motion.div variants={fadeUp} className="mt-7 sm:mt-8 w-full overflow-hidden font-ptsans">
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-10 md:w-12 bg-gradient-to-r from-white to-transparent" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-10 md:w-12 bg-gradient-to-l from-white to-transparent" />
                            <div className="animate-marquee flex gap-4 sm:gap-6 whitespace-nowrap">
                                {marqueeItems.concat(marqueeItems).map((item, i) => (
                                    <span
                                        key={`${item}-${i}`}
                                        className="rounded-full bg-white px-3 py-1 text-[11px] sm:text-xs text-ka-ink ring-1 ring-[#E6E8EC] shadow-sm font-ptsans"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <style jsx>{`
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            transform: none;
          }
        }
      `}</style>
        </section>
    );
}

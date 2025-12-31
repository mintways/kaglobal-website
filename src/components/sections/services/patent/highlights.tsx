// components/sections/HighlightsModern.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { Share2, Layers, Factory } from "lucide-react";

const COLOR = {
    ink: "var(--color-ka-ink)",
    maroon: "var(--color-ka-maroon)",
    purple: "var(--color-ka-purple)",
    muted: "#475467",
};

export type Item = {
    icon: React.ReactNode;
    title: string;
    text: string;
};

export type Props = {
    eyebrow?: string;
    heading?: string;
    subheading?: string;
    items?: Item[];
    /** Optional mini-CTA text under each card; set to "" to hide globally */
    cardCta?: string;
};

// Motion variants
const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const card: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring" as const, stiffness: 240, damping: 26 } as Transition,
    },
};

export default function HighlightsModern({
    eyebrow = "Why Partner with KA Global IP",
    heading = "Global Reach. Strategic Precision. Seamless Compliance.",
    subheading = "Protecting innovation requires more than just filing; it requires a unified global infrastructure. KA Global IP secures your advancements across more than 90 countries through a seamless, end-to-end management framework defined by speed and technical accuracy.",
    cardCta = "Explore more",
    items = [
        {
            icon: <Share2 className="h-6 w-6 sm:h-7 sm:w-7" />,
            title: "Bespoke Global Patent Solutions",
            text: "We deliver comprehensive protection strategies tailored to your specific industry requirements. Our technical expertise ensures that your patent assets are safeguarded with the highest degree of precision across diverse regulatory landscapes.",
        },
        {
            icon: <Layers className="h-6 w-6 sm:h-7 sm:w-7" />,
            title: "Expert Portfolio Governance & Scalability",
            text: "Specializing in the management of large-scale, complex portfolios, we ensure sustained growth and absolute compliance. From strategic oversight to automated renewal cycles, we provide the infrastructure necessary for long-term asset viability.",
        },
        {
            icon: <Factory className="h-6 w-6 sm:h-7 sm:w-7" />,
            title: "A Legacy of Trust and Excellence",
            text: "Join a distinguished roster of global innovators. Our firm’s commitment to excellence is consistently recognized by leading industry authorities, including IP STARS and Forbes, reflecting our standing as a premier partner in intellectual property.",
        },
    ],
}: Props) {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            <div className="relative mx-auto max-w-7xl px-4 py-12 xs:px-5 sm:px-6 md:px-8 md:py-20">
                {/* Heading block */}
                <div className="mx-auto max-w-[60rem] text-center">
                    {eyebrow && (
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] tracking-[0.18em] text-[#344054] ring-1 ring-black/5">
                            <span className="h-1.5 w-1.5 rounded-full bg-ka-maroon" />
                            {eyebrow}
                        </span>
                    )}

                    <h2 className="mt-3 sm:mt-4 leading-tight text-[clamp(1.6rem,4.5vw,2.8rem)]">
                        <span
                            className="font-playfair bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(90deg, ${COLOR.maroon}, ${COLOR.purple})` }}
                        >
                            Global Reach
                        </span>
                        : Protecting Innovations across 90+ countries worldwide
                    </h2>

                    {subheading && (
                        <p className="font-ptsans mx-auto mt-3 sm:mt-4 max-w-3xl text-[15.5px] sm:text-base md:text-lg leading-7 text-[#475467]">
                            {subheading}
                        </p>
                    )}
                </div>

                {/* Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch"
                >
                    {items.map((it, idx) => (
                        <motion.article
                            key={idx}
                            variants={card}
                            className="group relative rounded-2xl bg-white p-5 sm:p-7 shadow-[0_10px_30px_rgba(11,19,32,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,19,32,0.10)] h-full"
                        >
                            {/* Hover gradient border */}
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
                                style={{ background: `linear-gradient(135deg, ${COLOR.maroon}44, ${COLOR.purple}44)` }}
                            />

                            <div className="relative z-10 flex h-full flex-col items-center text-center">
                                {/* Icon */}
                                <div className="mb-5 sm:mb-6 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#F5F6F8] text-ka-ink ring-1 ring-black/5">
                                    {it.icon}
                                </div>

                                <h3 className="font-playfair whitespace-pre-line text-[20px] sm:text-[22px] md:text-[26px] leading-[1.18]">
                                    {it.title}
                                </h3>

                                <p className="font-ptsans mt-2.5 sm:mt-3 text-[14.5px] sm:text-[15px] leading-7 text-[#475467]">
                                    {it.text}
                                </p>

                                {/* Spacer pushes CTA to bottom for equal height feel */}
                                <div className="flex-1" />

                                {cardCta && (
                                    <span className="mt-4 inline-flex items-center gap-2 text-sm text-ka-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        {cardCta}
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </span>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Bottom ribbon accent */}
                <div
                    className="mx-auto mt-10 sm:mt-12 h-1 w-20 sm:w-24 rounded-full"
                    style={{ backgroundImage: `linear-gradient(90deg, ${COLOR.maroon}, ${COLOR.purple})` }}
                />
            </div>

            <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .group:hover { transform: none !important; }
        }
      `}</style>
        </section>
    );
}

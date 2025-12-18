// components/sections/IndustriesSection.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";

type Item = { title: string; text: string };

type Props = {
    heading?: string;
    intro?: string;
    items?: Item[];
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
        transition: { type: "spring", stiffness: 220, damping: 26 } as Transition,
    },
};

const card: Variants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 240, damping: 26 } as Transition,
    },
};

export default function IndustriesSection({
    heading = "Empowering Innovation across Diverse Industries with Tailored IP Solutions.",
    intro = `At KA Global IP, we proudly serve a wide range of clients, including enterprises, startups, R&D centers,
universities, and GCCs. Our expertise in intellectual property management ensures that each client receives
strategic guidance. We are dedicated to safeguarding innovations and fostering growth in every sector.`,
    items = [
        {
            title: "Supporting Startups And Enterprises With Comprehensive IP Management Services",
            text: "Our tailored services cater to the unique needs of each client.",
        },
        {
            title: "Partnering With R&D Centers For Innovative Solutions And Global Protection",
            text: "We collaborate closely with R&D centers to protect groundbreaking ideas.",
        },
        {
            title: "Empowering Universities With Strategic IP Management And Support",
            text: "Our services help universities navigate the complexities of intellectual property.",
        },
    ],
}: Props) {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto max-w-7xl px-4 py-14 xs:px-5 sm:px-6 md:px-8 md:py-20">
                {/* Top rule */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="h-px w-20 bg-[#D7D9DE] sm:w-24 md:w-32"
                />

                {/* Heading + intro */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="mt-6 grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-12 md:gap-12"
                >
                    <motion.h2
                        variants={fadeUp}
                        className="md:col-span-6 text-[clamp(1.6rem,4.8vw,2.8rem)] leading-tight text-ka-ink font-euclid"
                    >
                        {heading}
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="md:col-span-6 max-w-prose text-[15.5px] md:text-[17px] leading-7 text-[#475467] font-ptsans"
                    >
                        {intro}
                    </motion.p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
                >
                    {items.map((it, idx) => (
                        <motion.article
                            key={idx}
                            variants={card}
                            className="rounded-2xl bg-white p-5 sm:p-7 shadow-[0_10px_30px_rgba(11,19,32,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,19,32,0.10)] h-full flex flex-col"
                        >
                            <h3 className="text-[20px] sm:text-[22px] md:text-[26px] leading-tight text-ka-ink font-euclid">
                                {it.title}
                            </h3>
                            <p className="mt-3 text-[14.5px] sm:text-[15px] leading-7 text-[#475467] font-ptsans">
                                {it.text}
                            </p>

                            {/* pushes content to top to equalize card heights */}
                            <div className="flex-1" />
                        </motion.article>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .hover\\:-translate-y-1 { transform: none !important; }
        }
      `}</style>
        </section>
    );
}

// components/sections/TrustSection.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { Award, CheckCircle2, Handshake } from "lucide-react";

// KA palette (kept for inline gradients already used below)
const KA = {
    text: "#0B1320",
    muted: "#475467",
    maroon: "#7F2B38",
    purple: "#4D1475",
};

type Bullet = {
    icon: React.ReactNode;
    title: string;
    text: string;
};

type Props = {
    kicker?: string;
    heading?: string;
    body?: string;
    bullets?: Bullet[];
    badges?: string[];
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

export default function TrustSection({
    kicker = "A Legacy of Excellence and Trust",
    heading = "Recognized by Global Authorities in Intellectual Property",
    body = "KA Global IP is honored to be consistently featured in the world’s most prestigious intellectual property rankings. These accolades from IP STARS, IAM, IBLJ, WTR, and Forbes India serve as a testament to our unwavering commitment to excellence and our sophisticated approach to global IP management.",
    bullets = [
        { icon: <Award className="h-5 w-5" />, title: "Distinguished Global Recognitions", text: "Our firm is regularly evaluated and honored by top-tier global IP directories and leading business journals, reflecting our standing as a premier legal partner in the international arena." },
        { icon: <CheckCircle2 className="h-5 w-5" />, title: "Why Global Leaders Choose Us", text: "Trust is built on performance. We deliver through ISO-grade operational processes, a proven track record of successful asset protection, and a culture of absolute transparency in reporting." },
        { icon: <Handshake className="h-5 w-5" />, title: "Partner with Strategic Confidence", text: "We provide more than just legal filings; we offer strategic guidance, measurable business outcomes, and high-touch, responsive support that ensures your portfolio remains a competitive advantage." },
    ],
    badges = ["IP STARS", "IAM", "IBLJ", "WTR", "Forbes India"],
}: Props) {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            {/* NOTE: Desktop (md+) layout unchanged */}
            <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-12 md:gap-14 md:px-6 md:py-24">
                {/* LEFT: Narrative */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="md:col-span-5 lg:col-span-5"
                >
                    <motion.span
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] tracking-[0.18em] text-[#344054] ring-1 ring-black/5 font-ptsans"
                    >
                        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: KA.maroon }} />
                        {kicker}
                    </motion.span>

                    <motion.h2
                        variants={fadeUp}
                        className="mt-4 text-4xl leading-tight text-ka-ink md:text-5xl font-playfair"
                    >
                        {heading}
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="mt-5 text-[16px] md:text-[17px] leading-7 font-ptsans"
                        style={{ color: KA.muted }}
                    >
                        {body}
                    </motion.p>

                    {badges?.length ? (
                        <motion.ul variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-2">
                            {badges.map((b) => (
                                <li
                                    key={b}
                                    className="rounded-full bg-white px-3 py-1 text-xs text-ka-ink ring-1 ring-[#E6E8EC] shadow-sm font-ptsans"
                                >
                                    {b}
                                </li>
                            ))}
                        </motion.ul>
                    ) : null}
                </motion.div>

                {/* RIGHT: Bullets */}
                <motion.ul
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="
            md:col-span-7 lg:col-span-7
            grid grid-cols-1
            sm:grid-cols-2
            md:grid-cols-1     /* <-- revert to single column at desktop to keep layout unchanged */
            gap-4 sm:gap-5
          "
                >
                    {bullets.map((b, i) => (
                        <motion.li key={i} variants={card} className="h-full">
                            <div
                                className="rounded-2xl p-[1px] h-full"
                                style={{ background: `linear-gradient(135deg, ${KA.maroon}33, ${KA.purple}33)` }}
                            >
                                <div className="group relative h-full rounded-2xl bg-white p-5 sm:p-6 shadow-[0_10px_30px_rgba(11,19,32,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,19,32,0.10)]">
                                    <div className="grid grid-cols-[auto_1fr] items-start gap-3.5 sm:gap-4">
                                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#F5F6F8] text-ka-ink ring-1 ring-black/5">
                                            {b.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-[18px] sm:text-[20px] md:text-[22px] leading-tight text-ka-ink font-playfair">
                                                {b.title}
                                            </h3>
                                            <p className="mt-1.5 text-[14.5px] sm:text-[15px] leading-7 font-ptsans" style={{ color: KA.muted }}>
                                                {b.text}
                                            </p>
                                            <span
                                                className="mt-4 block h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-24"
                                                style={{ background: `linear-gradient(90deg, ${KA.maroon}, ${KA.purple})` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>

            <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .group:hover { transform: none !important; }
        }
      `}</style>
        </section>
    );
}

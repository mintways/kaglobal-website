// components/sections/Hero.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import type { ReactNode } from "react";

const KA = {
    maroon: "#7F2B38",
    purple: "#4D1475",
    text: "#0B1320",
    muted: "#475467",
};

export default function Hero({
    title = (
        <>
            <span className="block">Protecting Your</span>
            <span className="block">Innovations Across</span>
            <span className="block">The Globe</span>
        </>
    ),
    subtitle =
        "KA Global IP specializes in streamlining intricate global patent protection and sophisticated portfolio management. Leverage our expansive international network and profound expertise to robustly secure your intellectual property assets.",
    primaryCta = { label: "Connect", href: "/contact" },
    secondaryCta = { label: "See capabilities", href: "#capabilities" },
    pills = [
        "Drafting & PCT/Paris",
        "Office Action Strategy",
        "Accelerated Programs",
        "Portfolio Management",
    ],
    image = {
        src: "/illustrations/patent-certificate.svg",
        alt: "Patent certificate illustration",
        priority: true,
    },
}: {
    title?: ReactNode;
    subtitle?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    pills?: string[];
    image?: { src: string; alt: string; priority?: boolean };
}) {
    return (
        <section
            className="relative overflow-hidden bg-white"
            style={{
                background: "linear-gradient(180deg, #F6F7F9 0%, #FFFFFF 70%)",
            }}
        >
            {/* --- decorative grid & auras --- */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
                <div
                    className="absolute -left-28 top-0 h-72 w-72 rounded-full opacity-25 blur-3xl"
                    style={{
                        background: `radial-gradient(closest-side, ${KA.purple}, transparent)`,
                    }}
                />
                <div
                    className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full opacity-25 blur-3xl"
                    style={{
                        background: `radial-gradient(closest-side, ${KA.maroon}, transparent)`,
                    }}
                />
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #0B1320 1px, transparent 1px), linear-gradient(to bottom, #0B1320 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                        maskImage:
                            "radial-gradient(1200px 600px at 50% 12%, #000 35%, transparent 70%)",
                        WebkitMaskImage:
                            "radial-gradient(1200px 600px at 50% 12%, #000 35%, transparent 70%)",
                    }}
                />
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
                {/* LEFT: COPY */}
                <div>
                    {/* Small badge */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur font-ptsans">
                        <span className="inline-block h-2 w-2 rounded-full bg-rose-500" />
                        Strategic Advisory
                    </div>

                    {/* Heading — use Playfair globally */}
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-playfair text-4xl font-bold tracking-tight md:text-6xl"
                    >
                        <span className="whitespace-pre-line bg-gradient-to-r from-[#7F2B38] via-[#581845] to-[#4B2E83] bg-clip-text text-transparent">
                            {typeof title === "string"
                                ? title
                                : "Protecting Your\nInnovations Across\nThe Globe"}
                        </span>
                    </motion.h1>

                    {/* Subcopy — PT Sans */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="font-ptsans mt-5 max-w-xl text-lg leading-relaxed text-gray-700"
                    >
                        {subtitle}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mt-7 flex flex-wrap items-center gap-3"
                    >
                        <Link
                            href={primaryCta.href}
                            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#7F2B38] to-[#4B2E83] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7F2B38]/40"
                        >
                            {primaryCta.label}
                        </Link>
                        <Link
                            href={secondaryCta.href}
                            className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white/70 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur transition hover:bg-white"
                        >
                            {secondaryCta.label}
                        </Link>
                    </motion.div>

                    {/* Pills — PT Sans */}
                    {pills?.length ? (
                        <div className="mt-8 flex max-w-2xl flex-wrap gap-2">
                            {pills.map((p) => (
                                <span
                                    key={p}
                                    className="font-ptsans rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 shadow-sm"
                                >
                                    {p}
                                </span>
                            ))}
                        </div>
                    ) : null}
                </div>

                {/* RIGHT: ILLUSTRATION */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="flex justify-center md:justify-end"
                >
                    <Globe2 className="h-85 w-85 text-[#4B2E83] stroke-[1.5]" />
                </motion.div>
            </div>
        </section>
    );
}

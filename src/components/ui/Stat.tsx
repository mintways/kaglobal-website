"use client";

import { motion } from "framer-motion";
import { Playfair_Display, PT_Sans } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const ptsans = PT_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function Stat({
    value,
    label,
    dark = false,
    delay = 0,
}: {
    value: string;
    label: string;
    dark?: boolean;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay }}
            className={`rounded-2xl p-6 text-center shadow-sm ring-1 ${dark
                    ? "bg-white/10 ring-white/15 text-white"
                    : "bg-white ring-gray-200 text-gray-900"
                }`}
        >
            <div
                className={`${playfair.className} text-3xl font-bold ${dark ? "text-white" : "text-[#4B2E83]"
                    }`}
            >
                {value}
            </div>
            <div
                className={`${ptsans.className} mt-1 ${dark ? "text-white/85" : "text-gray-700"
                    }`}
            >
                {label}
            </div>
        </motion.div>
    );
}

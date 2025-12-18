"use client";

import { LucideIcon } from "lucide-react";
import { Playfair_Display, PT_Sans } from "next/font/google";
import { motion } from "framer-motion";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const ptsans = PT_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function IconTitle({
    title,
    Icon,
    subtitle,
    dark = false,
    delay = 0,
}: {
    title: string;
    Icon: LucideIcon;
    subtitle?: string;
    dark?: boolean;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay }}
            className="mb-8"
        >
            <div className="mb-3 flex items-center gap-3">
                <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${dark
                            ? "bg-white/10 ring-white/20"
                            : "bg-[#efeafd] ring-[#7b61c3]/20"
                        }`}
                >
                    <Icon
                        className={`h-5 w-5 stroke-[1.75] ${dark ? "text-white/90" : "text-[#4B2E83]"
                            }`}
                    />
                </span>
                <h2
                    className={`${playfair.className} text-2xl font-semibold md:text-3xl ${dark ? "text-white" : "text-gray-900"
                        }`}
                >
                    {title}
                </h2>
            </div>
            {subtitle && (
                <p
                    className={`${ptsans.className} max-w-3xl text-base md:text-lg ${dark ? "text-white/90" : "text-gray-700"
                        }`}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}

"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react"; // <-- add an icon

function Stat({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay }}
            className="rounded-2xl bg-white p-6 text-center ring-1 ring-gray-200 shadow-sm"
        >
            <div className="font-playfair text-3xl font-bold text-[#4B2E83]">{value}</div>
            <div className="font-ptsans mt-1 text-gray-700">{label}</div>
        </motion.div>
    );
}

export default function ImpactSection() {
    const stats = [
        { value: "180+", label: "Active Corporate Portfolios" },
        { value: "1,200+", label: "Annual New Filings Managed" },
        { value: "48h", label: "Avg. FTO Screening Turnaround*" },
        { value: "95%+", label: "On-time Prosecution Milestones" },
    ];

    return (
        <section id="impact" className="bg-[#f7f7f8] py-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-8">
                    <div className="mb-3 flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#efeafd] ring-1 ring-[#7b61c3]/20">
                            <BarChart3 className="h-5 w-5 text-[#4B2E83]" strokeWidth={1.75} />
                        </span>
                        <h2 className="font-playfair text-2xl font-semibold text-gray-900 md:text-3xl">
                            Impact Snapshot
                        </h2>
                    </div>
                    <p className="font-ptsans max-w-3xl text-base text-gray-700 md:text-lg">
                        Experience that scales with you.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((s, i) => (
                        <Stat key={s.label} value={s.value} label={s.label} delay={i * 0.05} />
                    ))}
                </div>

                <p className="font-ptsans mt-6 text-sm text-gray-600">
                    *Turnaround varies by complexity and jurisdictional scope.
                </p>
            </div>
        </section>
    );
}

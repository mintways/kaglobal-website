"use client";

import Section from "@/components/ui/Section";
import { Globe2, BadgeCheck, FolderKanban, Users2 } from "lucide-react";

const items = [
    { icon: Globe2, label: "Countries Covered", value: "100+" },
    { icon: BadgeCheck, label: "Patents Managed", value: "28,000+" },
    { icon: FolderKanban, label: "Trademarks Managed", value: "32,000+" },
    { icon: Users2, label: "Clients Served", value: "2,500+" },
];

export default function StatsStrip() {
    return (
        <Section className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-10">
                {/* Subtle divider heading */}
                <div className="mb-8 text-center">
                    <p className="text-xs uppercase tracking-widest text-[#7F2B38]/80">
                        By the Numbers
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#1F1F22] sm:text-3xl">
                        Global Impact Metrics
                    </h2>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                    {items.map(({ icon: Icon, label, value }, i) => (
                        <div
                            key={label}
                            className="group flex flex-col items-center justify-center rounded-3xl border border-[#EAEAEA] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                            style={{
                                animation: `fadeInUp 0.6s ease ${i * 0.1}s both`,
                            }}
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7F2B38]/10 to-[#4D1475]/10">
                                <Icon className="h-6 w-6 text-[#4D1475]" strokeWidth={1.75} />
                            </div>
                            <div className="mt-4 text-3xl font-bold text-[#1F1F22]">{value}</div>
                            <div className="mt-1 text-sm text-black/60">{label}</div>
                        </div>
                    ))}
                </div>

                {/* description line */}
                <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-black/60">
                    We provide streamlined, one-window coordination for all filings, renewals, enforcement actions, 
                    analytics, and monetization strategies across diverse global regions.
                </p>
            </div>

            {/* subtle appear animation */}
            <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [style*="animation: fadeInUp"] {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
        </Section>
    );
}

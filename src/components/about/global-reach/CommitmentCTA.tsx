"use client";

import Section from "@/components/ui/Section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CommitmentCTA() {
    return (
        <Section className="relative isolate overflow-hidden bg-white text-ka-ink">
            {/* Decorative glowing orbs */}
            <div className="pointer-events-none absolute -top-16 left-0 h-64 w-64 rounded-full bg-[#7F2B38]/5 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#4D1475]/5 blur-3xl" />

            {/* Content */}
            <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-16 md:py-20 text-center">
                {/* Heading */}
                <h2 className="font-euclid text-2xl sm:text-3xl md:text-4xl leading-tight">
                    Shaping Tomorrow’s{" "}
                    <span className="bg-gradient-to-r from-[#7F2B38] via-[#65285F] to-[#4D1475] bg-clip-text text-transparent">
                        Global IP Landscape
                    </span>
                </h2>

                {/* Description */}
                <p className="mt-4 mx-auto max-w-3xl text-sm text-gray-700/90 sm:text-base md:text-lg font-ptsans">
                    Innovation knows no borders. Our comprehensive suite of services—spanning filings, renewals, enforcement, analytics, 
                    monetization, and strategic advisory—is meticulously built to scale seamlessly with your business, wherever your vision takes you
                </p>

                {/* CTA buttons */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link
                        href="/solutions"
                        className="inline-flex items-center gap-2 rounded-2xl bg-[#7F2B38] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#65285F]"
                    >
                        Explore Our Services
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-2xl border border-[#4D1475]/40 px-6 py-3 text-sm font-semibold text-[#4D1475] transition hover:-translate-y-0.5 hover:bg-[#4D1475]/10"
                    >
                        Speak to an Expert
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>

            {/* Bottom subtle fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#F0F0F0]" />

            {/* Motion safety */}
            <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .hover\\:-translate-y-0\\.5:hover {
            transform: none !important;
          }
        }
      `}</style>
        </Section>
    );
}

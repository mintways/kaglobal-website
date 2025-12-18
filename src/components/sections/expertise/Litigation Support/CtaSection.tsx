// -----------------------------------------------------------------------------
// components/sections/services/litigation/CtaSection.tsx
"use client";
import * as React from "react";
import Link from "next/link";

export default function CtaSection() {
    return (
        <section id="cta" className="bg-white py-0">
            <div className="mx-auto -mt-10 mb-10 w-full max-w-6xl px-6">
                <div className="relative rounded-2xl bg-gradient-to-r from-[#4B2E83] via-[#5b3aa0] to-[#6E44AB] p-6 ring-1 ring-white/15 text-white shadow-xl">
                    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 className="font-euclid text-xl font-semibold md:text-2xl leading-snug">
                                Your Rights, Protected. Your Innovations, Enforced.
                            </h3>
                            <p className="mt-1 font-ptsans text-[15.5px] text-white/85">
                                Partner with KA Global IP for decisive, coordinated outcomes in global intellectual property disputes.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#4B2E83] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        >
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>

            {/* Motion safety for hover translation */}
            <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .hover\\:-translate-y-0\\.5:hover {
            transform: none !important;
          }
        }
      `}</style>
        </section>
    );
}

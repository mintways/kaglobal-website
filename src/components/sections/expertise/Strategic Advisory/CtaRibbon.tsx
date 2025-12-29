"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaRibbon() {
    return (
        <section className="bg-white py-0">
            <div className="mx-auto -mt-10 mb-10 max-w-6xl px-6">
                <div className="relative rounded-2xl bg-gradient-to-r from-[#4B2E83] via-[#5b3aa0] to-[#6E44AB] p-6 ring-1 ring-white/15 text-white shadow-xl">
                    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 className="font-playfair text-xl md:text-2xl font-semibold">
                                Align your IP strategy precisely with your upcoming product launch objectives.
                            </h3>
                            <p className="font-ptsans text-white/85">
                                Schedule a Strategy Huddle with our senior team today to develop a practical, milestone-tied protection plan
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-ptsans font-semibold text-[#4B2E83] shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        >
                            Talk to an expert <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

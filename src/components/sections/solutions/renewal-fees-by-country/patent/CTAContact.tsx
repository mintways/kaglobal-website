// components/sections/solutions/renewal-fees-by-country/trademark/CTAContact.tsx
"use client";

import * as React from "react";
import { PhoneCall, Mail, ShieldCheck, Globe2, BellRing } from "lucide-react";

export default function CTAContact() {
    return (
        <section
            aria-labelledby="cta-renewals-title"
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#4B2E83] via-[#5b3aa0] to-[#6E44AB] p-6 text-white shadow-lg md:p-8"
        >
            {/* Soft background texture */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]"
            />

            {/* Content */}
            <div className="grid gap-8 md:grid-cols-3 md:gap-10">
                {/* Left: Copy */}
                <div className="md:col-span-2">
                    <h3 id="cta-renewals-title" className="text-2xl font-bold md:text-3xl">
                        Renewals without the guesswork
                    </h3>
                    <p className="mt-2 text-white/90">
                        KA Global IP consolidates global annuities into a single schedule, currency, and invoice—while
                        ensuring compliance with local rules. Get a tailored cost forecast and a risk-free calendar.
                    </p>

                    {/* Feature bullets with icons */}
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                        <li className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                                <Globe2 className="h-4 w-4" />
                            </span>
                            <span className="text-sm text-white/90">Single dashboard for 90+ jurisdictions</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                                <ShieldCheck className="h-4 w-4" />
                            </span>
                            <span className="text-sm text-white/90">Entity-based fee optimization (Small/Micro where available)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                                <BellRing className="h-4 w-4" />
                            </span>
                            <span className="text-sm text-white/90">Automated reminders, grace tracking, restoration workflows</span>
                        </li>
                    </ul>
                </div>

                {/* Right: Actions */}
                <div className="flex flex-col justify-center gap-3">
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#4B2E83] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    >
                        <PhoneCall className="h-5 w-5" />
                        Book a 15-min Call
                    </a>
                    <a
                        href="mailto:team@kaglobalip.co"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    >
                        <Mail className="h-5 w-5" />
                        team@kaglobalip.co
                    </a>

                    {/* Small reassurance / compliance note */}
                    <p className="mt-1 text-center text-xs text-white/80">
                        No obligation. We’ll share a forecast and suggested cadence.
                    </p>
                </div>
            </div>
        </section>
    );
}

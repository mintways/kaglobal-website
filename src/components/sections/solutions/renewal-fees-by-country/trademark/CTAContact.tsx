"use-client";

import React from 'react'
import { PhoneCall, Mail } from "lucide-react";

const CTAContact = () => {
    return (
        <div className="rounded-3xl bg-gradient-to-br from-[#4D1475] to-[#7F2B38] p-8 text-white shadow-lg">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold">Renewals without the guesswork</h3>
                    <p className="mt-2 text-white/90">
                        KA Global IP consolidates global annuities into a single schedule, currency, and invoice—while ensuring
                        compliance with local rules. Get a tailored cost forecast and risk-free calendar.
                    </p>
                    <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/90">
                        <li>Single dashboard for 90+ jurisdictions</li>
                        <li>Entity-based fee optimization (Small/Micro where available)</li>
                        <li>Automated reminders, grace-period tracking, restoration workflows</li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center gap-3">
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-[#4D1475] hover:opacity-95"
                    >
                        <PhoneCall className="h-5 w-5" />
                        Book a 15-min Call
                    </a>
                    <a
                        href="mailto:team@kaglobalip.co"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 px-5 py-3 text-white hover:bg-white/10"
                    >
                        <Mail className="h-5 w-5" />
                        team@kaglobalip.co
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CTAContact

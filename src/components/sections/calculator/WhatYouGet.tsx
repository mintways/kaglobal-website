"use client";

import { Check } from "lucide-react";

export default function WhatYouGet() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
                {/* LEFT: illustrative cards */}
                <div className="md:col-span-7">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {/* Donut + legend */}
                        <div className="rounded-xl border border-[#E7E7EA] bg-white p-4 shadow-sm">
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#900C3F]" />
                                <p className="font-ptsans font-medium text-[#0B1320]">Yearly Cost Breakdown</p>
                            </div>

                            <div className="mt-4 grid grid-cols-[1fr_auto] gap-4">
                                <ul className="font-ptsans space-y-2 text-[13px] text-[#344054]">
                                    <li className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-sm bg-[#0B1320]" />
                                        Official Fees
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-sm bg-[#900C3F]" />
                                        Service Fees
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-sm bg-[#C84B6D]" />
                                        Agent Fees
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-sm bg-[#8E99A8]" />
                                        Bank/Txn Fees
                                    </li>
                                </ul>

                                {/* Simple donut */}
                                <svg viewBox="0 0 120 120" className="h-28 w-28">
                                    <circle cx="60" cy="60" r="46" stroke="#F2F4F7" strokeWidth="14" fill="none" />
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r="46"
                                        stroke="#0B1320"
                                        strokeWidth="14"
                                        fill="none"
                                        strokeDasharray="289"
                                        strokeDashoffset="60"
                                        strokeLinecap="round"
                                    />
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r="46"
                                        stroke="#900C3F"
                                        strokeWidth="14"
                                        fill="none"
                                        strokeDasharray="289"
                                        strokeDashoffset="170"
                                        strokeLinecap="round"
                                    />
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r="46"
                                        stroke="#C84B6D"
                                        strokeWidth="14"
                                        fill="none"
                                        strokeDasharray="289"
                                        strokeDashoffset="230"
                                        strokeLinecap="round"
                                    />
                                    <text
                                        x="50%"
                                        y="52%"
                                        textAnchor="middle"
                                        className="fill-[#0B1320]"
                                        fontSize="16"
                                        fontWeight="700"
                                    >
                                        2025
                                    </text>
                                </svg>
                            </div>
                        </div>

                        {/* Savings */}
                        <div className="rounded-xl border border-[#E7E7EA] bg-white p-4 shadow-sm">
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#0B1320]" />
                                <p className="font-ptsans font-medium text-[#0B1320]">Forecasted Savings</p>
                            </div>

                            <div className="mt-4 grid grid-cols-3 gap-3">
                                {[
                                    ["Annual", "$70,000"],
                                    ["Lifetime", "$532,000"],
                                    ["Savings %", "36.3%"],
                                ].map(([k, v]) => (
                                    <div
                                        key={k}
                                        className="rounded-lg border border-[#F1F2F4] bg-[#FCFCFD] p-3 text-center"
                                    >
                                        <p className="font-ptsans text-xs text-[#475467]">{k}</p>
                                        <p className="font-ptsans text-sm font-semibold text-[#900C3F]">{v}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Jurisdictions dropdown mock */}
                        <div className="rounded-xl border border-[#E7E7EA] bg-white p-4 shadow-sm">
                            <p className="font-ptsans font-medium text-[#0B1320]">Jurisdictions</p>
                            <div className="font-ptsans mt-3 rounded-lg border border-[#E7E7EA] bg-[#FAFBFC] p-3 text-sm text-[#344054]">
                                Country/Region ▾
                            </div>
                            <ul className="font-ptsans mt-2 space-y-2 text-sm text-[#344054]">
                                {["Germany", "EPO", "United Kingdom", "China", "USA"].map((c) => (
                                    <li key={c} className="rounded-md bg-white p-2 ring-1 ring-black/5">
                                        {c}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Monthly bars */}
                        <div className="rounded-xl border border-[#E7E7EA] bg-white p-4 shadow-sm">
                            <p className="font-ptsans font-medium text-[#0B1320]">Monthly Cost Estimates</p>

                            <svg viewBox="0 0 220 120" className="mt-3 w-full">
                                <line x1="20" y1="100" x2="210" y2="100" stroke="#E5E7EB" />
                                {[
                                    [30, 70],
                                    [60, 60],
                                    [90, 40],
                                    [120, 80],
                                    [150, 65],
                                    [180, 60],
                                ].map(([x, h], i) => (
                                    <g key={i}>
                                        <rect x={x - 10} y={100 - h} width="20" height={h} fill="#0B1320" opacity="0.85" />
                                        <rect x={x - 10} y={100 - (h - 12)} width="20" height="12" fill="#900C3F" />
                                    </g>
                                ))}
                            </svg>

                            <div className="font-ptsans mt-1 grid grid-cols-6 text-center text-[11px] text-[#8E99A8]">
                                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                                    <span key={m}>{m}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: copy list */}
                <div className="md:col-span-5">
                    <h2 className="font-playfair text-4xl leading-tight text-[#0B1320] md:text-5xl">
                        What you will get
                    </h2>

                    <ul className="mt-8 space-y-6">
                        {[
                            "Accurate renewal cost calculations based on your uploaded IP data and filing details",
                            "A clear overview of optimized annual and lifetime spend across your portfolio",
                            "Transparent breakdowns of all renewal-related costs for every jurisdiction",
                            "Official fees plus optimized non-official costs (service, agent, currency, and transaction) presented side-by-side",
                            "Savings insights showing how much you could save with KA Global IP (upload an invoice to benchmark)",
                        ].map((t) => (
                            <li key={t} className="flex items-start gap-3">
                                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#900C3F] to-[#0B1320]">
                                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                                </span>
                                <p className="font-ptsans text-[16px] leading-7 text-[#0B1320]">{t}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

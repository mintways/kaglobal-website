"use client";

import { useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
    CheckCircle2,
    Calculator,
    Globe2,
    Info,
    Mail,
    ShieldCheck,
    Clock,
    FileText,
    ChevronRight,
    HelpCircle,
    TrendingUp,
    ArrowRight,
} from "lucide-react";

/**
 * KA Global IP – Patent Renewal Fees by Country: China
 * ----------------------------------------------------
 * Path:
 * /app/solutions/renewal-fees-by-country/china/page.tsx
 *
 * Brand colors:
 *  - Primary: #7F2B38
 *  - Accent:  #4D1475
 *  - Section BG: #F0F0F0
 *
 * Notes:
 *  - Fee numbers below are placeholders in CNY. Replace with live data.
 *  - Keep the legal disclaimer until data is verified.
 */

// ---------- Utility: currency format ----------
const cny = (n: number) =>
    new Intl.NumberFormat("zh-CN", { style: "currency", currency: "CNY" }).format(n);

// ---------- Sample placeholder fee data ----------
const SAMPLE_FEES = Array.from({ length: 20 }, (_, i) => {
    const year = i + 1;
    // Placeholder logic only. Replace with real values from your backend.
    // China: annual renewals are common across the term; values purely illustrative.
    const official = year < 1 ? 0 : 70 + year * 15;
    const service = official > 0 ? 65 : 0;
    const lateSurcharge = official > 0 ? Math.round(official * 0.2) : 0;
    return { year, official, service, total: official + service, lateSurcharge };
});

// ---------- Components ----------
function Hero() {
    return (
        <section className="relative isolate">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(45deg,#7F2B38_0%,#4D1475_100%)] opacity-95" />
            <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 text-white">
                <div className="grid items-center gap-8 md:grid-cols-12">
                    <div className="md:col-span-7">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                            China — Patent Renewal Fees (2025 Guide)
                        </h1>
                        <p className="mt-4 text-base md:text-lg text-white/90">
                            Keep your Chinese patents in good standing with transparent fees, reminders, and global
                            coverage. This page outlines typical renewal schedules, cost components, and our managed
                            service options for China.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="#fees"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-[#4D1475] font-semibold shadow hover:-translate-y-0.5 transition"
                            >
                                <Calculator className="h-4 w-4" /> View Fees
                            </a>
                            <a
                                href="#quote"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-4 py-2 font-semibold hover:bg-white/10"
                            >
                                <Mail className="h-4 w-4" /> Get a Quote
                            </a>
                        </div>
                    </div>
                    <div className="md:col-span-5">
                        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                            <ul className="space-y-3 text-sm">
                                {/* <li className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" /> ISO 9001 & 27001 processes for secure renewals
                                </li> */}
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-300" /> Attorney-led review and docketing safeguards
                                </li>
                                <li className="flex items-start gap-3">
                                    <Globe2 className="mt-0.5 h-5 w-5 text-emerald-300" /> 100+ jurisdictions covered through KA Global IP network
                                </li>
                                <li className="flex items-start gap-3">
                                    <Clock className="mt-0.5 h-5 w-5 text-emerald-300" /> Smart reminders, grace-period tracking, audit trail
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function KeyFacts() {
    return (
        <section className="bg-[#F0F0F0] py-8 md:py-10">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    <FactCard label="Jurisdiction" value="China (CN)" icon={<Globe2 className="h-5 w-5" />} />
                    <FactCard label="Office" value="China National Intellectual Property Administration (CNIPA)" icon={<Info className="h-5 w-5" />} />
                    <FactCard label="Coverage" value="National patents; EP counterparts handled separately" icon={<FileText className="h-5 w-5" />} />
                    <FactCard label="Disclaimer" value="Figures below are indicative—verify before payment" icon={<HelpCircle className="h-5 w-5" />} />
                </div>
            </div>
        </section>
    );
}

function FactCard({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between text-gray-500">
                <span className="text-xs uppercase tracking-wider">{label}</span>
                {icon}
            </div>
            <div className="mt-2 text-lg font-semibold text-gray-900">{value}</div>
        </div>
    );
}

function FeeTable() {
    const [showZeros, setShowZeros] = useState(false);
    const rows = useMemo(() => SAMPLE_FEES.filter(r => (showZeros ? true : r.official > 0)), [showZeros]);

    return (
        <section id="fees" className="mx-auto max-w-7xl px-6 py-12">
            <header className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4D1475]">Indicative Renewal Fees</h2>
                    <p className="mt-1 text-sm text-gray-600">
                        All values are placeholders in CNY. Confirm current official fees, surcharges, and taxes before remittance.
                    </p>
                </div>
                <div className="flex items-center gap-3 text-sm">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" checked={showZeros} onChange={e => setShowZeros(e.target.checked)} />
                        Show years with no fee
                    </label>
                </div>
            </header>

            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#F0F0F0]">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Year</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Official Fee (CNY)</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">KA Service Fee</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Total</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Late Surcharge*</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        {rows.map(r => (
                            <tr key={r.year}>
                                <td className="px-4 py-3 font-medium text-gray-900">Year {r.year}</td>
                                <td className="px-4 py-3 text-gray-700">{r.official ? cny(r.official) : "—"}</td>
                                <td className="px-4 py-3 text-gray-700">{r.service ? cny(r.service) : "—"}</td>
                                <td className="px-4 py-3 font-semibold text-gray-900">{r.total ? cny(r.total) : "—"}</td>
                                <td className="px-4 py-3 text-gray-700">{r.lateSurcharge ? cny(r.lateSurcharge) : "—"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="mt-3 text-xs text-gray-600">
                * Our team will confirm applicable grace periods and surcharges with CNIPA before payment.
            </p>
        </section>
    );
}

function HowItWorks() {
    const steps = [
        {
            title: "Share details",
            text: "Provide CN application/grant number and owner details. We run a docketing check and verify due dates.",
        },
        {
            title: "Transparent quote",
            text: "You receive a consolidated quote with official fees, local agent fee, our service fee, taxes (if any), and bank/wire options.",
        },
        {
            title: "Attorney review",
            text: "A patent attorney reviews risk flags (priority, lapse history, portfolio strategy) before proceeding.",
        },
        {
            title: "Payment & filing",
            text: "Upon approval, we pay the renewal on time, upload receipts, and update the audit trail in your portal.",
        },
    ];
    return (
        <section className="bg-[#F0F0F0] py-12">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#4D1475]">How KA Global IP handles CN renewals</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {steps.map((s, i) => (
                        <div key={i} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center gap-2 text-[#7F2B38]">
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#7F2B38] text-white font-semibold">
                                    {i + 1}
                                </span>
                                <h3 className="font-semibold">{s.title}</h3>
                            </div>
                            <p className="mt-2 text-sm text-gray-700">{s.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AdvisoryStrip() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-8">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6 md:p-8 grid gap-6 md:grid-cols-12">
                <div className="md:col-span-9">
                    <h3 className="text-xl md:text-2xl font-bold text-[#7F2B38]">Strategic advisory, not just payments</h3>
                    <p className="mt-2 text-gray-700 text-sm md:text-base">
                        Renewals affect portfolio value. We map CN renewals to your global strategy—pruning low-value assets, extending core
                        coverage, and aligning with licensing and enforcement plans. Expect clear, commercial advice—not just a payment receipt.
                    </p>
                    <ul className="mt-3 grid gap-2 md:grid-cols-2 text-sm text-gray-800">
                        <li className="flex items-start gap-2">
                            <TrendingUp className="mt-0.5 h-4 w-4 text-[#4D1475]" /> Cost–value triage and coverage heatmaps
                        </li>
                        <li className="flex items-start gap-2">
                            <ShieldCheck className="mt-0.5 h-4 w-4 text-[#4D1475]" /> Compliance guardrails and lapse risk alerts
                        </li>
                        <li className="flex items-start gap-2">
                            <FileText className="mt-0.5 h-4 w-4 text-[#4D1475]" /> Audit-ready documentation and receipts
                        </li>
                        <li className="flex items-start gap-2">
                            <Clock className="mt-0.5 h-4 w-4 text-[#4D1475]" /> Grace-period and surcharge handling
                        </li>
                    </ul>
                </div>
                <div className="md:col-span-3 flex items-end md:justify-end">
                    <a
                        href="#quote"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#4D1475] px-4 py-2 text-white font-semibold shadow hover:bg-[#3d1060]"
                    >
                        Talk to an attorney <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}

function DeadlineNotes() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-10">
            <div className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4D1475]">Deadlines & practical notes (CN)</h2>
                    <div className="mt-4 space-y-3 text-sm text-gray-800">
                        <p>• Chinese patent renewals follow an annual schedule through the term, but is only due after the patent is issued or granted. We confirm the exact due date for each case.</p>
                        <p>• A grace period may be available with surcharges if a deadline is missed—timing and conditions vary by circumstance.</p>
                        <p>• Keep ownership and service address current to avoid missed notices. We handle recordals ahead of renewals.</p>
                        <p>• For portfolios, consider bundling CN renewals with APAC/US/EU for consolidated billing and cost control.</p>
                    </div>
                </div>
                <div className="md:col-span-4">
                    <div className="rounded-2xl border border-gray-200 bg-[#F0F0F0] p-5">
                        <h3 className="font-semibold text-gray-900">What we need from you</h3>
                        <ul className="mt-3 space-y-2 text-sm text-gray-800">
                            <li>• CN application or patent number</li>
                            <li>• Legal owner / customer number (if any)</li>
                            <li>• Desired instructions (maintain / lapse / evaluate)</li>
                            <li>• Invoicing and payment preferences</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CountryNav() {
    const countries = [
        { name: "India", slug: "india" },
        { name: "United States", slug: "united-states" },
        { name: "European Patent (EP)", slug: "european-patent" },
        { name: "Japan", slug: "japan" },
        { name: "Australia", slug: "australia" },
        { name: "Canada", slug: "canada" },
        { name: "United Kingdom", slug: "united-kingdom" },
        // current page is China, so we don't list China here
    ];
    return (
        <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold">Explore other countries</h3>
            <ul className="mt-3 space-y-1">
                {countries.map(c => (
                    <li key={c.slug}>
                        <Link
                            href={`/solutions/renewal-fees-by-country/${c.slug}`}
                            className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-[#F0F0F0]"
                        >
                            <span>{c.name}</span>
                            <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

function FAQ() {
    const faqs = [
        {
            q: "When do renewal fees start for Chinese patents?",
            a: "Renewals are due annually through the patent term, but is only due after the patent is issued or granted. We confirm your exact schedule with CNIPA.",
        },
        {
            q: "Is there a grace period if we miss a due date?",
            a: "Yes—typically with surcharges and conditions depending on timing and case details. We’ll advise immediately on options.",
        },
        {
            q: "Can you manage large portfolios with China included?",
            a: "Yes. We consolidate instructions, billing, and receipts across 100+ jurisdictions with attorney oversight and ISO-certified processes.",
        },
        {
            q: "Do you assist with recordals before renewal?",
            a: "Absolutely. We update ownership or address of service to reduce the risk of missed notices and compliance issues.",
        },
    ];
    return (
        <section className="bg-[#F0F0F0] py-12">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#4D1475]">Frequently asked questions</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {faqs.map((f, i) => (
                        <details key={i} className="rounded-2xl border border-gray-200 bg-white p-5">
                            <summary className="cursor-pointer list-none text-base font-semibold text-gray-900 flex items-center gap-2">
                                <HelpCircle className="h-5 w-5 text-[#7F2B38]" /> {f.q}
                            </summary>
                            <p className="mt-2 text-sm text-gray-700">{f.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTA() {
    return (
        <section id="quote" className="relative isolate">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#4D1475_0%,#7F2B38_100%)] opacity-95" />
            <div className="mx-auto max-w-7xl px-6 py-14 text-white">
                <div className="grid items-center gap-6 md:grid-cols-12">
                    <div className="md:col-span-8">
                        <h2 className="text-2xl md:text-3xl font-extrabold">Need a confirmed CN quote today?</h2>
                        <p className="mt-2 text-white/90">
                            Send the CN application/grant number and desired action. We’ll verify deadlines, confirm official fees, and reply with a final quote.
                        </p>
                    </div>
                    <div className="md:col-span-4 md:text-right">
                        <a
                            href="mailto:support@kaglobalip.com?subject=China%20Renewal%20Quote"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-[#4D1475] shadow hover:-translate-y-0.5 transition"
                        >
                            <Mail className="h-5 w-5" /> support@kaglobalip.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LegalDisclaimer() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-8 text-xs text-gray-600">
            <p>
                Disclaimer: This page is for general information only and does not constitute legal advice. Renewal schedules,
                fees and rules change. KA Global IP will verify all details with CNIPA before filing. Proceed only on the basis
                of our final written quote.
            </p>
        </section>
    );
}

function StickyHelpCard() {
    return (
        <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-gray-900">Need help?</h3>
            <p className="mt-2 text-sm text-gray-700">Share your CN patent number and we’ll confirm the actual due date and fees.</p>
            <a
                href="mailto:support@kaglobalip.com?subject=Help%20with%20CN%20Renewal"
                className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[#7F2B38] px-4 py-2 text-white font-semibold hover:bg-[#67202C]"
            >
                <Mail className="h-4 w-4" /> Email us
            </a>
        </div>
    );
}

export default function ChinaRenewalFeesPage() {
    return (
        <>
            <Head>
                <title>China Patent Renewal Fees (2025 Guide) | KA Global IP</title>
                <meta
                    name="description"
                    content="Indicative renewal fees, timelines and managed services for Chinese patents. Attorney-led, ISO-certified renewals across 100+ jurisdictions."
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            name: "China Patent Renewal Fees (2025 Guide)",
                            description: "Indicative renewal fees, deadlines and managed services for CN patents.",
                            publisher: { "@type": "Organization", name: "KA Global IP" },
                        }),
                    }}
                />
            </Head>

            <Hero />
            <KeyFacts />

            <main className="mx-auto max-w-7xl px-6 py-6 grid gap-6 md:grid-cols-12">
                <div className="md:col-span-8">
                    <FeeTable />
                    <HowItWorks />
                    <DeadlineNotes />
                </div>
                <div className="md:col-span-4 space-y-6">
                    <CountryNav />
                    <StickyHelpCard />
                </div>
            </main>

            <AdvisoryStrip />
            <FAQ />
            <CTA />
            <LegalDisclaimer />
        </>
    );
}

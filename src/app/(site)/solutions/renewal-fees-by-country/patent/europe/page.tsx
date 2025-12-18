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
 * KA Global IP – Patent Renewal Fees by Country: Europe (EPO)
 * -----------------------------------------------------------
 * Path:
 * /app/solutions/renewal-fees-by-country/european-patent/page.tsx
 *
 * Brand colors:
 *  - Primary: #7F2B38
 *  - Accent:  #4D1475
 *  - Section BG: #F0F0F0
 *
 * Notes:
 *  - Fee numbers below are placeholders in EUR. Replace with live data.
 *  - Pre-grant annuities (EP) are payable to EPO typically from Year 3.
 *  - Post-grant renewals shift to validated national offices.
 */

// ---------- Utility: currency format ----------
const eur = (n: number) =>
    new Intl.NumberFormat("en-GB", { style: "currency", currency: "EUR" }).format(n);

// ---------- Sample placeholder fee data (EPO – pending stage only) ----------
/**
 * EP (pending) renewal fees are typically due from year 3 until grant.
 * After grant, maintenance is due in each validated state (not at EPO).
 * Below is a simple illustrative schedule for years 3–20 (you'll only pay
 * until grant). Replace with your actual EPO schedule.
 */
const SAMPLE_FEES = Array.from({ length: 18 }, (_, i) => {
    const year = i + 3; // start at year 3
    const official = 500 + i * 80; // placeholder gradient
    const service = 65;
    const lateSurcharge = Math.round(official * 0.25); // illustrative
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
                            Europe (EPO) — Patent Renewal Fees (2025 Guide)
                        </h1>
                        <p className="mt-4 text-base md:text-lg text-white/90">
                            Understand annuities during the European patent (EP) pending stage and how renewals
                            shift to national offices after grant. This page outlines typical EP renewal timing,
                            cost components, and KA Global IP’s managed workflow.
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
                    <FactCard label="Jurisdiction" value="Europe (EPO) — EP (pending)" icon={<Globe2 className="h-5 w-5" />} />
                    <FactCard label="Office" value="European Patent Office (EPO)" icon={<Info className="h-5 w-5" />} />
                    <FactCard label="Coverage" value="EP pending stage; post-grant renewals are national" icon={<FileText className="h-5 w-5" />} />
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
    const [showAll, setShowAll] = useState(false);
    const rows = useMemo(() => (showAll ? SAMPLE_FEES : SAMPLE_FEES.slice(0, 6)), [showAll]);

    return (
        <section id="fees" className="mx-auto max-w-7xl px-6 py-12">
            <header className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4D1475]">Indicative EP Renewal Fees (Pending)</h2>
                    <p className="mt-1 text-sm text-gray-600">
                        EP annuities are typically due from <strong>Year 3</strong> until grant. After grant, renewals are payable in each
                        validated state. Values below are placeholders in EUR—confirm current EPO fees before remittance.
                    </p>
                </div>
                <div className="flex items-center gap-3 text-sm">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" checked={showAll} onChange={e => setShowAll(e.target.checked)} />
                        Show more years
                    </label>
                </div>
            </header>

            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#F0F0F0]">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">EP Year</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Official Fee (EUR)</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">KA Service Fee</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Total</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Late Surcharge*</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        {rows.map(r => (
                            <tr key={r.year}>
                                <td className="px-4 py-3 font-medium text-gray-900">Year {r.year}</td>
                                <td className="px-4 py-3 text-gray-700">{eur(r.official)}</td>
                                <td className="px-4 py-3 text-gray-700">{eur(r.service)}</td>
                                <td className="px-4 py-3 font-semibold text-gray-900">{eur(r.total)}</td>
                                <td className="px-4 py-3 text-gray-700">{eur(r.lateSurcharge)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="mt-3 text-xs text-gray-600">
                * We confirm applicability with the EPO and case status (e.g., pending vs. post-grant).
            </p>

            <div className="mt-6 text-sm">
                After grant, use our per-country pages for national renewal fees (e.g., <Link href="/solutions/renewal-fees-by-country/germany" className="underline text-[#7F2B38]">Germany</Link>,{" "}
                <Link href="/solutions/renewal-fees-by-country/france" className="underline text-[#7F2B38]">France</Link>,{" "}
                <Link href="/solutions/renewal-fees-by-country/netherlands" className="underline text-[#7F2B38]">Netherlands</Link>, etc.).
            </div>
        </section>
    );
}

function HowItWorks() {
    const steps = [
        {
            title: "Share details",
            text: "Provide EP application number and owner details. We run a docketing check and verify due dates (year 3 onward).",
        },
        {
            title: "Transparent quote",
            text: "Receive a consolidated quote with official EPO renewal, our service fee, taxes (if any), and bank/wire options.",
        },
        {
            title: "Attorney review",
            text: "We review risk flags (priority, lapse history, grant proximity) to prevent over/under-payment as status evolves.",
        },
        {
            title: "Payment & filing",
            text: "Upon approval, we pay the EP annuity on time, upload receipts, and update the audit trail. Post-grant, we switch to national offices.",
        },
    ];
    return (
        <section className="bg-[#F0F0F0] py-12">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#4D1475]">How KA Global IP handles EP renewals</h2>
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
                    <h3 className="text-xl md:text-2xl font-bold text-[#7F2B38]">Strategic advisory across EP and national phases</h3>
                    <p className="mt-2 text-gray-700 text-sm md:text-base">
                        We help you plan EP renewals during pendency and optimize post-grant national coverage. Expect clear, commercial advice—not just a payment receipt.
                    </p>
                    <ul className="mt-3 grid gap-2 md:grid-cols-2 text-sm text-gray-800">
                        <li className="flex items-start gap-2">
                            <TrendingUp className="mt-0.5 h-4 w-4 text-[#4D1475]" /> Validation mix & coverage heatmaps
                        </li>
                        <li className="flex items-start gap-2">
                            <ShieldCheck className="mt-0.5 h-4 w-4 text-[#4D1475]" /> Compliance guardrails and lapse risk alerts
                        </li>
                        <li className="flex items-start gap-2">
                            <FileText className="mt-0.5 h-4 w-4 text-[#4D1475]" /> Audit-ready documentation and receipts
                        </li>
                        <li className="flex items-start gap-2">
                            <Clock className="mt-0.5 h-4 w-4 text-[#4D1475]" /> Grace periods & surcharge handling
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
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4D1475]">Deadlines & practical notes (EP)</h2>
                    <div className="mt-4 space-y-3 text-sm text-gray-800">
                        <p>• EP annuities are typically due from <strong>Year 3</strong> during pendency; amounts rise annually.</p>
                        <p>• After grant, renewals are paid at <strong>each validated national office</strong>—amounts, timing, and grace rules vary by country.</p>
                        <p>• If grant is imminent, we reassess whether to pay another EP annuity or allocate budget to national phase renewals.</p>
                        <p>• Keep applicant/owner details current across EPO and validated states. We handle recordals alongside renewals.</p>
                        <p>• Portfolio tip: align the validation set with revenue and enforcement priorities; avoid over-validation.</p>
                    </div>
                </div>
                <div className="md:col-span-4">
                    <div className="rounded-2xl border border-gray-200 bg-[#F0F0F0] p-5">
                        <h3 className="font-semibold text-gray-900">What we need from you</h3>
                        <ul className="mt-3 space-y-2 text-sm text-gray-800">
                            <li>• EP application number (and any divisionals)</li>
                            <li>• Legal owner / customer number (if any)</li>
                            <li>• Desired instructions (maintain / postpone / evaluate grant proximity)</li>
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
        { name: "Germany", slug: "germany" },
        { name: "France", slug: "france" },
        { name: "Netherlands", slug: "netherlands" },
        { name: "United Kingdom", slug: "united-kingdom" },
        { name: "Italy", slug: "italy" },
        { name: "Spain", slug: "spain" },
        { name: "Sweden", slug: "sweden" },
        // current page is Europe (EPO), so not listed here
    ];
    return (
        <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold">Explore national pages (post-grant)</h3>
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
            q: "When do EP renewal fees start?",
            a: "Typically from Year 3 during the pending stage.",
        },
        {
            q: "What happens after grant?",
            a: "Renewals shift to each validated national office. Amounts and rules vary—see our country pages for details.",
        },
        {
            q: "Can you help choose which countries to validate?",
            a: "Yes. We model cost vs. value and recommend a validation set aligned with your markets and enforcement plans.",
        },
        {
            q: "Can you convert EP annuity plans into national calendars?",
            a: "Absolutely. We generate a consolidated post-grant schedule and invoice by currency with full receipts.",
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
                        <h2 className="text-2xl md:text-3xl font-extrabold">Need a confirmed EP quote today?</h2>
                        <p className="mt-2 text-white/90">
                            Send the EP application number and desired action. We’ll verify deadlines, confirm official fees, and reply with a final quote.
                        </p>
                    </div>
                    <div className="md:col-span-4 md:text-right">
                        <a
                            href="mailto:support@kaglobalip.com?subject=EPO%20Renewal%20Quote"
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
                fees and rules change. KA Global IP will verify all details with the European Patent Office (EPO) and relevant
                national offices before filing. Proceed only on the basis of our final written quote.
            </p>
        </section>
    );
}

function StickyHelpCard() {
    return (
        <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-gray-900">Need help?</h3>
            <p className="mt-2 text-sm text-gray-700">
                Share your EP application number and we’ll confirm the current annuity year, due date, and amount.
            </p>
            <a
                href="mailto:support@kaglobalip.com?subject=Help%20with%20EP%20Renewal"
                className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[#7F2B38] px-4 py-2 text-white font-semibold hover:bg-[#67202C]"
            >
                <Mail className="h-4 w-4" /> Email us
            </a>
        </div>
    );
}

export default function EPORenewalFeesPage() {
    return (
        <>
            <Head>
                <title>Europe (EPO) Patent Renewal Fees (2025 Guide) | KA Global IP</title>
                <meta
                    name="description"
                    content="Indicative EP annuity timing during pendency and post-grant national renewals. Attorney-led, ISO-certified renewals across 100+ jurisdictions."
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            name: "Europe (EPO) Patent Renewal Fees (2025 Guide)",
                            description:
                                "Understand EPO annuities during pendency and national renewals post-grant. Consolidated quotes and attorney oversight from KA Global IP.",
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

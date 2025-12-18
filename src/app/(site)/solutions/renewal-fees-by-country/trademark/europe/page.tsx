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
    Tag,
} from "lucide-react";

/**
 * KA Global IP – Trademark Renewal Fees by Country: European Union (EUIPO)
 * -----------------------------------------------------------------------
 * Path:
 * /app/(site)/solutions/trademark-renewal-fees-by-country/european-union/page.tsx
 *
 * Notes:
 *  - EUTM renewals every 10 years, by class.
 *  - Fee numbers below are placeholders in EUR — replace with live EUIPO data.
 */

// ---------- Utility: currency format ----------
const eur = (n: number) =>
    new Intl.NumberFormat("en-GB", { style: "currency", currency: "EUR" }).format(n);

// ---------- Placeholder renewal matrix (per class) ----------
const PLACEHOLDER_FEES = [
    {
        term: "10-year Renewal (on-time)",
        officialBase: 850, // placeholder
        officialPerExtraClass: 50, // placeholder
        kaServicePerClass: 95,
        lateSurchargePerClass: 0,
        window: "6 months before expiry until expiry date",
    },
    {
        term: "Late Renewal (within grace)",
        officialBase: 850,
        officialPerExtraClass: 50,
        kaServicePerClass: 95,
        lateSurchargePerClass: 150,
        window: "6 months after expiry (grace period)",
    },
];

function calcTotal(classes: number, row: (typeof PLACEHOLDER_FEES)[number]) {
    const official = row.officialBase + (classes - 1) * row.officialPerExtraClass;
    const service = classes * row.kaServicePerClass;
    const late = classes * row.lateSurchargePerClass;
    return { official, service, late, total: official + service + late };
}

// ---------- Components ----------
function Hero() {
    return (
        <section className="relative isolate">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(45deg,#7F2B38_0%,#4D1475_100%)] opacity-95" />
            <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 text-white">
                <div className="grid items-center gap-8 md:grid-cols-12">
                    <div className="md:col-span-7">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                            European Union — Trademark Renewal Fees (2025 Guide)
                        </h1>
                        <p className="mt-4 text-base md:text-lg text-white/90">
                            Renew your European Union Trade Marks (EUTM) across all 27 EU member states in one step. Transparent per-class pricing, reminders, and attorney-led oversight.
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
                                {/* <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" /> ISO 9001 & 27001 processes for secure renewals</li> */}
                                <li className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-300" /> Attorney-led review and docketing safeguards</li>
                                <li className="flex items-start gap-3"><Globe2 className="mt-0.5 h-5 w-5 text-emerald-300" /> Coverage across all EU member states</li>
                                <li className="flex items-start gap-3"><Clock className="mt-0.5 h-5 w-5 text-emerald-300" /> Smart reminders, grace-period tracking, audit trail</li>
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
                    <FactCard label="Jurisdiction" value="European Union (EUIPO)" icon={<Globe2 className="h-5 w-5" />} />
                    <FactCard label="Office" value="European Union Intellectual Property Office (EUIPO)" icon={<Info className="h-5 w-5" />} />
                    <FactCard label="Coverage" value="27 EU member states via EUTM" icon={<Tag className="h-5 w-5" />} />
                    <FactCard label="Term" value="10-year periods, renewable indefinitely" icon={<FileText className="h-5 w-5" />} />
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
    const [classes, setClasses] = useState<number>(1);

    const rows = useMemo(() => {
        return PLACEHOLDER_FEES.map((row) => {
            const totals = calcTotal(classes, row);
            return { ...row, ...totals };
        });
    }, [classes]);

    return (
        <section id="fees" className="mx-auto max-w-7xl px-6 py-12">
            <header className="mb-6 flex items-center justify-between flex-wrap gap-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4D1475]">Indicative Renewal Fees (per class)</h2>
                    <p className="mt-1 text-sm text-gray-600">
                        Values below are <span className="font-semibold">placeholders</span> in EUR. EUIPO trade mark renewals are by class.
                    </p>
                </div>
                <div className="flex items-center gap-3 text-sm">
                    <label className="flex items-center gap-2">
                        Classes:
                        <input
                            type="number"
                            min={1}
                            max={20}
                            value={classes}
                            onChange={(e) => setClasses(Math.max(1, Math.min(20, Number(e.target.value))))}
                            className="w-16 rounded-md border border-gray-300 px-2 py-1"
                        />
                    </label>
                </div>
            </header>

            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#F0F0F0]">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Renewal Type</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Official (EUR)</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">KA Service (EUR)</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Late Surcharge (EUR)</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Total</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Window</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        {rows.map((r, i) => (
                            <tr key={i}>
                                <td className="px-4 py-3 font-medium text-gray-900">{r.term}</td>
                                <td className="px-4 py-3 text-gray-700">
                                    {eur(r.official)}{" "}
                                    <span className="text-xs text-gray-500">(for {classes} class{classes > 1 ? "es" : ""})</span>
                                </td>
                                <td className="px-4 py-3 text-gray-700">{eur(r.service)}</td>
                                <td className="px-4 py-3 text-gray-700">{r.late ? eur(r.late) : "—"}</td>
                                <td className="px-4 py-3 font-semibold text-gray-900">{eur(r.total)}</td>
                                <td className="px-4 py-3 text-gray-700">{r.window}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="mt-3 text-xs text-gray-600">
                * Grace and surcharge rules apply for late payment. We confirm applicability with EUIPO for your specific mark and classes.
            </p>
        </section>
    );
}

function HowItWorks() {
    const steps = [
        { title: "Share details", text: "Provide EUTM number, owner details, and classes. We verify expiry and grace periods." },
        { title: "Transparent quote", text: "We send a consolidated quote per class with official EUIPO fees, KA service fee, and VAT (if applicable)." },
        { title: "Attorney review", text: "A trade mark attorney reviews non-use risks, class coverage, and strategic considerations." },
        { title: "Payment & filing", text: "On approval, we renew at EUIPO, upload receipts, and update your portfolio portal." },
    ];
    return (
        <section className="bg-[#F0F0F0] py-12">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#4D1475]">How KA Global IP handles EU TM renewals</h2>
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

/* --------- NEW: DeadlineNotes --------- */
function DeadlineNotes() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-10">
            <div className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4D1475]">Deadlines & practical notes (EUTM)</h2>
                    <div className="mt-4 space-y-3 text-sm text-gray-800">
                        <p>• EUTM renewals are due every <strong>10 years</strong> from filing. Each class renews together under one EUTM.</p>
                        <p>• Renewal window opens <strong>6 months before expiry</strong>. A <strong>6-month grace period</strong> post-expiry is typically available with surcharges.</p>
                        <p>• Owner details and address for service should be current to avoid misrouted notices—recordals can be handled before renewal.</p>
                        <p>• Consider non-use exposure if the mark has not been genuinely used in the EU for 5+ years.</p>
                        <p>• Portfolio tip: coordinate EUTM renewal with UK and key national marks for unified reminders and consolidated billing.</p>
                    </div>
                </div>
                <div className="md:col-span-4">
                    <div className="rounded-2xl border border-gray-200 bg-[#F0F0F0] p-5">
                        <h3 className="font-semibold text-gray-900">What we need from you</h3>
                        <ul className="mt-3 space-y-2 text-sm text-gray-800">
                            <li>• EUTM number and class list</li>
                            <li>• Owner details & address for service</li>
                            <li>• Instructions (renew all / trim classes / evaluate)</li>
                            <li>• Invoicing preferences (entity, VAT, currency)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* --------- NEW: AdvisoryStrip --------- */
function AdvisoryStrip() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-8">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6 md:p-8 grid gap-6 md:grid-cols-12">
                <div className="md:col-span-9">
                    <h3 className="text-xl md:text-2xl font-bold text-[#7F2B38]">More than a payment—portfolio advice</h3>
                    <p className="mt-2 text-gray-700 text-sm md:text-base">
                        We align EUTM renewals with your brand roadmap—trimming unused classes, planning expansions, and mitigating non-use risk across the EU.
                    </p>
                    <ul className="mt-3 grid gap-2 md:grid-cols-2 text-sm text-gray-800">
                        <li className="flex items-start gap-2"><TrendingUp className="mt-0.5 h-4 w-4 text-[#4D1475]" /> Class mix & budget modeling</li>
                        <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 text-[#4D1475]" /> Compliance guardrails & grace tracking</li>
                        <li className="flex items-start gap-2"><FileText className="mt-0.5 h-4 w-4 text-[#4D1475]" /> Audit-ready receipts & invoices</li>
                        <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-[#4D1475]" /> Calendar sync & reminders</li>
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

/* --------- NEW: CountryNav --------- */
function CountryNav() {
    const countries = [
        { name: "United Kingdom (UKIPO)", slug: "united-kingdom" },
        { name: "Germany", slug: "germany" },
        { name: "France", slug: "france" },
        { name: "Spain", slug: "spain" },
        { name: "Italy", slug: "italy" },
        { name: "Netherlands", slug: "netherlands" },
        { name: "Denmark", slug: "denmark" },
        { name: "Australia", slug: "australia" },
    ];
    return (
        <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold">Explore other trademark pages</h3>
            <ul className="mt-3 space-y-1">
                {countries.map((c) => (
                    <li key={c.slug}>
                        <Link
                            href={`/solutions/trademark-renewal-fees-by-country/${c.slug}`}
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

/* --------- NEW: FAQ --------- */
function FAQ() {
    const faqs = [
        { q: "How often do EUTMs renew?", a: "Every 10 years from filing. All classes under the EUTM renew together." },
        { q: "Is there a grace period after expiry?", a: "Yes—typically 6 months with surcharges. We confirm the exact window for your case." },
        { q: "Can I trim classes at renewal?", a: "Yes. You can renew selected classes and allow others to lapse to reduce costs." },
        { q: "Do you assist with owner/address updates before renewal?", a: "Absolutely—recordals help avoid missed notices and reduce risk." },
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

/* --------- NEW: StickyHelpCard --------- */
function StickyHelpCard() {
    return (
        <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-gray-900">Need help?</h3>
            <p className="mt-2 text-sm text-gray-700">
                Share your EUTM number and classes; we’ll confirm the renewal window, exact fees, and any surcharges.
            </p>
            <a
                href="mailto:support@kaglobalip.com?subject=Help%20with%20EUIPO%20TM%20Renewal"
                className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[#7F2B38] px-4 py-2 text-white font-semibold hover:bg-[#67202C]"
            >
                <Mail className="h-4 w-4" /> Email us
            </a>
        </div>
    );
}

function CTA() {
    return (
        <section id="quote" className="relative isolate">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#4D1475_0%,#7F2B38_100%)] opacity-95" />
            <div className="mx-auto max-w-7xl px-6 py-14 text-white">
                <div className="grid items-center gap-6 md:grid-cols-12">
                    <div className="md:col-span-8">
                        <h2 className="text-2xl md:text-3xl font-extrabold">Need an EUTM renewal quote today?</h2>
                        <p className="mt-2 text-white/90">
                            Send the EUTM number, classes, and desired action. We’ll verify the deadline, confirm fees, and reply with a final quote.
                        </p>
                    </div>
                    <div className="md:col-span-4 md:text-right">
                        <a
                            href="mailto:support@kaglobalip.com?subject=EUTM%20Renewal%20Quote"
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
                fees, and rules change. KA Global IP will verify all details with the EUIPO before filing. Proceed only on
                the basis of our final written quote.
            </p>
        </section>
    );
}

export default function EuropeTrademarkRenewalFeesPage() {
    return (
        <>
            <Head>
                <title>EU Trademark Renewal Fees (2025 Guide) | KA Global IP</title>
                <meta
                    name="description"
                    content="Indicative renewal fees, timing, and managed services for European Union Trade Marks (EUTM). Attorney-led, ISO-certified renewals across 100+ jurisdictions."
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

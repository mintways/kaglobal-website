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
 * KA Global IP – Trademark Renewal Fees by Country: Canada
 * --------------------------------------------------------
 * Path:
 * /app/(site)/solutions/trademark-renewal-fees-by-country/canada/page.tsx
 *
 * Brand colors:
 *  - Primary: #7F2B38
 *  - Accent:  #4D1475
 *  - Section BG: #F0F0F0
 *
 * Notes:
 *  - Trade mark renewals in Canada are every 10 years, per class.
 *  - Fee figures below are placeholders in CAD — replace with current CIPO schedule.
 *  - Keep the disclaimer until verified.
 */

// ---------- Utility: currency format ----------
const cad = (n: number) =>
    new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(n);

// ---------- Placeholder fee data ----------
const PLACEHOLDER_FEES = [
    {
        term: "10-year Renewal (on-time)",
        officialPerClass: 400, // placeholder official fee
        kaServicePerClass: 95, // placeholder service fee
        lateSurchargePerClass: 0,
        window: "6 months before expiry until expiry date",
    },
    {
        term: "Late Renewal (grace period)",
        officialPerClass: 400,
        kaServicePerClass: 95,
        lateSurchargePerClass: 100, // placeholder late fee
        window: "Up to 6 months after expiry",
    },
];

function calcTotal(classes: number, row: (typeof PLACEHOLDER_FEES)[number]) {
    const official = classes * row.officialPerClass;
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
                            Canada — Trademark Renewal Fees (2025 Guide)
                        </h1>
                        <p className="mt-4 text-base md:text-lg text-white/90">
                            Renew your Canadian trade marks on time with clear, per-class fees and full
                            attorney oversight. This page covers renewal timing, cost components, and KA
                            Global IP’s managed service for Canada.
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
                                    <CheckCircle2 className="h-5 w-5 text-emerald-300" /> ISO 9001 & 27001 secure renewals
                                </li> */}
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="h-5 w-5 text-emerald-300" /> Attorney-led review
                                </li>
                                <li className="flex items-start gap-3">
                                    <Globe2 className="h-5 w-5 text-emerald-300" /> 100+ jurisdictions managed
                                </li>
                                <li className="flex items-start gap-3">
                                    <Clock className="h-5 w-5 text-emerald-300" /> Grace tracking & reminders
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
                    <FactCard label="Jurisdiction" value="Canada (CA)" icon={<Globe2 className="h-5 w-5" />} />
                    <FactCard label="Office" value="Canadian Intellectual Property Office (CIPO)" icon={<Info className="h-5 w-5" />} />
                    <FactCard label="Coverage" value="Trade marks (Nice classes 1–45)" icon={<Tag className="h-5 w-5" />} />
                    <FactCard label="Term" value="10-year terms, renewable indefinitely" icon={<FileText className="h-5 w-5" />} />
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
    const [classes, setClasses] = useState(1);

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
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4D1475]">Indicative Renewal Fees</h2>
                    <p className="mt-1 text-sm text-gray-600">
                        Values below are placeholders in CAD. CIPO renewals are calculated per class.
                        Confirm current official fees, GST, and grace surcharges before filing.
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
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Renewal Type</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Official Fee (CAD)</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">KA Service Fee</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Late Surcharge</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Total</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Window</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        {rows.map((r, i) => (
                            <tr key={i}>
                                <td className="px-4 py-3 font-medium text-gray-900">{r.term}</td>
                                <td className="px-4 py-3 text-gray-700">
                                    {cad(r.official)}{" "}
                                    <span className="text-xs text-gray-500">(per class)</span>
                                </td>
                                <td className="px-4 py-3">{cad(r.service)}</td>
                                <td className="px-4 py-3">{r.late ? cad(r.late) : "—"}</td>
                                <td className="px-4 py-3 font-semibold">{cad(r.total)}</td>
                                <td className="px-4 py-3 text-gray-700">{r.window}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function HowItWorks() {
    const steps = [
        { title: "Share details", text: "Provide CA TM number(s), classes, and owner details. We verify expiry and grace status with CIPO." },
        { title: "Transparent quote", text: "You get a per-class consolidated quote with official fees, KA service fee, GST, and payment options." },
        { title: "Attorney review", text: "A trade mark attorney checks for non-use risk and coverage gaps before renewal spend." },
        { title: "Payment & filing", text: "On approval, we renew with CIPO, upload receipts, and update your portal." },
    ];
    return (
        <section className="bg-[#F0F0F0] py-12">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#4D1475]">How KA Global IP handles CA TM renewals</h2>
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

function DeadlineNotes() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-10">
            <div className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4D1475]">Deadlines & practical notes (CA TM)</h2>
                    <div className="mt-4 space-y-3 text-sm text-gray-800">
                        <p>• Trade marks in Canada renew every <strong>10 years</strong> from the registration date.</p>
                        <p>• Renewals are per class. Additional classes mean additional fees.</p>
                        <p>• A grace period of <strong>6 months</strong> is available after expiry, with surcharges.</p>
                        <p>• Keep owner details and address updated at CIPO to avoid missed notices.</p>
                        <p>• Portfolio tip: coordinate renewals with US & EU marks for streamlined budgets.</p>
                    </div>
                </div>
                <div className="md:col-span-4">
                    <div className="rounded-2xl border border-gray-200 bg-[#F0F0F0] p-5">
                        <h3 className="font-semibold text-gray-900">What we need from you</h3>
                        <ul className="mt-3 space-y-2 text-sm text-gray-800">
                            <li>• CA TM number(s) and classes</li>
                            <li>• Owner details & address</li>
                            <li>• Instructions (renew all / select classes / evaluate)</li>
                            <li>• Invoicing preferences (entity, GST, CAD)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ---------------- FAQ ----------------
function FAQ() {
    const faqs = [
        { q: "How often do Canadian trade marks renew?", a: "Every 10 years from registration date." },
        { q: "Is there a grace period after expiry?", a: "Yes, 6 months with surcharges." },
        { q: "Can I renew selected classes only?", a: "Yes, each class renews separately." },
        { q: "Do you assist with recordals?", a: "Yes, we update owner/address before renewal." },
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

// ---------------- Country Nav ----------------
function CountryNav() {
    const countries = [
        { name: "United States", slug: "united-states" },
        { name: "Australia", slug: "australia" },
        { name: "United Kingdom", slug: "united-kingdom" },
        { name: "European Union (EUIPO)", slug: "european-union" },
        { name: "India", slug: "india" },
        { name: "China", slug: "china" },
    ];
    return (
        <aside className="p-5 border rounded-2xl bg-white shadow-sm">
            <h3 className="font-semibold mb-2">Explore other trademark pages</h3>
            <ul className="space-y-1">
                {countries.map(c => (
                    <li key={c.slug}>
                        <Link href={`/solutions/trademark-renewal-fees-by-country/${c.slug}`} className="flex justify-between px-3 py-2 rounded hover:bg-[#F0F0F0]">
                            {c.name} <ChevronRight className="h-4 w-4 text-gray-400" />
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

function CTA() {
    return (
        <section id="quote" className="relative isolate">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#4D1475_0%,#7F2B38_100%)] opacity-95" />
            <div className="mx-auto max-w-7xl px-6 py-14 text-white">
                <div className="grid items-center gap-6 md:grid-cols-12">
                    <div className="md:col-span-8">
                        <h2 className="text-2xl md:text-3xl font-extrabold">Need a Canadian TM renewal quote?</h2>
                        <p className="mt-2 text-white/90">
                            Send the CA TM number(s), classes, and desired action. We’ll verify deadlines, confirm fees, and reply with a quote.
                        </p>
                    </div>
                    <div className="md:col-span-4 md:text-right">
                        <a
                            href="mailto:support@kaglobalip.com?subject=Canada%20Trademark%20Renewal%20Quote"
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
                fees, and rules change. KA Global IP will verify all details with the Canadian Intellectual Property Office (CIPO) before filing.
            </p>
        </section>
    );
}

// ---------------- Sticky Help ----------------
function StickyHelpCard() {
    return (
        <div className="sticky top-6 p-5 border rounded-2xl bg-white shadow-sm">
            <h3 className="font-semibold">Need help?</h3>
            <p className="mt-2 text-sm">Send your CA TM number(s) and we’ll confirm renewal dates and fees.</p>
            <a href="mailto:support@kaglobalip.com?subject=Help%20with%20CA%20TM%20Renewal" className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-[#7F2B38] text-white rounded-xl">
                <Mail className="h-4 w-4" /> Email us
            </a>
        </div>
    );
}

export default function CanadaTrademarkRenewalFeesPage() {
    return (
        <>
            <Head>
                <title>Canada Trademark Renewal Fees (2025 Guide) | KA Global IP</title>
                <meta
                    name="description"
                    content="Indicative trademark renewal fees, timing, and managed services for Canada. Attorney-led, ISO-certified renewals across 100+ jurisdictions."
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
            <FAQ />
            <CTA />
            <LegalDisclaimer />
        </>
    );
}

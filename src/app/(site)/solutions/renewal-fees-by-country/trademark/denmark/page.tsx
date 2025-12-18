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
 * KA Global IP – Trademark Renewal Fees by Country: Denmark
 * ---------------------------------------------------------
 * Path:
 * /app/(site)/solutions/trademark-renewal-fees-by-country/denmark/page.tsx
 *
 * Brand colors:
 *  - Primary: #7F2B38
 *  - Accent:  #4D1475
 *  - Section BG: #F0F0F0
 *
 * Notes:
 *  - Denmark trade mark renewals are every 10 years, by class.
 *  - Fee figures below are placeholders in DKK — replace with live data.
 *  - Keep the legal disclaimer until data is verified.
 */

// ---------- Utility: currency format ----------
const dkk = (n: number) =>
    new Intl.NumberFormat("da-DK", { style: "currency", currency: "DKK" }).format(n);

// ---------- Placeholder renewal matrix (per class) ----------
/**
 * DK trade mark renewals are by class: base fee + per extra class (illustrative).
 * "Window" shows typical timing for UX; confirm dates case-by-case.
 */
const PLACEHOLDER_FEES = [
    {
        term: "10-year Renewal (on-time)",
        officialBase: 1700,            // placeholder
        officialPerExtraClass: 1700,   // placeholder
        kaServicePerClass: 95,         // placeholder
        lateSurchargePerClass: 0,
        window: "Renew within 12 months before expiry",
    },
    {
        term: "Late Renewal (within grace)",
        officialBase: 1700,            // placeholder
        officialPerExtraClass: 1700,   // placeholder
        kaServicePerClass: 95,         // placeholder
        lateSurchargePerClass: 300,    // placeholder (per class)
        window: "Grace period after expiry (time-limited)",
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
                            Denmark — Trademark Renewal Fees (2025 Guide)
                        </h1>
                        <p className="mt-4 text-base md:text-lg text-white/90">
                            Renew Danish trade marks on time—transparent per-class fees, proactive reminders, and
                            attorney-led QA. This page outlines renewal timing, cost components, and our managed
                            service options in Denmark.
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
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                                    ISO 9001 & 27001 processes for secure renewals
                                </li> */}
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-300" />
                                    Attorney-led review and docketing safeguards
                                </li>
                                <li className="flex items-start gap-3">
                                    <Globe2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                                    100+ jurisdictions covered through KA Global IP network
                                </li>
                                <li className="flex items-start gap-3">
                                    <Clock className="mt-0.5 h-5 w-5 text-emerald-300" />
                                    Smart reminders, grace-period tracking, audit trail
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
                    <FactCard label="Jurisdiction" value="Denmark (DK)" icon={<Globe2 className="h-5 w-5" />} />
                    <FactCard label="Office" value="Danish Patent and Trademark Office (DKPTO)" icon={<Info className="h-5 w-5" />} />
                    <FactCard label="Coverage" value="Trade marks (Nice classes 1–45)" icon={<Tag className="h-5 w-5" />} />
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
                        Values below are <span className="font-semibold">placeholders</span> in DKK. DK trade mark renewals are by mark.
                        Confirm current official fees, VAT, and surcharges before remittance.
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
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                Renewal Type
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                Official (DKK)
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                KA Service (DKK)
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                Late Surcharge (DKK)
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Total</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Window</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        {rows.map((r, i) => (
                            <tr key={i}>
                                <td className="px-4 py-3 font-medium text-gray-900">{r.term}</td>
                                <td className="px-4 py-3 text-gray-700">
                                    {dkk(r.official)}{" "}
                                    <span className="text-xs text-gray-500">(per class)</span>
                                </td>

                                <td className="px-4 py-3 text-gray-700">{dkk(r.service)}</td>
                                <td className="px-4 py-3 text-gray-700">{r.late ? dkk(r.late) : "—"}</td>
                                <td className="px-4 py-3 font-semibold text-gray-900">{dkk(r.total)}</td>
                                <td className="px-4 py-3 text-gray-700">{r.window}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="mt-3 text-xs text-gray-600">
                * Our team confirms grace applicability and any with DKPTO before payment.
            </p>
        </section>
    );
}

function HowItWorks() {
    const steps = [
        {
            title: "Share details",
            text: "Provide DK TM number, owner details, and classes. We verify expiry, grace window, and any limitations.",
        },
        {
            title: "Transparent quote",
            text: "You get a consolidated quote per class with official fees, KA service fee, VAT (if applicable), and payment options.",
        },
        {
            title: "Attorney review",
            text: "A trade mark attorney checks for non-use risks, specification gaps, and potential coverage updates.",
        },
        {
            title: "Payment & filing",
            text: "On approval, we renew with DKPTO, upload receipts, and update your portal audit trail.",
        },
    ];
    return (
        <section className="bg-[#F0F0F0] py-12">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#4D1475]">How KA Global IP handles DK TM renewals</h2>
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
                    <h3 className="text-xl md:text-2xl font-bold text-[#7F2B38]">More than a payment—portfolio advice</h3>
                    <p className="mt-2 text-gray-700 text-sm md:text-base">
                        We align renewals with brand plans: pruning dormant classes, planning extensions, and tracking non-use exposure.
                        Expect commercial guidance, not just receipts.
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

function DeadlineNotes() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-10">
            <div className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4D1475]">Deadlines & practical notes (DK TM)</h2>
                    <div className="mt-4 space-y-3 text-sm text-gray-800">
                        <p>• DK trade marks renew every <strong>10 years</strong> from registration.</p>
                        <p>• Renewal window opens before expiry; a <strong>grace period</strong> may be available with surcharges if you miss the date.</p>
                        <p>• Maintain accurate owner details and address for service to avoid missed notices; we handle recordals as needed.</p>
                        <p>• Consider non-use exposure before investing in renewal—our attorneys can assess risk and evidence.</p>
                        <p>• Portfolio tip: coordinate DK renewals with EUIPO/NO/SE for consolidated billing and unified reminders.</p>
                    </div>
                </div>
                <div className="md:col-span-4">
                    <div className="rounded-2xl border border-gray-200 bg-[#F0F0F0] p-5">
                        <h3 className="font-semibold text-gray-900">What we need from you</h3>
                        <ul className="mt-3 space-y-2 text-sm text-gray-800">
                            <li>• DK TM number(s) and class list</li>
                            <li>• Owner details & address for service</li>
                            <li>• Instructions (renew all / select classes / evaluate)</li>
                            <li>• Invoicing preferences (entity, VAT, currency)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CountryNav() {
    const countries = [
        { name: "European Union (EUIPO)", slug: "european-union" },
        { name: "Sweden", slug: "sweden" },
        { name: "Norway", slug: "norway" },
        { name: "United Kingdom", slug: "united-kingdom" },
        { name: "Germany", slug: "germany" },
        { name: "Netherlands", slug: "netherlands" },
        { name: "Australia", slug: "australia" },
        // current page is Denmark trademarks
    ];
    return (
        <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold">Explore other trademark pages</h3>
            <ul className="mt-3 space-y-1">
                {countries.map(c => (
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

function FAQ() {
    const faqs = [
        { q: "How often do DK trade marks renew?", a: "Every 10 years from filing." },
        { q: "Is there a grace period after expiry?", a: "Yes—time-limited grace with surcharges. We confirm the exact window for your case." },
        { q: "Can I renew only some classes?", a: "Yes. You may renew selected classes and allow others to lapse." },
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

function CTA() {
    return (
        <section id="quote" className="relative isolate">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#4D1475_0%,#7F2B38_100%)] opacity-95" />
            <div className="mx-auto max-w-7xl px-6 py-14 text-white">
                <div className="grid items-center gap-6 md:grid-cols-12">
                    <div className="md:col-span-8">
                        <h2 className="text-2xl md:text-3xl font-extrabold">Need a DK TM renewal quote today?</h2>
                        <p className="mt-2 text-white/90">
                            Send the DK TM number(s), classes, and desired action. We’ll verify the deadline, confirm official fees, and reply with a final quote.
                        </p>
                    </div>
                    <div className="md:col-span-4 md:text-right">
                        <a
                            href="mailto:support@kaglobalip.com?subject=Denmark%20Trademark%20Renewal%20Quote"
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
                fees, and rules change. KA Global IP will verify all details with the Danish Patent and Trademark Office (DKPTO)
                before filing. Proceed only on the basis of our final written quote.
            </p>
        </section>
    );
}

function StickyHelpCard() {
    return (
        <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-gray-900">Need help?</h3>
            <p className="mt-2 text-sm text-gray-700">
                Share your DK TM number(s) and classes; we’ll confirm the renewal window and fees.
            </p>
            <a
                href="mailto:support@kaglobalip.com?subject=Help%20with%20DK%20TM%20Renewal"
                className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[#7F2B38] px-4 py-2 text-white font-semibold hover:bg-[#67202C]"
            >
                <Mail className="h-4 w-4" /> Email us
            </a>
        </div>
    );
}

export default function DenmarkTrademarkRenewalFeesPage() {
    return (
        <>
            <Head>
                <title>Denmark Trademark Renewal Fees (2025 Guide) | KA Global IP</title>
                <meta
                    name="description"
                    content="Indicative trademark renewal fees, timing, and managed services for Denmark. Attorney-led, ISO-certified renewals across 100+ jurisdictions."
                />
                <script
                    type="application/ld+json"
                    // JSON-LD structured data
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            name: "Denmark Trademark Renewal Fees (2025 Guide)",
                            description:
                                "Per-class DK trade mark renewal timelines and indicative fees. Consolidated quotes and attorney oversight from KA Global IP.",
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

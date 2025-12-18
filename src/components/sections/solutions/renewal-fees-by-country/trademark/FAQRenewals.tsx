import React from 'react'

const FAQRenewals = () => {
    const faqs = [
        {
            q: "Are these fees final?",
            a: "They’re indicative for planning. Official fees change; local counsel, translations, excess claims/pages, and surcharges may apply. We confirm current rates before any instruction.",
        },
        {
            q: "Do you support Small/Micro entity reductions?",
            a: "Yes, wherever the jurisdiction provides such categories and you qualify, we apply the correct schedule and documentation.",
        },
        {
            q: "Can you invoice in one currency?",
            a: "Yes. We consolidate into a single currency and invoice with a country-wise breakdown, while tracking FX movements.",
        },
        {
            q: "What happens if I miss a due date?",
            a: "Many offices allow a grace window with surcharges; some require petitions or restoration. We monitor and escalate proactively.",
        },
        {
            q: "Can you sync with our docketing/ERP?",
            a: "Yes. We offer API feeds and custom exports to connect with your docketing or finance stack.",
        },
    ];
    return (
        <div>
            <h2 className="text-2xl font-bold text-[#4D1475]">Renewals — FAQs</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {faqs.map((f) => (
                    <div key={f.q} className="rounded-2xl border border-gray-200 bg-white p-5">
                        <h3 className="text-base font-semibold text-gray-900">{f.q}</h3>
                        <p className="mt-2 text-sm text-gray-700">{f.a}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQRenewals

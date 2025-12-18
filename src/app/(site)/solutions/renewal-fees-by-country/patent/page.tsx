"use client";

import RenewalsHero from "@/components/sections/solutions/renewal-fees-by-country/patent/RenewalsHero";
import CountryAccordion from "@/components/sections/solutions/renewal-fees-by-country/patent/CountryAccordion";
import CTAContact from "@/components/sections/solutions/renewal-fees-by-country/patent/CTAContact";
import FAQRenewals from "@/components/sections/solutions/renewal-fees-by-country/patent/FAQRenewals";
import CountryGrid from "@/components/sections/solutions/renewal-fees-by-country/patent/CountryGrid";

export default function Page() {
    return (
        <main className="bg-white">
            <RenewalsHero />

            <section className="bg-[#F0F0F0]">
                <div className="mx-auto max-w-7xl px-6 py-10">
                    <CountryGrid />
                </div>
            </section>


            {/* Country details accordion */}
            <section className="bg-[#F0F0F0]">
                <div className="mx-auto max-w-7xl px-6 py-10">
                    <CountryAccordion />
                </div>
            </section>

            {/* CTA */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-14">
                    <CTAContact />
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-[#F0F0F0]">
                <div className="mx-auto max-w-7xl px-6 py-14">
                    <FAQRenewals />
                </div>
            </section>
        </main>
    );
}

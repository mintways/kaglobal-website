// app/terms/page.tsx
import TermsHero from "@/components/terms-and-conditions/TermsHero";
import TermsToc from "@/components/terms-and-conditions/TermsToc";
import TermsContent from "@/components/terms-and-conditions/TermsContent";

export const metadata = {
    title: "Terms of Service | KA Global IP",
    description:
        "Read KA Global IP's Terms of Service outlining the use of our websites, platforms, and services globally.",
};

export default function TermsPage() {
    return (
        <main className="bg-white">
            <section className="relative">
                <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 pt-10 sm:pt-12">
                    <TermsHero lastUpdated="October 1, 2025" />
                </div>
            </section>

            <section className="relative py-8 sm:py-10">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:px-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:px-12">
                    {/* Left: TOC */}
                    <aside className="order-1 lg:order-none">
                        <TermsToc
                            items={[
                                { id: "introduction", label: "1. Introduction" },
                                { id: "acceptance", label: "2. Acceptance of Terms" },
                                { id: "services", label: "3. Our Services" },
                                { id: "user-obligations", label: "4. User Obligations" },
                                { id: "intellectual-property", label: "5. Intellectual Property" },
                                { id: "payment", label: "6. Fees and Payments" },
                                { id: "confidentiality", label: "7. Confidentiality" },
                                { id: "limitations", label: "8. Limitation of Liability" },
                                { id: "termination", label: "9. Termination" },
                                { id: "governing-law", label: "10. Governing Law" },
                                { id: "changes", label: "11. Changes to Terms" },
                                { id: "contact", label: "12. Contact Us" },
                            ]}
                        />
                    </aside>

                    {/* Right: Content */}
                    <article className="order-2 min-w-0">
                        <TermsContent />
                    </article>
                </div>
            </section>
        </main>
    );
}

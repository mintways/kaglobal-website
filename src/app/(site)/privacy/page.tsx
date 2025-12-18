// app/privacy/page.tsx
import PrivacyHero from "@/components/privacy-policy/PrivacyHero";
import PrivacyToc from "@/components/privacy-policy/PrivacyToc";
import PrivacyContent from "@/components/privacy-policy/PrivacyContent";
import PolicySchema from "@/components/privacy-policy/PolicySchema";

export const metadata = {
    title: "Privacy Policy | KA Global IP",
    description:
        "Learn how KA Global IP collects, uses, and safeguards your information across our services.",
};

export default function PrivacyPage() {
    return (
        <main className="bg-white">
            <section className="relative">
                <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 pt-10 sm:pt-12">
                    <PrivacyHero lastUpdated="October 1, 2025" />
                </div>
            </section>

            <section className="relative py-8 sm:py-10">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:px-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:px-12">
                    {/* Left: TOC */}
                    <aside className="order-1 lg:order-none">
                        <PrivacyToc
                            items={[
                                { id: "introduction", label: "1. Introduction" },
                                { id: "data-we-collect", label: "2. Data We Collect" },
                                { id: "how-we-use", label: "3. How We Use Data" },
                                { id: "legal-bases", label: "4. Legal Bases (EEA/UK)" },
                                { id: "sharing", label: "5. Sharing & Transfers" },
                                { id: "security", label: "6. Security" },
                                { id: "retention", label: "7. Data Retention" },
                                { id: "your-rights", label: "8. Your Rights" },
                                { id: "cookies", label: "9. Cookies & Similar Tech" },
                                { id: "children", label: "10. Children’s Privacy" },
                                { id: "changes", label: "11. Changes to Policy" },
                                { id: "contact", label: "12. Contact Us" },
                            ]}
                        />
                    </aside>

                    {/* Right: Content */}
                    <article className="order-2 min-w-0">
                        <PrivacyContent />
                    </article>
                </div>
            </section>
            <PolicySchema />
        </main>
    );
}

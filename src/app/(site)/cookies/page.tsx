// app/cookies/page.tsx
import CookieHero from "@/components/cookies/CookieHero";
import CookieToc from "@/components/cookies/CookieToc";
import CookieContent from "@/components/cookies/CookieContent";

export const metadata = {
    title: "Cookie Policy | KA Global IP",
    description:
        "Learn how KA Global IP uses cookies and similar technologies on our websites and platforms.",
};

export default function CookiesPage() {
    return (
        <main className="bg-white">
            <section className="relative">
                <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 pt-10 sm:pt-12">
                    <CookieHero lastUpdated="October 1, 2025" />
                </div>
            </section>

            <section className="relative py-8 sm:py-10">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:px-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:px-12">
                    {/* Left: TOC */}
                    <aside className="order-1 lg:order-none">
                        <CookieToc
                            items={[
                                { id: "introduction", label: "1. Introduction" },
                                { id: "what-are-cookies", label: "2. What Are Cookies?" },
                                { id: "types", label: "3. Types of Cookies We Use" },
                                { id: "how-we-use", label: "4. How We Use Cookies" },
                                { id: "choices", label: "5. Your Choices & Controls" },
                                { id: "manage", label: "6. Managing Cookies in Your Browser" },
                                { id: "list", label: "7. Cookies We Use (Examples)" },
                                { id: "changes", label: "8. Updates to This Policy" },
                                { id: "contact", label: "9. Contact Us" },
                            ]}
                        />
                    </aside>

                    {/* Right: Content */}
                    <article className="order-2 min-w-0">
                        <CookieContent />
                    </article>
                </div>
            </section>
        </main>
    );
}

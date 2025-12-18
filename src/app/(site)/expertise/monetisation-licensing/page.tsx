import MonetisationHero from "@/components/sections/expertise/Monetisation & Licensing/MonetisationHero";
import MonetisationOverview from "@/components/sections/expertise/Monetisation & Licensing/DifferentiatorsSection";
import MonetisationServices from "@/components/sections/expertise/Monetisation & Licensing/MonetisationService";
import MonetisationProcess from "@/components/sections/expertise/Monetisation & Licensing/StickySubNav";
import MonetisationEngagement from "@/components/sections/expertise/Monetisation & Licensing/WhyChooseSection";
import MonetisationCta from "@/components/sections/expertise/Monetisation & Licensing/CtaSection";

export const metadata = {
    title: "Monetisation & Licensing | KA Global IP",
    description:
        "Turn your IP into strategic revenue with valuation, licensing, and royalty management.",
};

export default function Page() {
    return (
        <>
            <MonetisationHero />
            <MonetisationProcess />
            <MonetisationOverview />
            <MonetisationServices />
            <MonetisationEngagement />
            <MonetisationCta />
        </>
    );
}

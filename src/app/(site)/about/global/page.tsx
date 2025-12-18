import Hero from "@/components/about/global-reach/Hero";
import StatsStrip from "@/components/about/global-reach/StatsStrip";
import NetworkBand from "@/components/about/global-reach/NetworkBand";
import SuccessStories from "@/components/about/global-reach/SuccessStories";
import CommitmentCTA from "@/components/about/global-reach/CommitmentCTA";

// If you globally load Playfair/PTS (as you already do), this page will pick them up.
// Otherwise, import fonts here and wrap the tree.

export const metadata = {
    title: "Global Reach | KA Global IP",
    description:
        "KA Global IP (formerly KA Filing LLC) delivers borderless intellectual property solutions across 100+ countries with local expertise and global coordination.",
};

export default function Page() {
    return (
        <main className="w-full">
            <Hero />
            <StatsStrip />
            <NetworkBand />
            <SuccessStories />
            <CommitmentCTA />
        </main>
    );
}

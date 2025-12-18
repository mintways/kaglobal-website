// app/(site)/services/copyright/page.tsx
import CopyrightHero from "@/components/sections/services/copyright/CopyrightHero";
import CopyrightCoverage from "@/components/sections/services/copyright/CopyrightCoverage";
import CopyrightLifecycle from "@/components/sections/services/copyright/CopyrightLifecycle";
import CopyrightQuality from "@/components/sections/services/copyright/CopyrightQuality";
import CopyrightUpdates from "@/components/sections/services/copyright/CopyrightUpdates";
import CopyrightIntegration from "@/components/sections/services/copyright/CopyrightIntegration";
import CopyrightCTA from "@/components/sections/services/copyright/CopyrightCTA"

export default function CopyrightPage() {
    return (
        <>
            <CopyrightHero />
            <CopyrightCoverage />
            <CopyrightLifecycle/>
            <CopyrightQuality />
            <CopyrightUpdates />
            <CopyrightIntegration />
            <CopyrightCTA />
        </>
    );
}

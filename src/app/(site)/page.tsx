import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PlatformsSection from "@/components/sections/PlatformsSection";
import SecurityTransparencySection from "@/components/sections/SecurityTransparencySection";
import WhyKAGlobalIPSection from "@/components/sections/WhyKAGlobalIPSection";
import ReadyToProtectSection from "@/components/sections/ReadyToProtectSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <PlatformsSection />
      <SecurityTransparencySection />
      <WhyKAGlobalIPSection />
      <ReadyToProtectSection />
    </>
  );
}

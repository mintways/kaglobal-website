import DesignHero from "@/components/sections/services/design/DesignHero";
import DesignWhyUs from "@/components/sections/services/design/DesignWhyUs";
import DesignDrawings from "@/components/sections/services/design/DesignDrawings";
import DesignProtection from "@/components/sections/services/design/DesignProtection";
import DesignAssistance from "@/components/sections/services/design/DesignAssistance";
import DesignManagement from "@/components/sections/services/design/DesignManagement";
import DesignCTA from "@/components/sections/services/design/DesignCTA";

export default function DesignPage() {
  return (
    <>
      <DesignHero />
      <DesignWhyUs />
      <DesignDrawings />
      <DesignProtection />
      <DesignAssistance />
      <DesignManagement />
      <DesignCTA />
    </>
  );
}

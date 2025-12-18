// app/(site)/services/trademark/page.tsx
import TrademarkHero from "@/components/sections/services/trademark/TrademarkHero";
import TrademarkWhy from "@/components/sections/services/trademark/TrademarkWhy"
import TrademarkServicesSplit from "@/components/sections/services/trademark/TrademarkServicesSplit";
import TrademarkWhyChoose from "@/components/sections/services/trademark/TrademarkWhyChoose";
import TrademarkCta from "@/components/sections/services/trademark/TrademarkCta"


export default function Page() {
  return (
    <>
      <TrademarkHero />
      <TrademarkWhy imageSrc="/images/services/trademark/Trademark-Illustration.png" />
      <TrademarkServicesSplit />
      <TrademarkWhyChoose />
      <TrademarkCta />
      {/* next sections */}
    </>
  );
}

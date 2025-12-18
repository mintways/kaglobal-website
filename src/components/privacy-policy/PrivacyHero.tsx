// components/policies/PrivacyHero.tsx
export default function PrivacyHero({ lastUpdated }: { lastUpdated: string }) {
    return (
        <div>
            <p className="font-ptsans text-xs tracking-[0.14em] uppercase text-[#7F2B38]/80">
                Policy
            </p>
            <h1 className="font-playfair mt-2 text-3xl sm:text-4xl font-bold text-[#2E2E3B]">
                Privacy Policy
            </h1>
            <p className="font-ptsans mt-3 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-[#585A5D]">
                This Privacy Policy explains how KA Global IP collects, uses, and shares information in connection with our websites, products, and services.
            </p>
            <p className="font-ptsans mt-2 text-sm text-[#6B7280]">Last updated: {lastUpdated}</p>
        </div>
    );
}

// components/policies/CookieHero.tsx
export default function CookieHero({ lastUpdated }: { lastUpdated: string }) {
    return (
        <div>
            <p className="font-ptsans text-xs tracking-[0.14em] uppercase text-[#7F2B38]/80">
                Policy
            </p>
            <h1 className="font-playfair mt-2 text-3xl sm:text-4xl font-bold text-[#2E2E3B]">
                Cookie Policy
            </h1>
            <p className="font-ptsans mt-3 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-[#585A5D]">
                This Cookie Policy explains how KA Global IP uses cookies and similar technologies when
                you visit our websites or use our platforms.
            </p>
            <p className="font-ptsans mt-2 text-sm text-[#6B7280]">Last updated: {lastUpdated}</p>
        </div>
    );
}

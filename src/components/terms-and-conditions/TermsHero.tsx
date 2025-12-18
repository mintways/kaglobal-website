// components/policies/TermsHero.tsx
export default function TermsHero({ lastUpdated }: { lastUpdated: string }) {
    return (
        <div>
            <p className="font-ptsans text-xs tracking-[0.14em] uppercase text-[#7F2B38]/80">
                Legal
            </p>
            <h1 className="font-playfair mt-2 text-3xl sm:text-4xl font-bold text-[#2E2E3B]">
                Terms of Service
            </h1>
            <p className="font-ptsans mt-3 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-[#585A5D]">
                These Terms govern your access to and use of KA Global IP’s websites, platforms, and
                services. Please read them carefully before using our services.
            </p>
            <p className="font-ptsans mt-2 text-sm text-[#6B7280]">Last updated: {lastUpdated}</p>
        </div>
    );
}

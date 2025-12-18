// components/policies/PrivacySection.tsx
type Props = {
    id: string;
    heading: string;
    children: React.ReactNode;
};

export default function PrivacySection({ id, heading, children }: Props) {
    return (
        <section id={id} className="scroll-mt-28">
            <h2 className="font-playfair text-2xl sm:text-[26px] font-semibold text-[#2E2E3B]">
                {heading}
            </h2>
            <div className="mt-3 sm:mt-4 space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-[#374151] font-ptsans">
                {children}
            </div>
            <hr className="my-8 border-[#EEE]" />
        </section>
    );
}

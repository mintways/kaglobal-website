// app/contact/page.tsx
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import ContactInfo from "@/components/forms/ContactInfo";
import { MapPin, Mail, Phone, Building2 } from "lucide-react";
import { Playfair_Display, PT_Sans } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });
const ptsans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
    title: "Contact Us | KA Global IP",
    description:
        "Talk to KA Global IP — global IP protection, portfolio management, renewals and recordals.",
};

// ---- Global offices data ----
const offices = [
    {
        country: "USA",
        address: "2112 W Marjory Ave, Tampa, FL 33606, USA",
        email: "business@kaglobalip.com",
        phone: "+1 813 408 8782",
        altPhone: "+1 502 470 7430",
    },
    {
        country: "INDIA",
        address: "KH-360, Plot-B, Second Floor, Sultanpur, New Delhi-110030, India.",
        email: "business@kaglobalip.com",
        phone: "+91-011-44122100",
    },
    // {
    //     country: "UK",
    //     address:
    //         "Coachmakers Business Centre 116a Seaside Eastbourne, East Sussex, BN22 7QP, United Kingdom",
    //     email: "business@kaglobalip.com",
    //     phone: "+44 1323 701701",
    //     altPhone: "+1 502 470 7430",
    // },
    // {
    //     country: "ITALY",
    //     address: "3c/o Studio ing. Luciano Fusar Poli Lodi – Milan, Italy",
    //     email: "business@kaglobalip.com",
    //     phone: "+39 02 0061 9521",
    //     altPhone: "+39 02 7003 1912",
    // },
    {
        country: "CHINA",
        address:
            "Room 2702, Yuhai World Financial Center, 1009 Jiuzhou Avenue, Xiangzhou District, Zhuhai City, Guangdong Province",
        email: "business@kaglobalip.com",
        phone: "+86 756 8888 999",
    },
];

export default function ContactPage() {
    return (
        <main className="bg-white">
            {/* ---------------- Hero ---------------- */}
            <section className="relative">
                <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 pt-12 sm:pt-14">
                    <p className="font-ptsans text-xs tracking-[0.14em] uppercase text-[#7F2B38]/80">
                        Get in touch
                    </p>
                    <h1 className="font-playfair mt-2 text-3xl sm:text-4xl font-bold text-[#2E2E3B]">
                        Contact KA Global IP
                    </h1>
                    <p className="font-ptsans mt-3 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-[#585A5D]">
                        Have a question about patents, trademarks, or renewals? Send us a note. We typically
                        respond within one business day.
                    </p>
                </div>
            </section>

            {/* ---------------- Section 1: Form + Info ---------------- */}
            <section className="relative py-10 sm:py-12">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:gap-12 lg:px-12">
                    <div className="rounded-2xl border border-[#EAEAEA] bg-white p-6 sm:p-8 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                        <ContactForm />
                    </div>

                    <aside className="space-y-6">
                        <ContactInfo />

                        {/* Keep your previous smaller office summary or remove */}
                        <div className="rounded-2xl border border-[#EAEAEA] bg-white p-6 sm:p-8">
                            <h2 className="font-playfair text-xl font-semibold text-[#2E2E3B]">Offices</h2>
                            <div className="mt-4 grid grid-cols-1 gap-4 font-ptsans text-[15px]">
                                <div>
                                    <p className="font-semibold text-[#2E2E3B]">
                                        KH-360, Plot-B, Second Floor, Sultanpur, New Delhi-110030, India.
                                    </p>
                                    <p className="text-[#585A5D]">India</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#2E2E3B]">
                                        2112 W Marjory Ave, Tampa, FL 33606, USA
                                    </p>
                                    <p className="text-[#585A5D]">U.S.A</p>
                                </div>
                                {/* <div>
                                    <p className="font-semibold text-[#2E2E3B]">
                                        Coachmakers Business Centre 116a Seaside Eastbourne, East Sussex, BN22 7QP, United Kingdom
                                    </p>
                                    <p className="text-[#585A5D]">U.K</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#2E2E3B]">
                                        3c/o Studio ing. Luciano Fusar Poli Lodi – Milan, Italy
                                    </p>
                                    <p className="text-[#585A5D]">Italy</p>
                                </div> */}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* ---------------- Section 2: Global Offices Cards ---------------- */}
            <section className="relative py-10 sm:py-14 bg-[#F9FAFB]">
                <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
                    <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#2E2E3B] mb-8">
                        Our Global Presence
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {offices.map((o) => (
                            <div
                                key={o.country}
                                className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-[#E5E7EB] transition hover:shadow-md"
                            >
                                <h3
                                    className={`${playfair.className} text-xl font-bold text-[#0B1727] mb-4`}
                                >
                                    {o.country}
                                </h3>

                                <div className="space-y-3">
                                    <div className="flex gap-3">
                                        <MapPin className="mt-0.5 h-4 w-4 text-[#E59C25]" />
                                        <p
                                            className={`${ptsans.className} text-sm leading-relaxed text-[#0B1727]`}
                                        >
                                            {o.address}
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <Mail className="mt-0.5 h-4 w-4 text-[#E59C25]" />
                                        <p
                                            className={`${ptsans.className} text-sm text-[#0B1727]`}
                                        >
                                            {o.email}
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <Phone className="mt-0.5 h-4 w-4 text-[#E59C25]" />
                                        <p
                                            className={`${ptsans.className} text-sm text-[#0B1727]`}
                                        >
                                            {o.phone}
                                        </p>
                                    </div>

                                    {o.altPhone && (
                                        <div className="flex gap-3">
                                            <Building2 className="mt-0.5 h-4 w-4 text-[#E59C25]" />
                                            <p
                                                className={`${ptsans.className} text-sm text-[#0B1727]`}
                                            >
                                                {o.altPhone}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

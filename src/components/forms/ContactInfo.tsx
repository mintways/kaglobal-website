import Link from "next/link";

export default function ContactInfo() {
    return (
        <div className="rounded-2xl border border-[#EAEAEA] bg-white p-6 sm:p-8">
            <h2 className="font-playfair text-xl font-semibold text-[#2E2E3B]">Direct lines</h2>
            <ul className="mt-4 space-y-3 font-ptsans text-[15px] text-[#2E2E3B]">
                <li>
                    <span className="text-[#7F2B38]">India:</span>{" "}
                    <Link className="underline-offset-2 hover:underline" href="tel:01144122100">
                        011-44122100
                    </Link>
                </li>
                <li>
                    <span className="text-[#7F2B38]">US:</span>{" "}
                    <Link className="underline-offset-2 hover:underline" href="tel:+18134088782">
                        +1-813-408-8782
                    </Link>
                </li>
                <li>
                    <span className="text-[#7F2B38]">Email:</span>{" "}
                    <Link
                        className="underline-offset-2 hover:underline"
                        href="mailto:business@kaglobalip.com"
                    >
                        business@kaglobalip.com
                    </Link>
                </li>
                <li className="text-[#585A5D]">Mon–Fri · 9:00–18:00 (IST) · 9:00–18:00 (ET)</li>
            </ul>
        </div>
    );
}

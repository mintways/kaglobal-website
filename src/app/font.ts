import localFont from "next/font/local";
import { PT_Sans } from "next/font/google";

export const euclid = localFont({
    src: [
        { path: "../../public/fonts/EuclidCircularA/EuclidCircularA-Regular.ttf", weight: "400", style: "normal" },
        { path: "../../public/fonts/EuclidCircularA/EuclidCircularA-Medium.ttf", weight: "500", style: "normal" },
        { path: "../../public/fonts/EuclidCircularA/EuclidCircularA-SemiBold.ttf", weight: "600", style: "normal" },
        { path: "../../public/fonts/EuclidCircularA/EuclidCircularA-Bold.ttf", weight: "700", style: "normal" },
    ],
    variable: "--font-euclid",
    display: "swap",
});

export const ptsans = PT_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-ptsans",
    display: "swap",
});

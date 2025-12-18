// app/layout.tsx
import "./globals.css";
import { Playfair_Display, PT_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";

// Playfair Display (global headings)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

// PT Sans (body)
const ptsans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
  display: "swap",
});

export const metadata = {
  title: "KA Global IP",
  description: "Global Intellectual Property Solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${ptsans.variable}`}>
      <body className="font-ptsans text-ka-ink bg-white antialiased min-h-dvh">
        <Header />
        <main>{children}</main>
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}

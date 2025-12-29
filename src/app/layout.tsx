// app/layout.tsx
import "./globals.css";
import { Playfair_Display, PT_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";
import RecaptchaGlobal from "@/components/recaptcha/RecaptchaGlobal";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en" className={`${playfair.variable} ${ptsans.variable}`}>
      <body className="font-ptsans text-ka-ink bg-white antialiased min-h-dvh">
        {/* ✅ Load reCAPTCHA script early so any form can execute immediately */}
        <RecaptchaGlobal />
        <Header />
        <main>{children}</main>
        <CookieConsent />
        <Footer />

        {/* GA on all pages */}
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}

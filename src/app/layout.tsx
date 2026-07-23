import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import LayoutWrapper from "../components/LayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DentalNTK | World-Class Boutique Clinic Hanoi",
  description: "Experience world-class dental care & authentic Vietnamese hospitality in Hanoi. Save up to 70% on Dental Implants, Porcelain Veneers, and All-on-4 with international standards, global warranty, and 24/7 travel support.",
  keywords: ["Dental Tourism Vietnam", "Boutique Dental Clinic Hanoi", "Dental Implants Vietnam", "Porcelain Veneers Vietnam", "All-on-4 Vietnam", "Dentist in Hanoi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fcfcfc] text-[#0f172a] font-sans">
        <LanguageProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}

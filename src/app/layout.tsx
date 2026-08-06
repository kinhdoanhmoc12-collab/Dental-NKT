import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import LayoutWrapper from "../components/LayoutWrapper";
import WhatsAppWidget from "../components/WhatsAppWidget";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nhakhoatre.vn"),
  title: {
    default: "Dental NKT - International Dental Clinic in Vietnam",
    template: "%s | Dental NKT - International Dental Clinic in Vietnam",
  },
  description: "Experience world-class dental care & authentic Vietnamese hospitality in Hanoi. Save up to 70% on Dental Implants, Porcelain Veneers, and All-on-4 with international standards, global warranty, and 24/7 travel support.",
  keywords: ["Dental Tourism Vietnam", "Boutique Dental Clinic Hanoi", "Dental Implants Vietnam", "Porcelain Veneers Vietnam", "All-on-4 Vietnam", "Dentist in Hanoi"],
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/?lang=VN",
      "en-AU": "/?lang=AU",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Dental NKT - International Dental Clinic in Vietnam",
    description: "Experience world-class dental care & authentic Vietnamese hospitality in Hanoi. Save up to 70% on Dental Implants, Porcelain Veneers, and All-on-4 with international standards, global warranty, and 24/7 travel support.",
    url: "https://nhakhoatre.vn",
    siteName: "Dental NKT",
    images: [
      {
        url: "https://nhakhoatre.vn/boutique_clinic.png",
        width: 1200,
        height: 630,
        alt: "Dental NKT Boutique Clinic Hanoi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&dl='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T23ZMSWR');
            `,
          }}
        />
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RVXNJV7LRH"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RVXNJV7LRH');
            `,
          }}
        />
      </head>
      <body className="min-h-full w-full flex flex-col bg-[#fcfcfc] text-[#0f172a] font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T23ZMSWR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LanguageProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
          <WhatsAppWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}


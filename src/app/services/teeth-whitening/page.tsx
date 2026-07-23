import React from "react";
import { Metadata } from "next";
import TeethWhiteningClient from "./TeethWhiteningClient";

export const metadata: Metadata = {
  title: "Teeth Whitening Hanoi | Professional Laser Whitening Vietnam",
  description: "Experience professional laser teeth whitening in Hanoi, Vietnam. Safe, enamel-friendly, and instant brightness in 45-90 minutes. Optimal when combined with cosmetic veneers.",
  alternates: {
    canonical: "https://dentalnhakhoatre.com/services/teeth-whitening",
  },
  openGraph: {
    title: "Teeth Whitening Hanoi | Professional Laser Whitening Vietnam",
    description: "Experience professional laser teeth whitening in Hanoi, Vietnam. Safe, enamel-friendly, and instant brightness in 45-90 minutes. Optimal when combined with cosmetic veneers.",
    url: "https://dentalnhakhoatre.com/services/teeth-whitening",
    type: "website",
  }
};

export default function Page() {
  return <TeethWhiteningClient />;
}

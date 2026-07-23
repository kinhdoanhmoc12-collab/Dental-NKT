import React from "react";
import type { Metadata } from "next";
import SmileMakeoverClient from "./SmileMakeoverClient";

export const metadata: Metadata = {
  title: "Smile Makeover Hanoi | Custom Esthetic Smile Design Vietnam",
  description: "Transform your smile with a personalized smile makeover plan at DentalNKT Clinic Hanoi. Combining E.max veneers, crowns, gum contouring, and whitening. Save up to 70% compared to Australia.",
  keywords: [
    "Smile Makeover Vietnam",
    "Digital Smile Design Hanoi",
    "Cosmetic Dentistry Vietnam",
    "Dental veneers and crowns Hanoi",
    "Gum lifting cost Vietnam"
  ],
};

export default function SmileMakeoverPage() {
  return <SmileMakeoverClient />;
}

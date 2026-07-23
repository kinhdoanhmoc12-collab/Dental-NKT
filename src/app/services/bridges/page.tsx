import React from "react";
import type { Metadata } from "next";
import BridgesClient from "./BridgesClient";

export const metadata: Metadata = {
  title: "Dental Bridges Hanoi | Non-Surgical Teeth Restoration Vietnam",
  description: "Restore missing teeth in a single trip with premium dental bridges at DentalNKT Clinic Hanoi. German Zirconia and IPS E.max materials, 5-10 year global warranty. Save up to 70% compared to Australia.",
  keywords: [
    "Dental Bridges Vietnam",
    "Porcelain Bridges Hanoi",
    "Dental Bridge cost Vietnam",
    "Missing teeth replacement Hanoi",
    "Dental tourism Vietnam"
  ],
};

export default function BridgesPage() {
  return <BridgesClient />;
}

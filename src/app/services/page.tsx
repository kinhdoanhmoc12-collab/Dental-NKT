import React from "react";
import type { Metadata } from "next";
import ServicesPage from "./ServicesClient";

export const metadata: Metadata = {
  title: "Dental Services Vietnam | Dental NKT Clinic",
  description: "Explore premium dental services at Dental NKT in Hanoi. Save up to 70% on dental implants, veneers, and All-on-4/6 with global warranty.",
  alternates: {
    canonical: "https://nhakhoatre.vn/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}

import React from "react";
import type { Metadata } from "next";
import FullMouthClient from "./FullMouthClient";

export const metadata: Metadata = {
  title: "Full Mouth Reconstruction Hanoi | Complete Dental Rehabilitation Vietnam",
  description: "Restore your bite and entire smile with a customized full mouth reconstruction plan at DentalNKT Clinic Hanoi. Combining implants, crowns, and bite rehabilitation. Save up to 70% compared to Australia.",
  keywords: [
    "Full Mouth Reconstruction Vietnam",
    "Complete Dental Rehabilitation Hanoi",
    "Nha khoa phẫu thuật toàn hàm Hà Nội",
    "Bite rehabilitation cost Vietnam",
    "Dental tourism Hanoi"
  ],
};

export default function FullMouthReconstructionPage() {
  return <FullMouthClient />;
}

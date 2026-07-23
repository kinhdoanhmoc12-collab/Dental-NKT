import React from "react";
import { Metadata } from "next";
import InvisalignClient from "./InvisalignClient";

export const metadata: Metadata = {
  title: "Niềng răng Invisalign (Khay trong suốt) | Invisalign Clear Aligners Hanoi",
  description: "Niềng răng Invisalign phối hợp từ xa tại DentalNKT giúp bệnh nhân tiết kiệm thời gian. Khởi động tại Việt Nam và tiếp tục tự điều chỉnh tại Úc. / Remote Invisalign clear aligner orthodontics in Vietnam for international dental travelers.",
  alternates: {
    canonical: "https://dentalnhakhoatre.com/services/invisalign",
  },
  openGraph: {
    title: "Niềng răng Invisalign (Khay trong suốt) | Invisalign Clear Aligners Hanoi",
    description: "Niềng răng Invisalign phối hợp từ xa tại DentalNKT giúp bệnh nhân tiết kiệm thời gian. Khởi động tại Việt Nam và tiếp tục tự điều chỉnh tại Úc.",
    url: "https://dentalnhakhoatre.com/services/invisalign",
    type: "website",
  }
};

export default function Page() {
  return <InvisalignClient />;
}

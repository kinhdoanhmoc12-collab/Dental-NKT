import React from "react";
import { Metadata } from "next";
import DenturesClient from "./DenturesClient";

export const metadata: Metadata = {
  title: "Hàm giả tháo lắp & Hàm phủ trên Implant | DentalNKT",
  description: "Dịch vụ hàm giả tháo lắp và hàm phủ trên Implant (Overdenture) tại DentalNKT giúp khôi phục chức năng ăn nhai và nụ cười tự nhiên với chi phí vô cùng tiết kiệm. / Removable dentures and implant-supported overdentures in Hanoi, Vietnam.",
  alternates: {
    canonical: "https://nhakhoatre.vn/services/dentures",
  },
  openGraph: {
    title: "Hàm giả tháo lắp & Hàm phủ trên Implant | DentalNKT",
    description: "Dịch vụ hàm giả tháo lắp và hàm phủ trên Implant (Overdenture) tại DentalNKT giúp khôi phục chức năng ăn nhai và nụ cười tự nhiên với chi phí vô cùng tiết kiệm.",
    url: "https://nhakhoatre.vn/services/dentures",
    type: "website",
  }
};

export default function Page() {
  return <DenturesClient />;
}

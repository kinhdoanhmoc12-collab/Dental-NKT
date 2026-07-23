import React from "react";
import { Metadata } from "next";
import RootCanalClient from "./RootCanalClient";

export const metadata: Metadata = {
  title: "Điều trị tủy răng (Root Canal) | Root Canal Therapy Hanoi",
  description: "Dịch vụ điều trị tủy răng chuyên sâu dưới kính hiển vi tại DentalNKT giúp loại bỏ ổ nhiễm trùng triệt để và bảo tồn tối đa cấu trúc răng thật tự nhiên. / Microscopic root canal therapy in Vietnam for international patients.",
  alternates: {
    canonical: "https://dentalnhakhoatre.com/services/root-canal",
  },
  openGraph: {
    title: "Điều trị tủy răng (Root Canal) | Root Canal Therapy Hanoi",
    description: "Dịch vụ điều trị tủy răng chuyên sâu dưới kính hiển vi tại DentalNKT giúp loại bỏ ổ nhiễm trùng triệt để và bảo tồn tối đa cấu trúc răng thật tự nhiên.",
    url: "https://dentalnhakhoatre.com/services/root-canal",
    type: "website",
  }
};

export default function Page() {
  return <RootCanalClient />;
}

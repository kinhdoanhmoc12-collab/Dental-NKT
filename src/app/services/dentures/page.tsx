import type { Metadata } from "next";
import DenturesClient from "./DenturesClient";

type Props = {
  params: Promise<{}>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const isVN = resolvedSearchParams.lang === "VN";
  return {
    title: isVN ? "Hàm giả tháo lắp & Hàm phủ trên Implant | DentalNKT" : "Dentures & Implant-Supported Overdentures Hanoi | Dental NKT",
    description: isVN ? "Dịch vụ hàm giả tháo lắp và hàm phủ trên Implant (Overdenture) tại DentalNKT giúp khôi phục chức năng ăn nhai và nụ cười tự nhiên với chi phí tiết kiệm." : "Restore chewing function and a natural smile with premium removable or implant-supported overdentures in Hanoi at Dental NKT. Save 70%.",
    alternates: {
      canonical: "https://nhakhoatre.vn/services/dentures",
    },
    openGraph: {
      title: isVN ? "Hàm giả tháo lắp & Hàm phủ trên Implant | DentalNKT" : "Dentures & Implant-Supported Overdentures Hanoi | Dental NKT",
      description: isVN ? "Dịch vụ hàm giả tháo lắp và hàm phủ trên Implant (Overdenture) tại DentalNKT giúp khôi phục chức năng ăn nhai và nụ cười tự nhiên với chi phí tiết kiệm." : "Restore chewing function and a natural smile with premium removable or implant-supported overdentures in Hanoi at Dental NKT. Save 70%.",
      url: "https://nhakhoatre.vn/services/dentures",
      type: "website",
    }
  };
}

export default function Page() {
  return <DenturesClient />;
}

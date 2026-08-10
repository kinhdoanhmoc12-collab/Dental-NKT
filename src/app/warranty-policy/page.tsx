import type { Metadata } from 'next';
import WarrantyPolicyPage from './WarrantyPolicyClient';

type Props = {
  params: Promise<{}>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const isVN = resolvedSearchParams.lang === "VN";
  return {
    title: isVN ? "Chính sách Bảo hành Toàn cầu SmileCare | Dental NKT" : "SmileCare Global Warranty Policy | Dental NKT Clinic",
    description: isVN ? "Chính sách bảo hành toàn cầu SmileCare bằng văn bản pháp lý cho cấy ghép Implant và răng sứ Veneers tại Dental NKT." : "Read our legally binding SmileCare Global Warranty details covering dental implants up to 10 years and E.max veneers up to 7 years.",
    alternates: {
      canonical: "https://nhakhoatre.vn/warranty-policy",
    },
  };
}

export default function Page() {
  return <WarrantyPolicyPage />;
}

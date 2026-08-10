import type { Metadata } from 'next';
import CostPage from './DentalCostsClient';

type Props = {
  params: Promise<{}>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const isVN = resolvedSearchParams.lang === "VN";
  return {
    title: isVN ? "Bảng giá dịch vụ Nha khoa trọn gói | Dental NKT" : "Dental Treatment Fees & Pricing | Dental NKT Hanoi",
    description: isVN ? "Bảng giá chi phí dịch vụ cấy ghép implant, veneers, All-on-4/6 trọn gói tại nha khoa Dental NKT Hà Nội." : "Compare dental treatment costs in Vietnam vs Australia. Save up to 70% on premium implants, E.max veneers, and full-mouth restorations.",
    alternates: {
      canonical: "https://nhakhoatre.vn/dental-costs",
    },
  };
}

export default function Page() {
  return <CostPage />;
}

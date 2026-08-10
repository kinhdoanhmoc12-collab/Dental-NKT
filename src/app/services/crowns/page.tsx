import type { Metadata } from 'next';
import CrownsPage from './CrownsClient';

type Props = {
  params: Promise<{}>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const isVN = resolvedSearchParams.lang === "VN";
  return {
    title: isVN ? "Mão răng sứ (Crowns) — Phục hồi răng hư hại toàn diện | DentalNKT" : "Dental Crowns — Comprehensive Tooth Restoration | DentalNKT",
    description: isVN ? "Dịch vụ bọc răng sứ thẩm mỹ chất lượng cao. Khôi phục răng vỡ mẻ, bảo hành 10 năm." : "Restore broken or damaged teeth with premium porcelain dental crowns in Hanoi at Dental NKT. 10-year warranty, save 70%.",
    alternates: {
      canonical: "https://nhakhoatre.vn/services/crowns",
    },
  };
}

export default function Page() {
  return <CrownsPage />;
}

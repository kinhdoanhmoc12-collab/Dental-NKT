import type { Metadata } from 'next';
import ImplantsPage from './ImplantsClient';

type Props = {
  params: Promise<{}>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const isVN = resolvedSearchParams.lang === "VN";
  return {
    title: isVN ? "Cấy Ghép Implant Đơn lẻ Thẩm Mỹ | Dental NKT" : "Premium Dental Implants Hanoi | Dental NKT",
    description: isVN ? "Dịch vụ cấy ghép răng Implant đơn lẻ tại Hà Nội. Tiết kiệm 70% chi phí, bảo hành chính hãng toàn cầu." : "Get world-class single dental implants in Hanoi at Dental NKT. Save 70% compared to Sydney/Melbourne. Global lifetime warranty.",
    alternates: {
      canonical: "https://nhakhoatre.vn/services/implants",
    },
  };
}

export default function Page() {
  return <ImplantsPage />;
}

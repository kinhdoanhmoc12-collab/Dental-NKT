import type { Metadata } from 'next';
import AllOn4Page from './AllOn4Client';

type Props = {
  params: Promise<{}>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const isVN = resolvedSearchParams.lang === "VN";
  return {
    title: isVN ? "Cấy Ghép Implant All-on-4 Toàn Hàm | Dental NKT" : "Premium Implant All-on-4 Hanoi | Dental NKT",
    description: isVN ? "Giải pháp cấy ghép Implant All-on-4 phục hình toàn hàm cho người mất răng. Tiết kiệm chi phí tối đa." : "Get premium All-on-4 dental implants in Hanoi at Dental NKT. Restore your smile, save 70% compared to Australia.",
    alternates: {
      canonical: "https://nhakhoatre.vn/services/allon4",
    },
  };
}

export default function Page() {
  return <AllOn4Page />;
}

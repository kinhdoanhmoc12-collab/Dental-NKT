import type { Metadata } from 'next';
import AllOn6Page from './AllOn6Client';

type Props = {
  params: Promise<{}>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const isVN = resolvedSearchParams.lang === "VN";
  return {
    title: isVN ? "Cấy Ghép Implant All-on-6 Toàn Hàm | Dental NKT" : "All-on-6 Dental Implants Hanoi | Dental NKT",
    description: isVN ? "Cấy ghép răng All-on-6 phục hình toàn hàm vững chắc. Tiết kiệm chi phí, phục hình răng tức thì." : "Secure full-mouth teeth replacement with All-on-6 dental implants in Hanoi. Premium European materials, save up to 70%.",
    alternates: {
      canonical: "https://nhakhoatre.vn/services/allon6",
    },
  };
}

export default function Page() {
  return <AllOn6Page />;
}

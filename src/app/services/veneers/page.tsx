import type { Metadata } from 'next';
import VeneersPage from './VeneersClient';

type Props = {
  params: Promise<{}>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const isVN = resolvedSearchParams.lang === "VN";
  return {
    title: isVN ? "Mặt Dán Sứ Veneer Thẩm Mỹ Cao Cấp | Dental NKT" : "Porcelain Veneers Hanoi | Premium Dental NKT",
    description: isVN ? "Mặt dán sứ Veneer bảo tồn răng tối đa tại Hà Nội. Đội ngũ chuyên khoa sâu, công nghệ Smile Design 3D hiện đại." : "Transform your smile with porcelain veneers in Hanoi at Dental NKT. Minimal tooth prep, custom 3D Smile Design, save up to 70%.",
    alternates: {
      canonical: "https://nhakhoatre.vn/services/veneers",
    },
  };
}

export default function Page() {
  return <VeneersPage />;
}

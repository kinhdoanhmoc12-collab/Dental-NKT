import type { Metadata } from 'next';
import View3dPage from './View3dClient';

type Props = {
  params: Promise<{}>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const isVN = resolvedSearchParams.lang === "VN";
  return {
    title: isVN ? "Xem mô phỏng thiết kế nụ cười 3D | Dental NKT" : "Interactive 3D Smile & Dental Scan View | Dental NKT",
    description: isVN ? "Trải nghiệm xem mô phỏng thiết kế nụ cười 3D tương tác trực quan trước khi bắt đầu điều trị tại Dental NKT." : "Experience our interactive 3D digital dental scans and treatment simulation outcomes, showcasing pre-surgical virtual setups.",
    alternates: {
      canonical: "https://nhakhoatre.vn/view-3d",
    },
  };
}

export default function Page() {
  return <View3dPage />;
}

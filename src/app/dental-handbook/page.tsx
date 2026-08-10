import type { Metadata } from 'next';
import BlogIndex from './DentalHandbookClient';

type Props = {
  params: Promise<{}>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const isVN = resolvedSearchParams.lang === "VN";
  return {
    title: isVN ? "Cẩm nang Nha khoa & Tin tức Y tế | Dental NKT" : "Dental Handbook & Patient Travel Guides | Dental NKT",
    description: isVN ? "Cập nhật kiến thức nha khoa, hướng dẫn du lịch y tế tại Hà Nội và thông tin bảo hành từ Nha khoa NKT." : "Read the latest dental advice, tourism planning guides, and implant/veneer technology reviews from Dental NKT.",
    alternates: {
      canonical: "https://nhakhoatre.vn/dental-handbook",
    },
  };
}

export default function Page() {
  return <BlogIndex />;
}

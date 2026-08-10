import type { Metadata } from 'next';
import EquipmentPage from './EquipmentClient';

type Props = {
  params: Promise<{}>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const isVN = resolvedSearchParams.lang === "VN";
  return {
    title: isVN ? "Trang thiết bị & Công nghệ hiện đại | Dental NKT" : "State-of-the-Art Dental Technology & Equipment | Dental NKT",
    description: isVN ? "Tìm hiểu hệ thống trang thiết bị công nghệ hiện đại bậc nhất tại Dental NKT giúp điều trị nha khoa chính xác, an toàn." : "Discover our clinical technology in Hanoi: 3D Cone Beam CT scan, Modjaw motion tracker, digital CAD/CAM milling lab, and sterile surgical suites.",
    alternates: {
      canonical: "https://nhakhoatre.vn/equipment",
    },
  };
}

export default function Page() {
  return <EquipmentPage />;
}

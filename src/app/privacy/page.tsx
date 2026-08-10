import type { Metadata } from 'next';
import PrivacyPage from './PrivacyClient';

type Props = {
  params: Promise<{}>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const isVN = resolvedSearchParams.lang === "VN";
  return {
    title: isVN ? "Chính sách Bảo mật thông tin | Dental NKT" : "Privacy Policy | Dental NKT Clinic",
    description: isVN ? "Chính sách bảo vệ quyền riêng tư và thông tin y tế của khách hàng tại phòng khám nha khoa Dental NKT." : "Read the Privacy Policy of Dental NKT, outlining how we collect, store, and protect patient information and medical records.",
    alternates: {
      canonical: "https://nhakhoatre.vn/privacy",
    },
  };
}

export default function Page() {
  return <PrivacyPage />;
}

import type { Metadata } from 'next';
import ContactPage from './ContactClient';

type Props = {
  params: Promise<{}>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const isVN = resolvedSearchParams.lang === "VN";
  return {
    title: isVN ? "Liên hệ đặt lịch khám & Tư vấn | Dental NKT" : "Contact & Book Free Dental Assessment | Dental NKT",
    description: isVN ? "Liên hệ ngay phòng khám Dental NKT tại Hà Nội để được tư vấn lộ trình và nhận báo giá trọn gói miễn phí." : "Contact Dental NKT Clinic Hanoi. Book a free online consultation, upload your OPG X-ray, and plan your dental holiday.",
    alternates: {
      canonical: "https://nhakhoatre.vn/contact",
    },
  };
}

export default function Page() {
  return <ContactPage />;
}

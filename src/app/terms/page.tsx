import type { Metadata } from 'next';
import TermsPage from './TermsClient';

type Props = {
  params: Promise<{}>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const isVN = resolvedSearchParams.lang === "VN";
  return {
    title: isVN ? "Điều khoản Sử dụng dịch vụ | Dental NKT" : "Terms & Conditions | Dental NKT Clinic",
    description: isVN ? "Các điều khoản và điều kiện sử dụng dịch vụ khám chữa bệnh tại nha khoa Dental NKT." : "Read the Terms & Conditions governing clinical appointments, payments, and medical travel packages at Dental NKT.",
    alternates: {
      canonical: "https://nhakhoatre.vn/terms",
    },
  };
}

export default function Page() {
  return <TermsPage />;
}

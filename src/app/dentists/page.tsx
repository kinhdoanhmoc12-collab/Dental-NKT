import type { Metadata } from 'next';
import DentistsPage from './DentistsClient';

type Props = {
  params: Promise<{}>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const isVN = resolvedSearchParams.lang === "VN";
  return {
    title: isVN ? "Đội ngũ Bác sĩ Nha khoa Chuyên môn cao | Dental NKT" : "Meet Our Expert Dental Specialists | Dental NKT Hanoi",
    description: isVN ? "Gặp gỡ đội ngũ bác sĩ nha khoa tu nghiệp tại Đức, chuyên sâu Implant, Chỉnh nha và Thẩm mỹ nụ cười tại Dental NKT." : "Consult our team of dental experts in Hanoi. Specialized in Implants, Orthodontics, and Cosmetic dentistry with international training.",
    alternates: {
      canonical: "https://nhakhoatre.vn/dentists",
    },
  };
}

export default function Page() {
  return <DentistsPage />;
}

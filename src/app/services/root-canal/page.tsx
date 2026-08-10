import type { Metadata } from "next";
import RootCanalClient from "./RootCanalClient";

type Props = {
  params: Promise<{}>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const isVN = resolvedSearchParams.lang === "VN";
  return {
    title: isVN ? "Điều trị tủy răng (Root Canal) | Dental NKT" : "Microscopic Root Canal Therapy Hanoi | Save Your Natural Teeth Vietnam",
    description: isVN ? "Dịch vụ điều trị tủy răng chuyên sâu dưới kính hiển vi tại DentalNKT giúp loại bỏ ổ nhiễm trùng triệt để và bảo tồn tối đa cấu trúc răng thật tự nhiên." : "Get precise microscopic root canal treatment at DentalNKT Clinic Hanoi. Eliminate pain and infections with painless endodontic therapy. Affordable rates.",
    alternates: {
      canonical: "https://nhakhoatre.vn/services/root-canal",
    },
    openGraph: {
      title: isVN ? "Điều trị tủy răng (Root Canal) | Dental NKT" : "Microscopic Root Canal Therapy Hanoi | Save Your Natural Teeth Vietnam",
      description: isVN ? "Dịch vụ điều trị tủy răng chuyên sâu dưới kính hiển vi tại DentalNKT giúp loại bỏ ổ nhiễm trùng triệt để và bảo tồn tối đa cấu trúc răng thật tự nhiên." : "Get precise microscopic root canal treatment at DentalNKT Clinic Hanoi. Eliminate pain and infections with painless endodontic therapy. Affordable rates.",
      url: "https://nhakhoatre.vn/services/root-canal",
      type: "website",
    }
  };
}

export default function Page() {
  return <RootCanalClient />;
}

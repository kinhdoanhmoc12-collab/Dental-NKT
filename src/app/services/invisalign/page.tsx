import type { Metadata } from "next";
import InvisalignClient from "./InvisalignClient";

type Props = {
  params: Promise<{}>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const isVN = resolvedSearchParams.lang === "VN";
  return {
    title: isVN ? "Niềng răng Invisalign (Khay trong suốt) | Dental NKT" : "Invisalign Clear Aligners Hanoi | Remote Orthodontics Vietnam",
    description: isVN ? "Niềng răng Invisalign phối hợp từ xa tại DentalNKT giúp bệnh nhân tiết kiệm thời gian. Khởi động tại Việt Nam và tiếp tục tự điều chỉnh tại Úc." : "Straighten your teeth with Invisalign clear aligners in Hanoi. Save up to 70% with remote check-ins. Start treatment in Vietnam and monitor progress from Australia.",
    alternates: {
      canonical: "https://nhakhoatre.vn/services/invisalign",
    },
    openGraph: {
      title: isVN ? "Niềng răng Invisalign (Khay trong suốt) | Dental NKT" : "Invisalign Clear Aligners Hanoi | Remote Orthodontics Vietnam",
      description: isVN ? "Niềng răng Invisalign phối hợp từ xa tại DentalNKT giúp bệnh nhân tiết kiệm thời gian. Khởi động tại Việt Nam và tiếp tục tự điều chỉnh tại Úc." : "Straighten your teeth with Invisalign clear aligners in Hanoi. Save up to 70% with remote check-ins. Start treatment in Vietnam and monitor progress from Australia.",
      url: "https://nhakhoatre.vn/services/invisalign",
      type: "website",
    }
  };
}

export default function Page() {
  return <InvisalignClient />;
}

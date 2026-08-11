import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DoctorDetailPage from './DentistDetailClient';
import { DOCTORS_DATA } from '../../../data/doctors';

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const id = resolvedParams.id;
  const isVN = resolvedSearchParams.lang === "VN";
  
  // Find doctor by id or slug
  const doctor = Object.values(DOCTORS_DATA).find(
    (d) => d.id === id || d.slugs.includes(id)
  );

  if (!doctor) {
    return {
      title: "Doctor Not Found | Dental NKT",
    };
  }

  const name = isVN ? doctor.nameVN : doctor.nameEN;
  const role = isVN ? doctor.roleVN : doctor.roleEN;
  
  return {
    title: `${name} | ${role} | Dental NKT`,
    description: isVN ? doctor.taglineVN : doctor.taglineEN,
    alternates: {
      canonical: `https://nhakhoatre.vn/dentists/${id}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  // Find doctor by id or slug
  const doctor = Object.values(DOCTORS_DATA).find(
    (d) => d.id === id || d.slugs.includes(id)
  );

  if (!doctor) {
    notFound();
  }

  return <DoctorDetailPage />;
}

import type { Metadata } from 'next';
import BlogPostDetail from './BlogPostDetailClient';
import { blogPosts } from '../../../data/blogPosts';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const slug = resolvedParams.slug;
  const isVN = resolvedSearchParams.lang === "VN";
  
  // Find post in static data
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Article Not Found | Dental NKT",
    };
  }

  const title = isVN ? post.titleVN : post.titleEN;
  const description = isVN ? post.excerptVN : post.excerptEN;

  return {
    title: `${title} | Dental NKT`,
    description: description,
    alternates: {
      canonical: `https://nhakhoatre.vn/dental-handbook/${slug}`,
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const slug = resolvedParams.slug;
  const isVN = resolvedSearchParams.lang === "VN";
  
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <BlogPostDetail />;
  }

  const title = isVN ? post.titleVN : post.titleEN;
  const description = isVN ? post.excerptVN : post.excerptEN;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": isVN ? "Bác sĩ Đặng" : "Dr. Dang",
      "jobTitle": isVN ? "Bác sĩ Trưởng khoa" : "Head Dentist",
      "worksFor": {
        "@type": "MedicalBusiness",
        "name": "Dental NKT",
        "url": "https://nhakhoatre.vn"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dental NKT",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nhakhoatre.vn/icon.jpg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://nhakhoatre.vn/dental-handbook/${slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostDetail />
    </>
  );
}

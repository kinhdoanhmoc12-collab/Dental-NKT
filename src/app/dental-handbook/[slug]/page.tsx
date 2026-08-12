import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostDetail from './BlogPostDetailClient';
import { blogPosts } from '../../../data/blogPosts';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
};

async function getPost(slug: string) {
  // 1. Check static data
  const staticPost = blogPosts.find((p) => p.slug === slug);
  if (staticPost) {
    return staticPost;
  }

  // 2. Check API
  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
    const res = await fetch(`${apiBaseUrl}/blog/${slug}`, {
      next: { revalidate: 60 } // cache for 60 seconds
    });
    
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) {
        return data.data;
      }
    }
  } catch (error) {
    console.error(`Failed to fetch dynamic post "${slug}" from backend API:`, error);
  }

  return null;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const slug = resolvedParams.slug;
  const isVN = resolvedSearchParams.lang === "VN";
  const post = await getPost(slug);
  const isScheduled = post?.date ? new Date(post.date).getTime() > new Date().getTime() : false;
  
  if (!post || isScheduled) {
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
  
  const post = await getPost(slug);
  const isScheduled = post?.date ? new Date(post.date).getTime() > new Date().getTime() : false;

  if (!post || isScheduled) {
    notFound();
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
      <BlogPostDetail initialPost={post} />
    </>
  );
}

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

export default function Page() {
  return <BlogPostDetail />;
}

import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://nhakhoatre.vn";

  // 1. Main navigation routes
  const routes = [
    "",
    "/services",
    "/dental-costs",
    "/dental-handbook",
    "/equipment",
    "/warranty-policy",
    "/contact",
    "/privacy",
    "/terms",
    "/view-3d",
    "/dentists"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Service details sub-routes
  const services = [
    "implants",
    "veneers",
    "allon4",
    "allon6",
    "crowns",
    "bridges",
    "smile-makeover",
    "full-mouth-reconstruction",
    "teeth-whitening",
    "root-canal",
    "invisalign",
    "dentures"
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 3. Static blog handbook articles
  const staticBlogSlugs = [
    "hanoi-dental-tourism-guide",
    "implants-vietnam-vs-australia",
    "minimal-prep-veneers",
    "smilecare-global-warranty"
  ];

  const staticBlogEntries = staticBlogSlugs.map((post) => ({
    url: `${baseUrl}/dental-handbook/${post}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 4. Doctor profiles routes
  const doctors = [
    "dr-nguyen-thi-thuy-hang",
    "dr-nguyen-huy-hoang",
    "dr-pham-xuan-dang",
    "dr-le-thi-nhat-minh",
    "dr-nguyen-thu-hoai"
  ].map((docSlug) => ({
    url: `${baseUrl}/dentists/${docSlug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 5. Fetch dynamic blog posts from database API
  let dynamicBlogPosts: any[] = [];
  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
    const res = await fetch(`${apiBaseUrl}/blog`, {
      next: { revalidate: 3600 } // cache for 1 hour
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) {
        // filter out static slugs to avoid duplication
        const dbPosts = data.data.filter((post: any) => !staticBlogSlugs.includes(post.slug));
        
        dynamicBlogPosts = dbPosts.map((post: any) => {
          const postDate = post.date ? new Date(post.date) : new Date();
          return {
            url: `${baseUrl}/dental-handbook/${post.slug}`,
            lastModified: postDate,
            changeFrequency: "monthly" as const,
            priority: 0.6,
          };
        });
      }
    }
  } catch (error) {
    console.error("Failed to fetch dynamic posts for sitemap.xml:", error);
  }

  return [...routes, ...services, ...staticBlogEntries, ...doctors, ...dynamicBlogPosts];
}

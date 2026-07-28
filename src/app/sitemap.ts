import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nhakhoatre.vn";

  // Main navigation routes
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

  // Service details sub-routes
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

  // Blog handbook static articles
  const blogPosts = [
    "hanoi-dental-tourism-guide",
    "implants-vietnam-vs-australia",
    "minimal-prep-veneers",
    "smilecare-global-warranty"
  ].map((post) => ({
    url: `${baseUrl}/dental-handbook/${post}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...services, ...blogPosts];
}

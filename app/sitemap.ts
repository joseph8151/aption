import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { studyGuides } from "@/data/studyGuides";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/this-month",
    "/category/topik-eps",
    "/study-guide",
    "/consult",
    "/about",
    "/faq",
    "/guide",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((p) => ({
    url: `${siteConfig.siteUrl}/products/${p.slug}`,
    lastModified: new Date(),
  }));

  const studyGuideRoutes = studyGuides.map((g) => ({
    url: `${siteConfig.siteUrl}/study-guide/${g.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes, ...studyGuideRoutes];
}

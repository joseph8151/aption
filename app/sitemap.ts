import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
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

  return [...staticRoutes, ...productRoutes];
}

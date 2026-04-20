// app/sitemap.ts
import { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eliana-zaia.com";

  const staticPages = [
    "",
    "/productos",
    "/para-empresas",
    "/para-empresas/maquila",
    "/para-empresas/distribucion",
    "/nosotros",
    "/grupo-radici",
    "/donde-comprar",
    "/contacto",
    "/quiero-ser-proveedor",
    "/trabaja-con-nosotros",
    "/blog",
  ];

  const productPages = PRODUCTS.map((p) => `/productos/${p.id}`);
  const blogPages = getAllPosts().map((p) => `/blog/${p.slug}`);

  const allPages = [...staticPages, ...productPages, ...blogPages];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/productos/") ? 0.8 : 0.6,
  }));
}

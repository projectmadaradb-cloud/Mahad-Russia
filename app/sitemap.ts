import type { MetadataRoute } from "next";
import matrixData from "@/data/matrix.json";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Static routes (core pages)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/o-nas`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/komplaens`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/uslugi/stroitelstvo`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/uslugi/logistika`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/rabotodatelyam`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/rabotodatelyam/autstaffing-stroiteley-ceny`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/rabotodatelyam/nanyat-brigadu-svarshchikov`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/rabotodatelyam/alternativa-migrantam-sng`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Dynamic routes (Phase 1: 50 pages)
  const dynamicRoutes: MetadataRoute.Sitemap = [];

  if (matrixData.active_phase) {
    let pageCount = 0;
    
    for (const trade of matrixData.trades) {
      for (const city of matrixData.cities) {
        if (pageCount >= matrixData.page_build_limit) break;

        dynamicRoutes.push({
          url: `${siteUrl}/uslugi/${trade.category}/${trade.slug}/${city.slug}`,
          lastModified,
          changeFrequency: "weekly",
          priority: 0.85,
        });

        pageCount++;
      }
      if (pageCount >= matrixData.page_build_limit) break;
    }
  }

  return [...staticRoutes, ...dynamicRoutes];
}

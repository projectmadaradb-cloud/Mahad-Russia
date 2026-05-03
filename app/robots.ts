import type { MetadataRoute } from "next";

// NOTE: /robots.txt is served by app/robots.txt/route.ts (Route Handler).
// This metadata export is kept to satisfy Next.js's metadata-route-loader
// which expects a default robots() export when a robots.txt folder exists.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";

export default function robots(): MetadataRoute.Robots {
  const isProduction =
    process.env.VERCEL_ENV === "production" ||
    (process.env.NODE_ENV === "production" && !siteUrl.includes("staging"));

  if (!isProduction) {
    return {
      rules: { userAgent: "*", disallow: "/" },
      sitemap: `${siteUrl}/sitemap.xml`,
      host: siteUrl,
    };
  }

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
      { userAgent: "Yandex", allow: "/", disallow: ["/api/", "/_next/"] },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}

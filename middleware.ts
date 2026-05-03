import { NextRequest, NextResponse } from "next/server";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadmanpowers.ru";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/robots.txt") {
    const isProduction =
      process.env.VERCEL_ENV === "production" ||
      (process.env.NODE_ENV === "production" && !siteUrl.includes("staging"));

    const body = isProduction
      ? `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

User-agent: Yandex
Allow: /
Disallow: /api/
Disallow: /_next/
Clean-param: utm_source&utm_medium&utm_campaign&utm_term&utm_content

Sitemap: ${siteUrl}/sitemap.xml
Host: ${siteUrl}
`
      : `User-agent: *
Disallow: /

Sitemap: ${siteUrl}/sitemap.xml
Host: ${siteUrl}
`;

    return new NextResponse(body, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=86400",
      },
    });
  }
}

export const config = {
  matcher: "/robots.txt",
};

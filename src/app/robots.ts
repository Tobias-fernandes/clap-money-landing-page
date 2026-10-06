// /robots.txt: production is open to crawlers; Vercel preview deployments
// are closed so they never compete with the real domain in search results.
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";

export default function robots(): MetadataRoute.Robots {
  const isPreview = process.env.VERCEL_ENV !== undefined && process.env.VERCEL_ENV !== "production";
  if (isPreview) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

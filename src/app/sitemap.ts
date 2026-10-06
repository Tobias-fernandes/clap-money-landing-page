// /sitemap.xml: every indexable page of the landing.
import type { MetadataRoute } from "next";
import { LEGAL_UPDATED_AT } from "@/constants/legal";
import { SITE_URL } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/privacidade`, lastModified: new Date(LEGAL_UPDATED_AT), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/termos`, lastModified: new Date(LEGAL_UPDATED_AT), changeFrequency: "yearly", priority: 0.3 },
  ];
}

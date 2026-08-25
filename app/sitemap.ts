import type { MetadataRoute } from "next";
import { locales, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((value) => [value, `${SITE_URL}/${value}`]),
      ),
    },
  }));
}

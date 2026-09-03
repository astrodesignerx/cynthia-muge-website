import type { MetadataRoute } from "next";
import { programmes } from "@/content/programmes";
import { fieldNotes } from "@/content/stories";

const SITE = "https://cynthiamuge.com";

/** Every route the site publishes, built from the content rather than typed. */
export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();

  const pages = [
    { path: "", priority: 1 },
    { path: "/record", priority: 0.9 },
    { path: "/pillars", priority: 0.9 },
    { path: "/parliament", priority: 0.8 },
    { path: "/stories", priority: 0.8 },
    { path: "/boso", priority: 0.7 },
    { path: "/boso/football", priority: 0.5 },
    { path: "/boso/volleyball", priority: 0.5 },
    { path: "/about", priority: 0.7 },
    { path: "/media", priority: 0.6 },
    { path: "/contact", priority: 0.6 },
  ];

  return [
    ...pages.map((p) => ({
      url: `${SITE}${p.path}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: p.priority,
    })),
    ...programmes.map((p) => ({
      url: `${SITE}/record/${p.slug}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...fieldNotes.map((n) => ({
      url: `${SITE}/stories/${n.slug}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

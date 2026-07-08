import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { ArticleShell } from "@/components/sections/ArticleShell";
import { getJournalSlugs, getJournalEntry } from "@/lib/journal-content";

/**
 * Content-file journal articles. Every `.html` file in `content/journal/`
 * becomes a static, crawlable page here at build time. Hand-written articles
 * that live in their own `app/journal/<slug>/page.tsx` folders take precedence
 * over this dynamic route, so the two systems coexist.
 */

export function generateStaticParams() {
  return getJournalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getJournalEntry(slug);
  if (!entry) return {};
  return pageMeta({
    title: entry.meta.title,
    description: entry.meta.description,
    path: `/journal/${slug}/`,
    type: "article",
    publishedTime: entry.meta.isoDate,
    ...(entry.meta.hero ? { ogImage: entry.meta.hero } : {}),
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getJournalEntry(slug);
  if (!entry) notFound();

  const { meta, html } = entry;
  return (
    <ArticleShell
      slug={slug}
      eyebrow={meta.eyebrow}
      title={meta.title}
      standfirst={meta.standfirst}
      date={meta.date}
      isoDate={meta.isoDate}
      servicesHref={meta.pillar}
      servicesLabel={meta.pillarLabel}
      hero={meta.hero}
      heroAlt={meta.heroAlt}
      html={html}
    />
  );
}

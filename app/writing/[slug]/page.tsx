import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { getWritingEntries, getWritingEntry } from "@/lib/writing";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getWritingEntries().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWritingEntry(slug);

  if (!entry) {
    return {};
  }

  return {
    title: `${entry.title} — Moses Ajila`,
    description: entry.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const entry = getWritingEntry(slug);

  if (!entry) {
    notFound();
  }

  return (
    <main className="article-shell">
      <Link className="article-back" href="/#writing">← All writing</Link>
      <article>
        <header className="article-header">
          <p className="eyebrow">{entry.topic ?? "Writing"}</p>
          <h1>{entry.title}</h1>
          <time dateTime={entry.date}>{entry.date}</time>
        </header>
        <div className="article-body">
          <Markdown>{entry.body}</Markdown>
        </div>
      </article>
    </main>
  );
}

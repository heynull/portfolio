import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { SectionNav } from "@/components/SectionNav";
import { experiences } from "@/lib/portfolio";
import { getPortfolioNavigation } from "@/lib/navigation";
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

  const navigation = getPortfolioNavigation({
    hasExperiences: experiences.length > 0,
    hasWriting: getWritingEntries().length > 0,
  });

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SectionNav items={navigation} linkToHome />
      <main id="main-content" className="article-shell" tabIndex={-1}>
        <Link className="article-back" href="/writing">← All writing</Link>
        <article>
        <header className="article-header">
          <p className="eyebrow">{entry.topic ?? "Writing"}</p>
          <h1>{entry.title}</h1>
          <time dateTime={entry.date}>{entry.date}</time>
        </header>
        {entry.image && entry.imageAlt && (
          <div className="article-cover">
            <Image
              src={entry.image}
              alt={entry.imageAlt}
              fill
              sizes="(max-width: 767px) calc(100vw - 2.5rem), 44rem"
              priority
            />
          </div>
        )}
        <div className="article-body">
          <Markdown>{entry.body}</Markdown>
        </div>
        </article>
      </main>
    </>
  );
}

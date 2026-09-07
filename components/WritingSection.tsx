import Image from "next/image";
import Link from "next/link";
import type { WritingEntry } from "@/types";

export function WritingList({ entries }: { entries: WritingEntry[] }) {
  return (
    <ol className="writing-list">
      {entries.map((entry, index) => (
        <li key={entry.slug}>
          {entry.image && entry.imageAlt && (
            <Link
              className="writing-list__media interactive-media"
              href={`/writing/${entry.slug}`}
              aria-label={`Read ${entry.title}`}
            >
              <Image
                src={entry.image}
                alt={entry.imageAlt}
                fill
                sizes="(max-width: 599px) calc(100vw - 4rem), 38rem"
              />
            </Link>
          )}
          <div className="writing-list__row">
            <span className="writing-list__number">{String(index + 1).padStart(2, "0")}</span>
            <Link className="writing-list__title" href={`/writing/${entry.slug}`}>
              {entry.title}
            </Link>
            <span className="writing-list__meta">
              {entry.topic && <span>{entry.topic}</span>}
              <time dateTime={entry.date}>{entry.date.slice(0, 4)}</time>
            </span>
          </div>
          <p>{entry.excerpt}</p>
        </li>
      ))}
    </ol>
  );
}

export function WritingSection({
  entries,
  archiveHref,
}: {
  entries: WritingEntry[];
  archiveHref?: string;
}) {
  return (
    <section id="writing" className="section" aria-labelledby="writing-heading">
      <header className="section-heading">
        <span className="section-index" aria-hidden="true" />
        <div>
          <h2 id="writing-heading">Writing</h2>
          <p>Essays and notes</p>
        </div>
      </header>

      <WritingList entries={entries} />
      {archiveHref && <Link className="archive-link" href={archiveHref}>View all writing →</Link>}
    </section>
  );
}

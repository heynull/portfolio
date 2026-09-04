import Link from "next/link";
import type { WritingEntry } from "@/types";

export function WritingSection({ entries }: { entries: WritingEntry[] }) {
  return (
    <section id="writing" className="section" aria-labelledby="writing-heading">
      <header className="section-heading">
        <span className="section-index" aria-hidden="true" />
        <div>
          <h2 id="writing-heading">Writing</h2>
          <p>Essays and notes</p>
        </div>
      </header>

      <ol className="writing-list">
          {entries.map((entry, index) => (
            <li key={entry.slug}>
              <Link href={`/writing/${entry.slug}`}>
                <span className="writing-list__number">{String(index + 1).padStart(2, "0")}</span>
                <span className="writing-list__title">{entry.title}</span>
                <span className="writing-list__meta">
                  {entry.topic && <span>{entry.topic}</span>}
                  <time dateTime={entry.date}>{entry.date.slice(0, 4)}</time>
                </span>
              </Link>
              <p>{entry.excerpt}</p>
            </li>
          ))}
      </ol>
    </section>
  );
}

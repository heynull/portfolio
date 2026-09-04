import type { RecommendedReading } from "@/types";

export function ReadingSection({ entries }: { entries: RecommendedReading[] }) {
  return (
    <section id="reading" className="section" aria-labelledby="reading-heading">
      <header className="section-heading">
        <span className="section-index" aria-hidden="true" />
        <div>
          <h2 id="reading-heading">Recommended Reading</h2>
          <p>External work worth returning to</p>
        </div>
      </header>

      <ol className="reading-list">
        {entries.map((entry, index) => (
          <li key={entry.url}>
            <a href={entry.url} target="_blank" rel="noopener noreferrer">
              <span className="reading-list__number">{String(index + 1).padStart(2, "0")}</span>
              <span>
                <strong>{entry.title}</strong>
                <small>{entry.author}</small>
              </span>
              <span className="reading-list__arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

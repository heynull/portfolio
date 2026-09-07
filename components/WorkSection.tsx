import Image from "next/image";
import type { WorkEntry } from "@/types";

export function WorkSection({ entries }: { entries: WorkEntry[] }) {
  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <header className="section-heading">
        <span className="section-index" aria-hidden="true" />
        <div>
          <h2 id="work-heading">Work</h2>
          <p>Current and professional work</p>
        </div>
      </header>

      <div className="work-list">
        {entries.map((entry) => (
          <article className="work-entry" key={entry.title}>
            {entry.image && entry.imageAlt && (
              entry.website ? (
                <a
                  className="work-entry__media interactive-media"
                  href={entry.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit the ${entry.title} website`}
                >
                  <Image
                    src={entry.image}
                    alt={entry.imageAlt}
                    fill
                    preload
                    unoptimized
                    sizes="(max-width: 599px) calc(100vw - 2.5rem), 25rem"
                  />
                </a>
              ) : (
                <div className="work-entry__media">
                  <Image
                    src={entry.image}
                    alt={entry.imageAlt}
                    fill
                    preload
                    unoptimized
                    sizes="(max-width: 599px) calc(100vw - 2.5rem), 25rem"
                  />
                </div>
              )
            )}
            <div className="work-entry__body">
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>
              {entry.website && (
                <a className="arrow-link" href={entry.website} target="_blank" rel="noopener noreferrer">
                  Visit website <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import type { Experience } from "@/types";

export function ExperiencesSection({ entries }: { entries: Experience[] }) {
  return (
    <section id="experiences" className="section" aria-labelledby="experiences-heading">
      <header className="section-heading">
        <span className="section-index" aria-hidden="true" />
        <div>
          <h2 id="experiences-heading">Experiences</h2>
          <p>Field notes, programs, places, and community</p>
        </div>
      </header>

      <ol className="experience-list">
          {entries.map((entry) => (
            <li key={entry.title}>
              <article className="experience">
                {entry.image && (
                  <Image
                    src={entry.image.src}
                    alt={entry.image.alt}
                    width={entry.image.width}
                    height={entry.image.height}
                  />
                )}
                <div>
                  <p className="experience__meta">
                    <span>{entry.type}</span>
                    {entry.date && <time>{entry.date}</time>}
                  </p>
                  <h3>
                    {entry.externalUrl ? (
                      <a href={entry.externalUrl} target="_blank" rel="noopener noreferrer">
                        {entry.title} <span aria-hidden="true">↗</span>
                      </a>
                    ) : entry.title}
                  </h3>
                  {entry.organization && <p className="experience__place">{entry.organization}</p>}
                  <p>{entry.description}</p>
                </div>
              </article>
            </li>
          ))}
      </ol>
    </section>
  );
}

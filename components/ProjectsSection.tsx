import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/types";

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.24c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.29-5.28-1.29-5.28-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.96 10.96 0 0 1 5.76 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.06.79 2.14v3.18c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

export function ProjectsList({ entries }: { entries: Project[] }) {
  return (
    <div className="project-grid">
      {entries.map((project) => (
        <article className="project" key={project.title}>
          {project.image && project.imageAlt !== undefined && project.websiteUrl && (
            <a
              className="project__media interactive-media"
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit the ${project.title} live website`}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1199px) 40vw, 34rem"
              />
            </a>
          )}
          <div className="project__body">
            <div className="project__heading">
              <h3>{project.title}</h3>
              <ul className="project__links" aria-label={`${project.title} links`}>
                <li>
                  <span
                    className="project__link project__link--unavailable"
                    aria-label="GitHub repository link is not currently published"
                    title="GitHub repository link is not currently published"
                  >
                    <GitHubMark />
                  </span>
                </li>
                {project.websiteUrl && (
                  <li>
                    <a
                      className="project__link"
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit the ${project.title} live website`}
                      title="Visit live website"
                    >
                      <ExternalLink aria-hidden="true" />
                    </a>
                  </li>
                )}
              </ul>
            </div>
            {project.description && <p>{project.description}</p>}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ProjectsSection({
  entries,
  archiveHref,
}: {
  entries: Project[];
  archiveHref?: string;
}) {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <header className="section-heading">
        <span className="section-index" aria-hidden="true" />
        <div>
          <h2 id="projects-heading">Projects</h2>
          <p>Selected things I have built</p>
        </div>
      </header>

      <ProjectsList entries={entries} />
      {archiveHref && <a className="archive-link" href={archiveHref}>View all projects →</a>}
    </section>
  );
}

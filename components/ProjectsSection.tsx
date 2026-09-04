import Image from "next/image";
import type { Project } from "@/types";

export function ProjectsSection({ entries }: { entries: Project[] }) {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <header className="section-heading">
        <span className="section-index" aria-hidden="true" />
        <div>
          <h2 id="projects-heading">Projects</h2>
          <p>Selected things I have built</p>
        </div>
      </header>

      <div className="project-grid">
        {entries.map((project) => (
          <article className="project" key={project.title}>
            {project.image && project.imageAlt !== undefined && (
              <div className="project__media">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </div>
            )}
            <div className="project__body">
              <h3>{project.title}</h3>
              {project.description && <p>{project.description}</p>}
              {(project.githubUrl || project.websiteUrl) && (
                <ul className="project__links" aria-label={`${project.title} links`}>
                  {project.githubUrl && (
                    <li>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        GitHub <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  )}
                  {project.websiteUrl && (
                    <li>
                      <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                        Website <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  )}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import { ExperiencesSection } from "@/components/ExperiencesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ReadingSection } from "@/components/ReadingSection";
import { SectionNav } from "@/components/SectionNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WorkSection } from "@/components/WorkSection";
import { WritingSection } from "@/components/WritingSection";
import {
  experiences,
  projects,
  recommendedReading,
  work,
} from "@/lib/portfolio";
import { getWritingEntries } from "@/lib/writing";
import { getPortfolioNavigation } from "@/lib/navigation";

const HOMEPAGE_PROJECT_LIMIT = 6;
const HOMEPAGE_EXPERIENCE_LIMIT = 5;
const HOMEPAGE_WRITING_LIMIT = 3;

export default function Home() {
  const writing = getWritingEntries();
  const navigation = getPortfolioNavigation({
    hasExperiences: experiences.length > 0,
    hasWriting: writing.length > 0,
  });

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SectionNav items={navigation} />

      <main id="main-content" tabIndex={-1}>
        <header id="top" className="intro">
          <p className="eyebrow">Portfolio</p>
          <h1>Moses Ajila</h1>
          <p className="intro__role">Product developer</p>
        </header>

        <WorkSection entries={work} />
        <ProjectsSection
          entries={projects.slice(0, HOMEPAGE_PROJECT_LIMIT)}
          archiveHref={projects.length > HOMEPAGE_PROJECT_LIMIT ? "/projects" : undefined}
        />
        {experiences.length > 0 && (
          <ExperiencesSection
            entries={experiences.slice(0, HOMEPAGE_EXPERIENCE_LIMIT)}
            archiveHref={experiences.length > HOMEPAGE_EXPERIENCE_LIMIT ? "/experiences" : undefined}
          />
        )}
        {writing.length > 0 && (
          <WritingSection
            entries={writing.slice(0, HOMEPAGE_WRITING_LIMIT)}
            archiveHref={writing.length > HOMEPAGE_WRITING_LIMIT ? "/writing" : undefined}
          />
        )}
        <ReadingSection entries={recommendedReading} />
      </main>

      <SiteFooter />
    </>
  );
}

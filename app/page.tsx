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
import type { NavigationItem } from "@/types";

export default function Home() {
  const writing = getWritingEntries();
  const navigation: NavigationItem[] = [
    { id: "work", label: "Work" },
    { id: "projects", label: "Projects" },
    ...(experiences.length > 0
      ? [{ id: "experiences", label: "Experiences" }]
      : []),
    ...(writing.length > 0 ? [{ id: "writing", label: "Writing" }] : []),
    { id: "reading", label: "Reading" },
    { id: "contact", label: "Contact" },
  ];

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
        <ProjectsSection entries={projects} />
        {experiences.length > 0 && <ExperiencesSection entries={experiences} />}
        {writing.length > 0 && <WritingSection entries={writing} />}
        <ReadingSection entries={recommendedReading} />
      </main>

      <SiteFooter />
    </>
  );
}

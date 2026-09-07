import type { Metadata } from "next";
import Link from "next/link";
import { ProjectsList } from "@/components/ProjectsSection";
import { SectionNav } from "@/components/SectionNav";
import { experiences, projects } from "@/lib/portfolio";
import { getPortfolioNavigation } from "@/lib/navigation";
import { getWritingEntries } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Projects — Moses Ajila",
  description: "Selected things I have built.",
};

export default function ProjectsPage() {
  const navigation = getPortfolioNavigation({
    hasExperiences: experiences.length > 0,
    hasWriting: getWritingEntries().length > 0,
  });

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SectionNav items={navigation} linkToHome />
      <main id="main-content" className="index-shell" tabIndex={-1}>
        <Link className="index-back" href="/#projects">← Back to portfolio</Link>
        <header className="index-header">
          <h1>Projects</h1>
          <p>Selected things I have built</p>
        </header>
        <ProjectsList entries={projects} />
      </main>
    </>
  );
}

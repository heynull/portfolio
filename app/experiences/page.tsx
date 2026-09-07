import type { Metadata } from "next";
import Link from "next/link";
import { ExperiencesList } from "@/components/ExperiencesSection";
import { SectionNav } from "@/components/SectionNav";
import { experiences } from "@/lib/portfolio";
import { getPortfolioNavigation } from "@/lib/navigation";
import { getWritingEntries } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Experiences — Moses Ajila",
  description: "Field notes, programs, places, and community.",
};

export default function ExperiencesPage() {
  const navigation = getPortfolioNavigation({
    hasExperiences: experiences.length > 0,
    hasWriting: getWritingEntries().length > 0,
  });

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SectionNav items={navigation} linkToHome />
      <main id="main-content" className="index-shell" tabIndex={-1}>
        <Link className="index-back" href="/#experiences">← Back to portfolio</Link>
        <header className="index-header">
          <h1>Experiences</h1>
          <p>Field notes, programs, places, and community</p>
        </header>
        <ExperiencesList entries={experiences} />
      </main>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { SectionNav } from "@/components/SectionNav";
import { WritingList } from "@/components/WritingSection";
import { experiences } from "@/lib/portfolio";
import { getPortfolioNavigation } from "@/lib/navigation";
import { getWritingEntries } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Writing — Moses Ajila",
  description: "Essays and notes.",
};

export default function WritingPage() {
  const writing = getWritingEntries();
  const navigation = getPortfolioNavigation({
    hasExperiences: experiences.length > 0,
    hasWriting: writing.length > 0,
  });

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SectionNav items={navigation} linkToHome />
      <main id="main-content" className="index-shell" tabIndex={-1}>
        <Link className="index-back" href="/#writing">← Back to portfolio</Link>
        <header className="index-header">
          <h1>Writing</h1>
          <p>Essays and notes</p>
        </header>
        <WritingList entries={writing} />
      </main>
    </>
  );
}

import type { NavigationItem } from "@/types";

export function getPortfolioNavigation({
  hasExperiences,
  hasWriting,
}: {
  hasExperiences: boolean;
  hasWriting: boolean;
}): NavigationItem[] {
  return [
    { id: "work", label: "Work" },
    { id: "projects", label: "Projects" },
    ...(hasExperiences ? [{ id: "experiences", label: "Experiences" }] : []),
    ...(hasWriting ? [{ id: "writing", label: "Writing" }] : []),
    { id: "reading", label: "Reading" },
    { id: "contact", label: "Contact" },
  ];
}

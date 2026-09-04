import type {
  Experience,
  Project,
  RecommendedReading,
  WorkEntry,
} from "@/types";

export const work: WorkEntry[] = [
  {
    title: "Fiysam Energy",
    description:
      "Fiysam Energy Services delivers end-to-end engineering, procurement, and construction solutions for the oil, gas, and power sectors across West Africa.",
    website: "https://fiysamenergy.com",
  },
];

export const projects: Project[] = [
  {
    title: "Fiysam Energy website",
    websiteUrl: "https://fiysamenergy.com",
  },
  { title: "Fiysam Studio" },
  { title: "Miva Church" },
  { title: "Shigoshot" },
];

export const experiences: Experience[] = [];

export const recommendedReading: RecommendedReading[] = [
  {
    title:
      "Killed by Google: a list of discontinued Google services, products, devices, and apps",
    author: "Cody Ogden",
    url: "https://killedbygoogle.com/",
  },
  {
    title: "Brief History of Scaling Uber",
    author: "Josh Clemm",
    url: "https://highscalability.com/brief-history-of-scaling-uber/",
  },
  {
    title: "Essays by Paul Graham",
    author: "Paul Graham",
    url: "https://paulgraham.com/",
  },
];

export const socialLinks = [
  { label: "GitHub", url: "https://github.com/heynull" },
  { label: "LinkedIn", url: "https://linkedin.com/in/ajila-moses" },
  { label: "X", url: "https://twitter.com/ajilamoses" },
] as const;

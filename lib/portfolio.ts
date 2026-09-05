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
    description:
      "A corporate website for an infrastructure company delivering integrated power, water, gas, and EPC solutions across Nigeria and West Africa.",
    image: "/images/projects/fiysam-energy.webp",
    imageAlt: "Fiysam Energy website homepage",
    websiteUrl: "https://fiysam-energy.vercel.app/",
  },
  {
    title: "Fiysam Studio",
    description:
      "A product studio website for a Lagos-based team building useful software through product strategy, UI/UX design, development, and AI/data solutions.",
    image: "/images/projects/fiysam-studio.webp",
    imageAlt: "Fiysam Studio website homepage",
    websiteUrl: "https://fiysam-studio.vercel.app/",
  },
  {
    title: "Miva Church",
    description:
      "A digital home for Redemption Faith Church, Praise House — bringing together service information, ministries, resources, church life, and ways to connect.",
    image: "/images/projects/miva-church.webp",
    imageAlt: "Redemption Faith Church Praise House website homepage",
    websiteUrl: "https://miva-church.vercel.app/",
  },
  {
    title: "ShigoShot",
    description:
      "A photography portfolio showcasing portrait, lifestyle, wedding, editorial, and Afrofuturist work through an image-led visual experience.",
    image: "/images/projects/shigoshot.webp",
    imageAlt: "ShigoShot photography website homepage",
    websiteUrl: "https://shigoshot.vercel.app/",
  },
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

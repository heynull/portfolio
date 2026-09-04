export interface WorkEntry {
  title: string;
  description: string;
  website?: string;
}

export interface Project {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  githubUrl?: string;
  websiteUrl?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
}

export interface Experience {
  title: string;
  type: string;
  date?: string;
  organization?: string;
  description: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  externalUrl?: string;
}

export interface RecommendedReading {
  title: string;
  author: string;
  url: string;
}

export interface WritingEntry {
  title: string;
  slug: string;
  date: string;
  topic?: string;
  excerpt: string;
  body: string;
}

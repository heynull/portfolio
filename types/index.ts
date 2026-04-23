export interface Project {
  id: string | number;
  title: string;
  category: string;
  description?: string;
  imageUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  email: string;
  projectCount: number;
}

export type ProjectCategory = 'All' | 'Web Apps' | 'Branding' | 'Mobile' | '3D/Motion';

export interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  tagline: string;
  description: string;
  fullDescription: string;
  coverImage: string;
  galleryImages: string[];
  client: string;
  year: string;
  role: string;
  duration: string;
  tags: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: string;
  deliverables: string[];
  tags: string[];
}

export interface TimelineItem {
  id: string;
  type: 'experience' | 'education';
  title: string;
  organization: string;
  location: string;
  period: string;
  status?: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  category: string;
  experienceYears: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface StatMetric {
  value: string;
  label: string;
  sublabel: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

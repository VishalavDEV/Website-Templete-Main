export type NavItem = 'home' | 'about' | 'experience' | 'skills' | 'projects' | 'education' | 'blog' | 'contact';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedDescription?: string;
  image: string;
  tags: string[];
  techStack: ('react' | 'nodejs' | 'mongodb' | 'tailwind' | 'typescript' | 'nextjs' | 'express')[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  highlights?: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'others';
  iconKey: string;
  proficiency?: number;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  tags: string[];
  content: string;
}

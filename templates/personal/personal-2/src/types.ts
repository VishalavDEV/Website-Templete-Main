export type ProjectCategory = 'ALL' | 'AI' | 'ML' | 'GENERATIVE AI' | 'COMPUTER VISION' | 'WEB';

export type ProjectStatus = 'LIVE' | 'PROTOTYPE' | 'EXPERIMENT';

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  categories: ProjectCategory[];
  technologies: string[];
  status: ProjectStatus;
  metrics: { label: string; value: string }[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  caseStudy: CaseStudy;
}

export interface CaseStudy {
  problem: string;
  idea: string;
  architecture: {
    title: string;
    description: string;
    nodes: { name: string; type: 'client' | 'api' | 'ml-model' | 'database' | 'queue'; detail: string }[];
  };
  techStack: { category: string; items: string[] }[];
  developmentProcess: string[];
  keyFeatures: { title: string; description: string; icon?: string; iconName?: string }[];
  results: { metric: string; description: string }[];
  challenges: string[];
  whatILearned: string[];
  codeSnippet: {
    language: string;
    fileName: string;
    code: string;
  };
}

export interface TechNode {
  id: string;
  name: string;
  category: 'core' | 'ai-ml' | 'frontend' | 'backend-cloud';
  icon: string;
  description: string;
  proficiency: number;
  experienceYears: string;
  keyUseCases: string[];
  color: string;
}

export interface ExperienceItem {
  id: string;
  year: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  duration: string;
  cgpa: string;
  location: string;
  coursework: string[];
  highlights: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  issuer?: string;
  year: string;
  date?: string;
  category: 'Hackathon' | 'Award' | 'Certification';
  credentialId?: string;
  description: string;
  badgeColor: string;
  skills: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content?: string;
  tags: string[];
}

export interface Article {
  id: string;
  title: string;
  category: 'GENERATIVE AI' | 'COMPUTER VISION' | 'AI AGENTS' | 'MACHINE LEARNING';
  readTime: string;
  date: string;
  summary: string;
  image: string;
  content: string;
  keyTakeaways: string[];
}

export interface Repository {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  updatedAt: string;
  url: string;
  tags: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  source?: 'gemini' | 'local-intelligent';
}

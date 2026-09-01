export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  category: 'NLP & LLM' | 'Healthcare AI' | 'Geospatial AI' | 'Computer Vision';
  githubUrl: string;
  demoUrl: string;
  architectureDetails: {
    modelType: string;
    dataset: string;
    accuracy: string;
    latency: string;
    pipeline: string[];
  };
  visualTheme: 'news' | 'medical' | 'satellite' | 'skeleton';
  status: 'DEPLOYED' | 'PRODUCTION' | 'RESEARCH' | 'OPEN_SOURCE';
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'Core AI/ML' | 'Deep Learning' | 'Engineering' | 'Vision & Data';
  level: number; // 0-100
  connections: string[]; // ids of connected skills
  description: string;
  color: string;
  iconName?: string;
  position: [number, number, number]; // 3D coordinates
}

export interface ExperienceItem {
  id: string;
  year: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  highlight: string;
  details: string[];
  skills: string[];
  metricBadge: string;
}

export type CursorVariant = 'default' | 'hover' | 'view' | 'open' | 'interact' | 'drag' | 'calculate' | 'activate';

export interface CursorState {
  variant: CursorVariant;
  text: string;
}

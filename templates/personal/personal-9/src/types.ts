export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'All' | 'AI' | 'ML' | 'Web' | 'Computer Vision' | 'Generative AI';
  badge: 'LIVE' | 'PROTOTYPE' | 'EXPERIMENT';
  image: string;
  tags: string[];
  githubUrl: string;
  liveDemoUrl: string;
  caseStudyUrl: string;
  overview?: string;
  highlights?: string[];
  metrics?: { label: string; value: string }[];
}

export interface AiExperiment {
  id: string;
  title: string;
  badge: 'LIVE' | 'EXPERIMENT' | 'PROTOTYPE';
  icon: string;
  description: string;
  tags: string[];
  demoType: 'chat' | 'vision' | 'sentiment' | 'recommendation' | 'playground';
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
  period?: string;
  isCurrent?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  badgeType: 'trophy' | 'medal' | 'star' | 'google' | 'microsoft' | 'tensorflow';
  year: string;
  issuer?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  readingTime: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  content?: string;
  author?: string;
  tags?: string[];
  externalUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

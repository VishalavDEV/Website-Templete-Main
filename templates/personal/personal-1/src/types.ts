export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & Generative' | 'FinTech & Web3' | 'Design Systems' | 'Immersive 3D' | 'Enterprise';
  featured: boolean;
  year: string;
  client: string;
  role: string;
  duration: string;
  metrics: { label: string; value: string }[];
  description: string;
  fullStory: string;
  challenge: string;
  solution: string;
  technologies: string[];
  image: string;
  galleryImages: string[];
  liveUrl?: string;
  githubUrl?: string;
  awards?: string[];
  gridSpan?: string; // for asymmetric editorial grid
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    experience: string;
    tags: string[];
    featured?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Advisory';
  logoText: string;
  image: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  techStack: string[];
  highlightMetric?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  image: string;
  estimatedTimeline: string;
  badge: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: 'Award' | 'Hackathon' | 'Publication' | 'Milestone';
  badge: string;
  description: string;
  image: string;
  impactMetric: string;
  linkText?: string;
  linkUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  companyLogo?: string;
  quote: string;
  detailedFeedback: string;
  rating: number;
  projectRelation: string;
  linkedinUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: 'AI & Systems' | 'Design Architecture' | 'Performance' | 'Leadership';
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featured?: boolean;
  trending?: boolean;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Workspace & R&D' | 'Keynotes & Stages' | 'Architecture & Form' | 'Generative Experiments';
  image: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  cameraInfo: string;
  location: string;
  year: string;
  description: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  credentialUrl: string;
  image: string;
  skillsCovered: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  gpaOrHonors: string;
  thesis: string;
  logo: string;
  image: string;
  keyHighlights: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: string;
  priceProject: string;
  popular?: boolean;
  description: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  turnaround: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Process' | 'Technical' | 'Engagement';
}

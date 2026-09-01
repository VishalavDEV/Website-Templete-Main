export type CategoryType = 'All' | 'Branding' | 'Digital' | 'AI' | 'Strategy' | 'Product';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  client: string;
  category: CategoryType;
  year: string;
  image: string;
  heroImage: string;
  galleryImages: string[];
  description: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: {
    label: string;
    value: string;
  }[];
  metrics: string[];
  featured: boolean;
  industry: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
  iconName: string;
  image: string;
  featuredCaseStudyId: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
}

export interface Industry {
  id: string;
  name: string;
  headline: string;
  description: string;
  metrics: string;
  keyProjects: string[];
  icon: string;
  bgImage: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

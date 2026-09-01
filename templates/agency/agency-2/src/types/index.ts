export type ProjectCategory = 'ALL' | 'BRANDING' | 'DIGITAL' | 'WEB' | 'CAMPAIGN' | 'PRODUCT' | 'MOTION';

export interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: string;
  tagline: string;
  services: string[];
  description: string;
  challenge: string;
  approach: string;
  heroImage: string;
  galleryImages: string[];
  accentColor: string;
  results: {
    label: string;
    value: string;
  }[];
  awards?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  featured?: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  deliverables: string[];
  process: {
    phase: string;
    title: string;
    description: string;
  }[];
  accentColor: string;
  icon: string;
  image: string;
  featuredProjects: string[];
  faqs: {
    q: string;
    a: string;
  }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialty: string;
  image: string;
  socials: {
    platform: string;
    url: string;
  }[];
}

export interface Testimonial {
  id: string;
  number: string;
  quote: string;
  client: string;
  role: string;
  company: string;
  project: string;
  image?: string;
}

export interface Client {
  id: string;
  name: string;
  industry: string;
  year: string;
  location: string;
}

export interface Article {
  id: string;
  title: string;
  category: 'STRATEGY' | 'DESIGN' | 'TECHNOLOGY' | 'CULTURE' | 'BRANDING';
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  readTime: string;
  excerpt: string;
  heroImage: string;
  body: string[];
  tags: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProjectInquiry {
  id: string;
  createdAt: string;
  name: string;
  company: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  status: 'RECEIVED' | 'IN_REVIEW' | 'CONTACTED';
}

export interface SearchResultItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'project' | 'service' | 'article' | 'team';
  url: string;
  category?: string;
}

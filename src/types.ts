export type ProjectCategory = 'ALL' | 'BRANDING' | 'DIGITAL' | 'MOTION' | 'PRODUCT';

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: string;
  category: 'BRANDING' | 'DIGITAL' | 'MOTION' | 'PRODUCT';
  tagline: string;
  heroImage: string;
  thumbnailImage: string;
  summary: string;
  challenge: string;
  strategy: string;
  solution: string;
  results: {
    label: string;
    value: string;
    description: string;
  }[];
  servicesProvided: string[];
  techStack: string[];
  liveUrl?: string;
  featured?: boolean;
  galleryImages: {
    url: string;
    caption: string;
    aspectRatio?: 'landscape' | 'portrait' | 'square';
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  nextProjectSlug: string;
}

export interface Service {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  capabilities: string[];
  deliverables: string[];
  timeline: string;
  idealFor: string;
  processHighlights: {
    phase: string;
    detail: string;
  }[];
  heroImage: string;
  featuredProjectSlug: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  projectSlug?: string;
  metric?: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'STRATEGY' | 'DESIGN' | 'ENGINEERING' | 'CULTURE';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  heroImage: string;
  content: string[];
  takeaways: string[];
  tags: string[];
}

export interface ClientLogo {
  id: string;
  name: string;
  industry: string;
  ticker?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  services: string[];
  budget: string;
  timeline: string;
  details: string;
}

export interface ContactSubmissionRecord extends ContactFormData {
  id: string;
  referenceId: string;
  submittedAt: string;
  status: 'Received' | 'In Review' | 'Scheduled';
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

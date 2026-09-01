export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Brand Identity' | 'Digital Experience' | 'Product Design' | 'E-commerce' | 'Creative Campaign';
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  image: string;
  gallery: string[];
  deliverables: string[];
  metrics: { label: string; value: string }[];
  featured: boolean;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
  tagline: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  projectImage?: string;
  projectVisual?: string;
  projectTitle?: string;
  rating?: number;
}

export interface Insight {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string[];
  category: 'Design Systems' | 'Brand Strategy' | 'Digital Products' | 'Future Web';
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  featured: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  image?: string;
  duration?: string;
}

export interface AboutTab {
  id: 'strategy' | 'design' | 'technology';
  label: string;
  title: string;
  description: string;
  points: string[];
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

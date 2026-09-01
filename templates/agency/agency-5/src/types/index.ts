export interface Project {
  slug: string;
  title: string;
  category: 'Branding' | 'Web' | 'App' | 'Product' | 'Experience';
  year: string;
  client: string;
  industry: string;
  tagline: string;
  description: string;
  challenge: string;
  approach: string;
  result: string;
  coverImage: string;
  galleryImages: string[];
  services: string[];
  metrics: { label: string; value: string }[];
  featured?: boolean;
}

export interface Service {
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  methodology: { title: string; desc: string }[];
  stats: { label: string; value: string }[];
  hoverImage: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    dribbble?: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  metric?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  recommended?: boolean;
  ctaText: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: 'Design' | 'Technology' | 'Strategy' | 'AI' | 'Business' | 'Culture';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishDate: string;
  readTime: string;
  excerpt: string;
  coverImage: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      quote?: string;
    }[];
    conclusion: string;
  };
  tags: string[];
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Process' | 'Pricing' | 'Technology';
}

export interface MetricStat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
}

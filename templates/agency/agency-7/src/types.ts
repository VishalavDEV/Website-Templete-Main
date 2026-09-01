export type ThemeMode = 'light' | 'dark';

export type Category = 'All' | 'UI/UX' | 'Product' | 'Branding' | 'Digital' | 'Experimental';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: Category;
  year: string;
  client: string;
  services: string[];
  heroImage: string;
  coverAspect?: string;
  summary: string;
  challenge: string;
  solution: string;
  research: {
    title: string;
    description: string;
    keyInsights: string[];
    userPersona: {
      name: string;
      role: string;
      quote: string;
      avatar: string;
    };
  };
  wireframes: {
    title: string;
    description: string;
    images: {
      url: string;
      caption: string;
      label: string;
    }[];
  };
  uiExploration: {
    title: string;
    description: string;
    colorPalette: { name: string; hex: string }[];
    typography: string;
    components: string[];
    images: {
      url: string;
      title: string;
      caption: string;
    }[];
  };
  prototype: {
    title: string;
    description: string;
    interactiveTabs: {
      id: string;
      label: string;
      description: string;
      mockupUrl: string;
      hotspots?: { x: number; y: number; title: string; desc: string }[];
    }[];
  };
  results: {
    metric: string;
    label: string;
    description: string;
  }[];
  nextProjectId: string;
  nextProjectTitle: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  metric: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
  social: {
    twitter?: string;
    linkedin?: string;
    dribbble?: string;
  };
}

export interface JournalArticle {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  coverImage: string;
  content: {
    type: 'paragraph' | 'heading' | 'quote' | 'image';
    text?: string;
    url?: string;
    caption?: string;
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  role: string;
  company: string;
  project: string;
  avatar: string;
}

export interface DesignArtifact {
  id: string;
  title: string;
  type: 'wireframe' | 'ui' | 'typography' | 'color' | 'brand' | 'prototype';
  tag: string;
  image: string;
  description: string;
  aspect: 'square' | 'portrait' | 'wide';
}

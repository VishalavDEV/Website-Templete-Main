export type PageView = 
  | 'home' 
  | 'services' 
  | 'work' 
  | 'studio-engine' 
  | 'pricing' 
  | 'insights' 
  | 'about' 
  | 'contact' 
  | 'portal';

export interface ServiceItem {
  id: string;
  category: 'ai' | 'design' | 'engineering' | 'cloud' | 'strategy';
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  iconName: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  year: string;
  category: 'AI Systems' | 'FinTech' | 'Luxury & Commerce' | 'Enterprise Cloud' | 'Spatial & Creative';
  heroImage: string;
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string; detail: string }[];
  technologies: string[];
  featured: boolean;
  liveUrlMock: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
}

export interface Article {
  id: string;
  title: string;
  category: 'Engineering' | 'AI Architecture' | 'Product Design' | 'Executive Strategy';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  content: string[];
  tags: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  priceMonthly: number;
  priceQuarterly: number;
  popular?: boolean;
  description: string;
  features: string[];
  idealFor: string;
  deliverableSLA: string;
  teamComposition: string;
  ctaText: string;
}

export interface StudioConfigOption {
  projectType: 'mvp' | 'scaleup' | 'enterprise' | 'ai-transformation';
  speed: 'standard' | 'accelerated' | 'hyper-sprint';
  designLevel: 'essential' | 'bespoke' | 'luxury-interactive';
  selectedAddons: string[];
}

export interface UserSession {
  isAuthenticated: boolean;
  user?: {
    id: string;
    name: string;
    email: string;
    company: string;
    role: string;
    avatar: string;
  };
}

export interface ProjectMilestone {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  progress: number;
  date: string;
  description: string;
}

export interface ClientProject {
  id: string;
  name: string;
  status: 'In Development' | 'Architecture Review' | 'Production Deploy' | 'Discovery';
  leadArchitect: string;
  health: 'Optimal' | 'Ahead of Schedule' | 'Review Needed';
  progressPercent: number;
  milestones: ProjectMilestone[];
  deliverables: { name: string; type: string; size: string; date: string }[];
  invoices: { id: string; amount: string; date: string; status: 'Paid' | 'Pending' }[];
}

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

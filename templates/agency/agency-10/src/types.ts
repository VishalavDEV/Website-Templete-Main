export type PageRoute = 
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'solutions'
  | 'solution-detail'
  | 'work'
  | 'case-study-detail'
  | 'process'
  | 'insights'
  | 'article-detail'
  | 'careers'
  | 'faq'
  | 'contact'
  | 'client-portal'
  | 'admin-portal';

export interface NavItem {
  label: string;
  route: PageRoute;
  href?: string;
  badge?: string;
  subItems?: {
    label: string;
    route: PageRoute;
    slug?: string;
    description?: string;
  }[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  category: string;
  iconName: string;
  featured: boolean;
  capabilities: string[];
  businessProblems: {
    problem: string;
    solution: string;
  }[];
  architecturePoints: string[];
  techStack: string[];
  processSteps: {
    phase: string;
    deliverables: string;
  }[];
  metrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  clientIndustry: string;
  clientRegion: string;
  year: string;
  category: 'AI' | 'Web' | 'Mobile' | 'SaaS' | 'Automation' | 'E-commerce';
  shortDescription: string;
  heroImage: string;
  featured: boolean;
  challenge: string;
  approach: string;
  solution: string;
  designHighlights: string[];
  techStack: string[];
  developmentHighlights: string[];
  metrics: {
    value: string;
    label: string;
    impact: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  };
}

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  complianceRequirements?: string[];
  challenges: string[];
  digitalOpportunities: string[];
  solutions: string[];
  technologies: string[];
  useCases: {
    title: string;
    description: string;
    expectedROI: string;
    impact?: string;
  }[];
  relatedCaseStudySlugs: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Artificial Intelligence' | 'Software Engineering' | 'Product Development' | 'UI/UX' | 'Business' | 'Technology';
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  } | string;
  authorAvatar?: string;
  authorRole?: string;
  publishedDate: string;
  readingTime?: string;
  readTime?: string;
  tags: string[];
  coverImage: string;
  featured?: boolean;
  tableOfContents?: { id: string; title: string }[];
  contentSections?: {
    heading: string;
    id: string;
    body: string[];
    callout?: string;
  }[];
  content?: string;
}

export interface CareerPosition {
  id: string;
  title: string;
  department: 'Engineering' | 'Artificial Intelligence' | 'Design & UX' | 'Product & Strategy' | 'Cloud & DevOps';
  location: string;
  employmentType: 'Full-time' | 'Contract' | 'Remote';
  experience: string;
  salaryRange: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

export type CareerRole = CareerPosition;

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  expertise: string[];
  avatar: string;
  linkedin: string;
  github?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  testimonial: string;
  rating: number;
  projectType: string;
  metricHighlight?: string;
}

export interface FAQItem {
  id: string;
  category: 'Pricing & Scoping' | 'Timelines & Process' | 'AI & Technology' | 'Security & NDA' | 'Support & SLA';
  question: string;
  answer: string;
}

export interface TechnologyCategory {
  category: 'AI & Machine Learning' | 'Frontend Engineering' | 'Backend Systems' | 'Databases & Storage' | 'Cloud Infrastructure' | 'DevOps & CI/CD';
  description: string;
  items: {
    name: string;
    type: string;
    description: string;
    status: 'Core Specialization' | 'Production Standard' | 'Advanced';
  }[];
}

export interface ProjectInquiryData {
  services: string[];
  projectType: string;
  industry: string;
  budgetRange: string;
  timeline: string;
  description: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  hasFile?: boolean;
  fileName?: string;
}

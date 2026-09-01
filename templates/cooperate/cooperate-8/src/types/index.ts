export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  gallery: string[];
  features: string[];
  benefits: string[];
  specifications?: { label: string; value: string }[];
  beforeAfter?: { before: string; after: string };
  warrantyOptions?: string;
  processSteps: { title: string; desc?: string; description?: string }[];
  pricingStartingAt: string;
  category: 'Commercial' | 'Residential' | 'Industrial' | 'Emergency' | 'Specialty' | 'Maintenance';
  popular?: boolean;
}

export interface Solution {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  heroImage: string;
  targetAudience: string;
  challenges: string[];
  deliverables: string[];
  roiMetrics: { label: string; value: string }[];
  relatedCaseStudySlugs: string[];
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  iconName: string;
  keyRequirements?: string[];
  solutionsOffered?: string[];
  challenges?: string[];
  solutions?: string[];
  stats?: { metric: string; label: string }[];
  complianceStandards: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  serviceCategory: string;
  location: string;
  completedYear: string;
  timeline: string;
  squareFootage: string;
  heroImage: string;
  beforeImage?: string;
  afterImage?: string;
  beforeAfter?: { before: string; after: string };
  warrantyIssued?: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string; description?: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
    avatar?: string;
  };
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  extendedBio?: string;
  image: string;
  credentials: string[];
  yearsExperience: number;
  featuredProjects?: string[];
  specialties?: string[];
  email: string;
  linkedin: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  projectType: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: 'Engineering' | 'Maintenance' | 'Materials' | 'Case Studies' | 'Sustainability' | 'Commercial Technology' | 'Building Codes' | 'Sustainability & Energy';
  coverImage: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
}

export interface Job {
  id: string;
  slug?: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Part-time';
  experienceLevel: string;
  salaryRange: string;
  postedDate: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
  benefits?: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'Whitepaper' | 'Guide' | 'Calculator' | 'Checklist' | 'E-Book' | 'Spec Sheet' | 'Calculator / Guide';
  description: string;
  coverImage?: string;
  fileSize: string;
  format?: string;
  publishedDate?: string;
  downloadCount: number;
  category: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  foundedYear: number;
  phone: string;
  emergencyPhone: string;
  email: string;
  quoteEmail: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  branches: {
    city: string;
    state?: string;
    address: string;
    phone: string;
    hours?: string;
  }[];
  workingHours: string;
  businessHours?: string;
  licenseNumber: string;
  insuranceCoverage: string;
  socials: {
    linkedin: string;
    twitter: string;
    facebook: string;
    instagram: string;
    youtube: string;
  };
}

export interface CompanyStat {
  value: string;
  label: string;
  description: string;
}

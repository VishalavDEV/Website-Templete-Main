export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  deliverables: string[];
  icon: string;
  businessImpact: string;
  techDomain: string;
  roiMetric: string;
}

export interface CaseStudyItem {
  id: string;
  code: string;
  category: string;
  title: string;
  shortDesc: string;
  metric: string;
  metricLabel: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  clientIndustry: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  rating: number;
  performanceMetric: string;
}

export interface TeamMemberItem {
  id: string;
  number: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  expertise: string[];
  experienceYears: string;
  socials: {
    linkedin: string;
    twitter: string;
    email: string;
  };
}

export interface PricingPlanItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  period: string;
  highlighted?: boolean;
  features: string[];
  ctaText: string;
  targetScale: string;
}

export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  category: string;
}

export interface ModalData {
  isOpen: boolean;
  type: 'service' | 'caseStudy' | 'consultation' | 'about' | 'legal' | null;
  data?: any;
}


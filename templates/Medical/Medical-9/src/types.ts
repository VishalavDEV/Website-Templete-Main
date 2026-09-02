export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  languages: string[];
  education: string;
  bio: string;
  image: string;
  availability: string;
  specializations: string[];
}

export interface CareCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  symptoms: string[];
  treatments: string[];
  preventionTips: string[];
}

export interface Program {
  id: string;
  name: string;
  badge: string;
  targetAudience: string;
  description: string;
  included: string[];
  duration: string;
  recommendedFor: string;
  highlight?: boolean;
}

export interface ResourceArticle {
  id: string;
  title: string;
  category: 'Diabetes Basics' | 'Nutrition' | 'Exercise' | 'Medication' | 'Foot Health' | 'Eye Health' | 'Prevention';
  readTime: string;
  author: string;
  date: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  careDuration: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface TechDiagnostic {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  accuracy: string;
  image: string;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  consultationType: string;
  preferredDoctor: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  consultationType?: string;
  preferredDate?: string;
}

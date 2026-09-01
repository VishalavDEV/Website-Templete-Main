export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  region: 'North America' | 'South America' | 'Europe' | 'Middle East' | 'Asia' | 'Africa' | 'Oceania';
  tagline: string;
  description: string;
  businessRelevance: string;
  bestFor: string[];
  bestTimeToVisit: string;
  businessDistricts: string[];
  recommendedHotels: {
    name: string;
    category: string;
    perk: string;
  }[];
  transportOptions: string[];
  corporateExperiences: string[];
  travelTips: string[];
  airportCode: string;
  timezone: string;
  flightHubStatus: string;
  heroImage: string;
  thumbnailImage: string;
  featured?: boolean;
}

export interface ServiceSolution {
  id: string;
  number: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  features: string[];
  metrics: string;
  image: string;
  targetAudience: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  clientName: string;
  clientType: string;
  industry: string;
  companySize: string;
  region: string;
  travelType: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
    description: string;
  }[];
  quote: {
    text: string;
    author: string;
    title: string;
    company: string;
  };
  heroImage: string;
  duration: string;
  activeTravelers: number;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: 'Travel Trends' | 'Technology' | 'Sustainability' | 'Executive Travel' | 'Policy & Compliance' | 'Industry Reports';
  summary: string;
  content: string[];
  keyTakeaways: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export interface Job {
  id: string;
  title: string;
  department: 'Travel Operations' | 'Client Solutions' | 'Product & Tech' | 'Security & Risk' | 'Corporate Partnerships';
  location: string;
  type: 'Full-time' | 'Executive' | 'Contract';
  experience: 'Mid-Level' | 'Senior' | 'Lead' | 'Director';
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export interface Experience {
  id: string;
  title: string;
  category: 'Executive' | 'Luxury' | 'Corporate Events' | 'Team Experiences' | 'Cultural' | 'Wellness' | 'Adventure';
  location: string;
  region: string;
  duration: string;
  idealGroupSize: string;
  description: string;
  highlights: string[];
  image: string;
  inclusions: string[];
}

export interface OfficeHub {
  city: string;
  country: string;
  region: string;
  address: string;
  phone: string;
  email: string;
  timezoneOffset: number; // e.g. -5 for NY, 0 for London, +4 for Dubai, +8 for Singapore, +9 for Tokyo
  coordinates: { x: number; y: number }; // percentage on map
  isPrimary?: boolean;
}

export interface TravelAlertItem {
  id: string;
  city: string;
  country: string;
  level: 'Low' | 'Moderate' | 'Advisory' | 'Severe';
  title: string;
  impact: string;
  timeAgo: string;
  actionTaken: string;
}

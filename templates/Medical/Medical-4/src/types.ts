export interface Department {
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  status: 'active' | 'inactive';
  services?: string[];
  highlights?: string[];
}

export interface Service {
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  status: 'active' | 'inactive';
  keyPoints?: string[];
}

export interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
  slug: string;
  specialization: string;
  qualification: string;
  experience: string;
  bio: string;
  image: string;
  departmentId: number;
  departmentName: string;
  status: 'active' | 'inactive';
  languages?: string[];
  availableDays?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  content: string;
  rating: number;
  image: string;
  date: string;
  status: 'active' | 'inactive';
}

export interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
  status: 'active' | 'inactive';
}

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: 'Hospital' | 'Facilities' | 'Doctors' | 'Events';
  description: string;
  status: 'active' | 'inactive';
}

export interface SiteSettings {
  name: string;
  tagline: string;
  organization: string;
  phone: string;
  email: string;
  location: string;
  emergencyPhone: string;
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

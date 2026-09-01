export type UserRole = 'guest' | 'patient' | 'doctor' | 'admin';

export type AppointmentStatus = 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  departmentId: string;
  departmentName: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  experienceYears: number;
  fee: number;
  education: string;
  hospital: string;
  languages: string[];
  gender: 'Male' | 'Female' | 'Other';
  bio: string;
  location: string;
  availableDays: string[]; // e.g. ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  timeSlots: string[]; // e.g. ['09:00 AM', '09:30 AM', '10:00 AM', '02:00 PM', '03:30 PM']
  isFeatured?: boolean;
  status: 'Active' | 'On Leave' | 'Busy';
}

export interface Department {
  id: string;
  name: string;
  description: string;
  iconName: string;
  doctorCount: number;
  image: string;
  procedures: string[];
  headDoctor: string;
}

export interface MedicalService {
  id: string;
  name: string;
  description: string;
  category: string;
  durationMinutes: number;
  priceRange: string;
  iconName: string;
  highlights: string[];
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;
  departmentName: string;
  date: string;
  timeSlot: string;
  reason: string;
  status: AppointmentStatus;
  createdAt: string;
  notes?: string;
}

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  allergies: string[];
  emergencyContact: string;
}

export interface Review {
  id: string;
  doctorId: string;
  patientName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorTitle: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface PlatformStat {
  label: string;
  value: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CMSContent {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  emergencyPhone: string;
  announcement: string;
  stats: PlatformStat[];
  faqs: FAQItem[];
}

export interface DoctorFilterOptions {
  searchQuery: string;
  specialty: string;
  minExperience: number;
  availabilityDay: string;
  gender: string;
  sortBy: 'recommended' | 'experience' | 'rating' | 'name';
}

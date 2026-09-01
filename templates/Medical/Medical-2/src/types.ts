export interface Doctor {
  id: string;
  name: string;
  title: string;
  departmentId: string;
  departmentName: string;
  specialty: string;
  experienceYears: number;
  qualification: string;
  rating: number;
  reviewsCount: number;
  avatar: string;
  bio: string;
  availableDays: string[];
  availableTimeSlots: string[];
  consultationFee: number;
  languages: string[];
  education: string[];
  certifications: string[];
  officeLocation: string;
  isAvailableToday: boolean;
  featured?: boolean;
}

export interface Department {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  headDoctorId: string;
  headDoctorName: string;
  keyEquipment: string[];
  servicesList: string[];
  operatingHours: string;
  bedCapacity: number;
  emergencyReady: boolean;
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  category: 'Critical Care' | 'Surgery' | 'Diagnostics' | 'Wellness' | 'Therapy';
  shortDesc: string;
  fullDesc: string;
  keyBenefits: string[];
  conditionsTreated: string[];
  technologyUsed: string[];
  patientPrep: string;
  departmentId: string;
  durationMinutes: number;
}

export type VisitType = 'In-Person Consultation' | 'Telehealth Video Call';

export interface Appointment {
  id: string;
  appointmentCode: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  patientDob: string;
  patientGender: string;
  departmentId: string;
  departmentName: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;
  doctorAvatar: string;
  date: string; // YYYY-MM-DD
  timeSlot: string;
  visitType: VisitType;
  reason: string;
  notes?: string;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  createdAt: string;
  cancellationReason?: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  location: string;
  rating: number;
  treatment: string;
  departmentName: string;
  doctorName: string;
  quote: string;
  story: string;
  avatar: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Facilities' | 'Technology' | 'Patient Care' | 'Diagnostics';
  image: string;
  description: string;
  specs: string;
  location: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Appointments & Insurance' | 'Emergency & Urgent Care' | 'Patient Care & Visiting' | 'Telehealth & Technology';
}

export interface ContactMessage {
  id: string;
  ticketId: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  subject?: string;
  priority: 'Routine' | 'Urgent' | 'Billing / Records';
  message: string;
  createdAt: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error' | 'warning';
  message: string;
}

export type ConsultationType = 'in-person' | 'video';

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialtyId: string;
  specialtyName: string;
  experienceYears: number;
  rating: number;
  reviewCount: number;
  location: string;
  locationId: string;
  availability: 'Available Today' | 'Available Tomorrow' | 'Next Available: Mon' | 'Next Available: Wed';
  isAvailableToday: boolean;
  gender: 'female' | 'male';
  consultationTypes: ConsultationType[];
  fee: number;
  image: string;
  bio: string;
  education: string[];
  languages: string[];
  awards: string[];
  slots: {
    date: string;
    times: string[];
  }[];
}

export interface Specialty {
  id: string;
  name: string;
  iconName: string;
  description: string;
  doctorCount: number;
  commonConditions: string[];
  colorHex: string;
}

export interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  fullDetails: string;
  features: string[];
  suitableFor: string;
  turnaroundTime: string;
  image: string;
  priceEstimate: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readingTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  image: string;
  content: string[];
  keyTakeaways: string[];
  relatedArticleIds: string[];
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;
  doctorImage: string;
  doctorLocation: string;
  specialtyId: string;
  consultationType: ConsultationType;
  date: string;
  time: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  reason: string;
  notes?: string;
  status: 'confirmed' | 'rescheduled' | 'completed' | 'cancelled';
  createdAt: string;
  meetingLink?: string;
  clinicRoom?: string;
}

export interface MedicalReport {
  id: string;
  patientName: string;
  reportType: string;
  category: 'Laboratory' | 'Radiology' | 'Cardiology' | 'Pathology' | 'Consultation';
  date: string;
  doctorName: string;
  doctorId: string;
  department: string;
  status: 'Ready' | 'Reviewed' | 'Pending Specialist Notes';
  summary: string;
  measurements: {
    parameter: string;
    value: string;
    unit: string;
    referenceRange: string;
    status: 'Normal' | 'Optimal' | 'Elevated' | 'Low' | 'Critical';
  }[];
  observations: string[];
  doctorNotes: string;
  recommendations: string[];
}

export interface Prescription {
  id: string;
  medicationName: string;
  dosage: string;
  frequency: string;
  duration: string;
  prescribedBy: string;
  doctorId: string;
  prescribedDate: string;
  status: 'Active' | 'Completed' | 'Refill Requested';
  refillsRemaining: number;
  instructions: string;
  pharmacyNote: string;
}

export interface TimelineItem {
  id: string;
  date: string;
  isoDate?: string;
  time?: string;
  title: string;
  category: 'appointment' | 'report' | 'prescription' | 'procedure';
  description: string;
  doctorName: string;
  doctorSpecialty?: string;
  location?: string;
  actionText?: string;
  targetId?: string;
  statusBadge?: string;
  keyMetrics?: {
    label: string;
    value: string;
    isOptimal?: boolean;
  }[];
  notes?: string;
}

export interface LocationClinic {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  emergencyHours: string;
  services: string[];
  specialistCount: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  image: string;
}

export interface PatientNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'appointment' | 'report' | 'prescription' | 'message' | 'system';
  actionTarget?: {
    view: string;
    id?: string;
  };
}

export interface PatientMessage {
  id: string;
  senderName: string;
  senderRole: string;
  senderAvatar: string;
  timestamp: string;
  text: string;
  isDoctor: boolean;
}

export interface PatientProfile {
  name: string;
  email: string;
  phone: string;
  dob: string;
  bloodGroup: string;
  gender: string;
  allergies: string[];
  emergencyContact: {
    name: string;
    relation: string;
    phone: string;
  };
  insuranceProvider: string;
  policyNumber: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
  submittedAt: string;
}

export type ActivePage = 
  | 'home'
  | 'doctors'
  | 'specialties'
  | 'services'
  | 'library'
  | 'locations'
  | 'about'
  | 'contact'
  | 'portal'
  | 'health-check'
  | 'emergency';

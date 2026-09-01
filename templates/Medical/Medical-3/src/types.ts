export type ConsultationMode = 'in_person' | 'telehealth';

export interface Doctor {
  id: string;
  name: string;
  title: string;
  departmentId: string;
  departmentName: string;
  specialty: string;
  subSpecialty: string;
  rating: number;
  reviewsCount: number;
  experienceYears: number;
  fee: number;
  photoUrl: string;
  education: string[];
  languages: string[];
  hospitalAffiliation: string;
  bio: string;
  acceptedInsurance: string[];
  availableDays: string[];
  availableSlots: string[];
  isAvailableToday: boolean;
  isAvailableTomorrow: boolean;
  telemedicineAvailable: boolean;
  inPersonAvailable: boolean;
  nextAvailableSlot: string;
  featuredTreatments: string[];
  awards: string[];
  location: string;
}

export interface Department {
  id: string;
  name: string;
  code: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  specialistCount: number;
  headOfDepartment: string;
  keyProcedures: string[];
  imageUrl: string;
  colorAccent: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface MedicalService {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  imageUrl: string;
  benefits: string[];
  turnaroundTime: string;
  technologyUsed: string;
  priceEstimate: string;
}

export type AppointmentStatus = 'confirmed' | 'in_consultation' | 'completed' | 'cancelled';

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;
  doctorPhoto: string;
  doctorLocation: string;
  date: string;
  timeSlot: string;
  mode: ConsultationMode;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  reason: string;
  symptoms?: string;
  insuranceProvider?: string;
  insurancePolicyNumber?: string;
  notes?: string;
  status: AppointmentStatus;
  createdAt: string;
  meetingLink?: string;
  fee: number;
}

export interface PatientVitals {
  bloodPressure: string;
  heartRate: number;
  oxygenLevel: number;
  bloodGlucose: number;
  weightKg: number;
  lastUpdated: string;
}

export interface Prescription {
  id: string;
  medicationName: string;
  dosage: string;
  frequency: string;
  prescribingDoctor: string;
  refillsRemaining: number;
  expiryDate: string;
}

export interface LabResult {
  id: string;
  testName: string;
  category: string;
  date: string;
  status: 'Normal' | 'Follow-up Recommended' | 'Pending';
  orderingDoctor: string;
  downloadUrl?: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
  type: 'appointment' | 'lab' | 'system' | 'prescription';
}

export interface CampusEmergencyStatus {
  id: string;
  name: string;
  address: string;
  distance: string;
  currentWaitMinutes: number;
  capacityStatus: 'Normal' | 'Moderate' | 'High';
  traumaLevel: string;
  phone: string;
  openHours: string;
}

export type ActiveTab = 'home' | 'doctors' | 'departments' | 'services' | 'about' | 'emergency' | 'patient_dashboard' | 'doctor_dashboard' | 'admin_dashboard';

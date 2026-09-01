export enum UserRole {
  PATIENT = 'patient',
  DOCTOR = 'doctor',
  ADMIN = 'admin'
}

export enum AppointmentStatus {
  PENDING = 'pending',
  SCHEDULED = 'scheduled',
  CONFIRMED = 'approved',
  APPROVED = 'approved',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

export enum InvoiceStatus {
  PENDING = 'pending',
  PAID = 'paid',
  OVERDUE = 'overdue',
  CANCELLED = 'cancelled'
}

export interface User {
  user_id: string;
  name: string;
  email: string;
  role: UserRole | string;
  phone: string;
  avatar_url?: string;
  created_at: string;
}

export interface Patient {
  patient_id: string;
  user_id: string;
  user?: User;
  name?: string;
  email?: string;
  phone?: string;
  dob: string;
  gender: 'Male' | 'Female' | 'Other' | string;
  address: string;
  blood_group?: string;
  emergency_contact?: string;
  allergies?: string[] | string;
  chronic_conditions?: string;
  medical_notes?: string;
  insurance_provider?: string;
  insurance_id?: string;
}

export interface Doctor {
  doctor_id: string;
  user_id: string;
  user?: User;
  name: string;
  email?: string;
  phone?: string;
  specialization: string;
  qualification: string;
  experience_years: number;
  department_id: string;
  department_name?: string;
  bio: string;
  photo_url: string;
  consultation_fee: number;
  rating: number;
  review_count: number;
  available_today: boolean;
  languages?: string[];
  room_number?: string;
}

export interface Department {
  department_id: string;
  name: string;
  description: string;
  icon?: string;
  head_doctor_name?: string;
  contact_extension?: string;
  bed_capacity?: number;
  active_doctors_count?: number;
  image_url?: string;
}

export interface Service {
  service_id: string;
  name: string;
  category: string;
  description: string;
  department_id: string;
  department_name?: string;
  price_range: string;
  duration: string;
  preparation_instructions?: string;
  key_features?: string[];
  icon?: string;
  image_url?: string;
}

export interface Appointment {
  appointment_id: string;
  patient_id: string;
  patient_name?: string;
  patient_email?: string;
  patient_phone?: string;
  doctor_id: string;
  doctor_name?: string;
  doctor_specialization?: string;
  doctor_photo?: string;
  department_id?: string;
  department_name?: string;
  date: string; // YYYY-MM-DD
  time: string; // e.g. "09:30 AM"
  reason: string;
  status: AppointmentStatus | string;
  consultation_fee?: number;
  doctor_notes?: string;
  prescription?: string;
  created_at: string;
  updated_at?: string;
}

export interface DoctorAvailability {
  availability_id?: string;
  id?: string;
  doctor_id: string;
  day_of_week: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday' | string;
  start_time: string; // e.g. "09:00"
  end_time: string;   // e.g. "17:00"
  slot_duration_minutes?: number; // e.g. 30
  is_active: boolean;
}

export interface PrescriptionItem {
  medicine_name: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions?: string;
}

export interface Prescription {
  prescription_id: string;
  patient_id: string;
  patient_name?: string;
  doctor_id: string;
  doctor_name?: string;
  appointment_id?: string;
  diagnosis: string;
  medicines: PrescriptionItem[];
  notes?: string;
  issued_at: string;
}

export interface MedicalRecord {
  record_id: string;
  patient_id: string;
  doctor_id?: string;
  doctor_name?: string;
  title: string;
  type: 'Lab Report' | 'Imaging' | 'Prescription' | 'Clinical Notes' | 'Discharge Summary' | string;
  date: string;
  facility: string;
  result_summary?: string;
  notes?: string;
  file_url?: string;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  unit_price: number;
  total: number;
}

export interface Invoice {
  invoice_id: string;
  patient_id: string;
  patient_name?: string;
  appointment_id?: string;
  issue_date: string;
  due_date?: string;
  items: InvoiceItem[];
  total_amount: number;
  status: InvoiceStatus | string;
  paid_at?: string;
  payment_method?: string;
}

export interface Testimonial {
  id: string;
  patient_id?: string;
  patient_name: string;
  patient_avatar?: string;
  doctor_id?: string;
  doctor_name?: string;
  department_name?: string;
  rating: number;
  feedback: string;
  approved?: boolean;
  is_approved?: boolean;
  created_at: string;
}

export interface GalleryItem {
  id: string;
  image_url: string;
  category: 'Hospital' | 'Doctors' | 'Departments' | 'Facilities' | 'Events' | string;
  caption: string;
  description?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'Appointments' | 'Doctors' | 'Hospital' | 'Emergency' | 'Payment' | 'General' | string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  department?: string;
  subject?: string;
  message: string;
  status: 'new' | 'unread' | 'in-progress' | 'replied' | 'resolved' | string;
  created_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  is_read: boolean;
  type: 'appointment' | 'alert' | 'system' | 'reminder' | string;
  created_at: string;
  action_url?: string;
}

export interface MedicalDocument {
  id: string;
  patient_id: string;
  title: string;
  category: 'Lab Report' | 'Prescription' | 'Discharge Summary' | 'Vaccination' | 'Insurance' | string;
  date: string;
  file_url: string;
  file_size: string;
  doctor_name?: string;
}

export interface HospitalSettings {
  hospital_name: string;
  tagline: string;
  emergency_hotline: string;
  ambulance_number: string;
  general_phone: string;
  email: string;
  address: string;
  opd_hours: string;
  emergency_hours: string;
  total_beds: number;
  icu_beds: number;
  visitor_policy: string;
}

export interface DashboardStats {
  total_patients: number;
  total_doctors: number;
  total_appointments: number;
  pending_appointments: number;
  today_appointments: number;
  monthly_revenue: number;
  bed_occupancy_rate: number;
  patient_satisfaction_score: number;
  weekly_appointments: { day: string; appointments: number; completed: number; cancelled: number }[];
  department_distribution: { name: string; patients: number; value: number }[];
  doctor_utilization: { doctor: string; specialization: string; appointments: number; capacity: number }[];
}

export interface MetricCardData {
  id: string;
  title: string;
  value: string;
  secondaryValue?: string;
  hasInfo?: boolean;
  infoTooltip?: string;
  hasSparkline?: boolean;
  sparklineData?: number[];
  change?: string;
}

export interface MonthActivity {
  month: string;
  value: number;
  label?: string;
}

export interface HealthTopicItem {
  id: string;
  title: string;
  percentage: number;
  image: string;
  category: string;
  totalAssessments?: number;
  avgResponse?: string;
  description?: string;
  statusLabel?: string;
  clinicalGuidelines?: string[];
  alertThreshold?: string;
  recommendedAction?: string;
}

export interface VitalsReading {
  bp: string;
  heartRate: number;
  spo2: number;
  glucose: number;
  temp: number;
  lastUpdated: string;
  status: 'optimal' | 'warning' | 'critical';
}

export interface PatientRecord {
  id: string;
  name: string;
  age: number;
  gender: string;
  mrn: string;
  cohort: string;
  condition: string;
  primaryCareDoctor: string;
  avatar: string;
  adherenceRate: number;
  points: number;
  rank: number;
  trend: 'up' | 'down' | 'neutral';
  vitals: VitalsReading;
  medications: {
    name: string;
    dosage: string;
    frequency: string;
    takenToday: boolean;
  }[];
  nextAppointment?: {
    date: string;
    time: string;
    doctor: string;
    type: 'video' | 'in-person';
  };
  clinicalNotes: string;
}

export interface DoctorProfile {
  id: string;
  name: string;
  title: string;
  specialty: string;
  hospital: string;
  npiNumber: string;
  avatarUrl: string;
  rating: number;
  reviewsCount: number;
  activePatients: number;
  availability: 'available_now' | 'in_consultation' | 'scheduled';
  nextSlot: string;
  phone: string;
  email: string;
}

export interface ConsultationSession {
  id: string;
  patientId: string;
  patientName: string;
  patientAvatar: string;
  doctorId: string;
  doctorName: string;
  doctorAvatar: string;
  specialty: string;
  date: string;
  time: string;
  roomCode: string;
  status: 'upcoming' | 'completed' | 'in_progress' | 'cancelled';
  diagnosisTopic: string;
  clinicalNotes?: string;
  vitalAlert?: string;
}

export interface ClinicalProtocol {
  id: string;
  title: string;
  category: string;
  icd10Code: string;
  version: string;
  lastUpdated: string;
  summary: string;
  targetKpi: string;
  adherencePercentage: number;
  steps: string[];
  medicationProtocols: string[];
  escalationCriteria: string;
  image: string;
}

export interface ClinicLeaderboardItem {
  id: string;
  name: string;
  pointsPerUser: number;
  percentage: number;
  rank: number;
  trend: 'up' | 'down' | 'neutral';
  patientCount?: number;
  location?: string;
  telehealthEfficiency?: string;
}

export type TimeframeOption = 'Last 7 days' | 'Last 30 days' | 'This Quarter' | 'Year to Date' | 'All-time';
export type PeopleOption = 'All Patients' | 'Cardiology Cohort' | 'Endocrine & Diabetes' | 'Post-Op Recovery' | 'Preventative Care' | 'Geriatrics Care';
export type TopicOption = 'All Health Domains' | 'Cardiovascular Vitals' | 'Medication Adherence' | 'Respiratory & SpO2' | 'Physical Rehab & Mobility';
export type ActivityResolution = 'Month' | 'Week' | 'Quarter' | 'Year';

export interface TelecareSettings {
  // Biometric & Telemetry Thresholds
  systolicLimit: number;
  diastolicLimit: number;
  heartRateMin: number;
  heartRateMax: number;
  spo2MinLimit: number;
  glucoseHighLimit: number;
  glucoseLowLimit: number;
  tempLimit: number;
  pollingFrequency: '5s' | '15m' | '30m' | '1h';
  fallDetectionSensitivity: 'low' | 'medium' | 'high';
  autoSyncTelemetry: boolean;

  // Alerts & Escalation Matrix
  smsCriticalAlerts: boolean;
  pushNotifications: boolean;
  weeklyDigest: boolean;
  ivrEmergencyCalls: boolean;
  onCallAutoReroute: boolean;
  onCallDoctor: string;
  quietHoursStart: string;
  quietHoursEnd: string;
  patientMedicationReminders: boolean;

  // EHR & Device Integrations
  epicFhirSync: boolean;
  cernerSync: boolean;
  appleHealthKitSync: boolean;
  dexcomCgmSync: boolean;
  omronBpSync: boolean;
  fhirEndpointUrl: string;
  fhirApiKey: string;
  autoExportPdfEhr: boolean;

  // Telehealth Video Call Settings
  videoQuality: '1080p' | '720p' | 'adaptive';
  aiSoapTranscription: boolean;
  encryptedRecordings: boolean;
  waitingRoomGreeting: string;

  // HIPAA Security & Access
  twoFactorAuth: boolean;
  sessionTimeoutMinutes: number;
  encryptionStandard: string;
  auditTrailLogging: boolean;

  // Clinician Profile & Credentials
  doctorName: string;
  doctorEmail: string;
  doctorTitle: string;
  doctorPhone: string;
  clinicName: string;
  clinicAddress: string;
  npiNumber: string;
  deaNumber: string;
  stateLicenseNumber: string;
}

export interface PatientLeaderboardItem {
  id: string;
  name: string;
  avatar: string;
  points: number;
  percentage?: number;
  adherenceRate?: number;
  cohort: string;
  rank: number;
  trend: 'up' | 'down' | 'neutral';
  condition?: string;
  primaryCareDoctor?: string;
  age?: number;
  gender?: string;
  mrn?: string;
  vitals?: VitalsReading;
  medications?: {
    name: string;
    dosage: string;
    frequency: string;
    takenToday: boolean;
  }[];
  clinicalNotes?: string;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  timing: 'morning' | 'afternoon' | 'evening' | 'bedtime';
  timeLabel: string;
  frequency: string;
  instructions: string;
  remainingDays: string | number;
  completed: boolean;
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;
  doctorAvatar: string;
  date: string;
  time: string;
  type: 'video' | 'in_person' | 'in-person';
  status: 'upcoming' | 'in_progress' | 'completed' | 'cancelled';
  reason: string;
  roomLink?: string;
  notes?: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  hospital: string;
  department: string;
  avatarUrl: string;
  rating: number;
  reviewCount: number;
  experienceYears: number;
  consultationFee: string;
  availability: 'available_now' | 'next_available_today' | 'scheduled' | 'in_consultation';
  availabilityText: string;
  about: string;
  education: string;
  languages: string[];
  phone?: string;
  email?: string;
}

export interface MetricReading {
  id: string;
  name: string;
  value: string;
  unit: string;
  targetRange: string;
  change: string;
  isPositive: boolean;
  history: number[];
  lastUpdated?: string;
}

export interface IncomingCall {
  id: string;
  doctorName: string;
  doctorAvatar: string;
  specialty: string;
  clinic: string;
  scheduledTime: string;
  roomCode: string;
  durationEstimate: string;
  topic: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  bloodType: string;
  insuranceId: string;
  primaryDoctor: string;
  avatarUrl: string;
  allergies: string[];
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
}

export interface MedicalNotification {
  id: string;
  title: string;
  description: string;
  time: string;
  isRead: boolean;
  type?: 'alert' | 'appointment' | 'medication' | 'general';
}


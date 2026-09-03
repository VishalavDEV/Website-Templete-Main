export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
  email?: string;
  isPrimary: boolean;
}

export interface UserProfile {
  id: string;
  fullName: string;
  dateOfBirth: string;
  gender: string;
  bloodGroup: BloodGroup;
  allergies: string[];
  chronicConditions: string[];
  medications: string[];
  emergencyContacts: EmergencyContact[];
  primaryDoctor: {
    name: string;
    specialty: string;
    clinic: string;
    phone: string;
  };
  insurance: {
    provider: string;
    policyNumber: string;
    validThrough: string;
  };
  organDonor: boolean;
  passportId: string;
  lastUpdated: string;
  avatarUrl?: string;
  importantNotes: string;
}

export type DocumentCategory = 
  | 'lab_reports'
  | 'prescriptions'
  | 'vaccinations'
  | 'records'
  | 'insurance'
  | 'other';

export interface MedicalDocument {
  id: string;
  title: string;
  category: DocumentCategory;
  date: string;
  fileType: 'PDF' | 'JPG' | 'PNG' | 'DICOM';
  fileSize: string;
  facility: string;
  doctor?: string;
  status: 'Verified' | 'Pending' | 'Archived';
  tags: string[];
  summary?: string;
  previewUrl?: string;
}

export type PreventionStatus = 'completed' | 'upcoming' | 'due_soon' | 'recommended';
export type PreventionCategory = 'Screening' | 'Vaccination' | 'Checkup' | 'Assessment';

export interface PreventiveItem {
  id: string;
  title: string;
  category: PreventionCategory;
  dueDate: string;
  status: PreventionStatus;
  frequency: string;
  description: string;
  provider: string;
  completedDate?: string;
  notes?: string;
}

export interface LifestyleInputs {
  physicalActivity: number; // 1 (sedentary) to 5 (athlete)
  sleepHours: number;       // 4 to 10 hrs
  nutritionQuality: number; // 1 (poor) to 5 (exceptional)
  smoking: number;          // 0 (none), 1 (occasional), 2 (moderate), 3 (heavy)
  alcohol: number;          // 0 (none), 1 (light), 2 (moderate), 3 (frequent)
  stressLevel: number;      // 1 (low) to 5 (severe)
  familyHistoryRisk: number;// 0 (none) to 3 (strong)
}

export interface SymptomLog {
  id: string;
  symptom: string;
  date: string;
  time: string;
  severity: number; // 1 to 5
  duration: string;
  trigger?: string;
  notes?: string;
  reliefFactor?: string;
  mood?: 'Poor' | 'Moderate' | 'Good';
}

export type ShareDuration = '24h' | '7d' | '30d' | 'permanent';

export interface SharePermission {
  id: string;
  recipientName: string;
  organization: string;
  role: string;
  accessScopes: {
    passport: boolean;
    labReports: boolean;
    prescriptions: boolean;
    vaccinations: boolean;
    records: boolean;
    insurance: boolean;
  };
  status: 'Active' | 'Pending' | 'Expired' | 'Revoked';
  grantedDate: string;
  expirationDate: string;
  expiresInLabel?: string;
  accessCount: number;
  lastAccessed?: string;
  accessTokenHash?: string;
}

export type FacilityType = 'clinic' | 'lab' | 'pharmacy' | 'wellness' | 'vaccination' | 'emergency';

export interface HealthFacility {
  id: string;
  name: string;
  type: FacilityType;
  distance: string;
  rating: number;
  openUntil: string;
  address: string;
  phone: string;
  services: string[];
  emergency24x7?: boolean;
  coordinates: { x: number; y: number }; // normalized 0-100% for custom map
}

export interface HealthStoryEvent {
  id: string;
  date: string;
  year: string;
  title: string;
  category: 'Lab' | 'Vaccine' | 'Screening' | 'Document' | 'Diagnosis' | 'Wellness';
  description: string;
  facility: string;
  highlight?: boolean;
}

export interface SecurityLog {
  id: string;
  action: string;
  actor: string;
  timestamp: string;
  ipAddress: string;
  device: string;
  status: 'Authorized' | 'Revoked' | 'Flagged';
}

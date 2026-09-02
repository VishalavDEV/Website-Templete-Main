export type NavigationTab = 
  | 'home'
  | 'services'
  | 'dashboard'
  | 'appointments'
  | 'reports'
  | 'pharmacy'
  | 'mental'
  | 'wellness'
  | 'nutrition'
  | 'fitness'
  | 'ai'
  | 'family'
  | 'hub'
  | 'emergency';

export interface HealthMetrics {
  heartRate: number; // bpm
  bloodPressureSys: number; // mmHg
  bloodPressureDia: number; // mmHg
  bloodGlucose: number; // mg/dL
  weight: number; // kg
  height: number; // cm
  bmi: number;
  sleepHours: number; // hrs
  sleepQuality: number; // 0-100%
  steps: number;
  stepsGoal: number;
  activeMinutes: number;
  activeMinutesGoal: number;
  caloriesBurned: number;
  caloriesGoal: number;
  spo2: number; // %
  hydrationCurrent: number; // ml
  hydrationGoal: number; // ml
}

export interface MetricTrendPoint {
  date: string;
  heartRate: number;
  systolic: number;
  diastolic: number;
  glucose: number;
  weight: number;
  sleep: number;
  steps: number;
}

export type HealthTrendPoint = MetricTrendPoint;

export interface CareTimelineEvent {
  id: string;
  date: string;
  type: 'consultation' | 'lab_report' | 'prescription' | 'vitals_logged' | 'vaccine';
  title: string;
  subtitle: string;
  badge: string;
  actionTab?: NavigationTab;
}

export interface HealthcareService {
  id: string;
  name: string;
  category: 'primary' | 'specialist' | 'lab' | 'pharmacy' | 'diagnostic' | 'dental' | 'eye' | 'women' | 'child' | 'senior' | 'mental';
  tagline: string;
  description: string;
  price: string;
  deliveryTime?: string;
  iconName: string;
  popular?: boolean;
  features: string[];
  actionType: 'consult' | 'book_test' | 'order_medicine' | 'view_program';
  actionUrl?: NavigationTab;
}

export interface HealthcareProfessional {
  id: string;
  name: string;
  title: string;
  specialty: string;
  subSpecialty?: string;
  experience: string;
  rating: number;
  reviewsCount: number;
  avatar: string;
  fee: string;
  availableToday: boolean;
  nextSlot: string;
  languages: string[];
  hospitalAffiliation: string;
  about: string;
  availableDays: string[];
  slots: string[];
  consultationTypes: ('video' | 'in-person' | 'home')[];
}

export interface Appointment {
  id: string;
  doctor?: HealthcareProfessional;
  doctorId?: string;
  doctorName?: string;
  doctorSpecialty?: string;
  doctorAvatar?: string;
  date: string;
  time: string;
  type: 'video' | 'in-person' | 'home' | 'home-visit';
  status: 'upcoming' | 'completed' | 'cancelled' | 'confirmed';
  patientName?: string;
  reason?: string;
  meetingLink?: string;
  location?: string;
  doctorNotes?: string;
  prescriptionsIssued?: string[];
  notes?: string;
}

export interface Biomarker {
  name: string;
  value: string | number;
  unit: string;
  referenceRange: string;
  status: 'optimal' | 'borderline' | 'attention';
  interpretation?: string;
}

export interface HealthReport {
  id: string;
  testName: string;
  category: string;
  bookedDate: string;
  collectedDate: string;
  reportDate: string;
  status: 'booked' | 'sample_collected' | 'processing' | 'report_ready';
  labName: string;
  doctorRecommended?: string;
  downloadUrl?: string;
  summary: string;
  biomarkers: Biomarker[];
  aiAnalysis?: string;
}

export interface Medication {
  id: string;
  name: string;
  genericName?: string;
  dosage: string;
  frequency?: string;
  timeOfDay?: ('morning' | 'afternoon' | 'evening' | 'night')[];
  takenToday?: boolean[];
  totalPills?: number;
  remainingPills?: number;
  remainingDoses?: number;
  refillNeeded?: boolean;
  refillAvailable?: boolean;
  prescribedBy?: string;
  instructions: string;
  price: string;
  category: string;
  image?: string;
}

export interface PillReminder {
  id: string;
  medicationId?: string;
  medicationName: string;
  dosage: string;
  time: string;
  period: 'morning' | 'afternoon' | 'evening' | 'night';
  taken: boolean;
  notes?: string;
}

export interface MoodEntry {
  id: string;
  date: string;
  time?: string;
  mood: 'great' | 'good' | 'okay' | 'low' | 'stressed';
  score?: number;
  note?: string;
  tags: string[];
}

export type MoodLog = MoodEntry;

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'reminder' | 'report' | 'appointment' | 'alert';
  unread: boolean;
  actionTab?: NavigationTab;
}

export interface NutritionPlan {
  id: string;
  title: string;
  description: string;
  caloriesTarget: number;
  macroSplit: {
    protein: number;
    carbs: number;
    fats: number;
  };
  focusFoods: string[];
}

export interface Recipe {
  id: string;
  title: string;
  category?: string;
  dietType?: string;
  prepTime: string;
  calories: number;
  protein: number | string;
  carbs: number | string;
  fat?: number | string;
  fats?: string;
  image: string;
  tags?: string[];
  ingredients: string[];
  instructions: string[];
}

export interface WellnessChallenge {
  id: string;
  title: string;
  category: string;
  description: string;
  durationDays?: number;
  daysTotal: number;
  daysCompleted: number;
  currentDay?: number;
  participants?: number;
  participantsCount: number;
  progressPercent?: number;
  rewardBadge?: string;
  joined: boolean;
}

export interface WorkoutExercise {
  name: string;
  duration: string;
  reps?: string;
}

export interface WorkoutRoutine {
  id: string;
  title: string;
  level: string;
  duration: string;
  caloriesBurn: number;
  caloriesBurnEstimate?: number;
  category: string;
  description: string;
  image: string;
  exercises: WorkoutExercise[];
}

export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  age: number;
  gender: string;
  avatar: string;
  bloodType?: string;
  bloodGroup?: string;
  allergies?: string[];
  chronicConditions?: string[];
  activeMedicationsCount: number;
  upcomingAppointmentsCount: number;
  height?: number;
  weight?: number;
  latestVitals?: {
    bloodPressure: string;
    heartRate: number;
    glucose: number;
  };
  vaccinesDue?: { name: string; dueDate: string }[];
}

export interface HubArticle {
  id: string;
  title: string;
  category: string;
  description: string;
  readTime: string;
  publishedDate?: string;
  date?: string;
  author: {
    name: string;
    role?: string;
    credentials?: string;
    avatar: string;
  };
  image: string;
  content: string;
  keyTakeaways: string[];
  relatedSpecialty?: string;
  tags: string[];
  isBookmarked?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface AIChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  recommendedServices?: {
    title: string;
    actionUrl: NavigationTab | string;
    description: string;
  }[];
}

export type ChatMessage = AIChatMessage;

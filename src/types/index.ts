export type NavItemKey =
  | 'home'
  | 'wellness'
  | 'fitness'
  | 'nutrition'
  | 'sleep'
  | 'mindfulness'
  | 'challenges'
  | 'insights'
  | 'community'
  | 'resources'
  | 'settings';

export interface MetricData {
  id: string;
  name: string;
  current: number;
  target: number;
  unit: string;
  displayValue?: string;
  targetDisplay?: string;
  statusText?: string;
  color: string;
  accentBg: string;
  icon: string;
  percentage: number;
}

export interface DailyGoal {
  id: string;
  title: string;
  icon: string;
  iconType: 'emoji' | 'lucide';
  completed: boolean;
  category: 'steps' | 'water' | 'exercise' | 'sleep' | 'nutrition' | 'custom';
}

export interface PlanItem {
  id: string;
  time: string;
  badgeColor: string;
  badgeBg: string;
  title: string;
  subtitle: string;
  image: string;
  completed: boolean;
  durationMin: number;
  instructions?: string[];
  category: 'stretch' | 'breakfast' | 'walk' | 'strength' | 'custom';
}

export interface RecommendedItem {
  id: string;
  title: string;
  duration: string;
  category: string;
  image: string;
  videoUrl?: string;
  description: string;
}

export interface PersonalInsight {
  id: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  text: string;
}

export interface UserProfile {
  name: string;
  greeting: string;
  avatar: string;
  memberSince: string;
  streakDays: number;
  wellnessScore: number;
  wellnessChange: number;
}

export interface ChallengeItem {
  id: string;
  title: string;
  currentDay: number;
  totalDays: number;
  participantsCount: number;
  participantsAvatars: string[];
  progressPercent: number;
  image: string;
  description: string;
  isJoined: boolean;
}

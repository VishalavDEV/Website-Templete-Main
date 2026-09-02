export type NavTab =
  | 'home'
  | 'dashboard'
  | 'fitness'
  | 'nutrition'
  | 'sleep'
  | 'mindfulness'
  | 'habits'
  | 'challenges'
  | 'passport'
  | 'insights'
  | 'nearby';

export type MoodType = 'energized' | 'calm' | 'focused' | 'grateful' | 'tired';

export interface DailyHabit {
  id: string;
  title: string;
  category: 'hydration' | 'fitness' | 'nutrition' | 'sleep' | 'mindfulness' | 'lifestyle';
  streak: number;
  completed: boolean;
  targetDescription: string;
  iconName: string;
}

export interface WorkoutItem {
  id: string;
  title: string;
  category: 'beginner' | 'home' | 'stretching' | 'yoga' | 'walking_running';
  durationMinutes: number;
  level: 'Beginner' | 'Intermediate' | 'All Levels';
  calories: number;
  intensity: 'Low' | 'Moderate' | 'High';
  imageUrl: string;
  description: string;
  exercises: { name: string; durationSec: number; reps?: string }[];
  completedToday?: boolean;
}

export interface RecipeItem {
  id: string;
  title: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  prepTimeMinutes: number;
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  imageUrl: string;
  tags: string[];
  ingredients: string[];
  instructions: string[];
  loggedToday?: boolean;
}

export interface ChallengeItem {
  id: string;
  title: string;
  category: 'Hydration' | 'Walking' | 'Sleep' | 'Morning' | 'Habits';
  totalDays: number;
  currentDay: number;
  joined: boolean;
  description: string;
  accentColor: string;
  participantsCount: number;
  dailyTasks: { day: number; title: string; completed: boolean }[];
}

export interface ReflectionEntry {
  id: string;
  date: string;
  prompt: string;
  content: string;
  mood: MoodType;
}

export interface LifestyleInsight {
  id: string;
  category: 'sleep' | 'activity' | 'hydration' | 'mindset';
  title: string;
  detail: string;
  highlightText: string;
  trend: 'positive' | 'neutral' | 'suggestion';
  timestamp: string;
}

export interface NearbyLocation {
  id: string;
  name: string;
  category: 'gym' | 'yoga' | 'park' | 'track' | 'sports' | 'healthy_food' | 'event';
  address: string;
  distanceMiles: number;
  rating: number;
  reviewCount: number;
  openHours: string;
  imageUrl: string;
  tags: string[];
  highlight: string;
  isSaved?: boolean;
}

export interface AchievementBadge {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
  unlockedDate?: string;
  iconType: string;
}

export interface DailyMetrics {
  wellnessScore: number;
  steps: number;
  stepsGoal: number;
  waterLiters: number;
  waterGoalLiters: number;
  sleepHours: number;
  sleepGoalHours: number;
  sleepQuality: number;
  exerciseMinutes: number;
  exerciseGoalMinutes: number;
  currentMood: MoodType;
  moodNote?: string;
  energyLevel: number;
  weeklySteps: number[];
  weeklySleep: number[];
  weeklyEnergy: number[];
}

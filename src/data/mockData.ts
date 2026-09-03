import {
  ChallengeItem,
  DailyGoal,
  MetricData,
  PersonalInsight,
  PlanItem,
  RecommendedItem,
  UserProfile,
} from '../types';

export const INITIAL_USER: UserProfile = {
  name: 'Alex Carter',
  greeting: 'Good Morning, Alex! 👋',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  memberSince: 'January 2024',
  streakDays: 14,
  wellnessScore: 82,
  wellnessChange: +4,
};

export const INITIAL_METRICS: Record<string, MetricData> = {
  steps: {
    id: 'steps',
    name: 'Steps',
    current: 8246,
    target: 10000,
    unit: '',
    displayValue: '8,246',
    targetDisplay: '/10,000',
    color: '#10B981', // emerald
    accentBg: '#ECFDF5',
    icon: 'shoe',
    percentage: 82.5,
  },
  water: {
    id: 'water',
    name: 'Water',
    current: 1.8,
    target: 2.5,
    unit: 'L',
    displayValue: '1.8 L',
    targetDisplay: '/2.5 L',
    color: '#0EA5E9', // sky blue
    accentBg: '#F0F9FF',
    icon: 'water',
    percentage: 72,
  },
  sleep: {
    id: 'sleep',
    name: 'Sleep',
    current: 7.5,
    target: 8.0,
    unit: 'h',
    displayValue: '7h 30m',
    targetDisplay: '/8h',
    color: '#8B5CF6', // purple
    accentBg: '#F5F3FF',
    icon: 'moon',
    percentage: 93.75,
  },
  exercise: {
    id: 'exercise',
    name: 'Exercise',
    current: 45,
    target: 60,
    unit: 'min',
    displayValue: '45',
    targetDisplay: '/60 min',
    color: '#F97316', // orange
    accentBg: '#FFF7ED',
    icon: 'activity',
    percentage: 75,
  },
  mood: {
    id: 'mood',
    name: 'Mood',
    current: 4,
    target: 5,
    unit: '',
    displayValue: 'Great',
    targetDisplay: '',
    statusText: 'Keep it up!',
    color: '#22C55E', // green
    accentBg: '#F0FDF4',
    icon: 'smile',
    percentage: 85,
  },
  calories: {
    id: 'calories',
    name: 'Calories',
    current: 1650,
    target: 2100,
    unit: 'kcal',
    displayValue: '1,650',
    targetDisplay: '/2,100 kcal',
    color: '#EF4444', // red/orange
    accentBg: '#FEF2F2',
    icon: 'flame',
    percentage: 78.5,
  },
};

export const INITIAL_GOALS: DailyGoal[] = [
  {
    id: 'goal-1',
    title: '10,000 Steps',
    icon: '👟',
    iconType: 'emoji',
    completed: true,
    category: 'steps',
  },
  {
    id: 'goal-2',
    title: '2.5L Water',
    icon: '🍶',
    iconType: 'emoji',
    completed: true,
    category: 'water',
  },
  {
    id: 'goal-3',
    title: '30 Min Exercise',
    icon: '🏋️',
    iconType: 'emoji',
    completed: true,
    category: 'exercise',
  },
  {
    id: 'goal-4',
    title: '8 Hours Sleep',
    icon: '🌙',
    iconType: 'emoji',
    completed: false,
    category: 'sleep',
  },
  {
    id: 'goal-5',
    title: 'Eat Healthy',
    icon: '🥗',
    iconType: 'emoji',
    completed: true,
    category: 'nutrition',
  },
];

export const INITIAL_PLANS: PlanItem[] = [
  {
    id: 'plan-1',
    time: '7:00 AM',
    badgeColor: '#10B981',
    badgeBg: '#ECFDF5',
    title: 'Morning Stretch',
    subtitle: '10 min',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&auto=format&fit=crop&q=80',
    completed: true,
    durationMin: 10,
    category: 'stretch',
    instructions: [
      'Gentle neck and shoulder rolls for 2 minutes',
      'Cat-Cow pose spine decompression for 3 minutes',
      'Standing forward fold with hamstrings release for 2 minutes',
      'Child pose with deep breathing for 3 minutes',
    ],
  },
  {
    id: 'plan-2',
    time: '8:00 AM',
    badgeColor: '#F59E0B',
    badgeBg: '#FFFBEB',
    title: 'Healthy Breakfast',
    subtitle: 'Oatmeal with fruits',
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=200&auto=format&fit=crop&q=80',
    completed: true,
    durationMin: 15,
    category: 'breakfast',
    instructions: [
      '1 cup rolled oats cooked in almond milk',
      'Topped with fresh blueberries and sliced banana',
      'Sprinkle of organic chia seeds and raw honey',
      'Optional: 1 scoop plant protein powder',
    ],
  },
  {
    id: 'plan-3',
    time: '12:30 PM',
    badgeColor: '#0EA5E9',
    badgeBg: '#F0F9FF',
    title: 'Walk',
    subtitle: '20 min',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=200&auto=format&fit=crop&q=80',
    completed: false,
    durationMin: 20,
    category: 'walk',
    instructions: [
      'Brisk outdoor walk in a nearby park or neighborhood',
      'Maintain an upright posture and focus on steady breathing',
      'Hydrate with 250ml water immediately afterward',
    ],
  },
  {
    id: 'plan-4',
    time: '6:00 PM',
    badgeColor: '#8B5CF6',
    badgeBg: '#F5F3FF',
    title: 'Strength Training',
    subtitle: '30 min',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=200&auto=format&fit=crop&q=80',
    completed: false,
    durationMin: 30,
    category: 'strength',
    instructions: [
      'Bodyweight squats: 3 sets of 15 reps',
      'Push-ups or incline push-ups: 3 sets of 10-12 reps',
      'Dumbbell romanian deadlifts: 3 sets of 12 reps',
      'Plank hold: 3 sets of 45 seconds',
    ],
  },
];

export const INITIAL_CHALLENGE: ChallengeItem = {
  id: 'challenge-21-day',
  title: '21-Day Healthy Habits Challenge',
  currentDay: 7,
  totalDays: 21,
  participantsCount: 1240,
  participantsAvatars: [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
  ],
  progressPercent: 33,
  image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
  description: 'Build sustainable daily habits including hydration, 20-min movement, mindful breathing, and regular sleep schedule.',
  isJoined: true,
};

export const RECOMMENDED_ITEMS: RecommendedItem[] = [
  {
    id: 'rec-1',
    title: 'Morning Yoga Flow',
    duration: '20 min',
    category: 'Beginner',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop&q=80',
    description: 'Awaken your body with gentle vinyasa transitions, spinal mobility, and centering breathwork.',
  },
  {
    id: 'rec-2',
    title: 'High Protein Lunch',
    duration: '15 min',
    category: 'Recipe',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80',
    description: 'Crisp roasted chickpeas, grilled chicken strips, avocado, quinoa, and lemon tahini dressing.',
  },
  {
    id: 'rec-3',
    title: 'Sleep Better Tonight',
    duration: '8 min',
    category: 'Meditation',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=500&auto=format&fit=crop&q=80',
    description: 'A guided body scan audio meditation designed to calm nervous system arousal and prepare for deep REM sleep.',
  },
  {
    id: 'rec-4',
    title: 'Evening Walk',
    duration: '30 min',
    category: 'Cardio',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500&auto=format&fit=crop&q=80',
    description: 'Low-impact cardiovascular session to clear cortisol levels, assist digestion, and hit your daily step target.',
  },
];

export const PERSONAL_INSIGHTS: PersonalInsight[] = [
  {
    id: 'insight-1',
    icon: 'moon',
    iconBg: '#F5F3FF',
    iconColor: '#8B5CF6',
    text: 'Your sleep consistency improved by 12% this week.',
  },
  {
    id: 'insight-2',
    icon: 'sun',
    iconBg: '#FFFBEB',
    iconColor: '#F59E0B',
    text: "You're most active between 6 PM and 8 PM.",
  },
  {
    id: 'insight-3',
    icon: 'droplets',
    iconBg: '#F0F9FF',
    iconColor: '#0EA5E9',
    text: "You've hit your hydration goal for 5 days straight!",
  },
  {
    id: 'insight-4',
    icon: 'sparkles',
    iconBg: '#FEF3C7',
    iconColor: '#D97706',
    text: "Keep going! You're building a great routine. 🎉",
  },
];

export interface DayProgress {
  day: string;
  fullDay: string;
  steps: number; // 0-100 percentage
  exercise: number; // 0-100 percentage
  sleep: number; // 0-100 percentage
  stepsRaw: number;
  exerciseRaw: number;
  sleepRaw: number;
}

export const WEEKLY_PROGRESS_DATA: Record<string, DayProgress[]> = {
  'This Week': [
    { day: 'Mon', fullDay: 'Monday', steps: 68, exercise: 52, sleep: 38, stepsRaw: 6800, exerciseRaw: 35, sleepRaw: 6.2 },
    { day: 'Tue', fullDay: 'Tuesday', steps: 72, exercise: 48, sleep: 48, stepsRaw: 7200, exerciseRaw: 30, sleepRaw: 7.0 },
    { day: 'Wed', fullDay: 'Wednesday', steps: 79, exercise: 60, sleep: 44, stepsRaw: 7900, exerciseRaw: 40, sleepRaw: 6.8 },
    { day: 'Thu', fullDay: 'Thursday', steps: 83, exercise: 75, sleep: 58, stepsRaw: 8246, exerciseRaw: 45, sleepRaw: 7.5 },
    { day: 'Fri', fullDay: 'Friday', steps: 91, exercise: 62, sleep: 46, stepsRaw: 9100, exerciseRaw: 42, sleepRaw: 7.1 },
    { day: 'Sat', fullDay: 'Saturday', steps: 88, exercise: 68, sleep: 55, stepsRaw: 8800, exerciseRaw: 50, sleepRaw: 8.2 },
    { day: 'Sun', fullDay: 'Sunday', steps: 95, exercise: 80, sleep: 65, stepsRaw: 9500, exerciseRaw: 55, sleepRaw: 8.0 },
  ],
  'Last Week': [
    { day: 'Mon', fullDay: 'Monday', steps: 60, exercise: 45, sleep: 50, stepsRaw: 6000, exerciseRaw: 30, sleepRaw: 7.0 },
    { day: 'Tue', fullDay: 'Tuesday', steps: 65, exercise: 50, sleep: 45, stepsRaw: 6500, exerciseRaw: 35, sleepRaw: 6.5 },
    { day: 'Wed', fullDay: 'Wednesday', steps: 70, exercise: 55, sleep: 40, stepsRaw: 7000, exerciseRaw: 40, sleepRaw: 6.0 },
    { day: 'Thu', fullDay: 'Thursday', steps: 75, exercise: 60, sleep: 55, stepsRaw: 7500, exerciseRaw: 42, sleepRaw: 7.2 },
    { day: 'Fri', fullDay: 'Friday', steps: 80, exercise: 65, sleep: 50, stepsRaw: 8000, exerciseRaw: 45, sleepRaw: 6.8 },
    { day: 'Sat', fullDay: 'Saturday', steps: 85, exercise: 70, sleep: 60, stepsRaw: 8500, exerciseRaw: 50, sleepRaw: 7.8 },
    { day: 'Sun', fullDay: 'Sunday', steps: 78, exercise: 65, sleep: 58, stepsRaw: 7800, exerciseRaw: 45, sleepRaw: 7.5 },
  ],
};

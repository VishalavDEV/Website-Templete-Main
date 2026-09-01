export type PageId =
  | 'home'
  | 'courses'
  | 'paths'
  | 'mentorship'
  | 'resources'
  | 'about'
  | 'create-plan'
  | 'track-progress';

export interface Course {
  id: string;
  title: string;
  category: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  rating: number;
  reviewsCount: number;
  durationMinutes: number;
  lessonsCount: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  image: string;
  description: string;
  price: number; // 0 for free
  isFeatured?: boolean;
  tags: string[];
  syllabus?: {
    title: string;
    duration: string;
    lessons: string[];
  }[];
}

export interface LearningPath {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  estimatedWeeks: number;
  coursesCount: number;
  enrolledStudents: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  careerRole: string;
  averageSalary: string;
  milestones: {
    phase: string;
    title: string;
    description: string;
    skills: string[];
  }[];
  image: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  reviewsCount: number;
  experienceYears: number;
  hourlyRate: number;
  specialties: string[];
  bio: string;
  nextAvailable: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Cheat Sheet' | 'Guide' | 'Template' | 'Roadmap' | 'Starter Kit';
  format: 'PDF' | 'Figma' | 'Notion' | 'GitHub' | 'Interactive';
  downloadsCount: number;
  rating: number;
  description: string;
  author: string;
}

export interface GeneratedPlan {
  goal: string;
  currentLevel: string;
  weeklyHours: number;
  targetMonths: number;
  weeklyMilestones: {
    week: number;
    phase: string;
    title: string;
    focus: string;
    recommendedCourses: string[];
    actionItems: string[];
  }[];
}

export interface StudentProfile {
  studentId: string;
  name: string;
  email: string;
  passwordHint: string;
  program: string;
  avatar: string;
  enrolledCoursesCount: number;
  completedHours: number;
  currentStreakDays: number;
  badge: string;
}

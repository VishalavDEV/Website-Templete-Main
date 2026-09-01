export interface HeroSlide {
  id: string;
  headline: string;
  subheadingBox: string;
  subtitle: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  bgImage: string;
  thumbImage: string;
  tag: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  price: string;
  originalPrice?: string;
  isFree?: boolean;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  lessonsCount: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  instructor: {
    name: string;
    avatar: string;
    title: string;
  };
  image: string;
  description: string;
  featured?: boolean;
  badge?: string;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  department: string;
  experience: string;
  coursesCount: number;
  studentsCount: string;
  rating: number;
  image: string;
  bio: string;
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface CartItem {
  id: string;
  courseId: string;
  title: string;
  price: number;
  image: string;
  category: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Campus' | 'Graduation' | 'Laboratories' | 'Sports' | 'Events';
  image: string;
  description: string;
}

export interface AcademicProgram {
  id: string;
  title: string;
  degree: 'Bachelor' | 'Master' | 'Doctorate' | 'Professional Certificate';
  faculty: 'Engineering & Computing' | 'Business & Economics' | 'Health & Medical Sciences' | 'Arts & Humanities' | 'Law & Public Policy' | 'Natural Sciences';
  duration: string;
  credits: number;
  format: 'On-Campus' | 'Hybrid' | 'Online';
  description: string;
  careerPaths: string[];
  tuitionPerSemester: string;
  image: string;
  featured?: boolean;
}

export interface UniversityEvent {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  time: string;
  location: string;
  category: 'Academic' | 'Admissions' | 'Cultural' | 'Athletics' | 'Career';
  description: string;
  speakers?: string[];
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  author: string;
  image: string;
  commentsCount?: number;
}

export interface FacultySpotlight {
  id: string;
  name: string;
  role: string;
  department: string;
  credentials: string;
  bio: string;
  image: string;
  publicationsCount: number;
}

export interface CampusLocation {
  id: string;
  name: string;
  category: 'Academic' | 'Recreation' | 'Housing' | 'Research' | 'Historic';
  description: string;
  image: string;
  highlights: string[];
  virtualTourUrl?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  classYear: string;
  major: string;
  roleOrCompany: string;
  avatar: string;
  rating?: number;
}

export interface UniversityStat {
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}


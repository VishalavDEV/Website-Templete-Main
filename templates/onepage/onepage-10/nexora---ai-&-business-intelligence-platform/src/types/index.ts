export type ThemeMode = 'dark' | 'light' | 'system';

export interface UserPreferences {
  theme: ThemeMode;
  compactMode: boolean;
  animations: boolean;
  reducedMotion: boolean;
  dashboardDensity: 'compact' | 'normal' | 'spacious';
  notificationsEnabled?: boolean;
}

export interface ToastNotification {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message?: string;
  duration?: number;
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'alert' | 'success' | 'info' | 'workflow' | 'report';
  read: boolean;
  actionTarget?: string;
}

export interface ConsultationRequest {
  id: string;
  fullName: string;
  email: string;
  company: string;
  industry: string;
  companySize: string;
  areaOfInterest: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  createdAt: string;
  status: 'pending' | 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'new' | 'reviewed' | 'resolved';
}

export interface WorkflowStep {
  id: string;
  name?: string;
  title?: string;
  type: 'trigger' | 'action' | 'ai_decision' | 'notification' | 'report' | 'webhook' | string;
  status?: string;
  description: string;
  config?: Record<string, string | number | boolean>;
}

export interface AutomationWorkflow {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'paused' | 'draft';
  steps: WorkflowStep[];
  schedule?: string;
  lastRun?: string;
  totalExecutions: number;
  successRate: number;
  createdAt: string;
}

export type WorkflowItem = AutomationWorkflow;

export interface SolutionItem {
  id: string;
  category: string;
  title: string;
  tagline: string;
  iconName: string;
  description: string;
  fullOverview: string;
  features: string[];
  metrics: { label: string; value: string; detail: string }[];
  deliverables: string[];
  technologies: string[];
}

export interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  year: string;
  roi: string;
  processingTime: string;
  efficiency: string;
  summary: string;
  approach: string[];
  technologies: string[];
  keyResults: { metric: string; improvement: string; description: string }[];
  clientQuote?: { text: string; author: string; role: string };
}

export interface InsightArticle {
  id: string;
  category: string;
  title: string;
  readTime: string;
  date: string;
  summary: string;
  author: { name: string; role: string; avatar: string };
  tags: string[];
  content: string[];
  keyTakeaways: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  role?: string;
  company: string;
  rating: number;
  avatar: string;
  quote: string;
  metricHighlight: string;
  metricLabel: string;
  metric?: string;
  industry?: string;
  verified?: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  category: string;
  badge?: string;
  capabilities: string[];
}

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: string;
  iconName: string;
}

export interface AIQnA {
  id: string;
  question: string;
  answer: string;
  confidence: number;
  category: string;
  dataPoints: { label: string; value: string; trend: string }[];
  recommendedAction: string;
}

export type DashboardDateRange = '7d' | '30d' | '90d' | '1y';

export interface ChartDataPoint {
  date?: string;
  label?: string;
  revenue: number;
  costs?: number;
  target?: number;
  agentOperations?: number;
  latency?: number;
  threats?: number;
  activeNodes?: number;
  growth?: number;
  operations?: number;
  efficiency?: number;
  users?: number;
  conversions?: number;
  aiDecisions?: number;
}

export interface DashboardMetricOverview {
  totalRevenue: number | string;
  revenueGrowth?: number;
  revenueDelta?: string;
  costSavings?: number;
  costSavingsRate?: number;
  agentOperations?: number;
  threatsIntercepted?: number;
  activeUsers?: string;
  operationalEfficiency?: string;
  aiDecisionsExecuted?: string;
}

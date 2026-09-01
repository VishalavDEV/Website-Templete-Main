export type StoryStatus = 'Draft' | 'Review' | 'Approved' | 'Scheduled' | 'Published' | 'Archived';
export type StoryCategory = 'Discoveries' | 'People' | 'Medicine' | 'Environment' | 'Technology' | 'Culture' | 'Politics';
export type TaskPriority = 'CRITICAL' | 'HIGH' | 'NORMAL';
export type TaskStatus = 'pending' | 'snoozed' | 'completed';

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar?: string;
  category: StoryCategory;
  status: StoryStatus;
  publishedDate?: string;
  scheduledDate?: string;
  reads: number;
  completionRate: number; // percentage e.g. 78
  saves: number;
  shares: number;
  returningReaders: number; // percentage
  reviewer?: string;
  thumbnail: string;
  isFeatured?: boolean;
  signals: 'High' | 'Rising' | 'Stable' | 'Volatile';
  tags: string[];
}

export interface TaskItem {
  id: string;
  title: string;
  priority: TaskPriority;
  status: TaskStatus;
  category: string;
  relatedStoryId?: string;
  assignee?: string;
  createdAt: string;
}

export interface PulseEvent {
  id: string;
  time: string;
  timestamp: number;
  type: 'PUBLISHED' | 'SUBMISSION' | 'ARCHIVE' | 'REVIEW' | 'SYSTEM' | 'ASSIGNMENT';
  title: string;
  description: string;
  targetId?: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'review' | 'published' | 'schedule' | 'media' | 'assignment' | 'milestone' | 'system';
  linkId?: string;
}

export interface HistoryItem {
  id: string;
  action: string;
  timestamp: string;
  category: string;
}

export interface SavedView {
  id: string;
  name: string;
  filters: {
    status?: string;
    category?: string;
    author?: string;
    search?: string;
  };
}

export interface CollectionItem {
  id: string;
  name: string;
  storyCount: number;
  editor: string;
  updatedAt: string;
  description: string;
}

export interface SettingsData {
  publicationName: string;
  editorialLead: string;
  autoReviewAssignment: boolean;
  defaultCategory: StoryCategory;
  emailNotifications: boolean;
  slackWebhook: string;
  retentionDays: number;
  strictPeerReview: boolean;
}

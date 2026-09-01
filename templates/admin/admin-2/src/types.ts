export type StoryStatus = 'draft' | 'review' | 'approved' | 'scheduled' | 'published' | 'archived';

export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  articlesCount: number;
  activeAssignments: number;
  expertiseTags: string[];
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: 'Cosmology' | 'Quantum Physics' | 'Neuroscience' | 'Earth & Climate' | 'Deep Biology' | 'History of Science';
  author: {
    id: string;
    name: string;
    avatar: string;
    role: string;
  };
  status: StoryStatus;
  heroImage: string;
  heroCaption?: string;
  readTime: string;
  publishedAt?: string;
  scheduledFor?: string;
  createdAt: string;
  updatedAt: string;
  views: number;
  completionRate: number; // percentage, e.g. 78
  saves: number;
  shares: number;
  isFeatured: boolean;
  tags: string[];
  factCheckedBy?: string;
  reviewerNotes?: string;
  content: string;
}

export type AttentionType = 
  | 'headline_review' 
  | 'image_approval' 
  | 'attribution' 
  | 'story_approval' 
  | 'assign_reviewer';

export interface AttentionItem {
  id: string;
  title: string;
  description: string;
  type: AttentionType;
  priority: 'critical' | 'high' | 'medium';
  relatedStoryId?: string;
  relatedStoryTitle?: string;
  assignee?: string;
  snoozed: boolean;
  snoozedUntil?: string;
  completed: boolean;
  createdAt: string;
}

export type TimelineEventType = 
  | 'story_published' 
  | 'story_submitted' 
  | 'media_added' 
  | 'review_completed' 
  | 'featured_updated' 
  | 'assignment_created' 
  | 'pipeline_shift';

export interface TimelineEvent {
  id: string;
  timestamp: string;
  timeLabel: string;
  type: TimelineEventType;
  title: string;
  subtitle?: string;
  targetId?: string;
  targetType?: 'story' | 'media' | 'collection' | 'task';
  actor: {
    name: string;
    avatar: string;
    role: string;
  };
}

export interface MediaItem {
  id: string;
  title: string;
  caption: string;
  credit: string;
  url: string;
  dimensions: string;
  format: 'JPG' | 'PNG' | 'WEBP' | 'TIFF';
  sizeKb: number;
  tags: string[];
  uploadedAt: string;
  usedInStoryCount: number;
}

export interface Collection {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  storyCount: number;
  curator: string;
  updatedDate: string;
  featured: boolean;
  stories: string[]; // story IDs
}

export type MetricTab = 'reads' | 'engagement' | 'saves' | 'shares';
export type TimeRange = '7d' | '30d' | '90d' | '1y';

export interface MomentumPoint {
  date: string;
  label: string;
  value: number;
  secondaryValue: number;
}

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: 'review' | 'publish' | 'system' | 'editorial';
  linkTarget?: string;
}

export type ActiveView = 
  | 'today_overview' 
  | 'content_all' 
  | 'content_pipeline' 
  | 'editorial_reviews' 
  | 'editorial_calendar' 
  | 'editorial_assignments' 
  | 'audience_analytics' 
  | 'archive_collections' 
  | 'archive_media' 
  | 'team_workload' 
  | 'system_settings';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message?: string;
  timestamp: number;
}

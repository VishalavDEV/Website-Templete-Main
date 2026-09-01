import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { 
  Story, AttentionItem, TimelineEvent, MediaItem, Collection, Author, 
  NotificationItem, ToastMessage, ActiveView, MetricTab, TimeRange, MomentumPoint 
} from '../types';
import { 
  INITIAL_STORIES, INITIAL_ATTENTION_ITEMS, INITIAL_TIMELINE, 
  INITIAL_MEDIA, INITIAL_COLLECTIONS, INITIAL_AUTHORS, INITIAL_NOTIFICATIONS 
} from '../data/mockData';
import confetti from 'canvas-confetti';

interface EditorialContextType {
  stories: Story[];
  attentionItems: AttentionItem[];
  timeline: TimelineEvent[];
  media: MediaItem[];
  collections: Collection[];
  authors: Author[];
  notifications: NotificationItem[];
  toasts: ToastMessage[];
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  selectedStoryIdForFilter: string | null;
  setSelectedStoryIdForFilter: (id: string | null) => void;
  pipelineFilter: string | null;
  setPipelineFilter: (status: string | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Active Story / Modals State
  editingStory: Story | null;
  setEditingStory: (story: Story | null) => void;
  isNewStoryModalOpen: boolean;
  setIsNewStoryModalOpen: (open: boolean) => void;
  previewStory: Story | null;
  setPreviewStory: (story: Story | null) => void;
  isUploadMediaModalOpen: boolean;
  setIsUploadMediaModalOpen: (open: boolean) => void;
  isAssignTaskModalOpen: boolean;
  setIsAssignTaskModalOpen: (open: boolean) => void;
  taskToAssign: AttentionItem | null;
  setTaskToAssign: (task: AttentionItem | null) => void;
  isScheduleModalOpen: boolean;
  setIsScheduleModalOpen: (open: boolean) => void;
  storyToSchedule: Story | null;
  setStoryToSchedule: (story: Story | null) => void;
  isExportModalOpen: boolean;
  setIsExportModalOpen: (open: boolean) => void;
  isCommandPaletteOpen: boolean;
  setIsCommandPaletteOpen: (open: boolean) => void;
  isNewCollectionModalOpen: boolean;
  setIsNewCollectionModalOpen: (open: boolean) => void;
  isAddAuthorModalOpen: boolean;
  setIsAddAuthorModalOpen: (open: boolean) => void;

  // Actions
  addToast: (type: ToastMessage['type'], title: string, message?: string) => void;
  removeToast: (id: string) => void;
  
  createStory: (storyData: Omit<Story, 'id' | 'createdAt' | 'updatedAt' | 'views' | 'completionRate' | 'saves' | 'shares'>) => Promise<Story>;
  updateStory: (id: string, updates: Partial<Story>) => Promise<Story>;
  deleteStory: (id: string) => Promise<void>;
  duplicateStory: (id: string) => Promise<Story>;
  publishStory: (id: string) => Promise<void>;
  scheduleStory: (id: string, dateIso: string) => Promise<void>;
  setFeaturedStory: (id: string) => Promise<void>;
  removeFeaturedStory: (id: string) => Promise<void>;
  approveStory: (id: string) => Promise<void>;
  
  completeAttentionItem: (id: string) => Promise<void>;
  snoozeAttentionItem: (id: string) => Promise<void>;
  assignAttentionItem: (id: string, assignee: string) => Promise<void>;
  addAttentionItem: (item: Omit<AttentionItem, 'id' | 'createdAt' | 'completed' | 'snoozed'>) => Promise<void>;
  
  uploadMedia: (item: Omit<MediaItem, 'id' | 'uploadedAt' | 'usedInStoryCount'>) => Promise<MediaItem>;
  deleteMedia: (id: string) => Promise<void>;
  
  createCollection: (col: Omit<Collection, 'id' | 'updatedDate'>) => Promise<Collection>;
  updateCollection: (id: string, updates: Partial<Collection>) => Promise<Collection>;
  deleteCollection: (id: string) => Promise<void>;
  
  createAuthor: (author: Omit<Author, 'id' | 'articlesCount' | 'activeAssignments'>) => Promise<Author>;
  assignTaskToAuthor: (authorId: string, taskTitle: string, storyId?: string) => Promise<void>;
  
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
  
  getMomentumData: (tab: MetricTab, range: TimeRange) => { points: MomentumPoint[]; total: number; change: string; peak: number; avgCompletion: number };
  exportReport: (format: 'csv' | 'json' | 'summary', dateScope: string) => Promise<void>;
  resetDemoData: () => void;
}

const EditorialContext = createContext<EditorialContextType | undefined>(undefined);

const STORAGE_KEYS = {
  STORIES: 'elemental_stories_v1',
  ATTENTION: 'elemental_attention_v1',
  TIMELINE: 'elemental_timeline_v1',
  MEDIA: 'elemental_media_v1',
  COLLECTIONS: 'elemental_collections_v1',
  AUTHORS: 'elemental_authors_v1',
  NOTIFICATIONS: 'elemental_notifications_v1',
};

export const EditorialProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stories, setStories] = useState<Story[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STORIES);
      return saved ? JSON.parse(saved) : INITIAL_STORIES;
    } catch {
      return INITIAL_STORIES;
    }
  });

  const [attentionItems, setAttentionItems] = useState<AttentionItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ATTENTION);
      return saved ? JSON.parse(saved) : INITIAL_ATTENTION_ITEMS;
    } catch {
      return INITIAL_ATTENTION_ITEMS;
    }
  });

  const [timeline, setTimeline] = useState<TimelineEvent[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TIMELINE);
      return saved ? JSON.parse(saved) : INITIAL_TIMELINE;
    } catch {
      return INITIAL_TIMELINE;
    }
  });

  const [media, setMedia] = useState<MediaItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MEDIA);
      return saved ? JSON.parse(saved) : INITIAL_MEDIA;
    } catch {
      return INITIAL_MEDIA;
    }
  });

  const [collections, setCollections] = useState<Collection[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COLLECTIONS);
      return saved ? JSON.parse(saved) : INITIAL_COLLECTIONS;
    } catch {
      return INITIAL_COLLECTIONS;
    }
  });

  const [authors, setAuthors] = useState<Author[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.AUTHORS);
      return saved ? JSON.parse(saved) : INITIAL_AUTHORS;
    } catch {
      return INITIAL_AUTHORS;
    }
  });

  const [notifications, setNotifications] = useState<NotificationItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS);
      return saved ? JSON.parse(saved) : INITIAL_NOTIFICATIONS;
    } catch {
      return INITIAL_NOTIFICATIONS;
    }
  });

  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [activeView, setActiveView] = useState<ActiveView>('today_overview');
  const [selectedStoryIdForFilter, setSelectedStoryIdForFilter] = useState<string | null>(null);
  const [pipelineFilter, setPipelineFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals & Active Edit state
  const [editingStory, setEditingStory] = useState<Story | null>(null);
  const [isNewStoryModalOpen, setIsNewStoryModalOpen] = useState(false);
  const [previewStory, setPreviewStory] = useState<Story | null>(null);
  const [isUploadMediaModalOpen, setIsUploadMediaModalOpen] = useState(false);
  const [isAssignTaskModalOpen, setIsAssignTaskModalOpen] = useState(false);
  const [taskToAssign, setTaskToAssign] = useState<AttentionItem | null>(null);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [storyToSchedule, setStoryToSchedule] = useState<Story | null>(null);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isNewCollectionModalOpen, setIsNewCollectionModalOpen] = useState(false);
  const [isAddAuthorModalOpen, setIsAddAuthorModalOpen] = useState(false);

  // Sync to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.STORIES, JSON.stringify(stories));
    } catch (e) {
      console.warn('Storage sync failed for stories', e);
    }
  }, [stories]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ATTENTION, JSON.stringify(attentionItems));
    } catch (e) {
      console.warn('Storage sync failed for attention items', e);
    }
  }, [attentionItems]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.TIMELINE, JSON.stringify(timeline));
    } catch (e) {
      console.warn('Storage sync failed for timeline', e);
    }
  }, [timeline]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.MEDIA, JSON.stringify(media));
    } catch (e) {
      console.warn('Storage sync failed for media', e);
    }
  }, [media]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.COLLECTIONS, JSON.stringify(collections));
    } catch (e) {
      console.warn('Storage sync failed for collections', e);
    }
  }, [collections]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.AUTHORS, JSON.stringify(authors));
    } catch (e) {
      console.warn('Storage sync failed for authors', e);
    }
  }, [authors]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifications));
    } catch (e) {
      console.warn('Storage sync failed for notifications', e);
    }
  }, [notifications]);

  // Global Keyboard Shortcuts (Ctrl/Cmd + K for Command Bar, Escape for modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const addToast = useCallback((type: ToastMessage['type'], title: string, message?: string) => {
    const id = 'toast_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);
    const newToast: ToastMessage = { id, type, title, message, timestamp: Date.now() };
    setToasts((prev) => [newToast, ...prev].slice(0, 5));

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addTimelineItem = (
    type: TimelineEvent['type'],
    title: string,
    subtitle?: string,
    targetId?: string,
    targetType?: TimelineEvent['targetType']
  ) => {
    const newEvent: TimelineEvent = {
      id: 'tl_' + Date.now(),
      timestamp: new Date().toISOString(),
      timeLabel: 'Just now',
      type,
      title,
      subtitle,
      targetId,
      targetType,
      actor: {
        name: 'Alex Thorne',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
        role: 'Editor-in-Chief'
      }
    };
    setTimeline((prev) => [newEvent, ...prev]);
  };

  const createStory = async (
    storyData: Omit<Story, 'id' | 'createdAt' | 'updatedAt' | 'views' | 'completionRate' | 'saves' | 'shares'>
  ): Promise<Story> => {
    // realistic async latency
    await new Promise((res) => setTimeout(res, 350));
    const now = new Date().toISOString();
    const newStory: Story = {
      ...storyData,
      id: 'story_' + Date.now(),
      createdAt: now,
      updatedAt: now,
      views: storyData.status === 'published' ? 120 : 0,
      completionRate: storyData.status === 'published' ? 82 : 0,
      saves: 0,
      shares: 0,
      publishedAt: storyData.status === 'published' ? now : undefined,
    };

    setStories((prev) => [newStory, ...prev]);
    addTimelineItem('story_submitted', `Story Created: ${newStory.title}`, `Status: ${newStory.status.toUpperCase()}`, newStory.id, 'story');
    addToast('success', 'Story Created', `"${newStory.title}" saved to repository`);
    return newStory;
  };

  const updateStory = async (id: string, updates: Partial<Story>): Promise<Story> => {
    await new Promise((res) => setTimeout(res, 300));
    let updatedObj: Story | null = null;

    setStories((prev) =>
      prev.map((s) => {
        if (s.id === id) {
          updatedObj = { ...s, ...updates, updatedAt: new Date().toISOString() };
          return updatedObj;
        }
        return s;
      })
    );

    if (updatedObj) {
      addToast('success', 'Story Updated', `Changes applied to "${(updatedObj as Story).title}"`);
      return updatedObj;
    }
    throw new Error('Story not found');
  };

  const deleteStory = async (id: string): Promise<void> => {
    await new Promise((res) => setTimeout(res, 250));
    const target = stories.find((s) => s.id === id);
    setStories((prev) => prev.filter((s) => s.id !== id));
    // clean up related attention items
    setAttentionItems((prev) => prev.filter((item) => item.relatedStoryId !== id));
    addToast('info', 'Story Deleted', target ? `"${target.title}" moved to trash` : 'Story removed');
  };

  const duplicateStory = async (id: string): Promise<Story> => {
    await new Promise((res) => setTimeout(res, 300));
    const source = stories.find((s) => s.id === id);
    if (!source) throw new Error('Source story not found');

    const now = new Date().toISOString();
    const cloned: Story = {
      ...source,
      id: 'story_copy_' + Date.now(),
      title: `${source.title} (Copy)`,
      status: 'draft',
      isFeatured: false,
      views: 0,
      completionRate: 0,
      saves: 0,
      shares: 0,
      publishedAt: undefined,
      scheduledFor: undefined,
      createdAt: now,
      updatedAt: now
    };

    setStories((prev) => [cloned, ...prev]);
    addToast('success', 'Story Duplicated', `Created draft clone: "${cloned.title}"`);
    return cloned;
  };

  const publishStory = async (id: string): Promise<void> => {
    await new Promise((res) => setTimeout(res, 450));
    const now = new Date().toISOString();
    let publishedTitle = '';

    setStories((prev) =>
      prev.map((s) => {
        if (s.id === id) {
          publishedTitle = s.title;
          return {
            ...s,
            status: 'published',
            publishedAt: now,
            updatedAt: now,
            scheduledFor: undefined,
            views: s.views > 0 ? s.views : 140
          };
        }
        return s;
      })
    );

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#0284c7', '#7dd3fc', '#bae6fd']
      });
    } catch {
      // safe fallback
    }

    addTimelineItem('story_published', 'Story Published', publishedTitle, id, 'story');
    addToast('success', 'Story Published Live', `"${publishedTitle}" is now distributed to Elemental readers`);
  };

  const scheduleStory = async (id: string, dateIso: string): Promise<void> => {
    await new Promise((res) => setTimeout(res, 300));
    let title = '';
    setStories((prev) =>
      prev.map((s) => {
        if (s.id === id) {
          title = s.title;
          return {
            ...s,
            status: 'scheduled',
            scheduledFor: dateIso,
            updatedAt: new Date().toISOString()
          };
        }
        return s;
      })
    );

    const formattedDate = new Date(dateIso).toLocaleString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    addTimelineItem('pipeline_shift', 'Story Scheduled', `${title} set for ${formattedDate}`, id, 'story');
    addToast('success', 'Release Scheduled', `"${title}" scheduled for ${formattedDate}`);
  };

  const setFeaturedStory = async (id: string): Promise<void> => {
    await new Promise((res) => setTimeout(res, 300));
    let featTitle = '';
    setStories((prev) =>
      prev.map((s) => {
        if (s.id === id) {
          featTitle = s.title;
          return { ...s, isFeatured: true, updatedAt: new Date().toISOString() };
        }
        return { ...s, isFeatured: false };
      })
    );

    addTimelineItem('featured_updated', 'Featured Masthead Updated', featTitle, id, 'story');
    addToast('success', 'Lead Feature Assigned', `"${featTitle}" is now the hero masthead`);
  };

  const removeFeaturedStory = async (id: string): Promise<void> => {
    await new Promise((res) => setTimeout(res, 200));
    setStories((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isFeatured: false, updatedAt: new Date().toISOString() } : s))
    );
    addToast('info', 'Feature Removed', 'Lead masthead slot is currently unassigned');
  };

  const approveStory = async (id: string): Promise<void> => {
    await new Promise((res) => setTimeout(res, 300));
    let approvedTitle = '';
    setStories((prev) =>
      prev.map((s) => {
        if (s.id === id) {
          approvedTitle = s.title;
          return {
            ...s,
            status: 'approved',
            factCheckedBy: 'Alex Thorne (Editor-in-Chief)',
            updatedAt: new Date().toISOString()
          };
        }
        return s;
      })
    );

    // complete related attention items
    setAttentionItems((prev) =>
      prev.map((item) => (item.relatedStoryId === id ? { ...item, completed: true } : item))
    );

    addTimelineItem('review_completed', 'Editorial Sign-Off Approved', approvedTitle, id, 'story');
    addToast('success', 'Editorial Approval Granted', `"${approvedTitle}" moved to Approved stage`);
  };

  const completeAttentionItem = async (id: string): Promise<void> => {
    await new Promise((res) => setTimeout(res, 200));
    const target = attentionItems.find((i) => i.id === id);
    setAttentionItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: true } : item))
    );
    addToast('success', 'Task Completed', target?.title || 'Attention item resolved');
  };

  const snoozeAttentionItem = async (id: string): Promise<void> => {
    await new Promise((res) => setTimeout(res, 200));
    setAttentionItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, snoozed: !item.snoozed } : item))
    );
    const item = attentionItems.find((i) => i.id === id);
    const nowSnoozed = !item?.snoozed;
    addToast('info', nowSnoozed ? 'Task Snoozed' : 'Task Restored', nowSnoozed ? 'Item snoozed for 24 hours' : 'Item returned to active queue');
  };

  const assignAttentionItem = async (id: string, assignee: string): Promise<void> => {
    await new Promise((res) => setTimeout(res, 250));
    setAttentionItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, assignee } : item))
    );
    addTimelineItem('assignment_created', 'Task Assigned', `Assigned to ${assignee}`, id, 'task');
    addToast('success', 'Assignee Updated', `Task routed to ${assignee}`);
  };

  const addAttentionItem = async (
    item: Omit<AttentionItem, 'id' | 'createdAt' | 'completed' | 'snoozed'>
  ): Promise<void> => {
    await new Promise((res) => setTimeout(res, 250));
    const newItem: AttentionItem = {
      ...item,
      id: 'att_' + Date.now(),
      createdAt: new Date().toISOString(),
      completed: false,
      snoozed: false
    };
    setAttentionItems((prev) => [newItem, ...prev]);
    addToast('info', 'New Attention Item', newItem.title);
  };

  const uploadMedia = async (
    item: Omit<MediaItem, 'id' | 'uploadedAt' | 'usedInStoryCount'>
  ): Promise<MediaItem> => {
    await new Promise((res) => setTimeout(res, 400));
    const newMedia: MediaItem = {
      ...item,
      id: 'media_' + Date.now(),
      uploadedAt: new Date().toISOString(),
      usedInStoryCount: 0
    };
    setMedia((prev) => [newMedia, ...prev]);
    addTimelineItem('media_added', 'Media Asset Uploaded', newMedia.title, newMedia.id, 'media');
    addToast('success', 'Media Uploaded', `"${newMedia.title}" added to Science Archive`);
    return newMedia;
  };

  const deleteMedia = async (id: string): Promise<void> => {
    await new Promise((res) => setTimeout(res, 200));
    const item = media.find((m) => m.id === id);
    setMedia((prev) => prev.filter((m) => m.id !== id));
    addToast('info', 'Media Removed', item?.title || 'Asset deleted');
  };

  const createCollection = async (
    col: Omit<Collection, 'id' | 'updatedDate'>
  ): Promise<Collection> => {
    await new Promise((res) => setTimeout(res, 300));
    const newCol: Collection = {
      ...col,
      id: 'col_' + Date.now(),
      updatedDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };
    setCollections((prev) => [newCol, ...prev]);
    addToast('success', 'Collection Created', `"${newCol.title}" is ready`);
    return newCol;
  };

  const updateCollection = async (id: string, updates: Partial<Collection>): Promise<Collection> => {
    await new Promise((res) => setTimeout(res, 250));
    let updatedObj: Collection | null = null;
    setCollections((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          updatedObj = { ...c, ...updates, updatedDate: 'Today' };
          return updatedObj;
        }
        return c;
      })
    );
    if (updatedObj) {
      addToast('success', 'Collection Updated', `Saved "${(updatedObj as Collection).title}"`);
      return updatedObj;
    }
    throw new Error('Collection not found');
  };

  const deleteCollection = async (id: string): Promise<void> => {
    await new Promise((res) => setTimeout(res, 200));
    const c = collections.find((col) => col.id === id);
    setCollections((prev) => prev.filter((col) => col.id !== id));
    addToast('info', 'Collection Deleted', c?.title || 'Collection removed');
  };

  const createAuthor = async (
    authorData: Omit<Author, 'id' | 'articlesCount' | 'activeAssignments'>
  ): Promise<Author> => {
    await new Promise((res) => setTimeout(res, 300));
    const newAuth: Author = {
      ...authorData,
      id: 'auth_' + Date.now(),
      articlesCount: 0,
      activeAssignments: 0
    };
    setAuthors((prev) => [...prev, newAuth]);
    addToast('success', 'Team Member Added', `${newAuth.name} added to roster`);
    return newAuth;
  };

  const assignTaskToAuthor = async (authorId: string, taskTitle: string, storyId?: string): Promise<void> => {
    await new Promise((res) => setTimeout(res, 300));
    const targetAuthor = authors.find((a) => a.id === authorId);
    if (!targetAuthor) return;

    setAuthors((prev) =>
      prev.map((a) => (a.id === authorId ? { ...a, activeAssignments: a.activeAssignments + 1 } : a))
    );

    const relatedStory = stories.find((s) => s.id === storyId);

    const newItem: AttentionItem = {
      id: 'att_' + Date.now(),
      title: taskTitle,
      description: `Assigned to ${targetAuthor.name} (${targetAuthor.role})`,
      type: 'assign_reviewer',
      priority: 'high',
      relatedStoryId: storyId,
      relatedStoryTitle: relatedStory?.title,
      assignee: targetAuthor.name,
      snoozed: false,
      completed: false,
      createdAt: new Date().toISOString()
    };

    setAttentionItems((prev) => [newItem, ...prev]);
    addTimelineItem('assignment_created', 'New Assignment', `${taskTitle} → ${targetAuthor.name}`, newItem.id, 'task');
    addToast('success', 'Assignment Dispatched', `Assigned "${taskTitle}" to ${targetAuthor.name}`);
  };

  const markNotificationRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    addToast('info', 'Notifications Marked Read', 'All notifications marked as reviewed');
  };

  // Generate dynamic chart data based on Tab & Time Range
  const getMomentumData = (tab: MetricTab, range: TimeRange) => {
    let pointCount = 7;
    let baseMultiplier = 1;
    let labelPrefix = 'Day';

    if (range === '7d') {
      pointCount = 7;
      baseMultiplier = 1;
      labelPrefix = 'Day';
    } else if (range === '30d') {
      pointCount = 10;
      baseMultiplier = 4;
      labelPrefix = 'Wk';
    } else if (range === '90d') {
      pointCount = 12;
      baseMultiplier = 12;
      labelPrefix = 'Wk';
    } else if (range === '1y') {
      pointCount = 12;
      baseMultiplier = 48;
      labelPrefix = 'Mo';
    }

    const points: MomentumPoint[] = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    let total = 0;
    let peak = 0;

    // Tab specific base rates
    const configMap = {
      reads: { base: 6400, variance: 2200, secondaryRatio: 0.72 },
      engagement: { base: 78, variance: 12, secondaryRatio: 0.85 },
      saves: { base: 420, variance: 180, secondaryRatio: 0.65 },
      shares: { base: 190, variance: 85, secondaryRatio: 0.55 }
    };

    const cfg = configMap[tab];

    for (let i = 0; i < pointCount; i++) {
      let label = '';
      if (range === '7d') {
        label = days[i % 7];
      } else if (range === '1y') {
        label = months[i % 12];
      } else {
        label = `${labelPrefix} ${i + 1}`;
      }

      // Sine wave with subtle trend upward
      const trend = Math.sin((i / pointCount) * Math.PI) * cfg.variance + (i * (cfg.variance / pointCount));
      const val = Math.round(cfg.base * (range === '7d' ? 1 : baseMultiplier * 0.35) + trend);
      const secVal = Math.round(val * cfg.secondaryRatio);

      points.push({
        date: `2026-08-${(12 + i).toString().padStart(2, '0')}`,
        label,
        value: val,
        secondaryValue: secVal
      });

      total += val;
      if (val > peak) peak = val;
    }

    return {
      points,
      total,
      change: '+14.8%',
      peak,
      avgCompletion: 81.4
    };
  };

  const exportReport = async (format: 'csv' | 'json' | 'summary', dateScope: string): Promise<void> => {
    // simulated latency
    await new Promise((res) => setTimeout(res, 600));

    let contentStr = '';
    let filename = `elemental_editorial_report_${dateScope}_${Date.now()}`;
    let mimeType = 'text/plain';

    if (format === 'json') {
      filename += '.json';
      mimeType = 'application/json';
      contentStr = JSON.stringify(
        {
          generatedAt: new Date().toISOString(),
          dateScope,
          summary: {
            totalStories: stories.length,
            published: stories.filter((s) => s.status === 'published').length,
            scheduled: stories.filter((s) => s.status === 'scheduled').length,
            inReview: stories.filter((s) => s.status === 'review').length,
            totalAttentionItems: attentionItems.length,
            unresolvedAttention: attentionItems.filter((i) => !i.completed).length
          },
          stories,
          attentionItems,
          collections
        },
        null,
        2
      );
    } else if (format === 'csv') {
      filename += '.csv';
      mimeType = 'text/csv';
      const headers = 'ID,Title,Category,Author,Status,Views,CompletionRate,Saves,Shares,PublishedDate\n';
      const rows = stories
        .map(
          (s) =>
            `"${s.id}","${s.title.replace(/"/g, '""')}","${s.category}","${s.author.name}","${s.status}",${s.views},${s.completionRate}%,${s.saves},${s.shares},"${s.publishedAt || ''}"`
        )
        .join('\n');
      contentStr = headers + rows;
    } else {
      filename += '.txt';
      contentStr = `========================================
ELEMENTAL SCIENCE EDITORIAL REPORT
SCOPE: ${dateScope.toUpperCase()} | COMPILED: ${new Date().toLocaleString()}
========================================

EDITORIAL STATUS:
- Total Stories: ${stories.length}
- Published Live: ${stories.filter((s) => s.status === 'published').length}
- Scheduled Releases: ${stories.filter((s) => s.status === 'scheduled').length}
- In Review Queue: ${stories.filter((s) => s.status === 'review').length}
- Active Team Members: ${authors.length}
- Curated Collections: ${collections.length}

TOP PERFORMING PIECES:
${stories
  .filter((s) => s.status === 'published')
  .sort((a, b) => b.views - a.views)
  .slice(0, 5)
  .map((s, i) => `${i + 1}. ${s.title} (${s.category}) - ${s.views.toLocaleString()} reads | ${s.completionRate}% completion | ${s.saves} saves`)
  .join('\n')}

NEEDS ATTENTION ITEMS (${attentionItems.filter((i) => !i.completed).length} pending):
${attentionItems
  .filter((i) => !i.completed)
  .map((item) => `- [${item.priority.toUpperCase()}] ${item.title} (Assignee: ${item.assignee || 'Unassigned'})`)
  .join('\n')}

========================================
Generated by Elemental Content Operating System
`;
    }

    // Trigger browser download
    const blob = new Blob([contentStr], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    addToast('success', 'Report Export Ready', `Downloaded ${filename} (${format.toUpperCase()})`);
  };

  const resetDemoData = () => {
    localStorage.removeItem(STORAGE_KEYS.STORIES);
    localStorage.removeItem(STORAGE_KEYS.ATTENTION);
    localStorage.removeItem(STORAGE_KEYS.TIMELINE);
    localStorage.removeItem(STORAGE_KEYS.MEDIA);
    localStorage.removeItem(STORAGE_KEYS.COLLECTIONS);
    localStorage.removeItem(STORAGE_KEYS.AUTHORS);
    localStorage.removeItem(STORAGE_KEYS.NOTIFICATIONS);

    setStories(INITIAL_STORIES);
    setAttentionItems(INITIAL_ATTENTION_ITEMS);
    setTimeline(INITIAL_TIMELINE);
    setMedia(INITIAL_MEDIA);
    setCollections(INITIAL_COLLECTIONS);
    setAuthors(INITIAL_AUTHORS);
    setNotifications(INITIAL_NOTIFICATIONS);

    addToast('info', 'Demo Data Reset', 'Restored default science magazine repository');
  };

  return (
    <EditorialContext.Provider
      value={{
        stories,
        attentionItems,
        timeline,
        media,
        collections,
        authors,
        notifications,
        toasts,
        activeView,
        setActiveView,
        selectedStoryIdForFilter,
        setSelectedStoryIdForFilter,
        pipelineFilter,
        setPipelineFilter,
        searchQuery,
        setSearchQuery,
        editingStory,
        setEditingStory,
        isNewStoryModalOpen,
        setIsNewStoryModalOpen,
        previewStory,
        setPreviewStory,
        isUploadMediaModalOpen,
        setIsUploadMediaModalOpen,
        isAssignTaskModalOpen,
        setIsAssignTaskModalOpen,
        taskToAssign,
        setTaskToAssign,
        isScheduleModalOpen,
        setIsScheduleModalOpen,
        storyToSchedule,
        setStoryToSchedule,
        isExportModalOpen,
        setIsExportModalOpen,
        isCommandPaletteOpen,
        setIsCommandPaletteOpen,
        isNewCollectionModalOpen,
        setIsNewCollectionModalOpen,
        isAddAuthorModalOpen,
        setIsAddAuthorModalOpen,
        addToast,
        removeToast,
        createStory,
        updateStory,
        deleteStory,
        duplicateStory,
        publishStory,
        scheduleStory,
        setFeaturedStory,
        removeFeaturedStory,
        approveStory,
        completeAttentionItem,
        snoozeAttentionItem,
        assignAttentionItem,
        addAttentionItem,
        uploadMedia,
        deleteMedia,
        createCollection,
        updateCollection,
        deleteCollection,
        createAuthor,
        assignTaskToAuthor,
        markNotificationRead,
        markAllNotificationsRead,
        getMomentumData,
        exportReport,
        resetDemoData
      }}
    >
      {children}
    </EditorialContext.Provider>
  );
};

export const useEditorial = () => {
  const context = useContext(EditorialContext);
  if (!context) {
    throw new Error('useEditorial must be used within an EditorialProvider');
  }
  return context;
};

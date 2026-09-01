import { Story, TaskItem, PulseEvent, NotificationItem, HistoryItem, SavedView, CollectionItem, SettingsData } from '../types';
import { initialStories, initialTasks, initialPulseEvents, initialNotifications, initialHistory, initialSavedViews, initialCollections, initialSettings } from '../data/initialData';

const STORAGE_KEY = 'arctic_frost_observatory_state_v1';

interface ObservatoryState {
  stories: Story[];
  tasks: TaskItem[];
  pulseEvents: PulseEvent[];
  notifications: NotificationItem[];
  history: HistoryItem[];
  savedViews: SavedView[];
  collections: CollectionItem[];
  settings: SettingsData;
}

function loadState(): ObservatoryState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load observatory state from localStorage', e);
  }
  return {
    stories: initialStories,
    tasks: initialTasks,
    pulseEvents: initialPulseEvents,
    notifications: initialNotifications,
    history: initialHistory,
    savedViews: initialSavedViews,
    collections: initialCollections,
    settings: initialSettings
  };
}

function saveState(state: ObservatoryState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save observatory state to localStorage', e);
  }
}

export const observatoryService = {
  getState(): ObservatoryState {
    return loadState();
  },

  async delay(ms = 350): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  // Stories
  async getStories(): Promise<Story[]> {
    await this.delay(200);
    return loadState().stories;
  },

  async saveStory(storyData: Partial<Story>): Promise<Story> {
    await this.delay(450);
    const state = loadState();
    let updatedStories: Story[];
    let saved: Story;

    if (storyData.id) {
      updatedStories = state.stories.map(s => {
        if (s.id === storyData.id) {
          saved = { ...s, ...storyData } as Story;
          return saved;
        }
        return s;
      });
    } else {
      saved = {
        id: `story-${Date.now()}`,
        title: storyData.title || 'Untitled Research Story',
        excerpt: storyData.excerpt || 'New preliminary findings...',
        content: storyData.content || 'Full research report...',
        author: storyData.author || state.settings.editorialLead,
        category: storyData.category || 'Discoveries',
        status: storyData.status || 'Draft',
        reads: 0,
        completionRate: 0,
        saves: 0,
        shares: 0,
        returningReaders: 0,
        reviewer: storyData.reviewer || 'Daniel Vance',
        thumbnail: storyData.thumbnail || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600',
        signals: 'Stable',
        tags: storyData.tags || ['Research']
      };
      updatedStories = [saved, ...state.stories];
    }

    // Add history item
    const newHistory: HistoryItem = {
      id: `hist-${Date.now()}`,
      action: `You saved / updated story: "${saved!.title}"`,
      timestamp: 'Just now',
      category: 'Editorial'
    };

    saveState({
      ...state,
      stories: updatedStories,
      history: [newHistory, ...state.history]
    });
    return saved!;
  },

  async deleteStory(id: string): Promise<void> {
    await this.delay(350);
    const state = loadState();
    const target = state.stories.find(s => s.id === id);
    const updated = state.stories.filter(s => s.id !== id);
    const newHistory: HistoryItem = {
      id: `hist-${Date.now()}`,
      action: `You deleted story: "${target?.title || id}"`,
      timestamp: 'Just now',
      category: 'Archive'
    };
    saveState({
      ...state,
      stories: updated,
      history: [newHistory, ...state.history]
    });
  },

  async publishStory(id: string): Promise<Story> {
    await this.delay(500);
    const state = loadState();
    let publishedStory: Story | null = null;
    const updated = state.stories.map(s => {
      if (s.id === id) {
        publishedStory = {
          ...s,
          status: 'Published',
          publishedDate: new Date().toISOString().replace('T', ' ').substring(0, 16),
          reads: s.reads || Math.floor(Math.random() * 10000) + 5000,
          completionRate: s.completionRate || Math.floor(Math.random() * 20) + 70,
          saves: s.saves || Math.floor(Math.random() * 500) + 200,
          shares: s.shares || Math.floor(Math.random() * 300) + 100,
          returningReaders: s.returningReaders || Math.floor(Math.random() * 25) + 45,
          signals: 'Rising'
        };
        return publishedStory;
      }
      return s;
    });

    const newPulse: PulseEvent = {
      id: `pulse-${Date.now()}`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      timestamp: Date.now(),
      type: 'PUBLISHED',
      title: 'STORY PUBLISHED',
      description: publishedStory?.title || 'Editorial piece',
      targetId: id
    };

    const newHistory: HistoryItem = {
      id: `hist-${Date.now()}`,
      action: `You published story: "${publishedStory?.title}"`,
      timestamp: 'Just now',
      category: 'Publishing'
    };

    saveState({
      ...state,
      stories: updated,
      pulseEvents: [newPulse, ...state.pulseEvents],
      history: [newHistory, ...state.history]
    });

    return publishedStory!;
  },

  async setFeaturedStory(id: string): Promise<void> {
    await this.delay(300);
    const state = loadState();
    const updated = state.stories.map(s => ({
      ...s,
      isFeatured: s.id === id
    }));
    const target = state.stories.find(s => s.id === id);
    const newHistory: HistoryItem = {
      id: `hist-${Date.now()}`,
      action: `You changed featured front page story to: "${target?.title}"`,
      timestamp: 'Just now',
      category: 'Front Page'
    };
    saveState({
      ...state,
      stories: updated,
      history: [newHistory, ...state.history]
    });
  },

  // Tasks
  async updateTaskStatus(taskId: string, status: 'pending' | 'snoozed' | 'completed'): Promise<TaskItem[]> {
    await this.delay(300);
    const state = loadState();
    const updated = state.tasks.map(t => t.id === taskId ? { ...t, status } : t);
    const task = state.tasks.find(t => t.id === taskId);
    const newHistory: HistoryItem = {
      id: `hist-${Date.now()}`,
      action: `You marked task "${task?.title}" as ${status}`,
      timestamp: 'Just now',
      category: 'Attention Radar'
    };
    saveState({
      ...state,
      tasks: updated,
      history: [newHistory, ...state.history]
    });
    return updated;
  },

  // Notifications
  async markNotificationRead(id: string): Promise<NotificationItem[]> {
    await this.delay(200);
    const state = loadState();
    const updated = state.notifications.map(n => n.id === id ? { ...n, read: true } : n);
    saveState({ ...state, notifications: updated });
    return updated;
  },

  async markAllNotificationsRead(): Promise<NotificationItem[]> {
    await this.delay(200);
    const state = loadState();
    const updated = state.notifications.map(n => ({ ...n, read: true }));
    saveState({ ...state, notifications: updated });
    return updated;
  },

  // Saved Views
  async saveView(view: SavedView): Promise<SavedView[]> {
    await this.delay(300);
    const state = loadState();
    const updated = [...state.savedViews, view];
    saveState({ ...state, savedViews: updated });
    return updated;
  },

  async deleteSavedView(id: string): Promise<SavedView[]> {
    await this.delay(300);
    const state = loadState();
    const updated = state.savedViews.filter(v => v.id !== id);
    saveState({ ...state, savedViews: updated });
    return updated;
  },

  // Settings
  async updateSettings(settings: SettingsData): Promise<SettingsData> {
    await this.delay(400);
    const state = loadState();
    const newHistory: HistoryItem = {
      id: `hist-${Date.now()}`,
      action: 'You updated editorial command center settings',
      timestamp: 'Just now',
      category: 'System'
    };
    saveState({
      ...state,
      settings,
      history: [newHistory, ...state.history]
    });
    return settings;
  },

  // Collections
  async addCollection(col: Omit<CollectionItem, 'id'>): Promise<CollectionItem[]> {
    await this.delay(400);
    const state = loadState();
    const newItem: CollectionItem = {
      ...col,
      id: `col-${Date.now()}`
    };
    const updated = [newItem, ...state.collections];
    saveState({ ...state, collections: updated });
    return updated;
  },

  // History Clear
  async clearHistory(): Promise<HistoryItem[]> {
    await this.delay(200);
    const state = loadState();
    saveState({ ...state, history: [] });
    return [];
  }
};

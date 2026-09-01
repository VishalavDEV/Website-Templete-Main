import { ProjectInquiry } from '../types';

const STORAGE_KEYS = {
  SAVED_ARTICLES: 'valence_saved_articles_v1',
  PROJECT_INQUIRIES: 'valence_project_inquiries_v1',
  USER_PREFERENCES: 'valence_user_preferences_v1',
};

// Safe localStorage access
export const getSavedArticleIds = (): string[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SAVED_ARTICLES);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn('Failed to read saved articles from localStorage', e);
    return [];
  }
};

export const toggleSaveArticle = (articleId: string): { isSaved: boolean; count: number } => {
  try {
    const current = getSavedArticleIds();
    let updated: string[];
    let isSaved = false;

    if (current.includes(articleId)) {
      updated = current.filter((id) => id !== articleId);
      isSaved = false;
    } else {
      updated = [...current, articleId];
      isSaved = true;
    }

    localStorage.setItem(STORAGE_KEYS.SAVED_ARTICLES, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('valence-saved-articles-updated', { detail: updated }));
    return { isSaved, count: updated.length };
  } catch (e) {
    console.warn('Failed to save article to localStorage', e);
    return { isSaved: false, count: 0 };
  }
};

export const getStoredInquiries = (): ProjectInquiry[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROJECT_INQUIRIES);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn('Failed to read inquiries from localStorage', e);
    return [];
  }
};

export const saveProjectInquiry = (inquiry: ProjectInquiry): void => {
  try {
    const existing = getStoredInquiries();
    const updated = [inquiry, ...existing];
    localStorage.setItem(STORAGE_KEYS.PROJECT_INQUIRIES, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('valence-inquiries-updated', { detail: updated }));
  } catch (e) {
    console.warn('Failed to save inquiry to localStorage', e);
  }
};

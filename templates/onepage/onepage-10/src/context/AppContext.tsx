import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  AppNotification,
  AutomationWorkflow,
  CaseStudy,
  ConsultationRequest,
  ContactSubmission,
  FeatureItem,
  InsightArticle,
  SolutionItem,
  ThemeMode,
  ToastNotification,
  UserPreferences,
  WorkflowStep
} from '../types';
import { storageService } from '../services/storageService';

interface AppContextType {
  // Theme & Preferences
  preferences: UserPreferences;
  updatePreferences: (prefs: Partial<UserPreferences>) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  resetAllDemoData: () => void;

  // Toasts
  toasts: ToastNotification[];
  addToast: (toast: Omit<ToastNotification, 'id'>) => void;
  removeToast: (id: string) => void;

  // Notifications
  notifications: AppNotification[];
  unreadNotificationCount: number;
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
  deleteNotification: (id: string) => void;
  isNotificationPanelOpen: boolean;
  setIsNotificationPanelOpen: (open: boolean) => void;

  // Workflows
  workflows: AutomationWorkflow[];
  addWorkflow: (wf: Omit<AutomationWorkflow, 'id' | 'totalExecutions' | 'successRate' | 'createdAt'>) => AutomationWorkflow;
  updateWorkflow: (id: string, updates: Partial<AutomationWorkflow>) => void;
  toggleWorkflowStatus: (id: string) => void;
  deleteWorkflow: (id: string) => void;
  duplicateWorkflow: (id: string) => void;
  addWorkflowStep: (workflowId: string, step: Omit<WorkflowStep, 'id'>) => void;

  // Consultations & Contacts
  consultations: ConsultationRequest[];
  bookConsultation: (data: Omit<ConsultationRequest, 'id' | 'createdAt' | 'status'>) => Promise<ConsultationRequest>;
  updateConsultationStatus: (id: string, status: ConsultationRequest['status']) => void;
  deleteConsultation: (id: string) => void;

  contacts: ContactSubmission[];
  submitContact: (data: Omit<ContactSubmission, 'id' | 'createdAt' | 'status'>) => Promise<ContactSubmission>;
  updateContactStatus: (id: string, status: ContactSubmission['status']) => void;
  deleteContact: (id: string) => void;

  // Bookmarks
  bookmarkedArticles: string[];
  toggleBookmarkArticle: (id: string) => void;

  // Modals & Overlays
  isConsultationModalOpen: boolean;
  setIsConsultationModalOpen: (open: boolean) => void;

  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;

  isOperationsConsoleOpen: boolean;
  setIsOperationsConsoleOpen: (open: boolean) => void;

  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;

  activeSolutionModal: SolutionItem | null;
  setActiveSolutionModal: (solution: SolutionItem | null) => void;

  activeCaseStudyModal: CaseStudy | null;
  setActiveCaseStudyModal: (caseStudy: CaseStudy | null) => void;

  activeArticleModal: InsightArticle | null;
  setActiveArticleModal: (article: InsightArticle | null) => void;

  activeFeatureModal: FeatureItem | null;
  setActiveFeatureModal: (feature: FeatureItem | null) => void;

  isAiInsightModalOpen: boolean;
  setIsAiInsightModalOpen: (open: boolean) => void;

  editingWorkflow: AutomationWorkflow | null;
  setEditingWorkflow: (wf: AutomationWorkflow | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State initialization from Storage Service
  const [preferences, setPreferences] = useState<UserPreferences>(() => storageService.getPreferences());
  const [notifications, setNotifications] = useState<AppNotification[]>(() => storageService.getNotifications());
  const [workflows, setWorkflows] = useState<AutomationWorkflow[]>(() => storageService.getWorkflows());
  const [consultations, setConsultations] = useState<ConsultationRequest[]>(() => storageService.getConsultations());
  const [contacts, setContacts] = useState<ContactSubmission[]>(() => storageService.getContacts());
  const [bookmarkedArticles, setBookmarkedArticles] = useState<string[]>(() => storageService.getBookmarks());
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  // Modals State
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOperationsConsoleOpen, setIsOperationsConsoleOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);
  const [activeSolutionModal, setActiveSolutionModal] = useState<SolutionItem | null>(null);
  const [activeCaseStudyModal, setActiveCaseStudyModal] = useState<CaseStudy | null>(null);
  const [activeArticleModal, setActiveArticleModal] = useState<InsightArticle | null>(null);
  const [activeFeatureModal, setActiveFeatureModal] = useState<FeatureItem | null>(null);
  const [isAiInsightModalOpen, setIsAiInsightModalOpen] = useState(false);
  const [editingWorkflow, setEditingWorkflow] = useState<AutomationWorkflow | null>(null);

  // Apply Theme to DOM
  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = () => {
      const isDark =
        preferences.theme === 'dark' ||
        (preferences.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

      if (isDark) {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
      }
    };

    applyTheme();

    if (preferences.theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => applyTheme();
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [preferences.theme]);

  // Global Keyboard Shortcuts (Ctrl+K or Cmd+K for search, ESC to close top modal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      } else if (e.key === 'Escape') {
        // Close modals in priority order
        if (isSearchOpen) setIsSearchOpen(false);
        else if (isNotificationPanelOpen) setIsNotificationPanelOpen(false);
        else if (isConsultationModalOpen) setIsConsultationModalOpen(false);
        else if (isOperationsConsoleOpen) setIsOperationsConsoleOpen(false);
        else if (isSettingsOpen) setIsSettingsOpen(false);
        else if (isAiInsightModalOpen) setIsAiInsightModalOpen(false);
        else if (editingWorkflow) setEditingWorkflow(null);
        else if (activeSolutionModal) setActiveSolutionModal(null);
        else if (activeCaseStudyModal) setActiveCaseStudyModal(null);
        else if (activeArticleModal) setActiveArticleModal(null);
        else if (activeFeatureModal) setActiveFeatureModal(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isSearchOpen,
    isNotificationPanelOpen,
    isConsultationModalOpen,
    isOperationsConsoleOpen,
    isSettingsOpen,
    isAiInsightModalOpen,
    editingWorkflow,
    activeSolutionModal,
    activeCaseStudyModal,
    activeArticleModal,
    activeFeatureModal
  ]);

  // Toast Management
  const addToast = (toast: Omit<ToastNotification, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    const newToast: ToastNotification = { ...toast, id };
    setToasts(prev => [...prev, newToast]);

    const duration = toast.duration || 4000;
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Preference updates
  const updatePreferences = (prefs: Partial<UserPreferences>) => {
    const updated = storageService.savePreferences(prefs);
    setPreferences(updated);
    addToast({
      type: 'info',
      title: 'Preferences Updated',
      message: 'Your workspace settings have been persisted.'
    });
  };

  const setTheme = (theme: ThemeMode) => {
    updatePreferences({ theme });
  };

  // Notifications
  const unreadNotificationCount = notifications.filter(n => !n.read).length;

  const markNotificationRead = (id: string) => {
    const updated = storageService.markNotificationAsRead(id);
    setNotifications(updated);
  };

  const markAllNotificationsRead = () => {
    const updated = storageService.markAllNotificationsAsRead();
    setNotifications(updated);
    addToast({
      type: 'success',
      title: 'Notifications Cleared',
      message: 'All notifications marked as read.'
    });
  };

  const deleteNotification = (id: string) => {
    const updated = storageService.deleteNotification(id);
    setNotifications(updated);
  };

  // Workflows CRUD
  const handleAddWorkflow = (wf: Omit<AutomationWorkflow, 'id' | 'totalExecutions' | 'successRate' | 'createdAt'>) => {
    const created = storageService.addWorkflow(wf);
    setWorkflows(storageService.getWorkflows());
    addToast({
      type: 'success',
      title: 'Workflow Created',
      message: `"${created.name}" is now saved in your automation pipeline.`
    });
    return created;
  };

  const handleUpdateWorkflow = (id: string, updates: Partial<AutomationWorkflow>) => {
    const updated = storageService.updateWorkflow(id, updates);
    setWorkflows(updated);
    addToast({
      type: 'info',
      title: 'Workflow Updated',
      message: 'Changes saved successfully.'
    });
  };

  const handleToggleWorkflowStatus = (id: string) => {
    const updated = storageService.toggleWorkflowStatus(id);
    setWorkflows(updated);
    const target = updated.find(w => w.id === id);
    addToast({
      type: target?.status === 'active' ? 'success' : 'warning',
      title: `Workflow ${target?.status === 'active' ? 'Activated' : 'Paused'}`,
      message: `"${target?.name}" status changed to ${target?.status}.`
    });
  };

  const handleDeleteWorkflow = (id: string) => {
    const target = workflows.find(w => w.id === id);
    const updated = storageService.deleteWorkflow(id);
    setWorkflows(updated);
    addToast({
      type: 'info',
      title: 'Workflow Removed',
      message: `"${target?.name || 'Workflow'}" has been deleted.`
    });
  };

  const handleDuplicateWorkflow = (id: string) => {
    const dup = storageService.duplicateWorkflow(id);
    if (dup) {
      setWorkflows(storageService.getWorkflows());
      addToast({
        type: 'success',
        title: 'Workflow Duplicated',
        message: `Created "${dup.name}".`
      });
    }
  };

  const handleAddWorkflowStep = (workflowId: string, step: Omit<WorkflowStep, 'id'>) => {
    const updated = storageService.addWorkflowStep(workflowId, step);
    setWorkflows(updated);
    addToast({
      type: 'success',
      title: 'Step Added',
      message: `New action step "${step.title}" added to workflow.`
    });
  };

  // Consultations & Leads
  const bookConsultation = async (data: Omit<ConsultationRequest, 'id' | 'createdAt' | 'status'>): Promise<ConsultationRequest> => {
    // Simulated realistic network delay
    await new Promise(res => setTimeout(res, 950));
    const created = storageService.addConsultation(data);
    setConsultations(storageService.getConsultations());
    setNotifications(storageService.getNotifications());
    addToast({
      type: 'success',
      title: 'Strategy Call Requested',
      message: `Confirmation ID #${created.id} generated.`
    });
    return created;
  };

  const handleUpdateConsultationStatus = (id: string, status: ConsultationRequest['status']) => {
    const updated = storageService.updateConsultationStatus(id, status);
    setConsultations(updated);
    addToast({
      type: 'info',
      title: 'Status Updated',
      message: `Lead #${id} marked as ${status}.`
    });
  };

  const handleDeleteConsultation = (id: string) => {
    const updated = storageService.deleteConsultation(id);
    setConsultations(updated);
    addToast({
      type: 'info',
      title: 'Lead Removed',
      message: `Consultation request #${id} deleted.`
    });
  };

  // Contacts
  const submitContact = async (data: Omit<ContactSubmission, 'id' | 'createdAt' | 'status'>): Promise<ContactSubmission> => {
    await new Promise(res => setTimeout(res, 850));
    const created = storageService.addContact(data);
    setContacts(storageService.getContacts());
    setNotifications(storageService.getNotifications());
    addToast({
      type: 'success',
      title: 'Message Transmitted',
      message: 'Our enterprise advisory team will respond within 4 hours.'
    });
    return created;
  };

  const handleUpdateContactStatus = (id: string, status: ContactSubmission['status']) => {
    const updated = storageService.updateContactStatus(id, status);
    setContacts(updated);
  };

  const handleDeleteContact = (id: string) => {
    const updated = storageService.deleteContact(id);
    setContacts(updated);
  };

  // Bookmarks
  const toggleBookmarkArticle = (id: string) => {
    const updated = storageService.toggleBookmark(id);
    setBookmarkedArticles(updated);
    const isNowBookmarked = updated.includes(id);
    addToast({
      type: 'info',
      title: isNowBookmarked ? 'Article Bookmarked' : 'Bookmark Removed',
      message: isNowBookmarked ? 'Saved to your personal reading library.' : 'Removed from your bookmarks.'
    });
  };

  // Reset demo
  const resetAllDemoData = () => {
    storageService.resetDemoData();
    setPreferences(storageService.getPreferences());
    setNotifications(storageService.getNotifications());
    setWorkflows(storageService.getWorkflows());
    setConsultations(storageService.getConsultations());
    setContacts(storageService.getContacts());
    setBookmarkedArticles(storageService.getBookmarks());
    addToast({
      type: 'info',
      title: 'Demo Environment Reset',
      message: 'Workspace restored to default enterprise baseline.'
    });
  };

  return (
    <AppContext.Provider
      value={{
        preferences,
        updatePreferences,
        theme: preferences.theme,
        setTheme,
        resetAllDemoData,
        toasts,
        addToast,
        removeToast,
        notifications,
        unreadNotificationCount,
        markNotificationRead,
        markAllNotificationsRead,
        deleteNotification,
        isNotificationPanelOpen,
        setIsNotificationPanelOpen,
        workflows,
        addWorkflow: handleAddWorkflow,
        updateWorkflow: handleUpdateWorkflow,
        toggleWorkflowStatus: handleToggleWorkflowStatus,
        deleteWorkflow: handleDeleteWorkflow,
        duplicateWorkflow: handleDuplicateWorkflow,
        addWorkflowStep: handleAddWorkflowStep,
        consultations,
        bookConsultation,
        updateConsultationStatus: handleUpdateConsultationStatus,
        deleteConsultation: handleDeleteConsultation,
        contacts,
        submitContact,
        updateContactStatus: handleUpdateContactStatus,
        deleteContact: handleDeleteContact,
        bookmarkedArticles,
        toggleBookmarkArticle,
        isConsultationModalOpen,
        setIsConsultationModalOpen,
        isSearchOpen,
        setIsSearchOpen,
        isOperationsConsoleOpen,
        setIsOperationsConsoleOpen,
        isSettingsOpen,
        setIsSettingsOpen,
        activeSolutionModal,
        setActiveSolutionModal,
        activeCaseStudyModal,
        setActiveCaseStudyModal,
        activeArticleModal,
        setActiveArticleModal,
        activeFeatureModal,
        setActiveFeatureModal,
        isAiInsightModalOpen,
        setIsAiInsightModalOpen,
        editingWorkflow,
        setEditingWorkflow
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

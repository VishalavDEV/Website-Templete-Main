import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  UserRole,
  Client,
  Project,
  Task,
  TaskStatus,
  TaskPriority,
  Milestone,
  Department,
  Team,
  TimeEntry,
  Expense,
  Invoice,
  Payment,
  FileItem,
  ChatChannel,
  ChatMessage,
  NotificationItem,
  ActivityLog,
  AuditLog,
  SystemSettings
} from '../types';

import {
  initialUsers,
  initialClients,
  initialProjects,
  initialTasks,
  initialMilestones,
  initialDepartments,
  initialTeams,
  initialTimeEntries,
  initialExpenses,
  initialInvoices,
  initialPayments,
  initialFiles,
  initialChatChannels,
  initialChatMessages,
  initialNotifications,
  initialProjectTemplates,
  initialActivityLogs,
  initialAuditLogs,
  initialSettings
} from '../data/mockData';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

export interface ActiveTimer {
  isRunning: boolean;
  elapsedSeconds: number;
  projectId: string;
  projectName: string;
  taskId: string;
  taskTitle: string;
  description: string;
  startTime?: number;
}

interface AppContextType {
  // Theme
  theme: 'dark' | 'light';
  toggleTheme: () => void;

  // Auth & Current User
  currentUser: User;
  setCurrentUser: (user: User) => void;
  switchRole: (role: UserRole) => void;

  // Global Search Modal
  globalSearchQuery: string;
  setGlobalSearchQuery: (q: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;

  // Toast System
  toasts: Toast[];
  addToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;

  // Data Collections
  projects: Project[];
  tasks: Task[];
  milestones: Milestone[];
  clients: Client[];
  users: User[];
  departments: Department[];
  teams: Team[];
  timeEntries: TimeEntry[];
  expenses: Expense[];
  invoices: Invoice[];
  payments: Payment[];
  files: FileItem[];
  chatChannels: ChatChannel[];
  chatMessages: ChatMessage[];
  notifications: NotificationItem[];
  activityLogs: ActivityLog[];
  auditLogs: AuditLog[];
  settings: SystemSettings;

  // CRUD Actions
  // Project CRUD
  addProject: (project: Omit<Project, 'id' | 'code' | 'progress' | 'spent' | 'attachmentsCount' | 'tasksCount' | 'completedTasksCount'>) => Project;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  archiveProject: (id: string) => void;
  restoreProject: (id: string) => void;
  duplicateProject: (id: string) => void;

  // Task CRUD
  addTask: (task: Omit<Task, 'id' | 'taskCode' | 'actualHours' | 'subtasks' | 'comments' | 'attachments'>) => Task;
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  updateTaskStatus: (taskId: string, status: TaskStatus) => void;

  // Milestone CRUD
  addMilestone: (m: Omit<Milestone, 'id' | 'progress'>) => void;
  updateMilestone: (m: Milestone) => void;
  deleteMilestone: (id: string) => void;

  // Client CRUD
  addClient: (c: Omit<Client, 'id' | 'activeProjectsCount' | 'joinedDate' | 'contacts'>) => void;
  updateClient: (c: Client) => void;
  deleteClient: (id: string) => void;

  // Team CRUD
  addUser: (u: Omit<User, 'id' | 'joinedDate'>) => void;
  updateUser: (u: User) => void;
  deleteUser: (id: string) => void;

  // Financials
  addExpense: (e: Omit<Expense, 'id'>) => void;
  deleteExpense: (id: string) => void;
  addInvoice: (inv: Omit<Invoice, 'id' | 'invoiceNumber'>) => void;
  addPayment: (p: Omit<Payment, 'id'>) => void;

  // Time Tracking Stopwatch
  activeTimer: ActiveTimer;
  startTimer: (projectId: string, taskId: string, description: string) => void;
  stopTimer: () => void;
  addTimeEntry: (te: Omit<TimeEntry, 'id' | 'status'>) => void;
  deleteTimeEntry: (id: string) => void;

  // Files
  addFile: (f: Omit<FileItem, 'id' | 'uploadedAt'>) => void;
  deleteFile: (id: string) => void;

  // Chat
  sendChatMessage: (channelId: string, content: string) => void;

  // Notifications
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
  deleteNotification: (id: string) => void;

  // Settings
  updateSettings: (s: Partial<SystemSettings>) => void;

  // Demo Reset
  resetToDemoData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const loadStorage = <T,>(key: string, fallback: T): T => {
  try {
    const item = localStorage.getItem(`corevista_${key}`);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
};

const saveStorage = <T,>(key: string, data: T) => {
  try {
    localStorage.setItem(`corevista_${key}`, JSON.stringify(data));
  } catch (e) {
    console.error('LocalStorage error:', e);
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState<'dark' | 'light'>(() => loadStorage('theme', 'dark'));

  useEffect(() => {
    saveStorage('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Auth & User
  const [users, setUsers] = useState<User[]>(() => loadStorage('users', initialUsers));
  const [currentUser, setCurrentUser] = useState<User>(() => loadStorage('currentUser', initialUsers[0]));

  useEffect(() => saveStorage('users', users), [users]);
  useEffect(() => saveStorage('currentUser', currentUser), [currentUser]);

  const switchRole = (role: UserRole) => {
    const found = users.find(u => u.role === role);
    if (found) {
      setCurrentUser(found);
      addToast(`Switched active profile to ${found.name} (${role})`, 'info');
    } else {
      const updated = { ...currentUser, role };
      setCurrentUser(updated);
      addToast(`Updated current role to ${role}`, 'info');
    }
  };

  // Global Search & Toasts
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'success') => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Primary Collections
  const [projects, setProjects] = useState<Project[]>(() => loadStorage('projects', initialProjects));
  const [tasks, setTasks] = useState<Task[]>(() => loadStorage('tasks', initialTasks));
  const [milestones, setMilestones] = useState<Milestone[]>(() => loadStorage('milestones', initialMilestones));
  const [clients, setClients] = useState<Client[]>(() => loadStorage('clients', initialClients));
  const [departments] = useState<Department[]>(initialDepartments);
  const [teams] = useState<Team[]>(initialTeams);
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>(() => loadStorage('timeEntries', initialTimeEntries));
  const [expenses, setExpenses] = useState<Expense[]>(() => loadStorage('expenses', initialExpenses));
  const [invoices, setInvoices] = useState<Invoice[]>(() => loadStorage('invoices', initialInvoices));
  const [payments, setPayments] = useState<Payment[]>(() => loadStorage('payments', initialPayments));
  const [files, setFiles] = useState<FileItem[]>(() => loadStorage('files', initialFiles));
  const [chatChannels] = useState<ChatChannel[]>(initialChatChannels);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => loadStorage('chatMessages', initialChatMessages));
  const [notifications, setNotifications] = useState<NotificationItem[]>(() => loadStorage('notifications', initialNotifications));
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>(() => loadStorage('activityLogs', initialActivityLogs));
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(() => loadStorage('auditLogs', initialAuditLogs));
  const [settings, setSettings] = useState<SystemSettings>(() => loadStorage('settings', initialSettings));

  // Sync state to local storage
  useEffect(() => saveStorage('projects', projects), [projects]);
  useEffect(() => saveStorage('tasks', tasks), [tasks]);
  useEffect(() => saveStorage('milestones', milestones), [milestones]);
  useEffect(() => saveStorage('clients', clients), [clients]);
  useEffect(() => saveStorage('timeEntries', timeEntries), [timeEntries]);
  useEffect(() => saveStorage('expenses', expenses), [expenses]);
  useEffect(() => saveStorage('invoices', invoices), [invoices]);
  useEffect(() => saveStorage('payments', payments), [payments]);
  useEffect(() => saveStorage('files', files), [files]);
  useEffect(() => saveStorage('chatMessages', chatMessages), [chatMessages]);
  useEffect(() => saveStorage('notifications', notifications), [notifications]);
  useEffect(() => saveStorage('activityLogs', activityLogs), [activityLogs]);
  useEffect(() => saveStorage('auditLogs', auditLogs), [auditLogs]);
  useEffect(() => saveStorage('settings', settings), [settings]);

  // Helper activity logger
  const logActivity = (action: string, entityType: ActivityLog['entityType'], entityId: string, entityName: string, details: string) => {
    const newLog: ActivityLog = {
      id: `act-${Date.now()}`,
      userId: currentUser.id,
      userName: currentUser.name,
      userAvatar: currentUser.avatar,
      action,
      entityType,
      entityId,
      entityName,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
      details
    };
    setActivityLogs(prev => [newLog, ...prev]);
  };

  // Stopwatch Timer
  const [activeTimer, setActiveTimer] = useState<ActiveTimer>({
    isRunning: false,
    elapsedSeconds: 0,
    projectId: '',
    projectName: '',
    taskId: '',
    taskTitle: '',
    description: ''
  });

  useEffect(() => {
    let interval: any = null;
    if (activeTimer.isRunning) {
      interval = setInterval(() => {
        setActiveTimer(prev => ({ ...prev, elapsedSeconds: prev.elapsedSeconds + 1 }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeTimer.isRunning]);

  const startTimer = (projectId: string, taskId: string, description: string) => {
    const prj = projects.find(p => p.id === projectId);
    const tsk = tasks.find(t => t.id === taskId);
    setActiveTimer({
      isRunning: true,
      elapsedSeconds: 0,
      projectId,
      projectName: prj ? prj.name : 'General Work',
      taskId,
      taskTitle: tsk ? tsk.title : 'Task',
      description,
      startTime: Date.now()
    });
    addToast(`Timer started for "${tsk ? tsk.title : 'Task'}"`, 'info');
  };

  const stopTimer = () => {
    if (!activeTimer.isRunning) return;
    const hours = Number((activeTimer.elapsedSeconds / 3600).toFixed(2));
    if (hours > 0.01) {
      addTimeEntry({
        userId: currentUser.id,
        userName: currentUser.name,
        projectId: activeTimer.projectId || projects[0]?.id || 'p-1',
        projectName: activeTimer.projectName || projects[0]?.name || 'General Project',
        taskId: activeTimer.taskId || tasks[0]?.id || 't-1',
        taskTitle: activeTimer.taskTitle || tasks[0]?.title || 'Task',
        description: activeTimer.description || 'Logged from live stopwatch timer',
        date: new Date().toISOString().split('T')[0],
        hours: Math.max(hours, 0.1),
        billable: true,
        hourlyRate: currentUser.hourlyRate || 100
      });
      addToast(`Timer stopped. Logged ${hours} hours successfully!`, 'success');
    } else {
      addToast('Timer stopped. Duration too short to record.', 'info');
    }
    setActiveTimer({
      isRunning: false,
      elapsedSeconds: 0,
      projectId: '',
      projectName: '',
      taskId: '',
      taskTitle: '',
      description: ''
    });
  };

  // CRUD IMPLEMENTATIONS

  // Project CRUD
  const addProject = (pData: Omit<Project, 'id' | 'code' | 'progress' | 'spent' | 'attachmentsCount' | 'tasksCount' | 'completedTasksCount'>): Project => {
    const newId = `p-${Date.now()}`;
    const newCode = `PRJ-${pData.name.substring(0, 4).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
    const newProject: Project = {
      ...pData,
      id: newId,
      code: newCode,
      progress: 0,
      spent: 0,
      attachmentsCount: 0,
      tasksCount: 0,
      completedTasksCount: 0,
      isArchived: false
    };
    setProjects(prev => [newProject, ...prev]);
    logActivity('Created Project', 'Project', newId, newProject.name, `New project created with budget $${newProject.budget.toLocaleString()}`);
    addToast(`Project "${newProject.name}" created successfully.`, 'success');
    return newProject;
  };

  const updateProject = (updated: Project) => {
    setProjects(prev => prev.map(p => (p.id === updated.id ? updated : p)));
    logActivity('Updated Project', 'Project', updated.id, updated.name, `Project details updated. Status: ${updated.status}`);
    addToast(`Project "${updated.name}" updated.`, 'success');
  };

  const deleteProject = (id: string) => {
    const target = projects.find(p => p.id === id);
    setProjects(prev => prev.filter(p => p.id !== id));
    if (target) {
      logActivity('Deleted Project', 'Project', id, target.name, `Project deleted from workspace.`);
      addToast(`Project "${target.name}" deleted.`, 'warning');
    }
  };

  const archiveProject = (id: string) => {
    setProjects(prev => prev.map(p => (p.id === id ? { ...p, isArchived: true, status: 'Archived' } : p)));
    const target = projects.find(p => p.id === id);
    if (target) {
      logActivity('Archived Project', 'Project', id, target.name, `Project moved to archive.`);
      addToast(`Project "${target.name}" archived.`, 'info');
    }
  };

  const restoreProject = (id: string) => {
    setProjects(prev => prev.map(p => (p.id === id ? { ...p, isArchived: false, status: 'In Progress' } : p)));
    const target = projects.find(p => p.id === id);
    if (target) {
      logActivity('Restored Project', 'Project', id, target.name, `Project restored from archive.`);
      addToast(`Project "${target.name}" restored to active status.`, 'success');
    }
  };

  const duplicateProject = (id: string) => {
    const target = projects.find(p => p.id === id);
    if (!target) return;
    const duplicated: Project = {
      ...target,
      id: `p-dup-${Date.now()}`,
      code: `${target.code}-COPY`,
      name: `${target.name} (Copy)`,
      status: 'Planning',
      progress: 0,
      spent: 0,
      tasksCount: 0,
      completedTasksCount: 0,
      startDate: new Date().toISOString().split('T')[0]
    };
    setProjects(prev => [duplicated, ...prev]);
    logActivity('Duplicated Project', 'Project', duplicated.id, duplicated.name, `Duplicated from ${target.name}`);
    addToast(`Project "${target.name}" duplicated successfully.`, 'success');
  };

  // Task CRUD
  const addTask = (tData: Omit<Task, 'id' | 'taskCode' | 'actualHours' | 'subtasks' | 'comments' | 'attachments'>): Task => {
    const newId = `t-${Date.now()}`;
    const newTaskCode = `TASK-${Math.floor(100 + Math.random() * 900)}`;
    const newTask: Task = {
      ...tData,
      id: newId,
      taskCode: newTaskCode,
      actualHours: 0,
      subtasks: [],
      comments: [],
      attachments: []
    };
    setTasks(prev => [newTask, ...prev]);

    // Recalculate project tasks count
    setProjects(prev =>
      prev.map(p => (p.id === newTask.projectId ? { ...p, tasksCount: p.tasksCount + 1 } : p))
    );

    logActivity('Created Task', 'Task', newId, newTask.title, `Assigned to ${newTask.assigneeName} in ${newTask.projectName}`);
    addToast(`Task "${newTask.title}" created.`, 'success');
    return newTask;
  };

  const updateTask = (updated: Task) => {
    setTasks(prev => prev.map(t => (t.id === updated.id ? updated : t)));
    // Check if completion status changed
    const old = tasks.find(t => t.id === updated.id);
    if (old && old.status !== updated.status) {
      updateProjectProgress(updated.projectId);
    }
    addToast(`Task "${updated.title}" updated.`, 'success');
  };

  const updateTaskStatus = (taskId: string, status: TaskStatus) => {
    const target = tasks.find(t => t.id === taskId);
    if (!target) return;
    const updated = { ...target, status };
    setTasks(prev => prev.map(t => (t.id === taskId ? updated : t)));
    updateProjectProgress(target.projectId);
    logActivity('Changed Task Status', 'Task', taskId, target.title, `Status updated to ${status}`);
    addToast(`Task "${target.title}" moved to ${status}.`, 'info');
  };

  const updateProjectProgress = (projectId: string) => {
    setTasks(latestTasks => {
      const projTasks = latestTasks.filter(t => t.projectId === projectId);
      const total = projTasks.length;
      const completed = projTasks.filter(t => t.status === 'Completed').length;
      const progressPct = total > 0 ? Math.round((completed / total) * 100) : 0;
      setProjects(prev =>
        prev.map(p => (p.id === projectId ? { ...p, tasksCount: total, completedTasksCount: completed, progress: progressPct } : p))
      );
      return latestTasks;
    });
  };

  const deleteTask = (id: string) => {
    const target = tasks.find(t => t.id === id);
    setTasks(prev => prev.filter(t => t.id !== id));
    if (target) {
      setProjects(prev =>
        prev.map(p => (p.id === target.projectId ? { ...p, tasksCount: Math.max(0, p.tasksCount - 1) } : p))
      );
      logActivity('Deleted Task', 'Task', id, target.title, `Deleted from project`);
      addToast(`Task "${target.title}" deleted.`, 'warning');
    }
  };

  // Milestone CRUD
  const addMilestone = (m: Omit<Milestone, 'id' | 'progress'>) => {
    const newM: Milestone = {
      ...m,
      id: `m-${Date.now()}`,
      progress: 0
    };
    setMilestones(prev => [...prev, newM]);
    addToast(`Milestone "${newM.title}" added.`, 'success');
  };

  const updateMilestone = (m: Milestone) => {
    setMilestones(prev => prev.map(item => (item.id === m.id ? m : item)));
    addToast(`Milestone "${m.title}" updated.`, 'success');
  };

  const deleteMilestone = (id: string) => {
    setMilestones(prev => prev.filter(m => m.id !== id));
    addToast('Milestone deleted.', 'info');
  };

  // Client CRUD
  const addClient = (c: Omit<Client, 'id' | 'activeProjectsCount' | 'joinedDate' | 'contacts'>) => {
    const newClient: Client = {
      ...c,
      id: `c-${Date.now()}`,
      activeProjectsCount: 0,
      joinedDate: new Date().toISOString().split('T')[0],
      contacts: []
    };
    setClients(prev => [newClient, ...prev]);
    logActivity('Added Client', 'Client', newClient.id, newClient.name, `New client company added`);
    addToast(`Client "${newClient.name}" added.`, 'success');
  };

  const updateClient = (c: Client) => {
    setClients(prev => prev.map(item => (item.id === c.id ? c : item)));
    addToast(`Client "${c.name}" updated.`, 'success');
  };

  const deleteClient = (id: string) => {
    const target = clients.find(c => c.id === id);
    setClients(prev => prev.filter(c => c.id !== id));
    if (target) {
      addToast(`Client "${target.name}" deleted.`, 'warning');
    }
  };

  // Team Users CRUD
  const addUser = (u: Omit<User, 'id' | 'joinedDate'>) => {
    const newUser: User = {
      ...u,
      id: `u-${Date.now()}`,
      joinedDate: new Date().toISOString().split('T')[0]
    };
    setUsers(prev => [...prev, newUser]);
    addToast(`Team member "${newUser.name}" added.`, 'success');
  };

  const updateUser = (u: User) => {
    setUsers(prev => prev.map(item => (item.id === u.id ? u : item)));
    if (currentUser.id === u.id) {
      setCurrentUser(u);
    }
    addToast(`User profile "${u.name}" updated.`, 'success');
  };

  const deleteUser = (id: string) => {
    setUsers(prev => prev.filter(u => u.id !== id));
    addToast('Team member deleted.', 'info');
  };

  // Financial CRUD
  const addExpense = (e: Omit<Expense, 'id'>) => {
    const newExp: Expense = {
      ...e,
      id: `exp-${Date.now()}`
    };
    setExpenses(prev => [newExp, ...prev]);
    // update project spent
    setProjects(prev =>
      prev.map(p => (p.id === e.projectId ? { ...p, spent: p.spent + e.amount } : p))
    );
    addToast(`Expense of $${e.amount.toLocaleString()} logged for ${e.projectName}.`, 'success');
  };

  const deleteExpense = (id: string) => {
    setExpenses(prev => prev.filter(e => e.id !== id));
    addToast('Expense record deleted.', 'info');
  };

  const addInvoice = (inv: Omit<Invoice, 'id' | 'invoiceNumber'>) => {
    const newInv: Invoice = {
      ...inv,
      id: `inv-${Date.now()}`,
      invoiceNumber: `INV-2026-${Math.floor(100 + Math.random() * 900)}`
    };
    setInvoices(prev => [newInv, ...prev]);
    addToast(`Invoice ${newInv.invoiceNumber} generated.`, 'success');
  };

  const addPayment = (p: Omit<Payment, 'id'>) => {
    const newPay: Payment = {
      ...p,
      id: `pay-${Date.now()}`
    };
    setPayments(prev => [newPay, ...prev]);
    // Mark invoice as paid
    setInvoices(prev =>
      prev.map(inv => (inv.id === p.invoiceId ? { ...inv, status: 'Paid', paymentDate: p.date } : inv))
    );
    addToast(`Payment of $${p.amount.toLocaleString()} recorded successfully!`, 'success');
  };

  // Time entries
  const addTimeEntry = (te: Omit<TimeEntry, 'id' | 'status'>) => {
    const newEntry: TimeEntry = {
      ...te,
      id: `te-${Date.now()}`,
      status: 'Approved'
    };
    setTimeEntries(prev => [newEntry, ...prev]);
  };

  const deleteTimeEntry = (id: string) => {
    setTimeEntries(prev => prev.filter(te => te.id !== id));
    addToast('Time entry removed.', 'info');
  };

  // Files CRUD
  const addFile = (f: Omit<FileItem, 'id' | 'uploadedAt'>) => {
    const newFile: FileItem = {
      ...f,
      id: `f-${Date.now()}`,
      uploadedAt: new Date().toISOString().split('T')[0]
    };
    setFiles(prev => [newFile, ...prev]);
    addToast(`File "${newFile.name}" uploaded successfully.`, 'success');
  };

  const deleteFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
    addToast('File deleted.', 'info');
  };

  // Chat
  const sendChatMessage = (channelId: string, content: string) => {
    const newMsg: ChatMessage = {
      id: `cm-${Date.now()}`,
      channelId,
      senderId: currentUser.id,
      senderName: currentUser.name,
      senderAvatar: currentUser.avatar,
      content,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };
    setChatMessages(prev => [...prev, newMsg]);
  };

  // Notifications
  const markNotificationRead = (id: string) => {
    setNotifications(prev => prev.map(n => (n.id === id ? { ...n, read: true } : n)));
  };

  const markAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    addToast('All notifications marked as read.', 'info');
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const updateSettings = (newSettings: Partial<SystemSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
    addToast('System settings saved successfully.', 'success');
  };

  const resetToDemoData = () => {
    localStorage.clear();
    setProjects(initialProjects);
    setTasks(initialTasks);
    setMilestones(initialMilestones);
    setClients(initialClients);
    setUsers(initialUsers);
    setTimeEntries(initialTimeEntries);
    setExpenses(initialExpenses);
    setInvoices(initialInvoices);
    setPayments(initialPayments);
    setFiles(initialFiles);
    setChatMessages(initialChatMessages);
    setNotifications(initialNotifications);
    setActivityLogs(initialActivityLogs);
    setAuditLogs(initialAuditLogs);
    setSettings(initialSettings);
    setCurrentUser(initialUsers[0]);
    addToast('Platform data reset to initial demo state.', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        currentUser,
        setCurrentUser,
        switchRole,
        globalSearchQuery,
        setGlobalSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
        toasts,
        addToast,
        removeToast,
        projects,
        tasks,
        milestones,
        clients,
        users,
        departments,
        teams,
        timeEntries,
        expenses,
        invoices,
        payments,
        files,
        chatChannels,
        chatMessages,
        notifications,
        activityLogs,
        auditLogs,
        settings,
        addProject,
        updateProject,
        deleteProject,
        archiveProject,
        restoreProject,
        duplicateProject,
        addTask,
        updateTask,
        deleteTask,
        updateTaskStatus,
        addMilestone,
        updateMilestone,
        deleteMilestone,
        addClient,
        updateClient,
        deleteClient,
        addUser,
        updateUser,
        deleteUser,
        addExpense,
        deleteExpense,
        addInvoice,
        addPayment,
        activeTimer,
        startTimer,
        stopTimer,
        addTimeEntry,
        deleteTimeEntry,
        addFile,
        deleteFile,
        sendChatMessage,
        markNotificationRead,
        markAllNotificationsRead,
        deleteNotification,
        updateSettings,
        resetToDemoData
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

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User, Project, Task, Contact, Transaction, Employee, LeaveRequest,
  Message, FileItem, CalendarEvent, ReportTemplate, SystemHealth,
  initialUsers, initialProjects, initialTasks, initialContacts,
  initialTransactions, initialEmployees, initialLeaveRequests,
  initialMessages, initialFiles, initialEvents, initialReports,
  initialHealth
} from '../data/initialData';

export type ActiveTab = 
  | 'dashboard' | 'command-center' | 'analytics' | 'projects' | 'tasks' | 'crm'
  | 'users' | 'finance' | 'hr' | 'messages' | 'files'
  | 'calendar' | 'reports' | 'settings' | 'system-test';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
}

export interface AppSettings {
  theme: 'light' | 'dark' | 'system';
  motion: 'full' | 'reduced';
  denseUi: boolean;
  alertSound: boolean;
}

interface AppContextType {
  // Navigation & UI States
  currentRoute: ActiveTab;
  setRoute: (route: ActiveTab) => void;
  sidebarExpanded: boolean;
  setSidebarExpanded: (expanded: boolean) => void;
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
  commandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;
  globalSearch: string;
  setGlobalSearch: (search: string) => void;
  settings: AppSettings;
  updateSettings: (settings: Partial<AppSettings>) => void;
  
  // Data States
  users: User[];
  projects: Project[];
  tasks: Task[];
  contacts: Contact[];
  transactions: Transaction[];
  employees: Employee[];
  leaveRequests: LeaveRequest[];
  messages: Message[];
  files: FileItem[];
  events: CalendarEvent[];
  reports: ReportTemplate[];
  systemHealth: SystemHealth;
  toasts: ToastMessage[];

  // CRUD & Operations (The Mock Service layer)
  showToast: (type: 'success' | 'info' | 'warning' | 'error', title: string, message: string) => void;
  removeToast: (id: string) => void;
  
  // User CRUD
  createUser: (user: Omit<User, 'id' | 'joinedDate'>) => void;
  updateUser: (user: User) => void;
  deleteUser: (id: string) => void;
  
  // Project CRUD
  createProject: (project: Omit<Project, 'id' | 'spent' | 'progress'>) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  
  // Task CRUD
  createTask: (task: Omit<Task, 'id' | 'actualHours'>) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  
  // CRM CRUD
  createContact: (contact: Omit<Contact, 'id' | 'lastContacted'>) => void;
  updateContact: (contact: Contact) => void;
  deleteContact: (id: string) => void;
  
  // Finance Operations
  createTransaction: (tx: Omit<Transaction, 'id' | 'date'>) => void;
  
  // HR Operations
  createLeaveRequest: (req: Omit<LeaveRequest, 'id' | 'status'>) => void;
  updateLeaveRequest: (id: string, status: 'Approved' | 'Rejected') => void;
  
  // Message Operations
  sendMessage: (content: string, channel: string) => void;
  markMessagesAsRead: (channel: string) => void;
  
  // File Operations
  uploadFile: (file: Omit<FileItem, 'id' | 'uploadedBy' | 'uploadedAt' | 'size'>, actualFile: { size: number }) => void;
  deleteFile: (id: string) => void;
  
  // Calendar Operations
  createEvent: (ev: Omit<CalendarEvent, 'id'>) => void;
  updateEvent: (ev: CalendarEvent) => void;
  deleteEvent: (id: string) => void;
  
  // Utilities
  resetState: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation & UI States
  const [currentRoute, setCurrentRoute] = useState<ActiveTab>('dashboard');
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(() => {
    const cached = localStorage.getItem('sprintadmin_sidebar_expanded') || localStorage.getItem('nexus_sidebar_expanded');
    return cached ? cached === 'true' : true;
  });
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [globalSearch, setGlobalSearch] = useState('');
  
  // App settings
  const [settings, setSettings] = useState<AppSettings>(() => {
    let savedMotion: 'full' | 'reduced' = 'full';
    let savedDenseUi = false;
    let savedAlertSound = false;

    const cached = localStorage.getItem('sprintadmin_settings') || localStorage.getItem('nexus_settings');
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (parsed) {
          if (parsed.motion === 'full' || parsed.motion === 'reduced') savedMotion = parsed.motion;
          if (typeof parsed.denseUi === 'boolean') savedDenseUi = parsed.denseUi;
          if (typeof parsed.alertSound === 'boolean') savedAlertSound = parsed.alertSound;
        }
      } catch (e) { /* ignore */ }
    }

    return {
      theme: 'light',
      motion: savedMotion,
      denseUi: savedDenseUi,
      alertSound: savedAlertSound,
    };
  });

  // State values
  const [users, setUsers] = useState<User[]>(() => {
    const cached = localStorage.getItem('db_users');
    return cached ? JSON.parse(cached) : initialUsers;
  });
  const [projects, setProjects] = useState<Project[]>(() => {
    const cached = localStorage.getItem('db_projects');
    return cached ? JSON.parse(cached) : initialProjects;
  });
  const [tasks, setTasks] = useState<Task[]>(() => {
    const cached = localStorage.getItem('db_tasks');
    return cached ? JSON.parse(cached) : initialTasks;
  });
  const [contacts, setContacts] = useState<Contact[]>(() => {
    const cached = localStorage.getItem('db_contacts');
    return cached ? JSON.parse(cached) : initialContacts;
  });
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const cached = localStorage.getItem('db_transactions');
    return cached ? JSON.parse(cached) : initialTransactions;
  });
  const [employees, setEmployees] = useState<Employee[]>(() => {
    const cached = localStorage.getItem('db_employees');
    return cached ? JSON.parse(cached) : initialEmployees;
  });
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>(() => {
    const cached = localStorage.getItem('db_leaveRequests');
    return cached ? JSON.parse(cached) : initialLeaveRequests;
  });
  const [messages, setMessages] = useState<Message[]>(() => {
    const cached = localStorage.getItem('db_messages');
    return cached ? JSON.parse(cached) : initialMessages;
  });
  const [files, setFiles] = useState<FileItem[]>(() => {
    const cached = localStorage.getItem('db_files');
    return cached ? JSON.parse(cached) : initialFiles;
  });
  const [events, setEvents] = useState<CalendarEvent[]>(() => {
    const cached = localStorage.getItem('db_events');
    return cached ? JSON.parse(cached) : initialEvents;
  });
  const [reports] = useState<ReportTemplate[]>(initialReports);
  const [systemHealth, setSystemHealth] = useState<SystemHealth>(initialHealth);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Update localStorage helper
  const saveToCache = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  // Listen to hash changes for simple browser routing
  useEffect(() => {
    const handleHashChange = () => {
      try {
        const hash = window.location.hash.replace('#/', '') as ActiveTab;
        const validTabs: ActiveTab[] = [
          'dashboard', 'command-center', 'analytics', 'projects', 'tasks', 'crm',
          'users', 'finance', 'hr', 'messages', 'files',
          'calendar', 'reports', 'settings', 'system-test'
        ];
        if (validTabs.includes(hash)) {
          setCurrentRoute(hash);
        }
      } catch (e) {
        console.warn("Could not read hash inside sandbox:", e);
      }
    };

    try {
      window.addEventListener('hashchange', handleHashChange);
      // Initial load check
      if (window.location.hash) {
        handleHashChange();
      } else {
        window.location.hash = '#/dashboard';
      }
    } catch (e) {
      console.warn("Routing listener could not be registered inside iframe sandbox:", e);
    }

    return () => {
      try {
        window.removeEventListener('hashchange', handleHashChange);
      } catch (e) {}
    };
  }, []);

  const setRoute = (route: ActiveTab) => {
    try {
      window.location.hash = `#/${route}`;
    } catch (e) {
      console.warn("Hash update blocked by iframe restriction. Updating state directly.", e);
    }
    setCurrentRoute(route);
    setMobileSidebarOpen(false);
  };

  // Sync sidebar expanded with cache
  const updateSidebarExpanded = (expanded: boolean) => {
    setSidebarExpanded(expanded);
    localStorage.setItem('sprintadmin_sidebar_expanded', expanded ? 'true' : 'false');
  };

  // Sync settings with body classes and localStorage
  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings, theme: 'light' as const };
      localStorage.setItem('sprintadmin_settings', JSON.stringify(updated));
      localStorage.setItem('sprintadmin-theme', 'light');
      return updated;
    });
  };

  // Theme effect
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    root.setAttribute('data-theme', 'light');
    root.style.colorScheme = 'light';
  }, []);

  // Motion class setup
  useEffect(() => {
    const root = document.documentElement;
    if (settings.motion === 'reduced') {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  }, [settings.motion]);

  // Simulating active telemetry metrics flux
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemHealth((prev) => {
        const jitter = (Math.random() - 0.5) * 4;
        const latencyJitter = (Math.random() - 0.5) * 2;
        const newCpu = Math.min(100, Math.max(5, prev.cpu + jitter));
        const newMemory = Math.min(100, Math.max(10, prev.memory + (Math.random() - 0.5) * 0.5));
        const newLatency = Math.min(200, Math.max(2, prev.latency + latencyJitter));

        return {
          cpu: parseFloat(newCpu.toFixed(1)),
          memory: parseFloat(newMemory.toFixed(1)),
          disk: prev.disk,
          latency: parseFloat(newLatency.toFixed(1)),
          status: newCpu > 85 ? 'Critical' : newCpu > 70 ? 'Degraded' : 'Optimal'
        };
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Toast Helpers
  const showToast = (type: 'success' | 'info' | 'warning' | 'error', title: string, message: string) => {
    const id = `toast-${Date.now()}`;
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // --- CRUD implementation with LocalStorage replication ---

  // User CRUD
  const createUser = (user: Omit<User, 'id' | 'joinedDate'>) => {
    const newUser: User = {
      ...user,
      id: `usr-${Date.now()}`,
      joinedDate: new Date().toISOString().split('T')[0],
    };
    const updated = [...users, newUser];
    setUsers(updated);
    saveToCache('db_users', updated);
    showToast('success', 'User Created', `${user.name} was successfully registered.`);
  };

  const updateUser = (updatedUser: User) => {
    const updated = users.map((u) => u.id === updatedUser.id ? updatedUser : u);
    setUsers(updated);
    saveToCache('db_users', updated);
    showToast('success', 'User Updated', `Profile of ${updatedUser.name} has been refreshed.`);
  };

  const deleteUser = (id: string) => {
    const user = users.find((u) => u.id === id);
    const updated = users.filter((u) => u.id !== id);
    setUsers(updated);
    saveToCache('db_users', updated);
    showToast('warning', 'User Suspended', `${user?.name || 'User'} has been removed.`);
  };

  // Project CRUD
  const createProject = (proj: Omit<Project, 'id' | 'spent' | 'progress'>) => {
    const newProj: Project = {
      ...proj,
      id: `proj-${Date.now()}`,
      spent: 0,
      progress: 0,
    };
    const updated = [...projects, newProj];
    setProjects(updated);
    saveToCache('db_projects', updated);
    showToast('success', 'Project Initiated', `Project "${proj.name}" was successfully spawned.`);
  };

  const updateProject = (updatedProj: Project) => {
    const updated = projects.map((p) => p.id === updatedProj.id ? updatedProj : p);
    setProjects(updated);
    saveToCache('db_projects', updated);
    showToast('success', 'Project Updated', `Configuration parameters for "${updatedProj.name}" updated.`);
  };

  const deleteProject = (id: string) => {
    const proj = projects.find((p) => p.id === id);
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated);
    saveToCache('db_projects', updated);
    showToast('warning', 'Project Decommissioned', `Project "${proj?.name || 'Project'}" has been retired.`);
  };

  // Task CRUD
  const createTask = (task: Omit<Task, 'id' | 'actualHours'>) => {
    const newTask: Task = {
      ...task,
      id: `tsk-${Date.now()}`,
      actualHours: 0,
    };
    const updated = [...tasks, newTask];
    setTasks(updated);
    saveToCache('db_tasks', updated);
    showToast('success', 'Task Enqueued', `Task "${task.title}" added to queue.`);
  };

  const updateTask = (updatedTask: Task) => {
    const updated = tasks.map((t) => t.id === updatedTask.id ? updatedTask : t);
    setTasks(updated);
    saveToCache('db_tasks', updated);
    showToast('success', 'Task Updated', `Task status synchronized successfully.`);
  };

  const deleteTask = (id: string) => {
    const task = tasks.find((t) => t.id === id);
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    saveToCache('db_tasks', updated);
    showToast('info', 'Task Removed', `Task "${task?.title || 'Task'}" deleted.`);
  };

  // CRM CRUD
  const createContact = (ct: Omit<Contact, 'id' | 'lastContacted'>) => {
    const newCt: Contact = {
      ...ct,
      id: `ct-${Date.now()}`,
      lastContacted: new Date().toISOString().split('T')[0],
    };
    const updated = [...contacts, newCt];
    setContacts(updated);
    saveToCache('db_contacts', updated);
    showToast('success', 'Contact Created', `CRM file for ${ct.name} compiled.`);
  };

  const updateContact = (updatedCt: Contact) => {
    const updated = contacts.map((c) => c.id === updatedCt.id ? updatedCt : c);
    setContacts(updated);
    saveToCache('db_contacts', updated);
    showToast('success', 'Contact Synchronized', `Deal value at ${updatedCt.dealValue.toLocaleString()} updated.`);
  };

  const deleteContact = (id: string) => {
    const ct = contacts.find((c) => c.id === id);
    const updated = contacts.filter((c) => c.id !== id);
    setContacts(updated);
    saveToCache('db_contacts', updated);
    showToast('warning', 'Contact Deleted', `CRM entry for ${ct?.name || 'Contact'} wiped.`);
  };

  // Finance
  const createTransaction = (tx: Omit<Transaction, 'id' | 'date'>) => {
    const newTx: Transaction = {
      ...tx,
      id: `tx-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
    };
    const updated = [newTx, ...transactions];
    setTransactions(updated);
    saveToCache('db_transactions', updated);
    showToast('success', 'Audit Logged', `Recorded ${tx.type} transaction of $${tx.amount}.`);
  };

  // HR
  const createLeaveRequest = (req: Omit<LeaveRequest, 'id' | 'status'>) => {
    const newReq: LeaveRequest = {
      ...req,
      id: `lv-${Date.now()}`,
      status: 'Pending',
    };
    const updated = [...leaveRequests, newReq];
    setLeaveRequests(updated);
    saveToCache('db_leaveRequests', updated);
    showToast('info', 'Leave Proposed', `Vacation/sick ticket submitted for ${req.employeeName}.`);
  };

  const updateLeaveRequest = (id: string, status: 'Approved' | 'Rejected') => {
    const updated = leaveRequests.map((r) => r.id === id ? { ...r, status } : r);
    setLeaveRequests(updated);
    saveToCache('db_leaveRequests', updated);
    const req = leaveRequests.find((r) => r.id === id);
    showToast(
      status === 'Approved' ? 'success' : 'error',
      `Leave Request ${status}`,
      `Request by ${req?.employeeName || 'Employee'} marked as ${status.toLowerCase()}.`
    );
  };

  // Messages
  const sendMessage = (content: string, channel: string) => {
    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      senderId: 'user',
      senderName: 'Elena Rostova (You)',
      senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      unread: false,
      channel,
    };
    const updated = [...messages, newMsg];
    setMessages(updated);
    saveToCache('db_messages', updated);

    // Simulate system echo response
    if (content.toLowerCase().includes('help') || content.toLowerCase().includes('test')) {
      setTimeout(() => {
        const sysMsg: Message = {
          id: `msg-${Date.now() + 1}`,
          senderId: 'system',
          senderName: 'Core AI Ground Monitor',
          senderAvatar: '',
          content: 'SprintAdmin Diagnostics: Echo request parsed successfully. System functions running at full capacity.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          unread: true,
          channel,
        };
        setMessages((prev) => {
          const next = [...prev, sysMsg];
          saveToCache('db_messages', next);
          return next;
        });
        showToast('info', 'SprintAdmin Core Broadcast', 'New message from Diagnostics Core received.');
      }, 1500);
    }
  };

  const markMessagesAsRead = (channel: string) => {
    const updated = messages.map((m) => m.channel === channel ? { ...m, unread: false } : m);
    setMessages(updated);
    saveToCache('db_messages', updated);
  };

  // Files
  const uploadFile = (file: Omit<FileItem, 'id' | 'uploadedBy' | 'uploadedAt' | 'size'>, actualFile: { size: number }) => {
    const sizeStr = actualFile.size > 1024 * 1024 
      ? `${(actualFile.size / (1024 * 1024)).toFixed(1)} MB`
      : `${(actualFile.size / 1024).toFixed(0)} KB`;
    
    const newFile: FileItem = {
      ...file,
      id: `fl-${Date.now()}`,
      size: sizeStr,
      uploadedBy: 'Elena Rostova (You)',
      uploadedAt: new Date().toISOString().split('T')[0],
    };
    const updated = [newFile, ...files];
    setFiles(updated);
    saveToCache('db_files', updated);
    showToast('success', 'File Ingested', `"${file.name}" uploaded into /${file.folder}.`);
  };

  const deleteFile = (id: string) => {
    const file = files.find((f) => f.id === id);
    const updated = files.filter((f) => f.id !== id);
    setFiles(updated);
    saveToCache('db_files', updated);
    showToast('warning', 'File Erased', `"${file?.name || 'File'}" deleted permanently.`);
  };

  // Calendar
  const createEvent = (ev: Omit<CalendarEvent, 'id'>) => {
    const newEv: CalendarEvent = {
      ...ev,
      id: `ev-${Date.now()}`,
    };
    const updated = [...events, newEv];
    setEvents(updated);
    saveToCache('db_events', updated);
    showToast('success', 'Event Scheduled', `"${ev.title}" registered in planner.`);
  };

  const updateEvent = (updatedEv: CalendarEvent) => {
    const updated = events.map((e) => e.id === updatedEv.id ? updatedEv : e);
    setEvents(updated);
    saveToCache('db_events', updated);
    showToast('success', 'Event Modified', `"${updatedEv.title}" updated.`);
  };

  const deleteEvent = (id: string) => {
    const ev = events.find((e) => e.id === id);
    const updated = events.filter((e) => e.id !== id);
    setEvents(updated);
    saveToCache('db_events', updated);
    showToast('info', 'Event Cancelled', `"${ev?.title || 'Event'}" removed from schedule.`);
  };

  // Reset
  const resetState = () => {
    localStorage.clear();
    setUsers(initialUsers);
    setProjects(initialProjects);
    setTasks(initialTasks);
    setContacts(initialContacts);
    setTransactions(initialTransactions);
    setEmployees(initialEmployees);
    setLeaveRequests(initialLeaveRequests);
    setMessages(initialMessages);
    setFiles(initialFiles);
    setEvents(initialEvents);
    setSystemHealth(initialHealth);
    setSettings({
      theme: 'light',
      motion: 'full',
      denseUi: false,
      alertSound: false,
    });
    showToast('info', 'Database Purged', 'Local simulated state restored to system default values.');
  };

  return (
    <AppContext.Provider value={{
      currentRoute,
      setRoute,
      sidebarExpanded,
      setSidebarExpanded: updateSidebarExpanded,
      mobileSidebarOpen,
      setMobileSidebarOpen,
      commandPaletteOpen,
      setCommandPaletteOpen,
      globalSearch,
      setGlobalSearch,
      settings,
      updateSettings,
      
      users,
      projects,
      tasks,
      contacts,
      transactions,
      employees,
      leaveRequests,
      messages,
      files,
      events,
      reports,
      systemHealth,
      toasts,

      showToast,
      removeToast,
      
      createUser,
      updateUser,
      deleteUser,
      
      createProject,
      updateProject,
      deleteProject,
      
      createTask,
      updateTask,
      deleteTask,
      
      createContact,
      updateContact,
      deleteContact,
      
      createTransaction,
      
      createLeaveRequest,
      updateLeaveRequest,
      
      sendMessage,
      markMessagesAsRead,
      
      uploadFile,
      deleteFile,
      
      createEvent,
      updateEvent,
      deleteEvent,
      
      resetState
    }}>
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

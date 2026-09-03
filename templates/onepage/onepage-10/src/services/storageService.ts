import {
  AppNotification,
  AutomationWorkflow,
  ConsultationRequest,
  ContactSubmission,
  UserPreferences,
  WorkflowStep
} from '../types';

const STORAGE_KEYS = {
  PREFERENCES: 'nexora_user_preferences',
  NOTIFICATIONS: 'nexora_notifications',
  WORKFLOWS: 'nexora_workflows',
  CONSULTATIONS: 'nexora_consultations',
  CONTACTS: 'nexora_contacts',
  BOOKMARKS: 'nexora_bookmarked_insights',
  AUDIT_LOG: 'nexora_operations_audit_log',
  METRICS_REPORT_COUNT: 'nexora_reports_generated_count'
};

const DEFAULT_PREFERENCES: UserPreferences = {
  theme: 'dark',
  compactMode: false,
  animations: true,
  reducedMotion: false,
  dashboardDensity: 'normal'
};

const INITIAL_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'notif-1',
    title: 'Autonomous Revenue Optimization Completed',
    message: 'NEXORA AI agent recalibrated pricing elasticity parameters, securing an estimated +$14,200 daily gross margin.',
    timestamp: 'Just now',
    type: 'success',
    read: false,
    actionTarget: 'dashboard'
  },
  {
    id: 'notif-2',
    title: 'Unusual Volume Spike Detected & Mitigated',
    message: 'European edge routing cluster absorbed a 340% traffic burst with zero p99 latency degradation.',
    timestamp: '18 minutes ago',
    type: 'alert',
    read: false,
    actionTarget: 'dashboard'
  },
  {
    id: 'notif-3',
    title: 'Enterprise Workflow: Invoice Reconciler Executed',
    message: 'Processed 1,420 vendor ledgers across 6 currencies with 100% cryptographic ledger balance match.',
    timestamp: '1 hour ago',
    type: 'workflow',
    read: false,
    actionTarget: 'automation'
  },
  {
    id: 'notif-4',
    title: 'New Case Study Published: Strata Grid Dynamics',
    message: 'Discover how algorithmic trading generated +$78M in clean power margin.',
    timestamp: '3 hours ago',
    type: 'info',
    read: true,
    actionTarget: 'case-studies'
  }
];

const INITIAL_WORKFLOWS: AutomationWorkflow[] = [
  {
    id: 'wf-1',
    name: 'Real-Time Financial Anomaly Isolation',
    description: 'Continuously monitors transaction streams, flags anomalies, scores causal risk, and triggers automated escrow freezes.',
    status: 'active',
    lastRun: '2 mins ago',
    totalExecutions: 14280,
    successRate: 99.8,
    createdAt: '2026-01-15T08:00:00.000Z',
    steps: [
      {
        id: 's-1',
        type: 'trigger',
        title: 'High-Frequency Stream Ingestion',
        description: 'Ingests transaction payloads via Kafka stream filter (> $10k volume or cross-border)',
        config: { source: 'Kafka-Payments', minVolume: 10000 }
      },
      {
        id: 's-2',
        type: 'action',
        title: 'Feature Vector Enrichment',
        description: 'Enriches transaction with 90-day behavioral telemetry and IP geodiversity index',
        config: { latencyLimitMs: 5 }
      },
      {
        id: 's-3',
        type: 'ai_decision',
        title: 'Causal Risk & Fraud Score Interceptor',
        description: 'Runs private LoRA fine-tuned anomaly classifier; routes if anomaly > 0.82',
        config: { threshold: 0.82, model: 'Nexora-Causal-Guard-v3' }
      },
      {
        id: 's-4',
        type: 'notification',
        title: 'Executive SOC Alert & Escrow Lock',
        description: 'Sends instant encrypted alert to CISO and places funds into 15-minute escrow review',
        config: { channel: 'PagerDuty + Slack', priority: 'P1' }
      },
      {
        id: 's-5',
        type: 'report',
        title: 'Generate Cryptographic Audit Log',
        description: 'Appends decision hash to sovereign immutable compliance ledger',
        config: { standard: 'SOC2-Type2' }
      }
    ]
  },
  {
    id: 'wf-2',
    name: 'Executive Daily Synthesis & Pipeline Forecast',
    description: 'Aggregates ERP, CRM, and global macroeconomic indicators to deliver a concise morning briefing at 06:00 GMT.',
    status: 'active',
    lastRun: 'Today at 06:00',
    totalExecutions: 248,
    successRate: 100,
    createdAt: '2026-02-01T10:00:00.000Z',
    steps: [
      {
        id: 's-21',
        type: 'trigger',
        title: 'Cron Trigger: Daily 06:00 UTC',
        description: 'Scheduled execution for pre-market opening analysis',
        config: { cron: '0 6 * * *' }
      },
      {
        id: 's-22',
        type: 'action',
        title: 'Multi-Source Data Ingestion',
        description: 'Fetches sales pipeline, ARR churn rates, and energy index prices',
        config: { sources: 'Salesforce, Stripe, Bloomberg' }
      },
      {
        id: 's-23',
        type: 'ai_decision',
        title: 'Strategic Synthesis & Moat Analysis',
        description: 'Synthesizes key variances, outlier contracts, and macro headwinds',
        config: { tone: 'Executive Briefing', maxTokens: 800 }
      },
      {
        id: 's-24',
        type: 'notification',
        title: 'Deliver Executive Digest',
        description: 'Sends interactive executive report to Board & C-Suite distribution list',
        config: { target: 'Executive Team' }
      }
    ]
  },
  {
    id: 'wf-3',
    name: 'Cognitive Supplier Invoice Reconciliation',
    description: 'Extracts line items from PDF invoices, verifies PO matching, and routes approved payouts to ERP.',
    status: 'paused',
    lastRun: 'Yesterday',
    totalExecutions: 3890,
    successRate: 99.4,
    createdAt: '2026-02-10T14:30:00.000Z',
    steps: [
      {
        id: 's-31',
        type: 'trigger',
        title: 'Invoice Webhook Ingestion',
        description: 'Triggered when vendor uploads invoice or email attachment arrives',
        config: { formats: 'PDF, XML, EDI' }
      },
      {
        id: 's-32',
        type: 'ai_decision',
        title: 'Vision-Language Document Parsing',
        description: 'Extracts tabular line items, tax IDs, and payment terms with 99.9% OCR accuracy',
        config: { model: 'Nexora-DocVision-v4' }
      },
      {
        id: 's-33',
        type: 'action',
        title: 'Three-Way Matching Against SAP PO',
        description: 'Matches quantities, prices, and receiving dock confirmation timestamps',
        config: { tolerancePercent: 0.05 }
      },
      {
        id: 's-34',
        type: 'report',
        title: 'ERP Payout Authorization',
        description: 'Directly schedules wire transfer in SAP S/4HANA for matching invoices',
        config: { system: 'SAP' }
      }
    ]
  }
];

const INITIAL_CONSULTATIONS: ConsultationRequest[] = [
  {
    id: 'NEX-84920',
    fullName: 'David Sterling',
    email: 'd.sterling@vanguardtech.io',
    company: 'Vanguard Systems',
    industry: 'Technology',
    companySize: '1,000 - 5,000',
    areaOfInterest: 'AI Transformation & Multi-Agent Swarms',
    preferredDate: '2026-09-15',
    preferredTime: '14:00 - 15:00 UTC',
    message: 'Looking to replatform our legacy analytics into autonomous multi-agent pipelines across 14 global locations.',
    createdAt: '2026-09-01T14:20:00.000Z',
    status: 'scheduled',
    notes: 'Briefing deck shared with Senior Solutions Architect'
  },
  {
    id: 'NEX-84921',
    fullName: 'Elena Voronova',
    email: 'e.voronova@helveticacapital.ch',
    company: 'Helvetica Capital AG',
    industry: 'Finance',
    companySize: '500 - 1,000',
    areaOfInterest: 'Strategic Intelligence & Causal Risk Arbitrage',
    preferredDate: '2026-09-18',
    preferredTime: '10:00 - 11:00 UTC',
    message: 'Interested in sovereign on-premise causal AI deployment for private wealth risk management.',
    createdAt: '2026-09-02T06:15:00.000Z',
    status: 'pending'
  }
];

const INITIAL_CONTACTS: ContactSubmission[] = [
  {
    id: 'CNT-1042',
    name: 'Marcus Holloway',
    email: 'm.holloway@aerocore.com',
    subject: 'Enterprise Sovereign Cloud Deployment Inquiry',
    message: 'We require an air-gapped deployment for defense aerospace data. Do you support private on-premise hardware clusters?',
    createdAt: '2026-09-01T11:45:00.000Z',
    status: 'new'
  }
];

// Centralized Storage Service
export const storageService = {
  getPreferences(): UserPreferences {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
      return data ? { ...DEFAULT_PREFERENCES, ...JSON.parse(data) } : DEFAULT_PREFERENCES;
    } catch {
      return DEFAULT_PREFERENCES;
    }
  },

  savePreferences(prefs: Partial<UserPreferences>): UserPreferences {
    const current = this.getPreferences();
    const updated = { ...current, ...prefs };
    try {
      localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(updated));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
    return updated;
  },

  getNotifications(): AppNotification[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(INITIAL_NOTIFICATIONS));
        return INITIAL_NOTIFICATIONS;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_NOTIFICATIONS;
    }
  },

  saveNotifications(notifications: AppNotification[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifications));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  },

  markNotificationAsRead(id: string): AppNotification[] {
    const list = this.getNotifications().map(n => n.id === id ? { ...n, read: true } : n);
    this.saveNotifications(list);
    return list;
  },

  markAllNotificationsAsRead(): AppNotification[] {
    const list = this.getNotifications().map(n => ({ ...n, read: true }));
    this.saveNotifications(list);
    return list;
  },

  deleteNotification(id: string): AppNotification[] {
    const list = this.getNotifications().filter(n => n.id !== id);
    this.saveNotifications(list);
    return list;
  },

  addNotification(notification: Omit<AppNotification, 'id' | 'timestamp' | 'read'>): AppNotification {
    const newNotif: AppNotification = {
      ...notification,
      id: `notif-${Date.now()}`,
      timestamp: 'Just now',
      read: false
    };
    const list = [newNotif, ...this.getNotifications()];
    this.saveNotifications(list);
    return newNotif;
  },

  getWorkflows(): AutomationWorkflow[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.WORKFLOWS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.WORKFLOWS, JSON.stringify(INITIAL_WORKFLOWS));
        return INITIAL_WORKFLOWS;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_WORKFLOWS;
    }
  },

  saveWorkflows(workflows: AutomationWorkflow[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.WORKFLOWS, JSON.stringify(workflows));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  },

  addWorkflow(workflow: Omit<AutomationWorkflow, 'id' | 'totalExecutions' | 'successRate' | 'createdAt'>): AutomationWorkflow {
    const newWorkflow: AutomationWorkflow = {
      ...workflow,
      id: `wf-${Date.now()}`,
      totalExecutions: 0,
      successRate: 100,
      createdAt: new Date().toISOString()
    };
    const list = [newWorkflow, ...this.getWorkflows()];
    this.saveWorkflows(list);
    this.logAuditEvent(`Workflow created: "${newWorkflow.name}"`, 'workflow');
    return newWorkflow;
  },

  updateWorkflow(id: string, updates: Partial<AutomationWorkflow>): AutomationWorkflow[] {
    const list = this.getWorkflows().map(w => w.id === id ? { ...w, ...updates } : w);
    this.saveWorkflows(list);
    this.logAuditEvent(`Workflow updated: ID ${id}`, 'workflow');
    return list;
  },

  toggleWorkflowStatus(id: string): AutomationWorkflow[] {
    const list = this.getWorkflows().map(w => {
      if (w.id === id) {
        const nextStatus = w.status === 'active' ? 'paused' : 'active';
        return { ...w, status: nextStatus, lastRun: nextStatus === 'active' ? 'Just now' : w.lastRun };
      }
      return w;
    });
    this.saveWorkflows(list);
    return list;
  },

  duplicateWorkflow(id: string): AutomationWorkflow | null {
    const existing = this.getWorkflows().find(w => w.id === id);
    if (!existing) return null;
    const duplicated: AutomationWorkflow = {
      ...existing,
      id: `wf-${Date.now()}`,
      name: `${existing.name} (Copy)`,
      status: 'draft',
      totalExecutions: 0,
      createdAt: new Date().toISOString(),
      steps: existing.steps.map(s => ({ ...s, id: `s-${Date.now()}-${Math.random().toString(36).substr(2, 4)}` }))
    };
    const list = [duplicated, ...this.getWorkflows()];
    this.saveWorkflows(list);
    this.logAuditEvent(`Workflow duplicated: "${duplicated.name}"`, 'workflow');
    return duplicated;
  },

  deleteWorkflow(id: string): AutomationWorkflow[] {
    const list = this.getWorkflows().filter(w => w.id !== id);
    this.saveWorkflows(list);
    this.logAuditEvent(`Workflow deleted: ID ${id}`, 'workflow');
    return list;
  },

  addWorkflowStep(workflowId: string, step: Omit<WorkflowStep, 'id'>): AutomationWorkflow[] {
    const newStep: WorkflowStep = {
      ...step,
      id: `s-${Date.now()}`
    };
    const list = this.getWorkflows().map(w => {
      if (w.id === workflowId) {
        return {
          ...w,
          steps: [...w.steps, newStep]
        };
      }
      return w;
    });
    this.saveWorkflows(list);
    return list;
  },

  getConsultations(): ConsultationRequest[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CONSULTATIONS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.CONSULTATIONS, JSON.stringify(INITIAL_CONSULTATIONS));
        return INITIAL_CONSULTATIONS;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_CONSULTATIONS;
    }
  },

  saveConsultations(list: ConsultationRequest[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.CONSULTATIONS, JSON.stringify(list));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  },

  addConsultation(data: Omit<ConsultationRequest, 'id' | 'createdAt' | 'status'>): ConsultationRequest {
    const generatedId = `NEX-${Math.floor(10000 + Math.random() * 90000)}`;
    const newRequest: ConsultationRequest = {
      ...data,
      id: generatedId,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    const list = [newRequest, ...this.getConsultations()];
    this.saveConsultations(list);
    this.logAuditEvent(`Consultation booked: ${newRequest.fullName} (${newRequest.company})`, 'lead');
    
    // Also generate notification
    this.addNotification({
      title: `Consultation Booked: ${newRequest.company}`,
      message: `${newRequest.fullName} requested a strategy session regarding ${newRequest.areaOfInterest}. Request ID: ${newRequest.id}`,
      type: 'success',
      actionTarget: 'operations'
    });

    return newRequest;
  },

  updateConsultationStatus(id: string, status: ConsultationRequest['status']): ConsultationRequest[] {
    const list = this.getConsultations().map(c => c.id === id ? { ...c, status } : c);
    this.saveConsultations(list);
    return list;
  },

  deleteConsultation(id: string): ConsultationRequest[] {
    const list = this.getConsultations().filter(c => c.id !== id);
    this.saveConsultations(list);
    return list;
  },

  getContacts(): ContactSubmission[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CONTACTS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(INITIAL_CONTACTS));
        return INITIAL_CONTACTS;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_CONTACTS;
    }
  },

  saveContacts(list: ContactSubmission[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(list));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  },

  addContact(data: Omit<ContactSubmission, 'id' | 'createdAt' | 'status'>): ContactSubmission {
    const newContact: ContactSubmission = {
      ...data,
      id: `CNT-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
      status: 'new'
    };
    const list = [newContact, ...this.getContacts()];
    this.saveContacts(list);
    this.logAuditEvent(`Contact message received from ${newContact.name} (${newContact.email})`, 'contact');
    
    this.addNotification({
      title: `New Message: ${newContact.subject}`,
      message: `From ${newContact.name} (${newContact.email}). Awaiting response.`,
      type: 'info',
      actionTarget: 'operations'
    });

    return newContact;
  },

  updateContactStatus(id: string, status: ContactSubmission['status']): ContactSubmission[] {
    const list = this.getContacts().map(c => c.id === id ? { ...c, status } : c);
    this.saveContacts(list);
    return list;
  },

  deleteContact(id: string): ContactSubmission[] {
    const list = this.getContacts().filter(c => c.id !== id);
    this.saveContacts(list);
    return list;
  },

  getBookmarks(): string[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : ['agentic-ai-2026-enterprise'];
    } catch {
      return ['agentic-ai-2026-enterprise'];
    }
  },

  toggleBookmark(articleId: string): string[] {
    const current = this.getBookmarks();
    const updated = current.includes(articleId)
      ? current.filter(id => id !== articleId)
      : [...current, articleId];
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
    } catch (e) {
      console.warn('LocalStorage bookmark save failed', e);
    }
    return updated;
  },

  getReportsGeneratedCount(): number {
    try {
      const val = localStorage.getItem(STORAGE_KEYS.METRICS_REPORT_COUNT);
      return val ? parseInt(val, 10) : 12;
    } catch {
      return 12;
    }
  },

  incrementReportCount(): number {
    const next = this.getReportsGeneratedCount() + 1;
    try {
      localStorage.setItem(STORAGE_KEYS.METRICS_REPORT_COUNT, next.toString());
    } catch {}
    this.logAuditEvent(`CSV Intelligence report generated & exported (Total: ${next})`, 'report');
    return next;
  },

  getAuditLog(): Array<{ id: string; message: string; type: string; timestamp: string }> {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.AUDIT_LOG);
      return data ? JSON.parse(data) : [
        { id: '1', message: 'System initialized on sovereign cloud mesh', type: 'system', timestamp: new Date().toLocaleTimeString() },
        { id: '2', message: 'Loaded 3 active autonomous multi-agent pipelines', type: 'workflow', timestamp: new Date().toLocaleTimeString() }
      ];
    } catch {
      return [];
    }
  },

  logAuditEvent(message: string, type: string = 'general'): void {
    try {
      const logs = this.getAuditLog();
      const newEntry = {
        id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        message,
        type,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      };
      const updated = [newEntry, ...logs].slice(0, 50); // keep last 50
      localStorage.setItem(STORAGE_KEYS.AUDIT_LOG, JSON.stringify(updated));
    } catch {}
  },

  resetDemoData(): void {
    localStorage.removeItem(STORAGE_KEYS.NOTIFICATIONS);
    localStorage.removeItem(STORAGE_KEYS.WORKFLOWS);
    localStorage.removeItem(STORAGE_KEYS.CONSULTATIONS);
    localStorage.removeItem(STORAGE_KEYS.CONTACTS);
    localStorage.removeItem(STORAGE_KEYS.BOOKMARKS);
    localStorage.removeItem(STORAGE_KEYS.AUDIT_LOG);
    localStorage.removeItem(STORAGE_KEYS.METRICS_REPORT_COUNT);
  }
};

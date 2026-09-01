export type UserRole = 'Super Admin' | 'Admin' | 'Project Manager' | 'Team Lead' | 'Team Member' | 'Client';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
  departmentId: string;
  departmentName: string;
  department?: string;
  phone?: string;
  skills: string[];
  status: 'Active' | 'On Leave' | 'Busy' | 'Offline';
  availabilityHoursPerWeek: number;
  hourlyRate: number;
  bio?: string;
  joinedDate: string;
}

export interface RolePermission {
  id: string;
  roleName: UserRole;
  canManageProjects: boolean;
  canManageTasks: boolean;
  canManageTeam: boolean;
  canManageClients: boolean;
  canManageFinances: boolean;
  canViewReports: boolean;
  canManageSettings: boolean;
  canExportData: boolean;
}

export interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  avatar?: string;
  industry: string;
  address: string;
  status: 'Active' | 'Lead' | 'Inactive';
  totalContractValue: number;
  activeProjectsCount: number;
  joinedDate: string;
  contacts: ClientContact[];
}

export interface ClientContact {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
}

export type ProjectStatus = 'Planning' | 'In Progress' | 'On Hold' | 'Review' | 'Completed' | 'Archived';
export type ProjectPriority = 'Low' | 'Medium' | 'High' | 'Urgent';

export interface Project {
  id: string;
  code: string;
  name: string;
  description: string;
  clientId: string;
  clientName: string;
  projectManagerId: string;
  projectManagerName: string;
  projectManagerAvatar?: string;
  teamMemberIds: string[];
  status: ProjectStatus;
  priority: ProjectPriority;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  progress: number;
  tags: string[];
  category: string;
  attachmentsCount: number;
  tasksCount: number;
  completedTasksCount: number;
  isArchived?: boolean;
}

export type TaskStatus = 'Backlog' | 'To Do' | 'In Progress' | 'Review' | 'Testing' | 'Completed';
export type TaskPriority = 'Low' | 'Medium' | 'High' | 'Urgent';

export interface SubTask {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskComment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  createdAt: string;
}

export interface TaskAttachment {
  id: string;
  fileName: string;
  fileSize: string;
  fileUrl: string;
  uploadedAt: string;
}

export interface Task {
  id: string;
  taskCode: string;
  title: string;
  description: string;
  projectId: string;
  projectName: string;
  assigneeId: string;
  assigneeName: string;
  assigneeAvatar?: string;
  status: TaskStatus;
  priority: TaskPriority;
  startDate: string;
  dueDate: string;
  estimatedHours: number;
  actualHours: number;
  tags: string[];
  subtasks: SubTask[];
  comments: TaskComment[];
  attachments: TaskAttachment[];
  dependencies?: string[]; // Task IDs
  isRecurring?: boolean;
  recurringFrequency?: 'Daily' | 'Weekly' | 'Monthly';
}

export interface Milestone {
  id: string;
  projectId: string;
  projectName: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'Upcoming' | 'In Progress' | 'Completed' | 'Overdue';
  progress: number;
  taskIds: string[];
}

export interface Department {
  id: string;
  name: string;
  headName: string;
  membersCount: number;
  projectsCount: number;
}

export interface Team {
  id: string;
  name: string;
  leadId: string;
  leadName: string;
  departmentId: string;
  departmentName: string;
  memberIds: string[];
  description: string;
}

export interface TimeEntry {
  id: string;
  userId: string;
  userName: string;
  projectId: string;
  projectName: string;
  taskId: string;
  taskTitle: string;
  description: string;
  date: string;
  hours: number;
  billable: boolean;
  hourlyRate: number;
  status: 'Approved' | 'Pending' | 'Rejected';
}

export interface Expense {
  id: string;
  projectId: string;
  projectName: string;
  category: 'Software' | 'Travel' | 'Hardware' | 'Contractor' | 'Office' | 'Marketing' | 'Other';
  description: string;
  amount: number;
  date: string;
  submittedBy: string;
  status: 'Approved' | 'Pending' | 'Rejected';
  receiptUrl?: string;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientId: string;
  clientName: string;
  projectId: string;
  projectName: string;
  issueDate: string;
  dueDate: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: 'Paid' | 'Pending' | 'Overdue' | 'Draft';
  paymentDate?: string;
}

export interface Payment {
  id: string;
  invoiceId: string;
  invoiceNumber: string;
  clientId: string;
  clientName: string;
  amount: number;
  paymentMethod: 'Credit Card' | 'Bank Transfer' | 'PayPal' | 'Stripe';
  date: string;
  status: 'Success' | 'Failed' | 'Processing';
  transactionReference: string;
}

export interface FileItem {
  id: string;
  name: string;
  size: string;
  sizeBytes: number;
  type: 'pdf' | 'docx' | 'fig' | 'png' | 'jpg' | 'zip' | 'xlsx' | 'code';
  projectId?: string;
  projectName?: string;
  clientId?: string;
  clientName?: string;
  uploadedBy: string;
  uploadedAt: string;
  folder: 'Design' | 'Documents' | 'Financials' | 'Source Code' | 'General';
}

export interface ChatChannel {
  id: string;
  name: string;
  type: 'channel' | 'direct' | 'project';
  description?: string;
  projectId?: string;
  unreadCount: number;
  members: string[];
}

export interface ChatMessage {
  id: string;
  channelId: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
  attachments?: { name: string; url: string }[];
  reactions?: { emoji: string; count: number; users: string[] }[];
}

export interface NotificationItem {
  id: string;
  type: 'task_assigned' | 'task_completed' | 'deadline_approaching' | 'project_updated' | 'new_message' | 'mention' | 'file_uploaded' | 'payment_update';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  targetRoute: string;
  entityId?: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  type: 'deadline' | 'meeting' | 'milestone' | 'event';
  startDate: string;
  endDate: string;
  projectId?: string;
  projectName?: string;
  assigneeId?: string;
  description?: string;
}

export interface ProjectTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  estimatedDurationWeeks: number;
  defaultTasksCount: number;
  defaultMilestonesCount: number;
  tags: string[];
}

export interface ActivityLog {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  action: string;
  entityType: 'Project' | 'Task' | 'Client' | 'Budget' | 'File' | 'User' | 'Payment';
  entityId: string;
  entityName: string;
  timestamp: string;
  details: string;
}

export interface AuditLog {
  id: string;
  userId: string;
  userName: string;
  userRole: UserRole;
  action: string;
  ipAddress: string;
  timestamp: string;
  severity: 'Info' | 'Warning' | 'Critical';
  module: string;
  details: string;
  status?: string;
}

export interface SystemSettings {
  appName: string;
  logoUrl: string;
  currency: string;
  timezone: string;
  dateFormat: string;
  language: string;
  darkModeDefault: boolean;
  emailNotificationsEnabled: boolean;
  taskDeadlineAlertsDays: number;
  allowClientRegistration: boolean;
  twoFactorAuthRequired: boolean;
  projectStatuses: ProjectStatus[];
  taskPriorities: TaskPriority[];
}

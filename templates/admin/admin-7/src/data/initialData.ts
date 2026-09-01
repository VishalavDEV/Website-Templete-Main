export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Administrator' | 'Developer' | 'Manager' | 'Designer' | 'Analyst';
  status: 'Active' | 'Inactive' | 'Suspended';
  avatar: string;
  department: 'Engineering' | 'Product' | 'Operations' | 'Finance' | 'HR' | 'Marketing';
  joinedDate: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'Planning' | 'Active' | 'On Hold' | 'Completed' | 'Overdue';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  progress: number; // 0 to 100
  budget: number;
  spent: number;
  managerId: string;
  teamIds: string[]; // User IDs
  startDate: string;
  dueDate: string;
  category: 'Core' | 'Expansion' | 'Maintenance' | 'Security';
}

export interface Task {
  id: string;
  title: string;
  description: string;
  projectId: string;
  status: 'Backlog' | 'Todo' | 'In Progress' | 'Review' | 'Done';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  assigneeId: string;
  dueDate: string;
  estimatedHours: number;
  actualHours: number;
}

export interface Contact {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: 'Lead' | 'Contacted' | 'Qualified' | 'Proposal' | 'Negotiation' | 'Won' | 'Lost';
  dealValue: number;
  lastContacted: string;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  type: 'Income' | 'Expense';
  category: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
  reference: string;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  status: 'Active' | 'On Leave' | 'Remote';
  salary: number;
  email: string;
  attendanceRate: number; // percentage
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  type: 'Sick' | 'Vacation' | 'Personal' | 'Maternity/Paternity';
  startDate: string;
  endDate: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  reason: string;
}

export interface Message {
  id: string;
  senderId: string; // 'user' or system or another user
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
  unread: boolean;
  channel: string; // 'global' | 'project-alpha' | 'direct-user'
}

export interface FileItem {
  id: string;
  name: string;
  size: string;
  type: 'document' | 'spreadsheet' | 'image' | 'archive' | 'code';
  uploadedBy: string;
  uploadedAt: string;
  folder: 'Documents' | 'Source' | 'Assets' | 'Invoices' | 'Exports';
}

export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  start: string; // ISO String or Date
  end: string;
  projectId?: string;
  color: string; // Hex color code
  attendees: string[]; // User names or IDs
}

export interface ReportTemplate {
  id: string;
  title: string;
  description: string;
  type: 'Financial' | 'Performance' | 'Operational' | 'Audit';
  frequency: 'Daily' | 'Weekly' | 'Monthly' | 'Ad-hoc';
  lastGenerated: string;
  generatedBy: string;
}

export interface SystemHealth {
  cpu: number;
  memory: number;
  disk: number;
  latency: number;
  status: 'Optimal' | 'Degraded' | 'Critical';
}

export const initialUsers: User[] = [
  { id: 'usr-1', name: 'Elena Rostova', email: 'elena.r@sprintadmin.io', role: 'Administrator', status: 'Active', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', department: 'Engineering', joinedDate: '2025-01-15' },
  { id: 'usr-2', name: 'Marcus Chen', email: 'marcus.c@sprintadmin.io', role: 'Developer', status: 'Active', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', department: 'Engineering', joinedDate: '2025-03-22' },
  { id: 'usr-3', name: 'Sarah Jenkins', email: 'sarah.j@sprintadmin.io', role: 'Manager', status: 'Active', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80', department: 'Product', joinedDate: '2024-11-05' },
  { id: 'usr-4', name: 'David Kim', email: 'david.k@sprintadmin.io', role: 'Designer', status: 'Active', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', department: 'Product', joinedDate: '2025-02-10' },
  { id: 'usr-5', name: 'Amira Patel', email: 'amira.p@sprintadmin.io', role: 'Analyst', status: 'Active', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80', department: 'Finance', joinedDate: '2025-04-01' },
  { id: 'usr-6', name: 'Jordan Vane', email: 'jordan.v@sprintadmin.io', role: 'Developer', status: 'Inactive', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80', department: 'Engineering', joinedDate: '2025-05-18' }
];

export const initialProjects: Project[] = [
  { id: 'proj-1', name: 'Aegis Quantum Core', description: 'Development of the highly multi-threaded kernel engine for spatial clustering analytics.', status: 'Active', priority: 'Critical', progress: 68, budget: 120000, spent: 82000, managerId: 'usr-3', teamIds: ['usr-1', 'usr-2'], startDate: '2026-01-10', dueDate: '2026-10-30', category: 'Core' },
  { id: 'proj-2', name: 'Hydra Gateway Expansion', description: 'Building the highly parallelized ingress network for real-time edge streaming data capture.', status: 'Active', priority: 'High', progress: 42, budget: 85000, spent: 39000, managerId: 'usr-3', teamIds: ['usr-2', 'usr-4'], startDate: '2026-03-01', dueDate: '2026-11-15', category: 'Expansion' },
  { id: 'proj-3', name: 'Cerberus Guard System', description: 'Zero-trust audit logger, security scanner, and cryptographic key rotation architecture.', status: 'Planning', priority: 'High', progress: 12, budget: 95000, spent: 5000, managerId: 'usr-1', teamIds: ['usr-1', 'usr-5'], startDate: '2026-08-01', dueDate: '2027-02-28', category: 'Security' },
  { id: 'proj-4', name: 'Legacy Spark Maintenance', description: 'Resolving database deadlocks and optimization of standard ETL batch-processing routines.', status: 'Completed', priority: 'Low', progress: 100, budget: 30000, spent: 29500, managerId: 'usr-3', teamIds: ['usr-6'], startDate: '2026-02-15', dueDate: '2026-07-30', category: 'Maintenance' },
  { id: 'proj-5', name: 'SprintAdmin Mobile Console', description: 'Creating the React Native interface for multi-tenant on-call alerts and visual telemetry.', status: 'On Hold', priority: 'Medium', progress: 30, budget: 65000, spent: 22000, managerId: 'usr-4', teamIds: ['usr-2', 'usr-4'], startDate: '2026-05-01', dueDate: '2026-12-15', category: 'Expansion' }
];

export const initialTasks: Task[] = [
  { id: 'tsk-1', title: 'Implement gRPC transport layer', description: 'Setup network layer between Aegis core service and gateway nodes.', projectId: 'proj-1', status: 'In Progress', priority: 'High', assigneeId: 'usr-2', dueDate: '2026-09-10', estimatedHours: 40, actualHours: 28 },
  { id: 'tsk-2', title: 'Write encryption at rest wrapper', description: 'Establish secure Envelope Encryption key store integration.', projectId: 'proj-3', status: 'Todo', priority: 'Critical', assigneeId: 'usr-1', dueDate: '2026-09-30', estimatedHours: 24, actualHours: 0 },
  { id: 'tsk-3', title: 'Benchmark high-frequency clustering', description: 'Conduct synthetic load tests for 1M events per second spatial ingestion.', projectId: 'proj-1', status: 'Review', priority: 'High', assigneeId: 'usr-1', dueDate: '2026-08-28', estimatedHours: 35, actualHours: 38 },
  { id: 'tsk-4', title: 'Optimize UI dashboard chart latency', description: 'Refactor client canvas layout renders to eliminate layout thrashing.', projectId: 'proj-5', status: 'In Progress', priority: 'Medium', assigneeId: 'usr-4', dueDate: '2026-09-05', estimatedHours: 16, actualHours: 8 },
  { id: 'tsk-5', title: 'Legacy hotfix memory leaks', description: 'Investigate off-heap buffer leaks caused by Netty frame decoder.', projectId: 'proj-4', status: 'Done', priority: 'High', assigneeId: 'usr-6', dueDate: '2026-07-25', estimatedHours: 50, actualHours: 48 },
  { id: 'tsk-6', title: 'Define REST API definitions', description: 'Generate OpenAPI 3.0 specification schemas for developer portals.', projectId: 'proj-2', status: 'Todo', priority: 'Low', assigneeId: 'usr-5', dueDate: '2026-10-15', estimatedHours: 12, actualHours: 0 },
  { id: 'tsk-7', title: 'Resolve race conditions on ingress pipelines', description: 'Fix intermittent lock starvation when edge nodes post duplicate metrics.', projectId: 'proj-2', status: 'In Progress', priority: 'High', assigneeId: 'usr-2', dueDate: '2026-09-02', estimatedHours: 30, actualHours: 14 }
];

export const initialContacts: Contact[] = [
  { id: 'ct-1', name: 'Julian Vance', company: 'Starlight Defense Corp', email: 'j.vance@starlight.com', phone: '+1 (555) 381-2290', status: 'Proposal', dealValue: 145000, lastContacted: '2026-08-20' },
  { id: 'ct-2', name: 'Sophia Sterling', company: 'Altis Ventures', email: 'sophia@altis.vc', phone: '+1 (555) 902-8844', status: 'Won', dealValue: 320000, lastContacted: '2026-08-15' },
  { id: 'ct-3', name: 'Hiroshi Tanaka', company: 'Neo Tokyo Telecomm', email: 'h.tanaka@neotokyo.jp', phone: '+81 3 5555 0192', status: 'Negotiation', dealValue: 240000, lastContacted: '2026-08-22' },
  { id: 'ct-4', name: 'Clara Oswald', company: 'Chrono Analytics', email: 'clara@chrono-labs.co.uk', phone: '+44 20 7946 0958', status: 'Qualified', dealValue: 95000, lastContacted: '2026-08-11' },
  { id: 'ct-5', name: 'Viktor Reznov', company: 'Krasny Technologies', email: 'v.reznov@krasny.ru', phone: '+7 495 555 2211', status: 'Lead', dealValue: 180000, lastContacted: '2026-08-01' }
];

export const initialTransactions: Transaction[] = [
  { id: 'tx-1', date: '2026-08-23', description: 'Vercel Enterprise Subscription', type: 'Expense', category: 'Cloud Infrastructure', amount: 3200, status: 'Completed', reference: 'SPRINT-TX-902' },
  { id: 'tx-2', date: '2026-08-22', description: 'Starlight Defense First Installment', type: 'Income', category: 'Software Licensing', amount: 45000, status: 'Completed', reference: 'SPRINT-TX-903' },
  { id: 'tx-3', date: '2026-08-20', description: 'GitHub Enterprise Suite Add-on', type: 'Expense', category: 'Development Tools', amount: 1850, status: 'Completed', reference: 'SPRINT-TX-904' },
  { id: 'tx-4', date: '2026-08-19', description: 'Altis Ventures Seed Tranche B', type: 'Income', category: 'Capital Investment', amount: 160000, status: 'Completed', reference: 'SPRINT-TX-905' },
  { id: 'tx-5', date: '2026-08-18', description: 'Amazon Web Services Serverless Compute', type: 'Expense', category: 'Cloud Infrastructure', amount: 14200, status: 'Pending', reference: 'SPRINT-TX-906' },
  { id: 'tx-6', date: '2026-08-17', description: 'Legal Counsel Services - IP Protection', type: 'Expense', category: 'Legal & Consulting', amount: 7500, status: 'Completed', reference: 'SPRINT-TX-907' },
  { id: 'tx-7', date: '2026-08-15', description: 'SaaS Platform Subscription - Hubspot', type: 'Expense', category: 'Marketing & Sales', amount: 950, status: 'Failed', reference: 'SPRINT-TX-908' }
];

export const initialEmployees: Employee[] = [
  { id: 'emp-1', name: 'Elena Rostova', role: 'VP of Engineering', department: 'Engineering', status: 'Active', salary: 185000, email: 'elena.r@sprintadmin.io', attendanceRate: 98 },
  { id: 'emp-2', name: 'Marcus Chen', role: 'Staff Systems Engineer', department: 'Engineering', status: 'Active', salary: 160000, email: 'marcus.c@sprintadmin.io', attendanceRate: 95 },
  { id: 'emp-3', name: 'Sarah Jenkins', role: 'Director of Product', department: 'Product', status: 'Active', salary: 155000, email: 'sarah.j@sprintadmin.io', attendanceRate: 96 },
  { id: 'emp-4', name: 'David Kim', role: 'Lead Product Designer', department: 'Product', status: 'Active', salary: 125000, email: 'david.k@sprintadmin.io', attendanceRate: 92 },
  { id: 'emp-5', name: 'Amira Patel', role: 'Senior Finance Analyst', department: 'Finance', status: 'Remote', salary: 110000, email: 'amira.p@sprintadmin.io', attendanceRate: 99 },
  { id: 'emp-6', name: 'Jordan Vane', role: 'Junior Core Engineer', department: 'Engineering', status: 'On Leave', salary: 95000, email: 'jordan.v@sprintadmin.io', attendanceRate: 85 }
];

export const initialLeaveRequests: LeaveRequest[] = [
  { id: 'lv-1', employeeId: 'emp-6', employeeName: 'Jordan Vane', type: 'Vacation', startDate: '2026-08-20', endDate: '2026-08-28', status: 'Approved', reason: 'Annual family summer break.' },
  { id: 'lv-2', employeeId: 'emp-4', employeeName: 'David Kim', type: 'Sick', startDate: '2026-08-24', endDate: '2026-08-25', status: 'Pending', reason: 'Flu recovery.' },
  { id: 'lv-3', employeeId: 'emp-2', employeeName: 'Marcus Chen', type: 'Personal', startDate: '2026-09-15', endDate: '2026-09-17', status: 'Pending', reason: 'Moving to a new apartment.' }
];

export const initialMessages: Message[] = [
  { id: 'msg-1', senderId: 'usr-1', senderName: 'Elena Rostova', senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', content: 'Did we finish the stress testing for the spatial clustering module?', timestamp: '09:12 AM', unread: true, channel: 'global' },
  { id: 'msg-2', senderId: 'usr-2', senderName: 'Marcus Chen', senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', content: 'Yes, just waiting for the containerized run to write logs to CloudWatch.', timestamp: '09:15 AM', unread: true, channel: 'global' },
  { id: 'msg-3', senderId: 'system', senderName: 'Core AI Ground Monitor', senderAvatar: '', content: 'Alert: Latency threshold surpassed 150ms briefly on node gateway-useast-02.', timestamp: '08:45 AM', unread: false, channel: 'global' },
  { id: 'msg-4', senderId: 'usr-3', senderName: 'Sarah Jenkins', senderAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80', content: 'The client for the Starlight account is thrilled with the spatial API draft.', timestamp: 'Yesterday', unread: false, channel: 'project-alpha' },
  { id: 'msg-5', senderId: 'usr-5', senderName: 'Amira Patel', senderAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80', content: 'I have prepared the draft financial projection excel sheet in the /Exports folder.', timestamp: 'Yesterday', unread: false, channel: 'direct-user' }
];

export const initialFiles: FileItem[] = [
  { id: 'fl-1', name: 'Aegis_Architecture_Spec_v3.pdf', size: '4.8 MB', type: 'document', uploadedBy: 'Elena Rostova', uploadedAt: '2026-08-10', folder: 'Documents' },
  { id: 'fl-2', name: 'Ingress_Gateway_Kubernetes_config.yaml', size: '12 KB', type: 'code', uploadedBy: 'Marcus Chen', uploadedAt: '2026-08-22', folder: 'Source' },
  { id: 'fl-3', name: 'SprintAdmin_Command_Branding_Assets.zip', size: '48 MB', type: 'archive', uploadedBy: 'David Kim', uploadedAt: '2026-08-18', folder: 'Assets' },
  { id: 'fl-4', name: 'Financials_Q2_Summary_Forecast.xlsx', size: '1.2 MB', type: 'spreadsheet', uploadedBy: 'Amira Patel', uploadedAt: '2026-08-23', folder: 'Exports' },
  { id: 'fl-5', name: 'In_9203_Starlight_Invoice.pdf', size: '240 KB', type: 'document', uploadedBy: 'Amira Patel', uploadedAt: '2026-08-20', folder: 'Invoices' }
];

export const initialEvents: CalendarEvent[] = [
  { id: 'ev-1', title: 'Daily Standup Sync', description: 'Routine status and blocker updates for Core & Gateway teams.', start: '2026-08-24T10:00:00', end: '2026-08-24T10:30:00', projectId: 'proj-1', color: '#8B5CF6', attendees: ['Elena Rostova', 'Marcus Chen', 'Sarah Jenkins'] },
  { id: 'ev-2', title: 'Aegis Security Audit', description: 'Zero-trust architecture evaluation and code sign-off check.', start: '2026-08-25T14:00:00', end: '2026-08-25T16:00:00', projectId: 'proj-3', color: '#EF4444', attendees: ['Elena Rostova', 'Amira Patel'] },
  { id: 'ev-3', title: 'Product Roadmap Planning', description: 'Interactive design mockup workshop for Q4 console components.', start: '2026-08-26T11:00:00', end: '2026-08-26T12:30:00', projectId: 'proj-5', color: '#10B981', attendees: ['Sarah Jenkins', 'David Kim', 'Marcus Chen'] },
  { id: 'ev-4', title: 'Starlight Client Presentation', description: 'Review progress of quantum cluster model draft api and sign off.', start: '2026-08-28T15:00:00', end: '2026-08-28T16:00:00', color: '#3B82F6', attendees: ['Sarah Jenkins', 'Amira Patel'] }
];

export const initialReports: ReportTemplate[] = [
  { id: 'rp-1', title: 'Infrastructure & Bandwidth Telemetry', description: 'Consolidated network traffic analysis, server compute utilization and gateway node latency metrics.', type: 'Operational', frequency: 'Daily', lastGenerated: '2026-08-24 05:00 AM', generatedBy: 'System Monitor' },
  { id: 'rp-2', title: 'Profitability & Capital Cashflow Ledger', description: 'Consolidated spreadsheet containing cloud operating costs offset by product line subscription revenue.', type: 'Financial', frequency: 'Monthly', lastGenerated: '2026-08-01 09:00 AM', generatedBy: 'Amira Patel' },
  { id: 'rp-3', title: 'Sprint Ingestion and Velocity Metrics', description: 'Aggregated velocity review, burndown coordinates, and backlog health ratios for all active projects.', type: 'Performance', frequency: 'Weekly', lastGenerated: '2026-08-23 06:00 PM', generatedBy: 'Sarah Jenkins' },
  { id: 'rp-4', title: 'Security Audit & IAM Access Logs', description: 'Unusual auth occurrences, elevated API tokens generated and key rotators health list.', type: 'Audit', frequency: 'Weekly', lastGenerated: '2026-08-23 11:30 PM', generatedBy: 'Elena Rostova' }
];

export const initialHealth: SystemHealth = {
  cpu: 42.4,
  memory: 68.1,
  disk: 54.8,
  latency: 18.5,
  status: 'Optimal'
};

import {
  User,
  Client,
  Project,
  Task,
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
  CalendarEvent,
  ProjectTemplate,
  ActivityLog,
  AuditLog,
  SystemSettings
} from '../types';

export const initialUsers: User[] = [
  {
    id: 'u-1',
    name: 'Alexandra Vance',
    email: 'alexandra.vance@corevista.io',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    role: 'Super Admin',
    departmentId: 'd-1',
    departmentName: 'Executive Leadership',
    phone: '+1 (555) 019-2834',
    skills: ['Strategic Planning', 'Product Leadership', 'Enterprise Architecture', 'SaaS Growth'],
    status: 'Active',
    availabilityHoursPerWeek: 40,
    hourlyRate: 150,
    bio: 'Founder & VP of Engineering. 14+ years scaling high-performance enterprise SaaS platforms.',
    joinedDate: '2023-01-15'
  },
  {
    id: 'u-2',
    name: 'Marcus Sterling',
    email: 'marcus.sterling@corevista.io',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    role: 'Project Manager',
    departmentId: 'd-2',
    departmentName: 'Product Management',
    phone: '+1 (555) 018-9921',
    skills: ['Agile Scrum', 'Risk Management', 'Resource Allocation', 'Jira/Linear', 'Stakeholder Management'],
    status: 'Active',
    availabilityHoursPerWeek: 40,
    hourlyRate: 110,
    bio: 'Senior Lead PM overseeing FinTech & Cloud Infrastructure portfolio.',
    joinedDate: '2023-03-10'
  },
  {
    id: 'u-3',
    name: 'Sophia Chen',
    email: 'sophia.chen@corevista.io',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    role: 'Team Lead',
    departmentId: 'd-3',
    departmentName: 'Software Engineering',
    phone: '+1 (555) 017-3344',
    skills: ['React', 'TypeScript', 'Node.js', 'System Architecture', 'GraphQL', 'Docker'],
    status: 'Active',
    availabilityHoursPerWeek: 40,
    hourlyRate: 125,
    bio: 'Principal Frontend Architect specializing in high-frequency web applications.',
    joinedDate: '2023-02-01'
  },
  {
    id: 'u-4',
    name: 'David Rodriguez',
    email: 'david.rodriguez@corevista.io',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    role: 'Team Lead',
    departmentId: 'd-3',
    departmentName: 'Software Engineering',
    phone: '+1 (555) 016-5511',
    skills: ['Python', 'Golang', 'Kubernetes', 'PostgreSQL', 'Microservices', 'AWS'],
    status: 'Active',
    availabilityHoursPerWeek: 40,
    hourlyRate: 120,
    bio: 'Backend Infrastructure Lead. Focused on distributed systems and cloud scalability.',
    joinedDate: '2023-04-12'
  },
  {
    id: 'u-5',
    name: 'Elena Rostova',
    email: 'elena.rostova@corevista.io',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
    role: 'Team Member',
    departmentId: 'd-4',
    departmentName: 'UI/UX Design',
    phone: '+1 (555) 015-8822',
    skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Accessibility (WCAG 2.1)'],
    status: 'Active',
    availabilityHoursPerWeek: 40,
    hourlyRate: 95,
    bio: 'Senior Product Designer crafting intuitive enterprise web interfaces.',
    joinedDate: '2023-05-18'
  },
  {
    id: 'u-6',
    name: 'James Harrison',
    email: 'james.harrison@corevista.io',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    role: 'Team Member',
    departmentId: 'd-3',
    departmentName: 'Software Engineering',
    phone: '+1 (555) 014-9900',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Jest'],
    status: 'Active',
    availabilityHoursPerWeek: 40,
    hourlyRate: 90,
    bio: 'Fullstack developer passionate about sleek UI components and clean code.',
    joinedDate: '2023-06-01'
  },
  {
    id: 'u-7',
    name: 'Amara Okafor',
    email: 'amara.okafor@corevista.io',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150',
    role: 'Project Manager',
    departmentId: 'd-2',
    departmentName: 'Product Management',
    phone: '+1 (555) 013-4411',
    skills: ['Client Relations', 'PMP Certified', 'Budgeting', 'Agile Leadership'],
    status: 'Active',
    availabilityHoursPerWeek: 40,
    hourlyRate: 105,
    bio: 'Technical PM driving Healthcare & AI enterprise initiatives.',
    joinedDate: '2023-07-15'
  },
  {
    id: 'u-8',
    name: 'Lucas Dupont',
    email: 'lucas.dupont@corevista.io',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150',
    role: 'Team Member',
    departmentId: 'd-5',
    departmentName: 'Quality Assurance',
    phone: '+1 (555) 012-7733',
    skills: ['Cypress', 'Playwright', 'Selenium', 'API Testing', 'Load Testing (k6)'],
    status: 'Active',
    availabilityHoursPerWeek: 40,
    hourlyRate: 85,
    bio: 'Senior QA Automation Engineer maintaining 99.9% release fidelity.',
    joinedDate: '2023-08-10'
  },
  {
    id: 'u-9',
    name: 'Rachel Kim',
    email: 'rachel.kim@corevista.io',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
    role: 'Team Member',
    departmentId: 'd-4',
    departmentName: 'UI/UX Design',
    phone: '+1 (555) 011-2299',
    skills: ['UI Motion', 'Figma Libraries', 'User Testing', 'Design Tokens'],
    status: 'Active',
    availabilityHoursPerWeek: 30,
    hourlyRate: 88,
    bio: 'UX Specialist focused on data visualizer dashboard interactions.',
    joinedDate: '2023-09-01'
  },
  {
    id: 'u-10',
    name: 'Vikram Patel',
    email: 'vikram.patel@corevista.io',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150',
    role: 'Team Member',
    departmentId: 'd-3',
    departmentName: 'Software Engineering',
    phone: '+1 (555) 010-6644',
    skills: ['DevOps', 'Terraform', 'CI/CD Pipelines', 'AWS EKS', 'Prometheus'],
    status: 'Active',
    availabilityHoursPerWeek: 40,
    hourlyRate: 115,
    bio: 'Cloud Infrastructure & Site Reliability Engineer.',
    joinedDate: '2023-10-05'
  }
];

export const initialClients: Client[] = [
  {
    id: 'c-1',
    name: 'Nexus Financial Corp',
    company: 'Nexus Financial Global Ltd.',
    email: 'contact@nexusfin.com',
    phone: '+1 (800) 555-0199',
    avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150',
    industry: 'Financial Services & Banking',
    address: '250 Wall Street, Floor 18, New York, NY 10005',
    status: 'Active',
    totalContractValue: 480000,
    activeProjectsCount: 3,
    joinedDate: '2023-01-20',
    contacts: [
      { id: 'cc-1', name: 'Chloe Bennett', role: 'VP Technology', email: 'chloe.bennett@nexusfin.com', phone: '+1 (555) 009-1122' },
      { id: 'cc-2', name: 'Robert Gable', role: 'Compliance Officer', email: 'rgable@nexusfin.com', phone: '+1 (555) 009-1123' }
    ]
  },
  {
    id: 'c-2',
    name: 'Aetheria Health Systems',
    company: 'Aetheria Healthcare Alliance',
    email: 'info@aetheriahealth.org',
    phone: '+1 (800) 555-0244',
    avatar: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=150',
    industry: 'Healthcare & Biotechnology',
    address: '120 Medical Center Parkway, Suite 400, Boston, MA 02115',
    status: 'Active',
    totalContractValue: 350000,
    activeProjectsCount: 2,
    joinedDate: '2023-03-14',
    contacts: [
      { id: 'cc-3', name: 'Dr. Arthur Pendelton', role: 'CMIO', email: 'arthur.p@aetheriahealth.org', phone: '+1 (555) 008-3344' }
    ]
  },
  {
    id: 'c-3',
    name: 'Apex Cloud Systems',
    company: 'Apex Cloud Technologies Inc.',
    email: 'partners@apexcloud.io',
    phone: '+1 (888) 555-0311',
    avatar: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=150',
    industry: 'Cloud Infrastructure & SaaS',
    address: '500 Howard Street, San Francisco, CA 94105',
    status: 'Active',
    totalContractValue: 620000,
    activeProjectsCount: 4,
    joinedDate: '2023-02-10',
    contacts: [
      { id: 'cc-4', name: 'Sarah Jenkins', role: 'Director of Cloud Ops', email: 'sjenkins@apexcloud.io', phone: '+1 (555) 044-8811' }
    ]
  },
  {
    id: 'c-4',
    name: 'Vanguard Global Retail',
    company: 'Vanguard Commerce Group',
    email: 'tech@vanguardretail.com',
    phone: '+1 (800) 555-0988',
    avatar: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150',
    industry: 'E-Commerce & Supply Chain',
    address: '880 Michigan Avenue, Chicago, IL 60611',
    status: 'Active',
    totalContractValue: 290000,
    activeProjectsCount: 2,
    joinedDate: '2023-05-22',
    contacts: [
      { id: 'cc-5', name: 'Michael Thorne', role: 'E-Commerce Director', email: 'mthorne@vanguardretail.com', phone: '+1 (555) 033-2211' }
    ]
  },
  {
    id: 'c-5',
    name: 'CyberShield Logistics',
    company: 'CyberShield Int. Supply',
    email: 'ops@cybershieldlogistics.com',
    phone: '+1 (800) 555-0722',
    avatar: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=150',
    industry: 'Logistics & Freight',
    address: '1400 Harbor Blvd, Long Beach, CA 90802',
    status: 'Lead',
    totalContractValue: 180000,
    activeProjectsCount: 1,
    joinedDate: '2023-09-01',
    contacts: [
      { id: 'cc-6', name: 'Tariq Al-Mansoor', role: 'VP Operations', email: 'tariq@cybershieldlogistics.com', phone: '+1 (555) 077-9922' }
    ]
  }
];

export const initialProjects: Project[] = [
  {
    id: 'p-1',
    code: 'PRJ-COREVISTA-2026',
    name: 'CoreVista Admin Redesign v2.0',
    description: 'Complete overhaul of the core enterprise dashboard platform with high-performance React SPA, dark charcoal aesthetic, and modular micro-frontends.',
    clientId: 'c-3',
    clientName: 'Apex Cloud Systems',
    projectManagerId: 'u-2',
    projectManagerName: 'Marcus Sterling',
    projectManagerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    teamMemberIds: ['u-1', 'u-2', 'u-3', 'u-5', 'u-6', 'u-8'],
    status: 'In Progress',
    priority: 'Urgent',
    startDate: '2026-01-10',
    endDate: '2026-09-30',
    budget: 185000,
    spent: 92400,
    progress: 68,
    tags: ['React', 'Tailwind', 'Design System', 'Core Vista'],
    category: 'Web Application',
    attachmentsCount: 18,
    tasksCount: 24,
    completedTasksCount: 16,
    isArchived: false
  },
  {
    id: 'p-2',
    code: 'PRJ-NEXUS-FIN',
    name: 'FinTech Banking Portal v3',
    description: 'High-security multi-currency trading dashboard, real-time transaction streaming, and automated SEC compliance reporting engine.',
    clientId: 'c-1',
    clientName: 'Nexus Financial Corp',
    projectManagerId: 'u-2',
    projectManagerName: 'Marcus Sterling',
    projectManagerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    teamMemberIds: ['u-2', 'u-4', 'u-6', 'u-10'],
    status: 'In Progress',
    priority: 'High',
    startDate: '2025-11-01',
    endDate: '2026-07-15',
    budget: 240000,
    spent: 165000,
    progress: 78,
    tags: ['FinTech', 'Security', 'WebSockets', 'Banking'],
    category: 'Finance Platform',
    attachmentsCount: 26,
    tasksCount: 30,
    completedTasksCount: 22,
    isArchived: false
  },
  {
    id: 'p-3',
    code: 'PRJ-AETHERIA-EHR',
    name: 'Aetheria Telehealth & Patient EHR Sync',
    description: 'HIPAA-compliant video consultation module with automated AI transcription and legacy EHR database synchronization.',
    clientId: 'c-2',
    clientName: 'Aetheria Health Systems',
    projectManagerId: 'u-7',
    projectManagerName: 'Amara Okafor',
    projectManagerAvatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150',
    teamMemberIds: ['u-3', 'u-4', 'u-7', 'u-8', 'u-9'],
    status: 'In Progress',
    priority: 'High',
    startDate: '2026-02-01',
    endDate: '2026-10-15',
    budget: 195000,
    spent: 68000,
    progress: 42,
    tags: ['Healthcare', 'HIPAA', 'WebRTC', 'AI Transcription'],
    category: 'Medical SaaS',
    attachmentsCount: 14,
    tasksCount: 28,
    completedTasksCount: 11,
    isArchived: false
  },
  {
    id: 'p-4',
    code: 'PRJ-VANGUARD-OMNI',
    name: 'Vanguard Omnichannel Commerce Engine',
    description: 'Headless e-commerce platform integrating Shopify Plus, custom inventory tracking, and dynamic multi-warehouse routing.',
    clientId: 'c-4',
    clientName: 'Vanguard Global Retail',
    projectManagerId: 'u-2',
    projectManagerName: 'Marcus Sterling',
    projectManagerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    teamMemberIds: ['u-3', 'u-5', 'u-6', 'u-10'],
    status: 'Review',
    priority: 'Medium',
    startDate: '2025-09-15',
    endDate: '2026-04-30',
    budget: 160000,
    spent: 148000,
    progress: 92,
    tags: ['E-Commerce', 'GraphQL', 'Shopify', 'Next.js'],
    category: 'Retail SaaS',
    attachmentsCount: 22,
    tasksCount: 22,
    completedTasksCount: 20,
    isArchived: false
  },
  {
    id: 'p-5',
    code: 'PRJ-APEX-DEVOPS',
    name: 'Apex Infrastructure Automation & Kubernetes Mesh',
    description: 'Zero-trust multi-region Kubernetes deployment architecture with automated IaC Terraform scripts and Datadog monitoring.',
    clientId: 'c-3',
    clientName: 'Apex Cloud Systems',
    projectManagerId: 'u-7',
    projectManagerName: 'Amara Okafor',
    projectManagerAvatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150',
    teamMemberIds: ['u-4', 'u-10'],
    status: 'Completed',
    priority: 'High',
    startDate: '2025-06-01',
    endDate: '2026-01-20',
    budget: 135000,
    spent: 131500,
    progress: 100,
    tags: ['Kubernetes', 'Terraform', 'DevOps', 'AWS'],
    category: 'Cloud Infrastructure',
    attachmentsCount: 11,
    tasksCount: 16,
    completedTasksCount: 16,
    isArchived: false
  },
  {
    id: 'p-6',
    code: 'PRJ-CYBER-FLEET',
    name: 'CyberShield Real-Time Logistics Tracking',
    description: 'IoT GPS telemetry portal displaying live cargo ship fleet movement, temperature logs, and automated customs clearance alerts.',
    clientId: 'c-5',
    clientName: 'CyberShield Logistics',
    projectManagerId: 'u-7',
    projectManagerName: 'Amara Okafor',
    projectManagerAvatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150',
    teamMemberIds: ['u-3', 'u-4', 'u-6', 'u-8'],
    status: 'Planning',
    priority: 'Medium',
    startDate: '2026-04-01',
    endDate: '2026-11-30',
    budget: 150000,
    spent: 12000,
    progress: 15,
    tags: ['IoT', 'Logistics', 'Maps API', 'Realtime'],
    category: 'Supply Chain',
    attachmentsCount: 6,
    tasksCount: 18,
    completedTasksCount: 3,
    isArchived: false
  },
  {
    id: 'p-7',
    code: 'PRJ-LEGACY-ERP-SYNC',
    name: 'Enterprise Legacy SAP ERP Database Sync',
    description: 'Archived project for migrating legacy SAP databases to PostgreSQL cloud databases.',
    clientId: 'c-1',
    clientName: 'Nexus Financial Corp',
    projectManagerId: 'u-2',
    projectManagerName: 'Marcus Sterling',
    projectManagerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    teamMemberIds: ['u-4', 'u-10'],
    status: 'Archived',
    priority: 'Low',
    startDate: '2024-03-01',
    endDate: '2025-02-15',
    budget: 110000,
    spent: 108000,
    progress: 100,
    tags: ['Legacy', 'SAP', 'PostgreSQL'],
    category: 'Database Migration',
    attachmentsCount: 5,
    tasksCount: 12,
    completedTasksCount: 12,
    isArchived: true
  }
];

export const initialTasks: Task[] = [
  {
    id: 't-1',
    taskCode: 'TASK-101',
    title: 'Design Charcoal Dark & Light Mode Token Hierarchy',
    description: 'Establish standard grey scale (#181818, #202020, #252525, #3A3A3A) and light mode theme variables in Tailwind v4 index.css.',
    projectId: 'p-1',
    projectName: 'CoreVista Admin Redesign v2.0',
    assigneeId: 'u-5',
    assigneeName: 'Elena Rostova',
    assigneeAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
    status: 'Completed',
    priority: 'Urgent',
    startDate: '2026-01-12',
    dueDate: '2026-01-25',
    estimatedHours: 24,
    actualHours: 22,
    tags: ['UI System', 'Figma', 'CSS Variables'],
    subtasks: [
      { id: 'st-1', title: 'Define Grey Dark theme surface tokens', completed: true },
      { id: 'st-2', title: 'Define Light theme contrast tokens', completed: true },
      { id: 'st-3', title: 'Test WCAG AA accessibility contrast ratio', completed: true }
    ],
    comments: [
      { id: 'tc-1', userId: 'u-2', userName: 'Marcus Sterling', userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', content: 'Design tokens look ultra-crisp! Ready for React integration.', createdAt: '2026-01-24 14:30' }
    ],
    attachments: [
      { id: 'ta-1', fileName: 'corevista_color_tokens.fig', fileSize: '4.2 MB', fileUrl: '#', uploadedAt: '2026-01-20' }
    ]
  },
  {
    id: 't-2',
    taskCode: 'TASK-102',
    title: 'Implement Interactive Drag and Drop Kanban Board',
    description: 'Build robust Kanban board with columns: Backlog, To Do, In Progress, Review, Testing, Completed using @hello-pangea/dnd.',
    projectId: 'p-1',
    projectName: 'CoreVista Admin Redesign v2.0',
    assigneeId: 'u-3',
    assigneeName: 'Sophia Chen',
    assigneeAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    status: 'In Progress',
    priority: 'Urgent',
    startDate: '2026-02-01',
    dueDate: '2026-03-10',
    estimatedHours: 35,
    actualHours: 28,
    tags: ['Kanban', 'Drag and Drop', 'React State'],
    subtasks: [
      { id: 'st-4', title: 'Set up DnD Droppable columns', completed: true },
      { id: 'st-5', title: 'Handle card reordering and state update', completed: true },
      { id: 'st-6', title: 'Add quick edit & status change popup', completed: false }
    ],
    comments: [],
    attachments: []
  },
  {
    id: 't-3',
    taskCode: 'TASK-103',
    title: 'Construct Recharts Analytics Dashboards & Report Modules',
    description: 'Create interactive line, bar, donut, area, and radar charts for Project Progress, Team Productivity, and Financial Budgets.',
    projectId: 'p-1',
    projectName: 'CoreVista Admin Redesign v2.0',
    assigneeId: 'u-6',
    assigneeName: 'James Harrison',
    assigneeAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    status: 'In Progress',
    priority: 'High',
    startDate: '2026-02-15',
    dueDate: '2026-03-20',
    estimatedHours: 30,
    actualHours: 18,
    tags: ['Recharts', 'Analytics', 'Dashboard'],
    subtasks: [
      { id: 'st-7', title: 'Project status distribution donut chart', completed: true },
      { id: 'st-8', title: 'Monthly progress area chart', completed: true },
      { id: 'st-9', title: 'Budget vs Actual expense breakdown', completed: false }
    ],
    comments: [],
    attachments: []
  },
  {
    id: 't-4',
    taskCode: 'TASK-104',
    title: 'Develop Real-Time Stopwatch Time Tracking & Timesheets',
    description: 'Build ticking stopwatch component with live start/stop timer, project/task selection, and weekly time entry ledger.',
    projectId: 'p-1',
    projectName: 'CoreVista Admin Redesign v2.0',
    assigneeId: 'u-3',
    assigneeName: 'Sophia Chen',
    assigneeAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    status: 'Testing',
    priority: 'High',
    startDate: '2026-02-10',
    dueDate: '2026-03-05',
    estimatedHours: 20,
    actualHours: 21,
    tags: ['Time Tracking', 'Stopwatch', 'Timesheets'],
    subtasks: [
      { id: 'st-10', title: 'Implement live timer interval hook', completed: true },
      { id: 'st-11', title: 'Manual time entry modal form', completed: true },
      { id: 'st-12', title: 'Weekly approval workflow UI', completed: true }
    ],
    comments: [],
    attachments: []
  },
  {
    id: 't-5',
    taskCode: 'TASK-105',
    title: 'Build Global Search Modal (Cmd + K)',
    description: 'Unified search bar scanning Projects, Tasks, Team Members, Clients, Files, and Messages with instant navigation.',
    projectId: 'p-1',
    projectName: 'CoreVista Admin Redesign v2.0',
    assigneeId: 'u-6',
    assigneeName: 'James Harrison',
    assigneeAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    status: 'To Do',
    priority: 'Medium',
    startDate: '2026-03-01',
    dueDate: '2026-03-25',
    estimatedHours: 16,
    actualHours: 0,
    tags: ['Search', 'Modal', 'Shortcut'],
    subtasks: [],
    comments: [],
    attachments: []
  },
  {
    id: 't-6',
    taskCode: 'TASK-201',
    title: 'SEC Automated Financial Compliance Audit Endpoint',
    description: 'Engine for generating downloadable CSV/PDF audit trails for trade settlements and regulatory compliance.',
    projectId: 'p-2',
    projectName: 'FinTech Banking Portal v3',
    assigneeId: 'u-4',
    assigneeName: 'David Rodriguez',
    assigneeAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    status: 'Completed',
    priority: 'Urgent',
    startDate: '2025-12-01',
    dueDate: '2026-01-30',
    estimatedHours: 45,
    actualHours: 42,
    tags: ['Security', 'SEC', 'Compliance', 'Audit'],
    subtasks: [
      { id: 'st-13', title: 'Audit log data model & encryption', completed: true },
      { id: 'st-14', title: 'CSV/PDF export formatter', completed: true }
    ],
    comments: [],
    attachments: []
  },
  {
    id: 't-7',
    taskCode: 'TASK-202',
    title: 'Multi-Currency Real-Time WebSocket Price Feed',
    description: 'High-frequency streaming price ticker with fallback reconnection logic for USD, EUR, GBP, JPY, and CHF.',
    projectId: 'p-2',
    projectName: 'FinTech Banking Portal v3',
    assigneeId: 'u-4',
    assigneeName: 'David Rodriguez',
    assigneeAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    status: 'In Progress',
    priority: 'High',
    startDate: '2026-01-15',
    dueDate: '2026-03-15',
    estimatedHours: 40,
    actualHours: 32,
    tags: ['WebSockets', 'FX Trading', 'FinTech'],
    subtasks: [],
    comments: [],
    attachments: []
  },
  {
    id: 't-8',
    taskCode: 'TASK-301',
    title: 'HIPAA Video Consultation WebRTC Integration',
    description: 'Peer-to-peer encrypted video streaming for telehealth appointments with doctor screen share capabilities.',
    projectId: 'p-3',
    projectName: 'Aetheria Telehealth & Patient EHR Sync',
    assigneeId: 'u-3',
    assigneeName: 'Sophia Chen',
    assigneeAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    status: 'In Progress',
    priority: 'Urgent',
    startDate: '2026-02-05',
    dueDate: '2026-03-28',
    estimatedHours: 50,
    actualHours: 24,
    tags: ['WebRTC', 'HIPAA', 'Healthcare'],
    subtasks: [],
    comments: [],
    attachments: []
  },
  {
    id: 't-9',
    taskCode: 'TASK-401',
    title: 'Shopify Plus Inventory Webhook Sync',
    description: 'Bi-directional webhook synchronization between warehouse database and Shopify storefront stock levels.',
    projectId: 'p-4',
    projectName: 'Vanguard Omnichannel Commerce Engine',
    assigneeId: 'u-6',
    assigneeName: 'James Harrison',
    assigneeAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    status: 'Review',
    priority: 'Medium',
    startDate: '2026-01-05',
    dueDate: '2026-02-28',
    estimatedHours: 28,
    actualHours: 26,
    tags: ['Shopify', 'Webhooks', 'E-Commerce'],
    subtasks: [],
    comments: [],
    attachments: []
  },
  {
    id: 't-10',
    taskCode: 'TASK-501',
    title: 'Terraform Multi-Region AWS EKS Cluster Provisioning',
    description: 'Infrastructure as Code templates for us-east-1 and eu-west-1 failover cluster management.',
    projectId: 'p-5',
    projectName: 'Apex Infrastructure Automation & Kubernetes Mesh',
    assigneeId: 'u-10',
    assigneeName: 'Vikram Patel',
    assigneeAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150',
    status: 'Completed',
    priority: 'Urgent',
    startDate: '2025-08-01',
    dueDate: '2025-11-15',
    estimatedHours: 60,
    actualHours: 58,
    tags: ['Terraform', 'AWS', 'Kubernetes'],
    subtasks: [],
    comments: [],
    attachments: []
  }
];

export const initialMilestones: Milestone[] = [
  {
    id: 'm-1',
    projectId: 'p-1',
    projectName: 'CoreVista Admin Redesign v2.0',
    title: 'Phase 1: Architecture & Theme Engine Design',
    description: 'Finalize UI design system, charcoal grey dark theme tokens, layout shell, and state manager.',
    dueDate: '2026-02-28',
    status: 'Completed',
    progress: 100,
    taskIds: ['t-1']
  },
  {
    id: 'm-2',
    projectId: 'p-1',
    projectName: 'CoreVista Admin Redesign v2.0',
    title: 'Phase 2: Core Project, Task & Kanban Modules',
    description: 'Implement full CRUD for projects, interactive drag and drop Kanban, and task details modal.',
    dueDate: '2026-03-31',
    status: 'In Progress',
    progress: 75,
    taskIds: ['t-2', 't-4']
  },
  {
    id: 'm-3',
    projectId: 'p-1',
    projectName: 'CoreVista Admin Redesign v2.0',
    title: 'Phase 3: Financials, Analytics & Reports',
    description: 'Deliver budgets, expense tracking, invoice generator, and Recharts reporting suite.',
    dueDate: '2026-05-15',
    status: 'Upcoming',
    progress: 30,
    taskIds: ['t-3']
  },
  {
    id: 'm-4',
    projectId: 'p-2',
    projectName: 'FinTech Banking Portal v3',
    title: 'Security Compliance & SEC Certification',
    description: 'Pass 3rd party penetration test and satisfy SEC automated trade audit requirements.',
    dueDate: '2026-02-15',
    status: 'Completed',
    progress: 100,
    taskIds: ['t-6']
  },
  {
    id: 'm-5',
    projectId: 'p-3',
    projectName: 'Aetheria Telehealth & Patient EHR Sync',
    title: 'WebRTC Video & AI Note Transcription Beta',
    description: 'Deploy HIPAA compliant telehealth video room with real-time speech-to-text notes.',
    dueDate: '2026-04-30',
    status: 'In Progress',
    progress: 45,
    taskIds: ['t-8']
  }
];

export const initialDepartments: Department[] = [
  { id: 'd-1', name: 'Executive Leadership', headName: 'Alexandra Vance', membersCount: 3, projectsCount: 6 },
  { id: 'd-2', name: 'Product Management', headName: 'Marcus Sterling', membersCount: 4, projectsCount: 6 },
  { id: 'd-3', name: 'Software Engineering', headName: 'Sophia Chen', membersCount: 10, projectsCount: 6 },
  { id: 'd-4', name: 'UI/UX Design', headName: 'Elena Rostova', membersCount: 3, projectsCount: 6 },
  { id: 'd-5', name: 'Quality Assurance', headName: 'Lucas Dupont', membersCount: 2, projectsCount: 6 }
];

export const initialTeams: Team[] = [
  { id: 'tm-1', name: 'Core Platform Engineering', leadId: 'u-3', leadName: 'Sophia Chen', departmentId: 'd-3', departmentName: 'Software Engineering', memberIds: ['u-3', 'u-6', 'u-10'], description: 'Frontend & UI Platform Specialists' },
  { id: 'tm-2', name: 'Cloud & Infrastructure Ops', leadId: 'u-4', leadName: 'David Rodriguez', departmentId: 'd-3', departmentName: 'Software Engineering', memberIds: ['u-4', 'u-10'], description: 'DevOps, SRE, and Distributed Systems' },
  { id: 'tm-3', name: 'Design Systems & UX', leadId: 'u-5', leadName: 'Elena Rostova', departmentId: 'd-4', departmentName: 'UI/UX Design', memberIds: ['u-5', 'u-9'], description: 'Enterprise UI/UX Design System Architects' }
];

export const initialTimeEntries: TimeEntry[] = [
  {
    id: 'te-1',
    userId: 'u-5',
    userName: 'Elena Rostova',
    projectId: 'p-1',
    projectName: 'CoreVista Admin Redesign v2.0',
    taskId: 't-1',
    taskTitle: 'Design Charcoal Dark & Light Mode Token Hierarchy',
    description: 'Created theme token variables in Tailwind and Figma design library.',
    date: '2026-02-23',
    hours: 7.5,
    billable: true,
    hourlyRate: 95,
    status: 'Approved'
  },
  {
    id: 'te-2',
    userId: 'u-3',
    userName: 'Sophia Chen',
    projectId: 'p-1',
    projectName: 'CoreVista Admin Redesign v2.0',
    taskId: 't-2',
    taskTitle: 'Implement Interactive Drag and Drop Kanban Board',
    description: 'Built DnD droppable columns and card reordering state handlers.',
    date: '2026-02-24',
    hours: 6.0,
    billable: true,
    hourlyRate: 125,
    status: 'Approved'
  },
  {
    id: 'te-3',
    userId: 'u-6',
    userName: 'James Harrison',
    projectId: 'p-1',
    projectName: 'CoreVista Admin Redesign v2.0',
    taskId: 't-3',
    taskTitle: 'Construct Recharts Analytics Dashboards & Report Modules',
    description: 'Wired Recharts responsive bar and area chart components.',
    date: '2026-02-24',
    hours: 8.0,
    billable: true,
    hourlyRate: 90,
    status: 'Pending'
  },
  {
    id: 'te-4',
    userId: 'u-4',
    userName: 'David Rodriguez',
    projectId: 'p-2',
    projectName: 'FinTech Banking Portal v3',
    taskId: 't-7',
    taskTitle: 'Multi-Currency Real-Time WebSocket Price Feed',
    description: 'Optimized WebSocket connection pool and ticker latency.',
    date: '2026-02-23',
    hours: 7.0,
    billable: true,
    hourlyRate: 120,
    status: 'Approved'
  }
];

export const initialExpenses: Expense[] = [
  {
    id: 'exp-1',
    projectId: 'p-1',
    projectName: 'CoreVista Admin Redesign v2.0',
    category: 'Software',
    description: 'Figma Enterprise Workspace Annual Renewal',
    amount: 2400,
    date: '2026-01-15',
    submittedBy: 'Elena Rostova',
    status: 'Approved',
    receiptUrl: '#'
  },
  {
    id: 'exp-2',
    projectId: 'p-2',
    projectName: 'FinTech Banking Portal v3',
    category: 'Other',
    description: 'Third-Party SEC Compliance Penetration Audit Fee',
    amount: 15500,
    date: '2026-01-20',
    submittedBy: 'Marcus Sterling',
    status: 'Approved',
    receiptUrl: '#'
  },
  {
    id: 'exp-3',
    projectId: 'p-3',
    projectName: 'Aetheria Telehealth & Patient EHR Sync',
    category: 'Software',
    description: 'Twilio WebRTC Video API Infrastructure Credits',
    amount: 3200,
    date: '2026-02-10',
    submittedBy: 'Amara Okafor',
    status: 'Approved',
    receiptUrl: '#'
  },
  {
    id: 'exp-4',
    projectId: 'p-5',
    projectName: 'Apex Infrastructure Automation & Kubernetes Mesh',
    category: 'Hardware',
    description: 'AWS Dedicated Cloud Sandbox Test Instances',
    amount: 4800,
    date: '2025-11-05',
    submittedBy: 'Vikram Patel',
    status: 'Approved',
    receiptUrl: '#'
  }
];

export const initialInvoices: Invoice[] = [
  {
    id: 'inv-101',
    invoiceNumber: 'INV-2026-001',
    clientId: 'c-3',
    clientName: 'Apex Cloud Systems',
    projectId: 'p-1',
    projectName: 'CoreVista Admin Redesign v2.0',
    issueDate: '2026-02-01',
    dueDate: '2026-03-01',
    items: [
      { id: 'ii-1', description: 'Phase 1 Frontend Architecture & Design Systems', quantity: 1, unitPrice: 45000, amount: 45000 },
      { id: 'ii-2', description: 'Interactive Component Library Development', quantity: 1, unitPrice: 35000, amount: 35000 }
    ],
    subtotal: 80000,
    tax: 6400,
    total: 86400,
    status: 'Paid',
    paymentDate: '2026-02-18'
  },
  {
    id: 'inv-102',
    invoiceNumber: 'INV-2026-002',
    clientId: 'c-1',
    clientName: 'Nexus Financial Corp',
    projectId: 'p-2',
    projectName: 'FinTech Banking Portal v3',
    issueDate: '2026-02-10',
    dueDate: '2026-03-10',
    items: [
      { id: 'ii-3', description: 'SEC Compliance Engine & WebSocket Price Streaming', quantity: 1, unitPrice: 65000, amount: 65000 }
    ],
    subtotal: 65000,
    tax: 5200,
    total: 70200,
    status: 'Pending'
  },
  {
    id: 'inv-103',
    invoiceNumber: 'INV-2026-003',
    clientId: 'c-2',
    clientName: 'Aetheria Health Systems',
    projectId: 'p-3',
    projectName: 'Aetheria Telehealth & Patient EHR Sync',
    issueDate: '2026-02-15',
    dueDate: '2026-03-15',
    items: [
      { id: 'ii-4', description: 'HIPAA Telehealth Setup & WebRTC Video Engine', quantity: 1, unitPrice: 40000, amount: 40000 }
    ],
    subtotal: 40000,
    tax: 3200,
    total: 43200,
    status: 'Pending'
  }
];

export const initialPayments: Payment[] = [
  {
    id: 'pay-1',
    invoiceId: 'inv-101',
    invoiceNumber: 'INV-2026-001',
    clientId: 'c-3',
    clientName: 'Apex Cloud Systems',
    amount: 86400,
    paymentMethod: 'Bank Transfer',
    date: '2026-02-18',
    status: 'Success',
    transactionReference: 'TXN-9982341-APEX'
  }
];

export const initialFiles: FileItem[] = [
  {
    id: 'f-1',
    name: 'CoreVista_Design_System_v2.fig',
    size: '14.8 MB',
    sizeBytes: 15518976,
    type: 'fig',
    projectId: 'p-1',
    projectName: 'CoreVista Admin Redesign v2.0',
    clientId: 'c-3',
    clientName: 'Apex Cloud Systems',
    uploadedBy: 'Elena Rostova',
    uploadedAt: '2026-01-20',
    folder: 'Design'
  },
  {
    id: 'f-2',
    name: 'SEC_Compliance_Security_Audit_Report.pdf',
    size: '3.4 MB',
    sizeBytes: 3565158,
    type: 'pdf',
    projectId: 'p-2',
    projectName: 'FinTech Banking Portal v3',
    clientId: 'c-1',
    clientName: 'Nexus Financial Corp',
    uploadedBy: 'Marcus Sterling',
    uploadedAt: '2026-01-28',
    folder: 'Documents'
  },
  {
    id: 'f-3',
    name: 'HIPAA_WebRTC_Encryption_Spec.docx',
    size: '1.8 MB',
    sizeBytes: 1887436,
    type: 'docx',
    projectId: 'p-3',
    projectName: 'Aetheria Telehealth & Patient EHR Sync',
    clientId: 'c-2',
    clientName: 'Aetheria Health Systems',
    uploadedBy: 'Sophia Chen',
    uploadedAt: '2026-02-08',
    folder: 'Documents'
  },
  {
    id: 'f-4',
    name: 'Kubernetes_IaC_Terraform_Configs.zip',
    size: '8.2 MB',
    sizeBytes: 8598323,
    type: 'zip',
    projectId: 'p-5',
    projectName: 'Apex Infrastructure Automation & Kubernetes Mesh',
    clientId: 'c-3',
    clientName: 'Apex Cloud Systems',
    uploadedBy: 'Vikram Patel',
    uploadedAt: '2025-11-12',
    folder: 'Source Code'
  }
];

export const initialChatChannels: ChatChannel[] = [
  { id: 'ch-1', name: 'general', type: 'channel', description: 'Company-wide updates, announcements, and discussions.', unreadCount: 2, members: ['u-1', 'u-2', 'u-3', 'u-4', 'u-5', 'u-6', 'u-7', 'u-8', 'u-9', 'u-10'] },
  { id: 'ch-2', name: 'prj-corevista-redesign', type: 'project', projectId: 'p-1', description: 'CoreVista Admin SPA engineering team room.', unreadCount: 5, members: ['u-1', 'u-2', 'u-3', 'u-5', 'u-6', 'u-8'] },
  { id: 'ch-3', name: 'prj-fintech-banking', type: 'project', projectId: 'p-2', description: 'Nexus Financial trading portal team room.', unreadCount: 0, members: ['u-2', 'u-4', 'u-6', 'u-10'] }
];

export const initialChatMessages: ChatMessage[] = [
  {
    id: 'cm-1',
    channelId: 'ch-1',
    senderId: 'u-1',
    senderName: 'Alexandra Vance',
    senderAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    content: 'Welcome team! CoreVista Admin v2.0 development is officially underway. Let us keep our momentum strong!',
    timestamp: '2026-02-24 09:15'
  },
  {
    id: 'cm-2',
    channelId: 'ch-2',
    senderId: 'u-3',
    senderName: 'Sophia Chen',
    senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    content: 'The drag-and-drop Kanban board is now live with column reordering and live task status persistence!',
    timestamp: '2026-02-24 11:40',
    reactions: [{ emoji: '🚀', count: 4, users: ['u-1', 'u-2', 'u-5', 'u-6'] }]
  },
  {
    id: 'cm-3',
    channelId: 'ch-2',
    senderId: 'u-5',
    senderName: 'Elena Rostova',
    senderAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
    content: 'Awesome work @Sophia! The grey charcoal dark palette (#181818 background) contrasts perfectly with the accent badges.',
    timestamp: '2026-02-24 11:45'
  }
];

export const initialNotifications: NotificationItem[] = [
  {
    id: 'notif-1',
    type: 'task_assigned',
    title: 'New Task Assigned',
    message: 'Marcus Sterling assigned you to "Implement Interactive Drag and Drop Kanban Board".',
    timestamp: '10 minutes ago',
    read: false,
    targetRoute: '/tasks/t-2',
    entityId: 't-2'
  },
  {
    id: 'notif-2',
    type: 'project_updated',
    title: 'Project Status Change',
    message: 'CoreVista Admin Redesign v2.0 reached 68% progress.',
    timestamp: '1 hour ago',
    read: false,
    targetRoute: '/projects/p-1',
    entityId: 'p-1'
  },
  {
    id: 'notif-3',
    type: 'payment_update',
    title: 'Payment Received',
    message: 'Apex Cloud Systems paid Invoice INV-2026-001 ($86,400.00).',
    timestamp: '3 hours ago',
    read: true,
    targetRoute: '/payments',
    entityId: 'pay-1'
  },
  {
    id: 'notif-4',
    type: 'new_message',
    title: 'New Discussion Message',
    message: 'Sophia Chen posted in #prj-corevista-redesign.',
    timestamp: 'Yesterday',
    read: true,
    targetRoute: '/chat',
    entityId: 'ch-2'
  }
];

export const initialCalendarEvents: CalendarEvent[] = [
  {
    id: 'ce-1',
    title: 'CoreVista v2 Sprint 4 Demo & Review',
    type: 'meeting',
    startDate: '2026-02-26T14:00:00',
    endDate: '2026-02-26T15:30:00',
    projectId: 'p-1',
    projectName: 'CoreVista Admin Redesign v2.0',
    assigneeId: 'u-2',
    description: 'Sprint demo with Apex Cloud executive stakeholders.'
  },
  {
    id: 'ce-2',
    title: 'Milestone 2 Deadline: Kanban & Core Modules',
    type: 'milestone',
    startDate: '2026-03-31T23:59:59',
    endDate: '2026-03-31T23:59:59',
    projectId: 'p-1',
    projectName: 'CoreVista Admin Redesign v2.0',
    description: 'Completion target for core Kanban and task details.'
  },
  {
    id: 'ce-3',
    title: 'FinTech Banking WebSockets Release Cut',
    type: 'deadline',
    startDate: '2026-03-15T18:00:00',
    endDate: '2026-03-15T18:00:00',
    projectId: 'p-2',
    projectName: 'FinTech Banking Portal v3',
    description: 'Final staging code freeze for trading WebSocket engine.'
  }
];

export const initialProjectTemplates: ProjectTemplate[] = [
  {
    id: 'tpl-1',
    name: 'Enterprise React SaaS Platform Template',
    category: 'Web Development',
    description: 'Complete baseline setup with React, Vite, Tailwind v4, Recharts, dark theme, Kanban board, and CI/CD pipelines.',
    estimatedDurationWeeks: 12,
    defaultTasksCount: 18,
    defaultMilestonesCount: 4,
    tags: ['React', 'TypeScript', 'Tailwind', 'SaaS']
  },
  {
    id: 'tpl-2',
    name: 'HIPAA Medical & Telehealth Web App',
    category: 'Healthcare',
    description: 'Pre-configured compliance template with WebRTC video room integration, encrypted notes, and EHR sync modules.',
    estimatedDurationWeeks: 16,
    defaultTasksCount: 24,
    defaultMilestonesCount: 5,
    tags: ['Healthcare', 'HIPAA', 'WebRTC']
  },
  {
    id: 'tpl-3',
    name: 'FinTech Security & Trading Portal',
    category: 'FinTech',
    description: 'High-frequency banking layout template with SEC audit trail logs, multi-currency charts, and 2FA auth schemas.',
    estimatedDurationWeeks: 20,
    defaultTasksCount: 30,
    defaultMilestonesCount: 6,
    tags: ['FinTech', 'Security', 'Banking']
  }
];

export const initialActivityLogs: ActivityLog[] = [
  {
    id: 'act-1',
    userId: 'u-3',
    userName: 'Sophia Chen',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    action: 'Updated Status',
    entityType: 'Task',
    entityId: 't-2',
    entityName: 'Implement Interactive Drag and Drop Kanban Board',
    timestamp: '2026-02-24 11:35',
    details: 'Moved status from To Do to In Progress'
  },
  {
    id: 'act-2',
    userId: 'u-1',
    userName: 'Alexandra Vance',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    action: 'Received Payment',
    entityType: 'Payment',
    entityId: 'pay-1',
    entityName: 'Invoice INV-2026-001',
    timestamp: '2026-02-18 16:20',
    details: 'Confirmed wire transfer of $86,400.00 from Apex Cloud Systems'
  },
  {
    id: 'act-3',
    userId: 'u-5',
    userName: 'Elena Rostova',
    userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
    action: 'Uploaded File',
    entityType: 'File',
    entityId: 'f-1',
    entityName: 'CoreVista_Design_System_v2.fig',
    timestamp: '2026-01-20 10:14',
    details: 'Uploaded 14.8 MB Figma design library'
  }
];

export const initialAuditLogs: AuditLog[] = [
  {
    id: 'aud-1',
    userId: 'u-1',
    userName: 'Alexandra Vance',
    userRole: 'Super Admin',
    action: 'Role Permission Modification',
    ipAddress: '192.168.1.45',
    timestamp: '2026-02-24 08:30',
    severity: 'Warning',
    module: 'RBAC',
    details: 'Granted Financial Manager export access to Marcus Sterling'
  },
  {
    id: 'aud-2',
    userId: 'u-2',
    userName: 'Marcus Sterling',
    userRole: 'Project Manager',
    action: 'Project Budget Update',
    ipAddress: '192.168.1.88',
    timestamp: '2026-02-22 14:15',
    severity: 'Info',
    module: 'Finances',
    details: 'Increased CoreVista Admin Redesign budget from $160,000 to $185,000'
  },
  {
    id: 'aud-3',
    userId: 'u-10',
    userName: 'Vikram Patel',
    userRole: 'Team Member',
    action: 'API Key Generation',
    ipAddress: '10.0.4.12',
    timestamp: '2026-02-19 11:05',
    severity: 'Info',
    module: 'Security',
    details: 'Generated read-only API key for Datadog telemetry pipeline'
  }
];

export const initialSettings: SystemSettings = {
  appName: 'CoreVista Admin',
  logoUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100',
  currency: 'USD ($)',
  timezone: 'America/New_York (EST)',
  dateFormat: 'YYYY-MM-DD',
  language: 'English (US)',
  darkModeDefault: true,
  emailNotificationsEnabled: true,
  taskDeadlineAlertsDays: 3,
  allowClientRegistration: false,
  twoFactorAuthRequired: true,
  projectStatuses: ['Planning', 'In Progress', 'On Hold', 'Review', 'Completed', 'Archived'],
  taskPriorities: ['Low', 'Medium', 'High', 'Urgent']
};

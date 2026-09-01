import {
  Customer,
  Lead,
  Contact,
  Company,
  Deal,
  Product,
  Category,
  InventoryItem,
  Warehouse,
  Supplier,
  Order,
  Invoice,
  Quotation,
  Transaction,
  IncomeItem,
  ExpenseItem,
  Budget,
  Campaign,
  Coupon,
  Employee,
  Department,
  LeaveRequest,
  AttendanceRecord,
  PayrollRecord,
  Ticket,
  TaskItem,
  CalendarEvent,
  ChatMessage,
  EmailMessage,
  FileItem,
  NotificationItem,
  ActivityLog,
  LoginLog,
} from '../types';

export const INITIAL_CUSTOMERS: Customer[] = [
  {
    id: 'cust_01',
    name: 'Acme Corporation',
    email: 'contact@acme.com',
    phone: '+1 (555) 234-5678',
    company: 'Acme Corp',
    status: 'Active',
    totalSpent: 48500,
    ordersCount: 32,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80',
    location: 'New York, USA',
    tags: ['Enterprise', 'VIP'],
    createdAt: '2023-02-14',
    lastOrderDate: '2026-08-20',
    notes: 'Key enterprise account requiring priority SLAs.',
  },
  {
    id: 'cust_02',
    name: 'Starlight Tech Solutions',
    email: 'hello@starlight.io',
    phone: '+1 (555) 876-5432',
    company: 'Starlight Inc',
    status: 'Active',
    totalSpent: 29400,
    ordersCount: 18,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    location: 'San Francisco, USA',
    tags: ['SaaS', 'High-Growth'],
    createdAt: '2023-04-10',
    lastOrderDate: '2026-08-18',
  },
  {
    id: 'cust_03',
    name: 'Apex Global Logistics',
    email: 'info@apexlogistics.com',
    phone: '+44 20 7946 0912',
    company: 'Apex Global',
    status: 'Lead',
    totalSpent: 0,
    ordersCount: 0,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    location: 'London, UK',
    tags: ['Logistics', 'Prospect'],
    createdAt: '2026-07-01',
    lastOrderDate: 'N/A',
  },
  {
    id: 'cust_04',
    name: 'Nexus Healthcare Labs',
    email: 'procurement@nexushealth.org',
    phone: '+1 (555) 432-1098',
    company: 'Nexus Health',
    status: 'Active',
    totalSpent: 92100,
    ordersCount: 45,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    location: 'Boston, USA',
    tags: ['Medical', 'Enterprise'],
    createdAt: '2022-11-05',
    lastOrderDate: '2026-08-23',
  },
  {
    id: 'cust_05',
    name: 'Vanguard Retail Ltd',
    email: 'support@vanguardretail.co.uk',
    phone: '+44 161 496 0123',
    company: 'Vanguard Retail',
    status: 'Inactive',
    totalSpent: 12500,
    ordersCount: 9,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    location: 'Manchester, UK',
    tags: ['Retail'],
    createdAt: '2024-01-20',
    lastOrderDate: '2025-11-14',
  },
  {
    id: 'cust_06',
    name: 'Cyberdyne Financial',
    email: 'accounts@cyberdyne.com',
    phone: '+1 (555) 987-6543',
    company: 'Cyberdyne',
    status: 'Active',
    totalSpent: 64200,
    ordersCount: 27,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    location: 'Chicago, USA',
    tags: ['Fintech', 'VIP'],
    createdAt: '2023-08-11',
    lastOrderDate: '2026-08-21',
  },
];

export const INITIAL_CONTACTS: Contact[] = [
  { id: 'cnt_1', name: 'John Miller', title: 'VP of Technology', email: 'j.miller@acme.com', phone: '+1 (555) 234-9900', company: 'Acme Corp', type: 'Primary' },
  { id: 'cnt_2', name: 'Samantha Reed', title: 'Chief Procurement Officer', email: 's.reed@starlight.io', phone: '+1 (555) 876-1122', company: 'Starlight Inc', type: 'Billing' },
  { id: 'cnt_3', name: 'Dr. Robert Vance', title: 'Head of Infrastructure', email: 'r.vance@nexushealth.org', phone: '+1 (555) 432-8877', company: 'Nexus Health', type: 'Technical' },
];

export const INITIAL_COMPANIES: Company[] = [
  { id: 'cmp_1', name: 'Acme Corp', industry: 'Industrial Manufacturing', size: '5,000+ Employees', location: 'New York, USA', website: 'https://acme.corp', dealsCount: 14, totalValue: 485000 },
  { id: 'cmp_2', name: 'Starlight Tech', industry: 'SaaS Software', size: '250-500 Employees', location: 'San Francisco, USA', website: 'https://starlight.io', dealsCount: 8, totalValue: 294000 },
  { id: 'cmp_3', name: 'Nexus Health', industry: 'Healthcare & Pharma', size: '1,000+ Employees', location: 'Boston, USA', website: 'https://nexushealth.org', dealsCount: 22, totalValue: 921000 },
];

export const INITIAL_DEALS: Deal[] = [
  { id: 'deal_1', title: 'Global Server Infrastructure Upgrade', company: 'Acme Corp', value: 120000, stage: 'Negotiation', probability: 85, closingDate: '2026-09-15', owner: 'David Vance' },
  { id: 'deal_2', title: 'CyberShield Pro 3-Year Enterprise License', company: 'Starlight Tech', value: 75000, stage: 'Proposal', probability: 60, closingDate: '2026-09-30', owner: 'Alexander Pierce' },
  { id: 'deal_3', title: 'Quantum Routers Multi-Site Deployment', company: 'Nexus Health', value: 240000, stage: 'Closed Won', probability: 100, closingDate: '2026-08-10', owner: 'David Vance' },
];

export const INITIAL_LEADS: Lead[] = [
  { id: 'lead_01', name: 'Sarah Connor', company: 'Skynet Research', email: 'sarah@skynet.io', phone: '+1 (555) 321-7890', source: 'Website Form', status: 'Qualified', value: 35000, assignedTo: 'Alexander Pierce', createdAt: '2026-08-10' },
  { id: 'lead_02', name: 'Marcus Wright', company: 'Resistance Bio', email: 'm.wright@resistance.org', phone: '+1 (555) 654-3210', source: 'LinkedIn Campaign', status: 'Proposal', value: 58000, assignedTo: 'Jane Doe', createdAt: '2026-08-12' },
  { id: 'lead_03', name: 'Elena Rostova', company: 'Volkov Industries', email: 'elena@volkov.de', phone: '+49 30 123456', source: 'Trade Show', status: 'New', value: 18000, assignedTo: 'Michael Scott', createdAt: '2026-08-22' },
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod_01',
    sku: 'PRD-ENT-001',
    name: 'Enterprise Cloud Server Rack X9',
    category: 'Hardware',
    price: 4999.00,
    cost: 2800.00,
    stock: 45,
    lowStockThreshold: 10,
    status: 'In Stock',
    supplier: 'TechCore Hardware Ltd',
    warehouse: 'Main Alpha Warehouse',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&auto=format&fit=crop&q=80',
    rating: 4.9,
    salesCount: 142,
    createdAt: '2023-05-10',
  },
  {
    id: 'prod_02',
    sku: 'PRD-SFT-002',
    name: 'CyberShield Pro Security Suite',
    category: 'Software',
    price: 1299.00,
    cost: 150.00,
    stock: 999,
    lowStockThreshold: 50,
    status: 'In Stock',
    supplier: 'Sentinel Systems',
    warehouse: 'Cloud Digital Vault',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=300&auto=format&fit=crop&q=80',
    rating: 4.8,
    salesCount: 890,
    createdAt: '2023-01-20',
  },
  {
    id: 'prod_03',
    sku: 'PRD-NET-003',
    name: 'Quantum Router 10Gbps Enterprise',
    category: 'Networking',
    price: 899.99,
    cost: 450.00,
    stock: 4,
    lowStockThreshold: 10,
    status: 'Low Stock',
    supplier: 'Cisco Partner Distribution',
    warehouse: 'Beta Logistics Center',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=300&auto=format&fit=crop&q=80',
    rating: 4.7,
    salesCount: 310,
    createdAt: '2024-02-15',
  },
  {
    id: 'prod_04',
    sku: 'PRD-ACC-004',
    name: 'Ergonomic Executive Desk Console',
    category: 'Office Equipment',
    price: 749.50,
    cost: 380.00,
    stock: 0,
    lowStockThreshold: 5,
    status: 'Out of Stock',
    supplier: 'Herman Miller Commercial',
    warehouse: 'Gamma Storage Depot',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300&auto=format&fit=crop&q=80',
    rating: 4.6,
    salesCount: 85,
    createdAt: '2024-06-01',
  },
];

export const INITIAL_CATEGORIES: Category[] = [
  { id: 'cat_1', name: 'Server Hardware', slug: 'hardware', productCount: 42, description: 'High-density rack servers, blades, and storage SAN arrays.', status: 'Active' },
  { id: 'cat_2', name: 'Security Software', slug: 'software', productCount: 85, description: 'Enterprise firewall, endpoint protection, and SOC monitoring.', status: 'Active' },
  { id: 'cat_3', name: 'Networking Equipment', slug: 'networking', productCount: 34, description: 'Core switches, 10Gbps routers, optical transceivers.', status: 'Active' },
  { id: 'cat_4', name: 'Office Ergonomics', slug: 'office', productCount: 18, description: 'Motorized standing desks, ergonomic executive chairs.', status: 'Active' },
];

export const INITIAL_INVENTORY: InventoryItem[] = [
  { id: 'inv_1', productId: 'prod_01', productName: 'Enterprise Cloud Server Rack X9', sku: 'PRD-ENT-001', location: 'Rack A1-A4', warehouse: 'Main Alpha Warehouse', quantityOnHand: 45, reserved: 5, available: 40, reorderLevel: 10, lastRestocked: '2026-08-15' },
  { id: 'inv_2', productId: 'prod_03', productName: 'Quantum Router 10Gbps Enterprise', sku: 'PRD-NET-003', location: 'Shelf B12', warehouse: 'Beta Logistics Center', quantityOnHand: 4, reserved: 1, available: 3, reorderLevel: 10, lastRestocked: '2026-07-28' },
  { id: 'inv_3', productId: 'prod_04', productName: 'Ergonomic Executive Desk Console', sku: 'PRD-ACC-004', location: 'Depot Bay 3', warehouse: 'Gamma Storage Depot', quantityOnHand: 0, reserved: 0, available: 0, reorderLevel: 5, lastRestocked: '2026-06-10' },
];

export const INITIAL_WAREHOUSES: Warehouse[] = [
  { id: 'wh_1', name: 'Main Alpha Warehouse', code: 'WH-ALPHA-01', location: 'Chicago, IL, USA', capacity: '85% Capacity (45,000 sq ft)', manager: 'Marcus Vance', status: 'Active' },
  { id: 'wh_2', name: 'Beta Logistics Center', code: 'WH-BETA-02', location: 'San Jose, CA, USA', capacity: '62% Capacity (30,000 sq ft)', manager: 'Sarah Jenkins', status: 'Active' },
  { id: 'wh_3', name: 'Gamma Storage Depot', code: 'WH-GAMMA-03', location: 'Rotterdam, Netherlands', capacity: '40% Capacity (25,000 sq ft)', manager: 'Lars Lindqvist', status: 'Maintenance' },
];

export const INITIAL_SUPPLIERS: Supplier[] = [
  { id: 'sup_1', name: 'TechCore Hardware Ltd', contactPerson: 'Henry Wu', email: 'sales@techcore.com', phone: '+1 (555) 998-1122', category: 'Hardware', rating: 4.9, status: 'Active' },
  { id: 'sup_2', name: 'Sentinel Systems', contactPerson: 'Angela Davis', email: 'partner@sentinel.io', phone: '+1 (555) 334-5566', category: 'Software', rating: 4.8, status: 'Active' },
  { id: 'sup_3', name: 'Cisco Partner Distribution', contactPerson: 'David Miller', email: 'orders@ciscodist.com', phone: '+1 (555) 445-6677', category: 'Networking', rating: 4.7, status: 'Active' },
];

export const INITIAL_QUOTATIONS: Quotation[] = [
  { id: 'quo_1', quoteNumber: 'QUO-2026-4401', customerName: 'Acme Corporation', date: '2026-08-15', expiryDate: '2026-09-15', total: 45000.00, status: 'Sent' },
  { id: 'quo_2', quoteNumber: 'QUO-2026-4402', customerName: 'Starlight Tech Solutions', date: '2026-08-18', expiryDate: '2026-09-18', total: 28500.00, status: 'Accepted' },
  { id: 'quo_3', quoteNumber: 'QUO-2026-4403', customerName: 'Cyberdyne Financial', date: '2026-08-01', expiryDate: '2026-08-30', total: 92000.00, status: 'Expired' },
];

export const INITIAL_TRANSACTIONS: Transaction[] = [
  { id: 'trx_1', reference: 'TRX-9901-ACME', type: 'Income', category: 'Sales Invoice', amount: 11297.00, date: '2026-08-23', status: 'Completed', description: 'Payment for Order #ORD-2026-8801', paymentMethod: 'Credit Card' },
  { id: 'trx_2', reference: 'TRX-9902-AWS', type: 'Expense', category: 'Infrastructure', amount: 4850.00, date: '2026-08-20', status: 'Completed', description: 'AWS Monthly Cloud Server Hosting', paymentMethod: 'Bank Transfer' },
  { id: 'trx_3', reference: 'TRX-9903-STAR', type: 'Income', category: 'Sales Invoice', amount: 2698.99, date: '2026-08-22', status: 'Completed', description: 'Payment for Order #ORD-2026-8802', paymentMethod: 'Stripe' },
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'ord_1001',
    orderNumber: 'ORD-2026-8801',
    customerId: 'cust_01',
    customerName: 'Acme Corporation',
    customerEmail: 'contact@acme.com',
    date: '2026-08-23',
    totalAmount: 11297.00,
    status: 'Delivered',
    paymentStatus: 'Paid',
    paymentMethod: 'Credit Card',
    shippingAddress: '742 Evergreen Terrace, New York, NY 10001',
    items: [
      { productId: 'prod_01', productName: 'Enterprise Cloud Server Rack X9', quantity: 2, unitPrice: 4999.00, total: 9998.00 },
      { productId: 'prod_02', productName: 'CyberShield Pro Security Suite', quantity: 1, unitPrice: 1299.00, total: 1299.00 },
    ],
  },
  {
    id: 'ord_1002',
    orderNumber: 'ORD-2026-8802',
    customerId: 'cust_02',
    customerName: 'Starlight Tech Solutions',
    customerEmail: 'hello@starlight.io',
    date: '2026-08-22',
    totalAmount: 2698.99,
    status: 'Processing',
    paymentStatus: 'Paid',
    paymentMethod: 'Stripe',
    shippingAddress: '100 Market St, San Francisco, CA 94105',
    items: [
      { productId: 'prod_03', productName: 'Quantum Router 10Gbps Enterprise', quantity: 3, unitPrice: 899.99, total: 2699.97 },
    ],
  },
  {
    id: 'ord_1003',
    orderNumber: 'ORD-2026-8803',
    customerId: 'cust_04',
    customerName: 'Nexus Healthcare Labs',
    customerEmail: 'procurement@nexushealth.org',
    date: '2026-08-21',
    totalAmount: 14997.00,
    status: 'Pending',
    paymentStatus: 'Unpaid',
    paymentMethod: 'Bank Transfer',
    shippingAddress: '500 Technology Square, Cambridge, MA 02139',
    items: [
      { productId: 'prod_01', productName: 'Enterprise Cloud Server Rack X9', quantity: 3, unitPrice: 4999.00, total: 14997.00 },
    ],
  },
];

export const INITIAL_INVOICES: Invoice[] = [
  {
    id: 'inv_501',
    invoiceNumber: 'INV-2026-0501',
    customerId: 'cust_01',
    customerName: 'Acme Corporation',
    issueDate: '2026-08-20',
    dueDate: '2026-09-20',
    amount: 11297.00,
    taxAmount: 903.76,
    totalAmount: 12200.76,
    status: 'Paid',
    items: [
      { productId: 'prod_01', productName: 'Enterprise Cloud Server Rack X9', quantity: 2, unitPrice: 4999.00, total: 9998.00 },
    ],
  },
  {
    id: 'inv_502',
    invoiceNumber: 'INV-2026-0502',
    customerId: 'cust_04',
    customerName: 'Nexus Healthcare Labs',
    issueDate: '2026-08-21',
    dueDate: '2026-09-21',
    amount: 14997.00,
    taxAmount: 1199.76,
    totalAmount: 16196.76,
    status: 'Unpaid',
    items: [
      { productId: 'prod_01', productName: 'Enterprise Cloud Server Rack X9', quantity: 3, unitPrice: 4999.00, total: 14997.00 },
    ],
  },
];

export const INITIAL_DEPARTMENTS: Department[] = [
  { id: 'dept_1', name: 'Executive Leadership', head: 'Alexander Pierce', employeeCount: 12, budget: 1200000 },
  { id: 'dept_2', name: 'Engineering & Technology', head: 'Eleanor Vance', employeeCount: 48, budget: 3500000 },
  { id: 'dept_3', name: 'Sales & Revenue', head: 'David Vance', employeeCount: 35, budget: 2400000 },
  { id: 'dept_4', name: 'Human Resources', head: 'Sophia Martinez', employeeCount: 14, budget: 950000 },
];

export const INITIAL_EMPLOYEES: Employee[] = [
  {
    id: 'emp_101',
    employeeCode: 'EMP-0101',
    name: 'Alexander Pierce',
    email: 'alexander.pierce@enterprise.com',
    phone: '+1 (555) 019-2834',
    department: 'Executive Leadership',
    position: 'Chief Executive Officer',
    salary: 220000,
    joinDate: '2020-01-15',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'emp_102',
    employeeCode: 'EMP-0102',
    name: 'Eleanor Vance',
    email: 'eleanor.vance@enterprise.com',
    phone: '+1 (555) 345-6789',
    department: 'Engineering',
    position: 'VP of Technology',
    salary: 175000,
    joinDate: '2021-03-01',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'emp_103',
    employeeCode: 'EMP-0103',
    name: 'David Vance',
    email: 'david.vance@enterprise.com',
    phone: '+1 (555) 789-0123',
    department: 'Sales & Revenue',
    position: 'Head of Global Sales',
    salary: 150000,
    joinDate: '2021-06-15',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'emp_104',
    employeeCode: 'EMP-0104',
    name: 'Sophia Martinez',
    email: 'sophia.m@enterprise.com',
    phone: '+1 (555) 901-2345',
    department: 'Human Resources',
    position: 'HR Director',
    salary: 130000,
    joinDate: '2022-02-10',
    status: 'On Leave',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
  },
];

export const INITIAL_LEAVE_REQUESTS: LeaveRequest[] = [
  { id: 'lv_01', employeeId: 'emp_104', employeeName: 'Sophia Martinez', leaveType: 'Maternity', startDate: '2026-08-15', endDate: '2026-11-15', days: 90, reason: 'Maternity leave after newborn birth.', status: 'Approved' },
  { id: 'lv_02', employeeId: 'emp_103', employeeName: 'David Vance', leaveType: 'Annual', startDate: '2026-09-01', endDate: '2026-09-07', days: 7, reason: 'Family vacation trip.', status: 'Pending' },
];

export const INITIAL_TICKETS: Ticket[] = [
  { id: 'tkt_701', ticketNumber: 'TKT-9901', subject: 'Server rack deployment timeout during load test', customerName: 'Acme Corporation', priority: 'Urgent', status: 'In Progress', assignedTo: 'Eleanor Vance', category: 'Infrastructure', createdAt: '2026-08-23 10:30', updatedAt: '2026-08-24 09:15', description: 'Cloud Server Rack X9 failed initial handshake check during deployment phase.' },
  { id: 'tkt_702', ticketNumber: 'TKT-9902', subject: 'Billing discrepancy on invoice INV-2026-0502', customerName: 'Nexus Healthcare Labs', priority: 'Medium', status: 'Open', assignedTo: 'Finance Support Team', category: 'Billing', createdAt: '2026-08-22 14:00', updatedAt: '2026-08-22 14:00', description: 'Customer requesting itemized tax recalculation for non-profit status exemption.' },
];

export const INITIAL_TASKS: TaskItem[] = [
  { id: 'tsk_01', title: 'Finalize Q3 Financial Audit Report', description: 'Compile all department expense receipts and verify variance reports.', priority: 'High', status: 'In Progress', dueDate: '2026-08-28', assignee: 'Alexander Pierce', tags: ['Finance', 'Audit'] },
  { id: 'tsk_02', title: 'Renew Enterprise Security Certification', description: 'Complete SOC2 type II audit documentation submit to auditor.', priority: 'High', status: 'Todo', dueDate: '2026-09-05', assignee: 'Eleanor Vance', tags: ['Security', 'Compliance'] },
  { id: 'tsk_03', title: 'Customer Onboarding Webinar for Starlight', description: 'Host technical setup session for Starlight Engineering team.', priority: 'Medium', status: 'Completed', dueDate: '2026-08-20', assignee: 'David Vance', tags: ['CRM', 'Onboarding'] },
];

export const INITIAL_CAMPAIGNS: Campaign[] = [
  { id: 'cmp_101', name: 'Q3 Enterprise Hardware Expo Campaign', type: 'PPC', status: 'Active', budget: 45000, spent: 28400, leadsGenerated: 145, roi: 3.4, startDate: '2026-07-01', endDate: '2026-09-30' },
  { id: 'cmp_102', name: 'CyberShield Pro Software Launch Email Sequence', type: 'Email', status: 'Completed', budget: 12000, spent: 11800, leadsGenerated: 320, roi: 5.2, startDate: '2026-06-01', endDate: '2026-08-01' },
];

export const INITIAL_COUPONS: Coupon[] = [
  { id: 'cpn_1', code: 'NEXUSPRO2026', discountType: 'Percentage', discountValue: 20, usageCount: 142, limit: 500, status: 'Active', expiryDate: '2026-12-31' },
  { id: 'cpn_2', code: 'ENTERPRISE500', discountType: 'Fixed', discountValue: 500, usageCount: 28, limit: 50, status: 'Active', expiryDate: '2026-10-15' },
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  { id: 'notif_01', title: 'New High-Value Order', message: 'Acme Corporation placed order #ORD-2026-8801 ($11,297.00)', type: 'order', timestamp: '10 minutes ago', read: false, link: '/sales/orders/ord_1001' },
  { id: 'notif_02', title: 'Low Stock Alert', message: 'Quantum Router 10Gbps is down to 4 items in stock.', type: 'stock', timestamp: '1 hour ago', read: false, link: '/products/inventory' },
  { id: 'notif_03', title: 'Urgent Support Ticket', message: 'Ticket #TKT-9901 requires technical escalation.', type: 'ticket', timestamp: '3 hours ago', read: true, link: '/support/tickets/tkt_701' },
];

export const INITIAL_ACTIVITY_LOGS: ActivityLog[] = [
  { id: 'act_001', user: 'Alexander Pierce', action: 'Created Invoice INV-2026-0502', module: 'Sales / Invoices', ipAddress: '192.168.1.104', timestamp: '2026-08-24 10:14:02', status: 'Success' },
  { id: 'act_002', user: 'Eleanor Vance', action: 'Updated Product PRD-NET-003 Stock Level', module: 'Products / Inventory', ipAddress: '192.168.1.112', timestamp: '2026-08-24 09:45:18', status: 'Success' },
  { id: 'act_003', user: 'System Admin', action: 'Automated DB Backup Completed', module: 'System / Infrastructure', ipAddress: '127.0.0.1', timestamp: '2026-08-24 04:00:00', status: 'Success' },
];

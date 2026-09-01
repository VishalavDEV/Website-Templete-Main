import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  Package,
  TrendingUp,
  DollarSign,
  Megaphone,
  UserCheck,
  Grid,
  Headphones,
  ShieldCheck,
  Settings,
  ClipboardList,
  Calendar,
  CheckSquare,
  Kanban,
  MessageSquare,
  Mail,
  Folder,
  FileText,
  CreditCard,
  Building,
  Target,
  Briefcase,
  Layers,
  Archive,
  BarChart3,
  Receipt,
  PieChart,
  Percent,
  Clock,
  Award,
  HelpCircle,
  Shield,
  Activity,
  AlertTriangle,
  Server,
  Lock,
  Globe,
  Bell,
} from 'lucide-react';

export interface NavSubItem {
  name: string;
  path: string;
}

export interface NavItem {
  name: string;
  path: string;
  icon: any;
  subItems?: NavSubItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
    subItems: [
      { name: 'Executive Overview', path: '/dashboard' },
      { name: 'Sales Overview', path: '/dashboard/sales' },
      { name: 'Revenue Insights', path: '/dashboard/revenue' },
      { name: 'System Analytics', path: '/dashboard/analytics' },
    ],
  },
  {
    name: 'CRM',
    path: '/crm/customers',
    icon: Users,
    subItems: [
      { name: 'Customers', path: '/crm/customers' },
      { name: 'Leads', path: '/crm/leads' },
      { name: 'Contacts', path: '/crm/contacts' },
      { name: 'Companies', path: '/crm/companies' },
      { name: 'Deals Pipeline', path: '/crm/deals' },
    ],
  },
  {
    name: 'Sales',
    path: '/sales/orders',
    icon: ShoppingBag,
    subItems: [
      { name: 'Orders', path: '/sales/orders' },
      { name: 'Quotations', path: '/sales/quotations' },
      { name: 'Invoices', path: '/sales/invoices' },
      { name: 'Payments', path: '/sales/payments' },
      { name: 'Transactions', path: '/sales/transactions' },
    ],
  },
  {
    name: 'Products',
    path: '/products',
    icon: Package,
    subItems: [
      { name: 'Product Catalog', path: '/products' },
      { name: 'Categories', path: '/products/categories' },
      { name: 'Inventory Stock', path: '/products/inventory' },
      { name: 'Warehouses', path: '/products/warehouses' },
      { name: 'Suppliers', path: '/products/suppliers' },
    ],
  },
  {
    name: 'Analytics',
    path: '/analytics/sales',
    icon: TrendingUp,
    subItems: [
      { name: 'Sales Analytics', path: '/analytics/sales' },
      { name: 'Customer Analytics', path: '/analytics/customers' },
      { name: 'Product Analytics', path: '/analytics/products' },
      { name: 'Custom Reports', path: '/analytics/reports' },
    ],
  },
  {
    name: 'Finance',
    path: '/finance/income',
    icon: DollarSign,
    subItems: [
      { name: 'Income Tracker', path: '/finance/income' },
      { name: 'Expenses', path: '/finance/expenses' },
      { name: 'Transactions', path: '/finance/transactions' },
      { name: 'Department Budgets', path: '/finance/budgets' },
      { name: 'Taxes & Compliance', path: '/finance/taxes' },
      { name: 'Cash Flow', path: '/finance/cash-flow' },
      { name: 'Profit & Loss', path: '/finance/profit-loss' },
    ],
  },
  {
    name: 'Marketing',
    path: '/marketing/campaigns',
    icon: Megaphone,
    subItems: [
      { name: 'Campaigns', path: '/marketing/campaigns' },
      { name: 'Email Marketing', path: '/marketing/email' },
      { name: 'Promotions', path: '/marketing/promotions' },
      { name: 'Coupons & Discounts', path: '/marketing/coupons' },
      { name: 'Customer Segments', path: '/marketing/segments' },
    ],
  },
  {
    name: 'HR',
    path: '/hr/employees',
    icon: UserCheck,
    subItems: [
      { name: 'Employees', path: '/hr/employees' },
      { name: 'Departments', path: '/hr/departments' },
      { name: 'Attendance', path: '/hr/attendance' },
      { name: 'Leave Requests', path: '/hr/leave' },
      { name: 'Payroll', path: '/hr/payroll' },
      { name: 'Performance', path: '/hr/performance' },
    ],
  },
  {
    name: 'Applications',
    path: '/apps/calendar',
    icon: Grid,
    subItems: [
      { name: 'Calendar', path: '/apps/calendar' },
      { name: 'Task Manager', path: '/apps/tasks' },
      { name: 'Kanban Board', path: '/apps/kanban' },
      { name: 'Live Chat', path: '/apps/chat' },
      { name: 'Email Client', path: '/apps/email' },
      { name: 'File Manager', path: '/apps/files' },
    ],
  },
  {
    name: 'Support',
    path: '/support/tickets',
    icon: Headphones,
    subItems: [
      { name: 'Support Tickets', path: '/support/tickets' },
      { name: 'Knowledge Base', path: '/support/knowledge-base' },
      { name: 'FAQs', path: '/support/faqs' },
      { name: 'SLA Dashboard', path: '/support/sla' },
    ],
  },
  {
    name: 'User Management',
    path: '/users',
    icon: ShieldCheck,
    subItems: [
      { name: 'User Accounts', path: '/users' },
      { name: 'Roles & Access', path: '/users/roles' },
      { name: 'Permissions Matrix', path: '/users/permissions' },
      { name: 'Teams & Groups', path: '/users/teams' },
    ],
  },
  {
    name: 'Settings',
    path: '/settings/general',
    icon: Settings,
    subItems: [
      { name: 'General Settings', path: '/settings/general' },
      { name: 'Security & Password', path: '/settings/security' },
      { name: 'Notifications', path: '/settings/notifications' },
      { name: 'Payment Gateways', path: '/settings/payment' },
      { name: 'Localization', path: '/settings/localization' },
      { name: 'API Keys', path: '/settings/api' },
    ],
  },
  {
    name: 'Audit System',
    path: '/audit/activity',
    icon: ClipboardList,
    subItems: [
      { name: 'Activity Logs', path: '/audit/activity' },
      { name: 'Login Logs', path: '/audit/login' },
      { name: 'Error Logs', path: '/audit/errors' },
      { name: 'System Health', path: '/audit/system-health' },
    ],
  },
];

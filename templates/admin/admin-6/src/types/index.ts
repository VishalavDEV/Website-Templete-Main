export type ThemeMode = 'light' | 'dark';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'Super Admin' | 'Admin' | 'Manager' | 'Editor' | 'Viewer';
  department: string;
  phone: string;
  status: 'Active' | 'Inactive';
  lastActive: string;
  createdAt: string;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  userCount: number;
  permissions: string[];
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'Active' | 'Lead' | 'Inactive' | 'Churned';
  totalSpent: number;
  ordersCount: number;
  avatar: string;
  location: string;
  tags: string[];
  createdAt: string;
  lastOrderDate: string;
  notes?: string;
}

export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  source: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Proposal' | 'Won' | 'Lost';
  value: number;
  assignedTo: string;
  createdAt: string;
}

export interface Contact {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  company: string;
  type: 'Primary' | 'Billing' | 'Technical';
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  size: string;
  location: string;
  website: string;
  dealsCount: number;
  totalValue: number;
}

export interface Deal {
  id: string;
  title: string;
  company: string;
  value: number;
  stage: 'Discovery' | 'Proposal' | 'Negotiation' | 'Closed Won' | 'Closed Lost';
  probability: number;
  closingDate: string;
  owner: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  price: number;
  cost: number;
  stock: number;
  lowStockThreshold: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  supplier: string;
  warehouse: string;
  image: string;
  rating: number;
  salesCount: number;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  productCount: number;
  description: string;
  status: 'Active' | 'Disabled';
}

export interface InventoryItem {
  id: string;
  productId: string;
  productName: string;
  sku: string;
  location: string;
  warehouse: string;
  quantityOnHand: number;
  reserved: number;
  available: number;
  reorderLevel: number;
  lastRestocked: string;
}

export interface Warehouse {
  id: string;
  name: string;
  code: string;
  location: string;
  capacity: string;
  manager: string;
  status: 'Active' | 'Maintenance';
}

export interface Supplier {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  category: string;
  rating: number;
  status: 'Active' | 'Pending';
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  date: string;
  totalAmount: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  paymentStatus: 'Paid' | 'Unpaid' | 'Refunded' | 'Partially Paid';
  paymentMethod: 'Credit Card' | 'PayPal' | 'Bank Transfer' | 'Stripe';
  items: OrderItem[];
  shippingAddress: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  customerId: string;
  customerName: string;
  issueDate: string;
  dueDate: string;
  amount: number;
  taxAmount: number;
  totalAmount: number;
  status: 'Paid' | 'Unpaid' | 'Overdue' | 'Draft';
  items: OrderItem[];
}

export interface Quotation {
  id: string;
  quoteNumber: string;
  customerName: string;
  date: string;
  expiryDate: string;
  total: number;
  status: 'Sent' | 'Accepted' | 'Rejected' | 'Expired';
}

export interface Transaction {
  id: string;
  reference: string;
  type: 'Income' | 'Expense';
  category: string;
  amount: number;
  date: string;
  status: 'Completed' | 'Pending' | 'Failed';
  description: string;
  paymentMethod: string;
}

export interface FinancialMetric {
  title: string;
  amount: number;
  changePercent: number;
  trend: 'up' | 'down';
}

export interface IncomeItem {
  id: string;
  source: string;
  category: string;
  amount: number;
  date: string;
  status: 'Received' | 'Pending';
  payer: string;
}

export interface ExpenseItem {
  id: string;
  title: string;
  category: string;
  amount: number;
  date: string;
  vendor: string;
  approvedBy: string;
  status: 'Approved' | 'Pending' | 'Rejected';
}

export interface Budget {
  id: string;
  department: string;
  allocated: number;
  spent: number;
  remaining: number;
  fiscalYear: string;
}

export interface Campaign {
  id: string;
  name: string;
  type: 'Email' | 'Social' | 'PPC' | 'Content' | 'Event';
  status: 'Draft' | 'Scheduled' | 'Active' | 'Completed';
  budget: number;
  spent: number;
  leadsGenerated: number;
  roi: number;
  startDate: string;
  endDate: string;
}

export interface Coupon {
  id: string;
  code: string;
  discountType: 'Percentage' | 'Fixed';
  discountValue: number;
  usageCount: number;
  limit: number;
  status: 'Active' | 'Expired' | 'Disabled';
  expiryDate: string;
}

export interface Employee {
  id: string;
  employeeCode: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  salary: number;
  joinDate: string;
  status: 'Active' | 'On Leave' | 'Terminated';
  avatar: string;
}

export interface Department {
  id: string;
  name: string;
  head: string;
  employeeCount: number;
  budget: number;
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  leaveType: 'Annual' | 'Sick' | 'Maternity' | 'Casual';
  startDate: string;
  endDate: string;
  days: number;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export interface AttendanceRecord {
  id: string;
  employeeName: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: 'Present' | 'Late' | 'Absent' | 'Half Day';
}

export interface PayrollRecord {
  id: string;
  employeeName: string;
  month: string;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netPay: number;
  status: 'Paid' | 'Processing';
}

export interface Ticket {
  id: string;
  ticketNumber: string;
  subject: string;
  customerName: string;
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  status: 'Open' | 'In Progress' | 'Waiting' | 'Resolved' | 'Closed';
  assignedTo: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  description: string;
}

export interface TaskItem {
  id: string;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Todo' | 'In Progress' | 'Review' | 'Completed';
  dueDate: string;
  assignee: string;
  tags: string[];
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'Meeting' | 'Call' | 'Task' | 'Reminder';
  location: string;
}

export interface ChatMessage {
  id: string;
  sender: string;
  avatar: string;
  content: string;
  timestamp: string;
  isMe: boolean;
}

export interface EmailMessage {
  id: string;
  sender: string;
  senderEmail: string;
  subject: string;
  preview: string;
  date: string;
  unread: boolean;
  starred: boolean;
  folder: 'Inbox' | 'Sent' | 'Drafts' | 'Trash' | 'Spam';
}

export interface FileItem {
  id: string;
  name: string;
  size: string;
  type: 'PDF' | 'Image' | 'Spreadsheet' | 'Document' | 'Archive';
  updatedAt: string;
  owner: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: 'order' | 'payment' | 'stock' | 'customer' | 'ticket' | 'system' | 'leave';
  timestamp: string;
  read: boolean;
  link?: string;
}

export interface ActivityLog {
  id: string;
  user: string;
  action: string;
  module: string;
  ipAddress: string;
  timestamp: string;
  status: 'Success' | 'Warning' | 'Failure';
}

export interface LoginLog {
  id: string;
  user: string;
  email: string;
  ipAddress: string;
  device: string;
  location: string;
  timestamp: string;
  status: 'Success' | 'Failed';
}

export interface SystemHealthMetric {
  name: string;
  status: 'Optimal' | 'Degraded' | 'Critical';
  value: string;
  history: number[];
}

import api from './api';

// --- TYPINGS ---
export interface User {
  id?: number;
  username: string;
  email: string;
  phone?: string;
  role: string;
  status: string;
  profileImage?: string;
  registrationDate?: string;
  password?: string;
}

export interface Category {
  id: number;
  name: string;
  description?: string;
}

export interface Product {
  id?: number;
  name: string;
  description?: string;
  price: number;
  discount: number;
  stock: number;
  status: string;
  imageUrl?: string;
  createdDate?: string;
  category: Category;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone?: string;
  status: string;
  totalOrders: number;
  totalSpending: number;
  lastOrderDate?: string;
  profileImage?: string;
  createdAt?: string;
}

export interface OrderItem {
  id: number;
  product: Product;
  quantity: number;
  price: number;
}

export interface Order {
  id: number;
  customer: Customer;
  orderDate: string;
  amount: number;
  paymentStatus: string;
  orderStatus: string;
  shippingAddress: string;
  paymentMethod: string;
  trackingNumber?: string;
  orderItems: OrderItem[];
}

export interface Notification {
  id: number;
  message: string;
  type: 'SYSTEM' | 'ORDER' | 'USER' | 'PAYMENT' | 'SECURITY';
  isRead: boolean;
  createdAt: string;
}

export interface MessageParticipant {
  id: number;
  username: string;
  email: string;
  role: string;
  profileImage?: string;
}

export interface Conversation {
  conversationId: string;
  otherUser: MessageParticipant;
  lastMessageText: string;
  lastMessageTimestamp: string;
  unread: boolean;
}

export interface Message {
  id: number;
  sender: User;
  receiver: User;
  messageText: string;
  timestamp: string;
  isRead: boolean;
  conversationId: string;
}

export interface AdminSetting {
  id?: number;
  websiteName: string;
  websiteLogo?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
}

// --- SERVICES ---

export const AuthService = {
  login: async (loginData: any) => {
    const res = await api.post('/auth/login', loginData);
    return res.data;
  },
  forgotPassword: async (email: string) => {
    const res = await api.post('/auth/forgot-password', { email });
    return res.data;
  },
  resetPassword: async (resetData: any) => {
    const res = await api.post('/auth/reset-password', resetData);
    return res.data;
  },
};

export const UserService = {
  getAll: async () => {
    const res = await api.get<User[]>('/users');
    return res.data;
  },
  getById: async (id: number) => {
    const res = await api.get<User>(`/users/${id}`);
    return res.data;
  },
  create: async (user: User) => {
    const res = await api.post<User>('/users', user);
    return res.data;
  },
  update: async (id: number, user: User) => {
    const res = await api.put<User>(`/users/${id}`, user);
    return res.data;
  },
  delete: async (id: number) => {
    const res = await api.delete(`/users/${id}`);
    return res.data;
  },
  updateStatus: async (id: number, status: string) => {
    const res = await api.patch<User>(`/users/${id}/status`, { status });
    return res.data;
  },
  updateRole: async (id: number, role: string) => {
    const res = await api.patch<User>(`/users/${id}/role`, { role });
    return res.data;
  },
};

export const ProductService = {
  getAll: async (params: any) => {
    const res = await api.get('/products', { params });
    return res.data; // paginated
  },
  getAllNoPage: async () => {
    const res = await api.get<Product[]>('/products/all');
    return res.data;
  },
  getById: async (id: number) => {
    const res = await api.get<Product>(`/products/${id}`);
    return res.data;
  },
  create: async (productData: any) => {
    const res = await api.post<Product>('/products', productData);
    return res.data;
  },
  update: async (id: number, productData: any) => {
    const res = await api.put<Product>(`/products/${id}`, productData);
    return res.data;
  },
  delete: async (id: number) => {
    const res = await api.delete(`/products/${id}`);
    return res.data;
  },
  getCategories: async () => {
    const res = await api.get<Category[]>('/products/categories');
    return res.data;
  },
};

export const OrderService = {
  getAll: async (params: any) => {
    const res = await api.get('/orders', { params });
    return res.data; // paginated
  },
  getById: async (id: number) => {
    const res = await api.get<Order>(`/orders/${id}`);
    return res.data;
  },
  updateStatus: async (id: number, status: string) => {
    const res = await api.put<Order>(`/orders/${id}/status`, { status });
    return res.data;
  },
  updateTracking: async (id: number, trackingNumber: string) => {
    const res = await api.put<Order>(`/orders/${id}/tracking`, { trackingNumber });
    return res.data;
  },
};

export const CustomerService = {
  getAll: async (params: any) => {
    const res = await api.get('/customers', { params });
    return res.data; // paginated
  },
  getById: async (id: number) => {
    const res = await api.get<Customer>(`/customers/${id}`);
    return res.data;
  },
  getOrders: async (id: number) => {
    const res = await api.get<Order[]>(`/customers/${id}/orders`);
    return res.data;
  },
};

export const AnalyticsService = {
  getSummary: async () => {
    const res = await api.get('/analytics/summary');
    return res.data;
  },
  getRevenueChart: async (timeframe: string) => {
    const res = await api.get('/analytics/revenue-chart', { params: { timeframe } });
    return res.data;
  },
  getSalesChart: async () => {
    const res = await api.get('/analytics/sales-chart');
    return res.data;
  },
  getCustomerGrowth: async () => {
    const res = await api.get('/analytics/customer-growth');
    return res.data;
  },
  getCategoryDistribution: async () => {
    const res = await api.get('/analytics/category-distribution');
    return res.data;
  },
};

export const ReportService = {
  generate: async (params: any) => {
    const res = await api.get('/reports/generate', { params });
    return res.data;
  },
  exportCsv: async (type: string) => {
    const response = await api.get('/reports/export/csv', {
      params: { type },
      responseType: 'blob',
    });
    
    // Create download link in browser
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${type}_report_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  },
};

export const NotificationService = {
  getAll: async () => {
    const res = await api.get<Notification[]>('/notifications');
    return res.data;
  },
  getUnreadCount: async () => {
    const res = await api.get<{ count: number }>('/notifications/unread-count');
    return res.data;
  },
  markAsRead: async (id: number) => {
    const res = await api.put<Notification>(`/notifications/${id}/read`);
    return res.data;
  },
  markAllAsRead: async () => {
    const res = await api.put('/notifications/read-all');
    return res.data;
  },
  deleteNotif: async (id: number) => {
    const res = await api.delete(`/notifications/${id}`);
    return res.data;
  },
};

export const MessageService = {
  getConversations: async () => {
    const res = await api.get<Conversation[]>('/messages/conversations');
    return res.data;
  },
  getMessages: async (conversationId: string) => {
    const res = await api.get<Message[]>(`/messages/conversation/${conversationId}`);
    return res.data;
  },
  sendMessage: async (receiverUsername: string, messageText: string) => {
    const res = await api.post<Message>('/messages', { receiverUsername, messageText });
    return res.data;
  },
};

export const SettingService = {
  get: async () => {
    const res = await api.get<AdminSetting>('/settings');
    return res.data;
  },
  update: async (settings: AdminSetting) => {
    const res = await api.put<AdminSetting>('/settings', settings);
    return res.data;
  },
};

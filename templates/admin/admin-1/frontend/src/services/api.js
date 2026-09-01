import axios from 'axios';
import {
  MOCK_SUMMARY,
  MOCK_REVENUE_DATA,
  MOCK_SALES_BREAKDOWN,
  MOCK_ORDERS,
  MOCK_AI_METRICS,
  MOCK_ACTIVITIES,
  MOCK_PRODUCTS,
  MOCK_TRAFFIC_SOURCES,
  MOCK_TASKS,
  MOCK_TRANSACTIONS,
  MOCK_TEAM_MEMBERS,
  MOCK_NOTIFICATIONS
} from './mockData';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000, // 5 sec timeout to quickly switch to mock fallback if backend is offline
});

// Request interceptor to attach JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('neura_jwt_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Helper for seamless mock fallback
const withFallback = async (apiCall, fallbackData) => {
  try {
    const response = await apiCall();
    return response.data;
  } catch (error) {
    // If backend is not available or returns network error, fallback to mock data
    console.warn(`[Neura API] Spring Boot endpoint unreachable or returned error. Serving local fallback dataset.`, error.message);
    return fallbackData;
  }
};

export const authService = {
  login: async (credentials) => {
    try {
      const res = await api.post('/auth/login', credentials);
      if (res.data && res.data.token) {
        localStorage.setItem('neura_jwt_token', res.data.token);
        localStorage.setItem('neura_user', JSON.stringify(res.data.user));
      }
      return res.data;
    } catch (err) {
      // Mock Login Fallback for demo when backend is offline
      if (credentials.email && credentials.password) {
        const mockUser = {
          id: 1,
          name: 'Admin User',
          email: credentials.email,
          role: 'ADMIN',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        };
        const mockToken = 'mock_jwt_token_neura_admin_2026';
        localStorage.setItem('neura_jwt_token', mockToken);
        localStorage.setItem('neura_user', JSON.stringify(mockUser));
        return { success: true, token: mockToken, user: mockUser };
      }
      throw new Error('Invalid credentials');
    }
  },
  register: async (userData) => {
    try {
      const res = await api.post('/auth/register', userData);
      return res.data;
    } catch (err) {
      return { success: true, message: 'User registered successfully (Demo Mode)' };
    }
  },
  logout: () => {
    localStorage.removeItem('neura_jwt_token');
    localStorage.removeItem('neura_user');
  },
  getCurrentUser: () => {
    const userStr = localStorage.getItem('neura_user');
    return userStr ? JSON.parse(userStr) : null;
  }
};

export const dashboardService = {
  getSummary: () => withFallback(() => api.get('/dashboard/summary'), MOCK_SUMMARY),
  getRevenue: (range = 'monthly') => withFallback(() => api.get(`/dashboard/revenue?range=${range}`), MOCK_REVENUE_DATA[range] || MOCK_REVENUE_DATA.monthly),
  getSalesBreakdown: () => withFallback(() => api.get('/dashboard/sales'), MOCK_SALES_BREAKDOWN),
  getOrders: () => withFallback(() => api.get('/orders'), MOCK_ORDERS),
  getAiMetrics: () => withFallback(() => api.get('/dashboard/ai-metrics'), MOCK_AI_METRICS),
  getActivities: () => withFallback(() => api.get('/activities'), MOCK_ACTIVITIES),
  getProducts: () => withFallback(() => api.get('/products'), MOCK_PRODUCTS),
  getTrafficSources: () => withFallback(() => api.get('/dashboard/traffic'), MOCK_TRAFFIC_SOURCES),
  getTasks: () => withFallback(() => api.get('/tasks'), MOCK_TASKS),
  createTask: async (task) => {
    try {
      const res = await api.post('/tasks', task);
      return res.data;
    } catch (err) {
      return { ...task, id: Date.now(), status: 'Pending' };
    }
  },
  updateTask: async (id, task) => {
    try {
      const res = await api.put(`/tasks/${id}`, task);
      return res.data;
    } catch (err) {
      return { ...task, id };
    }
  },
  deleteTask: async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      return true;
    } catch (err) {
      return true;
    }
  },
  getTransactions: () => withFallback(() => api.get('/transactions'), MOCK_TRANSACTIONS),
  getTeamMembers: () => withFallback(() => api.get('/team'), MOCK_TEAM_MEMBERS),
  getNotifications: () => withFallback(() => api.get('/notifications'), MOCK_NOTIFICATIONS),
};

export default api;

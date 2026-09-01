import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

// Main Dashboards
import Dashboard from './pages/Dashboard';
import SalesDashboard from './pages/dashboards/SalesDashboard';
import AnalyticsDashboard from './pages/dashboards/AnalyticsDashboard';
import CrmDashboard from './pages/dashboards/CrmDashboard';
import MarketingDashboard from './pages/dashboards/MarketingDashboard';
import ProjectsDashboard from './pages/dashboards/ProjectsDashboard';
import FinanceDashboard from './pages/dashboards/FinanceDashboard';

// Auth Pages
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import LockScreen from './pages/auth/LockScreen';

// Analytics Suite
import Analytics from './pages/Analytics';
import TrafficAnalytics from './pages/analytics/TrafficAnalytics';
import VisitorAnalytics from './pages/analytics/VisitorAnalytics';
import BehaviorAnalytics from './pages/analytics/BehaviorAnalytics';
import ConversionAnalytics from './pages/analytics/ConversionAnalytics';
import GeographicAnalytics from './pages/analytics/GeographicAnalytics';
import DeviceAnalytics from './pages/analytics/DeviceAnalytics';
import RealtimeAnalytics from './pages/analytics/RealtimeAnalytics';

// Sales & CRM
import Orders from './pages/Orders';
import Products from './pages/Products';
import Customers from './pages/sales/Customers';
import Leads from './pages/crm/Leads';
import Deals from './pages/crm/Deals';

// AI Intelligence
import AiModels from './pages/AiModels';
import AiDeployments from './pages/ai/AiDeployments';
import GpuMonitoring from './pages/ai/GpuMonitoring';

// Projects & Tasks
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';

// Finance
import Transactions from './pages/Transactions';
import Invoices from './pages/finance/Invoices';

// Applications
import ChatApp from './pages/apps/ChatApp';
import EmailApp from './pages/apps/EmailApp';
import CalendarApp from './pages/apps/CalendarApp';
import KanbanApp from './pages/apps/KanbanApp';
import FileManagerApp from './pages/apps/FileManagerApp';
import SupportTicketsApp from './pages/apps/SupportTicketsApp';

// Users & System
import Profile from './pages/Profile';
import Users from './pages/Users';
import RolesPermissions from './pages/users/RolesPermissions';
import Activity from './pages/Activity';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Security from './pages/Security';
import Integrations from './pages/Integrations';

// Utility Pages
import PricingPage from './pages/utility/PricingPage';
import FaqPage from './pages/utility/FaqPage';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return null;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <HashRouter>
          <Routes>
            {/* Public Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/lock-screen" element={<LockScreen />} />

            {/* Dashboards Suite */}
            <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/dashboard/sales" element={<ProtectedRoute><SalesDashboard /></ProtectedRoute>} />
            <Route path="/dashboard/analytics" element={<ProtectedRoute><AnalyticsDashboard /></ProtectedRoute>} />
            <Route path="/dashboard/crm" element={<ProtectedRoute><CrmDashboard /></ProtectedRoute>} />
            <Route path="/dashboard/marketing" element={<ProtectedRoute><MarketingDashboard /></ProtectedRoute>} />
            <Route path="/dashboard/projects" element={<ProtectedRoute><ProjectsDashboard /></ProtectedRoute>} />
            <Route path="/dashboard/finance" element={<ProtectedRoute><FinanceDashboard /></ProtectedRoute>} />

            {/* Analytics Suite */}
            <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
            <Route path="/analytics/traffic" element={<ProtectedRoute><TrafficAnalytics /></ProtectedRoute>} />
            <Route path="/analytics/visitors" element={<ProtectedRoute><VisitorAnalytics /></ProtectedRoute>} />
            <Route path="/analytics/behavior" element={<ProtectedRoute><BehaviorAnalytics /></ProtectedRoute>} />
            <Route path="/analytics/conversions" element={<ProtectedRoute><ConversionAnalytics /></ProtectedRoute>} />
            <Route path="/analytics/geographic" element={<ProtectedRoute><GeographicAnalytics /></ProtectedRoute>} />
            <Route path="/analytics/devices" element={<ProtectedRoute><DeviceAnalytics /></ProtectedRoute>} />
            <Route path="/analytics/realtime" element={<ProtectedRoute><RealtimeAnalytics /></ProtectedRoute>} />

            {/* Sales & CRM */}
            <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
            <Route path="/customers" element={<ProtectedRoute><Customers /></ProtectedRoute>} />
            <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
            <Route path="/crm/leads" element={<ProtectedRoute><Leads /></ProtectedRoute>} />
            <Route path="/crm/deals" element={<ProtectedRoute><Deals /></ProtectedRoute>} />

            {/* AI Intelligence */}
            <Route path="/ai-models" element={<ProtectedRoute><AiModels /></ProtectedRoute>} />
            <Route path="/ai-models/deployments" element={<ProtectedRoute><AiDeployments /></ProtectedRoute>} />
            <Route path="/ai-models/gpu" element={<ProtectedRoute><GpuMonitoring /></ProtectedRoute>} />

            {/* Finance & Projects */}
            <Route path="/transactions" element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
            <Route path="/finance/invoices" element={<ProtectedRoute><Invoices /></ProtectedRoute>} />
            <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
            <Route path="/tasks" element={<ProtectedRoute><Tasks /></ProtectedRoute>} />

            {/* Applications Suite */}
            <Route path="/apps/chat" element={<ProtectedRoute><ChatApp /></ProtectedRoute>} />
            <Route path="/apps/email" element={<ProtectedRoute><EmailApp /></ProtectedRoute>} />
            <Route path="/apps/calendar" element={<ProtectedRoute><CalendarApp /></ProtectedRoute>} />
            <Route path="/apps/kanban" element={<ProtectedRoute><KanbanApp /></ProtectedRoute>} />
            <Route path="/apps/files" element={<ProtectedRoute><FileManagerApp /></ProtectedRoute>} />
            <Route path="/apps/tickets" element={<ProtectedRoute><SupportTicketsApp /></ProtectedRoute>} />

            {/* Users & Access Control */}
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
            <Route path="/users/roles" element={<ProtectedRoute><RolesPermissions /></ProtectedRoute>} />
            <Route path="/team" element={<ProtectedRoute><Users /></ProtectedRoute>} />

            {/* System & Utility */}
            <Route path="/activity" element={<ProtectedRoute><Activity /></ProtectedRoute>} />
            <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
            <Route path="/security" element={<ProtectedRoute><Security /></ProtectedRoute>} />
            <Route path="/integrations" element={<ProtectedRoute><Integrations /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            <Route path="/utility/pricing" element={<ProtectedRoute><PricingPage /></ProtectedRoute>} />
            <Route path="/utility/faq" element={<ProtectedRoute><FaqPage /></ProtectedRoute>} />

            {/* Fallback Redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </HashRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

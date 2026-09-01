import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layout & Protection
import MainLayout from './components/common/MainLayout';

// Auth Pages
import LoginPage from './pages/login/LoginPage';
import ForgotPasswordPage from './pages/login/ForgotPasswordPage';
import ResetPasswordPage from './pages/login/ResetPasswordPage';

// Admin Dashboard Content Pages
import DashboardHome from './pages/dashboard/DashboardHome';
import UserManagementPage from './pages/users/UserManagementPage';
import ProductManagementPage from './pages/products/ProductManagementPage';
import OrderManagementPage from './pages/orders/OrderManagementPage';
import OrderDetailsPage from './pages/orders/OrderDetailsPage';
import CustomerManagementPage from './pages/customers/CustomerManagementPage';
import CustomerProfilePage from './pages/customers/CustomerProfilePage';
import ReportsPage from './pages/reports/ReportsPage';
import NotificationCenter from './pages/notifications/NotificationCenter';
import ChatAppPage from './pages/messages/ChatAppPage';
import SettingsPage from './pages/settings/SettingsPage';
import AdminProfilePage from './pages/profile/AdminProfilePage';

// Protected Route Wrapper
const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App: React.FC = () => {
  return (
    <Routes>
      {/* Public Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />

      {/* Protected Dashboard Layout Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="users" element={<UserManagementPage />} />
        <Route path="products" element={<ProductManagementPage />} />
        <Route path="orders" element={<OrderManagementPage />} />
        <Route path="orders/:id" element={<OrderDetailsPage />} />
        <Route path="customers" element={<CustomerManagementPage />} />
        <Route path="customers/:id" element={<CustomerProfilePage />} />
        <Route path="analytics" element={<DashboardHome />} /> {/* Renders full charts suite */}
        <Route path="reports" element={<ReportsPage />} />
        <Route path="notifications" element={<NotificationCenter />} />
        <Route path="messages" element={<ChatAppPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="profile" element={<AdminProfilePage />} />
      </Route>

      {/* Wildcard Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;

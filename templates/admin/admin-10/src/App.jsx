import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import Sidebar from './components/common/Sidebar';
import Navbar from './components/common/Navbar';
import ToastContainer from './components/common/ToastContainer';

import DashboardPage from './pages/DashboardPage';
import AnalyticsPage from './pages/AnalyticsPage';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrdersPage';
import MessagesPage from './pages/MessagesPage';
import NotificationsPage from './pages/NotificationsPage';
import ReportsPage from './pages/ReportsPage';
import CalendarPage from './pages/CalendarPage';
import SettingsPage from './pages/SettingsPage';

export default function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsCollapsed(prev => !prev);
  const toggleMobileSidebar = () => setIsMobileOpen(prev => !prev);
  const closeMobileSidebar = () => setIsMobileOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex font-sans selection:bg-brand-500 selection:text-white overflow-x-hidden">
      {/* Toast Notification Layer */}
      <ToastContainer />

      {/* Sidebar Navigation */}
      <Sidebar
        isCollapsed={isCollapsed}
        toggleSidebar={toggleSidebar}
        isMobileOpen={isMobileOpen}
        closeMobileSidebar={closeMobileSidebar}
      />

      {/* Main Content Area Wrapper */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 overflow-x-hidden ${
        isCollapsed ? 'lg:pl-20' : 'lg:pl-64'
      }`}>
        {/* Fixed Top Navbar */}
        <Navbar
          toggleSidebar={toggleSidebar}
          toggleMobileSidebar={toggleMobileSidebar}
          isCollapsed={isCollapsed}
        />

        {/* Page Viewport */}
        <main className="flex-1 pt-20 pb-12 px-3 sm:px-6 lg:px-8 max-w-7xl w-full mx-auto overflow-x-hidden">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/index.html" element={<DashboardPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

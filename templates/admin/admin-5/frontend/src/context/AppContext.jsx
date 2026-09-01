import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState('dashboards'); // dashboards, apps, users, components, utilities, auth
  const [activePage, setActivePage] = useState('overview'); // overview, sales, analytics, crm, finance, marketing, projects, chat, email, calendar, kanban, files, contacts, todo, tickets, user-list, user-profile, roles, settings, login, register, components, forms, contact-us, invoice, pricing, faq, timeline, search, err404, err403, err500, maintenance, coming-soon
  
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Notification State
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Server CPU Usage Alert', message: 'CPU reached 88% on Production Cluster 02', time: '5 mins ago', read: false, type: 'warning' },
    { id: 2, title: 'New Customer Order #ORD-8820', message: 'Order for $1,250.00 received from Enterprise Client', time: '20 mins ago', read: false, type: 'success' },
    { id: 3, title: 'New Support Ticket #TCK-9482', message: 'Robert Vance submitted an auth issue ticket', time: '1 hour ago', read: false, type: 'info' }
  ]);

  // Global Search State
  const [searchQuery, setSearchQuery] = useState('');

  // Active Modals State
  const [activeModal, setActiveModal] = useState(null); // 'task', 'ticket', 'mail', 'user', null

  // Toast Notification System
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const markNotificationRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const navigateTo = (category, page) => {
    setActiveCategory(category);
    setActivePage(page);
    setMobileMenuOpen(false);
  };

  return (
    <AppContext.Provider value={{
      activeCategory,
      activePage,
      navigateTo,
      sidebarCollapsed,
      setSidebarCollapsed,
      mobileMenuOpen,
      setMobileMenuOpen,
      notifications,
      markNotificationRead,
      clearAllNotifications,
      searchQuery,
      setSearchQuery,
      activeModal,
      setActiveModal,
      toasts,
      addToast
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

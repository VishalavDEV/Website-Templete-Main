import React, { createContext, useContext, useState } from 'react';
import { initialUsers } from '../mockData/users';
import { initialProducts } from '../mockData/products';
import { initialOrders } from '../mockData/orders';
import { initialNotifications } from '../mockData/notifications';
import { initialConversations } from '../mockData/messages';
import { initialReports } from '../mockData/reports';
import { initialEvents } from '../mockData/calendar';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Admin Profile State
  const [adminProfile, setAdminProfile] = useState({
    name: "Alex Morgan",
    email: "alex.morgan@nexus.io",
    role: "Super Admin",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    phone: "+1 (555) 019-2834",
    location: "San Francisco, CA",
    bio: "Head of Infrastructure & Enterprise Platform Security at Tech-Admin.",
    timezone: "Pacific Time (PT) - UTC-7",
    currency: "USD ($)",
    language: "English (US)",
    twoFactorEnabled: true,
    emailNotifications: true,
    pushNotifications: true,
    orderAlerts: true,
    systemAlerts: true
  });

  // Entities state
  const [users, setUsers] = useState(initialUsers);
  const [products, setProducts] = useState(initialProducts);
  const [orders, setOrders] = useState(initialOrders);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [conversations, setConversations] = useState(initialConversations);
  const [reports, setReports] = useState(initialReports);
  const [events, setEvents] = useState(initialEvents);

  // Toast system
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // User CRUD
  const addUser = (newUser) => {
    const userWithId = {
      ...newUser,
      id: `USR-${Math.floor(1000 + Math.random() * 9000)}`,
      avatar: newUser.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
      registrationDate: new Date().toISOString().split('T')[0],
      totalSpent: "$0.00"
    };
    setUsers(prev => [userWithId, ...prev]);
    addToast(`User ${newUser.name} added successfully!`, 'success');
  };

  const updateUser = (id, updatedData) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, ...updatedData } : u));
    addToast(`User updated successfully!`, 'success');
  };

  const deleteUser = (id) => {
    const u = users.find(user => user.id === id);
    setUsers(prev => prev.filter(user => user.id !== id));
    addToast(`User ${u?.name || id} removed`, 'info');
  };

  // Product CRUD
  const addProduct = (newProd) => {
    const productWithId = {
      ...newProd,
      id: `PRD-${Math.floor(500 + Math.random() * 400)}`,
      rating: 5.0,
      sales: 0,
      image: newProd.image || "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200&auto=format&fit=crop&q=80",
      price: parseFloat(newProd.price),
      stock: parseInt(newProd.stock)
    };
    setProducts(prev => [productWithId, ...prev]);
    addToast(`Product "${newProd.name}" created`, 'success');
  };

  const updateProduct = (id, updatedData) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updatedData } : p));
    addToast(`Product updated successfully`, 'success');
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    addToast(`Product removed`, 'info');
  };

  // Order Operations
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(o => {
      if (o.id === orderId) {
        const newTimelineEvent = {
          date: new Date().toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' }),
          status: newStatus,
          detail: `Status updated to ${newStatus} by admin.`
        };
        return {
          ...o,
          status: newStatus,
          timeline: [...(o.timeline || []), newTimelineEvent]
        };
      }
      return o;
    }));
    addToast(`Order ${orderId} status changed to ${newStatus}`, 'success');
  };

  const deleteOrder = (orderId) => {
    setOrders(prev => prev.filter(o => o.id !== orderId));
    addToast(`Order ${orderId} deleted`, 'info');
  };

  // Notifications Operations
  const markNotificationAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    addToast('All notifications marked as read', 'info');
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
    addToast('Notifications cleared', 'info');
  };

  // Messages Operations
  const sendMessage = (conversationId, text) => {
    if (!text.trim()) return;
    const newMsg = {
      id: `M-${Date.now()}`,
      sender: 'me',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setConversations(prev => prev.map(c => {
      if (c.id === conversationId) {
        return {
          ...c,
          lastMessage: text,
          timestamp: 'Just now',
          messages: [...c.messages, newMsg]
        };
      }
      return c;
    }));
  };

  // Calendar Operations
  const addEvent = (newEvent) => {
    const eventWithId = {
      ...newEvent,
      id: `EVT-${Date.now()}`
    };
    setEvents(prev => [...prev, eventWithId]);
    addToast(`Event "${newEvent.title}" scheduled`, 'success');
  };

  const deleteEvent = (id) => {
    setEvents(prev => prev.filter(e => e.id !== id));
    addToast('Event cancelled', 'info');
  };

  return (
    <AppContext.Provider value={{
      adminProfile,
      setAdminProfile,
      users,
      addUser,
      updateUser,
      deleteUser,
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      orders,
      updateOrderStatus,
      deleteOrder,
      notifications,
      markNotificationAsRead,
      markAllNotificationsAsRead,
      deleteNotification,
      clearAllNotifications,
      conversations,
      sendMessage,
      reports,
      setReports,
      events,
      addEvent,
      deleteEvent,
      toasts,
      addToast,
      removeToast
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}

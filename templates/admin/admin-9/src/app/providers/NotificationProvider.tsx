/* src/app/providers/NotificationProvider.tsx */
import React, { createContext, useContext, useState } from 'react';
import { mockNotifications } from '../../data/notifications';

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

type NotificationContextType = {
  notifications: AppNotification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  addNotification: (title: string, message: string) => void;
  deleteNotification: (id: string) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<AppNotification[]>(() => {
    return mockNotifications.map((n) => ({
      ...n,
      read: n.read || false,
    }));
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const addNotification = (title: string, message: string) => {
    const newNotif: AppNotification = {
      id: Math.random().toString(36).substring(2, 9),
      title,
      message,
      time: 'Just now',
      read: false,
    };
    setNotifications((prev) => [newNotif, ...prev]);
  };

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        addNotification,
        deleteNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('useNotifications must be used within NotificationProvider');
  return context;
}

import { createContext } from 'react';

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export interface NotificationContextType {
  notifications: AppNotification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  addNotification: (title: string, message: string) => void;
  deleteNotification: (id: string) => void;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bell,
  CheckCheck,
  Trash2,
  Filter,
  ShoppingBag,
  UserPlus,
  CreditCard,
  ShieldAlert,
  Inbox
} from 'lucide-react';

import Breadcrumb from '../components/common/Breadcrumb';
import { useApp } from '../context/AppContext';

export default function NotificationsPage() {
  const { notifications, markNotificationAsRead, markAllNotificationsAsRead, deleteNotification, clearAllNotifications } = useApp();
  const [filter, setFilter] = useState('all');

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'unread') return !n.read;
    if (filter === 'order') return n.type === 'order';
    if (filter === 'system') return n.type === 'system';
    return true;
  });

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'order':
        return <ShoppingBag className="w-5 h-5 text-emerald-500" />;
      case 'user':
        return <UserPlus className="w-5 h-5 text-brand-500" />;
      case 'payment':
        return <CreditCard className="w-5 h-5 text-purple-500" />;
      case 'system':
      default:
        return <ShieldAlert className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <div className="space-y-8">
      <Breadcrumb />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Notification Center
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            System logs, customer activity triggers, and security alerts
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={markAllNotificationsAsRead}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl transition-all"
          >
            <CheckCheck className="w-4 h-4 text-brand-500" />
            <span>Mark All as Read</span>
          </button>

          <button
            onClick={clearAllNotifications}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-600 dark:text-rose-400 text-xs font-semibold rounded-xl transition-all"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear All</span>
          </button>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        {[
          { key: 'all', label: 'All Activity' },
          { key: 'unread', label: 'Unread Only' },
          { key: 'order', label: 'Order Alerts' },
          { key: 'system', label: 'System Logs' }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === tab.key
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* NOTIFICATIONS CONTAINER */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800/80">
        <AnimatePresence>
          {filteredNotifications.length === 0 ? (
            <div className="p-12 text-center text-slate-400 space-y-3">
              <Inbox className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600" />
              <p className="text-base font-semibold">No notifications found in this view.</p>
            </div>
          ) : (
            filteredNotifications.map((n) => (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => markNotificationAsRead(n.id)}
                className={`p-5 flex items-start gap-4 transition-colors cursor-pointer group ${
                  !n.read
                    ? 'bg-brand-50/30 dark:bg-brand-950/20'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 shrink-0 mt-0.5 shadow-inner">
                  {getNotificationIcon(n.type)}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-sm font-bold ${!n.read ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                      {n.title}
                    </h3>
                    <span className="text-xs text-slate-400 font-medium">
                      {n.timestamp}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {n.message}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNotification(n.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-all"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

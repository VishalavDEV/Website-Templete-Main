import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Check, Trash2, ShoppingBag, CreditCard, AlertTriangle, Cpu } from 'lucide-react';
import { MOCK_NOTIFICATIONS } from '../../services/mockData';

export default function NotificationDropdown({ isOpen, onClose }) {
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  if (!isOpen) return null;

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const getIcon = (type) => {
    switch (type) {
      case 'order': return <ShoppingBag className="w-4 h-4 text-neura-cyan" />;
      case 'payment': return <CreditCard className="w-4 h-4 text-emerald-400" />;
      case 'alert': return <AlertTriangle className="w-4 h-4 text-amber-400" />;
      default: return <Cpu className="w-4 h-4 text-neura-purple" />;
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        transition={{ duration: 0.15 }}
        className="absolute right-0 mt-3 w-80 sm:w-96 bg-neura-panel/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <Bell className="w-4 h-4 text-neura-cyan" />
            <h3 className="text-sm font-semibold text-white">Notifications</h3>
            <span className="px-2 py-0.5 text-xs bg-neura-cyan/20 text-neura-cyan rounded-full font-medium">
              {notifications.filter(n => n.unread).length}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <button onClick={markAllAsRead} className="text-slate-400 hover:text-neura-cyan flex items-center transition-colors">
              <Check className="w-3.5 h-3.5 mr-1" /> Read
            </button>
            <button onClick={clearAll} className="text-slate-400 hover:text-rose-400 flex items-center transition-colors">
              <Trash2 className="w-3.5 h-3.5 mr-1" /> Clear
            </button>
          </div>
        </div>

        <div className="max-h-80 overflow-y-auto divide-y divide-white/5">
          {notifications.length === 0 ? (
            <div className="p-6 text-center text-slate-400 text-sm">No notifications</div>
          ) : (
            notifications.map(item => (
              <div
                key={item.id}
                className={`p-3.5 flex items-start space-x-3 transition-colors hover:bg-white/5 ${item.unread ? 'bg-neura-cyan/5' : ''}`}
              >
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 shrink-0">
                  {getIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-white truncate">{item.title}</p>
                    <span className="text-[10px] text-slate-400">{item.time}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

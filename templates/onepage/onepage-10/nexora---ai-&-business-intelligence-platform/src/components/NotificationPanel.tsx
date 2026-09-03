import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Bell,
  CheckCheck,
  Trash2,
  X,
  ExternalLink,
  ShieldAlert,
  Sparkles,
  Workflow,
  CheckCircle,
  FileSpreadsheet
} from 'lucide-react';

export const NotificationPanel: React.FC = () => {
  const {
    notifications,
    unreadNotificationCount,
    markNotificationRead,
    markAllNotificationsRead,
    deleteNotification,
    isNotificationPanelOpen,
    setIsNotificationPanelOpen,
    setIsOperationsConsoleOpen
  } = useApp();

  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  if (!isNotificationPanelOpen) return null;

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'unread') return !n.read;
    return true;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'alert':
        return <ShieldAlert className="w-4 h-4 text-amber-400" />;
      case 'success':
        return <CheckCircle className="w-4 h-4 text-emerald-400" />;
      case 'workflow':
        return <Workflow className="w-4 h-4 text-purple-400" />;
      case 'report':
        return <FileSpreadsheet className="w-4 h-4 text-indigo-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-indigo-400" />;
    }
  };

  const handleAction = (target?: string, id?: string) => {
    if (id) markNotificationRead(id);
    setIsNotificationPanelOpen(false);

    if (target === 'operations') {
      setIsOperationsConsoleOpen(true);
      return;
    }

    if (target) {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Click backdrop to close */}
      <div
        className="flex-1"
        onClick={() => setIsNotificationPanelOpen(false)}
      />

      {/* Drawer content */}
      <div
        className="w-full max-w-md bg-[#0C0C12] border-l border-white/5 shadow-2xl flex flex-col h-full overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/5 bg-[#08080A] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                Intelligence Stream
                {unreadNotificationCount > 0 && (
                  <span className="px-2 py-0.5 text-[10px] font-semibold bg-indigo-500 text-white rounded-full">
                    {unreadNotificationCount} New
                  </span>
                )}
              </h3>
              <p className="text-xs text-slate-400">Live platform alerts & autonomous telemetry</p>
            </div>
          </div>
          <button
            onClick={() => setIsNotificationPanelOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close notifications"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar & Actions */}
        <div className="px-4 py-2.5 bg-[#08080A]/60 border-b border-white/5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 bg-[#08080A] p-0.5 rounded-lg border border-white/10">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-md transition-all font-medium ${
                filter === 'all'
                  ? 'bg-white/10 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({notifications.length})
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-3 py-1 rounded-md transition-all font-medium ${
                filter === 'unread'
                  ? 'bg-white/10 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Unread ({unreadNotificationCount})
            </button>
          </div>

          {unreadNotificationCount > 0 && (
            <button
              onClick={markAllNotificationsRead}
              className="flex items-center gap-1 text-slate-400 hover:text-indigo-400 transition-colors py-1 px-2 rounded hover:bg-white/5"
            >
              <CheckCheck className="w-3.5 h-3.5" />
              <span>Mark all read</span>
            </button>
          )}
        </div>

        {/* Notification List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
          {filteredNotifications.length === 0 ? (
            <div className="py-16 text-center text-slate-500 space-y-2">
              <CheckCheck className="w-10 h-10 mx-auto text-slate-600 opacity-60" />
              <p className="text-sm font-medium text-slate-400">All caught up</p>
              <p className="text-xs">No notifications match your current filter.</p>
            </div>
          ) : (
            filteredNotifications.map(item => (
              <div
                key={item.id}
                className={`p-3.5 rounded-xl border transition-all relative group ${
                  item.read
                    ? 'bg-[#08080A] border-white/5 text-slate-400'
                    : 'bg-[#13131D] border-indigo-500/30 text-slate-200 shadow-md shadow-indigo-950/20'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#08080A] border border-white/5 shrink-0 mt-0.5">
                    {getIcon(item.type)}
                  </div>
                  <div className="flex-1 min-w-0 pr-6">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-semibold text-white truncate">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.message}
                    </p>
                    <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/5 text-[11px]">
                      <span className="text-slate-500 font-mono">{item.timestamp}</span>
                      {item.actionTarget && (
                        <button
                          onClick={() => handleAction(item.actionTarget, item.id)}
                          className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium"
                        >
                          <span>View Detail</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Quick actions top-right */}
                <div className="absolute top-2.5 right-2.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {!item.read && (
                    <button
                      onClick={() => markNotificationRead(item.id)}
                      className="p-1 text-slate-400 hover:text-indigo-400 rounded hover:bg-white/5"
                      title="Mark as read"
                    >
                      <CheckCheck className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(item.id)}
                    className="p-1 text-slate-400 hover:text-rose-400 rounded hover:bg-white/5"
                    title="Delete notification"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#08080A] border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Telemetry: Continuous
          </span>
          <button
            onClick={() => {
              setIsNotificationPanelOpen(false);
              setIsOperationsConsoleOpen(true);
            }}
            className="text-indigo-400 hover:underline text-xs"
          >
            Open Operations Console →
          </button>
        </div>
      </div>
    </div>
  );
};

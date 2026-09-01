import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Bell,
  X,
  CheckCircle2,
  Calendar,
  FileText,
  Pill,
  MessageSquare,
  Sparkles,
  CheckCheck,
  Trash2,
} from 'lucide-react';

export const NotificationDrawer: React.FC = () => {
  const {
    isNotificationOpen,
    setIsNotificationOpen,
    notifications,
    markNotificationRead,
    clearNotifications,
    setActivePage,
  } = useApp();

  if (!isNotificationOpen) return null;

  const handleNotificationClick = (notif: (typeof notifications)[0]) => {
    markNotificationRead(notif.id);
    if (notif.actionTarget) {
      setActivePage('portal');
      setIsNotificationOpen(false);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'appointment':
        return <Calendar className="w-4 h-4 text-[#8B6FAE]" />;
      case 'report':
        return <FileText className="w-4 h-4 text-[#739B82]" />;
      case 'prescription':
        return <Pill className="w-4 h-4 text-[#D98B9C]" />;
      case 'message':
        return <MessageSquare className="w-4 h-4 text-[#C99A62]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#8B6FAE]" />;
    }
  };

  return (
    <div
      id="notification-drawer-overlay"
      className="fixed inset-0 z-50 bg-[#3E3445]/40 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
      onClick={() => setIsNotificationOpen(false)}
    >
      <div
        className="w-full max-w-md h-full bg-[#FFFDFC] shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#3E3445]/8 bg-[#F9F7FB] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#E8DDF2] flex items-center justify-center text-[#665080]">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#3E3445]">Care Notifications</h3>
              <p className="text-xs text-[#756B7C]">Your medical alerts and reminders</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {notifications.length > 0 && (
              <button
                id="clear-all-notifs-btn"
                onClick={() => clearNotifications()}
                className="p-2 text-[#756B7C] hover:text-[#C77C83] hover:bg-[#F2D9DF]/40 rounded-full transition-colors"
                title="Clear all notifications"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              id="close-notifs-drawer-btn"
              onClick={() => setIsNotificationOpen(false)}
              className="p-2 text-[#756B7C] hover:text-[#3E3445] hover:bg-[#E8DDF2]/40 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {notifications.length === 0 ? (
            <div className="py-16 text-center">
              <CheckCircle2 className="w-10 h-10 text-[#739B82] mx-auto mb-3 opacity-60" />
              <h4 className="font-serif text-base font-bold text-[#3E3445] mb-1">
                You're completely up to date
              </h4>
              <p className="text-xs text-[#756B7C] max-w-xs mx-auto">
                No unread messages, upcoming appointments, or pending laboratory reports.
              </p>
            </div>
          ) : (
            notifications.map((n) => (
              <div
                key={n.id}
                id={`notif-card-${n.id}`}
                onClick={() => handleNotificationClick(n)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer group ${
                  n.read
                    ? 'bg-white/60 border-[#3E3445]/5 text-[#756B7C]'
                    : 'bg-white border-[#8B6FAE]/30 shadow-[0_4px_16px_rgba(139,111,174,0.08)]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#F9F7FB] border border-[#3E3445]/5 mt-0.5">
                    {getIcon(n.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4
                        className={`text-sm font-semibold ${
                          n.read ? 'text-[#3E3445]' : 'text-[#665080]'
                        }`}
                      >
                        {n.title}
                      </h4>
                      {!n.read && (
                        <span className="w-2 h-2 rounded-full bg-[#8B6FAE] shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-[#756B7C] leading-relaxed mb-2">
                      {n.message}
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-[#756B7C]/80">
                      <span>{n.time}</span>
                      <span className="font-medium text-[#8B6FAE] group-hover:underline">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-[#3E3445]/8 bg-[#F9F7FB] flex items-center justify-between text-xs text-[#756B7C]">
          <span>Protected patient telemetry</span>
          <button
            id="open-full-portal-from-notifs"
            onClick={() => {
              setIsNotificationOpen(false);
              setActivePage('portal');
            }}
            className="font-semibold text-[#665080] hover:underline"
          >
            Go to Patient Portal →
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { Notification, NotificationService } from '../../services/apiServices';
import { useToast } from '../../components/common/Toast';
import { Bell, CheckCheck, Trash2, Shield, ShoppingCart, User, CreditCard, Info } from 'lucide-react';
import StatusBadge from '../../components/common/StatusBadge';

const NotificationCenter: React.FC = () => {
  const { showToast } = useToast();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const data = await NotificationService.getAll();
      setNotifications(data);
    } catch (err) {
      showToast('Failed to retrieve notification records.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id: number) => {
    try {
      await NotificationService.markAsRead(id);
      showToast('Notification marked as read.', 'success');
      fetchNotifications();
    } catch (err) {
      showToast('Failed to update notification.', 'error');
    }
  };

  const handleMarkAllAsRead = async () => {
    try {
      await NotificationService.markAllAsRead();
      showToast('All notifications marked as read.', 'success');
      fetchNotifications();
    } catch (err) {
      showToast('Failed to update notifications.', 'error');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await NotificationService.deleteNotif(id);
      showToast('Notification cleared.', 'success');
      fetchNotifications();
    } catch (err) {
      showToast('Failed to remove notification.', 'error');
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'SYSTEM':
        return <Info className="h-5 w-5 text-blue-500 bg-blue-50 p-1 rounded-lg" />;
      case 'ORDER':
        return <ShoppingCart className="h-5 w-5 text-indigo-500 bg-indigo-50 p-1 rounded-lg" />;
      case 'USER':
        return <User className="h-5 w-5 text-purple-500 bg-purple-50 p-1 rounded-lg" />;
      case 'PAYMENT':
        return <CreditCard className="h-5 w-5 text-green-500 bg-green-50 p-1 rounded-lg" />;
      case 'SECURITY':
        return <Shield className="h-5 w-5 text-red-500 bg-red-50 p-1 rounded-lg" />;
      default:
        return <Bell className="h-5 w-5 text-slate-500 bg-slate-50 p-1 rounded-lg" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Notification Center</h1>
          <p className="text-sm text-slate-500 font-medium">Verify system alerts, security triggers, order events, and user registrations</p>
        </div>
        {notifications.some((n) => !n.isRead) && (
          <button
            onClick={handleMarkAllAsRead}
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-indigo-200 text-indigo-650 hover:bg-indigo-50 rounded-xl text-xs font-bold transition-all active:scale-95 bg-white shadow-sm"
          >
            <CheckCheck className="h-4.5 w-4.5" />
            Mark All Read
          </button>
        )}
      </div>

      {/* Notifications list */}
      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-16 bg-white animate-pulse border border-slate-100 rounded-2xl"></div>
          ))}
        </div>
      ) : notifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 bg-white border border-slate-100 rounded-2xl card-shadow text-center">
          <Bell className="h-10 w-10 text-slate-450 bg-slate-50 p-2 rounded-xl mb-3" />
          <h3 className="text-sm font-bold text-slate-850">All caught up!</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-xs">You have no system alerts in your dashboard inbox.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-100 card-shadow divide-y divide-slate-100 overflow-hidden">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`p-5 flex items-center justify-between gap-4 transition-all hover:bg-slate-50/40 duration-200 ${
                !n.isRead ? 'bg-indigo-50/15' : ''
              }`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex-shrink-0">{getIcon(n.type)}</div>
                <div className="min-w-0 flex flex-col gap-0.5">
                  <p className={`text-sm text-slate-700 leading-relaxed font-semibold ${!n.isRead ? 'text-slate-900 font-extrabold' : ''}`}>
                    {n.message}
                  </p>
                  <span className="text-[10px] text-slate-400 font-bold">
                    {new Date(n.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {!n.isRead && (
                  <button
                    onClick={() => handleMarkAsRead(n.id)}
                    title="Mark as Read"
                    className="p-1.5 border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 text-slate-500 rounded-lg transition-all active:scale-90 bg-white"
                  >
                    <CheckCheck className="h-4 w-4" />
                  </button>
                )}
                <button
                  onClick={() => handleDelete(n.id)}
                  title="Clear Alert"
                  className="p-1.5 border border-slate-200 hover:border-red-500 hover:bg-red-50 hover:text-red-600 text-slate-500 rounded-lg transition-all active:scale-90 bg-white"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;

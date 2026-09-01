import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { Badge } from '../../components/Common/Badge';
import { Bell, CheckCheck, Trash2, ArrowRight } from 'lucide-react';

export const NotificationsPage: React.FC = () => {
  const { notifications, markNotificationRead, markAllNotificationsRead, deleteNotification } = useApp();
  const navigate = useNavigate();

  const [filter, setFilter] = useState<'All' | 'Unread'>('All');

  const filtered = notifications.filter(n => (filter === 'Unread' ? !n.read : true));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-app-primary">System Notifications</h1>
          <p className="text-xs text-app-secondary mt-0.5">
            Real-time alerts regarding task assignments, milestone deadlines, and financial updates.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" icon={<CheckCheck className="w-4 h-4" />} onClick={markAllNotificationsRead}>
            Mark All Read
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-app-surface p-3 border border-app rounded-2xl">
        <button
          onClick={() => setFilter('All')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${filter === 'All' ? 'bg-blue-600 text-white' : 'bg-app-secondary text-app-secondary'}`}
        >
          All Notifications ({notifications.length})
        </button>
        <button
          onClick={() => setFilter('Unread')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${filter === 'Unread' ? 'bg-blue-600 text-white' : 'bg-app-secondary text-app-secondary'}`}
        >
          Unread ({notifications.filter(n => !n.read).length})
        </button>
      </div>

      <Card noPadding>
        <div className="divide-y divide-app">
          {filtered.map(n => (
            <div
              key={n.id}
              className={`p-4 flex items-center justify-between hover:bg-app-hover transition-colors ${!n.read ? 'bg-blue-500/5' : ''}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-app-primary">{n.title}</h4>
                    <span className="text-[10px] text-app-muted">{n.timestamp}</span>
                  </div>
                  <p className="text-xs text-app-secondary mt-0.5">{n.message}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    markNotificationRead(n.id);
                    navigate(n.targetRoute);
                  }}
                >
                  View Source <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
                <button
                  onClick={() => deleteNotification(n.id)}
                  className="p-1.5 rounded-lg text-app-muted hover:text-rose-400"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

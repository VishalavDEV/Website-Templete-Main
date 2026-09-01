import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { Switch } from '../../../components/ui/Switch';
import { PageHeader } from '../../../components/common';
import { useToast } from '../../../app/providers/ToastProvider';
import { Bell, Check, Inbox } from 'lucide-react';

interface AlertItem {
  id: string;
  title: string;
  desc: string;
  time: string;
  read: boolean;
}

export default function NotificationsPage() {
  const { toast } = useToast();

  const [alerts, setAlerts] = useState<AlertItem[]>([
    { id: 'n1', title: 'SSL Certificates expiring soon', desc: 'Wayne Industries Staging SSL keys will expire in 3 days.', time: '12 mins ago', read: false },
    { id: 'n2', title: 'Invoice INV-2026-002 Paid', desc: 'Acme Corp Ltd. cleared transaction invoice payments.', time: '1 hour ago', read: false },
    { id: 'n3', title: 'Backup system credentials rotated', desc: 'SSL backup nodes were securely synced.', time: '1 day ago', read: true }
  ]);

  const handleMarkAllRead = () => {
    setAlerts(alerts.map(a => ({ ...a, read: true })));
    toast.success('Marked all alerts as read.');
  };

  const handleMarkSingleRead = (id: string) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, read: true } : a));
    toast.success('Alert marked as read.');
  };

  return (
    <div className="space-y-6 select-none">
      <PageHeader 
        title="Notification Center" 
        subtitle="Manage email preferences, warning notifications, and read/unread log files states."
        actions={
          <Button variant="outline" size="sm" leftIcon={<Check className="h-4 w-4" />} onClick={handleMarkAllRead}>
            Mark all read
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Alerts list */}
        <div className="lg:col-span-2 space-y-3">
          {alerts.map((item) => (
            <div 
              key={item.id} 
              className={`flex items-start gap-4 p-4 border rounded-xl shadow-sm transition-colors bg-card ${
                item.read ? 'border-border/60 opacity-70' : 'border-primary/30 bg-primary/5'
              }`}
            >
              <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                item.read ? 'bg-muted text-muted-foreground' : 'bg-primary/10 text-primary'
              }`}>
                <Bell className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-xs font-bold text-foreground truncate">{item.title}</h4>
                  <span className="text-[9px] text-muted-foreground shrink-0">{item.time}</span>
                </div>
                <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
              </div>
              {!item.read && (
                <button 
                  onClick={() => handleMarkSingleRead(item.id)}
                  className="p-1 rounded hover:bg-accent text-primary cursor-pointer shrink-0"
                  title="Mark read"
                >
                  <Check className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Preferences side card */}
        <Card title="Notification Preferences">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs">
              <div>
                <h4 className="font-bold">Backup Toggles</h4>
                <p className="text-[9px] text-muted-foreground mt-0.5">Email on script backups.</p>
              </div>
              <Switch checked={true} onChange={() => {}} />
            </div>

            <div className="flex items-center justify-between text-xs border-t border-border/40 pt-3">
              <div>
                <h4 className="font-bold">MFA Warning Alerts</h4>
                <p className="text-[9px] text-muted-foreground mt-0.5">Receive text on MFA login failures.</p>
              </div>
              <Switch checked={false} onChange={() => {}} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

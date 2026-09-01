import React from 'react';
import { Bell, CheckCheck, Trash2, Shield, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const NotificationsPage = () => {
  const { notifications, markNotificationRead, clearAllNotifications, addToast } = useApp();

  return (
    <div className="notifications-page" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>Notification Management Center</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>View all real-time alerts, CPU warnings, and system notifications.</p>
        </div>
        <button className="btn btn-secondary btn-sm" onClick={clearAllNotifications}>
          <Trash2 size={16} /> Clear All
        </button>
      </div>

      <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
        {notifications.length === 0 ? (
          <div style={{ padding: 32, textAlign: 'center', color: 'var(--text-muted)' }}>
            No active notifications
          </div>
        ) : (
          notifications.map(n => (
            <div
              key={n.id}
              onClick={() => markNotificationRead(n.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                borderBottom: '1px solid var(--border-color-light)',
                background: n.read ? 'transparent' : 'var(--brand-primary-light)',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                {n.type === 'warning' && <AlertTriangle size={20} color="var(--brand-warning)" />}
                {n.type === 'success' && <CheckCircle size={20} color="var(--brand-success)" />}
                {n.type === 'info' && <Info size={20} color="var(--brand-info)" />}
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 700 }}>{n.title}</h4>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{n.message}</p>
                </div>
              </div>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{n.time}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export const ActivityLogPage = () => {
  const { addToast } = useApp();

  const logs = [
    { title: 'User Alex Morgan updated permission roles', time: '10 mins ago', ip: '192.168.1.100', user: 'Alex Morgan' },
    { title: 'Hotfix v2.4 deployed to Production', time: '45 mins ago', ip: '192.168.1.100', user: 'Alex Morgan' },
    { title: 'Database snapshot backup completed', time: '2 hours ago', ip: '10.0.0.1', user: 'System Task' }
  ];

  return (
    <div className="activity-page" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Account Activity Log</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Detailed audit log of system logins, permission changes, and security events.</p>
      </div>

      <div className="glass-card">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Event Title</th>
              <th>User</th>
              <th>IP Address</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((l, idx) => (
              <tr key={idx}>
                <td style={{ fontWeight: 700 }}>{l.title}</td>
                <td>{l.user}</td>
                <td style={{ color: 'var(--text-muted)' }}>{l.ip}</td>
                <td style={{ fontSize: 12, color: 'var(--text-muted)' }}>{l.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

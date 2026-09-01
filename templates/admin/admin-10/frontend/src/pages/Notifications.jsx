import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bell,
  Check,
  Trash2,
  AlertTriangle,
  CheckCircle,
  Info,
  XCircle,
  Sparkles
} from 'lucide-react';
import api from '../utils/api';

export default function Notifications({ triggerUpdateBadges }) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const res = await api.get('/notifications');
      setNotifications(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkRead = async (id) => {
    try {
      await api.put(`/notifications/${id}/read`);
      setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
      if (triggerUpdateBadges) triggerUpdateBadges();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/notifications/${id}`);
      setNotifications(prev => prev.filter(n => n.id !== id));
      if (triggerUpdateBadges) triggerUpdateBadges();
    } catch (err) {
      console.error(err);
    }
  };

  const handleClearAll = async () => {
    try {
      await api.delete('/notifications/clear');
      setNotifications([]);
      if (triggerUpdateBadges) triggerUpdateBadges();
    } catch (err) {
      console.error(err);
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'success': return <CheckCircle size={18} style={{ color: 'var(--success)' }} />;
      case 'warning': return <AlertTriangle size={18} style={{ color: 'var(--warning)' }} />;
      case 'error': return <XCircle size={18} style={{ color: 'var(--danger)' }} />;
      default: return <Info size={18} style={{ color: 'var(--info)' }} />;
    }
  };

  const getBorderColor = (type) => {
    switch (type) {
      case 'success': return 'var(--success)';
      case 'warning': return 'var(--warning)';
      case 'error': return 'var(--danger)';
      default: return 'var(--info)';
    }
  };

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'unread') return !n.read;
    if (filter === 'success') return n.type === 'success';
    if (filter === 'warning') return n.type === 'warning';
    if (filter === 'error') return n.type === 'error';
    return true;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '25px', maxWidth: '800px', margin: '0 auto' }}
    >
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-main)' }}>Notifications Center</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Receive and dispatch platform reports, error logs, and metrics alerts.</p>
        </div>

        {notifications.length > 0 && (
          <button
            onClick={handleClearAll}
            className="btn-danger"
            style={{ padding: '8px 16px', fontSize: '0.8rem' }}
          >
            <Trash2 size={14} /> Clear All
          </button>
        )}
      </div>

      {/* Filter tab bar */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--border-radius-md)',
        padding: '8px',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        gap: '6px',
        overflowX: 'auto'
      }}>
        {[
          { key: 'all', label: 'All Alerts' },
          { key: 'unread', label: 'Unread Only' },
          { key: 'success', label: 'Success' },
          { key: 'warning', label: 'Warnings' },
          { key: 'error', label: 'Errors' }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--border-radius-sm)',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.82rem',
              backgroundColor: filter === tab.key ? 'var(--primary)' : 'transparent',
              color: 'var(--text-main)',
              transition: 'background-color 0.2s',
              whiteSpace: 'nowrap'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* List content */}
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
          <div style={{ width: '30px', height: '30px', border: '3px solid var(--border-color)', borderTopColor: 'var(--accent)', borderRadius: '50%' }} className="pulse-glow" />
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <AnimatePresence initial={false}>
            {filteredNotifications.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px dashed var(--border-color)',
                  borderRadius: 'var(--border-radius-md)',
                  padding: '40px',
                  textAlign: 'center',
                  color: 'var(--text-muted)'
                }}
              >
                <Bell size={32} style={{ color: 'var(--border-color)', marginBottom: '12px' }} />
                <p style={{ fontSize: '0.9rem' }}>No system notifications in this filter category.</p>
              </motion.div>
            ) : (
              filteredNotifications.map((notif) => (
                <motion.div
                  key={notif.id}
                  layout
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1.5px solid var(--border-color)',
                    borderLeft: `5px solid ${getBorderColor(notif.type)}`,
                    borderRadius: 'var(--border-radius-md)',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    boxShadow: 'var(--shadow-sm)',
                    position: 'relative',
                    opacity: notif.read ? 0.75 : 1,
                  }}
                >
                  {/* Status Indicator Icon */}
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {getIcon(notif.type)}
                  </div>

                  {/* Message body */}
                  <div style={{ flexGrow: 1, paddingRight: '40px' }}>
                    <p style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-main)',
                      lineHeight: 1.45,
                      fontWeight: notif.read ? 500 : 600
                    }}>
                      {notif.message}
                    </p>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>
                      {notif.timestamp}
                    </span>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '8px', position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)' }}>
                    {!notif.read && (
                      <button
                        onClick={() => handleMarkRead(notif.id)}
                        style={{
                          background: 'none',
                          border: '1px solid var(--border-color)',
                          cursor: 'pointer',
                          color: 'var(--text-muted)',
                          padding: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'var(--transition-smooth)'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--success)'; e.currentTarget.style.backgroundColor = 'var(--success-bg)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.backgroundColor = '#FFFFFF'; }}
                        title="Mark as read"
                      >
                        <Check size={14} />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(notif.id)}
                      style={{
                        background: 'none',
                        border: '1px solid var(--border-color)',
                        cursor: 'pointer',
                        color: 'var(--text-muted)',
                        padding: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'var(--transition-smooth)'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--danger)'; e.currentTarget.style.backgroundColor = 'var(--danger-bg)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.backgroundColor = '#FFFFFF'; }}
                      title="Delete"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}

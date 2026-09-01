import React from 'react';
import { AlertTriangle, Lock, AlertCircle, Home } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ErrorPages = ({ type }) => {
  const { navigateTo } = useApp();

  const configs = {
    err404: { code: '404', title: 'Page Not Found', desc: 'The requested module or URL path does not exist.', icon: AlertTriangle },
    err403: { code: '403', title: 'Access Forbidden', desc: 'You do not have permission role clearance to access this resource.', icon: Lock },
    err500: { code: '500', title: 'Internal Server Error', desc: 'The Spring Boot API server encountered an unexpected error state.', icon: AlertCircle }
  };

  const current = configs[type] || configs.err404;
  const Icon = current.icon;

  return (
    <div style={{ textAlign: 'center', padding: '60px 20px', maxWidth: 500, margin: '0 auto' }}>
      <Icon size={64} color="var(--brand-primary)" style={{ marginBottom: 16 }} />
      <h1 style={{ fontSize: 72, fontWeight: 900, color: 'var(--brand-primary)', lineHeight: 1 }}>{current.code}</h1>
      <h2 style={{ fontSize: 24, fontWeight: 800, margin: '12px 0' }}>{current.title}</h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 24 }}>{current.desc}</p>
      <button className="btn btn-primary" onClick={() => navigateTo('dashboards', 'overview')}>
        <Home size={16} /> Return to Home Overview
      </button>
    </div>
  );
};

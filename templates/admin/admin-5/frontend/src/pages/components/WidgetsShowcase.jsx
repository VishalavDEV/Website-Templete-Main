import React from 'react';
import { Layout, Award, TrendingUp, Zap, Shield, Heart } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const WidgetsShowcase = () => {
  const { addToast } = useApp();

  return (
    <div className="widgets-page">
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Dashboard Widgets & Banners</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Reusable cards, promotional banners, metric gauges, and data widgets.</p>
      </div>

      {/* Promotional Banner Widgets */}
      <div className="glass-card" style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', color: '#ffffff', padding: 32, marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 8 }}>Upgrade to TS Smart Admin v3.0</h2>
            <p style={{ opacity: 0.9, fontSize: 14 }}>Get real-time Spring Boot JPA MySQL replication and automated cloud backups.</p>
          </div>
          <button className="btn btn-secondary" style={{ background: '#ffffff', color: '#6366f1', fontWeight: 800 }} onClick={() => addToast('Banner CTA Clicked', 'success')}>
            Explore Features
          </button>
        </div>
      </div>

      {/* Metric Widgets */}
      <div className="grid-12">
        <div className="col-4 glass-card" style={{ borderLeft: '4px solid var(--brand-primary)' }}>
          <Zap size={24} color="var(--brand-primary)" style={{ marginBottom: 12 }} />
          <h3 style={{ fontSize: 18, fontWeight: 800 }}>99.98% System Uptime</h3>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4 }}>Monitored across 14 enterprise data centers worldwide.</p>
        </div>

        <div className="col-4 glass-card" style={{ borderLeft: '4px solid var(--brand-success)' }}>
          <Shield size={24} color="var(--brand-success)" style={{ marginBottom: 12 }} />
          <h3 style={{ fontSize: 18, fontWeight: 800 }}>SOC2 Security Verified</h3>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4 }}>Spring Boot REST API end-to-end SSL/TLS encryption active.</p>
        </div>

        <div className="col-4 glass-card" style={{ borderLeft: '4px solid var(--brand-warning)' }}>
          <Heart size={24} color="var(--brand-warning)" style={{ marginBottom: 12 }} />
          <h3 style={{ fontSize: 18, fontWeight: 800 }}>98% CSAT Satisfaction</h3>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4 }}>Based on 4,820 customer support ticket resolution ratings.</p>
        </div>
      </div>
    </div>
  );
};

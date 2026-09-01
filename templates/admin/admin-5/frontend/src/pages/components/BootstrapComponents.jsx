import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Info, XCircle, Bell, ChevronDown } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const BootstrapComponents = () => {
  const { addToast } = useApp();
  const [activeTab, setActiveTab] = useState('tab1');
  const [accordionOpen, setAccordionOpen] = useState(1);

  return (
    <div className="components-page">
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>UI Components Showcase</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Interactive demonstration of buttons, alerts, badges, accordions, tabs, and progress bars.</p>
      </div>

      {/* Alert Banners */}
      <div className="glass-card" style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Alert Banners & Notifications</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ padding: '12px 16px', borderRadius: 8, background: 'var(--brand-success-light)', color: 'var(--brand-success)', display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600 }}>
            <CheckCircle size={18} /> Operation completed successfully! MySQL database connection verified.
          </div>
          <div style={{ padding: '12px 16px', borderRadius: 8, background: 'var(--brand-warning-light)', color: 'var(--brand-warning)', display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600 }}>
            <AlertTriangle size={18} /> Warning: High CPU load detected on production cluster.
          </div>
          <div style={{ padding: '12px 16px', borderRadius: 8, background: 'var(--brand-danger-light)', color: 'var(--brand-danger)', display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600 }}>
            <XCircle size={18} /> Error 500: Server response timeout.
          </div>
        </div>
      </div>

      {/* Button Styles */}
      <div className="glass-card" style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Button Variations</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button className="btn btn-primary" onClick={() => addToast('Primary action clicked', 'success')}>Primary Button</button>
          <button className="btn btn-secondary" onClick={() => addToast('Secondary action clicked', 'info')}>Secondary Button</button>
          <button className="btn btn-primary" style={{ background: 'var(--brand-success)' }} onClick={() => addToast('Success action clicked', 'success')}>Success</button>
          <button className="btn btn-primary" style={{ background: 'var(--brand-danger)' }} onClick={() => addToast('Danger action clicked', 'danger')}>Danger</button>
        </div>
      </div>

      {/* Tabs Showcase */}
      <div className="glass-card">
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Interactive Tabs Component</h3>
        <div style={{ display: 'flex', gap: 12, borderBottom: '1px solid var(--border-color)', marginBottom: 16 }}>
          {['tab1', 'tab2', 'tab3'].map((t, idx) => (
            <button
              key={t}
              className={`subpanel-item ${activeTab === t ? 'active' : ''}`}
              onClick={() => setActiveTab(t)}
              style={{ width: 'auto' }}
            >
              Tab Section {idx + 1}
            </button>
          ))}
        </div>
        <div style={{ padding: 16, background: 'var(--bg-subtle)', borderRadius: 8 }}>
          {activeTab === 'tab1' && <p>Content for Tab Section 1: TS Smart Admin utilizes CSS custom properties for instant light/dark theme switching.</p>}
          {activeTab === 'tab2' && <p>Content for Tab Section 2: Integrated ApexCharts, Chart.js, and ECharts visualizations for maximum flexibility.</p>}
          {activeTab === 'tab3' && <p>Content for Tab Section 3: Full Spring Boot REST API integration with MySQL database schemas.</p>}
        </div>
      </div>
    </div>
  );
};

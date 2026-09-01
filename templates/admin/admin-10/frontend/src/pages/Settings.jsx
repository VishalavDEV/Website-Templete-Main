import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Settings as SettingsIcon,
  Eye,
  Bell,
  Sun,
  Layout,
  Globe,
  Save,
  CheckCircle2
} from 'lucide-react';

export default function Settings() {
  const [general, setGeneral] = useState({
    siteName: 'Amelia Admin Control',
    language: 'English (US)',
    timezone: 'UTC +05:30'
  });

  const [appearance, setAppearance] = useState({
    theme: 'light',
    compactMode: false
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    systemAlerts: true,
    orderAlerts: true
  });

  const [dashboard, setDashboard] = useState({
    showStats: true,
    showCharts: true,
    showOrders: true
  });

  // Success save alert state
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Apply compact mode class to body when state toggles
  useEffect(() => {
    if (appearance.compactMode) {
      document.body.classList.add('compact-mode');
    } else {
      document.body.classList.remove('compact-mode');
    }
  }, [appearance.compactMode]);

  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setGeneral(prev => ({ ...prev, [name]: value }));
  };

  const handleToggle = (category, key) => {
    if (category === 'appearance') {
      setAppearance(prev => ({ ...prev, [key]: !prev[key] }));
    } else if (category === 'notifications') {
      setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
    } else if (category === 'dashboard') {
      setDashboard(prev => ({ ...prev, [key]: !prev[key] }));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '25px', maxWidth: '800px', margin: '0 auto' }}
    >
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-main)' }}>Portal Settings</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Configure operator preferences, styling modes, and alerts.</p>
        </div>
      </div>

      {/* Success Save Alert Bubble */}
      <AnimatePresence>
        {saveSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              backgroundColor: 'var(--success-bg)',
              border: '1px solid var(--success)',
              borderRadius: 'var(--border-radius-sm)',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'var(--success)',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}
          >
            <CheckCircle2 size={18} /> Settings successfully saved and applied.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form settings wrapper */}
      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* 1. General Config Panel */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1.5px solid var(--border-color)',
          borderRadius: 'var(--border-radius-md)',
          padding: '24px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe size={18} style={{ color: 'var(--accent)' }} /> General Settings
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="settings-grid">
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Site Brand Name</label>
              <input type="text" name="siteName" value={general.siteName} onChange={handleGeneralChange} className="form-input" />
            </div>
            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Portal Language</label>
              <select name="language" value={general.language} onChange={handleGeneralChange} className="form-select">
                <option value="English (US)">English (US)</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Default Timezone</label>
              <select name="timezone" value={general.timezone} onChange={handleGeneralChange} className="form-select">
                <option value="UTC +05:30">UTC +05:30 (IST)</option>
                <option value="UTC +00:00">UTC +00:00 (GMT)</option>
                <option value="UTC -05:00">UTC -05:00 (EST)</option>
                <option value="UTC +08:00">UTC +08:00 (SGT)</option>
              </select>
            </div>
          </div>
        </div>

        {/* 2. Styling and Appearance Toggles */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1.5px solid var(--border-color)',
          borderRadius: 'var(--border-radius-md)',
          padding: '24px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sun size={18} style={{ color: 'var(--accent)' }} /> Portal Appearance
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Toggle Theme */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>Light/Cream Theme</h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>Default warm cream light styling profile.</p>
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase' }}>Active</span>
            </div>

            {/* Toggle Compact mode */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--bg-secondary)', paddingTop: '16px' }}>
              <div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>Compact Layout Mode</h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>Reduces padding sizes and table spacing for maximum data density.</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={appearance.compactMode}
                  onChange={() => handleToggle('appearance', 'compactMode')}
                />
                <span className="toggle-slider" />
              </label>
            </div>
          </div>
        </div>

        {/* 3. Notifications Controls */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1.5px solid var(--border-color)',
          borderRadius: 'var(--border-radius-md)',
          padding: '24px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Bell size={18} style={{ color: 'var(--accent)' }} /> Alerts & Notifications
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Email Alerts */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>Email Alerts</h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>Forward critical server exceptions and log errors to admin inbox.</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={notifications.emailAlerts}
                  onChange={() => handleToggle('notifications', 'emailAlerts')}
                />
                <span className="toggle-slider" />
              </label>
            </div>

            {/* System Alerts */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--bg-secondary)', paddingTop: '16px' }}>
              <div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>System Log Alerts</h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>Enable browser dispatch alerts for server warnings and client errors.</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={notifications.systemAlerts}
                  onChange={() => handleToggle('notifications', 'systemAlerts')}
                />
                <span className="toggle-slider" />
              </label>
            </div>

            {/* Order Alerts */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--bg-secondary)', paddingTop: '16px' }}>
              <div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>Fulfillment Alerts</h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>Trigger instant dashboard notifications when a new order is received.</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={notifications.orderAlerts}
                  onChange={() => handleToggle('notifications', 'orderAlerts')}
                />
                <span className="toggle-slider" />
              </label>
            </div>
          </div>
        </div>

        {/* 4. Dashboard visibility configuration */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1.5px solid var(--border-color)',
          borderRadius: 'var(--border-radius-md)',
          padding: '24px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Layout size={18} style={{ color: 'var(--accent)' }} /> Dashboard Configuration
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Show statistics */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>Show Statistics Cards</h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>Display numeric counters for orders, users, and revenue trendlines.</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={dashboard.showStats}
                  onChange={() => handleToggle('dashboard', 'showStats')}
                />
                <span className="toggle-slider" />
              </label>
            </div>

            {/* Show charts */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--bg-secondary)', paddingTop: '16px' }}>
              <div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>Show Area Charts</h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>Include weekly area curves and sales category pies on the dashboard.</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={dashboard.showCharts}
                  onChange={() => handleToggle('dashboard', 'showCharts')}
                />
                <span className="toggle-slider" />
              </label>
            </div>
          </div>
        </div>

        {/* Submit Save */}
        <button
          type="submit"
          className="btn-primary"
          style={{ width: '100%', justifyContent: 'center', height: '48px', marginTop: '10px' }}
        >
          <Save size={18} /> Save Settings & Apply Changes
        </button>
      </form>
    </motion.div>
  );
}

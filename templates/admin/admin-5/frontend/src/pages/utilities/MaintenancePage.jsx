import React, { useState, useEffect } from 'react';
import { HardDrive, Timer, Send, Home } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const MaintenancePage = () => {
  const { navigateTo } = useApp();
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px', maxWidth: 500, margin: '0 auto' }}>
      <HardDrive size={64} color="var(--brand-warning)" style={{ marginBottom: 16 }} />
      <h1 style={{ fontSize: 28, fontWeight: 900 }}>System Under Scheduled Maintenance</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: 14, margin: '12px 0 24px 0' }}>
        We are upgrading our MySQL database cluster and Spring Boot REST API endpoints. Please check back shortly.
      </p>
      <button className="btn btn-primary" onClick={() => navigateTo('dashboards', 'overview')}>
        <Home size={16} /> Return to Home
      </button>
    </div>
  );
};

export const ComingSoonPage = () => {
  const { addToast, navigateTo } = useApp();
  const [email, setEmail] = useState('');
  const [time, setTime] = useState({ days: 12, hours: 8, mins: 42, secs: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => ({
        ...prev,
        secs: prev.secs > 0 ? prev.secs - 1 : 59
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    addToast('Subscribed for launch updates!', 'success');
    setEmail('');
  };

  return (
    <div style={{ textAlign: 'center', padding: '60px 20px', maxWidth: 600, margin: '0 auto' }}>
      <Timer size={64} color="var(--brand-primary)" style={{ marginBottom: 16 }} />
      <h1 style={{ fontSize: 32, fontWeight: 900 }}>TS Smart Admin v3.0 Launching Soon</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: 14, margin: '12px 0 24px 0' }}>
        We are building revolutionary AI-assisted analytics modules.
      </p>

      {/* Countdown Timer */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
        {Object.entries(time).map(([label, val]) => (
          <div key={label} className="glass-card" style={{ padding: '12px 20px', width: 90 }}>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: 'var(--brand-primary)' }}>{val}</h2>
            <span style={{ fontSize: 11, textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: 12, maxWidth: 400, margin: '0 auto' }}>
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ flex: 1, padding: '10px 14px', borderRadius: 8, border: '1px solid var(--border-color)', background: 'var(--bg-subtle)', color: 'var(--text-primary)', outline: 'none' }}
        />
        <button type="submit" className="btn btn-primary"><Send size={16} /> Notify Me</button>
      </form>
    </div>
  );
};

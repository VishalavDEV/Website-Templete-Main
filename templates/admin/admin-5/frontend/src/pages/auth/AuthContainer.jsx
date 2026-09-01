import React, { useState } from 'react';
import { Key, UserPlus, Lock, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AuthContainer = () => {
  const { activePage, navigateTo, addToast } = useApp();

  const [email, setEmail] = useState('admin@tssmartadmin.io');
  const [password, setPassword] = useState('password123');
  const [code2fa, setCode2fa] = useState('');

  const authView = activePage; // login, register, forgot-password, verify-2fa, lock-screen

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authView === 'login') {
      addToast('Authentication successful! Welcome to TS Smart Admin.', 'success');
      navigateTo('dashboards', 'overview');
    } else if (authView === 'register') {
      addToast('Account created successfully! Please sign in.', 'success');
      navigateTo('auth', 'login');
    } else if (authView === 'forgot-password') {
      addToast('Password reset link sent to your email.', 'info');
      navigateTo('auth', 'login');
    } else if (authView === 'verify-2fa') {
      addToast('2FA verification confirmed!', 'success');
      navigateTo('dashboards', 'overview');
    } else if (authView === 'lock-screen') {
      addToast('Screen unlocked', 'success');
      navigateTo('dashboards', 'overview');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', background: 'var(--bg-main)' }}>
      {/* Left Brand Split Panel */}
      <div style={{ flex: 1, background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', color: '#ffffff', padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40 }}>
            <div style={{ width: 44, height: 44, background: '#ffffff', color: '#4f46e5', fontWeight: 900, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
              TS
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800 }}>TS Smart Admin</h2>
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            Next-Generation Enterprise Admin Portal & Analytics
          </h1>
          <p style={{ fontSize: 16, opacity: 0.9, maxWidth: 500, lineHeight: 1.6 }}>
            Powered by React, Java Spring Boot REST APIs, and MySQL Database persistence. Modern flat & glass aesthetic with dual-panel navigation.
          </p>
        </div>

        {/* Quick Auth Switcher Bar */}
        <div style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', padding: 16, borderRadius: 12, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ width: '100%', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', opacity: 0.9 }}>Demo Auth Views:</span>
          {['login', 'register', 'forgot-password', 'verify-2fa', 'lock-screen'].map(v => (
            <button
              key={v}
              onClick={() => navigateTo('auth', v)}
              style={{
                background: authView === v ? '#ffffff' : 'rgba(255, 255, 255, 0.2)',
                color: authView === v ? '#4f46e5' : '#ffffff',
                border: 'none',
                padding: '6px 12px',
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              {v.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Right Form Split Panel */}
      <div style={{ width: 500, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--bg-surface)' }}>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 26, fontWeight: 800 }}>
            {authView === 'login' && 'Sign In to Account'}
            {authView === 'register' && 'Create New Account'}
            {authView === 'forgot-password' && 'Forgot Password'}
            {authView === 'verify-2fa' && 'Two-Factor Authentication'}
            {authView === 'lock-screen' && 'Screen Locked'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginTop: 4 }}>
            Enter your security credentials to access TS Smart Admin.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {authView === 'lock-screen' && (
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <img src="/assets/avatar_alex.jpg" alt="Alex Morgan" style={{ width: 80, height: 80, borderRadius: '50%', marginBottom: 10 }} />
              <h3 style={{ fontSize: 16, fontWeight: 700 }}>Alex Morgan</h3>
              <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>alex.morgan@tssmartadmin.io</p>
            </div>
          )}

          {authView !== 'verify-2fa' && authView !== 'lock-screen' && (
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
          )}

          {authView !== 'forgot-password' && authView !== 'verify-2fa' && (
            <div className="form-group">
              <label>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
          )}

          {authView === 'verify-2fa' && (
            <div className="form-group">
              <label>6-Digit Authenticator Code</label>
              <input type="text" placeholder="e.g. 482910" value={code2fa} onChange={e => setCode2fa(e.target.value)} required />
            </div>
          )}

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 16, padding: 12 }}>
            Continue <ArrowRight size={16} />
          </button>
        </form>

        <div style={{ marginTop: 24, textAlign: 'center', fontSize: 13 }}>
          {authView === 'login' && (
            <p>Don't have an account? <button onClick={() => navigateTo('auth', 'register')} style={{ color: 'var(--brand-primary)', fontWeight: 700 }}>Register</button></p>
          )}
          {authView === 'register' && (
            <p>Already have an account? <button onClick={() => navigateTo('auth', 'login')} style={{ color: 'var(--brand-primary)', fontWeight: 700 }}>Sign In</button></p>
          )}
        </div>
      </div>
    </div>
  );
};

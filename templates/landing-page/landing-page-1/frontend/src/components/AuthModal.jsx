import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, Lock, Mail, User, Sparkles } from 'lucide-react';
import './AuthModal.css';

export default function AuthModal({ isOpen, onClose, initialMode = 'signup' }) {
  const [mode, setMode] = useState(initialMode); // 'signin' or 'signup'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setMode(initialMode);
    setSuccess(false);
  }, [initialMode, isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setName('');
        setEmail('');
        setPassword('');
      }, 1600);
    }, 800);
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Glow Effects */}
        <div className="auth-modal-glow glow-1"></div>
        <div className="auth-modal-glow glow-2"></div>

        {/* Close Button */}
        <button className="auth-modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Header Tabs */}
        <div className="auth-modal-header">
          <div className="auth-modal-logo">
            <svg width="24" height="24" viewBox="0 0 32 32">
              <defs>
                <linearGradient id="modal-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <path fill="url(#modal-logo-grad)" d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-2-8h4v4h-4z" />
            </svg>
            <span>Flowly AI</span>
          </div>

          <div className="auth-mode-tabs">
            <button
              type="button"
              className={`auth-tab ${mode === 'signup' ? 'active' : ''}`}
              onClick={() => { setMode('signup'); setSuccess(false); }}
            >
              Get Started
            </button>
            <button
              type="button"
              className={`auth-tab ${mode === 'signin' ? 'active' : ''}`}
              onClick={() => { setMode('signin'); setSuccess(false); }}
            >
              Sign In
            </button>
          </div>
        </div>

        {success ? (
          <div className="auth-modal-success">
            <div className="auth-success-icon">
              <CheckCircle2 size={42} color="#10b981" />
            </div>
            <h3>{mode === 'signup' ? 'Welcome to Flowly AI!' : 'Welcome Back!'}</h3>
            <p>
              {mode === 'signup' 
                ? `Your workspace token has been generated for ${email}. Redirecting...`
                : `Signed in successfully. Syncing your workspace...`}
            </p>
          </div>
        ) : (
          <form className="auth-modal-form" onSubmit={handleSubmit}>
            <div className="auth-title-area">
              <h2>{mode === 'signup' ? 'Start your 14-day free trial' : 'Sign in to your account'}</h2>
              <p>{mode === 'signup' ? 'No credit card required. Instant team setup.' : 'Continue where you left off.'}</p>
            </div>

            {mode === 'signup' && (
              <div className="auth-field">
                <label>Full Name</label>
                <div className="auth-input-wrap">
                  <User size={16} className="auth-input-icon" />
                  <input
                    type="text"
                    required
                    placeholder="Sarah Connor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="auth-field">
              <label>Work Email</label>
              <div className="auth-input-wrap">
                <Mail size={16} className="auth-input-icon" />
                <input
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="auth-field">
              <label>Password</label>
              <div className="auth-input-wrap">
                <Lock size={16} className="auth-input-icon" />
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary auth-submit-btn" disabled={loading}>
              {loading ? (
                <span className="auth-spinner"></span>
              ) : (
                <>
                  <span>{mode === 'signup' ? 'Create Free Workspace' : 'Sign In'}</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>

            {/* Quick Demo Credentials */}
            <div className="auth-quick-login">
              <button
                type="button"
                className="auth-quick-link"
                onClick={() => {
                  setEmail('demo@flowly.ai');
                  setPassword('Flowly2026!');
                  setName('Demo User');
                }}
              >
                <Sparkles size={13} />
                <span>Fill with demo credentials</span>
              </button>
            </div>

            <div className="auth-terms">
              By proceeding, you agree to Flowly AI's Terms of Service and Privacy Policy.
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

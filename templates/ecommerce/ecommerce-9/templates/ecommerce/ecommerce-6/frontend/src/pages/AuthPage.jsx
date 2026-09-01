import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { KeyRound, Mail, User, ShieldAlert, ArrowRightLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AuthPage = () => {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') || '';

  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (isLogin) {
      const result = await login(username, password);
      setLoading(false);
      if (result.success) {
        navigate(redirect ? `/${redirect}` : '/');
      } else {
        setError(result.error);
      }
    } else {
      if (password !== confirmPassword) {
        setLoading(false);
        setError("Passwords do not match");
        return;
      }
      const result = await register(username, email, password);
      setLoading(false);
      if (result.success) {
        setIsLogin(true);
        setError(null);
        alert('Account created! You can now log in.');
      } else {
        setError(result.error);
      }
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 5% 50px 5%',
        background: 'var(--bg-primary)',
        position: 'relative',
        perspective: '1000px' // Required for 3D card flipping
      }}
    >
      <div className="ambient-glow" style={{ top: '25%', left: '30%', opacity: 0.12 }} />

      <motion.div
        animate={{ rotateY: isLogin ? 0 : 180 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '460px',
          borderRadius: '8px',
          padding: '3rem 2.5rem',
          boxShadow: 'var(--shadow-premium)',
          transformStyle: 'preserve-3d',
          position: 'relative'
        }}
      >
        {/* We hide the backface when flipped so inputs don't render reversed */}
        <div style={{ backfaceVisibility: 'hidden', transform: isLogin ? 'none' : 'rotateY(180deg)' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              {isLogin ? 'WELCOME BACK' : 'JOIN THE ARCHIVE'}
            </span>
            <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', marginTop: '0.5rem' }}>
              {isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {error && (
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  alignItems: 'center',
                  background: 'rgba(255, 77, 77, 0.1)',
                  border: '1px solid rgba(255, 77, 77, 0.2)',
                  color: '#ff4d4d',
                  padding: '0.75rem 1rem',
                  borderRadius: '4px',
                  fontSize: '0.85rem'
                }}
              >
                <ShieldAlert size={16} />
                <span>{error}</span>
              </div>
            )}

            {/* Username Input */}
            <div style={{ position: 'relative' }}>
              <User size={16} style={{ position: 'absolute', left: '1.25rem', top: '1.25rem', color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="premium-input"
                style={{ paddingLeft: '3rem' }}
              />
            </div>

            {/* Email Input (Only for Sign Up) */}
            {!isLogin && (
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={{ position: 'absolute', left: '1.25rem', top: '1.25rem', color: 'var(--text-muted)' }} />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="premium-input"
                  style={{ paddingLeft: '3rem' }}
                />
              </div>
            )}

            {/* Password Input */}
            <div style={{ position: 'relative' }}>
              <KeyRound size={16} style={{ position: 'absolute', left: '1.25rem', top: '1.25rem', color: 'var(--text-muted)' }} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="premium-input"
                style={{ paddingLeft: '3rem' }}
              />
            </div>

            {isLogin && (
              <div style={{ textAlign: 'right', marginTop: '-0.5rem' }}>
                <Link to="/forgot-password" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'underline' }}>
                  Forgot Password?
                </Link>
              </div>
            )}

            {/* Confirm Password (Only for Sign Up) */}
            {!isLogin && (
              <div style={{ position: 'relative' }}>
                <KeyRound size={16} style={{ position: 'absolute', left: '1.25rem', top: '1.25rem', color: 'var(--text-muted)' }} />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="premium-input"
                  style={{ paddingLeft: '3rem' }}
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }}
            >
              {loading ? 'PROCESSING...' : isLogin ? 'SIGN IN' : 'REGISTER'}
            </button>
          </form>

          {/* Toggle */}
          <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
            </span>
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
              }}
              style={{
                color: 'var(--accent-gold)',
                fontWeight: '600',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: '0',
                textDecoration: 'underline'
              }}
            >
              {isLogin ? 'Create Account' : 'Sign In'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;

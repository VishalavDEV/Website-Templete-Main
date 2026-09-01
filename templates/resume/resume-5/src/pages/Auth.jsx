import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { api } from '../services/api';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') || '/dashboard';

  useEffect(() => {
    // If user is already logged in, redirect them directly
    if (api.getCurrentUser()) {
      navigate(redirect);
    }
  }, [navigate, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (isLogin) {
      api.login(email, password)
        .then(res => {
          setLoading(false);
          onLogin(res);
          navigate(redirect);
        })
        .catch(err => {
          setLoading(false);
          setError(err.message || 'Login failed. Please verify your email and password.');
        });
    } else {
      if (!name) {
        setError('Please enter your name.');
        setLoading(false);
        return;
      }
      api.register(name, email, password)
        .then(() => {
          setLoading(false);
          setSuccess('Account created successfully! Please sign in using your credentials.');
          setIsLogin(true);
          // Clear password and name
          setPassword('');
          setName('');
        })
        .catch(err => {
          setLoading(false);
          setError(err.message || 'Registration failed. Try again.');
        });
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 0',
      animation: 'fadeIn 0.5s ease-out'
    }}>
      <div className="glass-panel" style={{
        maxWidth: 420,
        width: '100%',
        padding: 40,
        background: 'white',
        borderRadius: 20
      }}>
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <img src="logo.jpg" alt="TechnoSprint Templates" style={{ height: 35, marginBottom: 20, borderRadius: '4px' }} />
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>
            {isLogin ? 'Sign In to Your Account' : 'Create an Account'}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: 5 }}>
            {isLogin ? 'Access your template downloads and license keys' : 'Get started downloading free and premium templates'}
          </p>
        </div>

        {error && (
          <div style={{
            background: '#fee2e2',
            color: '#ef4444',
            padding: '10px 14px',
            borderRadius: 8,
            fontSize: '0.85rem',
            marginBottom: 20,
            fontWeight: 500,
            border: '1px solid #fca5a5'
          }}>
            {error}
          </div>
        )}

        {success && (
          <div style={{
            background: '#ecfdf5',
            color: '#10b981',
            padding: '10px 14px',
            borderRadius: 8,
            fontSize: '0.85rem',
            marginBottom: 20,
            fontWeight: 500,
            border: '1px solid #a7f3d0'
          }}>
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group" style={{ position: 'relative' }}>
              <label className="form-label">Full Name</label>
              <div style={{ position: 'relative' }}>
                <User size={16} color="#94a3b8" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  className="form-control"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ paddingLeft: 40 }}
                  required
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color="#94a3b8" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="email"
                className="form-control"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ paddingLeft: 40 }}
                required
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 25 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <label className="form-label" style={{ marginBottom: 0 }}>Password</label>
              {isLogin && (
                <a href="#" style={{ fontSize: '0.75rem', color: 'var(--primary-color)', fontWeight: 600 }}>
                  Forgot password?
                </a>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="#94a3b8" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="password"
                className="form-control"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingLeft: 40 }}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
            style={{ width: '100%', padding: '12px 0', borderRadius: 8 }}
          >
            {loading ? 'Authenticating...' : isLogin ? 'Sign In' : 'Create Account'}
            {!loading && <ArrowRight size={16} />}
          </button>
        </form>

        <div style={{
          textAlign: 'center',
          marginTop: 25,
          fontSize: '0.85rem',
          color: 'var(--text-muted)'
        }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
              setSuccess('');
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary-color)',
              fontWeight: 600,
              cursor: 'pointer',
              padding: 0,
              fontSize: 'inherit'
            }}
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}

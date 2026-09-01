import React, { useState } from 'react';
import { X, Lock, Mail, User, ShieldCheck } from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isSignUp ? 'Account created successfully' : 'Signed in successfully');
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(15, 9, 6, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2500,
        padding: '1.5rem',
        animation: 'fadeInSimple 0.3s ease-out'
      }}
    >
      <div 
        className="glass-card-dark"
        style={{
          width: '100%',
          maxWidth: '450px',
          borderRadius: '4px',
          border: '1px solid rgba(194, 155, 79, 0.4)',
          position: 'relative',
          padding: '2.5rem',
          boxShadow: '0 25px 50px rgba(0,0,0,0.6)'
        }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--color-sandstone-light)',
            cursor: 'pointer',
            opacity: 0.7,
            transition: 'var(--transition-smooth)'
          }}
          onMouseEnter={(e) => e.target.style.opacity = '1'}
          onMouseLeave={(e) => e.target.style.opacity = '0.7'}
        >
          <X size={22} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ 
            fontFamily: 'var(--font-serif-sc)', 
            color: 'var(--color-brass)', 
            fontSize: '0.8rem', 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase' 
          }}>
            {isSignUp ? 'Create Guest Profile' : 'Guest Registry'}
          </span>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--color-ivory)', marginTop: '0.3rem' }}>
            {isSignUp ? 'Join Ananthara' : 'Sign In'}
          </h3>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {isSignUp && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--color-brass)' }}>
                Full Name
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <User size={16} style={{ position: 'absolute', left: '12px', color: 'var(--color-brass)' }} />
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Maharaja Pratap Singh"
                  required
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(194, 155, 79, 0.25)',
                    padding: '0.7rem 1rem 0.7rem 2.5rem',
                    color: 'var(--color-ivory)',
                    outline: 'none',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--color-brass)' }}>
              Email Address
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Mail size={16} style={{ position: 'absolute', left: '12px', color: 'var(--color-brass)' }} />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="guest@royalfamily.com"
                required
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(194, 155, 79, 0.25)',
                  padding: '0.7rem 1rem 0.7rem 2.5rem',
                  color: 'var(--color-ivory)',
                  outline: 'none',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--color-brass)' }}>
              Secret Password
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Lock size={16} style={{ position: 'absolute', left: '12px', color: 'var(--color-brass)' }} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(194, 155, 79, 0.25)',
                  padding: '0.7rem 1rem 0.7rem 2.5rem',
                  color: 'var(--color-ivory)',
                  outline: 'none',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem'
                }}
              />
            </div>
          </div>

          {!isSignUp && (
            <div style={{ textAlign: 'right' }}>
              <a href="#" style={{ fontSize: '0.75rem', color: 'var(--color-brass)', opacity: 0.8 }} onMouseEnter={(e) => e.target.style.opacity = '1'} onMouseLeave={(e) => e.target.style.opacity = '0.8'}>
                Forgot Password?
              </a>
            </div>
          )}

          <button 
            type="submit" 
            className="btn-gold" 
            style={{ 
              marginTop: '0.5rem', 
              padding: '0.9rem 0', 
              fontSize: '0.9rem',
              display: 'block',
              width: '100%',
              textAlign: 'center'
            }}
          >
            {isSignUp ? 'REGISTER ACCOUNT' : 'SIGN IN TO PORTAL'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--color-sandstone-light)', opacity: 0.8 }}>
          {isSignUp ? 'Already have a profile?' : 'New to Ananthara?'}
          {' '}
          <button 
            onClick={() => setIsSignUp(!isSignUp)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-brass)',
              fontWeight: 500,
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            {isSignUp ? 'Sign In Here' : 'Create Profile'}
          </button>
        </div>
      </div>
    </div>
  );
}

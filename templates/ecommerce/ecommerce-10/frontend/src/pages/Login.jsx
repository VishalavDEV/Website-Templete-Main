import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Lock, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { EcomContext } from '../context/EcomContext';

const Login = () => {
  const { login } = useContext(EcomContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;

    setLoading(true);
    setErrorMsg('');
    
    const res = await login(email, password);
    setLoading(false);

    if (res.success) {
      navigate('/account');
    } else {
      setErrorMsg(res.message || 'Invalid email or password');
      setShake(true);
      setTimeout(() => setShake(false), 500); // Reset shake
    }
  };

  return (
    <div
      style={{
        padding: '120px 40px 80px 40px',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          backgroundColor: '#fff',
          borderRadius: '30px',
          border: '1px solid rgba(124, 92, 255, 0.15)',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(124, 92, 255, 0.05)',
        }}
        className="glass-card"
      >
        {/* Left Side: Animated Brand Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #130e26 0%, #3a2b72 100%)',
            padding: '50px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Floating particle stars */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="animated-float"
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                top: `${20 + i * 20}%`,
                left: `${15 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}

          <motion.div
            className="animated-float"
            style={{ color: '#eae3ff', display: 'flex', marginBottom: '20px', filter: 'drop-shadow(0 0 15px rgba(124,92,255,0.4))' }}
          >
            <ShoppingBag size={80} strokeWidth={1.5} />
          </motion.div>

          <h3 style={{ fontFamily: 'Outfit', fontSize: '1.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>
            LAVENDER SHOP
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#8a7db3', marginTop: '8px', lineHeight: '1.5', maxWidth: '240px' }}>
            Sign in to access order history, tracking timelines, and saved wishlists.
          </p>
        </div>

        {/* Right Side: Form */}
        <motion.div
          animate={shake ? { x: [-10, 10, -10, 10, -5, 5, 0] } : {}}
          transition={{ duration: 0.4 }}
          style={{ padding: '50px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontFamily: 'Outfit', fontSize: '1.75rem', color: '#1e133e', fontWeight: 800 }}>Welcome Back</h2>
            <p style={{ color: '#8a7db3', fontSize: '0.88rem', marginTop: '4px' }}>Sign in to continue your journey.</p>
          </div>

          {errorMsg && (
            <div style={{ padding: '12px 16px', backgroundColor: '#ffcbc1', border: '1px solid #ff4d4d', borderRadius: '12px', fontSize: '0.82rem', color: '#ff4d4d', fontWeight: 500, marginBottom: '20px' }}>
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.85rem', color: '#5c4e8c', fontWeight: 500 }}>Email Address</label>
              <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid rgba(124,92,255,0.15)', borderRadius: '12px', padding: '12px 16px' }}>
                <Mail size={16} style={{ color: '#8a7db3', marginRight: '10px' }} />
                <input
                  type="email"
                  placeholder="princess@lavender.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ border: 'none', outline: 'none', fontSize: '0.9rem', width: '100%' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.85rem', color: '#5c4e8c', fontWeight: 500 }}>Password</label>
              <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid rgba(124,92,255,0.15)', borderRadius: '12px', padding: '12px 16px' }}>
                <Lock size={16} style={{ color: '#8a7db3', marginRight: '10px' }} />
                <input
                  type="password"
                  placeholder="password123"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ border: 'none', outline: 'none', fontSize: '0.9rem', width: '100%' }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="premium-btn"
              style={{ width: '100%', justifyContent: 'center', marginTop: '10px', padding: '14px' }}
            >
              {loading ? 'Verifying...' : <>Sign In <ArrowRight size={16} /></>}
            </button>
          </form>

          <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '0.85rem', color: '#5c4e8c' }}>
            Don't have an account?{' '}
            <Link to="/register" style={{ color: '#7c5cff', fontWeight: 600, textDecoration: 'none' }}>
              Sign Up
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;

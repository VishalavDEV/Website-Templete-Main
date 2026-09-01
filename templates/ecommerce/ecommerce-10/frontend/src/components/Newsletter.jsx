import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;

    setLoading(true);
    // Simulate API registration
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '50px 30px',
        borderRadius: '24px',
        backgroundColor: '#fff',
        border: '1px solid rgba(124, 92, 255, 0.15)',
        boxShadow: '0 20px 50px rgba(124, 92, 255, 0.05)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
      className="glass-card"
    >
      {/* Decorative stars */}
      <div style={{ position: 'absolute', top: '15px', right: '15px', color: 'rgba(124, 92, 255, 0.15)' }}>
        <Sparkles size={24} />
      </div>
      <div style={{ position: 'absolute', bottom: '15px', left: '15px', color: 'rgba(124, 92, 255, 0.15)' }}>
        <Sparkles size={20} />
      </div>

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <h3 style={{ fontFamily: 'Outfit', fontSize: '2rem', color: '#1e133e', fontWeight: 700 }}>
          Stay Ahead of the Style
        </h3>
        <p style={{ fontSize: '0.95rem', color: '#5c4e8c', maxWidth: '500px', lineHeight: '1.6' }}>
          Subscribe to our newsletter to receive weekly drops, limited edition sales access, and styling tips from the Lavender Universe.
        </p>

        <AnimatePresence mode="wait">
          {!success ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{
                width: '100%',
                maxWidth: '520px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#faf8ff',
                border: '1.5px solid rgba(124, 92, 255, 0.12)',
                borderRadius: '50px',
                padding: '6px 6px 6px 18px',
                marginTop: '16px',
              }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  flex: 1,
                  fontSize: '0.95rem',
                  fontFamily: 'Inter',
                  color: '#1e133e',
                }}
              />
              <button
                type="submit"
                disabled={loading}
                className="premium-btn"
                style={{
                  padding: '12px 24px',
                  fontSize: '0.85rem',
                  borderRadius: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                {loading ? (
                  <span className="spinner" style={{ width: '16px', height: '16px', border: '2px solid #fff', borderTop: '2px solid transparent', borderRadius: '50%', display: 'inline-block', animation: 'spin 1s linear infinite' }} />
                ) : (
                  <>
                    Subscribe <Send size={14} />
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              style={{
                marginTop: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <CheckCircle2 size={48} style={{ color: '#00cc66', filter: 'drop-shadow(0 0 10px rgba(0,204,102,0.2))' }} />
              <h4 style={{ fontFamily: 'Outfit', fontSize: '1.25rem', color: '#1e133e', fontWeight: 600 }}>
                You're Subscribed!
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#5c4e8c' }}>
                Welcome to the universe. Keep an eye on your inbox!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Newsletter;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, KeyRound, ShieldCheck, ShieldAlert, Key } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1: Email Request, 2: OTP Entry, 3: Reset Pass
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setError(null);
    // Simulate sending OTP
    setStep(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (otp !== '123456') {
      setError('Invalid OTP code. The test code is 123456.');
      return;
    }
    setStep(3);
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Simulate saving new password
    setSuccess(true);
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
        position: 'relative'
      }}
    >
      <div className="ambient-glow" style={{ top: '30%', left: '20%', opacity: 0.1 }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '440px',
          borderRadius: '8px',
          padding: '3rem 2.5rem',
          boxShadow: 'var(--shadow-premium)'
        }}
      >
        <AnimatePresence mode="wait">
          {success ? (
            /* Phase 4: Success confirmation */
            <motion.div
              key="success-screen"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}
            >
              <ShieldCheck size={48} color="var(--accent-gold)" />
              <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)' }}>PASSWORD RESET</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Your credential logs have been modified. You can now authenticate using your new password.
              </p>
              <Link to="/auth" className="btn-primary" style={{ width: '100%', display: 'block', textAlignment: 'center' }}>
                RETURN TO SIGN IN
              </Link>
            </motion.div>
          ) : (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header Details */}
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span style={{ color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                  RECOVER ARCHIVE
                </span>
                <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', marginTop: '0.5rem' }}>
                  {step === 1 ? 'FORGOT PASSWORD' : step === 2 ? 'ENTER OTP' : 'RESET PASSWORD'}
                </h2>
              </div>

              {/* Error messages */}
              {error && (
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', background: 'rgba(255, 77, 77, 0.05)', border: '1px solid rgba(255, 77, 77, 0.1)', color: '#ff4d4d', padding: '0.75rem 1rem', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  <ShieldAlert size={16} />
                  <span>{error}</span>
                </div>
              )}

              {/* Steps forms */}
              {step === 1 && (
                /* Step 1 Form: Request Email */
                <form onSubmit={handleEmailSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, textAlign: 'center', marginBottom: '0.5rem' }}>
                    Provide your registered email address below. We will simulate sending a verification code log.
                  </p>
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
                  <MagneticButton type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    SEND CODE LOG
                  </MagneticButton>
                </form>
              )}

              {step === 2 && (
                /* Step 2 Form: Code validation */
                <form onSubmit={handleOtpSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-glass)', borderRadius: '4px', padding: '1rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
                    TEST VERIFICATION CODE SENT TO {email.toUpperCase()}: <span style={{ fontWeight: '800', fontFamily: 'monospace' }}>123456</span>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <Key size={16} style={{ position: 'absolute', left: '1.25rem', top: '1.25rem', color: 'var(--text-muted)' }} />
                    <input
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                      maxLength={6}
                      className="premium-input"
                      style={{ paddingLeft: '3rem', letterSpacing: '0.2em', textAlign: 'center', fontWeight: '800' }}
                    />
                  </div>
                  <MagneticButton type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    VERIFY CODE
                  </MagneticButton>
                </form>
              )}

              {step === 3 && (
                /* Step 3 Form: New Password setting */
                <form onSubmit={handleResetSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ position: 'relative' }}>
                    <KeyRound size={16} style={{ position: 'absolute', left: '1.25rem', top: '1.25rem', color: 'var(--text-muted)' }} />
                    <input
                      type="password"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      className="premium-input"
                      style={{ paddingLeft: '3rem' }}
                    />
                  </div>
                  <div style={{ position: 'relative' }}>
                    <KeyRound size={16} style={{ position: 'absolute', left: '1.25rem', top: '1.25rem', color: 'var(--text-muted)' }} />
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="premium-input"
                      style={{ paddingLeft: '3rem' }}
                    />
                  </div>
                  <MagneticButton type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    RESET PASSWORD
                  </MagneticButton>
                </form>
              )}

              {/* Cancel link */}
              <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem' }}>
                <Link to="/auth" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>
                  Cancel & Back to Sign In
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;

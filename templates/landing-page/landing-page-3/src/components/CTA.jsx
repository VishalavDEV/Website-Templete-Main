import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CTA({ onOpenModal, onShowToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleQuickDeploy = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      if (onShowToast) onShowToast('⚠️ Please enter a valid email address');
      return;
    }

    setSubscribed(true);
    confetti({
      particleCount: 80,
      spread: 85,
      origin: { y: 0.7 },
      colors: ['#00E5FF', '#8A2BE2', '#00FFA3', '#FF007F']
    });

    if (onShowToast) {
      onShowToast(`🚀 Free cluster credentials sent to ${email}!`);
    }
  };

  return (
    <section id="cta" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'relative',
            borderRadius: '34px',
            padding: 'clamp(44px, 6vw, 76px) clamp(24px, 5vw, 64px)',
            background: 'linear-gradient(135deg, rgba(16, 22, 42, 0.95) 0%, rgba(6, 8, 16, 0.98) 100%)',
            border: '1px solid rgba(0, 229, 255, 0.45)',
            boxShadow: '0 28px 85px rgba(0, 0, 0, 0.75), 0 0 55px rgba(0, 229, 255, 0.25)',
            textAlign: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Animated Internal Glow Orbs */}
          <div
            className="glow-orb glow-orb-cyan"
            style={{
              width: '420px',
              height: '420px',
              top: '-110px',
              left: '50%',
              transform: 'translateX(-50%)',
              opacity: 0.45,
            }}
          />
          <div
            className="glow-orb glow-orb-purple"
            style={{
              width: '420px',
              height: '420px',
              bottom: '-130px',
              right: '10%',
              opacity: 0.4,
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '740px', margin: '0 auto' }}>
            <div className="badge-pill badge-pill-pulse" style={{ marginBottom: '26px' }}>
              <Zap size={14} />
              <span>INSTANT ONBOARDING IN 60 SECONDS</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.3rem, 4.6vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.14,
                color: '#FFFFFF',
                marginBottom: '22px',
              }}
            >
              Start Building with <br />
              <span className="text-gradient-neon">Sub-Millisecond Neural Cloud</span>
            </h2>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.22rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '38px',
              }}
            >
              Claim ₹25,000 in free inference credits today. No credit card required. Deploy your first model cluster to 250+ global edge nodes in seconds.
            </p>

            {/* Email Quick Action Form */}
            {!subscribed ? (
              <form
                onSubmit={handleQuickDeploy}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  justifyContent: 'center',
                  maxWidth: '560px',
                  margin: '0 auto 30px auto',
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: '1 1 280px',
                    padding: '16px 22px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    color: '#FFFFFF',
                    fontSize: '0.96rem',
                    outline: 'none',
                    backdropFilter: 'blur(12px)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--neon-cyan)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.16)')}
                />

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '16px 30px', fontSize: '1rem', borderRadius: '14px' }}
                >
                  <span>Claim ₹25,000 Free</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: '20px 24px',
                  borderRadius: '18px',
                  background: 'rgba(0, 255, 163, 0.12)',
                  border: '1px solid rgba(0, 255, 163, 0.45)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '30px',
                  color: 'var(--neon-emerald)',
                  fontWeight: 600,
                  boxShadow: '0 0 25px rgba(0, 255, 163, 0.2)',
                }}
              >
                <CheckCircle2 size={24} />
                <span>Cluster provisioning initiated! Check your inbox for API keys.</span>
              </motion.div>
            )}

            {/* Guarantees */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '26px',
                fontSize: '0.86rem',
                color: 'var(--text-muted)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--neon-emerald)" />
                <span>No Credit Card Required</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--neon-emerald)" />
                <span>Zero Cold-Start Guarantee</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="var(--neon-cyan)" />
                <span>SOC2 Type II Certified</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

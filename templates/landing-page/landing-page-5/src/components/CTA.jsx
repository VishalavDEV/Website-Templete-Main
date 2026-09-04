import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CTA() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleLaunch = (e) => {
    if (e) e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#c87873', '#e08a85', '#dfba89', '#fcdbd8', '#10b981'],
      });
    } catch (e) {
      // Graceful fallback
    }
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Radiant Pulsing Background Rose Orbs */}
      <div
        className="ambient-glow ambient-rose animate-pulse-glow"
        style={{ top: '-10%', left: '25%', width: 650, height: 650 }}
      />
      <div
        className="ambient-glow ambient-champagne animate-pulse-glow"
        style={{ bottom: '-15%', right: '20%', width: 600, height: 600, animationDelay: '2.5s' }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel cta-glass-panel"
          style={{
            padding: '5rem 2.5rem',
            textAlign: 'center',
            borderRadius: '2.5rem',
            border: '1.5px solid rgba(255, 255, 255, 0.95)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(250, 244, 238, 0.88) 100%)',
            boxShadow: '0 40px 100px -20px rgba(200, 120, 115, 0.25), 0 0 50px rgba(252, 219, 216, 0.45)',
            maxWidth: 1000,
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Pill Badge */}
          <div className="glass-pill" style={{ marginBottom: '1.75rem' }}>
            <Sparkles size={13} color="#c87873" />
            <span>Instant Production Access</span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
              color: '#1e1b18',
            }}
          >
            READY TO CREATE <br />
            <span className="gradient-text-electric">SOMETHING AMAZING?</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.3rem)',
              color: 'var(--text-muted)',
              maxWidth: 620,
              margin: '0 auto 2.5rem auto',
              lineHeight: 1.7,
            }}
          >
            Let's turn your ideas into an unforgettable digital experience. Join thousands of high-velocity engineering and design teams who build with AuraFlow.
          </p>

          {/* Interactive Contact / Get Started Form */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '1.5rem',
                padding: '2rem',
                maxWidth: '540px',
                margin: '0 auto 2.5rem auto',
                color: '#065f46',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                <ShieldCheck size={24} color="#10b981" />
                <span>Thank you! Your request is received.</span>
              </div>
              <p style={{ fontSize: '0.95rem', margin: 0, color: '#047857' }}>
                Our team will reach out to <strong>{email}</strong> within 2 business hours with your personalized onboarding token.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleLaunch}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                maxWidth: '560px',
                margin: '0 auto 2.5rem auto',
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    flex: '1 1 220px',
                    padding: '0.95rem 1.25rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(200, 120, 115, 0.3)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '1rem',
                    outline: 'none',
                    color: '#1e1b18',
                  }}
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: '1 1 220px',
                    padding: '0.95rem 1.25rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(200, 120, 115, 0.3)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '1rem',
                    outline: 'none',
                    color: '#1e1b18',
                  }}
                />
              </div>
              <input
                type="text"
                placeholder="Project requirements or message (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.95rem 1.25rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(200, 120, 115, 0.3)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '1rem',
                  outline: 'none',
                  color: '#1e1b18',
                }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
                style={{
                  padding: '1.05rem 2.5rem',
                  fontSize: '1.05rem',
                  width: '100%',
                  boxShadow: '0 10px 35px rgba(200, 120, 115, 0.35)',
                  cursor: 'pointer',
                }}
              >
                <span>Submit Inquiry & Start Journey</span>
                <ArrowRight size={18} />
              </motion.button>
            </form>
          )}

          {/* Micro Assurances */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
              fontSize: '0.88rem',
              color: 'var(--text-dim)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <ShieldCheck size={16} color="#10b981" />
              <span>14-Day Free Evaluation</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Zap size={16} color="#c87873" />
              <span>Zero Credit Card Required</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <ShieldCheck size={16} color="#10b981" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-glass-panel {
            padding: 3rem 1.25rem !important;
            border-radius: 1.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}

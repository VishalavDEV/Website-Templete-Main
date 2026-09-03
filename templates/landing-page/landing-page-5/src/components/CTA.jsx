import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CTA() {
  const handleLaunch = () => {
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
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
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
          className="glass-panel"
          style={{
            padding: '5.5rem 3rem',
            textAlign: 'center',
            borderRadius: '3rem',
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
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
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
              fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)',
              color: 'var(--text-muted)',
              maxWidth: 620,
              margin: '0 auto 3rem auto',
              lineHeight: 1.7,
            }}
          >
            Let's turn your ideas into an unforgettable digital experience. Join thousands of high-velocity engineering and design teams who build with AuraFlow.
          </p>

          {/* Action CTA Button */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <motion.button
              onClick={handleLaunch}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
              style={{
                padding: '1.1rem 2.85rem',
                fontSize: '1.1rem',
                boxShadow: '0 10px 35px rgba(200, 120, 115, 0.35)',
              }}
            >
              <span>Start Your Journey</span>
              <ArrowRight size={18} />
            </motion.button>
          </div>

          {/* Micro Assurances */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2.5rem',
              flexWrap: 'wrap',
              fontSize: '0.9rem',
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
    </section>
  );
}

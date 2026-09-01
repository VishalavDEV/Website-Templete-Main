import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Sparkles, Flame, Volume2, Trophy } from 'lucide-react';

export default function FinishLine() {
  const [ribbonBroken, setRibbonBroken] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  const handleBreakRibbon = () => {
    setRibbonBroken(true);
    setConfettiActive(true);
    setTimeout(() => setConfettiActive(false), 4000);
  };

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '600px',
      background: 'url("https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1920&q=80") center/cover no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 24px',
      overflow: 'hidden'
    }}>
      {/* Dark Overlay & Red Light Leak */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(9,10,13,0.92) 0%, rgba(21,23,27,0.75) 50%, rgba(9,10,13,0.95) 100%)',
        zIndex: 1
      }} />

      {/* Confetti Explosion Layer when Ribbon is Broken */}
      {confettiActive && (
        <div style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 10,
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 44, 0.4), transparent 70%)',
          animation: 'pulseGlow 1s infinite alternate'
        }} />
      )}

      {/* Interactive Finish Line Structure */}
      <div style={{
        position: 'relative',
        zIndex: 5,
        maxWidth: 'var(--max-width)',
        width: '100%',
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>

        <div className="badge-tag" style={{ marginBottom: '16px' }}>
          <Trophy size={14} /> THE FINISH LINE MOMENT
        </div>

        <h2 className="font-display text-gradient" style={{
          fontSize: 'clamp(3rem, 7vw, 5.5rem)',
          lineHeight: 0.95,
          textTransform: 'uppercase',
          marginBottom: '16px'
        }}>
          CROSS YOUR LINE.
        </h2>

        <p style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          color: 'var(--warm-white)',
          maxWidth: '700px',
          margin: '0 auto 36px auto',
          fontStyle: 'italic',
          opacity: 0.95
        }}>
          “The final meters become the memories you carry forever.”
        </p>

        {/* Finish Line Ribbon Banner Visual */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '720px',
          height: '60px',
          margin: '0 auto 40px auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Ribbon Banner Bar */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '18px',
            background: ribbonBroken 
              ? 'transparent'
              : 'linear-gradient(90deg, #E92B2B 0%, #FF6B2C 50%, #E92B2B 100%)',
            boxShadow: '0 0 25px var(--glow-red)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.5s ease'
          }}>
            {!ribbonBroken ? (
              <span style={{ fontSize: '0.75rem', fontWeight: 900, letterSpacing: '4px', color: '#FFFFFF' }}>
                VAYORA RUNFEST 2026 — FINISH LINE
              </span>
            ) : (
              <div style={{ display: 'flex', gap: '40px', width: '100%', justifyContent: 'space-between', padding: '0 20px' }}>
                <span style={{ background: '#E92B2B', padding: '4px 16px', color: '#FFF', fontWeight: 800, transform: 'rotate(-5deg)' }}>
                  RIBBON BROKEN!
                </span>
                <span style={{ background: '#FF6B2C', padding: '4px 16px', color: '#FFF', fontWeight: 800, transform: 'rotate(5deg)' }}>
                  FINISHER 2026!
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Break Ribbon Interactive Action */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={handleBreakRibbon}
            className="btn-primary"
            style={{ padding: '16px 36px', fontSize: '0.95rem' }}
          >
            <Sparkles size={18} /> {ribbonBroken ? 'CELEBRATE FINISH AGAIN!' : 'SIMULATE BREAKING THE RIBBON'}
          </button>
          <Link to="/register" className="btn-secondary" style={{ padding: '16px 36px', fontSize: '0.95rem' }}>
            <Award size={18} /> CLAIM YOUR FINISHER MEDAL
          </Link>
        </div>

      </div>
    </section>
  );
}

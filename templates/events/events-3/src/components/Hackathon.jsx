import React, { useState } from 'react';
import { hackathonDetails } from '../data/hackathon';
import { Trophy, Terminal, Flame, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Hackathon() {
  const [selectedPrizeIndex, setSelectedPrizeIndex] = useState(0); // 0 = 1st place default

  return (
    <section id="hackathon" className="section-padding">
      <div className="section-header">
        <div className="section-tag">
          <Terminal size={14} /> 36-Hour Hackathon Zone
        </div>
        <h2 className="section-title">
          VERTEX <span className="text-gradient">Quantum-Bot Hack</span>
        </h2>
        <p className="section-subtitle">
          {hackathonDetails.tagline}. Build live prototypes using on-site bipedal hardware rigs, drone domes, and quantum computing simulators.
        </p>
      </div>

      {/* Main Hackathon Intro Card */}
      <div
        className="glass-card"
        style={{
          padding: '40px',
          borderRadius: '24px',
          marginBottom: '60px',
          border: '1px solid rgba(138, 43, 226, 0.4)',
          background: 'linear-gradient(135deg, rgba(16, 24, 40, 0.8) 0%, rgba(112, 0, 255, 0.12) 100%)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: 'rgba(255, 0, 127, 0.15)',
              border: '1px solid rgba(255, 0, 127, 0.3)',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: '#ff007f',
              marginBottom: '16px'
            }}
          >
            <Flame size={14} /> Total Prize Pool: {hackathonDetails.totalPrize}
          </div>

          <h3 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.2 }}>
            Build The Next Leap in Autonomous & Quantum Tech
          </h3>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
            {hackathonDetails.description}
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#register" className="btn-primary">
              Register Team <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Past Hackathon Moments Photo Trio */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {hackathonDetails.gallery.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                height: idx === 0 ? '220px' : '100px',
                gridColumn: idx === 0 ? 'span 2' : 'span 1',
                position: 'relative'
              }}
            >
              <img src={item.url} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '8px 12px',
                  background: 'linear-gradient(180deg, transparent 0%, rgba(8,11,18,0.9) 100%)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#fff'
                }}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prize Cards Grid with Click Selection */}
      <div className="grid-3" style={{ marginBottom: '60px' }}>
        {hackathonDetails.prizes.map((prize, idx) => {
          const isSelected = selectedPrizeIndex === idx;

          return (
            <div
              key={idx}
              className="glass-card"
              onClick={() => setSelectedPrizeIndex(idx)}
              style={{
                padding: '36px 32px',
                borderRadius: '24px',
                textAlign: 'center',
                cursor: 'pointer',
                border: isSelected ? '2.5px solid var(--accent-cyan)' : '1px solid var(--glass-border)',
                boxShadow: isSelected ? '0 0 35px rgba(0, 240, 255, 0.4)' : 'var(--shadow-glass)',
                transform: isSelected ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                background: isSelected ? 'var(--bg-card-hover)' : 'var(--bg-card)'
              }}
            >
              {/* Selected Badge Indicator */}
              {isSelected && (
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: 'var(--accent-cyan)',
                    background: 'rgba(0, 240, 255, 0.12)',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(0, 240, 255, 0.3)'
                  }}
                >
                  <CheckCircle2 size={12} color="var(--accent-cyan)" /> Selected
                </div>
              )}

              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '20px',
                  background: isSelected ? 'rgba(0, 240, 255, 0.18)' : 'rgba(138, 43, 226, 0.12)',
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--accent-cyan)' : 'rgba(138, 43, 226, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  transition: 'all 0.3s ease'
                }}
              >
                <Trophy size={32} color={isSelected ? 'var(--accent-cyan)' : 'var(--text-secondary)'} />
              </div>

              <div className="badge badge-cyan" style={{ marginBottom: '12px' }}>
                {prize.badge}
              </div>

              <h4 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '8px' }}>{prize.title}</h4>
              
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: isSelected ? 'var(--accent-cyan)' : 'var(--text-primary)',
                  marginBottom: '12px',
                  transition: 'color 0.3s ease'
                }}
              >
                {prize.amount}
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {prize.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Challenge Tracks */}
      <div
        className="glass-card"
        style={{
          padding: '30px 40px',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px'
        }}
      >
        <div>
          <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>
            Hackathon Challenge Themes:
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Teams choose 1 primary challenge theme during opening assembly.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {hackathonDetails.tracks.map((t, i) => (
            <span
              key={i}
              style={{
                padding: '8px 16px',
                borderRadius: '12px',
                background: 'rgba(0, 240, 255, 0.08)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Cpu size={14} color="var(--accent-cyan)" /> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

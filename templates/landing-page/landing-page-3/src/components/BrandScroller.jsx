import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Shield, Layers, Zap, Radio, Globe, Database, Network, Binary } from 'lucide-react';

const PARTNERS = [
  { name: 'NVIDIA INCEPTION', icon: Cpu, badge: 'GPU Partner' },
  { name: 'OPENAI RESEARCH', icon: Terminal, badge: 'Inference Fabric' },
  { name: 'QUANTUM LABS', icon: Binary, badge: 'Quantum Node' },
  { name: 'NEURALINK SYSTEMS', icon: Zap, badge: 'Bio-Telemetry' },
  { name: 'DEEPMIND ARCH', icon: Layers, badge: 'Cognitive Engine' },
  { name: 'CEREBRAS ACCEL', icon: Network, badge: 'Wafer Mesh' },
  { name: 'SUPABASE GLOBAL', icon: Database, badge: 'Vector Layer' },
  { name: 'ANTHROPIC CLUSTER', icon: Shield, badge: 'Safety Core' },
];

export default function BrandScroller() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        padding: '38px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        background: 'rgba(8, 10, 16, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        overflow: 'hidden',
      }}
    >
      {/* Left/Right Edge Fades */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '140px',
          background: 'linear-gradient(90deg, #040508, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '140px',
          background: 'linear-gradient(270deg, #040508, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto 18px auto', textAlign: 'center' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}
        >
          TRUSTED BY PIONEERING AI TEAMS & GLOBAL INFRASTRUCTURE LEADERS
        </span>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div style={{ display: 'flex', width: 'max-content', gap: '32px' }}>
        <motion.div
          style={{ display: 'flex', gap: '32px', alignItems: 'center' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        >
          {[...PARTNERS, ...PARTNERS].map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '11px 24px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  color: '#94A3B8',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.45)';
                  e.currentTarget.style.background = 'rgba(0, 229, 255, 0.06)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.18)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#94A3B8';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.025)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Icon size={19} color="var(--neon-cyan)" />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.92rem', letterSpacing: '0.04em' }}>
                  {partner.name}
                </span>
                <span
                  style={{
                    fontSize: '0.66rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--neon-emerald)',
                    background: 'rgba(0, 255, 163, 0.1)',
                    border: '1px solid rgba(0, 255, 163, 0.25)',
                    padding: '2px 8px',
                    borderRadius: '100px',
                    fontWeight: 600,
                  }}
                >
                  {partner.badge}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

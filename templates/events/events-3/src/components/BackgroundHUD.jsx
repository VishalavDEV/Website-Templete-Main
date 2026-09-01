import React, { useState } from 'react';
import { Bot, Cpu, Zap, Eye, Sliders, Activity } from 'lucide-react';

export default function BackgroundHUD({ currentMode, setMode }) {
  const [isOpen, setIsOpen] = useState(true);

  const modes = [
    { id: 'unified', label: 'Nexus Mode', icon: Zap, color: '#00f0ff', desc: 'Unified Pepper, QPU, NPU & Spatial System' },
    { id: 'pepper', label: 'Pepper Android', icon: Bot, color: '#38bdf8', desc: 'Interactive Vector Humanoid Companion' },
    { id: 'quantum', label: 'Quantum QPU', icon: Cpu, color: '#a855f7', desc: 'Superconducting 128-Qubit Hardware' },
    { id: 'neural', label: 'Neural NPU', icon: Activity, color: '#ec4899', desc: 'Neuromorphic Tensor Synapse Mesh' },
    { id: 'spatial', label: 'Spatial Grid', icon: Eye, color: '#10b981', desc: '6DoF AR Holographic Coordinate Field' }
  ];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        fontFamily: 'var(--font-sans)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px'
      }}
    >
      {/* Expanded Mode Selector Panel */}
      {isOpen && (
        <div
          style={{
            background: 'rgba(8, 12, 22, 0.88)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            borderRadius: '16px',
            padding: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 30px rgba(0, 240, 255, 0.15)',
            width: '280px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-cyan)' }}>
              BACKGROUND SYSTEM CONTROLLER
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00f0ff', boxShadow: '0 0 8px #00f0ff' }}></span>
              <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>LIVE 60FPS</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {modes.map((m) => {
              const Icon = m.icon;
              const isActive = currentMode === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    background: isActive ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255,255,255,0.03)',
                    border: isActive ? `1px solid ${m.color}` : '1px solid rgba(255,255,255,0.06)',
                    color: isActive ? '#ffffff' : 'rgba(255,255,255,0.7)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'left'
                  }}
                >
                  <Icon size={18} color={m.color} />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: isActive ? m.color : '#ffffff' }}>
                      {m.label}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)' }}>
                      {m.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 18px',
          background: 'rgba(8, 12, 22, 0.9)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(0, 240, 255, 0.4)',
          borderRadius: '9999px',
          color: '#ffffff',
          fontWeight: 700,
          fontSize: '0.82rem',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(0, 240, 255, 0.25)',
          transition: 'all 0.2s ease'
        }}
      >
        <Sliders size={16} color="#00f0ff" />
        <span>{isOpen ? 'Close Visual HUD' : 'Visual Engine HUD'}</span>
      </button>
    </div>
  );
}

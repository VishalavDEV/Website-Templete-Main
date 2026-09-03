import React, { useState } from 'react';
import { Radio, ShieldCheck } from 'lucide-react';

export const Lanyard: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotation({ x: y * -20, y: x * 20 });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      style={{
        perspective: '1000px',
        display: 'inline-block'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor="PASS"
    >
      {/* Lanyard Strap Hook */}
      <div
        style={{
          width: '16px',
          height: '24px',
          margin: '0 auto -6px auto',
          background: 'var(--metal)',
          borderRadius: '3px 3px 0 0',
          border: '1px solid rgba(0,0,0,0.2)'
        }}
      />

      {/* Main Pass Card */}
      <div
        style={{
          width: '210px',
          height: '290px',
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-on-dark)',
          borderRadius: '10px',
          padding: '20px',
          border: '1px solid var(--border-accent)',
          boxShadow: 'var(--shadow-elevated)',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.15s ease-out',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        {/* Holographic metallic foil reflection */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(120deg, transparent 30%, rgba(215, 107, 74, 0.15) 50%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        {/* Pass Header */}
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-dark)',
              paddingBottom: '10px',
              marginBottom: '12px'
            }}
          >
            <Radio size={16} style={{ color: 'var(--accent-warm)' }} />
            <span
              style={{
                fontFamily: 'var(--font-grotesk)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: 'var(--lavender)'
              }}
            >
              VIP ACCESS
            </span>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.3rem',
              letterSpacing: '0.05em',
              lineHeight: 1.1,
              marginBottom: '4px'
            }}
          >
            NOVA//ECHO
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '1rem',
              letterSpacing: '0.1em',
              color: 'var(--coral)'
            }}
          >
            BACKSTAGE PASS
          </p>
        </div>

        {/* Middle Details */}
        <div style={{ margin: '12px 0' }}>
          <p
            style={{
              fontFamily: 'var(--font-grotesk)',
              fontSize: '0.7rem',
              color: 'var(--text-muted-on-dark)',
              letterSpacing: '0.1em'
            }}
          >
            EVENT SESSION:
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--bg-light)'
            }}
          >
            LIVE SESSION 2026
          </p>
        </div>

        {/* Pass Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderTop: '1px solid var(--border-dark)',
            paddingTop: '10px'
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.65rem',
                fontFamily: 'var(--font-grotesk)',
                color: 'var(--text-muted-on-dark)',
                display: 'block'
              }}
            >
              ACCESS LEVEL
            </span>
            <span
              style={{
                fontFamily: 'var(--font-condensed)',
                fontSize: '1.4rem',
                color: 'var(--accent-warm)',
                lineHeight: 1
              }}
            >
              03
            </span>
          </div>
          <ShieldCheck size={20} style={{ color: 'var(--lavender)' }} />
        </div>
      </div>
    </div>
  );
};

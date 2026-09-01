import React, { useState, useEffect } from 'react';
import { Mic, Music } from 'lucide-react';
import SoundWave from './SoundWave';

export default function Preloader({ onComplete }) {
  const [stage, setStage] = useState(1);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(2), 1200);
    const timer2 = setTimeout(() => setFadeOut(true), 2400);
    const timer3 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#050505',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.6s ease',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center', gap: '16px', color: 'var(--gold-bright)' }}>
          <Mic size={36} className="anim-pulse-speaker" />
          <Music size={36} className="anim-pulse-speaker" />
        </div>

        {stage === 1 ? (
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 900, letterSpacing: '4px', color: '#FFF', textTransform: 'uppercase' }}>
            VELORA <span style={{ color: 'var(--gold-bright)' }}>LIVE</span>
          </h1>
        ) : (
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 900, letterSpacing: '4px', color: 'var(--gold-bright)', textTransform: 'uppercase', textShadow: '0 0 30px var(--gold-bright)' }}>
            MIDNIGHT <span style={{ color: '#FFF' }}>ECHO</span>
          </h1>
        )}

        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
          <SoundWave barsCount={20} height={40} />
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Mic, Disc, Headphones, Volume2, Radio, Music, Zap } from 'lucide-react';

export default function AnimatedBackground() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      
      {/* Golden Stage Light Beams */}
      <div className="anim-moving-beam" style={{ position: 'absolute', top: '-20%', left: '10%', width: '45vw', height: '120vh', background: 'linear-gradient(180deg, rgba(255, 201, 40, 0.12) 0%, rgba(217, 152, 0, 0.03) 60%, transparent 100%)', transformOrigin: 'top left', filter: 'blur(30px)' }} />
      <div className="anim-moving-beam-delayed" style={{ position: 'absolute', top: '-20%', right: '10%', width: '45vw', height: '120vh', background: 'linear-gradient(180deg, rgba(245, 185, 0, 0.1) 0%, rgba(140, 106, 0, 0.02) 60%, transparent 100%)', transformOrigin: 'top right', filter: 'blur(35px)' }} />

      {/* Floating Microphones */}
      <div className="anim-float-mic" style={{ position: 'absolute', top: '25%', left: '4%', opacity: 0.18, color: 'var(--gold-bright)' }}>
        <Mic size={140} />
      </div>
      <div className="anim-float-mic-reverse" style={{ position: 'absolute', bottom: '15%', right: '5%', opacity: 0.15, color: 'var(--gold-primary)' }}>
        <Mic size={120} />
      </div>

      {/* Pulsing Concert Speakers */}
      <div className="anim-pulse-speaker" style={{ position: 'absolute', top: '45%', left: '2%', opacity: 0.12, color: 'var(--gold-bright)' }}>
        <Volume2 size={160} />
      </div>
      <div className="anim-pulse-speaker" style={{ position: 'absolute', top: '35%', right: '3%', opacity: 0.12, color: 'var(--gold-bright)', animationDelay: '0.9s' }}>
        <Volume2 size={150} />
      </div>

      {/* Rotating Vinyl Record & DJ Headphones */}
      <div className="anim-rotate-vinyl" style={{ position: 'absolute', top: '15%', right: '12%', opacity: 0.1, color: 'var(--gold-amber)' }}>
        <Disc size={220} />
      </div>
      <div style={{ position: 'absolute', bottom: '30%', left: '8%', opacity: 0.12, color: 'var(--gold-bright)' }}>
        <Headphones size={130} />
      </div>

      {/* DJ Controller Console Silhouette */}
      <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', opacity: 0.08, color: 'var(--gold-bright)', display: 'flex', gap: '30px', alignItems: 'center' }}>
        <Radio size={180} />
        <Disc size={160} className="anim-rotate-vinyl" />
        <Zap size={140} />
      </div>

      {/* Stage Fog / Smoke Glow */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '40vh', background: 'linear-gradient(0deg, rgba(5, 5, 5, 0.95) 0%, rgba(245, 185, 0, 0.03) 50%, transparent 100%)' }} />

    </div>
  );
}

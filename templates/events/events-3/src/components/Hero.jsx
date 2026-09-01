import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
  // Target date: Nov 12, 2026
  const targetDate = new Date('2026-11-12T09:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
        overflow: 'hidden',
        background: 'transparent'
      }}
    >
      {/* Dynamic Subsurface Atmospheric Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 35%, rgba(0, 102, 204, 0.05) 0%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0.95) 100%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />



      {/* Main Hero Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          width: '100%',
          padding: '0 5%',
          textAlign: 'center'
        }}
      >
        {/* Top Summit Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 20px',
            background: 'rgba(0, 240, 255, 0.08)',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            borderRadius: '9999px',
            backdropFilter: 'blur(12px)',
            marginBottom: '24px',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.15)'
          }}
        >
          <Zap size={16} color="#00f0ff" />
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'var(--accent-cyan)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            Annual Technical Summit • Nov 12-14, 2026
          </span>
        </div>

        {/* Main Title */}
        <h1
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '20px',
            textShadow: '0 0 40px rgba(0, 240, 255, 0.2)'
          }}
        >
          VERTEX <span className="text-gradient">2026</span>
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
            fontWeight: 500,
            color: 'var(--accent-cyan)',
            maxWidth: '850px',
            margin: '0 auto 32px auto',
            lineHeight: 1.4,
            fontStyle: 'italic',
            letterSpacing: '-0.01em'
          }}
        >
          "Where Machines Learn to Move, and Ideas Learn to Scale"
        </p>

        {/* Short Subtitle */}
        <p
          style={{
            fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)',
            color: 'var(--text-secondary)',
            maxWidth: '720px',
            margin: '0 auto 40px auto',
            lineHeight: 1.6
          }}
        >
          The premier global assembly for Autonomous Swarm Robotics, Superconducting Quantum Systems, Sub-mW Edge AI, and Industrial Spatial Computing.
        </p>

        {/* CTA Button Group */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '18px',
            flexWrap: 'wrap',
            marginBottom: '56px'
          }}
        >
          <a href="#register" className="btn-primary">
            Register Now <ArrowRight size={18} />
          </a>
          <a href="#schedule" className="btn-secondary">
            View Schedule
          </a>
        </div>

        {/* Event Meta Badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
            marginBottom: '50px',
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            fontWeight: 500
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={18} color="var(--accent-cyan)" />
            <span>Nov 12 – 14, 2026</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={18} color="var(--accent-violet)" />
            <span>Moscone Innovation Hub, San Francisco</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={18} color="var(--accent-cyan)" />
            <span>Hybrid & In-Person</span>
          </div>
        </div>

        {/* Futuristic Live Countdown Timer */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            background: 'var(--bg-card)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            padding: '24px 30px',
            boxShadow: 'var(--shadow-glass)'
          }}
        >
          <span
            style={{
              display: 'block',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--text-muted)',
              marginBottom: '16px'
            }}
          >
            Summit Countdown
          </span>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px'
            }}
          >
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '12px',
                  padding: '12px 8px'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
                    fontWeight: 800,
                    color: 'var(--accent-cyan)',
                    lineHeight: 1,
                    marginBottom: '4px',
                    textShadow: '0 0 12px rgba(0, 240, 255, 0.5)'
                  }}
                >
                  {String(item.value).padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text-secondary)',
                    fontWeight: 600
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

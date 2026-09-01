import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Zap } from 'lucide-react';

export default function Countdown() {
  const targetDate = new Date('2026-11-15T06:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTwoDigits = (num) => String(num).padStart(2, '0');

  return (
    <section style={{
      background: 'linear-gradient(180deg, #090A0D 0%, #15171B 100%)',
      padding: '60px 24px',
      position: 'relative',
      borderBottom: '1px solid rgba(255,255,255,0.06)'
    }}>
      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--bright-orange)', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
          <Zap size={16} /> OFFICIAL EVENT COUNTDOWN
        </div>

        <h2 className="section-title" style={{ marginBottom: '12px' }}>
          THE START IS GETTING CLOSER.
        </h2>

        <p style={{ color: 'var(--soft-grey)', fontSize: '1rem', marginBottom: '40px' }}>
          SUNDAY, 15 NOVEMBER 2026 • MARINA GATEWAY, CHENNAI
        </p>

        {/* Live Countdown Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '20px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: formatTwoDigits(timeLeft.hours) },
            { label: 'MINUTES', value: formatTwoDigits(timeLeft.minutes) },
            { label: 'SECONDS', value: formatTwoDigits(timeLeft.seconds) }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="glass-panel"
              style={{
                padding: '24px 16px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                borderTop: '3px solid var(--marathon-red)'
              }}
            >
              <div 
                className="font-display text-gradient-fire"
                style={{
                  fontSize: 'clamp(2.8rem, 6vw, 4.2rem)',
                  lineHeight: 1,
                  fontWeight: 900,
                  letterSpacing: '1px'
                }}
              >
                {item.value}
              </div>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                color: 'var(--soft-grey)',
                letterSpacing: '2px',
                marginTop: '8px',
                textTransform: 'uppercase'
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '30px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(255, 107, 44, 0.1)',
          border: '1px solid rgba(255, 107, 44, 0.25)',
          padding: '8px 20px',
          borderRadius: '30px',
          color: 'var(--warm-white)',
          fontSize: '0.85rem',
          fontWeight: 600
        }}>
          <Calendar size={14} color="var(--bright-orange)" />
          <span>RACE DAY REPORTING TIME: 5:00 AM IST</span>
        </div>

      </div>
    </section>
  );
}

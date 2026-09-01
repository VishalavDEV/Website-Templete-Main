import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    hasBegun: false,
  });

  useEffect(() => {
    const targetDate = new Date('2026-10-24T18:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, hasBegun: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, hasBegun: false });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ position: 'relative', zIndex: 10, padding: '50px 0', background: 'linear-gradient(180deg, rgba(16, 16, 16, 0.9) 0%, rgba(5, 5, 5, 0.95) 100%)', borderY: '1px solid rgba(245, 185, 0, 0.25)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="section-subtitle">COUNTDOWN TO ECHO</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '36px', color: '#FFF' }}>
          {timeLeft.hasBegun ? 'THE NIGHT HAS BEGUN' : 'THE NIGHT BEGINS IN'}
        </h2>

        {!timeLeft.hasBegun ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds },
            ].map((unit, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(20, 20, 20, 0.85)',
                  border: '1px solid rgba(245, 185, 0, 0.4)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px 30px',
                  minWidth: '130px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(245, 185, 0, 0.15)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '3.2rem',
                    fontWeight: 900,
                    color: 'var(--gold-bright)',
                    textShadow: '0 0 20px rgba(255, 201, 40, 0.6)',
                    lineHeight: 1,
                  }}
                >
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    letterSpacing: '2px',
                    color: 'var(--text-gray)',
                    marginTop: '10px',
                    textTransform: 'uppercase',
                  }}
                >
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ fontSize: '2rem', color: 'var(--gold-bright)', fontWeight: 800 }}>
            ⚡ MIDNIGHT ECHO IS LIVE NOW AT AURORA ARENA! ⚡
          </div>
        )}
      </div>
    </section>
  );
}

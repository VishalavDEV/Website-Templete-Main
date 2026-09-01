import React, { useState, useEffect } from 'react';

const Countdown = () => {
  // Target date: October 18, 2026 18:00:00
  const targetDate = new Date('2026-10-18T18:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds, isLive: false });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.25rem',
        margin: '2rem 0'
      }}
    >
      <div
        className="badge-tag"
        style={{
          fontSize: '0.85rem',
          letterSpacing: '2px',
          padding: '0.4rem 1rem'
        }}
      >
        ● {timeLeft.isLive ? 'SYSTEM STATUS: ACTIVE' : 'THE NIGHT BEGINS IN'}
      </div>

      {timeLeft.isLive ? (
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2.5rem',
            color: '#00ff66',
            textShadow: '0 0 20px #00ff66',
            letterSpacing: '3px'
          }}
          className="glitch-effect"
        >
          HACKATHON IS LIVE
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINUTES', value: timeLeft.minutes },
            { label: 'SECONDS', value: timeLeft.seconds }
          ].map((item, idx) => (
            <div
              key={idx}
              className="countdown-box"
              style={{
                backgroundColor: 'rgba(10, 16, 12, 0.85)',
                border: '1px solid rgba(0, 255, 102, 0.3)',
                borderRadius: '8px',
                padding: '1rem 1.5rem',
                minWidth: '100px',
                textAlign: 'center',
                boxShadow: '0 0 15px rgba(0, 255, 102, 0.15)',
                backdropFilter: 'blur(8px)',
                position: 'relative'
              }}
            >
              <div className="cyber-corner-tl" />
              <div className="cyber-corner-br" />

              <div
                className="countdown-num"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.4rem',
                  fontWeight: '800',
                  color: '#ffffff',
                  textShadow: '0 0 10px rgba(0, 255, 102, 0.5)'
                }}
              >
                {String(item.value).padStart(2, '0')}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#00ff66',
                  marginTop: '0.25rem',
                  letterSpacing: '1px'
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Countdown;

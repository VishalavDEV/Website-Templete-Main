import React, { useState, useEffect } from 'react';

export const Countdown = () => {
  const targetDate = new Date('2026-08-15T20:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    isLive: false,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
          isLive: true,
        });
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(d).padStart(2, '0'),
          hours: String(h).padStart(2, '0'),
          minutes: String(m).padStart(2, '0'),
          seconds: String(s).padStart(2, '0'),
          isLive: false,
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.isLive) {
    return (
      <div className="countdown-wrapper flame-glow-effect">
        <div className="countdown-title" style={{ fontSize: '1.4rem', color: '#ff4d00' }}>
          🔴 TOURNAMENT IS LIVE NOW!
        </div>
      </div>
    );
  }

  return (
    <div className="countdown-wrapper">
      <div className="countdown-title">TIP-OFF IN</div>
      <div className="countdown-grid">
        <div className="countdown-unit">
          <div className="countdown-number">{timeLeft.days}</div>
          <div className="countdown-label">DAYS</div>
        </div>
        <div className="countdown-colon">:</div>
        <div className="countdown-unit">
          <div className="countdown-number">{timeLeft.hours}</div>
          <div className="countdown-label">HOURS</div>
        </div>
        <div className="countdown-colon">:</div>
        <div className="countdown-unit">
          <div className="countdown-number">{timeLeft.minutes}</div>
          <div className="countdown-label">MINUTES</div>
        </div>
        <div className="countdown-colon">:</div>
        <div className="countdown-unit">
          <div className="countdown-number">{timeLeft.seconds}</div>
          <div className="countdown-label">SECONDS</div>
        </div>
      </div>
    </div>
  );
};

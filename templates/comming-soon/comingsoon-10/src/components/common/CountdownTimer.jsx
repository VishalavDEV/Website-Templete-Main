import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate, variant = 'minimalist', accentColor = '#00f0ff' }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    millis: 0,
    isExpired: false,
  });

  useEffect(() => {
    const destination = new Date(targetDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = destination - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          millis: 0,
          isExpired: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      const millis = Math.floor((difference % 1000) / 10);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        millis,
        isExpired: false,
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 41); // ~24fps for smooth millis

    return () => clearInterval(interval);
  }, [targetDate]);

  const pad = (n) => String(n).padStart(2, '0');

  const units = [
    { label: 'DAYS', value: pad(timeLeft.days) },
    { label: 'HOURS', value: pad(timeLeft.hours) },
    { label: 'MINUTES', value: pad(timeLeft.minutes) },
    { label: 'SECONDS', value: pad(timeLeft.seconds) },
    { label: 'MS', value: pad(timeLeft.millis) },
  ];

  return (
    <div className={`countdown-container countdown-${variant}`}>
      <div className="countdown-grid">
        {units.map((unit, idx) => (
          <div key={unit.label} className="countdown-card">
            <div className="countdown-value-box">
              <span className="countdown-digit">{unit.value}</span>
              {variant === 'minimalist' && <span className="countdown-scanline" />}
            </div>
            <span className="countdown-label">{unit.label}</span>
            {idx < units.length - 1 && variant === 'elegant' && (
              <span className="countdown-divider">/</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

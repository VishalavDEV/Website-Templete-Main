import React, { useState, useEffect } from 'react';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 18,
    seconds: 44
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 12, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTwoDigits = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>
      <div style={{ backgroundColor: '#111827', color: '#FFFFFF', padding: '0.35rem 0.65rem', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem' }}>
        {formatTwoDigits(timeLeft.hours)}
      </div>
      <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>:</span>
      <div style={{ backgroundColor: '#111827', color: '#FFFFFF', padding: '0.35rem 0.65rem', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem' }}>
        {formatTwoDigits(timeLeft.minutes)}
      </div>
      <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>:</span>
      <div style={{ backgroundColor: '#111827', color: '#FFFFFF', padding: '0.35rem 0.65rem', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem' }}>
        {formatTwoDigits(timeLeft.seconds)}
      </div>
    </div>
  );
};

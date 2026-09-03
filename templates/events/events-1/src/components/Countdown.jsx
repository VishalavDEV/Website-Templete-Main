import React, { useState, useEffect } from 'react';

export default function Countdown({ targetDate = '2026-09-20T09:00:00' }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.isExpired) {
    return (
      <div className="countdown-box">
        <h3 className="countdown-number" style={{ color: 'var(--secondary)' }}>
          EVENT STARTED!
        </h3>
      </div>
    );
  }

  return (
    <div className="countdown-box">
      <div className="countdown-title">Summit Countdown</div>
      <div className="countdown-grid">
        <div className="countdown-card">
          <div className="countdown-number">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="countdown-label">Days</div>
        </div>

        <div className="countdown-card">
          <div className="countdown-number">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="countdown-label">Hours</div>
        </div>

        <div className="countdown-card">
          <div className="countdown-number">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="countdown-label">Minutes</div>
        </div>

        <div className="countdown-card">
          <div className="countdown-number">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { weddingData } from '../data/weddingData';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false
  });

  useEffect(() => {
    const targetDate = new Date(weddingData.details.dateISO).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isOver: false });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">
      <div className="container">
        <span className="section-label">COUNTING DOWN TO FOREVER</span>

        {timeLeft.isOver ? (
          <h2 className="serif-title" style={{ marginTop: '1.5rem', color: 'var(--accent)' }}>
            THE CELEBRATION HAS BEGUN.
          </h2>
        ) : (
          <div className="countdown-grid">
            <div className="countdown-box">
              <span className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="countdown-label">DAYS</span>
            </div>

            <span className="countdown-divider">:</span>

            <div className="countdown-box">
              <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="countdown-label">HOURS</span>
            </div>

            <span className="countdown-divider">:</span>

            <div className="countdown-box">
              <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="countdown-label">MINUTES</span>
            </div>

            <span className="countdown-divider">:</span>

            <div className="countdown-box">
              <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="countdown-label">SECONDS</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

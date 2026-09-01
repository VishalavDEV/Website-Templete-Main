import React, { useEffect, useState } from 'react';

const Countdown = ({ targetDate = "2026-10-18T09:00:00" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isFinished: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <div className="subheading" style={{ justifyContent: 'center' }}>
        OCTOBER 18, 2026 • ARENA SPECTACLE
      </div>
      <h3 style={{ fontSize: '1.8rem', color: '#FFF', marginBottom: '2rem', letterSpacing: '2px' }}>
        THE ASCENT BEGINS IN
      </h3>

      {timeLeft.isFinished ? (
        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-yellow)', textShadow: '0 0 30px var(--color-yellow)' }}>
          THE CHALLENGE HAS BEGUN!
        </h2>
      ) : (
        <div className="countdown-box-grid">
          <div className="countdown-box">
            <div className="countdown-num">{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="countdown-label">DAYS</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-num">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="countdown-label">HOURS</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-num">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="countdown-label">MINUTES</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-num">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="countdown-label">SECONDS</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Countdown;

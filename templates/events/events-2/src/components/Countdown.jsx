import React, { useEffect, useState } from 'react';
import { Clock, CheckCircle2, PlayCircle } from 'lucide-react';
import '../styles/hero.css';

export const Countdown = ({ isCompletedMode, targetDate, onExploreHighlights }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (isCompletedMode) return;

    const calculateTime = () => {
      const eventTime = new Date(targetDate || '2026-11-18T09:00:00').getTime();
      const now = new Date().getTime();
      const difference = eventTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [isCompletedMode, targetDate]);

  if (isCompletedMode) {
    return (
      <div className="countdown-box" style={{ borderColor: 'rgba(217, 119, 6, 0.4)', background: 'rgba(217, 119, 6, 0.05)' }}>
        <div className="countdown-header" style={{ color: '#d97706' }}>
          <CheckCircle2 size={18} /> EVENT COMPLETED
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h4 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)' }}>
              Global AI & Innovation Summit Highlights Available
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Watch keynote recordings, view session transcripts, and inspect event photo galleries.
            </p>
          </div>
          <button className="btn btn-primary" onClick={onExploreHighlights} style={{ background: 'linear-gradient(135deg, #d97706, #b45309)' }}>
            <PlayCircle size={18} /> View Event Highlights →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="countdown-box">
      <div className="countdown-header">
        <Clock size={16} color="var(--accent-cyan)" /> EVENT STARTS IN
      </div>
      <div className="countdown-grid">
        <div className="countdown-card">
          <div className="countdown-num">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="countdown-label">DAYS</div>
        </div>
        <div className="countdown-card">
          <div className="countdown-num">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="countdown-label">HOURS</div>
        </div>
        <div className="countdown-card">
          <div className="countdown-num">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="countdown-label">MINUTES</div>
        </div>
        <div className="countdown-card">
          <div className="countdown-num">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="countdown-label">SECONDS</div>
        </div>
      </div>
    </div>
  );
};

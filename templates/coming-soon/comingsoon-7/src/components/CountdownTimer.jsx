import React, { useState, useEffect } from 'react';
import { Clock, Flame, ShieldCheck, Zap, AlertTriangle } from 'lucide-react';

export const CountdownTimer = ({ targetDate, stockPercentage = 86 }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 42,
    seconds: 19
  });
  const [isTickPulse, setIsTickPulse] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
        setIsTickPulse(true);
        setTimeout(() => setIsTickPulse(false), 200);
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const padZero = (num) => String(num).padStart(2, '0');

  return (
    <div className="countdown-card glass-panel">
      {/* Header Pill */}
      <div className="countdown-header">
        <div className="countdown-pill">
          <span className="pulse-indicator"></span>
          <Flame size={15} className="flame-icon" />
          <span className="countdown-title">LIMITED DROP ALLOCATION • BATCH 01</span>
        </div>
        <div className="countdown-availability">
          <span className="live-viewers">⚡ <strong>142</strong> athletes viewing right now</span>
        </div>
      </div>

      {/* Main Countdown Digits Display */}
      <div className="countdown-timer-grid">
        {/* Days */}
        <div className="time-segment">
          <div className={`time-digit-box ${isTickPulse ? 'tick-glow' : ''}`}>
            <span className="digit-val">{padZero(timeLeft.days)}</span>
          </div>
          <span className="digit-label">DAYS</span>
        </div>

        <div className="time-separator">:</div>

        {/* Hours */}
        <div className="time-segment">
          <div className={`time-digit-box ${isTickPulse ? 'tick-glow' : ''}`}>
            <span className="digit-val">{padZero(timeLeft.hours)}</span>
          </div>
          <span className="digit-label">HOURS</span>
        </div>

        <div className="time-separator">:</div>

        {/* Minutes */}
        <div className="time-segment">
          <div className={`time-digit-box ${isTickPulse ? 'tick-glow' : ''}`}>
            <span className="digit-val">{padZero(timeLeft.minutes)}</span>
          </div>
          <span className="digit-label">MINUTES</span>
        </div>

        <div className="time-separator">:</div>

        {/* Seconds */}
        <div className="time-segment">
          <div className={`time-digit-box active-sec ${isTickPulse ? 'pulse-sec' : ''}`}>
            <span className="digit-val sec-color">{padZero(timeLeft.seconds)}</span>
          </div>
          <span className="digit-label">SECONDS</span>
        </div>
      </div>

      {/* Stock Reservation Tracker Bar */}
      <div className="drop-progress-container">
        <div className="drop-progress-info">
          <span className="drop-status-text">
            <AlertTriangle size={14} className="alert-icon" /> Batch 01 Allocation Claimed
          </span>
          <span className="drop-percentage font-mono">{stockPercentage}% SOLD</span>
        </div>
        <div className="progress-track">
          <div 
            className="progress-fill" 
            style={{ width: `${stockPercentage}%` }}
          >
            <div className="progress-shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

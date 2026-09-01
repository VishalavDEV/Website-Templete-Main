import React, { useState, useEffect } from 'react';
import { Clock, Globe, Settings2, Check } from 'lucide-react';

export default function CountdownTimer({ currentPreset, lang = 'en', t }) {
  // Default target date: 24 days, 16 hours from now
  const [targetDate, setTargetDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 24);
    d.setHours(d.getHours() + 16);
    d.setMinutes(d.getMinutes() + 45);
    return d;
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 24,
    hours: 16,
    minutes: 45,
    seconds: 0
  });

  const [timeZone, setTimeZone] = useState('UTC');
  const [timeZoneOffset, setTimeZoneOffset] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [customDays, setCustomDays] = useState(24);

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
      setTimeZone(tz);
      const offsetMinutes = -new Date().getTimezoneOffset();
      const hours = Math.floor(Math.abs(offsetMinutes) / 60);
      const mins = Math.abs(offsetMinutes) % 60;
      const sign = offsetMinutes >= 0 ? '+' : '-';
      setTimeZoneOffset(`GMT${sign}${hours}${mins > 0 ? `:${mins}` : ''}`);
    } catch (e) {
      setTimeZone('UTC');
    }
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleApplyCustomDays = () => {
    const d = new Date();
    d.setDate(d.getDate() + Number(customDays));
    d.setHours(d.getHours() + 12);
    setTargetDate(d);
    setShowDatePicker(false);
  };

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div style={{ margin: '32px 0 40px 0', width: '100%' }}>
      {/* Timezone and Scarcity Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '16px'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          background: 'var(--bg-pill)',
          borderRadius: 'var(--radius-full)',
          fontSize: '13px',
          color: 'var(--text-secondary)',
          border: '1px solid var(--border-subtle)'
        }}>
          <Clock size={14} style={{ color: 'var(--accent-1)' }} />
          <span>{t.targetLaunch}</span>
        </div>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '12px',
          color: 'var(--text-muted)'
        }}>
          <Globe size={13} style={{ color: 'var(--accent-2)' }} />
          <span>{timeZone} ({timeZoneOffset})</span>
          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            title="Configure Target Launch Date"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '2px 4px',
              borderRadius: '4px',
              transition: 'color 0.2s'
            }}
          >
            <Settings2 size={13} />
          </button>
        </div>
      </div>

      {/* Date Adjustment Panel */}
      {showDatePicker && (
        <div className="glass-panel" style={{
          padding: '14px 18px',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          flexWrap: 'wrap',
          background: 'var(--bg-input)'
        }}>
          <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 600 }}>
            Adjust Target Countdown Days:
          </span>
          <input
            type="range"
            min="1"
            max="120"
            value={customDays}
            onChange={(e) => setCustomDays(e.target.value)}
            style={{ flex: 1, minWidth: '120px', accentColor: 'var(--accent-1)', cursor: 'pointer' }}
          />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent-1)', fontWeight: 700 }}>
            {customDays} Days
          </span>
          <button
            onClick={handleApplyCustomDays}
            className="glow-btn"
            style={{ padding: '6px 14px', fontSize: '12px' }}
          >
            <Check size={14} /> Apply
          </button>
        </div>
      )}

      {/* Countdown Digits Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '14px',
        maxWidth: '560px'
      }}>
        {[
          { label: t.days, value: formatNumber(timeLeft.days) },
          { label: t.hours, value: formatNumber(timeLeft.hours) },
          { label: t.minutes, value: formatNumber(timeLeft.minutes) },
          { label: t.seconds, value: formatNumber(timeLeft.seconds), isSec: true }
        ].map((unit, idx) => (
          <div
            key={idx}
            className="glass-panel"
            style={{
              padding: '16px 8px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              background: 'var(--bg-card)'
            }}
          >
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(28px, 4.5vw, 42px)',
              fontWeight: 800,
              color: unit.isSec ? 'var(--accent-2)' : 'var(--text-primary)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}>
              {unit.value}
            </div>
            <div style={{
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-muted)',
              marginTop: '6px'
            }}>
              {unit.label}
            </div>
            {unit.isSec && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '2px',
                background: 'var(--accent-gradient)'
              }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

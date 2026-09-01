import React, { useState, useEffect } from 'react';
import { Monitor, Search, Power, Activity } from 'lucide-react';

export default function Taskbar({
  openWindows,
  activeWindowId,
  minimizedWindows,
  onWindowClick,
  onToggleStartMenu,
  onOpenSearch,
  onRestartBoot
}) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '52px',
      backgroundColor: 'var(--bg-glass)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderTop: '1px solid var(--border-color)',
      zIndex: 9000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 12px'
    }}>
      {/* Start & Search Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          onClick={onToggleStartMenu}
          className="accent-btn"
          style={{
            padding: '7px 14px',
            fontSize: '13px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(249, 115, 22, 0.3)'
          }}
        >
          <Monitor size={16} /> START
        </button>

        <button
          onClick={onOpenSearch}
          style={{
            backgroundColor: 'var(--soft-gray)',
            color: 'var(--text-main)',
            border: '1px solid var(--border-color)',
            padding: '7px 14px',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <Search size={14} color="#2563EB" /> Search Portfolio
        </button>
      </div>

      {/* Open Windows Tabs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        overflowX: 'auto',
        maxWidth: '50vw',
        padding: '0 8px'
      }}>
        {openWindows.map(app => {
          const isActive = activeWindowId === app.id && !minimizedWindows.includes(app.id);
          return (
            <button
              key={app.id}
              onClick={() => onWindowClick(app.id)}
              style={{
                backgroundColor: isActive ? 'var(--royal-blue)' : 'var(--bg-surface)',
                color: isActive ? '#FFFFFF' : 'var(--text-main)',
                border: '1px solid var(--border-color)',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
            >
              {app.icon}
              <span>{app.title}</span>
              {isActive && <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#F97316' }} />}
            </button>
          );
        })}
      </div>

      {/* System Status & Time */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: 'rgba(16, 185, 129, 0.12)',
          color: '#10B981',
          padding: '4px 10px',
          borderRadius: '99px',
          fontSize: '11px',
          fontWeight: 700
        }}>
          <Activity size={12} /> SYSTEM ONLINE
        </div>

        <div style={{
          fontSize: '12px',
          fontWeight: 700,
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-main)'
        }}>
          {timeStr}
        </div>

        <button
          onClick={onRestartBoot}
          title="Restart VISHAL OS Boot Sequence"
          style={{
            backgroundColor: 'rgba(239, 68, 68, 0.12)',
            color: '#EF4444',
            border: 'none',
            padding: '6px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          <Power size={14} />
        </button>
      </div>
    </div>
  );
}

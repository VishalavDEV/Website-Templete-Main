import React from 'react';

export default function TopBar({ isLightMode, onToggleTheme }) {
  return (
    <div className="futurix-top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <a href="#projects" className="top-nav-link">‹ TEMPLATES CATALOG</a>
          <span className="sep">|</span>
          <a href="#home" className="top-nav-link">MAIN PORTAL</a>
        </div>
        <div className="top-bar-right">
          <button 
            className="theme-toggle-btn" 
            onClick={onToggleTheme}
            title="Toggle Light / Dark Mode"
            id="themeToggleBtn"
          >
            <span>{isLightMode ? '🌙' : '☀️'}</span>
            <span>{isLightMode ? 'DARK MODE' : 'LIGHT MODE'}</span>
          </button>
          <span>⚡ TEMPLATE 3 — 3D BIM TECH (REACT + SPRING BOOT)</span>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Sun, Moon, Inbox, Activity } from 'lucide-react';

export default function TopBar({ theme, toggleTheme, onOpenInquiries, apiStatus }) {
  return (
    <div className="knack-top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <a href="#portfolio" className="top-nav-link">‹ TEMPLATES CATALOG</a>
          <span className="sep">|</span>
          <a href="#home" className="top-nav-link">MAIN PORTAL</a>
          <span className="sep">|</span>
          <div className="api-badge" title="Java Spring Boot Backend Status">
            <span className="api-dot" style={{ background: apiStatus === 'UP' ? '#22c55e' : '#eab308' }} />
            <span>SPRING BOOT API: {apiStatus}</span>
          </div>
        </div>
        <div className="top-bar-right">
          <button 
            className="inquiries-btn" 
            onClick={onOpenInquiries}
            title="View Inquiries stored in Spring Boot backend"
          >
            <Inbox size={14} />
            <span>INQUIRIES</span>
          </button>
          <button 
            className="knack-theme-toggle" 
            onClick={toggleTheme} 
            title="Toggle Light / Dark Mode"
          >
            {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
            <span>{theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}</span>
          </button>
          <span className="tpl-tag">TEMPLATE 4 — LUXURY DESIGN + BUILD</span>
        </div>
      </div>
    </div>
  );
}

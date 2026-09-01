import React from 'react';

export default function SocialSidebar() {
  return (
    <aside className="social-float-bar">
      <a href="#facebook" className="social-icon" title="Facebook">f</a>
      <a href="#linkedin" className="social-icon" title="LinkedIn">in</a>
      <a href="#instagram" className="social-icon" title="Instagram">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
      <a href="#youtube" className="social-icon" title="YouTube">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21"/>
        </svg>
      </a>
    </aside>
  );
}

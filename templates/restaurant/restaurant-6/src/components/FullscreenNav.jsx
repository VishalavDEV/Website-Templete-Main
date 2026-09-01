import React, { useState } from 'react';

export default function FullscreenNav({ isOpen, onClose }) {
  const [activeBg, setActiveBg] = useState('nav-bg-home');

  const bgList = [
    { id: 'nav-bg-home', src: 'assets/images/hero.jpg', alt: 'Home preview' },
    { id: 'nav-bg-restaurant', src: 'assets/images/story_portrait.jpg', alt: 'Restaurant preview' },
    { id: 'nav-bg-menu', src: 'assets/images/dish_seabass.jpg', alt: 'Menu preview' },
    { id: 'nav-bg-experience', src: 'assets/images/exp_terrace.jpg', alt: 'Experience preview' },
    { id: 'nav-bg-journal', src: 'assets/images/story_landscape.jpg', alt: 'Journal preview' },
    { id: 'nav-bg-contact', src: 'assets/images/kitchen.jpg', alt: 'Contact preview' }
  ];

  const menuItems = [
    { num: '01', label: 'HOME', href: '#hero', bg: 'nav-bg-home' },
    { num: '02', label: 'RESTAURANT', href: '#story', bg: 'nav-bg-restaurant' },
    { num: '03', label: 'MENU', href: '#menu', bg: 'nav-bg-menu' },
    { num: '04', label: 'EXPERIENCE', href: '#experience', bg: 'nav-bg-experience' },
    { num: '05', label: 'JOURNAL', href: '#journal', bg: 'nav-bg-journal' },
    { num: '06', label: 'CONTACT', href: '#contact', bg: 'nav-bg-contact' }
  ];

  return (
    <div
      className={`fullscreen-nav ${isOpen ? 'is-active' : ''}`}
      id="fullscreen-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      {/* Dynamic Hover Background Image Switcher */}
      {bgList.map(bg => (
        <img
          key={bg.id}
          id={bg.id}
          className={`nav-bg-preview ${activeBg === bg.id ? 'is-visible' : ''}`}
          src={bg.src}
          alt={bg.alt}
        />
      ))}

      <div className="fullscreen-nav-header">
        <span className="nav-brand">LUMIÈRE</span>
        <button className="fullscreen-nav-close" onClick={onClose} data-cursor="CLOSE">
          <span>CLOSE</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="fullscreen-nav-content">
        <nav className="fullscreen-menu-list">
          {menuItems.map(item => (
            <div key={item.num} className="fullscreen-menu-item">
              <a
                href={item.href}
                className="fullscreen-menu-link"
                data-bg={item.bg}
                data-cursor="VIEW"
                onMouseEnter={() => setActiveBg(item.bg)}
                onClick={onClose}
              >
                <span className="num">{item.num}</span> {item.label}
              </a>
            </div>
          ))}
        </nav>

        <div className="fullscreen-nav-footer">
          <div className="nav-meta-block">
            <h4>LOCATION</h4>
            <p>42 ECR Coastal Road<br />Kovalam, Chennai 603112<br />Tamil Nadu, India</p>
          </div>
          <div className="nav-meta-block">
            <h4>HOURS</h4>
            <p>Lunch: 12:30 PM – 3:30 PM<br />Dinner: 7:00 PM – 11:30 PM<br />Closed Mondays</p>
          </div>
          <div className="nav-meta-block">
            <h4>INQUIRIES</h4>
            <p><a href="mailto:reservations@lumierechennai.com">reservations@lumierechennai.com</a><br />+91 44 8765 4321</p>
          </div>
        </div>
      </div>
    </div>
  );
}

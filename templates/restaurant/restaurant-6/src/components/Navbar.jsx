import React, { useEffect, useState } from 'react';

export default function Navbar({ onOpenNav }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-nav ${isScrolled ? 'is-scrolled' : ''}`}>
      <a href="#hero" className="nav-brand" data-cursor="LUMIÈRE">LUMIÈRE</a>

      <div className="nav-location">
        <span>CHENNAI · INDIA</span>
      </div>

      <div className="nav-actions">
        <button className="nav-trigger" onClick={onOpenNav} data-cursor="OPEN" aria-label="Open Navigation">MENU</button>
        <a href="#reservation" className="nav-reserve-btn" data-cursor="RESERVE">RESERVE</a>
      </div>
    </header>
  );
}

import React from 'react';

export default function PillNav({ onOpenNav }) {
  return (
    <div className="pill-nav-wrapper">
      <div className="pill-nav-container">
        <a href="#hero" className="pill-logo-mark" data-cursor="EXPLORE">C</a>
        <div className="pill-center-location">RESTAURANT &bull; CHENNAI</div>
        <button className="btn-pill-menu" id="menu-trigger" data-cursor="OPEN" onClick={onOpenNav}>
          MENU
        </button>
      </div>
    </div>
  );
}

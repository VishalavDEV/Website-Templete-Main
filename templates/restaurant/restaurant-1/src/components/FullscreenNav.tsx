import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface FullscreenNavProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  num: string;
  text: string;
  path: string;
  hash?: string;
  bg: string;
  captionTitle: string;
  captionSub: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    num: '01',
    text: 'Home',
    path: '/',
    hash: '#hero',
    bg: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    captionTitle: '01 — HOME',
    captionSub: 'Welcome to Ember House Gastronomy',
  },
  {
    num: '02',
    text: 'Our House',
    path: '/about',
    hash: '#the-house',
    bg: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    captionTitle: '02 — OUR HOUSE',
    captionSub: 'Architectural sanctuary & hearth space',
  },
  {
    num: '03',
    text: 'Menu',
    path: '/menu',
    hash: '#dishes',
    bg: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1200&auto=format&fit=crop',
    captionTitle: '03 — MENU',
    captionSub: 'Seasonal dishes from wood hearth',
  },
  {
    num: '04',
    text: 'Kitchen',
    path: '/chefs',
    hash: '#fire-kitchen',
    bg: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1200&auto=format&fit=crop',
    captionTitle: '04 — KITCHEN',
    captionSub: 'Open fire culinary line & technique',
  },
  {
    num: '05',
    text: 'People',
    path: '/chefs',
    hash: '#people',
    bg: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1200&auto=format&fit=crop',
    captionTitle: '05 — PEOPLE',
    captionSub: 'Chef Arjun Rao & artisans',
  },
  {
    num: '06',
    text: 'Experiences',
    path: '/events',
    hash: '#experiences',
    bg: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop',
    captionTitle: '06 — EXPERIENCES',
    captionSub: "Chef's table & private suppers",
  },
  {
    num: '07',
    text: 'Journal',
    path: '/blog',
    hash: '#journal',
    bg: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    captionTitle: '07 — JOURNAL',
    captionSub: 'Culinary stories & seasonal notes',
  },
  {
    num: '08',
    text: 'Reservations',
    path: '/contact',
    hash: '#reservation',
    bg: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    captionTitle: '08 — RESERVATIONS',
    captionSub: 'Reserve your table at Ember House',
  },
];

export const FullscreenNav: React.FC<FullscreenNavProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeItem, setActiveItem] = useState<NavItem>(NAV_ITEMS[0]);
  const [bgSrc, setBgSrc] = useState<string>(NAV_ITEMS[0].bg);
  const [isBgActive, setIsBgActive] = useState<boolean>(true);

  const handleMouseEnter = (item: NavItem) => {
    setActiveItem(item);
    if (item.bg !== bgSrc) {
      setIsBgActive(false);
      setTimeout(() => {
        setBgSrc(item.bg);
        setIsBgActive(true);
      }, 120);
    }
  };

  const handleLinkClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();
    onClose();
    if (location.pathname === '/' && item.hash) {
      const target = document.querySelector(item.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(item.path + (item.hash && item.path === '/' ? item.hash : ''));
  };

  return (
    <div className={`fullscreen-nav ${isOpen ? 'active' : ''}`} id="fullscreenNav">
      {/* LEFT PANEL */}
      <div className="fullscreen-nav-left">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
          alt="Ember House Atmosphere"
          className="nav-left-bg-photo"
        />
        <div className="nav-left-dark-overlay"></div>

        <div className="nav-left-brand">
          <span className="brand-title">EMBER HOUSE</span>
          <span className="brand-sub">CHENNAI &bull; EST. 2012</span>
        </div>

        <div className="nav-left-vertical-label">FOOD WORTH GATHERING AROUND</div>
      </div>

      {/* RIGHT PANEL */}
      <div className="fullscreen-nav-right">
        <div className="nav-top-bar">
          <span className="nav-index-label">EXPLORE</span>
          <button type="button" className="btn-nav-close" id="btnNavClose" onClick={onClose} aria-label="Close Menu">
            CLOSE <span className="close-icon">&times;</span>
          </button>
        </div>

        <div className="nav-body-container">
          <div className="nav-menu-col">
            <span className="caption-title mb-3 d-block">EXPLORE</span>
            <nav className="nav-menu-list">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.num}
                  href={item.path}
                  className={`nav-link-giant ${activeItem.num === item.num ? 'active-hover' : ''}`}
                  onMouseEnter={() => handleMouseEnter(item)}
                  onClick={(e) => handleLinkClick(e, item)}
                >
                  <span className="num">{item.num}</span>
                  <span className="link-text">{item.text}</span>
                  <span className="hover-accent-line"></span>
                </a>
              ))}
            </nav>
          </div>

          <div className="nav-preview-col">
            <div className="nav-preview-card">
              <div className="nav-preview-img-wrap">
                <img
                  src={bgSrc}
                  alt="Ember House Preview"
                  className={`nav-hover-bg ${isBgActive ? 'active' : ''}`}
                  id="navHoverBg"
                />
              </div>
              <div className="nav-preview-caption">
                <div className="caption-title" id="navCaptionTitle">{activeItem.captionTitle}</div>
                <div className="caption-sub" id="navCaptionSub">{activeItem.captionSub}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-bottom-meta">
          <span>WOOD-FIRED SANCTUARY &bull; CHENNAI</span>
          <span>OPEN TUE–SUN</span>
        </div>
      </div>
    </div>
  );
};

export default FullscreenNav;

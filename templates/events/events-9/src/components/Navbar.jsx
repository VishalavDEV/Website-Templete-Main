import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll spy & Navbar background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Navbar background blur
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy for Home Page sections in order
      if (location.pathname === '/') {
        const sections = [
          'home', 'our-story', 'events', 'schedule', 'venue', 'gallery', 'family', 'dress-code', 'menu', 'travel', 'wishes', 'rsvp'
        ];

        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionEl = document.getElementById(sections[i]);
          if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close dropdowns on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  // Handle smooth scroll or navigation
  const handleNavClick = (sectionId, routePath) => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);

    if (location.pathname === '/') {
      const targetEl = document.getElementById(sectionId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(routePath);
  };

  const moreLinks = [
    { name: "Dress Code", sectionId: "dress-code", path: "/dress-code" },
    { name: "Food & Menu", sectionId: "menu", path: "/menu" },
    { name: "Travel & Stay", sectionId: "travel", path: "/travel" },
    { name: "Memories", sectionId: "memories", path: "/memories" },
    { name: "Wishes", sectionId: "wishes", path: "/wishes" },
    { name: "Wedding Party", sectionId: "party", path: "/wedding-party" },
    { name: "Digital Invitation", sectionId: "invitation", path: "/invitation" },
    { name: "Gift Registry", sectionId: "registry", path: "/gift-registry" },
    { name: "FAQ", sectionId: "faq", path: "/faq" },
    { name: "Contact", sectionId: "contact", path: "/contact" }
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* BRAND */}
          <Link to="/" className="nav-brand">
            {weddingData.brand.name}
          </Link>

          {/* DESKTOP NAV LINKS IN ORDER OF PAGE SECTIONS */}
          <ul className="nav-links">
            <li className="nav-item">
              <button 
                onClick={() => handleNavClick('home', '/')}
                className={`nav-link ${location.pathname === '/' && activeSection === 'home' ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                HOME
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => handleNavClick('our-story', '/our-story')}
                className={`nav-link ${(location.pathname === '/our-story' || (location.pathname === '/' && activeSection === 'our-story')) ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                OUR STORY
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => handleNavClick('events', '/events')}
                className={`nav-link ${(location.pathname === '/events' || (location.pathname === '/' && activeSection === 'events')) ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                EVENTS
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => handleNavClick('schedule', '/schedule')}
                className={`nav-link ${(location.pathname === '/schedule' || (location.pathname === '/' && activeSection === 'schedule')) ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                SCHEDULE
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => handleNavClick('venue', '/venue')}
                className={`nav-link ${(location.pathname === '/venue' || (location.pathname === '/' && activeSection === 'venue')) ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                VENUE
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => handleNavClick('gallery', '/gallery')}
                className={`nav-link ${(location.pathname === '/gallery' || (location.pathname === '/' && activeSection === 'gallery')) ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                GALLERY
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => handleNavClick('family', '/family')}
                className={`nav-link ${(location.pathname === '/family' || (location.pathname === '/' && activeSection === 'family')) ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                FAMILY
              </button>
            </li>

            {/* MORE + DROPDOWN MENU */}
            <li className="nav-item">
              <button 
                className="dropdown-trigger"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
              >
                WEDDING DETAILS <ChevronDown size={14} />
              </button>

              <ul className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                {moreLinks.map((item, idx) => (
                  <li key={idx} className="dropdown-item">
                    <button 
                      onClick={() => handleNavClick(item.sectionId, item.path)}
                      style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </li>

            {/* HIGHLIGHTED RSVP BUTTON */}
            <li className="nav-item">
              <button 
                onClick={() => handleNavClick('rsvp', '/rsvp')}
                className="nav-rsvp-btn"
                style={{ cursor: 'pointer' }}
              >
                RSVP
              </button>
            </li>
          </ul>

          {/* MOBILE TOGGLE BUTTON */}
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE OVERLAY MENU */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="nav-brand">
            {weddingData.brand.name}
          </Link>
          <button 
            className="mobile-menu-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={30} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          <li><button onClick={() => handleNavClick('home', '/')} className="mobile-nav-link" style={{ background: 'none', border: 'none', textAlign: 'left' }}>HOME</button></li>
          <li><button onClick={() => handleNavClick('our-story', '/our-story')} className="mobile-nav-link" style={{ background: 'none', border: 'none', textAlign: 'left' }}>OUR STORY</button></li>
          <li><button onClick={() => handleNavClick('events', '/events')} className="mobile-nav-link" style={{ background: 'none', border: 'none', textAlign: 'left' }}>WEDDING EVENTS</button></li>
          <li><button onClick={() => handleNavClick('schedule', '/schedule')} className="mobile-nav-link" style={{ background: 'none', border: 'none', textAlign: 'left' }}>SCHEDULE</button></li>
          <li><button onClick={() => handleNavClick('venue', '/venue')} className="mobile-nav-link" style={{ background: 'none', border: 'none', textAlign: 'left' }}>THE VENUE</button></li>
          <li><button onClick={() => handleNavClick('gallery', '/gallery')} className="mobile-nav-link" style={{ background: 'none', border: 'none', textAlign: 'left' }}>GALLERY</button></li>
          <li><button onClick={() => handleNavClick('family', '/family')} className="mobile-nav-link" style={{ background: 'none', border: 'none', textAlign: 'left' }}>OUR FAMILIES</button></li>
          <li><button onClick={() => handleNavClick('wedding-party', '/wedding-party')} className="mobile-nav-link" style={{ background: 'none', border: 'none', textAlign: 'left' }}>WEDDING PARTY</button></li>
          <li><button onClick={() => handleNavClick('menu', '/menu')} className="mobile-nav-link" style={{ background: 'none', border: 'none', textAlign: 'left' }}>FOOD & MENU</button></li>
          <li><button onClick={() => handleNavClick('dress-code', '/dress-code')} className="mobile-nav-link" style={{ background: 'none', border: 'none', textAlign: 'left' }}>DRESS CODE</button></li>
          <li><button onClick={() => handleNavClick('travel', '/travel')} className="mobile-nav-link" style={{ background: 'none', border: 'none', textAlign: 'left' }}>TRAVEL & STAY</button></li>
          <li><button onClick={() => handleNavClick('memories', '/memories')} className="mobile-nav-link" style={{ background: 'none', border: 'none', textAlign: 'left' }}>MEMORIES</button></li>
          <li><button onClick={() => handleNavClick('wishes', '/wishes')} className="mobile-nav-link" style={{ background: 'none', border: 'none', textAlign: 'left' }}>WEDDING WISHES</button></li>
          <li><button onClick={() => handleNavClick('invitation', '/invitation')} className="mobile-nav-link" style={{ background: 'none', border: 'none', textAlign: 'left' }}>DIGITAL INVITATION</button></li>
          <li><button onClick={() => handleNavClick('gift-registry', '/gift-registry')} className="mobile-nav-link" style={{ background: 'none', border: 'none', textAlign: 'left' }}>GIFT REGISTRY</button></li>
          <li><button onClick={() => handleNavClick('faq', '/faq')} className="mobile-nav-link" style={{ background: 'none', border: 'none', textAlign: 'left' }}>FAQ</button></li>
          <li><button onClick={() => handleNavClick('contact', '/contact')} className="mobile-nav-link" style={{ background: 'none', border: 'none', textAlign: 'left' }}>CONTACT</button></li>
        </ul>

        <div className="mobile-menu-footer">
          <button onClick={() => handleNavClick('rsvp', '/rsvp')} className="btn-primary" style={{ width: '100%' }}>
            RSVP NOW
          </button>
        </div>
      </div>
    </>
  );
}

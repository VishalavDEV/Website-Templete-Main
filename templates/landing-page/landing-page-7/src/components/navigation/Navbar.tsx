import React, { useState, useEffect } from 'react';
import { MobileMenu } from './MobileMenu';
import { useToast } from '../../context/ToastContext';

export interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('id') || '');
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const toggleMobileMenu = () => {
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    if (nextState) {
      showToast('MENU OPENED');
    }
  };

  return (
    <>
      <header
        className={`site-header ${scrolled ? 'scrolled' : ''}`}
        role="banner"
      >
        <div className="brand-container">
          <a href="#hero" className="brand-title" id="nav-brand">
            MONOLITH
          </a>
          <span className="brand-tagline">Architecture Beyond Structure</span>
        </div>

        <nav className="nav-container" role="navigation" aria-label="Main Navigation">
          <ul className="nav-links">
            <li className="nav-item">
              <a
                href="#featured-project"
                id="nav-projects"
                className={activeSection === 'featured-project' || activeSection === 'project-index' ? 'active' : ''}
              >
                <span className="nav-index">01</span>Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#process"
                id="nav-process"
                className={activeSection === 'process' ? 'active' : ''}
              >
                <span className="nav-index">02</span>Process
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#studio"
                id="nav-studio"
                className={activeSection === 'studio' ? 'active' : ''}
              >
                <span className="nav-index">03</span>Studio
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-cta-wrapper">
          <button
            className="btn-cta-nav"
            id="btn-start-project"
            onClick={onOpenInquiry}
          >
            Start a Project
          </button>

          <button
            className={`mobile-toggle-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        onOpenInquiry={onOpenInquiry}
      />
    </>
  );
};

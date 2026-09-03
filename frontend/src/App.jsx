import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import BackToTop from './components/BackToTop';
import './App.css';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './components/Icons';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('ben_portfolio_theme') || 'dark';
  });
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ben_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectService = (serviceName) => {
    setSelectedServiceForContact(serviceName);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-layout">
      {/* 1. Navbar */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      <main>
        {/* 2. Hero Section */}
        <Hero 
          onOpenResume={() => setResumeModalOpen(true)} 
        />

        {/* 3. Services Section */}
        <Services 
          onSelectService={handleSelectService} 
        />

        {/* 4. About Section */}
        <About 
          onOpenResume={() => setResumeModalOpen(true)} 
        />

        {/* 5. Portfolio Section */}
        <Portfolio />

        {/* 6. Client Testimonials */}
        <Testimonials />

        {/* 7. Contact Section */}
        <Contact 
          key={selectedServiceForContact}
          preselectedService={selectedServiceForContact} 
        />
      </main>

      {/* Modern Footer */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-top-grid">
            <div className="footer-brand-col">
              <div className="footer-brand-logo">
                <span className="brand-accent-dot"></span>
                Ben Carson<span className="brand-dot">.</span>
              </div>
              <p className="footer-brand-desc">
                Crafting robust web applications and intuitive interfaces. Available for select freelance, contract, and full-time opportunities.
              </p>
              <div className="footer-socials">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="GitHub">
                  <GithubIcon size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn">
                  <LinkedinIcon size={16} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Twitter">
                  <TwitterIcon size={16} />
                </a>
              </div>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-heading">Navigation</h4>
              <ul className="footer-nav-list">
                <li><button onClick={() => scrollTo('home')}>Home</button></li>
                <li><button onClick={() => scrollTo('services')}>Services</button></li>
                <li><button onClick={() => scrollTo('about')}>About Me</button></li>
                <li><button onClick={() => scrollTo('portfolio')}>Portfolio</button></li>
                <li><button onClick={() => scrollTo('client')}>Testimonials</button></li>
                <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-nav-list">
                <li><button onClick={() => { handleSelectService('Web Development'); scrollTo('contact'); }}>Web Development</button></li>
                <li><button onClick={() => { handleSelectService('UI / UX Design'); scrollTo('contact'); }}>UI/UX Prototyping</button></li>
                <li><button onClick={() => { handleSelectService('Digital Branding'); scrollTo('contact'); }}>Brand Strategy</button></li>
                <li><button onClick={() => { handleSelectService('Consultation'); scrollTo('contact'); }}>Architecture Audit</button></li>
              </ul>
            </div>

            <div className="footer-cta-col glass-card">
              <h4 className="footer-cta-title">Have a project in mind?</h4>
              <p className="footer-cta-desc">Let's turn your vision into an exceptional product.</p>
              <button 
                className="btn-primary footer-cta-btn"
                onClick={() => scrollTo('contact')}
              >
                <span>Start a Conversation</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          <div className="footer-bottom-row">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Ben Carson. Crafted with precision & React.
            </p>
            <div className="footer-bottom-links">
              <button onClick={() => setResumeModalOpen(true)}>View CV</button>
              <span className="bullet-sep">•</span>
              <button onClick={() => scrollTo('home')}>Back to Top</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Modals & Interactive Overlays */}
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />

      <BackToTop />
    </div>
  );
}

export default App;

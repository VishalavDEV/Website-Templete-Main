import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { EnhancedTechBackground } from './components/EnhancedTechBackground';

import { Home } from './pages/Home';
import { EventsPage } from './pages/EventsPage';
import { SpeakersPage } from './pages/SpeakersPage';
import { SchedulePage } from './pages/SchedulePage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { VenuePage } from './pages/VenuePage';
import { ContactPage } from './pages/ContactPage';
import { RegistrationPage } from './pages/RegistrationPage';

import './styles/global.css';

export function App() {
  const [activePage, setActivePage] = useState('home');
  const [isCompletedMode, setIsCompletedMode] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Auto ScrollSpy Listener for updating active Navbar link on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'events', 'speakers', 'schedule', 'gallery', 'venue', 'contact'];
    
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActivePage(sectionId);
            break;
          }
        }
      }
    };

    const handleScrollReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };

    const onScroll = () => {
      handleScrollSpy();
      handleScrollReveal();
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    setActivePage(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenRegister = () => {
    setActivePage('register');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTicket = (ticket) => {
    setSelectedTicket(ticket);
    setActivePage('register');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-main-wrapper" style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* 1-Second Entrance Loading Screen */}
      {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}

      {/* Global Interactive Animated Tech Background Across ALL Pages */}
      <EnhancedTechBackground activePage={activePage} />

      {/* Subtle Desktop Cursor Dot */}
      <CustomCursor />

      {/* Foreground Content Stack */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Sticky Blurred Navbar */}
        <Navbar
          activePage={activePage}
          setActivePage={handleNavClick}
          isCompletedMode={isCompletedMode}
          setIsCompletedMode={setIsCompletedMode}
          onOpenRegister={handleOpenRegister}
        />

        {/* Main Page Routing Switcher */}
        <main className="page-transition-container">
          {activePage === 'home' || ['about', 'events', 'speakers', 'schedule', 'gallery', 'venue', 'contact'].includes(activePage) ? (
            <Home
              isCompletedMode={isCompletedMode}
              onOpenRegister={handleOpenRegister}
              onNavigate={handleNavClick}
              onSelectTicket={handleSelectTicket}
            />
          ) : null}

          {activePage === 'register' && (
            <RegistrationPage
              selectedTicket={selectedTicket}
              onSelectTicket={handleSelectTicket}
            />
          )}

          {activePage === 'past-events' && (
            <EventsPage onRegister={handleOpenRegister} onNavigate={handleNavClick} />
          )}
        </main>

        {/* Large Commercial Footer */}
        <Footer onNavigate={handleNavClick} />

        {/* Floating Scroll to Top */}
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;

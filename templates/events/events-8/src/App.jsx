import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Global Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import TerminalWidget from './components/TerminalWidget';
import HelpDeskModal from './components/HelpDeskModal';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import SchedulePage from './pages/SchedulePage';
import Challenges from './pages/Challenges';
import Teams from './pages/Teams';
import Mentors from './pages/Mentors';
import Prizes from './pages/Prizes';
import LeaderboardPage from './pages/LeaderboardPage';
import Sponsors from './pages/Sponsors';
import Venue from './pages/Venue';
import Food from './pages/Food';
import Workshops from './pages/Workshops';
import Rules from './pages/Rules';
import Registration from './pages/Registration';
import FAQPage from './pages/FAQPage';
import Contact from './pages/Contact';

// Scroll to top helper on route change
const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* CRT Overlay Effect */}
      <div className="crt-overlay" />

      {/* Matrix Particle Canvas */}
      <ParticleBackground />

      {/* Custom Neon Follower Cursor */}
      <CustomCursor />

      {/* Scroll Progress Top Bar */}
      <ScrollProgress />

      {/* Router Scroll Helper */}
      <ScrollToTopOnRoute />

      {/* Fixed Sticky Cyberpunk Navbar */}
      <Navbar />

      {/* Main Page Route Views */}
      <main style={{ flex: 1, zIndex: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/prizes" element={<Prizes />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/food" element={<Food />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Interactive Terminal Widget */}
      <TerminalWidget />

      {/* Hacker Help Desk Modal */}
      <HelpDeskModal />

      {/* Back To Top Floating Action */}
      <ScrollToTop />

      {/* Futuristic Footer */}
      <Footer />
    </div>
  );
}

export default App;

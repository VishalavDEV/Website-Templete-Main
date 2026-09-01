import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import Home from './pages/Home';
import About from './pages/About';
import RaceInfo from './pages/RaceInfo';
import Schedule from './pages/Schedule';
import Registration from './pages/Registration';
import RoutePage from './pages/Route';
import Participants from './pages/Participants';
import Gallery from './pages/Gallery';
import Sponsors from './pages/Sponsors';
import Training from './pages/Training';
import Volunteers from './pages/Volunteers';
import RaceExpo from './pages/RaceExpo';
import LiveResults from './pages/LiveResults';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Scroll To Top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter basename="/templates/events/events-7">
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-midnight)' }}>
        <AnnouncementBar />
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/race-info" element={<RaceInfo />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/route" element={<RoutePage />} />
            <Route path="/participants" element={<Participants />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/training" element={<Training />} />
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/expo" element={<RaceExpo />} />
            <Route path="/results" element={<LiveResults />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}

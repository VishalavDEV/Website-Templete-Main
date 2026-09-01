import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import Global & Page Styles
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/gallery.css';
import './styles/pages.css';
import './styles/animations.css';
import './styles/responsive.css';

// Import Reusable Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PetalAnimation from './components/PetalAnimation';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import MusicToggle from './components/MusicToggle';
import BackToTop from './components/BackToTop';

// Import All Page Components
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import WeddingEvents from './pages/WeddingEvents';
import Schedule from './pages/Schedule';
import Venue from './pages/Venue';
import Gallery from './pages/Gallery';
import Family from './pages/Family';
import WeddingParty from './pages/WeddingParty';
import RSVP from './pages/RSVP';
import GiftRegistry from './pages/GiftRegistry';
import DressCode from './pages/DressCode';
import FoodMenu from './pages/FoodMenu';
import TravelStay from './pages/TravelStay';
import Memories from './pages/Memories';
import Wishes from './pages/Wishes';
import Invitation from './pages/Invitation';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Scroll to top automatically on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router basename="/templates/events/events-9">
      <ScrollToTop />
      
      {/* Global Interactive Overlay Components */}
      <ScrollProgress />
      <PetalAnimation />
      <CustomCursor />
      
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Routing */}
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/events" element={<WeddingEvents />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/family" element={<Family />} />
          <Route path="/wedding-party" element={<WeddingParty />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/gift-registry" element={<GiftRegistry />} />
          <Route path="/dress-code" element={<DressCode />} />
          <Route path="/menu" element={<FoodMenu />} />
          <Route path="/travel" element={<TravelStay />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/wishes" element={<Wishes />} />
          <Route path="/invitation" element={<Invitation />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Global Floating Utilities */}
      <MusicToggle />
      <BackToTop />

      {/* Footer */}
      <Footer />
    </Router>
  );
}

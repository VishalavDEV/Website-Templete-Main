import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Styles
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/pages.css';
import './styles/cards.css';
import './styles/animations.css';
import './styles/responsive.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import MusicParticles from './components/MusicParticles';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Artists from './pages/Artists';
import Schedule from './pages/Schedule';
import Events from './pages/Events';
import Experience from './pages/Experience';
import Stages from './pages/Stages';
import Tickets from './pages/Tickets';
import GalleryPage from './pages/GalleryPage';
import News from './pages/News';
import Venue from './pages/Venue';
import Contact from './pages/Contact';
import FAQPage from './pages/FAQPage';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router basename="/templates/events/events-6">
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#050505', color: '#FFFFFF' }}>
        <CustomCursor />
        <AnimatedBackground />
        <MusicParticles />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/events" element={<Events />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/stages" element={<Stages />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

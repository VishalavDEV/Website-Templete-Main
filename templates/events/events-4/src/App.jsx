import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingEquipment from './components/FloatingEquipment';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';

import Home from './pages/Home';
import About from './pages/About';
import Gym from './pages/Gym';
import Trainers from './pages/Trainers';
import Programs from './pages/Programs';
import Classes from './pages/Classes';
import Equipment from './pages/Equipment';
import Event from './pages/Event';
import Schedule from './pages/Schedule';
import EventCategories from './pages/EventCategories';
import Pricing from './pages/Pricing';
import Membership from './pages/Membership';
import Registration from './pages/Registration';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Leaderboard from './pages/Leaderboard';
import Nutrition from './pages/Nutrition';
import Transformation from './pages/Transformation';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/animations.css';
import './styles/cards.css';
import './styles/responsive.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      <CustomCursor />
      <FloatingEquipment />
      <Navbar />

      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gym" element={<Gym />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/event" element={<Event />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/categories" element={<EventCategories />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/transformation" element={<Transformation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
};

export default App;

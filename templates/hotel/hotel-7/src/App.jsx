import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';

// Pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import Experiences from './pages/Experiences';
import Dining from './pages/Dining';
import Spa from './pages/Spa';
import Gallery from './pages/Gallery';
import Offers from './pages/Offers';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial timeout for luxury loader screen to perform
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Scroll route watcher */}
      <ScrollToTop />
      
      {/* Cursor follower */}
      <CustomCursor />

      {/* Screen Loader */}
      {loading && <Loader />}

      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#faf8f5' }}>
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/spa" element={<Spa />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

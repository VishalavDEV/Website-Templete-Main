import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

// Page imports
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// Scroll to Top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-purple-500 selection:text-white relative bg-white overflow-hidden">
      
      {/* 1. Custom Pointer Cursor */}
      <CustomCursor />

      {/* 2. Scroll Top Action */}
      <ScrollToTop />

      {/* 3. Global Interactive Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader finishLoading={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* 4. Global Navigation Header */}
          <Navbar />

          {/* 5. Animated Main Route Content */}
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>

          {/* 6. Global Navigation Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}

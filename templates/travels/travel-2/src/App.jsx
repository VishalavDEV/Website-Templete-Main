import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

// Page Imports
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetails from './pages/DestinationDetails';
import Experiences from './pages/Experiences';
import Packages from './pages/Packages';
import TravelPlanner from './pages/TravelPlanner';
import TravelStories from './pages/TravelStories';
import TravelGuide from './pages/TravelGuide';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import TravelCategories from './pages/TravelCategories';
import NotFound from './pages/NotFound';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  // Load favorites from local storage if available
  useEffect(() => {
    const saved = localStorage.getItem('favorites_wishlist');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const handleAddFavorite = (destId) => {
    setFavorites((prev) => {
      let updated;
      if (prev.includes(destId)) {
        updated = prev.filter((id) => id !== destId);
      } else {
        updated = [...prev, destId];
      }
      localStorage.setItem('favorites_wishlist', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <Router basename="/templates/travels/travel-2">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <div className="relative min-h-screen bg-gradient-soft text-stone-800 flex flex-col justify-between">
            {/* Travel custom themed cursor */}
            <CustomCursor />

            {/* Navigation Header */}
            <Navbar favoriteCount={favorites.length} />

            {/* Core Application Pages */}
            <main className="flex-grow">
              <Routes>
                <Route
                  path="/"
                  element={<Home onAddFavorite={handleAddFavorite} favorites={favorites} />}
                />
                <Route
                  path="/destinations"
                  element={<Destinations onAddFavorite={handleAddFavorite} favorites={favorites} />}
                />
                <Route
                  path="/destinations/:id"
                  element={<DestinationDetails onAddFavorite={handleAddFavorite} favorites={favorites} />}
                />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/planner" element={<TravelPlanner />} />
                <Route path="/stories" element={<TravelStories />} />
                <Route path="/guide" element={<TravelGuide />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/categories/:name" element={<TravelCategories />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            {/* Footer details */}
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout & Animations
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppLoader from './components/animations/AppLoader';
import PageTransition from './components/animations/PageTransition';

// Pages
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetails from './pages/DestinationDetails';
import Tours from './pages/Tours';
import TourDetails from './pages/TourDetails';
import Hotels from './pages/Hotels';
import HotelDetails from './pages/HotelDetails';
import Experiences from './pages/Experiences';
import Transportation from './pages/Transportation';
import TripPlanner from './pages/TripPlanner';
import Booking from './pages/Booking';
import TravelStories from './pages/TravelStories';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();

  // Scroll to top on path change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          } 
        />
        <Route 
          path="/destinations" 
          element={
            <PageTransition>
              <Destinations />
            </PageTransition>
          } 
        />
        <Route 
          path="/destinations/:id" 
          element={
            <PageTransition>
              <DestinationDetails />
            </PageTransition>
          } 
        />
        <Route 
          path="/tours" 
          element={
            <PageTransition>
              <Tours />
            </PageTransition>
          } 
        />
        <Route 
          path="/tours/:id" 
          element={
            <PageTransition>
              <TourDetails />
            </PageTransition>
          } 
        />
        <Route 
          path="/hotels" 
          element={
            <PageTransition>
              <Hotels />
            </PageTransition>
          } 
        />
        <Route 
          path="/hotels/:id" 
          element={
            <PageTransition>
              <HotelDetails />
            </PageTransition>
          } 
        />
        <Route 
          path="/experiences" 
          element={
            <PageTransition>
              <Experiences />
            </PageTransition>
          } 
        />
        <Route 
          path="/transportation" 
          element={
            <PageTransition>
              <Transportation />
            </PageTransition>
          } 
        />
        <Route 
          path="/planner" 
          element={
            <PageTransition>
              <TripPlanner />
            </PageTransition>
          } 
        />
        <Route 
          path="/booking" 
          element={
            <PageTransition>
              <Booking />
            </PageTransition>
          } 
        />
        <Route 
          path="/stories" 
          element={
            <PageTransition>
              <TravelStories />
            </PageTransition>
          } 
        />
        <Route 
          path="/gallery" 
          element={
            <PageTransition>
              <Gallery />
            </PageTransition>
          } 
        />
        <Route 
          path="/about" 
          element={
            <PageTransition>
              <About />
            </PageTransition>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [appLoading, setAppLoading] = useState(true);

  return (
    <HashRouter>
      {appLoading ? (
        <AppLoader onComplete={() => setAppLoading(false)} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      )}
    </HashRouter>
  );
}

export default App;

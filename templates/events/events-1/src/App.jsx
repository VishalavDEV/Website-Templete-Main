import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Layout & Utility Components
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import MyScheduleDrawer from './components/MyScheduleDrawer';
import Toast from './components/Toast';
import AnimatedBackground from './components/AnimatedBackground';

// Pages
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import About from './pages/About';
import Speakers from './pages/Speakers';
import Schedule from './pages/Schedule';
import Venue from './pages/Venue';
import Tickets from './pages/Tickets';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

import { scheduleData } from './data/schedule';

export default function App() {
  // Theme State with localStorage persistence (Default Light Mode)
  const [theme, setTheme] = useState(() => {
    return 'light';
  });

  // Initial Splash Screen Loader
  const [loading, setLoading] = useState(true);

  // My Schedule Saved Sessions State with localStorage persistence
  const [savedSessionIds, setSavedSessionIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('eventora_myschedule')) || [];
    } catch {
      return [];
    }
  });

  // Modal States
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState(null);
  const [isMyScheduleOpen, setIsMyScheduleOpen] = useState(false);

  // Toast Notification State
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Update theme on <html> tag
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('eventora_theme', theme);
  }, [theme]);

  // Initial Loading Screen timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleOpenRegisterModal = (plan = null) => {
    setSelectedPlanForModal(plan);
    setIsRegisterModalOpen(true);
  };

  // Toggle Bookmark for Sessions
  const handleToggleBookmark = (session) => {
    let updated;
    if (savedSessionIds.includes(session.id)) {
      updated = savedSessionIds.filter(id => id !== session.id);
      showToast(`Removed "${session.title}" from My Schedule.`);
    } else {
      updated = [...savedSessionIds, session.id];
      showToast(`Saved "${session.title}" to My Schedule!`);
    }
    setSavedSessionIds(updated);
    localStorage.setItem('eventora_myschedule', JSON.stringify(updated));
  };

  // Remove Session directly from MySchedule drawer
  const handleRemoveSavedSession = (sessionId) => {
    const updated = savedSessionIds.filter(id => id !== sessionId);
    setSavedSessionIds(updated);
    localStorage.setItem('eventora_myschedule', JSON.stringify(updated));
    showToast('Session removed from schedule.');
  };

  // Get full saved session objects across all days
  const allSessions = scheduleData.flatMap(day => day.sessions);
  const savedSessionsList = allSessions.filter(s => savedSessionIds.includes(s.id));

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {/* Animated Background Canvas & Tech Mesh */}
        <AnimatedBackground theme={theme} />

        {/* Navigation Header */}
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenRegisterModal={handleOpenRegisterModal}
          savedScheduleCount={savedSessionIds.length}
          onOpenMySchedule={() => setIsMyScheduleOpen(true)}
        />

        {/* Main Routes */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenRegisterModal={handleOpenRegisterModal}
                  savedSessionIds={savedSessionIds}
                  onToggleBookmark={handleToggleBookmark}
                  showToast={showToast}
                />
              }
            />
            <Route path="/events" element={<Events />} />
            <Route
              path="/events/:id"
              element={<EventDetails onOpenRegisterModal={handleOpenRegisterModal} />}
            />
            <Route
              path="/about"
              element={<About onOpenRegisterModal={handleOpenRegisterModal} />}
            />
            <Route path="/speakers" element={<Speakers />} />
            <Route
              path="/schedule"
              element={
                <Schedule
                  savedSessionIds={savedSessionIds}
                  onToggleBookmark={handleToggleBookmark}
                />
              }
            />
            <Route path="/venue" element={<Venue />} />
            <Route
              path="/tickets"
              element={<Tickets onOpenRegisterModal={handleOpenRegisterModal} />}
            />
            <Route path="/contact" element={<Contact showToast={showToast} />} />
            <Route path="/faq" element={<FAQ showToast={showToast} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Back to Top Button */}
        <BackToTop />

        {/* Global Registration Modal */}
        <RegistrationModal
          isOpen={isRegisterModalOpen}
          onClose={() => setIsRegisterModalOpen(false)}
          selectedPlan={selectedPlanForModal}
          showToast={showToast}
        />

        {/* My Schedule Saved Sessions Drawer */}
        <MyScheduleDrawer
          isOpen={isMyScheduleOpen}
          onClose={() => setIsMyScheduleOpen(false)}
          savedSessions={savedSessionsList}
          onRemoveSession={handleRemoveSavedSession}
        />

        {/* Toast Alert Notification */}
        {toast.show && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast({ show: false, message: '', type: 'success' })}
          />
        )}
      </div>
    </Router>
  );
}

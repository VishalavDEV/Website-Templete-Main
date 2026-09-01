import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import Portfolio from './components/Portfolio';
import Estimator from './components/Estimator';
import About from './components/About';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import InquiriesDrawer from './components/InquiriesDrawer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('knack_theme') || 'dark';
  });
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [inquiriesOpen, setInquiriesOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [apiStatus, setApiStatus] = useState('CHECKING');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    localStorage.setItem('knack_theme', theme);
  }, [theme]);

  // Health check for Spring Boot Backend
  useEffect(() => {
    const checkHealth = () => {
      fetch('/api/health')
        .then((res) => {
          if (res.ok) {
            setApiStatus('UP');
          } else {
            setApiStatus('DOWN');
          }
        })
        .catch(() => {
          setApiStatus('CONNECTING');
        });
    };

    checkHealth();
    const interval = setInterval(checkHealth, 8000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  return (
    <div className="knack-app">
      <TopBar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenInquiries={() => setInquiriesOpen(true)}
        apiStatus={apiStatus}
      />
      <Navbar onOpenConsultModal={() => setConsultModalOpen(true)} />
      <main>
        <Hero onOpenConsultModal={() => setConsultModalOpen(true)} />
        <Methodology />
        <Portfolio onOpenConsultModal={() => setConsultModalOpen(true)} />
        <Estimator onOpenConsultModal={() => setConsultModalOpen(true)} />
        <About />
      </main>
      <Footer onOpenConsultModal={() => setConsultModalOpen(true)} />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Spring Boot Inquiries List Drawer */}
      <InquiriesDrawer
        isOpen={inquiriesOpen}
        onClose={() => setInquiriesOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="knack-toast">
          {toastMessage}
        </div>
      )}
    </div>
  );
}

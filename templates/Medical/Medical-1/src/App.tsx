import React, { useState, useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import { UserRole } from './types';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Modal } from './components/common/Modal';
import { AppointmentBookingFlow } from './components/booking/AppointmentBookingFlow';

// Public Pages
import { HomePage } from './pages/public/HomePage';
import { AboutPage } from './pages/public/AboutPage';
import { ServicesPage } from './pages/public/ServicesPage';
import { DepartmentsPage } from './pages/public/DepartmentsPage';
import { DoctorsPage } from './pages/public/DoctorsPage';
import { DoctorDetailPage } from './pages/public/DoctorDetailPage';
import { GalleryPage } from './pages/public/GalleryPage';
import { TestimonialsPage } from './pages/public/TestimonialsPage';
import { FAQPage } from './pages/public/FAQPage';
import { ContactPage } from './pages/public/ContactPage';
import { LoginPage } from './pages/public/LoginPage';
import { RegisterPage } from './pages/public/RegisterPage';

// Dashboard Pages
import { PatientDashboard } from './pages/dashboard/PatientDashboard';
import { DoctorDashboard } from './pages/dashboard/DoctorDashboard';
import { AdminDashboard } from './pages/dashboard/AdminDashboard';

import { BackToTop } from './components/common/BackToTop';

export function App() {
  const { user } = useAuth();

  const [currentView, setCurrentView] = useState<string>('home');
  const [viewParams, setViewParams] = useState<Record<string, string>>({});

  // Appointment Booking Flow Modal State
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<{ doctorId?: string; departmentId?: string }>({});

  // On initial page load/refresh, force scroll to top (0,0) and disable auto-scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleNavigate = (view: string, params: Record<string, string> = {}) => {
    setCurrentView(view);
    setViewParams(params);

    setTimeout(() => {
      if (params.section) {
        const element = document.getElementById(params.section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 40);
  };

  const handleOpenBooking = (prefill?: { doctorId?: string; departmentId?: string }) => {
    setBookingPrefill(prefill || {});
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setBookingPrefill({});
  };

  const handleLoginSuccess = (role: UserRole) => {
    if (role === UserRole.ADMIN) {
      setCurrentView('admin-dashboard');
    } else if (role === UserRole.DOCTOR) {
      setCurrentView('doctor-dashboard');
    } else {
      setCurrentView('patient-dashboard');
    }
  };

  // Render current view
  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking()} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />;
      case 'departments':
        return (
          <DepartmentsPage
            selectedDeptId={viewParams.deptId}
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        );
      case 'doctors':
        return (
          <DoctorsPage
            initialSearch={viewParams.search || ''}
            initialDeptId={viewParams.deptId || ''}
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        );
      case 'doctor-detail':
        return (
          <DoctorDetailPage
            doctorId={viewParams.docId || 'doc-1'}
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        );
      case 'gallery':
        return <GalleryPage />;
      case 'testimonials':
        return <TestimonialsPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQPage onOpenBooking={() => handleOpenBooking()} onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'login':
        return <LoginPage onNavigate={handleNavigate} onLoginSuccess={handleLoginSuccess} />;
      case 'register':
        return (
          <RegisterPage
            onNavigate={handleNavigate}
            onRegisterSuccess={() => setCurrentView('patient-dashboard')}
          />
        );
      case 'patient-dashboard':
        return (
          <PatientDashboard
            onOpenBooking={() => handleOpenBooking()}
            onNavigateHome={() => handleNavigate('home')}
          />
        );
      case 'doctor-dashboard':
        return <DoctorDashboard />;
      case 'admin-dashboard':
        return <AdminDashboard />;
      default:
        return <HomePage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />;
    }
  };

  const isDashboardView =
    currentView === 'patient-dashboard' ||
    currentView === 'doctor-dashboard' ||
    currentView === 'admin-dashboard';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      {/* Global Navigation Header */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Footer on public pages */}
      {!isDashboardView && (
        <Footer
          onNavigate={handleNavigate}
          onOpenBooking={() => handleOpenBooking()}
        />
      )}

      {/* Global Interactive Booking Flow Modal */}
      {isBookingModalOpen && (
        <Modal
          isOpen={isBookingModalOpen}
          onClose={handleCloseBooking}
          title="Schedule a Medical Appointment"
          subtitle="Real-time clinical booking with instant doctor confirmation"
          maxWidth="4xl"
        >
          <AppointmentBookingFlow
            prefillDepartmentId={bookingPrefill.departmentId}
            prefillDoctorId={bookingPrefill.doctorId}
            onClose={handleCloseBooking}
            onSuccess={() => {
              // Optionally refresh or keep open to allow user to print confirmation
            }}
          />
        </Modal>
      )}
      {/* Floating Back-To-Top Button */}
      <BackToTop />
    </div>
  );
}
export default App;

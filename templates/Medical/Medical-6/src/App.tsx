import { useState } from 'react';
import type { UserRole, Doctor } from './types';
import { RoleSwitcherBanner } from './components/RoleSwitcherBanner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { DoctorDetailModal } from './components/DoctorDetailModal';

// Views
import { HomeView } from './views/HomeView';
import { DoctorsView } from './views/DoctorsView';
import { DepartmentsView } from './views/DepartmentsView';
import { ServicesView } from './views/ServicesView';
import { BlogView } from './views/BlogView';
import { PatientPortalView } from './views/PatientPortalView';
import { DoctorPortalView } from './views/DoctorPortalView';
import { AdminPortalView } from './views/AdminPortalView';

export function App() {
  const [currentRole, setCurrentRole] = useState<UserRole>('guest');
  const [activeView, setActiveView] = useState<string>('home');

  // Modals state
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingDoctor, setBookingDoctor] = useState<Doctor | null>(null);

  const [selectedDoctorProfile, setSelectedDoctorProfile] = useState<Doctor | null>(null);

  // Handle switching role
  const handleRoleChange = (role: UserRole) => {
    setCurrentRole(role);
    if (role === 'patient') setActiveView('patient');
    else if (role === 'doctor') setActiveView('doctor');
    else if (role === 'admin') setActiveView('admin');
    else if (role === 'guest' && (activeView === 'patient' || activeView === 'doctor' || activeView === 'admin')) {
      setActiveView('home');
    }
  };

  const handleOpenBooking = (doctor?: Doctor) => {
    setBookingDoctor(doctor || null);
    setIsBookingOpen(true);
  };

  const handleViewDoctorProfile = (doctor: Doctor) => {
    setSelectedDoctorProfile(doctor);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8fafc' }}>
      {/* 1. Interactive Role Switcher Banner */}
      <RoleSwitcherBanner currentRole={currentRole} onRoleChange={handleRoleChange} />

      {/* 2. Responsive Header Navigation */}
      <Navbar
        currentRole={currentRole}
        activeView={activeView}
        onNavigate={view => {
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 3. Main View Renderer */}
      <main style={{ flex: 1 }}>
        {activeView === 'home' && (
          <HomeView
            onNavigate={view => {
              setActiveView(view);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenBooking={handleOpenBooking}
            onViewDoctorProfile={handleViewDoctorProfile}
          />
        )}

        {activeView === 'doctors' && (
          <DoctorsView
            onOpenBooking={handleOpenBooking}
            onViewDoctorProfile={handleViewDoctorProfile}
          />
        )}

        {activeView === 'departments' && (
          <DepartmentsView
            onNavigate={setActiveView}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {activeView === 'services' && (
          <ServicesView
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {activeView === 'blog' && <BlogView />}

        {activeView === 'patient' && (
          <PatientPortalView
            onOpenBooking={() => handleOpenBooking()}
            onNavigate={setActiveView}
          />
        )}

        {activeView === 'doctor' && <DoctorPortalView />}

        {activeView === 'admin' && <AdminPortalView />}
      </main>

      {/* 4. Global Footer */}
      <Footer onNavigate={view => {
        setActiveView(view);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      {/* 5. Multi-Step Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        preselectedDoctor={bookingDoctor}
        onClose={() => setIsBookingOpen(false)}
        onSuccess={() => {
          // If booked successfully, update role/view if desired
        }}
      />

      {/* 6. Doctor Profile & Reviews Modal */}
      <DoctorDetailModal
        doctor={selectedDoctorProfile}
        onClose={() => setSelectedDoctorProfile(null)}
        onBookAppointment={doc => handleOpenBooking(doc)}
      />
    </div>
  );
}

export default App;

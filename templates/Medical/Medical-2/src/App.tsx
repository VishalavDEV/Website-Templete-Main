import React, { useState, useEffect } from 'react';
import { Doctor, Service, ToastMessage } from './types';
import { storageService } from './services/storageService';

// Components
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { DepartmentsSection } from './components/DepartmentsSection';
import { DoctorsSection } from './components/DoctorsSection';
import { AppointmentWizard } from './components/AppointmentWizard';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { EmergencyModal } from './components/EmergencyModal';
import { DoctorProfileModal } from './components/DoctorProfileModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { MyAppointmentsModal } from './components/MyAppointmentsModal';
import { ToastContainer } from './components/Toast';

export default function App() {
  // Navigation & Scroll State
  const [activeSection, setActiveSection] = useState<string>('home');

  // Modals visibility state
  const [isEmergencyOpen, setIsEmergencyOpen] = useState<boolean>(false);
  const [isMyAppointmentsOpen, setIsMyAppointmentsOpen] = useState<boolean>(false);
  const [selectedDoctorForProfile, setSelectedDoctorForProfile] = useState<Doctor | null>(null);
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<Service | null>(null);
  const [privacyTermsModal, setPrivacyTermsModal] = useState<{ isOpen: boolean; tab: 'privacy' | 'terms' }>({
    isOpen: false,
    tab: 'privacy',
  });

  // Preselection state for Appointment Wizard
  const [preselectedDeptId, setPreselectedDeptId] = useState<string | undefined>(undefined);
  const [preselectedDocId, setPreselectedDocId] = useState<string | undefined>(undefined);

  // Doctors filter state driven from Hero / Depts
  const [doctorDeptFilter, setDoctorDeptFilter] = useState<string>('All');
  const [doctorSearchQuery, setDoctorSearchQuery] = useState<string>('');

  // Live appointment count badge
  const [appointmentCount, setAppointmentCount] = useState<number>(0);

  // Toast notifications
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: 'success' | 'info' | 'error' | 'warning', message: string) => {
    const id = 'toast-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4);
    setToasts((prev) => [...prev, { id, type, message }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync appointment count from localStorage
  const refreshAppointmentCount = () => {
    const appts = storageService.getAppointments();
    setAppointmentCount(appts.filter((a) => a.status === 'Upcoming').length);
  };

  useEffect(() => {
    refreshAppointmentCount();
  }, []);

  // Smooth Navigation Handler
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll spy to update active nav link
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'departments', 'doctors', 'appointment', 'gallery', 'testimonials', 'faq', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger booking with preselection
  const handleStartBooking = (deptId?: string, doctorId?: string) => {
    setPreselectedDeptId(deptId);
    setPreselectedDocId(doctorId);
    scrollToSection('appointment');
  };

  const handleBookService = (service: Service) => {
    handleStartBooking(service.departmentId);
  };

  const handleBookDoctor = (doctor: Doctor) => {
    handleStartBooking(doctor.departmentId, doctor.id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-teal-500 selection:text-white">
      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />

      {/* Main Header / Navbar */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        onOpenMyAppointments={() => setIsMyAppointmentsOpen(true)}
        appointmentCount={appointmentCount}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onBookAppointment={() => handleStartBooking()}
          onFindDoctor={() => scrollToSection('doctors')}
          onExploreDepartments={() => scrollToSection('departments')}
          onOpenEmergency={() => setIsEmergencyOpen(true)}
          onOpenMyAppointments={() => setIsMyAppointmentsOpen(true)}
          onSelectDepartmentForBooking={(deptId) => handleStartBooking(deptId)}
          onSearchQuery={(q) => {
            setDoctorSearchQuery(q);
            scrollToSection('doctors');
          }}
        />

        {/* 2. About Section */}
        <AboutSection
          onBookAppointment={() => handleStartBooking()}
          onExploreDoctors={() => scrollToSection('doctors')}
        />

        {/* 3. Services Section */}
        <ServicesSection
          onSelectServiceDetails={(service) => setSelectedServiceForDetail(service)}
          onBookService={handleBookService}
        />

        {/* 4. Departments Section */}
        <DepartmentsSection
          onSelectDepartmentForBooking={(deptId) => handleStartBooking(deptId)}
          onFilterDoctorsByDepartment={(deptId) => {
            setDoctorDeptFilter(deptId);
            scrollToSection('doctors');
          }}
          onSelectDoctorProfile={(doc) => setSelectedDoctorForProfile(doc)}
        />

        {/* 5. Doctors Directory Section */}
        <DoctorsSection
          onSelectDoctorProfile={(doc) => setSelectedDoctorForProfile(doc)}
          onBookDoctor={handleBookDoctor}
          selectedDepartmentFilter={doctorDeptFilter}
          onDepartmentFilterChange={(deptId) => setDoctorDeptFilter(deptId)}
          searchQuery={doctorSearchQuery}
        />

        {/* 6. Multi-Step Appointment Booking Section */}
        <section id="appointment" className="py-20 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-teal-400 font-extrabold text-xs tracking-wider uppercase bg-teal-950 px-3 py-1 rounded-full border border-teal-800">
                Direct Clinic Scheduling
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Schedule Your Consultation or Diagnostic Scan
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Book a confirmed in-person appointment or virtual telehealth video visit in 7 simple steps. Instant confirmation pass generated upon completion.
              </p>
            </div>

            {/* 7-Step Appointment Wizard Component */}
            <AppointmentWizard
              preselectedDepartmentId={preselectedDeptId}
              preselectedDoctorId={preselectedDocId}
              onAppointmentCreated={(appt) => {
                refreshAppointmentCount();
                addToast('success', `Appointment confirmed with ${appt.doctorName}! Reference: ${appt.appointmentCode}`);
              }}
              onOpenEmergency={() => setIsEmergencyOpen(true)}
            />
          </div>
        </section>

        {/* 7. Gallery Section */}
        <GallerySection />

        {/* 8. Patient Testimonials Section */}
        <TestimonialsSection />

        {/* 9. FAQ Section */}
        <FAQSection
          onContactClick={() => scrollToSection('contact')}
          onBookAppointment={() => handleStartBooking()}
        />

        {/* 10. Contact Section */}
        <ContactSection
          onOpenEmergency={() => setIsEmergencyOpen(true)}
          onBookAppointment={() => handleStartBooking()}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        onOpenPrivacyTerms={(tab) => setPrivacyTermsModal({ isOpen: true, tab })}
        onOpenMyAppointments={() => setIsMyAppointmentsOpen(true)}
      />

      {/* Interactive Modals */}
      {/* 1. Emergency Triage Modal */}
      <EmergencyModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
        onBookUrgentSlot={() => {
          setIsEmergencyOpen(false);
          handleStartBooking();
        }}
      />

      {/* 2. Doctor Detailed Profile Modal */}
      <DoctorProfileModal
        doctor={selectedDoctorForProfile}
        isOpen={!!selectedDoctorForProfile}
        onClose={() => setSelectedDoctorForProfile(null)}
        onBookThisDoctor={(doc) => {
          setSelectedDoctorForProfile(null);
          handleBookDoctor(doc);
        }}
      />

      {/* 3. Service In-Depth Detail Modal */}
      <ServiceDetailModal
        service={selectedServiceForDetail}
        isOpen={!!selectedServiceForDetail}
        onClose={() => setSelectedServiceForDetail(null)}
        onBookThisService={(srv) => {
          setSelectedServiceForDetail(null);
          handleBookService(srv);
        }}
      />

      {/* 4. HIPAA Privacy & Terms of Service Modal */}
      <PrivacyTermsModal
        isOpen={privacyTermsModal.isOpen}
        initialTab={privacyTermsModal.tab}
        onClose={() => setPrivacyTermsModal({ isOpen: false, tab: 'privacy' })}
      />

      {/* 5. Patient Portal / My Appointments Modal */}
      <MyAppointmentsModal
        isOpen={isMyAppointmentsOpen}
        onClose={() => {
          setIsMyAppointmentsOpen(false);
          refreshAppointmentCount();
        }}
        onBookNew={() => {
          setIsMyAppointmentsOpen(false);
          handleStartBooking();
        }}
      />
    </div>
  );
}

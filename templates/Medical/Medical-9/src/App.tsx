/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { CareCategories } from './components/CareCategories';
import { GlucoseChart } from './components/GlucoseChart';
import { WellnessDemo } from './components/WellnessDemo';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Doctors } from './components/Doctors';
import { Programs } from './components/Programs';
import { PatientJourney } from './components/PatientJourney';
import { Technology } from './components/Technology';
import { Testimonials } from './components/Testimonials';
import { Resources } from './components/Resources';
import { FAQ } from './components/FAQ';
import { AppointmentModal } from './components/AppointmentModal';
import { EmergencyModal } from './components/EmergencyModal';
import { Footer } from './components/Footer';
import { ToastContainer, ToastMessage } from './components/UI/Toast';

export default function App() {
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);

  // Preselected modal fields
  const [preselectedDoctor, setPreselectedDoctor] = useState('');
  const [preselectedCategory, setPreselectedCategory] = useState('');
  const [preselectedProgram, setPreselectedProgram] = useState('');

  // Toast system
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (title: string, message: string, type: 'success' | 'info' | 'warning' = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Handlers for opening appointment modal with preselected options
  const openAppointment = (options?: { doctor?: string; category?: string; program?: string }) => {
    setPreselectedDoctor(options?.doctor || '');
    setPreselectedCategory(options?.category || '');
    setPreselectedProgram(options?.program || '');
    setAppointmentModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF8F3] text-[#242124] flex flex-col font-sans selection:bg-[#F2B59F] selection:text-[#392B3A]">
      
      {/* 1. Announcement Bar */}
      {!announcementDismissed && (
        <AnnouncementBar
          onDismiss={() => {
            setAnnouncementDismissed(true);
            showToast('Announcement Dismissed', 'You can re-open screening details via Book Consultation button.');
          }}
          onLearnMore={() => openAppointment({ category: 'Free Diabetes Risk Screening' })}
        />
      )}

      {/* 2. Navigation */}
      <Navbar
        onOpenAppointment={() => openAppointment()}
        onOpenEmergency={() => setEmergencyModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 3. Hero Section */}
        <Hero
          onOpenAppointment={() => openAppointment()}
          onExploreCare={() => scrollToSection('care')}
        />

        {/* 4. Trust Stats Strip */}
        <TrustStats />

        {/* 5. Diabetes Care Categories */}
        <CareCategories
          onBookConsultation={(categoryTitle) => openAppointment({ category: categoryTitle })}
        />

        {/* 6. Interactive Glucose Section */}
        <GlucoseChart />

        {/* 7. Lifestyle Balance Simulator */}
        <WellnessDemo />

        {/* 8. Why Choose Us (Editorial Layout) */}
        <WhyChooseUs
          onOpenAppointment={() => openAppointment()}
        />

        {/* 9. Specialist Doctors */}
        <Doctors
          onBookWithDoctor={(doctorName) => openAppointment({ doctor: doctorName })}
        />

        {/* 10. Care Programs */}
        <Programs
          onSelectProgram={(programName) => openAppointment({ program: programName })}
        />

        {/* 11. Patient Journey Timeline */}
        <PatientJourney />

        {/* 12. Medical Technology Section */}
        <Technology />

        {/* 13. Patient Testimonials Carousel */}
        <Testimonials />

        {/* 14. Health Knowledge Center */}
        <Resources
          onBookmark={(title) => showToast('Guide Bookmarked', `"${title}" saved to your reading list.`)}
        />

        {/* 15. FAQ Accordion */}
        <FAQ />

        {/* 16. Mid-Page Appointment CTA Banner */}
        <section className="py-16 bg-[#392B3A] text-white text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2B59F]">
              Take The Next Step in Your Health Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
              Ready for diabetes care designed around you?
            </h2>
            <p className="text-sm sm:text-base text-[#F5F0E8]/80 max-w-xl mx-auto font-light leading-relaxed">
              Schedule your 60-minute baseline evaluation with our multidisciplinary faculty today.
            </p>
            <div className="pt-2">
              <button
                onClick={() => openAppointment()}
                className="px-8 py-4 rounded-xl text-base font-semibold text-[#392B3A] bg-[#F2B59F] hover:bg-white transition-colors shadow-soft-lg"
              >
                Book Your Consultation Now
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* 17. Footer */}
      <Footer
        onOpenAppointment={() => openAppointment()}
        onOpenEmergency={() => setEmergencyModalOpen(true)}
      />

      {/* Global Modals */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        preselectedDoctor={preselectedDoctor}
        preselectedCategory={preselectedCategory}
        preselectedProgram={preselectedProgram}
        onShowToast={showToast}
      />

      <EmergencyModal
        isOpen={emergencyModalOpen}
        onClose={() => setEmergencyModalOpen(false)}
        onExploreInfo={() => scrollToSection('why-choose-us')}
      />

      {/* Global Toast Notifications */}
      <ToastContainer
        toasts={toasts}
        onDismiss={dismissToast}
      />

    </div>
  );
}

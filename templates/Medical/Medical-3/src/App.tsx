/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustSection } from './components/TrustSection';
import { DepartmentsSection } from './components/DepartmentsSection';
import { ServicesSection } from './components/ServicesSection';
import { DoctorDiscoverySection } from './components/DoctorDiscoverySection';
import { AboutSection } from './components/AboutSection';
import { PatientDashboard } from './components/PatientDashboard';
import { DoctorDashboard } from './components/DoctorDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { EmergencySection } from './components/EmergencySection';
import { Footer } from './components/Footer';
import { DoctorProfileModal } from './components/DoctorProfileModal';
import { BookingModal } from './components/BookingModal';
import { TelehealthRoomModal } from './components/TelehealthRoomModal';
import { CommandPalette } from './components/CommandPalette';
import { ToastContainer } from './components/ToastContainer';

const MainContent: React.FC = () => {
  const { activeTab } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-teal-100 selection:text-teal-900">
      {/* Navigation */}
      <Navbar />

      {/* Dynamic View Router */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <HeroSection />
              <TrustSection />
              <DepartmentsSection />
              <ServicesSection />
              <DoctorDiscoverySection />
            </motion.div>
          )}

          {activeTab === 'departments' && (
            <motion.div
              key="departments"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="pt-12"
            >
              <DepartmentsSection />
              <ServicesSection />
            </motion.div>
          )}

          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="pt-12"
            >
              <ServicesSection />
              <DepartmentsSection />
            </motion.div>
          )}

          {activeTab === 'doctors' && (
            <motion.div
              key="doctors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="pt-12"
            >
              <DoctorDiscoverySection />
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <AboutSection />
            </motion.div>
          )}

          {activeTab === 'patient_dashboard' && (
            <motion.div
              key="patient_dashboard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <PatientDashboard />
            </motion.div>
          )}

          {activeTab === 'doctor_dashboard' && (
            <motion.div
              key="doctor_dashboard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <DoctorDashboard />
            </motion.div>
          )}

          {activeTab === 'admin_dashboard' && (
            <motion.div
              key="admin_dashboard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <AdminDashboard />
            </motion.div>
          )}

          {activeTab === 'emergency' && (
            <motion.div
              key="emergency"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <EmergencySection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Sophisticated Footer */}
      <Footer />

      {/* Global Modals & Overlays */}
      <DoctorProfileModal />
      <BookingModal />
      <TelehealthRoomModal />
      <CommandPalette />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

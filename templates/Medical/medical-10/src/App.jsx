import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppointmentModal from "./components/AppointmentModal";

import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import Departments from "./pages/Departments";
import Services from "./pages/Services";
import Diagnostics from "./pages/Diagnostics";
import Appointments from "./pages/Appointments";
import Packages from "./pages/Packages";
import PatientResources from "./pages/PatientResources";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import FaqPage from "./pages/FaqPage";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isGlobalModalOpen, setIsGlobalModalOpen] = useState(false);
  const [globalAppointmentData, setGlobalAppointmentData] = useState(null);

  const handleGlobalBook = (data) => {
    setGlobalAppointmentData(
      data || {
        department: "General Consultation",
        doctor: "Dr. Elena Vance",
        bookingRef: Math.floor(100000 + Math.random() * 900000),
        date: "Tomorrow",
        time: "10:00 AM"
      }
    );
    setIsGlobalModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />

      <AppointmentModal
        isOpen={isGlobalModalOpen}
        onClose={() => setIsGlobalModalOpen(false)}
        appointmentData={globalAppointmentData}
      />

      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
        <Navbar onBookClick={handleGlobalBook} />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctors/:id" element={<DoctorDetails />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/services" element={<Services />} />
              <Route path="/diagnostics" element={<Diagnostics />} />
              <Route path="/appointment" element={<Appointments />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/resources" element={<PatientResources />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

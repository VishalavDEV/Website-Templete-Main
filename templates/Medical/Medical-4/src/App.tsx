import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { AIHealthAdvisorModal } from './components/common/AIHealthAdvisorModal';
import { useAutoScrollReveal } from './components/common/ScrollReveal';
import { RouteTransition } from './components/common/RouteTransition';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Departments } from './pages/Departments';
import { DepartmentDetail } from './pages/DepartmentDetail';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Doctors } from './pages/Doctors';
import { DoctorDetail } from './pages/DoctorDetail';
import { Appointment } from './pages/Appointment';
import { Testimonials } from './pages/Testimonials';
import { FAQ } from './pages/FAQ';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { NotFound } from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useAutoScrollReveal();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <BrowserRouter basename="/templates/medical/medical-4">
      <ScrollToTop />
      <div className="floating-canvas min-h-screen flex flex-col font-sans text-slate-900 selection:bg-blue-600 selection:text-white relative">
        {/* Ambient background decoration */}
        <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow"></div>
        <div className="fixed top-1/2 right-10 w-[30rem] h-[30rem] bg-indigo-300/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="fixed bottom-10 left-10 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <Header />
        <Navbar />
        <main className="flex-1">
          <RouteTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/departments/:slug" element={<DepartmentDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctors/:slug" element={<DoctorDetail />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </RouteTransition>
        </main>
        <Footer />
        <AIHealthAdvisorModal />
      </div>
    </BrowserRouter>
  );
}

export default App;

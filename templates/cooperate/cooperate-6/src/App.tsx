import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ConsultationModal from './components/layout/ConsultationModal';
import ScrollToTop from './components/layout/ScrollToTop';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import CorporateTravel from './pages/CorporateTravel/CorporateTravel';
import ExecutiveTravel from './pages/ExecutiveTravel/ExecutiveTravel';
import Mice from './pages/Mice/Mice';
import Destinations from './pages/Destinations/Destinations';
import DestinationDetail from './pages/Destinations/DestinationDetail';
import Experiences from './pages/Experiences/Experiences';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import CaseStudyDetail from './pages/CaseStudies/CaseStudyDetail';
import Insights from './pages/Insights/Insights';
import ArticleDetail from './pages/Insights/ArticleDetail';
import Careers from './pages/Careers/Careers';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);

  return (
    <Router basename="/templates/cooperate/cooperate-6">
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#0E1412] font-sans antialiased selection:bg-[#0F382E] selection:text-[#DFBA58]">
        {/* Global Navigation Bar */}
        <Navbar onOpenConsultation={openConsultation} />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenConsultation={openConsultation} />} />
            <Route path="/about" element={<About onOpenConsultation={openConsultation} />} />
            <Route path="/corporate-travel" element={<CorporateTravel onOpenConsultation={openConsultation} />} />
            <Route path="/executive-travel" element={<ExecutiveTravel onOpenConsultation={openConsultation} />} />
            <Route path="/mice" element={<Mice onOpenConsultation={openConsultation} />} />
            <Route path="/group-incentive-travel" element={<Experiences onOpenConsultation={openConsultation} />} />
            <Route path="/mice-corporate-events" element={<Mice onOpenConsultation={openConsultation} />} />
            <Route path="/luxury-business-travel" element={<ExecutiveTravel onOpenConsultation={openConsultation} />} />
            <Route path="/travel-risk-management" element={<CorporateTravel onOpenConsultation={openConsultation} />} />
            
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:slug" element={<DestinationDetail onOpenConsultation={openConsultation} />} />
            
            <Route path="/experiences" element={<Experiences onOpenConsultation={openConsultation} />} />
            
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail onOpenConsultation={openConsultation} />} />
            
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<ArticleDetail />} />
            
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenConsultation={openConsultation} />

        {/* Interactive Consultation / Lead Modal */}
        <ConsultationModal isOpen={isConsultationOpen} onClose={closeConsultation} />
      </div>
    </Router>
  );
}

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetails from './pages/CaseStudyDetails';
import Team from './pages/Team';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="app-wrapper">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/work" element={<CaseStudies />} />
          <Route path="/work/:id" element={<CaseStudyDetails />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/insights" element={<Blog />} />
          <Route path="/insights/:id" element={<BlogDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import CaseStudiesPage from './pages/CaseStudies';
import CaseStudyDetails from './pages/CaseStudyDetails';
import TeamPage from './pages/Team';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="app-layout">
      <ScrollToTop />
      <Navbar />

      <main className="main-content">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/service/:slug" element={<ServiceDetails />} />
          
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          
          {/* Portfolio & Case Studies */}
          <Route path="/work" element={<CaseStudiesPage />} />
          <Route path="/work/:slug" element={<CaseStudyDetails />} />
          <Route path="/case-studies" element={<Navigate to="/work" replace />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetails />} />
          
          {/* Team & Careers */}
          <Route path="/team" element={<TeamPage />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* Blog & Editorial Insights */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/insights" element={<Navigate to="/blog" replace />} />
          <Route path="/insights/:slug" element={<BlogDetails />} />
          
          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CursorProvider } from './hooks/useCustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { PageTransition } from './components/layout/PageTransition';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetails } from './pages/ServiceDetails';
import { Portfolio } from './pages/Portfolio';
import { PortfolioDetails } from './pages/PortfolioDetails';
import { Pricing } from './pages/Pricing';
import { Team } from './pages/Team';
import { Testimonials } from './pages/Testimonials';
import { Blog } from './pages/Blog';
import { BlogDetails } from './pages/BlogDetails';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <BrowserRouter basename="/templates/agency/agency-5">
      <CursorProvider>
        <ScrollToTop />
        <CustomCursor />
        <div className="relative min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] selection:bg-[var(--accent-color)] selection:text-[#0A0A0A] font-sans antialiased">
          <Navbar />
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetails />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:slug" element={<PortfolioDetails />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/team" element={<Team />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
          <Footer />
        </div>
      </CursorProvider>
    </BrowserRouter>
  );
};

export default App;

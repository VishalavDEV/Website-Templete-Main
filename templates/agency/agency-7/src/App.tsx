import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { IntroProvider } from './context/IntroContext';
import { LightboxProvider } from './context/LightboxContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { ImageLightbox } from './components/ImageLightbox';
import { IntroAnimation } from './components/IntroAnimation';
import { BackToTop } from './components/BackToTop';
import { PageTransition } from './components/PageTransition';

import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { CaseStudyDetail } from './pages/CaseStudyDetail';
import { Studio } from './pages/Studio';
import { Services } from './pages/Services';
import { Journal } from './pages/Journal';
import { ArticleDetail } from './pages/ArticleDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <IntroProvider>
        <LightboxProvider>
          <Router>
            <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#0D0E12] text-neutral-900 dark:text-neutral-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
              {/* 3D Cinematic Entrance Animation */}
              <IntroAnimation />

              {/* Top Scroll Level Indicator */}
              <ScrollProgress />

              {/* Custom Trailing Cursor */}
              <CustomCursor />

              {/* Image Lightbox Modal */}
              <ImageLightbox />

              {/* Sticky Editorial Navigation */}
              <Navbar />

              {/* Page Content & Routes */}
              <main>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <PageTransition>
                        <Home />
                      </PageTransition>
                    }
                  />
                  <Route
                    path="/work"
                    element={
                      <PageTransition>
                        <Work />
                      </PageTransition>
                    }
                  />
                  <Route
                    path="/work/:id"
                    element={
                      <PageTransition>
                        <CaseStudyDetail />
                      </PageTransition>
                    }
                  />
                  <Route
                    path="/studio"
                    element={
                      <PageTransition>
                        <Studio />
                      </PageTransition>
                    }
                  />
                  <Route
                    path="/services"
                    element={
                      <PageTransition>
                        <Services />
                      </PageTransition>
                    }
                  />
                  <Route
                    path="/journal"
                    element={
                      <PageTransition>
                        <Journal />
                      </PageTransition>
                    }
                  />
                  <Route
                    path="/journal/:id"
                    element={
                      <PageTransition>
                        <ArticleDetail />
                      </PageTransition>
                    }
                  />
                  <Route
                    path="/about"
                    element={
                      <PageTransition>
                        <About />
                      </PageTransition>
                    }
                  />
                  <Route
                    path="/contact"
                    element={
                      <PageTransition>
                        <Contact />
                      </PageTransition>
                    }
                  />
                  <Route
                    path="*"
                    element={
                      <PageTransition>
                        <NotFound />
                      </PageTransition>
                    }
                  />
                </Routes>
              </main>

              {/* Editorial Footer */}
              <Footer />

              {/* Back To Top Floating Action */}
              <BackToTop />
            </div>
          </Router>
        </LightboxProvider>
      </IntroProvider>
    </ThemeProvider>
  );
};

export default App;

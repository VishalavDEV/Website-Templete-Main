import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useTemplateEffects } from './hooks/useTemplateEffects';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { BackToTop } from './components/BackToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Menu } from './pages/Menu';
import { Events } from './pages/Events';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

const MainLayout: React.FC = () => {
  useTemplateEffects();

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu.html" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events.html" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery.html" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact.html" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default function App() {
  return (
    <HashRouter>
      <MainLayout />
    </HashRouter>
  );
}

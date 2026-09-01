import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import FullscreenNav from './components/FullscreenNav';
import ChapterCounter from './components/ChapterCounter';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Chefs from './pages/Chefs';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  // Determine if page uses floating header or standard header
  const isStandardHeader = ['/chefs', '/chefs.html', '/events', '/events.html', '/gallery', '/gallery.html', '/blog', '/blog.html'].includes(location.pathname);

  return (
    <div className="app-root">
      <CustomCursor />
      <Header onOpenMenu={() => setIsNavOpen(true)} variant={isStandardHeader ? 'standard' : 'floating'} />
      <FullscreenNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      {location.pathname === '/' || location.pathname === '/index.html' ? <ChapterCounter /> : null}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu.html" element={<Menu />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/chefs.html" element={<Chefs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events.html" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery.html" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog.html" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact.html" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

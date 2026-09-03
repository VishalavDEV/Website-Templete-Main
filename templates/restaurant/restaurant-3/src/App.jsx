import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Story from './components/Story';
import Signature from './components/Signature';
import Menu from './components/Menu';
import Chef from './components/Chef';
import Experience from './components/Experience';
import Kitchen from './components/Kitchen';
import Gallery from './components/Gallery';
import Journal from './components/Journal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FloatingDishPreview from './components/FloatingDishPreview';
import FullscreenNav from './components/FullscreenNav';
import ReservationModal from './components/ReservationModal';
import InfoModal from './components/InfoModal';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [hoveredDishImg, setHoveredDishImg] = useState(null);

  const handleDishHover = (imgUrl) => {
    setHoveredDishImg(imgUrl);
  };

  const handleDishLeave = () => {
    setHoveredDishImg(null);
  };

  return (
    <div className="lumiere-app-container">
      <CustomCursor />
      
      <Navbar 
        onOpenNav={() => setIsNavOpen(true)} 
        onOpenReserve={() => setIsReserveModalOpen(true)} 
      />

      <main>
        <Hero />
        <Intro />
        <Story />
        <Signature />
        <Menu onDishHover={handleDishHover} onDishLeave={handleDishLeave} />
        <Chef />
        <Experience />
        <Kitchen />
        <Gallery />
        <Journal />
        <Contact />
      </main>

      <Footer />

      <FloatingDishPreview activeImg={hoveredDishImg} />

      {isNavOpen && <FullscreenNav onClose={() => setIsNavOpen(false)} />}
      {isReserveModalOpen && <ReservationModal onClose={() => setIsReserveModalOpen(false)} />}
      {isInfoModalOpen && <InfoModal onClose={() => setIsInfoModalOpen(false)} />}

      <ScrollReveal />
    </div>
  );
}

import React, { useState } from 'react';
import { CursorProvider } from './context/CursorContext';
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader';

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import BrandMarquee from './components/sections/BrandMarquee';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import HorizontalProjects from './components/sections/HorizontalProjects';
import Process from './components/sections/Process';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Expertise from './components/sections/Expertise';
import Team from './components/sections/Team';
import Statistics from './components/sections/Statistics';
import Testimonials from './components/sections/Testimonials';
import Awards from './components/sections/Awards';
import Blog from './components/sections/Blog';
import CTA from './components/sections/CTA';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  React.useEffect(() => {
    document.title = "Studio Collective — High-End Design & Tech Agency";
  }, []);

  return (
    <CursorProvider>
      <Preloader onComplete={() => setLoadingComplete(true)} />
      <CustomCursor />

      <main className="min-h-screen bg-[#05070f] text-slate-100 selection:bg-cyan-500 selection:text-black font-sans antialiased">
        <Navbar />
        <Hero />
        <About />
        <BrandMarquee />
        <Services />
        <Portfolio />
        <HorizontalProjects />
        <Process />
        <WhyChooseUs />
        <Expertise />
        <Team />
        <Statistics />
        <Testimonials />
        <Awards />
        <Blog />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </CursorProvider>
  );
}

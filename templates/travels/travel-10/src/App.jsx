import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Places from './components/Places';
import Experiences from './components/Experiences';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-6 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative blurry background circles for rich aesthetic feel */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent-gold/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary-navy/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent-gold/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Main Hero section */}
      <div className="w-full relative z-10 flex items-center justify-center">
        <Hero />
      </div>

      {/* Content template sections inside a matching bordered container */}
      <div className="w-full relative z-10 max-w-6xl mt-12 bg-white border border-gray-150 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] overflow-hidden divide-y divide-gray-100 mb-12">
        <About />
        <Places />
        <Experiences />
        <Footer />
      </div>
    </main>
  );
}

export default App;

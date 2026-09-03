import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import { ToastProvider } from './components/Toast';
import Home from './pages/Home';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ToastProvider>
      <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-purple-500 selection:text-white font-sans antialiased overflow-x-hidden">
        {/* Animated Loading Screen */}
        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {/* Global Particle Background */}
        <ParticleBackground />

        {/* Main Application */}
        {!isLoading && <Home />}
      </div>
    </ToastProvider>
  );
}

import React, { useState, useEffect } from 'react';
import TopUtilityBar from './components/TopUtilityBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CostEstimator from './components/CostEstimator';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="app-root">
      <TopUtilityBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <CostEstimator />
      </main>
      <Footer />
    </div>
  );
}


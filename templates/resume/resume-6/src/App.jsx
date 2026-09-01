import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Profile from './components/Profile.jsx';
import ExperienceTimeline from './components/ExperienceTimeline.jsx';
import SelectedWork from './components/SelectedWork.jsx';
import Expertise from './components/Expertise.jsx';
import Education from './components/Education.jsx';
import Recognition from './components/Recognition.jsx';
import Philosophy from './components/Philosophy.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

/**
 * Template 2 — Elena Marlowe: Creative Director & Brand Strategist
 *
 * ISOLATION NOTES:
 * - All CSS is scoped under the root class `em-portfolio` to prevent leakage
 * - All CSS custom properties use the `--em-` prefix (no :root pollution)
 * - All component CSS classes use the `em-` prefix
 * - No shared/global platform files are modified
 * - Self-contained Vite build; no cross-template imports
 * - Default dev port: 5175 (see package.json)
 */
function App() {
  return (
    /* em-portfolio: unique root scope class for this template */
    <div className="em-portfolio">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <ExperienceTimeline />
        <SelectedWork />
        <Expertise />
        <Education />
        <Recognition />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

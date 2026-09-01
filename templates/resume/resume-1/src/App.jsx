// src/App.jsx
// Root wrapper uses className="t1" — scopes ALL styles to this template only.
// Safe for multi-template platforms; no global CSS pollution.
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <div className="t1">
      <Navbar />
      <main id="t1-main-content">
        <Hero />
        <Overview />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

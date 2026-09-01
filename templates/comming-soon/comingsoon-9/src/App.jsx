import React, { useState, useEffect, useRef } from 'react';
import { PRODUCT_CATEGORIES, TRANSLATIONS } from './data/presets';
import InteractiveCanvas from './components/InteractiveCanvas';
import Navbar from './components/Navbar';
import CountdownTimer from './components/CountdownTimer';
import WaitlistSection from './components/WaitlistSection';
import ProductTeaserShowcase from './components/ProductTeaserShowcase';
import MilestoneTracker from './components/MilestoneTracker';
import FeatureGrid from './components/FeatureGrid';
import SocialAndPress from './components/SocialAndPress';
import Footer from './components/Footer';
import PresetController from './components/PresetController';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('tech_ai');
  const [activeStyle, setActiveStyle] = useState('immersive');
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('en');

  const waitlistRef = useRef(null);

  const currentPreset = PRODUCT_CATEGORIES[activeCategory] || PRODUCT_CATEGORIES.tech_ai;
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  useEffect(() => {
    document.body.setAttribute('data-style', activeStyle);
    document.body.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }, [activeStyle, theme, lang]);

  const handleScrollToWaitlist = () => {
    if (waitlistRef.current) {
      waitlistRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {/* Dynamic 60fps Cursor-Reactive Canvas Background */}
      <InteractiveCanvas styleVariant={activeStyle} theme={theme} />

      {/* Main Content Layout */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Navigation Bar */}
        <Navbar currentPreset={currentPreset} onScrollToWaitlist={handleScrollToWaitlist} />

        {/* Hero Section */}
        <main className="container" style={{ paddingTop: '56px', paddingBottom: '40px' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            maxWidth: '860px'
          }}>
            {/* Category Launch Badge */}
            <div className="glass-pill" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--text-accent)',
              marginBottom: '24px',
              boxShadow: 'var(--badge-glow)'
            }}>
              <Zap size={14} style={{ color: 'var(--accent-1)' }} />
              <span>{currentPreset.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(32px, 5.5vw, 64px)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              marginBottom: '20px'
            }}>
              {currentPreset.headline.split(' ').map((word, i) => (
                <span key={i} className={i % 3 === 1 ? 'gradient-text' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            {/* Tagline Narrative */}
            <p style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '8px',
              maxWidth: '720px'
            }}>
              {currentPreset.tagline}
            </p>

            {/* Animated Countdown with Localized Timezone */}
            <CountdownTimer currentPreset={currentPreset} lang={lang} t={t} />

            {/* Email Capture & Viral Referral Engine */}
            <div ref={waitlistRef} style={{ width: '100%' }}>
              <WaitlistSection currentPreset={currentPreset} lang={lang} t={t} />
            </div>
          </div>

          {/* Interactive 3D Product Hotspot Inspector Showcase */}
          <ProductTeaserShowcase currentPreset={currentPreset} lang={lang} t={t} />

          {/* Launch Readiness & Milestone Roadmap */}
          <MilestoneTracker currentPreset={currentPreset} lang={lang} t={t} />

          {/* Feature Highlights Grid */}
          <FeatureGrid currentPreset={currentPreset} lang={lang} />

          {/* Social, Press Marquee & FAQ Accordion */}
          <SocialAndPress currentPreset={currentPreset} lang={lang} t={t} />
        </main>

        {/* Global Footer */}
        <Footer currentPreset={currentPreset} />

        {/* Floating Preset & Style Adaptation Dock */}
        <PresetController
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeStyle={activeStyle}
          setActiveStyle={setActiveStyle}
          theme={theme}
          setTheme={setTheme}
          lang={lang}
          setLang={setLang}
        />
      </div>
    </div>
  );
}

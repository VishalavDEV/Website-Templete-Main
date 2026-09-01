import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TechUniverse from './components/TechUniverse';
import ProjectsSection from './components/ProjectsSection';
import AiLabSection from './components/AiLabSection';
import JourneySection from './components/JourneySection';
import BlogSection from './components/BlogSection';
import CurrentlySection from './components/CurrentlySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PersonalAiDrawer from './components/PersonalAiDrawer';
import ResumeModal from './components/ResumeModal';
import CommandPalette from './components/CommandPalette';
import { Bot } from 'lucide-react';

export default function App() {
  const [isAskAiOpen, setIsAskAiOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCmdPaletteOpen, setIsCmdPaletteOpen] = useState(false);
  const [accentTheme, setAccentTheme] = useState<'cyan' | 'violet' | 'emerald'>('cyan');

  // Dark / Light Mode State
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 selection:bg-blue-600/20 selection:text-blue-900 font-sans relative overflow-x-hidden transition-colors duration-300">
      
      {/* Top Floating Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenAskAi={() => setIsAskAiOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommandPalette={() => setIsCmdPaletteOpen(true)}
        accentTheme={accentTheme}
        setAccentTheme={setAccentTheme}
      />

      {/* Main Content Sections */}
      <main className="relative">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAskAi={() => setIsAskAiOpen(true)}
          accentTheme={accentTheme}
        />

        {/* 2. About Me */}
        <AboutSection />

        {/* 3. Technology Universe Graph */}
        <TechUniverse />

        {/* 4. Featured Projects & Case Studies */}
        <ProjectsSection />

        {/* 5. AI Lab Experimental Bench */}
        <AiLabSection />

        {/* 6. Career Journey & Academic Foundation */}
        <JourneySection />

        {/* 7. Thoughts & Insights / Blog */}
        <BlogSection />

        {/* 8. Currently Active Vector */}
        <CurrentlySection />

        {/* 9. Contact & Transmission CTA */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Assistant Launcher Button */}
      {!isAskAiOpen && (
        <button
          onClick={() => setIsAskAiOpen(true)}
          id="floating-ai-assistant-btn"
          aria-label="Open Arjun's AI Assistant"
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 hover:border-blue-300 hover:shadow-lg shadow-md transition-all duration-300 cursor-pointer"
        >
          <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-2xs">
            <Bot className="w-4 h-4" />
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-xs font-heading font-bold text-slate-900 dark:text-white">Ask Arjun AI</p>
          </div>
          <span className="text-blue-600 dark:text-blue-400 font-bold text-xs ml-0.5 group-hover:translate-x-0.5 transition-transform">→</span>
        </button>
      )}

      {/* Floating AI Assistant Chat Drawer */}
      <PersonalAiDrawer
        isOpen={isAskAiOpen}
        onClose={() => setIsAskAiOpen(false)}
      />

      {/* Full Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Fast Command Palette Modal (Cmd + K) */}
      <CommandPalette
        isOpen={isCmdPaletteOpen}
        onClose={() => setIsCmdPaletteOpen(false)}
        onOpenAskAi={() => setIsAskAiOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        setAccentTheme={setAccentTheme}
        theme={theme}
        toggleTheme={toggleTheme}
      />

    </div>
  );
}

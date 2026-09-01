import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeSection } from './components/ResumeSection';
import { AchievementsSection } from './components/AchievementsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { GallerySection } from './components/GallerySection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';

// Modals
import { ProjectModal } from './components/ProjectModal';
import { ArticleModal } from './components/ArticleModal';
import { LightboxModal } from './components/LightboxModal';
import { CostEstimatorModal } from './components/CostEstimatorModal';
import { LegalModal } from './components/LegalModal';

import { Project, BlogPost, ServiceItem, PricingTier } from './types';

export default function App() {
  // Theme state: 'dark' | 'light' | 'cinema'
  const [theme, setTheme] = useState<'dark' | 'light' | 'cinema'>('dark');
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Modal states
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    metadata?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
  });
  const [isCostEstimatorOpen, setIsCostEstimatorOpen] = useState(false);
  const [legalModalData, setLegalModalData] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
  }>({
    isOpen: false,
    title: '',
    content: '',
  });

  // Apply theme to document element and body
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.remove('dark', 'light', 'cinema');
    document.documentElement.classList.add(theme);
    if (theme === 'light') {
      document.body.style.backgroundColor = '#FAF8F5';
      document.body.style.color = '#121214';
    } else if (theme === 'cinema') {
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#F5F5F5';
    } else {
      document.body.style.backgroundColor = '#050505';
      document.body.style.color = '#E5E5E5';
    }
  }, [theme]);

  // Audio tone generator for subtle UX sound feedback
  const playHapticTone = (freq = 440, duration = 0.05) => {
    if (!soundEnabled) return;
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio context might be restricted before interaction
    }
  };

  const handleToggleSound = () => {
    const nextSound = !soundEnabled;
    setSoundEnabled(nextSound);
    if (nextSound) {
      playHapticTone(587.33, 0.08); // High D note chime
    }
  };

  const handleOpenLightbox = (imageUrl: string, title: string, metadata?: string) => {
    playHapticTone(659.25, 0.05);
    setLightboxData({
      isOpen: true,
      imageUrl,
      title,
      metadata,
    });
  };

  const handleSelectService = (service: ServiceItem) => {
    playHapticTone(523.25, 0.05);
    // Scroll to contact form and populate subject
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const subjectInput = document.getElementById('contact-form-subject') as HTMLInputElement;
      if (subjectInput) {
        subjectInput.value = `Inquiry: ${service.title}`;
      }
    }
  };

  const handleSelectTier = (tier: PricingTier) => {
    playHapticTone(523.25, 0.05);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const subjectInput = document.getElementById('contact-form-subject') as HTMLInputElement;
      if (subjectInput) {
        subjectInput.value = `Engagement Tier: ${tier.name} (${tier.priceProject})`;
      }
    }
  };

  const handleApplyEstimate = (summary: string, estimatedBudget: string) => {
    playHapticTone(783.99, 0.08);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const subjectInput = document.getElementById('contact-form-subject') as HTMLInputElement;
      const messageInput = document.getElementById('contact-form-message') as HTMLTextAreaElement;
      if (subjectInput) {
        subjectInput.value = `Estimated Project: ${summary.slice(0, 50)}...`;
      }
      if (messageInput) {
        messageInput.value = `Hi Sakthi,\n\nI generated an estimate using your project calculator:\n- Specification: ${summary}\n- Calculated Target Budget: ${estimatedBudget}\n\nLet's schedule a technical discovery session.`;
      }
    }
  };

  const handleOpenLegalModal = (title: string, content: string) => {
    setLegalModalData({
      isOpen: true,
      title,
      content,
    });
  };

  return (
    <div
      className={`min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black antialiased transition-colors duration-300 ${
        theme === 'light'
          ? 'bg-[#FAF8F5] text-[#121214]'
          : theme === 'cinema'
          ? 'bg-[#000000] text-[#F5F5F5] cinematic-vignette'
          : 'bg-[#050505] text-[#E5E5E5]'
      }`}
    >
      {/* Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar
        theme={theme}
        onToggleTheme={(newTheme) => {
          setTheme(newTheme);
          playHapticTone(440, 0.04);
        }}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenResumeModal={() => {
          playHapticTone(523.25, 0.05);
          const resumeSection = document.getElementById('resume');
          if (resumeSection) {
            resumeSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Main Content Flow */}
      <main className="relative">
        <Hero
          onContactClick={() => {
            const el = document.getElementById('contact');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onProjectsClick={() => {
            const el = document.getElementById('projects');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <AboutSection />

        <SkillsSection />

        <ExperienceSection />

        <ServicesSection onSelectService={handleSelectService} />

        <ProjectsSection
          onSelectProject={(project) => {
            playHapticTone(659.25, 0.05);
            setSelectedProject(project);
          }}
        />

        <ResumeSection />

        <AchievementsSection />

        <EducationSection />

        <CertificationsSection />

        <TestimonialsSection />

        <BlogSection
          onSelectArticle={(article) => {
            playHapticTone(659.25, 0.05);
            setSelectedArticle(article);
          }}
        />

        <GallerySection onOpenLightbox={handleOpenLightbox} />

        <PricingSection
          onSelectTier={handleSelectTier}
          onOpenEstimator={() => {
            playHapticTone(523.25, 0.05);
            setIsCostEstimatorOpen(true);
          }}
        />

        <FaqSection />

        <ContactSection />

        <NewsletterSection />
      </main>

      {/* Global Brand Footer */}
      <Footer onOpenLegalModal={handleOpenLegalModal} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ArticleModal
        post={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <LightboxModal
        isOpen={lightboxData.isOpen}
        imageUrl={lightboxData.imageUrl}
        title={lightboxData.title}
        metadata={lightboxData.metadata}
        onClose={() =>
          setLightboxData({ isOpen: false, imageUrl: '', title: '' })
        }
      />

      <CostEstimatorModal
        isOpen={isCostEstimatorOpen}
        onClose={() => setIsCostEstimatorOpen(false)}
        onApplyEstimate={handleApplyEstimate}
      />

      <LegalModal
        isOpen={legalModalData.isOpen}
        title={legalModalData.title}
        content={legalModalData.content}
        onClose={() =>
          setLegalModalData({ isOpen: false, title: '', content: '' })
        }
      />
    </div>
  );
}

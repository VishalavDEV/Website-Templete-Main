import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AllProjectsModal } from './components/AllProjectsModal';
import { ExperienceEducationModal } from './components/ExperienceEducationModal';
import { BlogModal } from './components/BlogModal';
import { MoreAboutModal } from './components/MoreAboutModal';
import { NavItem, Project } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavItem>('home');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('arjun_portfolio_theme');
      if (saved) return saved === 'dark';
      return false; // Default to sleek light theme as shown in screenshot
    }
    return false;
  });

  // Modals state
  const [contactOpen, setContactOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [allProjectsOpen, setAllProjectsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expEduModalState, setExpEduModalState] = useState<{ isOpen: boolean; tab: 'experience' | 'education' }>({
    isOpen: false,
    tab: 'experience',
  });
  const [blogOpen, setBlogOpen] = useState(false);
  const [moreAboutOpen, setMoreAboutOpen] = useState(false);

  // Sync theme class to root
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('arjun_portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('arjun_portfolio_theme', 'light');
    }
  }, [isDark]);

  // Scroll listener for active tab highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const aboutEl = document.getElementById('about-section');
      const skillsEl = document.getElementById('skills-section');
      const projectsEl = document.getElementById('projects-section');

      if (projectsEl && scrollPosition >= projectsEl.offsetTop) {
        setActiveTab('projects');
      } else if (skillsEl && scrollPosition >= skillsEl.offsetTop) {
        setActiveTab('skills');
      } else if (aboutEl && scrollPosition >= aboutEl.offsetTop) {
        setActiveTab('about');
      } else {
        setActiveTab('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col font-sans transition-colors duration-300 antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenContact={() => setContactOpen(true)}
        onOpenExperience={() => setExpEduModalState({ isOpen: true, tab: 'experience' })}
        onOpenEducation={() => setExpEduModalState({ isOpen: true, tab: 'education' })}
        onOpenBlog={() => setBlogOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onViewWork={() => {
            const el = document.getElementById('projects-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. About Me Section */}
        <About
          onOpenMoreAbout={() => setMoreAboutOpen(true)}
        />

        {/* 3. Skills & Technologies Section */}
        <Skills />

        {/* 4. Featured Projects Section */}
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
          onViewAllProjects={() => setAllProjectsOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenContact={() => setContactOpen(true)}
        onOpenExperience={() => setExpEduModalState({ isOpen: true, tab: 'experience' })}
        onOpenBlog={() => setBlogOpen(true)}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <AllProjectsModal
        isOpen={allProjectsOpen}
        onClose={() => setAllProjectsOpen(false)}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      <ExperienceEducationModal
        isOpen={expEduModalState.isOpen}
        defaultTab={expEduModalState.tab}
        onClose={() => setExpEduModalState({ isOpen: false, tab: 'experience' })}
      />

      <BlogModal
        isOpen={blogOpen}
        onClose={() => setBlogOpen(false)}
      />

      <MoreAboutModal
        isOpen={moreAboutOpen}
        onClose={() => setMoreAboutOpen(false)}
        onOpenContact={() => {
          setMoreAboutOpen(false);
          setContactOpen(true);
        }}
      />

    </div>
  );
}

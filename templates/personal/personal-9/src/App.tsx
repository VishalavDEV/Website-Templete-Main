import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AiLabSection } from './components/AiLabSection';
import { JourneySection } from './components/JourneySection';
import { AchievementsSection } from './components/AchievementsSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';

// Modals
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { AiExperimentModal } from './components/AiExperimentModal';
import { BlogModal } from './components/BlogModal';
import { AboutModal } from './components/AboutModal';
import { AllProjectsModal } from './components/AllProjectsModal';
import { AllBlogsModal } from './components/AllBlogsModal';
import { AchievementsModal } from './components/AchievementsModal';

import { Project, AiExperiment, BlogPost } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Modal states
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);
  const [isAllBlogsOpen, setIsAllBlogsOpen] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedExperiment, setSelectedExperiment] = useState<AiExperiment | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0B0F17] text-white dark' : 'bg-[#F3F4F6] text-gray-900'}`}>
      
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <HeroSection
          darkMode={darkMode}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 2. About Me Section */}
        <AboutSection
          darkMode={darkMode}
          onOpenAboutModal={() => setIsAboutOpen(true)}
        />

        {/* 3. Featured Projects */}
        <ProjectsSection
          darkMode={darkMode}
          onSelectProject={(project) => setSelectedProject(project)}
          onViewAllProjects={() => setIsAllProjectsOpen(true)}
        />

        {/* 4. AI Lab Experiments */}
        <AiLabSection
          darkMode={darkMode}
          onSelectExperiment={(exp) => setSelectedExperiment(exp)}
        />

        {/* 5. Experience & Education & Currently (3-Column Layout) */}
        <JourneySection darkMode={darkMode} />

        {/* 6. Achievement Vault */}
        <AchievementsSection
          darkMode={darkMode}
          onOpenAchievementsModal={() => setIsAchievementsOpen(true)}
        />

        {/* 7. Latest From Blog & Let's Connect */}
        <BlogSection
          darkMode={darkMode}
          onSelectBlog={(post) => setSelectedBlog(post)}
          onViewAllBlogs={() => setIsAllBlogsOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        darkMode={darkMode}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenProjects={() => setIsAllProjectsOpen(true)}
        onOpenBlogs={() => setIsAllBlogsOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        darkMode={darkMode}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        darkMode={darkMode}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        darkMode={darkMode}
      />

      <AllProjectsModal
        isOpen={isAllProjectsOpen}
        onClose={() => setIsAllProjectsOpen(false)}
        darkMode={darkMode}
        onSelectProject={(p) => {
          setIsAllProjectsOpen(false);
          setSelectedProject(p);
        }}
      />

      <AllBlogsModal
        isOpen={isAllBlogsOpen}
        onClose={() => setIsAllBlogsOpen(false)}
        darkMode={darkMode}
        onSelectBlog={(post) => {
          setIsAllBlogsOpen(false);
          setSelectedBlog(post);
        }}
      />

      <AiExperimentModal
        experiment={selectedExperiment}
        onClose={() => setSelectedExperiment(null)}
        darkMode={darkMode}
      />

      <AchievementsModal
        isOpen={isAchievementsOpen}
        onClose={() => setIsAchievementsOpen(false)}
        darkMode={darkMode}
      />

      <BlogModal
        post={selectedBlog}
        onClose={() => setSelectedBlog(null)}
        darkMode={darkMode}
        onSelectPost={(post) => setSelectedBlog(post)}
      />

    </div>
  );
}

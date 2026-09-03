import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import JourneySection from './components/JourneySection';
import EducationSection from './components/EducationSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import { apiService } from './services/api';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [portfolioData, setPortfolioData] = useState({
    profile: null,
    skills: [],
    projects: [],
    experience: [],
    education: [],
    achievements: [],
    certifications: []
  });

  // Fetch portfolio data from Spring Boot REST API
  useEffect(() => {
    async function loadData() {
      const [profile, skills, projects, experience, education, achievements, certifications] = await Promise.all([
        apiService.getProfile(),
        apiService.getSkills(),
        apiService.getProjects(),
        apiService.getExperience(),
        apiService.getEducation(),
        apiService.getAchievements(),
        apiService.getCertifications()
      ]);

      setPortfolioData({
        profile,
        skills,
        projects,
        experience,
        education,
        achievements,
        certifications
      });
    }
    loadData();
  }, []);

  // Sync dataset attributes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-main)' }}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero profileData={portfolioData.profile} />
        <AboutSection profileData={portfolioData.profile} />
        <SkillsSection skillsData={portfolioData.skills} />
        <ProjectsSection projectsData={portfolioData.projects} />
        <JourneySection journeyData={portfolioData.experience} />
        <EducationSection educationData={portfolioData.education} />
        <AchievementsSection achievementsData={portfolioData.achievements} certsData={portfolioData.certifications} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

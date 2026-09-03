import React, { useState } from 'react';
import './About.css';
import { User, Award, Briefcase, Smile, Download, CheckCircle, Code, Server, Wrench } from 'lucide-react';

const statsData = [
  { icon: Briefcase, value: '5+', label: 'Years Experience', desc: 'Enterprise & Startups' },
  { icon: Award, value: '50+', label: 'Projects Completed', desc: 'Web apps, APIs & UI' },
  { icon: Smile, value: '99%', label: 'Client Satisfaction', desc: 'Positive feedback' },
  { icon: User, value: '30+', label: 'Global Clients', desc: 'US, UK & Europe' },
];

const skillCategories = {
  frontend: [
    { name: 'React 19 / Next.js', level: 95 },
    { name: 'TypeScript / JavaScript (ESNext)', level: 92 },
    { name: 'HTML5 / Modern CSS / Tailwind', level: 96 },
    { name: 'State Management (Redux, Zustand)', level: 90 },
    { name: 'Responsive & Accessible Design', level: 94 },
  ],
  backend: [
    { name: 'Java 21 / Spring Boot 3', level: 92 },
    { name: 'Node.js / Express', level: 88 },
    { name: 'PostgreSQL / MySQL / Redis', level: 85 },
    { name: 'RESTful & GraphQL API Architecture', level: 93 },
    { name: 'Microservices & Security (JWT, OAuth)', level: 86 },
  ],
  tools: [
    { name: 'Git / GitHub / CI/CD Actions', level: 92 },
    { name: 'Docker & Containerization', level: 84 },
    { name: 'Figma & UI Prototyping', level: 89 },
    { name: 'Jest / Vitest / JUnit Testing', level: 88 },
    { name: 'Webpack / Vite Build Optimization', level: 94 },
  ],
};

export default function About({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <User size={14} />
            About Me
          </span>
          <h2 className="section-title">Passion for Engineering & Design</h2>
          <p className="section-subtitle">
            Bridging the gap between creative visual elegance and robust full-stack engineering.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="about-stats-grid">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="stat-card glass-card">
                <div className="stat-icon-wrapper">
                  <Icon size={24} />
                </div>
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sublabel">{stat.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="about-main-grid">
          {/* Left: Biography */}
          <div className="about-bio-col glass-card">
            <h3 className="about-bio-heading">
              Engineering sleek user interfaces and scalable architectures.
            </h3>
            <p className="about-bio-text">
              I'm Ben Carson, a software engineer and designer with over 5 years of professional experience turning complex problems into intuitive, high-performance web products.
            </p>
            <p className="about-bio-text">
              Whether building reactive user interfaces in React, architecting microservices with Spring Boot, or polishing micro-interactions for seamless UX, I obsess over details, speed, and craftsmanship.
            </p>

            <div className="about-highlights-list">
              <div className="highlight-item">
                <CheckCircle size={18} className="highlight-icon" />
                <span>Clean, maintainable, and thoroughly tested codebase</span>
              </div>
              <div className="highlight-item">
                <CheckCircle size={18} className="highlight-icon" />
                <span>Pixel-perfect responsive design across all devices</span>
              </div>
              <div className="highlight-item">
                <CheckCircle size={18} className="highlight-icon" />
                <span>Modern SEO and accessibility (WCAG) best practices</span>
              </div>
            </div>

            <div className="about-bio-actions">
              <button 
                className="btn-primary"
                onClick={onOpenResume}
                id="about-resume-btn"
              >
                <Download size={16} />
                <span>Download Resume / CV</span>
              </button>
            </div>
          </div>

          {/* Right: Interactive Skills Matrix */}
          <div className="about-skills-col glass-card">
            <div className="skills-header">
              <h3 className="skills-title">Technical Proficiency</h3>
              
              {/* Tab Selector Buttons */}
              <div className="skills-tabs" role="tablist">
                <button
                  className={`skills-tab-btn ${activeTab === 'frontend' ? 'active' : ''}`}
                  onClick={() => setActiveTab('frontend')}
                  role="tab"
                  aria-selected={activeTab === 'frontend'}
                >
                  <Code size={15} />
                  <span>Frontend</span>
                </button>
                <button
                  className={`skills-tab-btn ${activeTab === 'backend' ? 'active' : ''}`}
                  onClick={() => setActiveTab('backend')}
                  role="tab"
                  aria-selected={activeTab === 'backend'}
                >
                  <Server size={15} />
                  <span>Backend</span>
                </button>
                <button
                  className={`skills-tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
                  onClick={() => setActiveTab('tools')}
                  role="tab"
                  aria-selected={activeTab === 'tools'}
                >
                  <Wrench size={15} />
                  <span>Tools & DevOps</span>
                </button>
              </div>
            </div>

            {/* Skills List */}
            <div className="skills-list">
              {skillCategories[activeTab].map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

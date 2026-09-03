import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, BookOpen, Image as ImageIcon, Award, Lightbulb, 
  FileText, Send, Map, Sun, Moon, ArrowLeft, ExternalLink, 
  Download, Sparkles, Coffee, Volume2, VolumeX, Menu, X, ArrowUp
} from 'lucide-react';
import { api } from './services/api';

const GithubIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [doorOpened, setDoorOpened] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Interactive mini elements
  const [lampOn, setLampOn] = useState(true);
  const [plantStage, setPlantStage] = useState(2); // 0 to 5
  const [mailboxSent, setMailboxSent] = useState(false);
  const [typingKeys, setTypingKeys] = useState(false);
  
  // REST API data
  const [profileData, setProfileData] = useState(null);
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [roomStats, setRoomStats] = useState({
    projectsCount: 25,
    technologiesCount: 15,
    certificationsCount: 10,
    achievementsCount: 12,
    experienceYears: 3
  });
  
  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState('');

  // Bookshelf Active Book
  const [activeBookIndex, setActiveBookIndex] = useState(0);
  const [projectCat, setProjectCat] = useState('ALL');

  // Keyboard Sound simulation using Web Audio API
  const audioContextRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      const prof = await api.getProfile();
      const projs = await api.getProjects();
      const edu = await api.getEducation();
      const exp = await api.getExperience();
      const achs = await api.getAchievements();
      const stats = await api.getStats();

      setProfileData(prof);
      setProjects(projs);
      setEducation(edu);
      setExperience(exp);
      setAchievements(achs);
      if (stats) setRoomStats(stats);
    };

    loadData();
  }, []);

  // Night Mode class toggle on body
  useEffect(() => {
    if (nightMode) {
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    }
  }, [nightMode]);

  const handleEnterStudio = () => {
    setDoorOpened(true);
    setTimeout(() => {
      setIsEntered(true);
    }, 1200);
  };

  const playKeyboardSound = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(150 + Math.random() * 300, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.log('Audio error:', e);
    }
  };

  const handleKeyboardClick = () => {
    setTypingKeys(true);
    playKeyboardSound();
    setTimeout(() => setTypingKeys(false), 200);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({});
    setFormSubmitting(true);
    setFormSuccessMessage('');

    const res = await api.submitContact(contactForm);
    setFormSubmitting(false);

    if (res.success) {
      setMailboxSent(true);
      setFormSuccessMessage(res.message);
      setContactForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setMailboxSent(false), 5000);
    } else {
      if (res.errors) {
        setFormErrors(res.errors);
      } else {
        alert(res.message || 'An error occurred.');
      }
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const plantStages = ['SEED', 'SPROUT', 'GROWTH', 'BRANCHES', 'TREE', 'FUTURE'];
  const filteredProjects = projectCat === 'ALL' 
    ? projects 
    : projects.filter(p => p.category.toUpperCase() === projectCat);

  return (
    <div className="portfolio-app">
      {/* 1. ENTRANCE SCREEN */}
      <AnimatePresence>
        {!isEntered && (
          <motion.div 
            className="welcome-screen"
            exit={{ opacity: 0, scale: 1.05, y: -30 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <div className="welcome-content">
              <motion.h2 
                className="welcome-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Welcome to my Portfolio
              </motion.h2>
              <motion.h1 
                className="welcome-name"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: 'spring' }}
              >
                {profileData?.name || "ALEX VANCE"}
              </motion.h1>
            </div>

            <div className="welcome-door-container" onClick={handleEnterStudio}>
              <div className={`welcome-door ${doorOpened ? 'opened' : ''}`}>
                <div className="door-knob"></div>
              </div>
            </div>

            <button className="enter-button" onClick={handleEnterStudio}>
              Enter Portfolio →
            </button>

            {/* Background elements */}
            <div className="particles-container">
              {Array.from({ length: 15 }).map((_, i) => (
                <div 
                  key={i} 
                  className="particle" 
                  style={{
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 8 + 4}px`,
                    height: `${Math.random() * 8 + 4}px`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${Math.random() * 8 + 6}s`
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN CONVENTIONAL PORTFOLIO */}
      {isEntered && (
        <div className="conventional-layout">
          {/* Header & Sticky Navbar */}
          <header className="sticky-header">
            <div className="header-container">
              <div className="brand-logo" onClick={() => scrollToSection('about')}>
                {profileData?.name || "Alex Vance"}
              </div>

              {/* Desktop Nav Links */}
              <nav className="desktop-nav">
                {['about', 'projects', 'education', 'gallery', 'achievements', 'skills', 'journey', 'contact'].map((sec) => (
                  <button key={sec} onClick={() => scrollToSection(sec)} className="nav-link-btn">
                    {sec}
                  </button>
                ))}
              </nav>

              {/* Day/Night and Mobile Menu triggers */}
              <div className="header-actions">
                <button 
                  className="theme-toggle-btn"
                  onClick={() => setNightMode(!nightMode)}
                  title="Toggle Day/Night mode"
                >
                  {nightMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                <button 
                  className="mobile-menu-btn"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </header>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                className="mobile-nav-drawer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {['about', 'projects', 'education', 'gallery', 'achievements', 'skills', 'journey', 'contact'].map((sec) => (
                  <button key={sec} onClick={() => scrollToSection(sec)} className="mobile-nav-link-btn">
                    {sec}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sections Wrapper */}
          <main className="main-content">
            
            {/* HERO / ABOUT SECTION */}
            <section id="about" className="portfolio-section hero-section">
              <div className="section-container hero-grid-layout">
                <div className="hero-text-block">
                  <span className="section-subtitle">Who I Am</span>
                  <h1 className="hero-main-title">{profileData?.name}</h1>
                  <h2 className="hero-sub-title">{profileData?.title}</h2>
                  <p className="hero-bio-desc">{profileData?.bio}</p>

                  {/* Stats Counter Row */}
                  <div className="hero-stats-row">
                    <div className="hero-stat-card">
                      <div className="stat-card-number">{roomStats.projectsCount}+</div>
                      <div className="stat-card-label">Projects</div>
                    </div>
                    <div className="hero-stat-card">
                      <div className="stat-card-number">{roomStats.technologiesCount}+</div>
                      <div className="stat-card-label">Skills</div>
                    </div>
                    <div className="hero-stat-card">
                      <div className="stat-card-number">{roomStats.experienceYears}y</div>
                      <div className="stat-card-label">Experience</div>
                    </div>
                  </div>
                </div>

                <div className="hero-visual-block">
                  {/* Interactive Desk Setup Widget */}
                  <div className="vector-desk-card">
                    <div className="vector-desk-title">Desk Setup</div>
                    <div className="vector-desk-surface">
                      {/* Laptop Screen widget */}
                      <div className="laptop-drawing shadow-md">
                        <div className="laptop-screen-container">
                          <div className="screen-text">{profileData?.name || "Alex Vance"}</div>
                          <div className="screen-bio">{profileData?.title || "Creative Engineer"}</div>
                        </div>
                        <div className="laptop-base"></div>
                      </div>

                      {/* Interactive keyboard click triggers sound/typing */}
                      <div 
                        className="interactive-keyboard-element"
                        style={{ transform: typingKeys ? 'translateY(1px)' : 'none' }}
                        onClick={handleKeyboardClick}
                        title="Click to type!"
                      />

                      {/* Coffee Cup with steam */}
                      <div className="coffee-cup" title="Coffee cup (Steam animation)">
                        <div className="coffee-handle"></div>
                        <div className="steam-line s1"></div>
                        <div className="steam-line s2"></div>
                        <div className="steam-line s3"></div>
                      </div>

                      {/* Desk Lamp (interactive switch) */}
                      <div className="desk-lamp" onClick={() => setLampOn(!lampOn)} title="Click to toggle desk lamp">
                        <div className="lamp-head"></div>
                        <div className="lamp-arm"></div>
                        <div className="lamp-base"></div>
                        <div className={`lamp-light-beam ${lampOn ? 'on' : ''}`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Sitting Avatar bubble */}
                  <div className="avatar-vector-widget">
                    <div className="avatar-character">
                      <div className="avatar-face">
                        <div className="eye left"></div>
                        <div className="eye right"></div>
                        <div className="smile"></div>
                      </div>
                      <div className="avatar-body"></div>
                    </div>
                    <div className="avatar-bubble-static">
                      Hi! I'm Alex. Scroll down to see my work!
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="portfolio-section section-bg-alt">
              <div className="section-container">
                <span className="section-subtitle">Portfolio Work</span>
                <h2 className="section-main-title">Featured Projects</h2>

                {/* Project Categories Filter */}
                <div className="categories-filter-bar">
                  {['ALL', 'WEB', 'AI', 'SOFTWARE', 'EXPERIMENTS'].map(cat => (
                    <button
                      key={cat}
                      className={`filter-tab-btn ${projectCat === cat ? 'active' : ''}`}
                      onClick={() => setProjectCat(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="project-card-grid">
                  {filteredProjects.map((proj) => (
                    <div className="project-panel-card" key={proj.id}>
                      <img className="proj-img" src={proj.imageUrl} alt={proj.name} />
                      <div className="proj-content">
                        <span className="proj-cat">{proj.category}</span>
                        <h3 className="proj-title">{proj.name}</h3>
                        <p className="proj-desc">{proj.description}</p>
                        <div className="proj-tags">
                          {proj.technologies.map((t, idx) => (
                            <span className="proj-tag" key={idx}>{t}</span>
                          ))}
                        </div>
                        <div className="proj-links">
                          <a className="proj-link" href={proj.githubUrl} target="_blank" rel="noreferrer">
                            <GithubIcon size={14} /> GitHub
                          </a>
                          <a className="proj-link" href={proj.demoUrl} target="_blank" rel="noreferrer">
                            <ExternalLink size={14} /> Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* EDUCATION SECTION */}
            <section id="education" className="portfolio-section">
              <div className="section-container">
                <span className="section-subtitle">Academic Timeline</span>
                <h2 className="section-main-title">Learning & Certifications</h2>

                <div className="education-booklet-layout">
                  <div className="booklet-sidebar">
                    <h3 className="sidebar-section-title">Academic Milestones</h3>
                    <div className="sidebar-nodes-container">
                      {education.map((edu, idx) => (
                        <div 
                          key={edu.id} 
                          className={`sidebar-node-item ${activeBookIndex === idx ? 'active' : ''}`}
                          onClick={() => setActiveBookIndex(idx)}
                        >
                          <BookOpen size={16} />
                          <div>
                            <h4 className="node-degree">{edu.degree}</h4>
                            <p className="node-meta">{edu.institution} • {edu.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="booklet-content-panel">
                    <h3 className="panel-section-title">Specialization & Details</h3>
                    {education[activeBookIndex] ? (
                      <div>
                        <h4 className="panel-degree-title">{education[activeBookIndex].specialization}</h4>
                        <ul className="panel-details-list">
                          {education[activeBookIndex].details.map((det, dIdx) => (
                            <li key={dIdx}>{det}</li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p>Select a milestone to view detailed study records.</p>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* GALLERY SECTION */}
            <section id="gallery" className="portfolio-section section-bg-alt">
              <div className="section-container">
                <span className="section-subtitle">Visual Experiments</span>
                <h2 className="section-main-title">Creative Art Wall</h2>
                <p className="section-lead-desc">CSS abstract gradient configurations representing tech modules. Click items to open full preview.</p>

                <div className="gallery-section-grid">
                  <div className="creativewall-item art-1" onClick={() => window.open(projects[0]?.imageUrl, '_blank')}>
                    <span className="wall-badge">AI</span>
                  </div>
                  <div className="creativewall-item art-2" onClick={() => window.open(projects[1]?.imageUrl, '_blank')}>
                    <span className="wall-badge">MATH</span>
                  </div>
                  <div className="creativewall-item art-3" onClick={() => window.open(projects[2]?.imageUrl, '_blank')}>
                    <span className="wall-badge">CODE</span>
                  </div>
                  <div className="creativewall-item art-4" onClick={() => window.open(projects[3]?.imageUrl, '_blank')}>
                    <span className="wall-badge">UI</span>
                  </div>
                </div>
              </div>
            </section>

            {/* ACHIEVEMENTS SECTION */}
            <section id="achievements" className="portfolio-section">
              <div className="section-container">
                <span className="section-subtitle">Milestones Met</span>
                <h2 className="section-main-title">Awards & Certifications</h2>

                <div className="achievements-section-list">
                  {achievements.map((ach) => (
                    <div className="achievement-list-card" key={ach.id}>
                      <span className="achievement-emoji">
                        {ach.category === 'Trophy' ? '🏆' : ach.category === 'Medal' ? '🥇' : ach.category === 'Certificate' ? '📜' : '🎖️'}
                      </span>
                      <div className="achievement-details">
                        <h3 className="achievement-card-title">{ach.title}</h3>
                        <p className="achievement-card-meta">{ach.event} ({ach.year})</p>
                        <p className="achievement-card-desc">{ach.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SKILLS / IDEA BOARD SECTION */}
            <section id="skills" className="portfolio-section section-bg-alt">
              <div className="section-container">
                <span className="section-subtitle">My Philosophies</span>
                <h2 className="section-main-title">How I Think (Idea Board)</h2>

                <div className="skills-grid-layout">
                  <div className="skill-philosophy-card">
                    <div className="pin-marker"></div>
                    <h3 className="philosophy-title">CREATE</h3>
                    <p className="philosophy-text">Designing with clean UX, smooth physics, micro-interactions, and visual storytelling. Frontends should be responsive, fast, and alive.</p>
                  </div>
                  <div className="skill-philosophy-card">
                    <div className="pin-marker"></div>
                    <h3 className="philosophy-title">SOLVE</h3>
                    <p className="philosophy-text">Tackling hard algorithmic challenges, designing robust database schemas, and ensuring clean REST response envelopes inside Spring Boot.</p>
                  </div>
                  <div className="skill-philosophy-card">
                    <div className="pin-marker"></div>
                    <h3 className="philosophy-title">BUILD</h3>
                    <p className="philosophy-text">Writing robust, clean, and highly tested codebase architectures. Focusing on optimization, Docker orchestration, and modular system designs.</p>
                  </div>
                </div>

                <div className="skills-tags-cloud-container">
                  <h3 className="skills-cloud-title">Technologies & Tools</h3>
                  <div className="skills-cloud-tags">
                    {profileData?.skills.map((skill, idx) => (
                      <span className="skills-cloud-tag" key={idx}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* JOURNEY PLANT SECTION */}
            <section id="journey" className="portfolio-section">
              <div className="section-container journey-split-layout">
                <div className="journey-info-panel">
                  <span className="section-subtitle">Chronological Development</span>
                  <h2 className="section-main-title">Growth Journey</h2>
                  <p className="journey-description">Click on the plant growth stages to see the journey unfold. As you select different phases, the plant illustration grows dynamically!</p>

                  <div className="plant-stages-buttons-list">
                    {plantStages.map((stage, idx) => (
                      <button
                        key={stage}
                        className={`plant-stage-select-btn ${plantStage === idx ? 'active' : ''}`}
                        onClick={() => setPlantStage(idx)}
                      >
                        {stage}
                      </button>
                    ))}
                  </div>

                  <div className="journey-stage-detail-panel">
                    {plantStage === 0 && (
                      <div>
                        <h3 className="stage-detail-title">SEED: Learning Begins (2020)</h3>
                        <p className="stage-detail-text">Started diving into basic computer science theories, algorithm complexities, and foundational data structures. Cultivated a passion for creative interactive code.</p>
                      </div>
                    )}
                    {plantStage === 1 && (
                      <div>
                        <h3 className="stage-detail-title">SPROUT: First Projects (2021-2022)</h3>
                        <p className="stage-detail-text">Built initial web utilities and CLI applications. Explored React frameworks and simple canvas-based rendering libraries.</p>
                      </div>
                    )}
                    {plantStage === 2 && (
                      <div>
                        <h3 className="stage-detail-title">GROWTH: Full-Stack & Spring Boot (2023)</h3>
                        <p className="stage-detail-text">Mastered Spring Boot MVC architectures. Built backend databases, integrated secure JWT APIs, and began connecting databases to modular React applications.</p>
                      </div>
                    )}
                    {plantStage === 3 && (
                      <div>
                        <h3 className="stage-detail-title">BRANCHES: New Skills & Internships (2023-2024)</h3>
                        <p className="stage-detail-text">Acquired commercial software engineering internship experiences. Focused on cloud structures, microservices architectures, and automated testing.</p>
                      </div>
                    )}
                    {plantStage === 4 && (
                      <div>
                        <h3 className="stage-detail-title">TREE: Current Accomplishments (2024-Present)</h3>
                        <p className="stage-detail-text">Leading interactive front-end and Java backend development at PixelCraft Labs. Actively contributing to opensource visual physics components libraries.</p>
                      </div>
                    )}
                    {plantStage === 5 && (
                      <div>
                        <h3 className="stage-detail-title">FUTURE GOALS</h3>
                        <p className="stage-detail-text">Deep dive into generative AI prompt alignments, 3D WebGL physics simulations, and decentralized service nodes orchestration.</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="journey-visual-panel">
                  {/* Interactive Growth Plant Drawing */}
                  <div className="vector-plant-card">
                    <div className="plant-stem" style={{ height: `${50 + plantStage * 15}px` }}>
                      {plantStage >= 1 && <div className="plant-leaf left" style={{ bottom: '20px' }}></div>}
                      {plantStage >= 2 && <div className="plant-leaf right" style={{ bottom: '35px' }}></div>}
                      {plantStage >= 3 && <div className="plant-leaf left" style={{ bottom: '50px' }}></div>}
                      {plantStage >= 4 && <div className="plant-leaf right" style={{ bottom: '65px' }}></div>}
                      {plantStage >= 5 && <div className="plant-leaf left" style={{ bottom: '80px' }}></div>}
                    </div>
                    <div className="plant-pot"></div>
                  </div>
                </div>
              </div>
            </section>

            {/* RESUME NOTEBOOK SECTION */}
            <section id="resume" className="portfolio-section section-bg-alt">
              <div className="section-container resume-card-layout">
                <div className="resume-layout-header">
                  <div>
                    <span className="section-subtitle">Curriculum Vitae</span>
                    <h2 className="section-main-title">Professional Resume</h2>
                  </div>
                  <a 
                    href="/resume.pdf" 
                    download
                    className="enter-button"
                    style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}
                  >
                    <Download size={16} /> Download Resume PDF
                  </a>
                </div>

                <div className="paper-resume-container shadow-lg">
                  <div className="resume-paper-header">
                    <h1 className="resume-paper-name">{profileData?.name || "Alex Vance"}</h1>
                    <p className="resume-paper-title">{profileData?.title || "Creative Engineer & Full-Stack Developer"}</p>
                    <p className="resume-paper-contact">Email: {profileData?.email} | GitHub: {profileData?.github}</p>
                  </div>

                  <div className="resume-paper-section">
                    <h3 className="paper-section-title">Work Experience</h3>
                    <div className="paper-experience-list">
                      {experience.map(exp => (
                        <div key={exp.id} className="paper-exp-item">
                          <div className="paper-exp-header">
                            <span className="exp-item-role">{exp.role}</span>
                            <span className="exp-item-duration">{exp.duration}</span>
                          </div>
                          <p className="exp-item-company">{exp.company}</p>
                          <ul className="exp-item-points">
                            {exp.points.map((p, idx) => <li key={idx}>{p}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CONTACT MAILBOX SECTION */}
            <section id="contact" className="portfolio-section">
              <div className="section-container contact-split-grid">
                <div className="contact-info-panel">
                  <span className="section-subtitle">Get In Touch</span>
                  <h2 className="section-main-title">Let's Connect</h2>
                  <p className="contact-text-desc">Feel free to reach out for project collaboration, job opportunities, or just to say hi! Below is my rural-style mailbox widget. When you hit submit, the flag will raise and the letter will fly into the mailbox.</p>
                  
                  {/* Mailbox Vector Widget */}
                  <div className="contact-mailbox-vector-card">
                    <div className="mailbox-box">
                      <div style={{ width: '15px', height: '10px', background: '#eaddf7', borderRadius: '2px' }}></div>
                      <div className={`mailbox-flag ${mailboxSent ? 'raised' : ''}`}></div>
                    </div>
                    <div className="mailbox-stand"></div>
                  </div>
                </div>

                <div className="contact-form-panel">
                  {formSuccessMessage ? (
                    <div className="success-message-panel">
                      <div className="envelope-animation">
                        <div className="envelope-flap"></div>
                      </div>
                      <h3 className="success-banner-title">Message Mailed!</h3>
                      <p className="success-banner-text">{formSuccessMessage}</p>
                    </div>
                  ) : (
                    <form className="contact-form" onSubmit={handleContactSubmit}>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          value={contactForm.name} 
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} 
                          required 
                        />
                        {formErrors.name && <span className="validation-error">{formErrors.name}</span>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          value={contactForm.email} 
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} 
                          required 
                        />
                        {formErrors.email && <span className="validation-error">{formErrors.email}</span>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input 
                          type="text" 
                          id="subject" 
                          value={contactForm.subject} 
                          onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })} 
                          required 
                        />
                        {formErrors.subject && <span className="validation-error">{formErrors.subject}</span>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                          id="message" 
                          rows={4} 
                          value={contactForm.message} 
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} 
                          required 
                        />
                        {formErrors.message && <span className="validation-error">{formErrors.message}</span>}
                      </div>

                      <button className="submit-btn animate-pulse" type="submit" disabled={formSubmitting}>
                        {formSubmitting ? 'Mailing...' : 'Mail Letter →'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </section>

          </main>

          {/* Back to top scroll button */}
          <button 
            className="back-to-top-btn" 
            onClick={() => scrollToSection('about')}
            title="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>

          {/* Footer */}
          <footer className="conventional-footer">
            <p>&copy; {new Date().getFullYear()} {profileData?.name}. Built with React, Spring Boot, and Vanilla CSS.</p>
          </footer>
        </div>
      )}
    </div>
  );
}

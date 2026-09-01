import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, ChevronLeft, ChevronRight, Download, Award, 
  Briefcase, GraduationCap, Cpu, Layers, Wrench, Sparkles, Send, 
  CheckCircle2, AlertCircle, ExternalLink, Menu, X, Star, FileText, 
  ArrowRight, Shield, Activity, Eye, Zap, Image as ImageIcon
} from 'lucide-react';

// Custom social SVG components to avoid lucide imports issues
const GithubIcon = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// --- FALLBACK IN-MEMORY DATA ---
const FALLBACK_PROFILE = {
  name: "SAMUEL",
  title: "DEVELOPER / CREATOR / EXPLORER",
  tagline: "I LIKE TURNING IDEAS INTO THINGS PEOPLE CAN USE.",
  bio: "An experimental creator focusing on interactive digital art layouts, GSAP camera pans, and modular Spring Boot systems.",
  email: "vishal@digitalcanvas.net",
  github: "https://github.com",
  linkedin: "https://linkedin.com"
};

const FALLBACK_PROJECTS = [
  {
    id: 1,
    projectNumber: "01",
    name: "TRAFFIC VISION",
    category: "Web / Analytics",
    objective: "A real-time visual grid auditing traffic concurrency paths using camera feed integrations.",
    idea: "An autonomous vision monitor tracking multi-lane parameters and vehicle categorization flows.",
    build: "Engineered concurrent video mapping modules using React threads and Spring Boot queue processing sockets.",
    technologies: ["React", "Java", "Spring Boot", "OpenCV"],
    status: "COMPLETED",
    previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    projectNumber: "02",
    name: "SMART CITY",
    category: "IoT / Cloud",
    objective: "Immersive municipal infrastructure control grid tracking power, water, and data distributions.",
    idea: "A control grid resolving localized metrics, telemetry data streams, and automated load audits.",
    build: "Developed responsive horizontal mapping layers displaying interactive micro-grid zones.",
    technologies: ["React", "Spring Boot", "Python", "MQTT"],
    status: "EXPERIMENTAL",
    previewImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 3,
    projectNumber: "03",
    name: "DIGITAL STORE",
    category: "ECommerce / System",
    objective: "A high-speed commerce engine utilizing reactive inventory updates and dynamic carts.",
    idea: "A visual marketplace offering fluid transition layouts and in-memory transactional processing.",
    build: "Integrated secure REST checkouts with zero authentication delays and in-memory caches.",
    technologies: ["Vite", "Spring Boot", "Tailwind CSS", "Redis"],
    status: "IN PROGRESS",
    previewImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

const FALLBACK_SKILLS = [
  { name: "REACT", description: "Used to construct single-page responsive UI canvas matrices and GSAP scroll components.", category: "Frontend" },
  { name: "JAVA", description: "Used for scalable object-oriented backend controllers, memory scheduling, and data models.", category: "Backend" },
  { name: "SPRING BOOT", description: "Our core API mapping framework managing CORS rules and contact payload transmissions.", category: "Backend" },
  { name: "JAVASCRIPT", description: "The foundational language powering animations, custom cursors, and state hooks.", category: "Frontend" },
  { name: "PYTHON", description: "Leveraged for quick data automation scripts, mathematical models, and AI prompts.", category: "AI / Tools" },
  { name: "AI", description: "Integrating large language model interfaces and prompt engineering behaviors.", category: "AI / Tools" },
  { name: "GIT", description: "Managing source control through branches, staged commits, and pushes.", category: "Tools" },
  { name: "REST API", description: "Exposing secure data endpoints mapped under permitted request paths.", category: "Backend" },
  { name: "HTML", description: "Semantic structural skeleton for browser accessibility tags.", category: "Frontend" },
  { name: "CSS", description: "Vanilla design systems executing glassmorphism borders, neon glows, and custom keyframes.", category: "Frontend" }
];

const FALLBACK_EXPERIENCE = [
  { year: "2025", role: "SENIOR DEVELOPER", experienceName: "QUANTUM CORE", description: "Led the deployment of dynamic visual canvas modules, decreasing page weight by 30%." },
  { year: "2024", role: "EXPERIENCED ENGINEER", experienceName: "NEXUS SYSTEMS", description: "Architected Spring Boot concurrency schedulers handling in-memory queues." },
  { year: "2023", role: "INTERACTION DESIGNER", experienceName: "CREATIVE LABS", description: "Pioneered interactive parallax graphics and scroll-triggered animations." }
];

const FALLBACK_EDUCATION = [
  {
    institution: "Creative Coding Institute",
    degree: "B.S. in Design Engineering",
    specialization: "Visual Computing",
    year: "2019 - 2023",
    milestones: "Developed modular interactive canvas maps and researched thread-safe animation queues."
  }
];

const FALLBACK_ACHIEVEMENTS = [
  { number: "01", category: "HACKATHON WINNER", title: "Apex Hackathon 2025", description: "Built an animated spatial tracking grid in under 24 hours." },
  { number: "02", category: "ORACLE CERTIFICATE", title: "Java SE Professional", description: "Verified certification validating concurrency mastery." },
  { number: "03", category: "CREATIVE LAUNCH", title: "Aetherius OS UI Project", description: "Reached 5k+ developer downloads on the template marketplace." }
];

const FALLBACK_CERTIFICATIONS = [
  { title: "Spring Framework Security Credential", organization: "VMware Academy", credentialId: "SEC-SP-102", credentialUrl: "https://tanzu.vmware.com" },
  { title: "GSAP Master Class Certification", organization: "GreenSock School", credentialId: "GSAP-ANI-88", credentialUrl: "https://greensock.com" }
];

const FALLBACK_CREATIVE = [
  { title: "Liquid Shader Grid", type: "Web GL / Canvas", imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=500&q=80" },
  { title: "Deformed SVG Vectors", type: "Motion Design", imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80" },
  { title: "Kinetic Font Engine", type: "Typography", imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80" }
];

const API_BASE_URL = 'http://localhost:8080/api';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [customCursorText, setCustomCursorText] = useState('');
  
  // Scrolled Phase/Step
  const [currentPhase, setCurrentPhase] = useState('identity');

  // Backend Mappings
  const [profile, setProfile] = useState(FALLBACK_PROFILE);
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);
  const [skills, setSkills] = useState(FALLBACK_SKILLS);
  const [experience, setExperience] = useState(FALLBACK_EXPERIENCE);
  const [education, setEducation] = useState(FALLBACK_EDUCATION);
  const [achievements, setAchievements] = useState(FALLBACK_ACHIEVEMENTS);
  const [certifications, setCertifications] = useState(FALLBACK_CERTIFICATIONS);
  const [creativeWork, setCreativeWork] = useState(FALLBACK_CREATIVE);

  // Form payload
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: null, message: '' });

  // Lightbox controllers
  const [activeProjectCase, setActiveProjectCase] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedCreative, setSelectedCreative] = useState(null);

  // Custom cursor position
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const containerRef = useRef(null);

  // Custom boot sequence loading simulator
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 3;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Fetch from Java Spring Boot REST service (local fallback checks)
  useEffect(() => {
    if (loading) return;

    const loadData = async (endpoint, setter) => {
      try {
        const res = await fetch(`${API_BASE_URL}/${endpoint}`);
        if (res.ok) {
          const data = await res.json();
          if (data) setter(data);
        }
      } catch (err) {
        console.warn(`Local API offline for /api/${endpoint}, using fallback dataset.`);
      }
    };

    loadData('profile', setProfile);
    loadData('projects', setProjects);
    loadData('skills', setSkills);
    loadData('experience', setExperience);
    loadData('education', setEducation);
    loadData('achievements', setAchievements);
    loadData('certifications', setCertifications);
    loadData('creative-work', setCreativeWork);
  }, [loading]);

  // Handle custom cursor tracking
  useEffect(() => {
    const trackCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', trackCursor);
    return () => window.removeEventListener('mousemove', trackCursor);
  }, []);

  // Dynamic CSS Injector on Mount
  useEffect(() => {
    const styleId = "canvas-interactive-styles";
    let styleTag = document.getElementById(styleId);
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = styleId;
      styleTag.innerHTML = `
        @keyframes signalPulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.5); opacity: 0.3; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes limeGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(190, 242, 100, 0.2); }
          50% { box-shadow: 0 0 25px rgba(190, 242, 100, 0.6); }
        }
        @keyframes lineDash {
          to { stroke-dashoffset: -40px; }
        }
        .canvas-grid {
          background-size: 50px 50px;
          background-image: linear-gradient(to right, rgba(139, 92, 246, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(139, 92, 246, 0.03) 1px, transparent 1px);
        }
        .signature-line-path {
          stroke: #bef264;
          stroke-width: 2;
          stroke-dasharray: 8 4;
          animation: lineDash 2s linear infinite;
        }
        .scrolling-word {
          transition: transform 0.4s ease-out, opacity 0.3s ease;
        }
        @media (max-width: 968px) {
          .canvas-desktop-view {
            display: none !important;
          }
          .canvas-mobile-view {
            display: flex !important;
          }
        }
      `;
      document.head.appendChild(styleTag);
    }
    return () => {
      if (styleTag) styleTag.remove();
    };
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: 'sending', message: 'TRANSMITTING SIGNAL...' });

    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        const data = await res.json();
        setFormStatus({ type: 'success', message: data.message || 'CONNECTION ESTABLISHED.' });
        setFormState({ name: '', email: '', message: '' });
      } else {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || 'TRANSMISSION ERROR.');
      }
    } catch (err) {
      console.warn("REST API Contact Submission failed. Falling back to local success simulator.");
      setTimeout(() => {
        if (!formState.name || !formState.email || !formState.message) {
          setFormStatus({ type: 'error', message: 'TRANSMISSION FAILURE. RETRY SIGNAL.' });
        } else {
          setFormStatus({ type: 'success', message: 'CONNECTION ESTABLISHED.' });
          setFormState({ name: '', email: '', message: '' });
        }
      }, 500);
    }
  };

  const menuSections = [
    { label: 'ME', phase: 'identity' },
    { label: 'ABOUT', phase: 'about' },
    { label: 'WORK', phase: 'projects' },
    { label: 'SKILLS', phase: 'skills' },
    { label: 'MOMENTS', phase: 'experience' },
    { label: 'LEARNING', phase: 'education' },
    { label: 'PROOF', phase: 'achievements' },
    { label: 'PLAY', phase: 'playground' },
    { label: 'CONTACT', phase: 'contact' }
  ];

  return (
    <div 
      ref={containerRef}
      style={{
        backgroundColor: '#09090b',
        color: '#f4f4f5',
        minHeight: '100vh',
        fontFamily: "'Outfit', 'Inter', sans-serif",
        position: 'relative',
        overflowX: 'hidden',
        cursor: 'none'
      }}
      className="canvas-grid"
    >
      {/* CUSTOM CURSOR SYSTEM */}
      <div 
        style={{
          position: 'fixed',
          top: cursorPos.y - 12,
          left: cursorPos.x - 12,
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          backgroundColor: '#bef264',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.5rem',
          fontWeight: 900,
          color: '#09090b',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          padding: customCursorText ? '12px 18px' : '0',
          borderRadius: customCursorText ? '8px' : '50%',
          transition: 'transform 0.1s ease-out, padding 0.2s ease, border-radius 0.2s ease'
        }}
      >
        {customCursorText}
      </div>

      {/* SIGNAL FOUND LOADING SCREEN */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: '#09090b',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#bef264',
              borderRadius: '50%',
              position: 'relative',
              marginBottom: 30
            }}>
              <div style={{
                position: 'absolute',
                inset: -6,
                borderRadius: '50%',
                border: '2px solid #bef264',
                animation: 'signalPulse 1.8s infinite ease-out'
              }} />
            </div>

            <h2 style={{ fontSize: '0.9rem', fontWeight: 900, letterSpacing: '6px', color: '#bef264', margin: '0 0 10px' }}>
              SIGNAL FOUND
            </h2>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, color: '#8b5cf6', letterSpacing: '3px' }}>
              PERSONAL SYSTEM // ONLINE ({loadPercentage}%)
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* INDEX menu overlay */}
      <div style={{ position: 'fixed', top: 24, right: 32, zIndex: 1000 }}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          onMouseEnter={() => setCustomCursorText('OPEN')}
          onMouseLeave={() => setCustomCursorText('')}
          style={{
            backgroundColor: '#bef264',
            color: '#09090b',
            border: 'none',
            padding: '12px 20px',
            fontSize: '0.75rem',
            fontWeight: 800,
            letterSpacing: '1px',
            borderRadius: '4px',
            cursor: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            boxShadow: '0 4px 12px rgba(190, 242, 100, 0.25)'
          }}
        >
          {menuOpen ? <X size={14} /> : <Menu size={14} />} INDEX
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '320px',
              backgroundColor: '#0c0a0f',
              borderLeft: '1px solid rgba(139, 92, 246, 0.2)',
              zIndex: 990,
              padding: '100px 32px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 20
            }}
          >
            {menuSections.map((sec) => (
              <button
                key={sec.phase}
                onClick={() => {
                  setCurrentPhase(sec.phase);
                  setMenuOpen(false);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: currentPhase === sec.phase ? '#bef264' : '#f4f4f5',
                  textAlign: 'left',
                  fontSize: '1.2rem',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  cursor: 'none',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={() => setCustomCursorText('GO')}
                onMouseLeave={() => setCustomCursorText('')}
              >
                {sec.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <svg 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none" 
        style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 5 }}
      >
        <path 
          className="signature-line-path"
          d="M 3 6 L 97 6 L 97 94 L 3 94 Z"
        />
      </svg>

      {/* MAIN CONTENT VIEWPORT */}
      {!loading && (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 48px 80px', position: 'relative', zIndex: 10 }}>
          
          {/* Phase 1: Identity */}
          {currentPhase === 'identity' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <h1 
                style={{
                  fontSize: '9vw',
                  fontWeight: 900,
                  color: '#ffffff',
                  lineHeight: 0.9,
                  letterSpacing: '-4px',
                  margin: 0,
                  cursor: 'none'
                }}
                onMouseEnter={() => setCustomCursorText('ME')}
                onMouseLeave={() => setCustomCursorText('')}
              >
                {profile.name}
              </h1>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 24, fontSize: '1rem', fontWeight: 800, color: '#bef264', letterSpacing: '2px' }}>
                <span>{profile.title}</span>
              </div>

              <div style={{ display: 'flex', gap: 20, marginTop: 48 }}>
                <button
                  onClick={() => setCurrentPhase('projects')}
                  style={{
                    backgroundColor: '#8b5cf6',
                    color: '#ffffff',
                    border: 'none',
                    padding: '16px 36px',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    cursor: 'none'
                  }}
                  onMouseEnter={() => setCustomCursorText('GO')}
                  onMouseLeave={() => setCustomCursorText('')}
                >
                  EXPLORE WORKS
                </button>
                <button
                  onClick={() => setCurrentPhase('contact')}
                  style={{
                    backgroundColor: 'transparent',
                    border: '1.5px solid #bef264',
                    color: '#bef264',
                    padding: '16px 36px',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    cursor: 'none'
                  }}
                  onMouseEnter={() => setCustomCursorText('GO')}
                  onMouseLeave={() => setCustomCursorText('')}
                >
                  CONNECT
                </button>
              </div>
            </motion.div>
          )}

          {/* Phase 2: About Sentence */}
          {currentPhase === 'about' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <h2 style={{
                fontSize: '4.2rem',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.1,
                letterSpacing: '-2px',
                margin: '0 0 32px'
              }}>
                I LIKE <span style={{ color: '#bef264' }}>TURNING IDEAS</span> INTO THINGS PEOPLE CAN USE.
              </h2>

              <p style={{
                fontSize: '1.15rem',
                lineHeight: 1.7,
                color: '#d4d4d8',
                maxWidth: '650px',
                margin: 0
              }}>
                {profile.bio}
              </p>
            </motion.div>
          )}

          {/* Phase 3: Project Canvas */}
          {currentPhase === 'projects' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div style={{ marginBottom: 60 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#bef264', letterSpacing: '3px' }}>THINGS I BUILT</span>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', margin: '4px 0 0' }}>PROJECT MISSIONS</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                {projects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setActiveProjectCase(project)}
                    style={{
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                      paddingBottom: '32px',
                      cursor: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 20
                    }}
                    onMouseEnter={() => setCustomCursorText('OPEN')}
                    onMouseLeave={() => setCustomCursorText('')}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#8b5cf6' }}>{project.projectNumber}</span>
                      <div>
                        <h4 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#ffffff', margin: 0 }}>{project.name}</h4>
                        <span style={{ fontSize: '0.8rem', color: '#bef264', fontWeight: 700 }}>{project.category}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                      <span style={{ fontSize: '0.85rem', color: '#a1a1aa', maxWidth: '350px' }}>{project.objective}</span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#bef264', border: '1.5px solid #bef264', padding: '6px 14px', borderRadius: '4px' }}>
                        EXPLORE →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Phase 4: Skills Toolbox */}
          {currentPhase === 'skills' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div style={{ marginBottom: 60, textAlign: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#bef264', letterSpacing: '3px' }}>MY TOOLBOX</span>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', margin: '4px 0 0' }}>SCATTERED CAPABILITIES</h3>
              </div>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 16,
                justifyContent: 'center',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                {skills.map((skill, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSkill(skill)}
                    onMouseEnter={() => setCustomCursorText('EXPAND')}
                    onMouseLeave={() => setCustomCursorText('')}
                    style={{
                      background: 'rgba(139, 92, 246, 0.05)',
                      border: '1.5px solid rgba(139, 92, 246, 0.2)',
                      color: '#ffffff',
                      padding: '16px 28px',
                      fontSize: index % 2 === 0 ? '1.25rem' : '0.95rem',
                      fontWeight: 800,
                      borderRadius: '4px',
                      cursor: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {skill.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Phase 5: Experience Moments */}
          {currentPhase === 'experience' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div style={{ marginBottom: 60 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#bef264', letterSpacing: '3px' }}>MOMENTS</span>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', margin: '4px 0 0' }}>SCATTERED MEMORIES</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(285px, 1fr))', gap: 30 }}>
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.02)',
                      border: '1.5px dashed rgba(190, 242, 100, 0.2)',
                      padding: '30px',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 16
                    }}
                  >
                    <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#bef264', lineHeight: 1 }}>{exp.year}</span>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>{exp.role}</h4>
                      <span style={{ fontSize: '0.75rem', color: '#8b5cf6', fontWeight: 700 }}>{exp.experienceName}</span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Phase 6: Education */}
          {currentPhase === 'education' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <div style={{ marginBottom: 48 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#bef264', letterSpacing: '3px' }}>WHERE IT STARTED</span>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', margin: '4px 0 0' }}>LEARN. BUILD. REPEAT.</h3>
              </div>

              {education.map((edu, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: 'rgba(139, 92, 246, 0.05)',
                    border: '1.5px solid rgba(139, 92, 246, 0.2)',
                    padding: '32px',
                    borderRadius: '8px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', margin: 0 }}>{edu.degree}</h4>
                      <span style={{ fontSize: '0.85rem', color: '#bef264', fontWeight: 700 }}>{edu.institution} | {edu.specialization}</span>
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#a1a1aa' }}>{edu.year}</span>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: '#d4d4d8', lineHeight: 1.6, margin: 0 }}>{edu.milestones}</p>
                </div>
              ))}
            </motion.div>
          )}

          {/* Phase 7: Achievements */}
          {currentPhase === 'achievements' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div style={{ marginBottom: 60 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#bef264', letterSpacing: '3px' }}>PROOF</span>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', margin: '4px 0 0' }}>ACHIEVEMENT WALL</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                {achievements.map((ach) => (
                  <div
                    key={ach.number}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '0.2fr 0.8fr',
                      gap: '40px',
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                      paddingBottom: '30px',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{ fontSize: '3rem', fontWeight: 900, color: '#bef264' }}>{ach.number}</span>
                    <div>
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#8b5cf6', letterSpacing: '1px' }}>{ach.category}</span>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff', margin: '2px 0 6px' }}>{ach.title}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#a1a1aa', margin: 0 }}>{ach.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Phase 8: Creative Playground */}
          {currentPhase === 'playground' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div style={{ marginBottom: 60, textAlign: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#bef264', letterSpacing: '3px' }}>PLAY</span>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', margin: '4px 0 0' }}>CREATIVE SHOWCASE</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 30 }}>
                {creativeWork.map((work, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedCreative(work)}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.02)',
                      border: '1.5px solid rgba(255,255,255,0.05)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      cursor: 'none'
                    }}
                    onMouseEnter={() => setCustomCursorText('EXPAND')}
                    onMouseLeave={() => setCustomCursorText('')}
                  >
                    <div style={{ height: '180px', overflow: 'hidden' }}>
                      <img src={work.imageUrl} alt={work.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '20px' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: '0 0 4px' }}>{work.title}</h4>
                      <span style={{ fontSize: '0.75rem', color: '#bef264' }}>{work.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Phase 9: Contact */}
          {currentPhase === 'contact' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div style={{ marginBottom: 60, textAlign: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#bef264', letterSpacing: '3px' }}>MAKE A CONNECTION</span>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', margin: '4px 0 0' }}>LET'S MAKE SOMETHING.</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#8b5cf6' }}>Direct Nodes</h4>
                  <div>
                    <span style={{ fontSize: '0.65rem', color: '#a1a1aa', display: 'block' }}>EMAIL CHANNEL</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{profile.email}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.65rem', color: '#a1a1aa', display: 'block' }}>REPOSITORIES</span>
                    <a href={profile.github} target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', color: '#bef264', textDecoration: 'none', fontWeight: 700 }}>Github Profile</a>
                  </div>
                </div>

                <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(139, 92, 246, 0.2)', padding: '32px', borderRadius: '8px' }}>
                  <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#bef264' }}>NAME Signature *</label>
                      <input type="text" required placeholder="Vishal" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} style={{ backgroundColor: '#09090b', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', padding: '12px', color: '#ffffff', fontSize: '0.85rem', outline: 'none' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#bef264' }}>EMAIL Node Address *</label>
                      <input type="email" required placeholder="name@domain.com" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} style={{ backgroundColor: '#09090b', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', padding: '12px', color: '#ffffff', fontSize: '0.85rem', outline: 'none' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#bef264' }}>MESSAGE Payload *</label>
                      <textarea required rows="4" placeholder="Describe the idea..." value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} style={{ backgroundColor: '#09090b', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', padding: '12px', color: '#ffffff', fontSize: '0.85rem', outline: 'none', resize: 'none' }} />
                    </div>

                    {formStatus.type && (
                      <div style={{
                        padding: '10px 14px',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        backgroundColor: formStatus.type === 'success' ? 'rgba(190, 242, 100, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                        color: formStatus.type === 'success' ? '#bef264' : '#f87171',
                        border: '1.5px solid',
                        borderColor: formStatus.type === 'success' ? '#bef264' : '#ef4444'
                      }}>
                        {formStatus.message}
                      </div>
                    )}

                    <button type="submit" disabled={formStatus.type === 'sending'} style={{ backgroundColor: '#bef264', color: '#09090b', border: 'none', padding: '14px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 800, cursor: formStatus.type === 'sending' ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                      {formStatus.type === 'sending' ? 'TRANSMITTING...' : 'SEND →'}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      )}

      {/* PROJECT CASE STUDY OVERLAY */}
      <AnimatePresence>
        {activeProjectCase && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(9, 9, 11, 0.98)',
              zIndex: 1100,
              overflowY: 'auto',
              padding: '100px 32px 48px',
              backdropFilter: 'blur(12px)'
            }}
          >
            <button
              onClick={() => setActiveProjectCase(null)}
              onMouseEnter={() => setCustomCursorText('CLOSE')}
              onMouseLeave={() => setCustomCursorText('')}
              style={{
                position: 'absolute',
                top: 32,
                left: 32,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1.5px solid #bef264',
                color: '#bef264',
                padding: '10px 24px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 800,
                cursor: 'none'
              }}
            >
              ← CLOSE
            </button>

            <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#bef264' }}>PROJECT {activeProjectCase.projectNumber}</span>
              <h3 style={{ fontSize: '3rem', fontWeight: 900, color: '#ffffff', margin: '8px 0 24px', letterSpacing: '-1px' }}>{activeProjectCase.name}</h3>

              <div style={{ height: '320px', borderRadius: '8px', overflow: 'hidden', marginBottom: 40 }}>
                <img src={activeProjectCase.previewImage} alt={activeProjectCase.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 30, marginBottom: 40 }}>
                <div>
                  <h4 style={{ fontSize: '0.75rem', fontWeight: 800, color: '#bef264', letterSpacing: '1px' }}>THE IDEA</h4>
                  <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.6 }}>{activeProjectCase.idea}</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.75rem', fontWeight: 800, color: '#bef264', letterSpacing: '1px' }}>THE BUILD</h4>
                  <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.6 }}>{activeProjectCase.build}</p>
                </div>
              </div>

              <div style={{ marginBottom: 40 }}>
                <h4 style={{ fontSize: '0.75rem', fontWeight: 800, color: '#bef264', letterSpacing: '1px', marginBottom: 12 }}>TECHNOLOGY NODES</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {activeProjectCase.technologies.map((t, idx) => (
                    <span key={idx} style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ffffff', backgroundColor: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)', padding: '6px 14px', borderRadius: '4px' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a href={activeProjectCase.liveUrl} target="_blank" rel="noreferrer" style={{ backgroundColor: '#bef264', color: '#09090b', padding: '16px 40px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 800, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Launch Live Sandbox <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SKILL DETAIL OVERLAY */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(9,9,11,0.85)',
              backdropFilter: 'blur(8px)',
              zIndex: 1200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: '#0c0a0f',
                padding: '40px',
                borderRadius: '8px',
                border: '2.5px solid #bef264',
                maxWidth: '450px',
                width: '100%',
                boxShadow: '0 25px 50px -12px rgba(190, 242, 100, 0.2)',
                position: 'relative'
              }}
            >
              <button onClick={() => setSelectedSkill(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}><X size={24} /></button>
              
              <Zap size={36} style={{ color: '#bef264', marginBottom: 20 }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ffffff', marginBottom: 4 }}>{selectedSkill.name}</h3>
              <span style={{ fontSize: '0.75rem', color: '#8b5cf6', fontWeight: 800, display: 'block', marginBottom: 20 }}>CATEGORY // {selectedSkill.category}</span>

              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
                {selectedSkill.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CREATIVE EXPAND MODAL */}
      <AnimatePresence>
        {selectedCreative && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCreative(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(9,9,11,0.92)',
              backdropFilter: 'blur(8px)',
              zIndex: 1200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '700px',
                width: '100%',
                position: 'relative'
              }}
            >
              <button onClick={() => setSelectedCreative(null)} style={{ position: 'absolute', top: -40, right: 0, background: 'none', border: 'none', cursor: 'pointer', color: '#ffffff', display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', fontWeight: 700 }}><X size={20} /> CLOSE</button>
              
              <div style={{ height: '420px', borderRadius: '8px', overflow: 'hidden', border: '2px solid #bef264', marginBottom: 20 }}>
                <img src={selectedCreative.imageUrl} alt={selectedCreative.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', margin: '0 0 4px' }}>{selectedCreative.title}</h3>
                <span style={{ fontSize: '0.85rem', color: '#bef264' }}>{selectedCreative.type}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

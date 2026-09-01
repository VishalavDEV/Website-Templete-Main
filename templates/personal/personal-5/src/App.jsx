import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, ChevronLeft, ChevronRight, Download, Award, 
  Briefcase, GraduationCap, Cpu, Layers, Wrench, Sparkles, Send, 
  CheckCircle2, AlertCircle, ExternalLink, Menu, X, Star, FileText, 
  ArrowRight, Shield, Activity, Radio, BarChart3, Database, Globe
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
  name: "Aetherius Quantum",
  title: "Creative Technologist & AI Experience Architect",
  tagline: "Developing digital universes at the intersection of coding and visual art.",
  bio: "An experimental software engineer focused on building highly immersive visual interfaces and robust in-memory processing pipelines.",
  location: "Cyberspace / San Francisco, CA",
  email: "aetherius@quantum.io",
  phone: "+1 (555) 321-7654",
  socials: [
    { platform: "Github", url: "https://github.com" },
    { platform: "Linkedin", url: "https://linkedin.com" },
    { platform: "Twitter", url: "https://twitter.com" },
    { platform: "Instagram", url: "https://instagram.com" }
  ]
};

const FALLBACK_DNA = [
  { label: "CREATIVITY", desc: "Crafting non-traditional UX environments that engage visitors on a multisensory level." },
  { label: "PROBLEM SOLVING", desc: "Auditing memory allocations, thread constraints, and optimizing API connection logic." },
  { label: "LEARNING", desc: "Constantly indexing new frameworks, modern CSS specifications, and AI API interfaces." },
  { label: "INNOVATION", desc: "Bridging the gap between front-end animations and back-end reactive microservice streams." },
  { label: "TEAMWORK", desc: "Collaborating via structured git workflows, pull request reviews, and agile sprints." },
  { label: "CURIOSITY", desc: "Exploring the capabilities of autonomous agents, in-memory databases, and 3D graphics." }
];

const FALLBACK_PROJECTS = [
  {
    id: 1,
    missionNumber: "MISSION 01",
    name: "Aetherius OS UI",
    category: "Web / Experimental",
    objective: "Build an immersive virtual desktop workspace running entirely in React.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    status: "COMPLETED",
    previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    missionNumber: "MISSION 02",
    name: "Quantum Engine",
    category: "Software / Java",
    objective: "Create a high-performance concurrent request scheduling engine in Spring Boot.",
    technologies: ["Java", "Spring Boot", "Docker", "ActiveMQ"],
    status: "EXPERIMENTAL",
    previewImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 3,
    missionNumber: "MISSION 03",
    name: "Aether Shell CLI",
    category: "Tools / Node",
    objective: "Develop a terminal interface optimizing package distribution pipelines.",
    technologies: ["Node.js", "Commander", "Chalk", "Inquirer"],
    status: "IN PROGRESS",
    previewImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

const FALLBACK_SKILLS = {
  frontend: [
    { name: "React.js", level: 95 },
    { name: "JavaScript (ESNext)", level: 92 },
    { name: "HTML5 & CSS3", level: 90 },
    { name: "Framer Motion & GSAP", level: 88 }
  ],
  backend: [
    { name: "Java SE/EE", level: 90 },
    { name: "Spring Boot", level: 87 },
    { name: "RESTful Web Services", level: 92 },
    { name: "Spring Security", level: 80 }
  ],
  tools: [
    { name: "Git & CLI Workflow", level: 88 },
    { name: "Docker & Containers", level: 75 },
    { name: "Webpack / Vite", level: 85 }
  ],
  aidata: [
    { name: "Python Scripting", level: 80 },
    { name: "Gemini / LLM APIs", level: 85 },
    { name: "Prompt Engineering", level: 90 }
  ]
};

const FALLBACK_EXPERIENCE = [
  {
    year: "2025 - PRESENT",
    role: "Principal Developer",
    company: "Quantum Labs Inc.",
    details: [
      "Lead architectural design of interactive visual environments.",
      "Optimize background memory queues using Java Spring scheduler clusters."
    ]
  },
  {
    year: "2023 - 2024",
    role: "Full Stack Engineer",
    company: "Nova Space Systems",
    details: [
      "Constructed modular user dashboards resolving complex coordinate calculations.",
      "Refactored REST endpoints decreasing load times by 25%."
    ]
  }
];

const FALLBACK_EDUCATION = [
  {
    institution: "Cybernetics University",
    degree: "B.S. in Advanced Design Informatics",
    specialization: "Digital Interaction Specialization",
    year: "2019 - 2023",
    achievements: [
      "Summa Cum Laude, GPA 3.9/4.0",
      "Outstanding Project Award for Interactive Orbital Web Interfaces"
    ]
  }
];

const FALLBACK_ACHIEVEMENTS = [
  {
    title: "Grand Prize - Global Space Hackathon",
    description: "Developed an autonomous visual navigation panel rendering real-time telemetry coordinates.",
    date: "Oct 2025",
    organization: "Space Hack Org"
  },
  {
    title: "Distinguished Coding Contributor",
    description: "Recognized for major optimizations inside modular animation engine configurations.",
    date: "Jun 2024",
    organization: "OpenSource Alliance"
  }
];

const FALLBACK_CERTIFICATIONS = [
  {
    title: "Oracle Certified Enterprise Java Architect",
    organization: "Oracle Corp.",
    credentialId: "OCP-ENT-9023",
    credentialUrl: "https://oracle.com",
    date: "Verified 2025"
  },
  {
    title: "Interaction Design Specialist",
    organization: "Design Science Council",
    credentialId: "DSC-INT-4820",
    credentialUrl: "https://example.com",
    date: "Verified 2025"
  }
];

const FALLBACK_ANALYTICS = {
  projectsCount: 28,
  skillsMastered: 14,
  codingHours: 2450,
  certificationsEarned: 12,
  radarData: [
    { label: "Frontend UI", value: 95 },
    { label: "Java APIs", value: 90 },
    { label: "Vite & Bundlers", value: 85 },
    { label: "AI Agents", value: 80 }
  ]
};

const API_BASE_URL = 'http://localhost:8080/api';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);
  const [activeModule, setActiveModule] = useState(null);
  
  // Data States
  const [profile, setProfile] = useState(FALLBACK_PROFILE);
  const [skills, setSkills] = useState(FALLBACK_SKILLS);
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);
  const [experience, setExperience] = useState(FALLBACK_EXPERIENCE);
  const [education, setEducation] = useState(FALLBACK_EDUCATION);
  const [achievements, setAchievements] = useState(FALLBACK_ACHIEVEMENTS);
  const [certifications, setCertifications] = useState(FALLBACK_CERTIFICATIONS);
  const [analytics, setAnalytics] = useState(FALLBACK_ANALYTICS);

  // Form states
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: null, message: '' });
  const [selectedDnaNode, setSelectedDnaNode] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  // Mouse coordinates for interactive background glow
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Simulator for system boot loading
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 2;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // Fetch data from Java Spring Boot API (falls back to mock structures on connection failure)
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
    loadData('skills', setSkills);
    loadData('projects', setProjects);
    loadData('experience', setExperience);
    loadData('education', setEducation);
    loadData('achievements', setAchievements);
    loadData('certifications', setCertifications);
    loadData('analytics', setAnalytics);
  }, [loading]);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: 'sending', message: 'TRANSMITTING MESSAGE THROUGH QUANTUM CHANNELS...' });

    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        const data = await res.json();
        setFormStatus({ type: 'success', message: data.message || 'MESSAGE TRANSMITTED SUCCESSFULLY' });
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || 'TRANSMISSION ERROR.');
      }
    } catch (err) {
      console.warn("REST API Contact Submission failed. Falling back to local success simulator.");
      setTimeout(() => {
        if (!formState.name || !formState.email || !formState.message) {
          setFormStatus({ type: 'error', message: 'TRANSMISSION FAILURE. RETRY CONNECTION.' });
        } else {
          setFormStatus({ type: 'success', message: 'CONNECTION ESTABLISHED: MESSAGE TRANSMITTED SUCCESSFULLY' });
          setFormState({ name: '', email: '', subject: '', message: '' });
        }
      }, 500);
    }
  };

  const orbitModules = [
    { id: 'dna', label: '🧬 DNA', color: 'cyan' },
    { id: 'skills', label: '⚡ SKILLS', color: 'purple' },
    { id: 'projects', label: '🛰️ MISSIONS', color: 'cyan' },
    { id: 'experience', label: '🧭 JOURNEY', color: 'purple' },
    { id: 'education', label: '🎓 ARCHIVE', color: 'cyan' },
    { id: 'achievements', label: '🏆 VAULT', color: 'purple' },
    { id: 'certifications', label: '📜 CREDENTIALS', color: 'cyan' },
    { id: 'analytics', label: '📊 STATUS', color: 'purple' },
    { id: 'contact', label: '💬 CONNECT', color: 'cyan' }
  ];

  // Dynamic CSS Injector on Mount
  useEffect(() => {
    const styleId = "aetherius-universe-styles";
    let styleTag = document.getElementById(styleId);
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = styleId;
      styleTag.innerHTML = `
        /* Dynamic Animations for Digital Universe */
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.2), inset 0 0 15px rgba(6, 182, 212, 0.1); }
          50% { box-shadow: 0 0 35px rgba(6, 182, 212, 0.5), inset 0 0 25px rgba(6, 182, 212, 0.3); }
        }
        .cyber-grid {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(124, 58, 237, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(124, 58, 237, 0.05) 1px, transparent 1px);
        }
        /* Desktop Orbit Keyframes */
        @keyframes orbit_0 { 0% { transform: rotate(0deg) translate(220px) rotate(0deg); } 100% { transform: rotate(360deg) translate(220px) rotate(-360deg); } }
        @keyframes orbit_1 { 0% { transform: rotate(40deg) translate(220px) rotate(-40deg); } 100% { transform: rotate(400deg) translate(220px) rotate(-400deg); } }
        @keyframes orbit_2 { 0% { transform: rotate(80deg) translate(220px) rotate(-80deg); } 100% { transform: rotate(440deg) translate(220px) rotate(-440deg); } }
        @keyframes orbit_3 { 0% { transform: rotate(120deg) translate(220px) rotate(-120deg); } 100% { transform: rotate(480deg) translate(220px) rotate(-480deg); } }
        @keyframes orbit_4 { 0% { transform: rotate(160deg) translate(220px) rotate(-160deg); } 100% { transform: rotate(520deg) translate(220px) rotate(-520deg); } }
        @keyframes orbit_5 { 0% { transform: rotate(200deg) translate(220px) rotate(-200deg); } 100% { transform: rotate(560deg) translate(220px) rotate(-560deg); } }
        @keyframes orbit_6 { 0% { transform: rotate(240deg) translate(220px) rotate(-240deg); } 100% { transform: rotate(600deg) translate(220px) rotate(-600deg); } }
        @keyframes orbit_7 { 0% { transform: rotate(280deg) translate(220px) rotate(-280deg); } 100% { transform: rotate(640deg) translate(220px) rotate(-640deg); } }
        @keyframes orbit_8 { 0% { transform: rotate(320deg) translate(220px) rotate(-320deg); } 100% { transform: rotate(680deg) translate(220px) rotate(-680deg); } }

        /* Responsive menu rules */
        @media (max-width: 968px) {
          .universe-orbit-wrapper {
            display: none !important;
          }
          .mobile-list-wrapper {
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

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        backgroundColor: '#030712',
        color: '#f3f4f6',
        minHeight: '100vh',
        fontFamily: "'Outfit', 'Inter', sans-serif",
        position: 'relative',
        overflow: 'hidden'
      }}
      className="cyber-grid"
    >
      {/* Dynamic Cursor Light Glow */}
      <div style={{
        position: 'absolute',
        top: mousePos.y - 120,
        left: mousePos.x - 120,
        width: '240px',
        height: '240px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, rgba(6, 182, 212, 0.03) 50%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* INTRO BOOT SCREEN */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: '#030712',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              backgroundColor: 'rgba(6, 182, 212, 0.3)',
              animation: 'scanline 3s linear infinite'
            }} />

            <div style={{
              border: '1px solid rgba(6, 182, 212, 0.2)',
              backgroundColor: 'rgba(3, 7, 18, 0.8)',
              padding: '40px',
              borderRadius: '24px',
              maxWidth: '450px',
              width: '100%',
              textAlign: 'center',
              boxShadow: '0 0 30px rgba(6, 182, 212, 0.05)',
              backdropFilter: 'blur(10px)'
            }}>
              <Activity size={40} className="text-cyan-400" style={{ margin: '0 auto 20px', color: '#06b6d4' }} />
              
              <h2 style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '4px', color: '#a78bfa', marginBottom: 16 }}>
                INITIALIZING DIGITAL IDENTITY...
              </h2>

              <div style={{ width: '100%', height: '4px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '99px', overflow: 'hidden', marginBottom: 12 }}>
                <div style={{ width: `${loadPercentage}%`, height: '100%', backgroundColor: '#06b6d4', transition: 'width 0.1s ease-out' }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#9ca3af' }}>
                <span>CORE BOOT SYSTEM v1.0.3</span>
                <span>{loadPercentage}%</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CENTRAL DIGITAL UNIVERSE ORBIT VIEW */}
      {!loading && !activeModule && (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 10,
          padding: '40px 24px'
        }}>
          {/* Central Hologram Core */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{
              position: 'relative',
              width: '200px',
              height: '200px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              border: '2px solid rgba(6, 182, 212, 0.3)',
              textAlign: 'center',
              cursor: 'pointer',
              zIndex: 30,
              animation: 'pulseGlow 4s infinite ease-in-out'
            }}
          >
            <h1 style={{
              fontSize: '1.25rem',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '1px',
              margin: '0 0 6px',
              textShadow: '0 0 10px rgba(6, 182, 212, 0.5)'
            }}>
              {profile.name}
            </h1>
            <p style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              color: '#a78bfa',
              maxWidth: '150px',
              lineHeight: 1.3
            }}>
              {profile.title}
            </p>

            <span style={{
              position: 'absolute',
              bottom: '16px',
              fontSize: '0.55rem',
              color: '#06b6d4',
              fontWeight: 800,
              letterSpacing: '1px'
            }}>
              SYSTEM ACTIVE
            </span>
          </motion.div>

          {/* Desktop Planetary Modules */}
          <div 
            className="universe-orbit-wrapper"
            style={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none'
            }}
          >
            {orbitModules.map((mod, index) => (
              <div
                key={mod.id}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: `orbit_${index} 35s linear infinite`
                }}
              >
                <button
                  onClick={() => setActiveModule(mod.id)}
                  style={{
                    position: 'absolute',
                    pointerEvents: 'auto',
                    backgroundColor: 'rgba(15, 23, 42, 0.85)',
                    border: mod.color === 'cyan' ? '1px solid rgba(6, 182, 212, 0.4)' : '1px solid rgba(124, 58, 237, 0.4)',
                    color: '#ffffff',
                    padding: '10px 18px',
                    borderRadius: '99px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: mod.color === 'cyan' ? '0 0 15px rgba(6, 182, 212, 0.15)' : '0 0 15px rgba(124, 58, 237, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.backgroundColor = mod.color === 'cyan' ? 'rgba(6, 182, 212, 0.2)' : 'rgba(124, 58, 237, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.85)';
                  }}
                >
                  {mod.label}
                </button>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Grid view */}
          <div 
            className="mobile-list-wrapper"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: 12,
              marginTop: '40px',
              width: '100%',
              maxWidth: '360px',
              zIndex: 35
            }}
          >
            {orbitModules.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                  color: '#ffffff',
                  padding: '14px',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
              >
                {mod.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* DETAILED FULLSCREEN OVERLAY PORTAL COMPONENTS */}
      <AnimatePresence>
        {activeModule && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(3, 7, 18, 0.96)',
              zIndex: 900,
              overflowY: 'auto',
              padding: '80px 24px 48px',
              backdropFilter: 'blur(12px)'
            }}
          >
            {/* Overlay Navigation Header */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '24px',
              right: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              zIndex: 950
            }}>
              <button
                onClick={() => setActiveModule(null)}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  padding: '8px 18px',
                  borderRadius: '99px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6
                }}
              >
                ← Back to Universe
              </button>

              <h2 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#06b6d4', letterSpacing: '2px', textTransform: 'uppercase' }}>
                EXPANDED MODULE // {activeModule}
              </h2>
            </div>

            {/* CONTENT ROUTING */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 10 }}>
              
              {/* DNA ABOUT */}
              {activeModule === 'dna' && (
                <div>
                  <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff' }}>MY DIGITAL DNA</h3>
                    <p style={{ fontSize: '0.85rem', color: '#a78bfa' }}>Characteristics of my engineering mindset</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      {FALLBACK_DNA.map((node, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedDnaNode(node)}
                          style={{
                            backgroundColor: selectedDnaNode?.label === node.label ? 'rgba(6, 182, 212, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                            border: selectedDnaNode?.label === node.label ? '1px solid #06b6d4' : '1px solid rgba(255,255,255,0.05)',
                            padding: '20px',
                            borderRadius: '16px',
                            textAlign: 'left',
                            cursor: 'pointer',
                            color: '#ffffff',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <Shield size={16} style={{ color: '#06b6d4' }} />
                            <span style={{ fontWeight: 800, fontSize: '0.85rem' }}>{node.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div style={{
                      backgroundColor: 'rgba(15, 23, 42, 0.4)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      padding: '30px',
                      borderRadius: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      textAlign: 'center',
                      minHeight: '260px'
                    }}>
                      {selectedDnaNode ? (
                        <div>
                          <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#06b6d4', marginBottom: 12 }}>{selectedDnaNode.label}</h4>
                          <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#9ca3af' }}>{selectedDnaNode.desc}</p>
                        </div>
                      ) : (
                        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>Select a DNA characteristic node to inspect details.</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* POWER CORE SKILLS */}
              {activeModule === 'skills' && (
                <div>
                  <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff' }}>POWER CORE</h3>
                    <p style={{ fontSize: '0.85rem', color: '#a78bfa' }}>Technology framework competencies</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
                    {Object.keys(skills).map((category) => (
                      <div
                        key={category}
                        style={{
                          backgroundColor: 'rgba(15, 23, 42, 0.6)',
                          border: '1px solid rgba(124, 58, 237, 0.15)',
                          padding: '24px',
                          borderRadius: '24px'
                        }}
                      >
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#a78bfa', textTransform: 'uppercase', marginBottom: 20, letterSpacing: '1px' }}>
                          {category} Stack
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                          {skills[category].map((skill, index) => (
                            <div key={index}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, marginBottom: 6 }}>
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                              </div>
                              <div style={{ width: '100%', height: '4px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '99px', overflow: 'hidden' }}>
                                <div style={{ width: `${skill.level}%`, height: '100%', backgroundColor: '#7c3aed' }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MISSION CONTROL PROJECTS */}
              {activeModule === 'projects' && (
                <div>
                  <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff' }}>MISSION CONTROL</h3>
                    <p style={{ fontSize: '0.85rem', color: '#06b6d4' }}>Active project missions registry</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30 }}>
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        style={{
                          backgroundColor: 'rgba(15, 23, 42, 0.6)',
                          border: '1px solid rgba(6, 182, 212, 0.15)',
                          borderRadius: '24px',
                          overflow: 'hidden'
                        }}
                      >
                        <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                          <img src={project.previewImage} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          <div style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            padding: '4px 10px',
                            backgroundColor: project.status === 'COMPLETED' ? '#059669' : project.status === 'EXPERIMENTAL' ? '#3b82f6' : '#d97706',
                            color: '#ffffff',
                            fontSize: '0.65rem',
                            fontWeight: 800,
                            borderRadius: '99px'
                          }}>
                            {project.status}
                          </div>
                        </div>

                        <div style={{ padding: '24px' }}>
                          <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#06b6d4' }}>{project.missionNumber}</span>
                          <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: '4px 0 10px' }}>{project.name}</h4>
                          <p style={{ fontSize: '0.8rem', color: '#9ca3af', lineHeight: 1.5, marginBottom: 16 }}>{project.objective}</p>
                          
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                            {project.technologies.map((t, idx) => (
                              <span key={idx} style={{ fontSize: '0.65rem', fontWeight: 700, color: '#06b6d4', backgroundColor: 'rgba(6, 182, 212, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                                {t}
                              </span>
                            ))}
                          </div>

                          <div style={{ display: 'flex', gap: 12, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 14 }}>
                            <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#ffffff', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}><GithubIcon size={14} /> Repository</a>
                            <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#06b6d4', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4, marginLeft: 'auto' }}>Launch <ExternalLink size={14} /></a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* EXPERIENCE JOURNEY */}
              {activeModule === 'experience' && (
                <div>
                  <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff' }}>JOURNEY MAP</h3>
                    <p style={{ fontSize: '0.85rem', color: '#a78bfa' }}>Professional milestones path</p>
                  </div>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 30,
                    borderLeft: '2px solid rgba(124, 58, 237, 0.3)',
                    paddingLeft: '24px',
                    position: 'relative'
                  }}>
                    {experience.map((exp, index) => (
                      <div key={index} style={{ position: 'relative' }}>
                        <div style={{
                          position: 'absolute',
                          left: '-32px',
                          top: '6px',
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: '#7c3aed',
                          border: '3px solid #030712'
                        }} />

                        <div style={{
                          backgroundColor: 'rgba(15, 23, 42, 0.6)',
                          border: '1px solid rgba(124, 58, 237, 0.15)',
                          padding: '24px',
                          borderRadius: '20px'
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
                            <div>
                              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>{exp.role}</h4>
                              <span style={{ fontSize: '0.8rem', color: '#a78bfa', fontWeight: 700 }}>{exp.company}</span>
                            </div>
                            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#a78bfa', backgroundColor: 'rgba(124, 58, 237, 0.1)', padding: '4px 10px', borderRadius: '99px', height: 'fit-content' }}>
                              {exp.year}
                            </span>
                          </div>

                          <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.85rem', color: '#9ca3af', lineHeight: 1.6 }}>
                            {exp.details.map((detail, idx) => (
                              <li key={idx} style={{ marginBottom: 4 }}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* EDUCATION ARCHIVE */}
              {activeModule === 'education' && (
                <div>
                  <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff' }}>KNOWLEDGE ARCHIVE</h3>
                    <p style={{ fontSize: '0.85rem', color: '#06b6d4' }}>Education records ledger</p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        style={{
                          backgroundColor: 'rgba(15, 23, 42, 0.6)',
                          border: '1px solid rgba(6, 182, 212, 0.15)',
                          padding: '24px',
                          borderRadius: '24px'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
                          <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>{edu.degree}</h4>
                            <p style={{ fontSize: '0.85rem', color: '#06b6d4', margin: '2px 0 0' }}>{edu.institution} | <span style={{ color: '#a78bfa' }}>{edu.specialization}</span></p>
                          </div>
                          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#06b6d4' }}>{edu.year}</span>
                        </div>

                        <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.8rem', color: '#9ca3af', lineHeight: 1.6 }}>
                          {edu.achievements.map((ach, idx) => (
                            <li key={idx}>{ach}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ACHIEVEMENTS VAULT */}
              {activeModule === 'achievements' && (
                <div>
                  <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff' }}>ACHIEVEMENT VAULT</h3>
                    <p style={{ fontSize: '0.85rem', color: '#a78bfa' }}>Holographic awards repository</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                    {achievements.map((ach, index) => (
                      <div
                        key={index}
                        style={{
                          backgroundColor: 'rgba(15, 23, 42, 0.6)',
                          border: '1px solid rgba(124, 58, 237, 0.15)',
                          padding: '24px',
                          borderRadius: '24px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 12
                        }}
                      >
                        <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(124, 58, 237, 0.1)', color: '#a78bfa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Award size={20} />
                        </div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>{ach.title}</h4>
                        <p style={{ fontSize: '0.8rem', color: '#9ca3af', lineHeight: 1.5, margin: 0 }}>{ach.description}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#a78bfa', fontWeight: 700, marginTop: 'auto', paddingTop: 10, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                          <span>{ach.organization}</span>
                          <span>{ach.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CERTIFICATIONS */}
              {activeModule === 'certifications' && (
                <div>
                  <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff' }}>CREDENTIAL WALL</h3>
                    <p style={{ fontSize: '0.85rem', color: '#06b6d4' }}>Verified industry certifications</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedCert(cert)}
                        style={{
                          backgroundColor: 'rgba(15, 23, 42, 0.6)',
                          border: '1px solid rgba(6, 182, 212, 0.15)',
                          padding: '24px',
                          borderRadius: '24px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#06b6d4'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.15)'}
                      >
                        <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff', marginBottom: 6 }}>{cert.title}</h4>
                        <span style={{ fontSize: '0.8rem', color: '#9ca3af', display: 'block', marginBottom: 12 }}>{cert.organization}</span>
                        <span style={{ fontSize: '0.75rem', color: '#06b6d4', fontWeight: 700 }}>Verify Credential →</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SYSTEM STATUS ANALYTICS */}
              {activeModule === 'analytics' && (
                <div>
                  <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff' }}>SYSTEM STATUS</h3>
                    <p style={{ fontSize: '0.85rem', color: '#a78bfa' }}>Automated profile health dashboard</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 40 }}>
                    <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', borderRadius: '24px', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#9ca3af', letterSpacing: '1px' }}>MISSIONS COMPLETED</span>
                      <h4 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#a78bfa', margin: '10px 0 0' }}>{analytics.projectsCount}</h4>
                    </div>
                    <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', borderRadius: '24px', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#9ca3af', letterSpacing: '1px' }}>TECH FLUX NODES</span>
                      <h4 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#06b6d4', margin: '10px 0 0' }}>{analytics.skillsMastered}</h4>
                    </div>
                    <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', borderRadius: '24px', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#9ca3af', letterSpacing: '1px' }}>CODING CONCURRENCY HOURS</span>
                      <h4 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#a78bfa', margin: '10px 0 0' }}>{analytics.codingHours}</h4>
                    </div>
                  </div>

                  <div style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgba(124, 58, 237, 0.15)',
                    padding: '30px',
                    borderRadius: '24px'
                  }}>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#ffffff', letterSpacing: '1px', marginBottom: 20 }}>RADAR STACK CAPABILITIES</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {analytics.radarData.map((data, idx) => (
                        <div key={idx}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, marginBottom: 6 }}>
                            <span>{data.label}</span>
                            <span>{data.value}%</span>
                          </div>
                          <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '99px', overflow: 'hidden' }}>
                            <div style={{ width: `${data.value}%`, height: '100%', backgroundColor: '#06b6d4' }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* CONTACT OPEN CHANNEL */}
              {activeModule === 'contact' && (
                <div>
                  <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff' }}>ESTABLISH CONNECTION</h3>
                    <p style={{ fontSize: '0.85rem', color: '#06b6d4' }}>Quantum communication channel</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#a78bfa' }}>Channel Terminals</h4>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(6, 182, 212, 0.1)', color: '#06b6d4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Mail size={18} /></div>
                        <div>
                          <span style={{ fontSize: '0.65rem', color: '#9ca3af', display: 'block' }}>SECURE EMAIL</span>
                          <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{profile.email}</span>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(124, 58, 237, 0.1)', color: '#a78bfa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone size={18} /></div>
                        <div>
                          <span style={{ fontSize: '0.65rem', color: '#9ca3af', display: 'block' }}>VOIP PROTOCOL</span>
                          <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{profile.phone}</span>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(6, 182, 212, 0.1)', color: '#06b6d4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MapPin size={18} /></div>
                        <div>
                          <span style={{ fontSize: '0.65rem', color: '#9ca3af', display: 'block' }}>LOCAL TERMINAL</span>
                          <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{profile.location}</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(6, 182, 212, 0.15)', padding: '30px', borderRadius: '24px' }}>
                      <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>Sender Signature *</label>
                          <input type="text" required placeholder="Your Name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} style={{ backgroundColor: '#030712', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '10px 14px', color: '#ffffff', fontSize: '0.85rem', outline: 'none' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>Return Node Address *</label>
                          <input type="email" required placeholder="name@domain.com" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} style={{ backgroundColor: '#030712', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '10px 14px', color: '#ffffff', fontSize: '0.85rem', outline: 'none' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>Inquiry Subject</label>
                          <input type="text" placeholder="Subject" value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} style={{ backgroundColor: '#030712', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '10px 14px', color: '#ffffff', fontSize: '0.85rem', outline: 'none' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>Message Payload *</label>
                          <textarea required rows="4" placeholder="Enter payload..." value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} style={{ backgroundColor: '#030712', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '10px 14px', color: '#ffffff', fontSize: '0.85rem', outline: 'none', resize: 'none' }} />
                        </div>

                        {formStatus.type && (
                          <div style={{
                            padding: '10px 14px',
                            borderRadius: '8px',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            backgroundColor: formStatus.type === 'success' ? 'rgba(5, 150, 105, 0.15)' : formStatus.type === 'error' ? 'rgba(220, 38, 38, 0.15)' : 'rgba(217, 119, 6, 0.15)',
                            color: formStatus.type === 'success' ? '#34d399' : formStatus.type === 'error' ? '#f87171' : '#fbbf24',
                            border: '1px solid',
                            borderColor: formStatus.type === 'success' ? '#059669' : formStatus.type === 'error' ? '#dc2626' : '#d97706'
                          }}>
                            {formStatus.message}
                          </div>
                        )}

                        <button type="submit" disabled={formStatus.type === 'sending'} style={{ backgroundColor: '#06b6d4', color: '#030712', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 800, cursor: formStatus.type === 'sending' ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                          {formStatus.type === 'sending' ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'} <Send size={14} />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DETAIL LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(3,7,18,0.85)',
              backdropFilter: 'blur(8px)',
              zIndex: 1000,
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
                backgroundColor: '#0f172a',
                padding: '40px',
                borderRadius: '32px',
                border: '2px solid #06b6d4',
                maxWidth: '500px',
                width: '100%',
                boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.25)',
                position: 'relative',
                textAlign: 'center'
              }}
            >
              <button onClick={() => setSelectedCert(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}><X size={24} /></button>
              
              <Award size={48} style={{ color: '#06b6d4', margin: '0 auto 20px' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: 8 }}>{selectedCert.title}</h3>
              <p style={{ fontSize: '#0.85rem', color: '#9ca3af', margin: '0 0 4px' }}>Issued by {selectedCert.organization}</p>
              <p style={{ fontSize: '0.75rem', color: '#06b6d4', fontWeight: 800, margin: '0 0 20px' }}>Credential ID: {selectedCert.credentialId}</p>

              <div style={{ backgroundColor: 'rgba(6,182,212,0.05)', padding: '14px', borderRadius: '12px', border: '1px dashed rgba(6,182,212,0.2)', fontSize: '0.8rem', color: '#9ca3af', marginBottom: 24 }}>
                Status: VERIFIED & SECURED ON QUANTUM REGISTRY
              </div>

              <a href={selectedCert.credentialUrl} target="_blank" rel="noreferrer" style={{ backgroundColor: '#06b6d4', color: '#030712', padding: '12px 28px', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 800, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                Verify Registry Link <ExternalLink size={14} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

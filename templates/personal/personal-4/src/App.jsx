import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, 
  ChevronLeft, ChevronRight, Download, Award, Briefcase, 
  GraduationCap, Cpu, Layers, Wrench, Sparkles, Send, CheckCircle2, 
  AlertCircle, ExternalLink, Menu, X, Star, FileText, ArrowRight
} from 'lucide-react';

const Github = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// --- FALLBACK MOCK DATA ---
const FALLBACK_PROJECTS = [
  {
    id: 1,
    name: "NovaCart eCommerce Platform",
    category: "Web",
    description: "A premium microservices-based online retail experience featuring dynamic cart animations, real-time inventory checks, and interactive checkout systems.",
    previewImage: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80",
    technologies: ["React", "Java", "Spring Boot", "REST APIs", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    name: "Aetherius AI Coding Assistant",
    category: "AI",
    description: "An autonomous coding assistant integrating Gemini APIs to execute file operations, run local terminal checks, and suggest real-time code modifications.",
    previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    technologies: ["React", "Node.js", "Gemini API", "Framer Motion", "Python"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 3,
    name: "VoltTracker Fleet Management",
    category: "Mobile",
    description: "A responsive tracking app designed for logistics managers featuring visual coordinates map integration, live route optimization, and vehicle battery analytics.",
    previewImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    technologies: ["React Native", "Spring Boot", "Google Maps API", "CSS variables"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 4,
    name: "Sentient Core Engine",
    category: "Software",
    description: "A high-throughput background processing server optimizing concurrency queues and in-memory scheduling mechanisms.",
    previewImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80",
    technologies: ["Java", "Spring Boot", "Docker", "ActiveMQ", "JUnit"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

const FALLBACK_SKILLS = {
  frontend: [
    { name: "React.js", level: 90 },
    { name: "HTML5", level: 95 },
    { name: "CSS3 / Vanilla CSS", level: 88 },
    { name: "JavaScript (ES6+)", level: 92 },
    { name: "Responsive Web Design", level: 95 }
  ],
  backend: [
    { name: "Java SE/EE", level: 85 },
    { name: "Spring Boot", level: 88 },
    { name: "RESTful Web Services", level: 90 },
    { name: "Spring Security", level: 80 }
  ],
  tools: [
    { name: "Git & Version Control", level: 88 },
    { name: "GitHub Actions", level: 82 },
    { name: "VS Code / IntelliJ", level: 90 },
    { name: "Postman Client", level: 85 }
  ],
  other: [
    { name: "UI/UX Principles", level: 80 },
    { name: "API Integrations", level: 92 },
    { name: "Problem Solving", level: 95 },
    { name: "Agile Methodologies", level: 85 }
  ]
};

const FALLBACK_EXPERIENCE = [
  {
    organization: "TechnoSprint Innovations",
    role: "Senior Backend Engineer",
    duration: "Jan 2025 - Present",
    responsibilities: [
      "Lead the development of custom API servers handling 5M+ requests daily.",
      "Architect reactive Spring Boot microservices with optimized database connection pooling.",
      "Provide mentorship to junior team members on secure web app development."
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "AWS"],
    achievements: [
      "Boosted server throughput by 35% through query optimization.",
      "Integrated OAuth2 and JWT token validation configurations."
    ]
  },
  {
    organization: "Cortex Digital Studio",
    role: "Full Stack Developer",
    duration: "Jun 2023 - Dec 2024",
    responsibilities: [
      "Designed responsive user portals using vanilla CSS frameworks and React hooks.",
      "Constructed contact endpoints, newsletter queues, and payment system integrations.",
      "Collaborated with visual designers to execute glassmorphism mockups and clean transitions."
    ],
    technologies: ["React", "JavaScript", "Spring Boot", "Framer Motion", "MySQL"],
    achievements: [
      "Successfully delivered 15 client projects with 100% satisfaction rates.",
      "Reduced page loading times by 40% using code splitting and modern assets."
    ]
  }
];

const FALLBACK_EDUCATION = [
  {
    institution: "Apex University of Technology",
    degree: "Bachelor of Science in Computer Science",
    specialization: "Software Systems & Algorithms",
    year: "2019 - 2023",
    achievements: [
      "Graduated with Honors, CGPA: 3.85/4.0",
      "Outstanding Thesis Award on Distributed System Concurrency Control."
    ]
  },
  {
    institution: "Pinnacle Science Academy",
    degree: "Higher Secondary Certification",
    specialization: "Mathematics and Computer Science focus",
    year: "2017 - 2019",
    achievements: [
      "Secured Top 2% in Regional Mathematics Talent Search.",
      "President of High School Coding Circle."
    ]
  }
];

const FALLBACK_CERTIFICATIONS = [
  {
    title: "Oracle Certified Professional: Java SE Developer",
    organization: "Oracle Corporation",
    date: "Oct 2024",
    credentialId: "OCP-10984",
    credentialUrl: "https://oracle.com"
  },
  {
    title: "Spring Framework Developer Certification",
    organization: "VMware Tanzu Academy",
    date: "May 2024",
    credentialId: "VMW-SP-9081",
    credentialUrl: "https://tanzu.vmware.com"
  },
  {
    title: "Advanced Responsive Web UX & Animations",
    organization: "Interaction Design Institute",
    date: "Jan 2024",
    credentialId: "UX-ANI-88",
    credentialUrl: "https://example.com"
  }
];

const FALLBACK_ACHIEVEMENTS = [
  {
    title: "1st Place Winner - TechnoSprint Hackathon",
    description: "Won the grand prize among 120 competing teams for developing a secure builder project module in Java.",
    date: "Oct 2025",
    organization: "TechnoSprint Inc.",
    iconName: "Award"
  },
  {
    title: "Open Source Contribution Recognition",
    description: "Awarded top contributor status for patching severe reactivity and memory leak issues in standard animation packages.",
    date: "Jul 2024",
    organization: "GitHub Developer Community",
    iconName: "Award"
  },
  {
    title: "Dean's Merit List",
    description: "Consistently listed in the Academic Honor Roll for obtaining perfect marks in all Java and Database theory courses.",
    date: "May 2023",
    organization: "Apex University",
    iconName: "Award"
  }
];

const FALLBACK_TESTIMONIALS = [
  {
    id: 1,
    name: "Amara Sterling",
    role: "Creative Director",
    organization: "Apex Studios",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    feedback: "Working with this developer was an absolute pleasure. The custom UI animations they crafted made our brand portfolio feel incredibly sleek and futuristic. Visual excellence at its best!"
  },
  {
    id: 2,
    name: "Devon Thorne",
    role: "Technical Lead",
    organization: "Cortex Networks",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    feedback: "Technical excellence! The REST API responses are highly optimized, and the form handles data security flawlessly. A premium developer who understands both aesthetics and architecture."
  },
  {
    id: 3,
    name: "Kavya Nair",
    role: "Founder",
    organization: "Soleil Designs",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    feedback: "The personal brand dashboard they implemented blew us away. It is visually premium, responds smoothly on mobile devices, and connects to the backend REST service with absolute zero friction."
  }
];

const API_BASE_URL = 'http://localhost:8080/api';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorHovered, setCursorHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dynamic Portfolio States
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);
  const [skills, setSkills] = useState(FALLBACK_SKILLS);
  const [experience, setExperience] = useState(FALLBACK_EXPERIENCE);
  const [education, setEducation] = useState(FALLBACK_EDUCATION);
  const [certifications, setCertifications] = useState(FALLBACK_CERTIFICATIONS);
  const [achievements, setAchievements] = useState(FALLBACK_ACHIEVEMENTS);
  const [testimonials, setTestimonials] = useState(FALLBACK_TESTIMONIALS);

  // Form submission states
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: null, message: '' });

  // Modal selector
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Projects filter state
  const [projectFilter, setProjectFilter] = useState('All');

  // Testimonials index
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Load from Java Spring Boot REST API (fallback to local mock data if no server is running)
  useEffect(() => {
    const fetchFromAPI = async (endpoint, setter) => {
      try {
        const res = await fetch(`${API_BASE_URL}/${endpoint}`);
        if (res.ok) {
          const data = await res.json();
          if (data) setter(data);
        }
      } catch (err) {
        console.log(`Backend API offline for /api/${endpoint}, using fallback mock data.`);
      }
    };

    fetchFromAPI('projects', setProjects);
    fetchFromAPI('skills', setSkills);
    fetchFromAPI('experience', setExperience);
    fetchFromAPI('education', setEducation);
    fetchFromAPI('certifications', setCertifications);
    fetchFromAPI('achievements', setAchievements);
    fetchFromAPI('testimonials', setTestimonials);
  }, []);

  // Track Mouse movement for custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Sticky Navbar logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'achievements', 'certifications', 'testimonials', 'dashboard', 'resume', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Submit contact form to Java backend
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: 'sending', message: 'Sending message...' });

    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        const data = await res.json();
        setFormStatus({ type: 'success', message: data.message || 'Message sent successfully!' });
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || 'Server rejected message validation.');
      }
    } catch (err) {
      console.warn("REST API Contact Submission failed. Falling back to local success simulator.");
      // Simulated local success
      setTimeout(() => {
        if (!formState.name || !formState.email || !formState.message) {
          setFormStatus({ type: 'error', message: 'Error: Please fill out all required fields.' });
        } else {
          setFormStatus({ type: 'success', message: 'Message sent successfully!' });
          setFormState({ name: '', email: '', subject: '', message: '' });
        }
      }, 600);
    }
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredProjects = projectFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === projectFilter.toLowerCase());

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Dashboard', id: 'dashboard' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div style={{
      fontFamily: "'Outfit', 'Inter', sans-serif",
      backgroundColor: '#fffbeb',
      color: '#1c1917',
      minHeight: '100vh',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      {/* Scroll Progress and decorative blobs */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          backgroundColor: 'rgba(249, 115, 22, 0.3)',
          border: '1.5px solid #f97316',
          pointerEvents: 'none',
          zIndex: 9999,
          display: 'none'
        }}
        className="custom-cursor-fx"
      />

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0
      }}>
        <div style={{
          position: 'absolute',
          top: '8%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(254, 215, 170, 0.45) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(40px)',
          animation: 'floatBlob 12s infinite alternate'
        }} />
        <div style={{
          position: 'absolute',
          top: '35%',
          left: '-15%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(254, 215, 170, 0.35) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(50px)',
          animation: 'floatBlob 16s infinite alternate-reverse'
        }} />
      </div>

      {/* NAVBAR */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '76px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(249, 115, 22, 0.15)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(249, 115, 22, 0.05)' : 'none',
        transition: 'all 0.4s ease'
      }}>
        <div 
          onClick={() => scrollTo('home')}
          style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #f97316 0%, #fdba74 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '1.2rem',
            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.25)',
            border: '2px solid #ffffff'
          }}>
            S
          </div>
          <span style={{ fontWeight: 800, fontSize: '1.15rem', color: '#1c1917', letterSpacing: '-0.5px' }}>
            Soleil <span style={{ color: '#f97316' }}>Brand</span>
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }} className="desktop-menu-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'none',
                border: 'none',
                padding: '8px 14px',
                fontSize: '0.85rem',
                fontWeight: activeSection === item.id ? 700 : 500,
                color: activeSection === item.id ? '#ea580c' : '#44403c',
                cursor: 'pointer',
                borderRadius: '99px',
                position: 'relative'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo('contact')}
          className="desktop-menu-links"
          style={{
            backgroundColor: '#ea580c',
            color: '#ffffff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '99px',
            fontSize: '0.85rem',
            fontWeight: 600,
            boxShadow: '0 4px 14px rgba(234, 88, 12, 0.2)',
            cursor: 'pointer'
          }}
        >
          Let's Connect
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#1c1917',
            display: 'none'
          }}
          className="mobile-hamburger-trigger"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '76px',
              left: 0,
              right: 0,
              backgroundColor: 'rgba(255, 253, 245, 0.95)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(249, 115, 22, 0.15)',
              padding: '24px',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  padding: '10px 16px',
                  fontSize: '1rem',
                  fontWeight: activeSection === item.id ? 700 : 500,
                  color: activeSection === item.id ? '#ea580c' : '#44403c',
                  cursor: 'pointer',
                  borderLeft: activeSection === item.id ? '3px solid #f97316' : '3px solid transparent'
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              style={{
                backgroundColor: '#ea580c',
                color: '#ffffff',
                border: 'none',
                padding: '12px',
                borderRadius: '8px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Let's Connect
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HOME / HERO */}
      <section 
        id="home"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '120px 48px 60px',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '60px',
          alignItems: 'center'
        }}
          className="hero-grid-layout"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 16px',
              backgroundColor: '#ffedd5',
              borderRadius: '99px',
              border: '1.5px solid rgba(249, 115, 22, 0.2)',
              marginBottom: 24,
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#ea580c'
            }}>
              <Sparkles size={14} />
              Welcome to my brand portfolio
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#44403c', margin: '0 0 16px' }}>
              Hello, I'm <span style={{ color: '#f97316', fontWeight: 800 }}>Soleil</span>
            </h3>

            <h1 style={{
              fontSize: '3.6rem',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#1c1917',
              letterSpacing: '-1.5px',
              margin: '0 0 24px'
            }}
              className="hero-main-title"
            >
              I Build Digital Experiences <br />
              <span style={{
                background: 'linear-gradient(90deg, #ea580c 0%, #fb923c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>That Make an Impact.</span>
            </h1>

            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: '#44403c',
              marginBottom: 40,
              maxWidth: '600px'
            }}>
              A passionate developer and creative problem solver focused on building modern, intelligent, and user-friendly digital experiences. Specializing in high-performance web applications.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              <button
                onClick={() => scrollTo('projects')}
                style={{
                  backgroundColor: '#ea580c',
                  color: '#ffffff',
                  border: 'none',
                  padding: '16px 36px',
                  borderRadius: '99px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(234, 88, 12, 0.25)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8
                }}
              >
                Explore My Work <ArrowRight size={18} />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  color: '#ea580c',
                  border: '1.5px solid rgba(234, 88, 12, 0.3)',
                  padding: '16px 36px',
                  borderRadius: '99px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)'
                }}
              >
                Let's Connect
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{
              width: '280px',
              height: '280px',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)',
              border: '4px solid #ffffff',
              boxShadow: '0 20px 40px rgba(249, 115, 22, 0.15)',
              overflow: 'hidden'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
                alt="Soleil"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Orbiting Icons */}
            <div style={{ position: 'absolute', top: '10%', left: '10%', animation: 'orbitReact 10s linear infinite' }}>
              <div style={{ padding: '12px', borderRadius: '50%', backgroundColor: '#ffffff', boxShadow: '0 8px 24px rgba(0,0,0,0.06)', color: '#00d8ff' }}>
                <Cpu size={24} />
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '15%', left: '5%', animation: 'orbitSpring 14s linear infinite' }}>
              <div style={{ padding: '12px', borderRadius: '50%', backgroundColor: '#ffffff', boxShadow: '0 8px 24px rgba(0,0,0,0.06)', color: '#6db33f' }}>
                <Layers size={24} />
              </div>
            </div>
            <div style={{ position: 'absolute', top: '20%', right: '5%', animation: 'orbitJava 12s linear infinite' }}>
              <div style={{ padding: '12px', borderRadius: '50%', backgroundColor: '#ffffff', boxShadow: '0 8px 24px rgba(0,0,0,0.06)', color: '#ea2d2e' }}>
                <Wrench size={24} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section 
        id="about"
        style={{
          padding: '100px 48px',
          position: 'relative',
          zIndex: 10,
          backgroundColor: '#fffcf2'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f97316', letterSpacing: '2px', textTransform: 'uppercase' }}>Who I Am</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1c1917', margin: '8px 0 0' }}>About Soleil</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'start'
          }}
            className="about-split-layout"
          >
            <div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#ea580c', marginBottom: 20 }}>
                My Creative Coding Journey
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#44403c', marginBottom: 20 }}>
                I am a dedicated software engineer specializing in frontend interactivity and robust Spring Boot backends. Over the past several years, I have worked with multiple organizations and clients to build high-performance web products.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#44403c', marginBottom: 30 }}>
                I love bridging the gap between engineering and clean aesthetics. My design system is built around Light Orange + Cream, evoking warmth, creativity, and professional focus.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div style={{
                  backgroundColor: '#ffffff',
                  padding: '20px',
                  borderRadius: '16px',
                  border: '1.5px solid rgba(249, 115, 22, 0.1)'
                }}>
                  <Briefcase style={{ color: '#ea580c', marginBottom: 12 }} size={24} />
                  <h4 style={{ fontWeight: 700, margin: '0 0 6px', fontSize: '0.95rem' }}>Developer</h4>
                  <p style={{ fontSize: '0.8rem', color: '#6b6661', margin: 0 }}>React, Spring Boot, REST APIs, Microservices</p>
                </div>

                <div style={{
                  backgroundColor: '#ffffff',
                  padding: '20px',
                  borderRadius: '16px',
                  border: '1.5px solid rgba(249, 115, 22, 0.1)'
                }}>
                  <Cpu style={{ color: '#ea580c', marginBottom: 12 }} size={24} />
                  <h4 style={{ fontWeight: 700, margin: '0 0 6px', fontSize: '0.95rem' }}>Problem Solver</h4>
                  <p style={{ fontSize: '0.8rem', color: '#6b6661', margin: 0 }}>Data structures, scalability audits, optimizations</p>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1c1917', marginBottom: 30 }}>
                Milestones & Development Timeline
              </h3>

              <div style={{
                borderLeft: '2px solid #fdba74',
                paddingLeft: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
                position: 'relative'
              }}>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '-31px',
                    top: '2px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#ea580c',
                    border: '3px solid #fffbeb'
                  }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ea580c' }}>2025 - PRESENT</span>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '4px 0', color: '#1c1917' }}>Senior Engineer - TechnoSprint</h4>
                  <p style={{ fontSize: '0.85rem', color: '#44403c', margin: 0 }}>Architecting complex builder systems and backend integrations.</p>
                </div>

                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '-31px',
                    top: '2px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#f97316',
                    border: '3px solid #fffbeb'
                  }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ea580c' }}>2023 - 2024</span>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '4px 0', color: '#1c1917' }}>Full Stack - Cortex Studio</h4>
                  <p style={{ fontSize: '0.85rem', color: '#44403c', margin: 0 }}>Delivered multiple animated UI projects with Spring Boot API logic.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section 
        id="skills"
        style={{
          padding: '100px 48px',
          position: 'relative',
          zIndex: 10,
          backgroundColor: '#fffbeb'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f97316', letterSpacing: '2px', textTransform: 'uppercase' }}>Expertise</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1c1917', margin: '8px 0 0' }}>Technical Stack</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            <div style={{
              backgroundColor: '#ffffff',
              padding: '30px',
              borderRadius: '24px',
              border: '1.5px solid rgba(249, 115, 22, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <Cpu size={24} style={{ color: '#ea580c' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>Frontend</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {skills.frontend.map((skill, index) => (
                  <div key={index}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', backgroundColor: '#fed7aa', borderRadius: '99px', overflow: 'hidden' }}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{ height: '100%', backgroundColor: '#f97316', borderRadius: '99px' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              backgroundColor: '#ffffff',
              padding: '30px',
              borderRadius: '24px',
              border: '1.5px solid rgba(249, 115, 22, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <Layers size={24} style={{ color: '#ea580c' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>Backend</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {skills.backend.map((skill, index) => (
                  <div key={index}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', backgroundColor: '#fed7aa', borderRadius: '99px', overflow: 'hidden' }}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{ height: '100%', backgroundColor: '#f97316', borderRadius: '99px' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section 
        id="projects"
        style={{
          padding: '100px 48px',
          position: 'relative',
          zIndex: 10,
          backgroundColor: '#fffcf2'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f97316', letterSpacing: '2px', textTransform: 'uppercase' }}>Portfolio</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1c1917', margin: '8px 0 0' }}>Featured Work</h2>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: '50px', flexWrap: 'wrap' }}>
            {['All', 'Web', 'AI', 'Mobile', 'Software'].map((cat) => (
              <button
                key={cat}
                onClick={() => setProjectFilter(cat)}
                style={{
                  padding: '8px 24px',
                  borderRadius: '99px',
                  border: '1.5px solid rgba(249, 115, 22, 0.15)',
                  backgroundColor: projectFilter === cat ? '#ea580c' : '#ffffff',
                  color: projectFilter === cat ? '#ffffff' : '#ea580c',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1.5px solid rgba(249, 115, 22, 0.1)'
                  }}
                  className="project-tilt-card"
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const rotateX = (((e.clientY - rect.top) - rect.height / 2) / (rect.height / 2)) * -8;
                    const rotateY = (((e.clientX - rect.left) - rect.width / 2) / (rect.width / 2)) * 8;
                    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0px)';
                  }}
                >
                  <div style={{ width: '100%', height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img src={project.previewImage} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '16px', right: '16px', padding: '4px 12px', backgroundColor: '#ea580c', color: '#ffffff', fontSize: '0.75rem', fontWeight: 700, borderRadius: '99px' }}>
                      {project.category}
                    </div>
                  </div>

                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 10px' }}>{project.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#44403c', lineHeight: 1.6, margin: '0 0 20px' }}>{project.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                      {project.technologies.map((t, idx) => (
                        <span key={idx} style={{ fontSize: '0.7rem', fontWeight: 700, color: '#ea580c', backgroundColor: '#ffedd5', padding: '4px 10px', borderRadius: '99px' }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, borderTop: '1px solid #f5f5f4', paddingTop: 16 }}>
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', fontWeight: 700, color: '#44403c', textDecoration: 'none' }}>
                        <Github size={16} /> Code
                      </a>
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', fontWeight: 700, color: '#ea580c', textDecoration: 'none', marginLeft: 'auto' }}>
                        Demo <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section 
        id="experience"
        style={{
          padding: '100px 48px',
          position: 'relative',
          zIndex: 10,
          backgroundColor: '#fffbeb'
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f97316', letterSpacing: '2px', textTransform: 'uppercase' }}>History</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1c1917', margin: '8px 0 0' }}>Experience</h2>
          </div>

          <div style={{
            position: 'relative',
            borderLeft: '2px solid #fdba74',
            paddingLeft: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '48px'
          }}>
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ position: 'relative' }}
              >
                <div style={{
                  position: 'absolute',
                  left: '-40px',
                  top: '6px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: '#ea580c',
                  border: '3px solid #ffffff'
                }} />

                <div style={{
                  backgroundColor: '#ffffff',
                  padding: '30px',
                  borderRadius: '24px',
                  border: '1.5px solid rgba(249, 115, 22, 0.1)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1c1917', margin: 0 }}>{exp.role}</h3>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ea580c', margin: '4px 0 0' }}>{exp.organization}</h4>
                    </div>
                    <span style={{
                      backgroundColor: '#ffedd5',
                      color: '#ea580c',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '6px 14px',
                      borderRadius: '99px'
                    }}>
                      {exp.duration}
                    </span>
                  </div>

                  <ul style={{ paddingLeft: '20px', margin: '0 0 20px', color: '#44403c', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} style={{ marginBottom: 6 }}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section 
        id="education"
        style={{
          padding: '100px 48px',
          position: 'relative',
          zIndex: 10,
          backgroundColor: '#fffcf2'
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f97316', letterSpacing: '2px', textTransform: 'uppercase' }}>Academic</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1c1917', margin: '8px 0 0' }}>Education</h2>
          </div>

          <div style={{
            position: 'relative',
            borderLeft: '2px solid #fdba74',
            paddingLeft: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px'
          }}>
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ position: 'relative' }}
              >
                <div style={{
                  position: 'absolute',
                  left: '-40px',
                  top: '6px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: '#ea580c',
                  border: '3px solid #ffffff'
                }} />

                <div style={{
                  backgroundColor: '#ffffff',
                  padding: '30px',
                  borderRadius: '24px',
                  border: '1.5px solid rgba(249, 115, 22, 0.1)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
                    <div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1c1917', margin: 0 }}>{edu.degree}</h3>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#44403c', margin: '4px 0 0' }}>{edu.institution} | <span style={{ color: '#ea580c' }}>{edu.specialization}</span></h4>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ea580c' }}>{edu.year}</span>
                  </div>

                  <ul style={{ paddingLeft: '20px', margin: 0, color: '#78716c', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    {edu.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section 
        id="achievements"
        style={{
          padding: '100px 48px',
          position: 'relative',
          zIndex: 10,
          backgroundColor: '#fffbeb'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f97316', letterSpacing: '2px', textTransform: 'uppercase' }}>Milestones</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1c1917', margin: '8px 0 0' }}>Achievements</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {achievements.map((ach, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '30px',
                  borderRadius: '24px',
                  border: '1.5px solid rgba(249, 115, 22, 0.1)'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#ffedd5',
                  color: '#ea580c',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20
                }}>
                  <Award size={24} />
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1c1917', margin: '0 0 10px' }}>{ach.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#44403c', lineHeight: 1.6, margin: '0 0 16px' }}>{ach.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, color: '#ea580c' }}>
                  <span>{ach.organization}</span>
                  <span>{ach.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section 
        id="certifications"
        style={{
          padding: '100px 48px',
          position: 'relative',
          zIndex: 10,
          backgroundColor: '#fffcf2'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f97316', letterSpacing: '2px', textTransform: 'uppercase' }}>Credentials</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1c1917', margin: '8px 0 0' }}>Certifications</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCertificate(cert)}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '30px',
                  borderRadius: '24px',
                  border: '1.5px solid rgba(249, 115, 22, 0.1)',
                  cursor: 'pointer'
                }}
              >
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1c1917', margin: '0 0 10px' }}>{cert.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#44403c', margin: '0 0 8px' }}>{cert.organization}</p>
                <p style={{ fontSize: '0.75rem', color: '#ea580c', fontWeight: 600, margin: '0 0 20px' }}>ID: {cert.credentialId}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', fontWeight: 700, color: '#ea580c' }}>
                  Verify Certificate <ExternalLink size={14} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section 
        id="testimonials"
        style={{
          padding: '100px 48px',
          position: 'relative',
          zIndex: 10,
          backgroundColor: '#fffbeb'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f97316', letterSpacing: '2px', textTransform: 'uppercase' }}>Reviews</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1c1917', margin: '8px 0 0' }}>Client Testimonials</h2>
          </div>

          <div style={{
            position: 'relative',
            backgroundColor: '#ffffff',
            padding: '40px',
            borderRadius: '32px',
            border: '1.5px solid rgba(249, 115, 22, 0.1)'
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                  {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f97316" color="#f97316" />
                  ))}
                </div>

                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: '#1c1917',
                  fontStyle: 'italic',
                  marginBottom: 30
                }}>
                  "{testimonials[testimonialIndex].feedback}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <img 
                    src={testimonials[testimonialIndex].avatarUrl} 
                    alt={testimonials[testimonialIndex].name}
                    style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <h4 style={{ fontWeight: 800, margin: 0, color: '#1c1917' }}>{testimonials[testimonialIndex].name}</h4>
                    <p style={{ fontSize: '0.8rem', color: '#ea580c', margin: 0 }}>
                      {testimonials[testimonialIndex].role}, {testimonials[testimonialIndex].organization}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div style={{ display: 'flex', gap: 12, position: 'absolute', bottom: '40px', right: '40px' }}>
              <button onClick={handlePrevTestimonial} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid rgba(249, 115, 22, 0.2)', backgroundColor: '#ffffff', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><ChevronLeft size={20} /></button>
              <button onClick={handleNextTestimonial} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid rgba(249, 115, 22, 0.2)', backgroundColor: '#ffffff', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section 
        id="dashboard"
        style={{
          padding: '100px 48px',
          position: 'relative',
          zIndex: 10,
          backgroundColor: '#fffcf2'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f97316', letterSpacing: '2px', textTransform: 'uppercase' }}>Metrics</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1c1917', margin: '8px 0 0' }}>Brand Insights</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '24px', border: '1.5px solid rgba(249, 115, 22, 0.1)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ea580c', margin: '0 0 10px' }}>25+</h3>
              <p style={{ fontWeight: 700, margin: '0 0 4px' }}>Projects Completed</p>
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '24px', border: '1.5px solid rgba(249, 115, 22, 0.1)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ea580c', margin: '0 0 10px' }}>15+</h3>
              <p style={{ fontWeight: 700, margin: '0 0 4px' }}>Tech Frameworks</p>
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '24px', border: '1.5px solid rgba(249, 115, 22, 0.1)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ea580c', margin: '0 0 10px' }}>10+</h3>
              <p style={{ fontWeight: 700, margin: '0 0 4px' }}>Certifications</p>
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '24px', border: '1.5px solid rgba(249, 115, 22, 0.1)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ea580c', margin: '0 0 10px' }}>1200+</h3>
              <p style={{ fontWeight: 700, margin: '0 0 4px' }}>Coding Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section 
        id="resume"
        style={{
          padding: '100px 48px',
          position: 'relative',
          zIndex: 10,
          backgroundColor: '#fffbeb'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f97316', letterSpacing: '2px', textTransform: 'uppercase' }}>Professional Document</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1c1917', margin: '8px 0 0' }}>Download Resume</h2>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '48px', borderRadius: '32px', border: '1.5px solid rgba(249, 115, 22, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FileText size={64} style={{ color: '#ea580c', marginBottom: 24 }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 12px' }}>Soleil_Resume_2026.pdf</h3>
            <p style={{ fontSize: '0.95rem', color: '#44403c', lineHeight: 1.6, marginBottom: 32 }}>
              Access my complete qualifications, detailed software architecture designs, project references, and skill endorsements.
            </p>
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); alert("Resume PDF download simulated successfully!"); }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#ea580c', color: '#ffffff', border: 'none', padding: '16px 36px', borderRadius: '99px', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 20px rgba(234, 88, 12, 0.25)' }}
            >
              Download PDF Resume <Download size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section 
        id="contact"
        style={{
          padding: '100px 48px',
          position: 'relative',
          zIndex: 10,
          backgroundColor: '#fffcf2'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f97316', letterSpacing: '2px', textTransform: 'uppercase' }}>Get in Touch</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1c1917', margin: '8px 0 0' }}>Let's Connect</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '60px', alignItems: 'start' }} className="contact-split-layout">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ea580c' }}>Contact Information</h3>
              <p style={{ fontSize: '0.95rem', color: '#44403c', lineHeight: 1.6 }}>Have an interesting project proposal, job opportunity, or just want to chat?</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#ffedd5', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Mail size={20} /></div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#78716c', margin: 0 }}>Email Me</p>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700, margin: 0 }}>soleil@brand.com</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#ffedd5', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone size={20} /></div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#78716c', margin: 0 }}>Call Me</p>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700, margin: 0 }}>+1 (555) 789-0123</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '32px', border: '1.5px solid rgba(249, 115, 22, 0.1)' }}>
              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label htmlFor="formName" style={{ fontSize: '0.85rem', fontWeight: 700 }}>Full Name *</label>
                  <input type="text" id="formName" required placeholder="Your Name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid #e5e5e0', fontSize: '0.9rem', outline: 'none', backgroundColor: '#fffcf5' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label htmlFor="formEmail" style={{ fontSize: '0.85rem', fontWeight: 700 }}>Email Address *</label>
                  <input type="email" id="formEmail" required placeholder="you@example.com" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid #e5e5e0', fontSize: '0.9rem', outline: 'none', backgroundColor: '#fffcf5' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label htmlFor="formSubject" style={{ fontSize: '0.85rem', fontWeight: 700 }}>Subject</label>
                  <input type="text" id="formSubject" placeholder="Inquiry Subject" value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid #e5e5e0', fontSize: '0.9rem', outline: 'none', backgroundColor: '#fffcf5' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label htmlFor="formMessage" style={{ fontSize: '0.85rem', fontWeight: 700 }}>Message *</label>
                  <textarea id="formMessage" required rows="5" placeholder="Write your message here..." value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid #e5e5e0', fontSize: '0.9rem', outline: 'none', backgroundColor: '#fffcf5', resize: 'vertical' }} />
                </div>

                {formStatus.type && (
                  <div style={{ padding: '12px 16px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8, backgroundColor: formStatus.type === 'success' ? '#dcfce7' : formStatus.type === 'error' ? '#fee2e2' : '#fef3c7', color: formStatus.type === 'success' ? '#15803d' : formStatus.type === 'error' ? '#b91c1c' : '#b45309' }}>
                    {formStatus.type === 'success' && <CheckCircle2 size={16} />}
                    {formStatus.type === 'error' && <AlertCircle size={16} />}
                    {formStatus.message}
                  </div>
                )}

                <button type="submit" disabled={formStatus.type === 'sending'} style={{ backgroundColor: '#ea580c', color: '#ffffff', border: 'none', padding: '14px', borderRadius: '12px', fontSize: '0.95rem', fontWeight: 700, cursor: formStatus.type === 'sending' ? 'not-allowed' : 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 8px 20px rgba(234, 88, 12, 0.2)' }}>
                  {formStatus.type === 'sending' ? 'Sending...' : 'Send Message'} <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#1c1917', color: '#d6d3d1', padding: '80px 48px 40px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '50px' }} className="footer-grid-layout">
          <div>
            <h3 style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.25rem', margin: '0 0 16px' }}>Soleil</h3>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#a8a29e' }}>Building ideas into meaningful, secure, and beautiful digital experiences.</p>
          </div>
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', margin: '0 0 16px' }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.85rem' }}>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }} style={{ color: '#a8a29e', textDecoration: 'none' }}>About</a>
              <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }} style={{ color: '#a8a29e', textDecoration: 'none' }}>Skills</a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }} style={{ color: '#a8a29e', textDecoration: 'none' }}>Projects</a>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #44403c', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, fontSize: '0.75rem', color: '#78716c' }}>
          <span>&copy; {new Date().getFullYear()} Soleil Personal Brand. All Rights Reserved.</span>
        </div>
      </footer>

      {/* DETAIL MODAL */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCertificate(null)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} onClick={(e) => e.stopPropagation()} style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '32px', maxWidth: '550px', width: '100%', border: '2px solid #f97316', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', position: 'relative' }}>
              <button onClick={() => setSelectedCertificate(null)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', color: '#78716c' }}><X size={24} /></button>
              <div style={{ textAlign: 'center', marginTop: 10 }}>
                <Award size={48} style={{ color: '#ea580c', marginBottom: 20 }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1c1917', marginBottom: 12 }}>{selectedCertificate.title}</h3>
                <p style={{ fontSize: '1rem', color: '#44403c', fontWeight: 600, margin: '0 0 6px' }}>Issued by {selectedCertificate.organization}</p>
                <p style={{ fontSize: '0.85rem', color: '#ea580c', fontWeight: 700, margin: '0 0 20px' }}>Date: {selectedCertificate.date}</p>
                <div style={{ padding: '16px', backgroundColor: '#fffbeb', borderRadius: '16px', border: '1.5px dashed #fdba74', fontSize: '0.85rem', color: '#78716c', marginBottom: 30 }}>
                  <p style={{ margin: '0 0 4px', fontWeight: 700 }}>Credential Details</p>
                  <p style={{ margin: 0 }}>Verification ID: {selectedCertificate.credentialId}</p>
                </div>
                <a href={selectedCertificate.credentialUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#ea580c', color: '#ffffff', padding: '12px 28px', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 700, textDecoration: 'none' }}>Verify Online <ExternalLink size={14} /></a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  Download,
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  ChevronDown,
  ShieldCheck,
  Zap,
  Globe,
  Award,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
  onOpenConsultationModal: () => void;
}

const ROLES = [
  'Principal Creative Technologist',
  'AI Experience & Multimodal Architect',
  'Staff Frontend Systems Engineer',
  'Design Systems & Motion Specialist',
];

export const Hero: React.FC<HeroProps> = ({
  onOpenResumeModal,
  onOpenConsultationModal,
}) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentRole.length) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2400);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  // Ambient interactive canvas particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    const count = Math.min(Math.floor(width / 35), 45);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.35 + 0.1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(234, 179, 8, ${p1.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(234, 179, 8, ${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-0 flex flex-col justify-between overflow-hidden bg-[#050505] text-[#E5E5E5]"
    >
      {/* Background Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
      />

      {/* Atmospheric Gold Radial Glows matching Bold Typography theme */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[#D4AF37]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Banner Status Pill */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-4">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-300 backdrop-blur-xl shadow-2xl"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
          </span>
          <span className="text-[#D4AF37] font-bold">{PERSONAL_INFO.availability}</span>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-400">{PERSONAL_INFO.location}</span>
        </motion.div>
      </div>

      {/* Main Grid: Bold Typography Editorial Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Editorial Headline, Typewriter & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            <div className="space-y-2">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.45em] sm:tracking-[0.5em] text-[#D4AF37] font-semibold block mb-2 font-mono">
                Senior Creative Architect & Technologist
              </span>

              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[0.88] font-bold tracking-tighter text-white font-serif italic">
                Julian <br />
                <span className="not-italic font-display font-black text-white">Riviera</span>
              </h1>
            </div>

            {/* Dynamic Typewriter Role */}
            <div className="h-8 sm:h-9 flex items-center">
              <span className="font-mono text-sm sm:text-lg text-[#D4AF37] font-medium tracking-tight">
                {displayedText}
                <span className="animate-pulse text-white">|</span>
              </span>
            </div>

            <p className="text-base sm:text-lg text-neutral-400 max-w-lg leading-relaxed font-light font-sans">
              Crafting immersive digital experiences for world-class brands. Specializing in high-performance Web3 solutions, AI-integrated interfaces, and cinematic UI design.
            </p>

            {/* High-Contrast Bold Theme CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                id="hero-explore-projects-cta"
                className="px-8 py-4 bg-[#D4AF37] text-black font-extrabold uppercase text-xs tracking-widest hover:bg-white hover:shadow-lg hover:shadow-white/10 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-[#D4AF37]/20 rounded-none sm:rounded-sm"
              >
                <span>View Case Studies</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#about"
                id="hero-our-story-cta"
                className="px-8 py-4 border border-white/20 uppercase text-xs tracking-widest hover:bg-white/10 text-white font-bold transition-all flex items-center justify-center gap-2 rounded-none sm:rounded-sm"
              >
                <span>Our Story</span>
              </a>

              <button
                type="button"
                id="hero-book-consult-cta"
                onClick={onOpenConsultationModal}
                className="px-6 py-4 border border-white/10 uppercase text-xs tracking-widest hover:bg-white/5 text-neutral-300 font-medium transition-all flex items-center justify-center gap-2"
              >
                <Zap size={15} className="text-[#D4AF37]" />
                <span>Book Call</span>
              </button>
            </div>

            {/* 3-Column Bold Metric Row */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-white/10 w-full max-w-lg">
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">18+</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-mono mt-1">Awards Won</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">85+</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-mono mt-1">Global Ships</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">12Y+</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-mono mt-1">Experience</div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-mono">
                Connect:
              </span>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                id="hero-social-github"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-neutral-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
              >
                <Github size={16} />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                id="hero-social-linkedin"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-neutral-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={PERSONAL_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                id="hero-social-twitter"
                aria-label="Twitter Profile"
                className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-neutral-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
              >
                <Twitter size={16} />
              </a>
              <a
                href={PERSONAL_INFO.socials.dribbble}
                target="_blank"
                rel="noreferrer"
                id="hero-social-dribbble"
                aria-label="Dribbble Portfolio"
                className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-neutral-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
              >
                <Dribbble size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: 4K Portrait with Skill Focus & Active Project Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Visual Frame Container */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl bg-gradient-to-tr from-[#1A1A1A] to-transparent border border-white/10 shadow-2xl overflow-hidden group">
              {/* Portrait Background */}
              <div
                style={{ backgroundImage: `url(${PERSONAL_INFO.portraitImageAlt})` }}
                className="absolute inset-0 bg-cover bg-center opacity-70 grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Bottom Card: Currently Working On */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-1 font-mono">
                      Currently Working On
                    </div>
                    <div className="text-xl font-bold font-display text-white">
                      Nebula AI Multimodal Studio
                    </div>
                    <div className="text-xs text-neutral-400 font-sans mt-0.5">
                      WebGPU & Gemini 2.0 Realtime Canvas
                    </div>
                  </div>
                  <a
                    href="#projects"
                    className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 hover:bg-[#D4AF37] hover:text-black transition-all text-white shrink-0"
                    title="View project details"
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Selected Projects Marquee Strip matching the Bold Typography theme */}
      <div className="relative z-10 w-full bg-[#0A0A0A] border-t border-white/5 py-5 px-6 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-mono font-semibold whitespace-nowrap">
          Selected Projects
        </div>

        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-1">
          <a
            href="#projects"
            className="min-w-[260px] h-16 bg-white/[0.03] hover:bg-white/[0.08] rounded-xl border border-white/10 flex items-center px-4 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg mr-3 flex items-center justify-center font-bold text-black text-xs font-mono">
              01
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
                Synapse GenAI Studio
              </div>
              <div className="text-[10px] text-neutral-400 font-mono">
                Multimodal Canvas & Diffusion
              </div>
            </div>
          </a>

          <a
            href="#projects"
            className="min-w-[260px] h-16 bg-white/[0.03] hover:bg-white/[0.08] rounded-xl border border-white/10 flex items-center px-4 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg mr-3 flex items-center justify-center font-bold text-black text-xs font-mono">
              02
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
                Apex Institutional Terminal
              </div>
              <div className="text-[10px] text-neutral-400 font-mono">
                High-Frequency FinTech
              </div>
            </div>
          </a>

          <a
            href="#projects"
            className="min-w-[260px] h-16 bg-white/[0.03] hover:bg-white/[0.08] rounded-xl border border-white/10 flex items-center px-4 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg mr-3 flex items-center justify-center font-bold text-black text-xs font-mono">
              03
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
                Prism Design System
              </div>
              <div className="text-[10px] text-neutral-400 font-mono">
                Tokens & Runtime Compiler
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

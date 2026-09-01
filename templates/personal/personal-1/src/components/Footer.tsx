import React from 'react';
import {
  ArrowUp,
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  Globe,
  Sparkles,
  Heart,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenLegalModal: (title: string, content: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openPrivacy = () => {
    onOpenLegalModal(
      'Privacy Policy',
      `This portfolio website does not track cookies, collect covert telemetry, or sell analytics data. Information submitted via the inquiry form is strictly transmitted for direct business communication between you and Julian Riviera.`
    );
  };

  const openTerms = () => {
    onOpenLegalModal(
      'Terms of Engagement',
      `All architectural code, visual assets, and trademarks displayed on this domain are copyright © 2025 Julian Vance Riviera and respective client partners. Case study codebases are licensed according to their individual client agreements.`
    );
  };

  return (
    <footer className="relative bg-[#050505] text-[#E5E5E5] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 p-[1px] shadow-lg">
                <div className="w-full h-full bg-black rounded-[9px] flex items-center justify-center font-serif font-extrabold text-[#D4AF37]">
                  {PERSONAL_INFO.monogram}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg text-white tracking-tight">
                  {PERSONAL_INFO.fullName}
                </span>
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                  {PERSONAL_INFO.title}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed mb-6 font-sans font-light">
              Pioneering the intersection of next-generation generative AI interfaces, spatial design systems, and ultra-high-performance web architecture.
            </p>

            {/* Live Availability Status */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-neutral-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
              </span>
              <span className="text-[#D4AF37] font-semibold uppercase tracking-wider text-[10px]">{PERSONAL_INFO.status}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.3em] font-bold mb-2">
              Navigation
            </div>
            <a href="#about" className="text-xs text-neutral-400 hover:text-white transition-colors">
              About & Perspective
            </a>
            <a href="#skills" className="text-xs text-neutral-400 hover:text-white transition-colors">
              Technical Capacities
            </a>
            <a href="#experience" className="text-xs text-neutral-400 hover:text-white transition-colors">
              Career Timeline
            </a>
            <a href="#projects" className="text-xs text-neutral-400 hover:text-white transition-colors">
              Selected Projects
            </a>
            <a href="#resume" className="text-xs text-neutral-400 hover:text-white transition-colors">
              Curriculum Vitae
            </a>
            <a href="#gallery" className="text-xs text-neutral-400 hover:text-white transition-colors">
              4K Photo Gallery
            </a>
            <a href="#blog" className="text-xs text-neutral-400 hover:text-white transition-colors">
              Essays & Research
            </a>
          </div>

          {/* Offerings & Services */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.3em] font-bold mb-2">
              Services & Tiers
            </div>
            <a href="#services" className="text-xs text-neutral-400 hover:text-white transition-colors">
              Full-Stack Web Architecture
            </a>
            <a href="#services" className="text-xs text-neutral-400 hover:text-white transition-colors">
              Multimodal AI Studio Canvases
            </a>
            <a href="#services" className="text-xs text-neutral-400 hover:text-white transition-colors">
              Design Systems & Motion Tokens
            </a>
            <a href="#services" className="text-xs text-neutral-400 hover:text-white transition-colors">
              WebGL & WebGPU Visual Computing
            </a>
            <a href="#services" className="text-xs text-neutral-400 hover:text-white transition-colors">
              Executive Technical Advisory
            </a>
            <a href="#pricing" className="text-xs text-neutral-400 hover:text-white transition-colors">
              Investment Tiers & Estimator
            </a>
          </div>

          {/* Socials & Connect */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.3em] font-bold mb-1">
              Connect
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                id="footer-github"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
              >
                <Github size={16} />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                id="footer-linkedin"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={PERSONAL_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                id="footer-twitter"
                aria-label="Twitter Profile"
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
              >
                <Twitter size={16} />
              </a>
              <a
                href={PERSONAL_INFO.socials.dribbble}
                target="_blank"
                rel="noreferrer"
                id="footer-dribbble"
                aria-label="Dribbble Profile"
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
              >
                <Dribbble size={16} />
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                id="footer-back-to-top-btn"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white transition-all group"
              >
                <span className="uppercase tracking-wider text-[10px]">Back to Top</span>
                <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform text-[#D4AF37]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. Crafted with optical typography & bold restraint.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              id="footer-privacy-btn"
              onClick={openPrivacy}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              id="footer-terms-btn"
              onClick={openTerms}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Terms of Engagement
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Send, Sparkles, Mail, ShieldCheck, FileCode } from 'lucide-react';
import { mockApi } from '../services/mockApi';
import { audioService } from '../utils/audio';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenCommand?: () => void;
}

export function Footer({ onNavigate, onOpenCommand }: FooterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    setFeedbackMsg('');

    try {
      const res = await mockApi.subscribeNewsletter(email);
      setStatus('success');
      setFeedbackMsg(res.message);
      setEmail('');
      audioService.playSuccess();
    } catch (err: unknown) {
      setStatus('error');
      setFeedbackMsg((err as Error)?.message || 'Please enter a valid email.');
    }
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Agency', path: '/about' },
    { label: 'Services Directory', path: '/services' },
    { label: 'Selected Work', path: '/work' },
    { label: 'Insights & Dispatch', path: '/insights' },
    { label: 'Project Inquiry', path: '/contact' },
  ];

  const serviceLinks = [
    { label: '01 — Brand Strategy', path: '/services/brand-strategy' },
    { label: '02 — Visual Identity', path: '/services/visual-identity' },
    { label: '03 — Web Design & UI', path: '/services/web-design' },
    { label: '04 — Creative Engineering', path: '/services/development' },
    { label: '05 — Motion & 3D Video', path: '/services/motion' },
    { label: '06 — Growth & Optimization', path: '/services/growth' },
  ];

  const socialLinks = [
    { label: 'Instagram', url: 'https://instagram.com' },
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'Behance', url: 'https://behance.net' },
    { label: 'Dribbble', url: 'https://dribbble.com' },
    { label: 'GitHub', url: 'https://github.com' },
  ];

  return (
    <footer className="bg-[#0E1016] border-t border-white/10 relative overflow-hidden pt-20 pb-12">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Top Call to Action Monolith */}
        <div className="mb-20 p-8 sm:p-14 rounded-2xl bg-[#151821]/70 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-md">
          <div className="max-w-xl text-center lg:text-left">
            <span className="font-mono text-xs text-violet-400 uppercase tracking-widest block mb-2 font-bold">
              Have an ambitious vision?
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Let's create something people remember.
            </h3>
          </div>
          <button
            onClick={() => {
              audioService.playClick();
              onNavigate('/contact');
            }}
            className="px-8 py-4 rounded-full bg-white text-black hover:bg-violet-500 hover:text-white font-bold text-xs uppercase tracking-widest transition-all shadow-xl flex items-center gap-2 group flex-shrink-0"
          >
            <span>Start a Project Brief</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 4-Column Footer Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Col 1: Brand & Status (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-violet-600/30" />
              <span className="text-xl font-bold tracking-tighter text-white uppercase">HORIZON</span>
            </div>
            <p className="text-xs sm:text-sm text-[#A6ACB8] leading-relaxed max-w-sm font-light">
              An independent creative technology studio turning ambitious ideas into iconic brands, products, and digital experiences.
            </p>

            {/* Live Studio Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>STUDIO: ACCEPTING Q3/Q4 PARTNERSHIPS</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-gray-300 uppercase">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      audioService.playClick();
                      onNavigate(item.path);
                    }}
                    className="text-xs text-gray-400 hover:text-violet-300 font-mono transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-gray-300 uppercase">Disciplines</h4>
            <ul className="space-y-2">
              {serviceLinks.map((srv) => (
                <li key={srv.label}>
                  <button
                    onClick={() => {
                      audioService.playClick();
                      onNavigate(srv.path);
                    }}
                    className="text-xs text-gray-400 hover:text-violet-300 font-mono transition-colors text-left"
                  >
                    {srv.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter & Dispatch (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-gray-300 uppercase">Horizon Dispatch</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Curated essays on design systems, creative engineering, and market velocity. No spam.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#12141F] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 text-xs font-mono"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-mono transition-all flex items-center justify-center disabled:opacity-50"
                  aria-label="Subscribe to newsletter"
                >
                  {status === 'loading' ? (
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : status === 'success' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {feedbackMsg && (
                <p
                  className={`text-[11px] font-mono ${
                    status === 'success' ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {feedbackMsg}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Metadata & Social Bar */}
        <div className="pt-8 border-t border-white/6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} HORIZON STUDIO. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-violet-400 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ContactPortalScene } from '../scenes/ContactPortalScene';
import { CursorState } from '../types';
import { Mail, Github, Linkedin, FileText, Send, CheckCircle, Terminal, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  setCursorState: (state: CursorState) => void;
  onHoverSound: () => void;
  onClickSound: () => void;
  onNeuralSound: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  setCursorState,
  onHoverSound,
  onClickSound,
  onNeuralSound,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    onNeuralSound();
    setIsSent(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#06b6d4', '#a855f7', '#38bdf8', '#34d399'],
      });
    } catch {
      // Confetti fallback
    }

    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setIsSent(false);
    }, 6000);
  };

  const contactLinks = [
    {
      label: 'EMAIL DIRECT',
      href: 'mailto:jmnarayanah573@gmail.com',
      icon: Mail,
      detail: 'jmnarayanah573@gmail.com',
    },
    {
      label: 'GITHUB REPOSITORIES',
      href: 'https://github.com',
      icon: Github,
      detail: '@developer-ml',
    },
    {
      label: 'LINKEDIN NETWORK',
      href: 'https://linkedin.com',
      icon: Linkedin,
      detail: 'in/ai-ml-engineer',
    },
    {
      label: 'CURRICULUM VITAE',
      href: '#resume',
      icon: FileText,
      detail: 'PDF Download (2026)',
    },
  ];

  return (
    <section id="contact" className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        index="08"
        category="COMMUNICATIONS GATEWAY"
        title="LET'S BUILD SOMETHING INTELLIGENT"
        subtitle="Open for research collaborations, high-throughput machine learning infrastructure design, and engineering leadership."
        align="center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
        {/* Left 3D Portal Scene & Direct Links */}
        <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-panel-glow border border-cyan-500/30">
          <div className="relative w-full h-[280px] overflow-hidden rounded-xl bg-[#060910]/80">
            <ContactPortalScene />
            <div className="absolute top-3 left-3 font-mono text-[10px] text-cyan-400">
              // QUANTUM GATEWAY INTERFACE
            </div>
          </div>

          {/* Quick Connect Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClickSound}
                  onMouseEnter={() => {
                    onHoverSound();
                    setCursorState({ variant: 'open', text: 'CONNECT' });
                  }}
                  onMouseLeave={() => setCursorState({ variant: 'default', text: '' })}
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400 group transition-all"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase mt-2">
                    {link.label}
                  </div>
                  <div className="font-display font-semibold text-xs text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                    {link.detail}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Direct Transmission Form */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl glass-panel-glow border border-slate-800">
          <div className="flex items-center space-x-2 font-mono text-xs text-cyan-400 mb-4">
            <Terminal className="w-4 h-4" />
            <span>DIRECT PACKET DISPATCHER</span>
          </div>

          {isSent ? (
            <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 font-mono">
              <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
              <div className="text-emerald-300 font-bold text-base">
                PACKET TRANSMITTED SUCCESSFULLY
              </div>
              <p className="text-slate-400 text-xs font-sans">
                Signal acknowledged. Response will be dispatched to your endpoint shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-slate-400 mb-1 uppercase">YOUR NAME / ENTITY:</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Alex Mercer"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 uppercase">COMMUNICATION ENDPOINT (EMAIL):</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 uppercase">TRANSMISSION CONTENT:</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly describe project scope, research idea, or collaboration objectives..."
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                onMouseEnter={() => {
                  onHoverSound();
                  setCursorState({ variant: 'interact', text: 'SEND' });
                }}
                onMouseLeave={() => setCursorState({ variant: 'default', text: '' })}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:brightness-110 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>DISPATCH TRANSMISSION</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Terminal Disconnect Signature */}
      <div className="mt-20 pt-8 border-t border-slate-900 text-center font-mono text-xs text-slate-500 space-y-2">
        <div className="text-slate-400 tracking-widest uppercase">
          // END OF SYSTEM //
        </div>
        <div className="text-cyan-500/70 text-[11px]">
          [ CONNECTION TERMINATED // ALL PARAMETERS OPTIMIZED ]
        </div>
        <div className="text-[10px] text-slate-600 pt-4">
          DESIGNED & ENGINEERED WITH THREE.JS, TYPESCRIPT & TAILWIND • 2026
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { Sparkles, ArrowUp, Globe, Clock, ShieldCheck, Github, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenContact: (subject?: string) => void;
  onOpenAuth: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact, onOpenAuth }) => {
  const [times, setTimes] = useState({
    sf: '',
    london: '',
    tokyo: '',
    singapore: ''
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimes({
        sf: now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit' }),
        london: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' }),
        tokyo: now.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit' }),
        singapore: now.toLocaleTimeString('en-SG', { timeZone: 'Asia/Singapore', hour: '2-digit', minute: '2-digit' }),
      });
    };
    updateTimes();
    const interval = setInterval(updateTimes, 10000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-[#0A0A0B] text-slate-400 text-xs">
      {/* Top Banner: Global Atelier Clocks & Capacity */}
      <div className="border-b border-slate-900/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-slate-300 text-[11px] uppercase tracking-wider">
              STUDIO CAPACITY: 2 ENGAGEMENT PODS AVAILABLE FOR Q3/Q4
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] text-slate-400">
            <div>SF <span className="text-slate-200">{times.sf || '06:30 AM'}</span></div>
            <div>•</div>
            <div>LON <span className="text-slate-200">{times.london || '02:30 PM'}</span></div>
            <div>•</div>
            <div>TYO <span className="text-slate-200">{times.tokyo || '10:30 PM'}</span></div>
            <div>•</div>
            <div>SGP <span className="text-slate-200">{times.singapore || '09:30 PM'}</span></div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-800 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <span className="font-display font-black text-indigo-300 text-sm">A</span>
                </div>
              </div>
              <span className="font-display text-lg font-bold text-white tracking-wider">
                AURA DIGITAL ATELIER
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              We design and engineer category-defining software systems uniting autonomous AI orchestration, mathematically precise design systems, and resilient cloud architecture.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => onOpenContact()}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm hover:scale-[1.02]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book Discovery</span>
              </button>

              <button
                onClick={onOpenAuth}
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-colors"
              >
                Client Sign In
              </button>
            </div>
          </div>

          {/* Nav Column 1: Capabilities */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-[11px] text-slate-300 uppercase tracking-wider font-semibold">
              Architectural Capabilities
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-300 transition-colors">
                  Autonomous AI &amp; Agentic Systems
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-300 transition-colors">
                  Bespoke Design &amp; Motion Tokens
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-300 transition-colors">
                  Edge Cloud &amp; High-Throughput APIs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-300 transition-colors">
                  SOC2 Type II Hardening &amp; Zero-Trust
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-300 transition-colors">
                  Executive Tech Strategy Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Interactive Tools & Case Studies */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-[11px] text-slate-300 uppercase tracking-wider font-semibold">
              Platform &amp; Work
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('studio-engine')} className="text-indigo-300 hover:text-indigo-200 transition-colors font-medium flex items-center gap-1">
                  <span>Interactive Scope &amp; Pricing Engine</span>
                  <span className="text-[9px] font-mono px-1 rounded bg-indigo-500/20 text-indigo-300">LIVE</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('work')} className="hover:text-indigo-300 transition-colors">
                  Nexus Autonomous AI Engine
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('work')} className="hover:text-indigo-300 transition-colors">
                  Aethelgard Haute Horlogerie
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('work')} className="hover:text-indigo-300 transition-colors">
                  Vortex Autonomous Mobility Cloud
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-indigo-300 transition-colors">
                  Transparent Retainers &amp; Sprints
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Insights & Security */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-[11px] text-slate-300 uppercase tracking-wider font-semibold">
              Intelligence
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('insights')} className="hover:text-indigo-300 transition-colors">
                  Sub-100ms LLM Latency Loops
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('insights')} className="hover:text-indigo-300 transition-colors">
                  Mathematical UI Proportions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('insights')} className="hover:text-indigo-300 transition-colors">
                  Distributed Postgres &amp; Edge Core
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContact('Security & Mutual NDA Request')} className="hover:text-indigo-300 transition-colors">
                  Security &amp; Mutual NDA Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-slate-500 font-mono">
            © {new Date().getFullYear()} AURA DIGITAL ATELIER &amp; SYSTEMS INC. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

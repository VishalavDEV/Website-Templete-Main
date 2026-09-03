import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  ArrowUp,
  Send,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Globe,
  Share2,
  MessageSquare,
  Terminal,
  Code
} from 'lucide-react';
import { BRAND, NAV_LINKS } from '../data/landingData';
import { useToast } from './Toast';

export default function Footer({ onOpenContact }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { addToast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      addToast('Please enter a valid email address', 'error');
      return;
    }
    setIsSubscribed(true);
    addToast('Subscribed to AETHERIA Neural Research Digest!', 'success');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#05070a] border-t border-white/10 pt-20 pb-12 overflow-hidden text-slate-400 text-xs">
      {/* Subtle top glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 text-white shadow-md shadow-purple-500/30">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {BRAND.name}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold">
                {BRAND.badge}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
              The next-generation distributed spatial intelligence and autonomous cognitive agent orchestration platform for hyper-scale engineering teams.
            </p>

            {/* Operational Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All 320 Global PoPs Operational (8.4ms)</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              {[
                { icon: Globe, href: '#', label: 'Global Network' },
                { icon: Code, href: '#', label: 'Developer SDK' },
                { icon: MessageSquare, href: '#', label: 'Community Forum' },
                { icon: Terminal, href: '#', label: 'CLI & Docs' }
              ].map((soc, idx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    className="w-8 h-8 rounded-lg glass-panel-subtle flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-purple-500/40 transition-all cursor-pointer"
                    aria-label={soc.label}
                    title={soc.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions / Tech (Col 7-8) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Ecosystem
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  Neural Graph Architecture
                </a>
              </li>
              <li>
                <a href="#playground" className="hover:text-cyan-300 transition-colors">
                  Spatial Sandbox
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-cyan-300 transition-colors">
                  Production Case Studies
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Book Private Enclave
                </button>
              </li>
              <li>
                <a href="#stats" className="hover:text-cyan-300 transition-colors">
                  Live Global Telemetry
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Neural Research Digest
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Receive monthly peer-reviewed benchmarks on deterministic agent swarms and spatial computing.
            </p>

            {isSubscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Subscribed! Check inbox for latest paper.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter email address..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-purple-500 placeholder:text-slate-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl btn-primary text-xs font-semibold flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="text-[10px] text-slate-500 font-mono pt-1">
              Zero spam. Unsubscribe at any time with one click.
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} AETHERIA NEXUS Inc. All rights reserved. Post-Quantum Certified.
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-slate-300 transition-colors">Privacy Shield</a>
            <a href="#hero" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#hero" className="hover:text-slate-300 transition-colors">Security Enclave</a>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-lg glass-panel-subtle text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Back to Top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { PageRoute } from '../types';
import { 
  ArrowRight, 
  Check, 
  Terminal, 
  Shield, 
  Globe, 
  Lock,
  Mail,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute, slug?: string) => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInquiry }) => {
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setEmailSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pre-Footer Callout Banner */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-850 border border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase">
              Ready to Accelerate Engineering?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Have an ambitious AI or software project?
            </h3>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              We schedule discovery consultations within 24 hours. Connect with our principal systems architects to review feasibility, compute budgets, and sprint roadmaps.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              id="footer-start-project-btn"
              onClick={onOpenInquiry}
              className="px-6 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm shadow-md transition-all active:scale-98 cursor-pointer flex items-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition-colors cursor-pointer"
            >
              Contact Sales
            </button>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-slate-850">
          {/* Brand & Mission */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center shadow-xs">
                <div className="w-2.5 h-2.5 bg-white rotate-45"></div>
              </div>
              <span className="font-black text-white tracking-tighter text-xl font-display uppercase">
                KRAFT<span className="text-blue-500 font-normal">Lab</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-3 leading-relaxed">
              Premier technology agency engineering intelligent AI systems, resilient distributed backends, and digital products that move businesses forward.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Q3 Engagements</span>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About KRAFT
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our 7-Step Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careers')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  Careers
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 px-1 rounded">Hiring</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact &amp; Offices
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('client-portal')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Client Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('service-detail', 'ai-machine-learning')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  AI &amp; Machine Learning
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service-detail', 'generative-ai')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Generative AI &amp; Agents
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service-detail', 'software-development')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Enterprise Software
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service-detail', 'web-development')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Web &amp; Digital Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service-detail', 'automation')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Business Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service-detail', 'cloud-solutions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cloud &amp; DevOps
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('insights')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Technical Insights &amp; Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Case Studies &amp; Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admin-portal')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Admin CMS Preview
                </button>
              </li>
            </ul>
          </div>

          {/* Engineering Newsletter */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4">
              Engineering Dispatch
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Monthly architectural deep-dives on applied AI, RAG benchmarks, and distributed systems. No promotional noise.
            </p>
            {emailSubscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Subscribed to Engineering Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="architect@enterprise.com"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-750 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Metadata & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-6">
            <span>&copy; 2026 KRAFT AI &amp; Software Engineering. All rights reserved.</span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:inline">ISO 27001 Aligned &bull; SOC 2 Ready</span>
          </div>

          <div className="flex items-center gap-5">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">Security Protocol</span>
            <div className="flex items-center gap-3 ml-2 text-slate-400">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

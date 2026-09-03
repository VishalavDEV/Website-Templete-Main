import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Logo } from '../components/Logo';
import {
  ShieldCheck,
  Terminal,
  Send,
  ArrowRight,
  Globe,
  Lock,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  const {
    setIsConsultationModalOpen,
    setIsOperationsConsoleOpen,
    setIsSettingsOpen,
    addToast
  } = useApp();

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      addToast({
        type: 'warning',
        title: 'Valid Email Required',
        message: 'Please enter a valid corporate email for research briefings.'
      });
      return;
    }

    setSubscribed(true);
    addToast({
      type: 'success',
      title: 'Subscribed to Research Dispatch',
      message: 'You have been enrolled in our quarterly sovereign AI & architecture briefings.'
    });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08080A] border-t border-white/5 pt-16 pb-12 relative text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" showTagline={true} />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The sovereign enterprise intelligence platform. Empowering global enterprises with deterministic causal AI, autonomous multi-agent pipelines, and zero-leakage security.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] text-emerald-400">
                All Sovereign Clusters 100% Operational
              </span>
            </div>
          </div>

          {/* Col 2: Solutions Practice Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-white">
              Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('solutions')} className="hover:text-indigo-400 transition-colors">
                  Strategic Intelligence
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions')} className="hover:text-indigo-400 transition-colors">
                  Enterprise Architecture
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('automation')} className="hover:text-indigo-400 transition-colors">
                  Process Automation
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions')} className="hover:text-indigo-400 transition-colors">
                  Unified Data Fabric
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions')} className="hover:text-indigo-400 transition-colors">
                  Sovereign Cyber Defense
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Platform & Research */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-white">
              Platform & Labs
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('dashboard')} className="hover:text-indigo-400 transition-colors">
                  BI Telemetry
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('platform')} className="hover:text-indigo-400 transition-colors">
                  Causal AI Engine
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('features')} className="hover:text-indigo-400 transition-colors">
                  Capabilities Grid
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('insights')} className="hover:text-indigo-400 transition-colors">
                  Research Papers
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('case-studies')} className="hover:text-indigo-400 transition-colors">
                  Audited Case Studies
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Operational Console */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-white">
              Quarterly Research Dispatch
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Curated architectural blueprints, causal ML papers, and sovereign enterprise insights.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                ✓ Enrolled in Executive Briefings
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="corporate.email@enterprise.com"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-3.5 py-2 text-xs bg-[#0A0A0E] border border-white/10 rounded-full focus:outline-none focus:border-indigo-500 text-white placeholder-slate-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white hover:bg-slate-200 text-black font-bold rounded-full transition-colors shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={() => setIsOperationsConsoleOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors text-xs font-medium"
              >
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>Launch Operations Console</span>
              </button>
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors text-xs font-medium"
              >
                Preferences
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span>© 2026 NEXORA Technologies AG. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Sovereign Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Zero-Retention SLA</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Security Certifications</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

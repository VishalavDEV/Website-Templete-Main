import React from 'react';
import { ArrowUpRight, ArrowUp, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegalModal: (title: string, type: 'privacy' | 'terms' | 'cookies' | 'careers') => void;
  onSocialClick: (platform: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegalModal, onSocialClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-emerald-400 text-slate-950 flex items-center justify-center font-bold text-xs">
                VX
              </div>
              <div className="flex flex-col font-sans">
                <span className="text-base font-extrabold tracking-tight text-white uppercase">
                  VERTEX
                </span>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                  STRATEGY &amp; ADVISORY
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-sm">
              Executive business intelligence, multi-cloud software architecture, and generative AI systems built for market-leading enterprise clients.
            </p>

            <div className="pt-2 text-[10px] text-slate-500">
              © {new Date().getFullYear()} VERTEX STRATEGY LLC. SOC2 TYPE II &amp; ISO 27001 VERIFIED.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white">01 / NAVIGATION</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => onNavigate('about')} className="hover:text-emerald-400 transition-colors">01 / ABOUT</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-emerald-400 transition-colors">02 / SERVICES</button></li>
              <li><button onClick={() => onNavigate('strategy')} className="hover:text-emerald-400 transition-colors">03 / STRATEGY</button></li>
              <li><button onClick={() => onNavigate('performance')} className="hover:text-emerald-400 transition-colors">04 / PERFORMANCE</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white">02 / BRIEFS &amp; SCALE</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => onNavigate('case-studies')} className="hover:text-emerald-400 transition-colors">05 / CASE STUDIES</button></li>
              <li><button onClick={() => onNavigate('team')} className="hover:text-emerald-400 transition-colors">06 / TEAM</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:text-emerald-400 transition-colors">07 / SCALE</button></li>
              <li><button onClick={() => onNavigate('faq')} className="hover:text-emerald-400 transition-colors">08 / FAQ</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white">03 / GOVERNANCE</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => onOpenLegalModal('Privacy Policy', 'privacy')} className="hover:text-emerald-400 transition-colors">PRIVACY POLICY</button></li>
              <li><button onClick={() => onOpenLegalModal('Terms of Service', 'terms')} className="hover:text-emerald-400 transition-colors">TERMS OF SERVICE</button></li>
              <li><button onClick={() => onOpenLegalModal('Cookies Policy', 'cookies')} className="hover:text-emerald-400 transition-colors">COOKIE GOVERNANCE</button></li>
              <li><button onClick={() => onOpenLegalModal('Careers at Vertex', 'careers')} className="hover:text-emerald-400 transition-colors">CAREERS (WE'RE HIRING)</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center space-x-4 text-slate-400">
            <button onClick={() => onSocialClick('LinkedIn')} className="hover:text-emerald-400 uppercase">LINKEDIN</button>
            <span>•</span>
            <button onClick={() => onSocialClick('Twitter')} className="hover:text-emerald-400 uppercase">TWITTER</button>
            <span>•</span>
            <button onClick={() => onSocialClick('GitHub')} className="hover:text-emerald-400 uppercase">GITHUB</button>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center px-4 py-2 bg-slate-900 text-slate-300 hover:text-white border border-slate-800 transition-colors font-bold uppercase tracking-wider text-[11px]"
          >
            <span>TOP OF COMMAND CENTER</span>
            <ArrowUp className="w-3.5 h-3.5 ml-2 text-emerald-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};

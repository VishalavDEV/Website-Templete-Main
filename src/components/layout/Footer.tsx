import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS, SOCIAL_LINKS } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon } from '../common/Icons';

const iconMap: Record<string, React.ReactNode> = {
  Github: <GithubIcon className="w-4 h-4" />,
  Linkedin: <LinkedinIcon className="w-4 h-4" />,
  Twitter: <TwitterIcon className="w-4 h-4" />,
  Dribbble: <DribbbleIcon className="w-4 h-4" />,
};

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-slate-200 bg-slate-50/90 backdrop-blur-md pt-16 pb-12 overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-wider text-slate-900">
                {PERSONAL_INFO.brand}
              </span>
            </div>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Location */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
              Connect & Inquiries
            </h4>
            <p className="text-sm text-slate-600">
              {PERSONAL_INFO.location} · {PERSONAL_INFO.timezone}
            </p>
            <div className="flex items-center gap-2 pt-1">
              {SOCIAL_LINKS.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  className="w-9 h-9 rounded-xl glass-card border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-500/40 transition-all hover:-translate-y-1 shadow-sm"
                >
                  {iconMap[soc.icon] || <Sparkles className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" />
            <span>and React + Tailwind + Framer Motion.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-slate-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              All systems operational
            </span>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-card border border-slate-200 hover:border-blue-500/40 text-slate-700 hover:text-blue-600 transition-colors font-medium bg-white shadow-sm"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

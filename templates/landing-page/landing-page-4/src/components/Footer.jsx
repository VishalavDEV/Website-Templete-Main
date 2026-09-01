import React from 'react';
import { Zap, ArrowUp, Mail, Heart } from 'lucide-react';
import { FOOTER_COLUMNS } from '../data/navigation';

function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function TwitterIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 4l11.733 16h4.267l-11.733-16z" />
      <path d="M4 20l6.768-6.768m2.46-2.46L20 4" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function DiscordIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 6h0a14.5 14.5 0 0 0-4-1.5 9.6 9.6 0 0 0-.5 1 12.8 12.8 0 0 0-3 0 9.6 9.6 0 0 0-.5-1A14.5 14.5 0 0 0 6 6C3.5 10 3 14 3.5 18a14.8 14.8 0 0 0 4.5 2.3c.4-.5.7-1.1 1-1.7a9.2 9.2 0 0 1-1.5-.7c.1-.1.3-.2.4-.3a10.4 10.4 0 0 0 8.2 0c.1.1.3.2.4.3-.5.3-1 .5-1.5.7.3.6.6 1.2 1 1.7a14.8 14.8 0 0 0 4.5-2.3c.6-4.5.1-8.5-2.1-12z" />
      <circle cx="8.5" cy="12.5" r="1.5" />
      <circle cx="15.5" cy="12.5" r="1.5" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-20 pb-12 bg-[#040406] border-t border-white/[0.08] relative text-zinc-400 text-sm">
      <div className="container mx-auto px-4">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-16 border-b border-white/[0.06]">
          
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Zap className="w-4 h-4 text-black fill-black" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Flowzen</span>
            </a>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Build Better. Move Faster. The unified productivity and autonomous orchestration workspace for modern teams.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-amber-400 hover:bg-white/[0.08] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-amber-400 hover:bg-white/[0.08] transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-amber-400 hover:bg-white/[0.08] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-amber-400 hover:bg-white/[0.08] transition-colors"
                aria-label="Discord"
              >
                <DiscordIcon size={18} />
              </a>
            </div>
          </div>

          {/* 4 Link Columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="space-y-3.5">
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-white">
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-zinc-400 hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar: Copyright + Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Flowzen Technologies, Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Cookie Settings</a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-amber-400 transition-colors ml-2 cursor-pointer"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

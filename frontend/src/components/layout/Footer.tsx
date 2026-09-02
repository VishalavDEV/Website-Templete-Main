import React from 'react';
import { Aperture, ArrowUp, Mail, Lock } from 'lucide-react';
import { InstagramIcon, TwitterXIcon } from '../ui/SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090c] border-t border-white/10 pt-16 pb-12 text-[#c5c6c7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/5">
          {/* Col 1: Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#161b24] border border-[#66fcf1]/30 flex items-center justify-center text-[#66fcf1]">
                <Aperture className="w-4 h-4" />
              </div>
              <span className="font-['Syne'] font-bold text-lg tracking-wider text-white">
                LUMINA<span className="text-[#66fcf1]">FRAME</span>
              </span>
            </div>

            <p className="text-xs text-[#c5c6c7]/70 font-light max-w-sm leading-relaxed">
              Editorial photography, brutalist spatial architecture, and visual direction. Documenting light, form, and psychological stillness worldwide.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#66fcf1]/10 border border-white/10 hover:border-[#66fcf1]/40 flex items-center justify-center text-[#c5c6c7] hover:text-[#66fcf1] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#66fcf1]/10 border border-white/10 hover:border-[#66fcf1]/40 flex items-center justify-center text-[#c5c6c7] hover:text-[#66fcf1] transition-colors"
                aria-label="Twitter / X"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:studio@luminaframe.com"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#66fcf1]/10 border border-white/10 hover:border-[#66fcf1]/40 flex items-center justify-center text-[#c5c6c7] hover:text-[#66fcf1] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#66fcf1] block mb-2">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  01 // Showcase Intro
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  02 // Curated Works Grid
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  03 // Commission Rates
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  04 // Philosophy & Hardware
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  05 // Transmit Brief
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Client Portal Access (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#66fcf1] block mb-2">
              Private Client Access
            </span>
            <p className="text-xs text-[#c5c6c7]/70 font-light leading-relaxed">
              Commission clients and agency art directors may enter their private cryptographic passkey to view raw contact sheets and download master deliverables.
            </p>

            <div className="flex items-center gap-2">
              <input
                type="password"
                placeholder="Enter client passkey..."
                className="bg-[#12161f] border border-white/10 rounded-sm px-3 py-2 text-xs font-mono text-white placeholder-[#c5c6c7]/30 outline-none focus:border-[#66fcf1] flex-1"
              />
              <button
                onClick={() => alert('Client Proofing Portal: Demo environment active. Passkey authentication enabled for live productions.')}
                className="p-2 bg-white/5 hover:bg-[#66fcf1]/20 border border-white/10 hover:border-[#66fcf1]/40 rounded-sm text-[#66fcf1] transition-colors cursor-pointer"
                title="Unlock Client Portal"
              >
                <Lock className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Colophon & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#c5c6c7]/50">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} LuminaFrame Studio. All rights reserved.</span>
            <span>·</span>
            <span>Handcrafted with React & Framer Motion</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[#c5c6c7]/70 hover:text-[#66fcf1] transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#66fcf1]/50 group-hover:-translate-y-0.5 transition-all">
              <ArrowUp className="w-3 h-3 text-[#66fcf1]" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

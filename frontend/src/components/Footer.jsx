import React from 'react';
import { Layers, ArrowUp, Github, Twitter, Disc as Discord, Linkedin } from 'lucide-react';
import { footerLinks } from '../data/landingData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t pt-16 pb-12 relative overflow-hidden text-sm" style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border-color)', color: 'var(--text-sub)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 pb-14 border-b" style={{ borderColor: 'var(--border-color)' }}>
          
          {/* Brand Info (2 cols) */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl p-[1px]" style={{ background: 'linear-gradient(135deg, var(--accent-start), var(--accent-mid))' }}>
                <div className="w-full h-full rounded-[11px] flex items-center justify-center" style={{ backgroundColor: 'var(--bg-base)' }}>
                  <Layers className="w-5 h-5" style={{ color: 'var(--accent-mid)' }} />
                </div>
              </div>
              <span className="font-bold text-xl tracking-tight" style={{ color: 'var(--text-main)' }}>Aether</span>
            </a>

            <p className="text-xs sm:text-sm leading-relaxed max-w-sm" style={{ color: 'var(--text-sub)' }}>
              The next-gen cloud automation and product velocity platform. Multi-cloud deployment with zero latency and automated self-healing pipelines.
            </p>

            {/* Live Systems Operational Indicator */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-500 font-medium">All Systems Operational (99.999%)</span>
            </div>
          </div>

          {/* Column 1: Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 font-mono" style={{ color: 'var(--text-main)' }}>Product</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:underline transition-colors" style={{ color: 'var(--text-sub)' }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 font-mono" style={{ color: 'var(--text-main)' }}>Solutions</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:underline transition-colors" style={{ color: 'var(--text-sub)' }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 font-mono" style={{ color: 'var(--text-main)' }}>Resources</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:underline transition-colors" style={{ color: 'var(--text-sub)' }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 font-mono" style={{ color: 'var(--text-main)' }}>Company</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:underline transition-colors" style={{ color: 'var(--text-sub)' }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
            <span>© {new Date().getFullYear()} Aether Cloud Inc. All rights reserved.</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-lg glass-pill flex items-center justify-center transition-colors"
              style={{ color: 'var(--text-sub)' }}
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-8 h-8 rounded-lg glass-pill flex items-center justify-center transition-colors"
              style={{ color: 'var(--text-sub)' }}
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              className="w-8 h-8 rounded-lg glass-pill flex items-center justify-center transition-colors"
              style={{ color: 'var(--text-sub)' }}
            >
              <Discord className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg glass-pill flex items-center justify-center transition-colors"
              style={{ color: 'var(--text-sub)' }}
            >
              <Linkedin className="w-4 h-4" />
            </a>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="ml-3 p-2 rounded-lg glass-pill flex items-center gap-1.5 transition-colors"
              style={{ color: 'var(--text-main)' }}
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

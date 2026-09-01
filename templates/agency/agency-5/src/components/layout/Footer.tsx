import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMsg('Please enter a valid work email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <footer className="bg-[var(--surface-color)] text-[var(--text-color)] border-t border-[var(--border-color)] pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Top Grid: Newsletter & Quick Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[var(--border-color)]">
          {/* Brand Tagline */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-4xl md:text-6xl font-black tracking-tighter uppercase font-display block">
              BYTEORA<span className="text-[var(--accent-color)]">.</span>
            </span>
            <p className="text-xl md:text-2xl font-bold uppercase tracking-wider text-[var(--accent-color)] font-mono">
              WE BUILD WHAT'S NEXT.
            </p>
            <p className="text-base text-[var(--secondary-color)] max-w-md leading-relaxed font-light">
              An independent digital agency engineering high-throughput spatial web applications, 3D brand identity systems, and enterprise product experiences.
            </p>
          </div>

          {/* Newsletter Signup Form */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--text-color)]">
              // Subscribe to Journal & Insights
            </h3>
            <p className="text-sm text-[var(--secondary-color)]">
              Bi-weekly dispatches on WebGL graphics, AI interface design, and modern brand architecture. Zero spam.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your work email..."
                  className="flex-1 bg-[var(--input-bg)] border border-[var(--border-color)] rounded-full px-6 py-3.5 text-sm text-[var(--text-color)] placeholder-[var(--secondary-color)] focus:outline-none focus:border-[var(--accent-color)] transition-colors duration-200"
                />
                <Button type="submit" variant="primary" size="md" isLoading={status === 'loading'} className="w-full sm:w-auto">
                  <span>Subscribe</span>
                </Button>
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--accent-color)] font-mono pt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Welcome aboard! You have been added to our dispatch list.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-xs font-semibold text-rose-500 font-mono pt-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errorMsg}</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Middle Navigation Sitemap */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm">
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--accent-color)]">
              Core Pages
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-[var(--secondary-color)] hover:text-[var(--text-color)] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-[var(--secondary-color)] hover:text-[var(--text-color)] transition-colors">Studio & Story</Link></li>
              <li><Link to="/services" className="text-[var(--secondary-color)] hover:text-[var(--text-color)] transition-colors">Services Overview</Link></li>
              <li><Link to="/portfolio" className="text-[var(--secondary-color)] hover:text-[var(--text-color)] transition-colors">Selected Work</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--accent-color)]">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/pricing" className="text-[var(--secondary-color)] hover:text-[var(--text-color)] transition-colors">Pricing & Plans</Link></li>
              <li><Link to="/team" className="text-[var(--secondary-color)] hover:text-[var(--text-color)] transition-colors">Leadership & Team</Link></li>
              <li><Link to="/testimonials" className="text-[var(--secondary-color)] hover:text-[var(--text-color)] transition-colors">Client Reviews</Link></li>
              <li><Link to="/blog" className="text-[var(--secondary-color)] hover:text-[var(--text-color)] transition-colors">Journal Articles</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--accent-color)]">
              Global Hubs
            </h4>
            <ul className="space-y-2.5 text-[var(--secondary-color)] font-mono text-xs">
              <li>Tokyo — Minato City</li>
              <li>Zurich — Paradeplatz</li>
              <li>New York — Soho Studio</li>
              <li>London — Shoreditch</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--accent-color)]">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[var(--secondary-color)] hover:text-[var(--text-color)] transition-colors">
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[var(--secondary-color)] hover:text-[var(--text-color)] transition-colors">
                  <span>Twitter / X</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[var(--secondary-color)] hover:text-[var(--text-color)] transition-colors">
                  <span>Dribbble</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://behance.net" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[var(--secondary-color)] hover:text-[var(--text-color)] transition-colors">
                  <span>Behance</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--accent-color)]">
              Inquiries
            </h4>
            <p className="text-xs text-[var(--secondary-color)] font-mono leading-relaxed">
              hello@byteora.agency<br />
              +1 (800) 482-9381
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--accent-color)] hover:underline"
            >
              <span>Schedule Call →</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--border-color)] text-xs text-[var(--secondary-color)] font-mono">
          <div>
            © {new Date().getFullYear()} BYTEORA AGENCY INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-[var(--text-color)] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[var(--text-color)] transition-colors">Terms of Service</Link>
            <Link to="/404" className="hover:text-[var(--text-color)] transition-colors">System Status</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

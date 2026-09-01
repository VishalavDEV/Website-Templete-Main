import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Copy, Check, Heart } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { showToast } from './Toast';

export const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const navigate = useNavigate();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@valence.studio');
    setCopiedEmail(true);
    showToast('Email Copied', 'hello@valence.studio copied to clipboard');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative z-10 bg-warm-white border-t border-ink-border pt-20 pb-12 px-6 sm:px-12 mt-24">
        <div className="max-w-7xl mx-auto">
          {/* Top Big Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-ink-border">
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
                08 — COLLABORATION
              </span>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink-primary uppercase leading-[0.95]">
                LET&rsquo;S MAKE <br />
                <span className="text-accent-coral">SOMETHING</span> <br />
                WORTH REMEMBERING.
              </h2>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
              <p className="text-base text-ink-secondary leading-relaxed">
                Whether defining a breakthrough brand, engineering an immersive 3D digital interface, or launching a global campaign, we partner with visionary teams.
              </p>

              <div className="space-y-4">
                <MagneticButton
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  onClick={() => navigate('/contact')}
                >
                  START A PROJECT BRIEF
                  <ArrowUpRight className="w-4 h-4" />
                </MagneticButton>

                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-ink-border text-xs font-mono uppercase text-ink-secondary hover:text-ink-primary hover:border-ink-primary transition-all bg-paper/60"
                  aria-label="Copy agency email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-accent-coral" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'COPIED: HELLO@VALENCE.STUDIO' : 'HELLO@VALENCE.STUDIO'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Middle Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-ink-border text-sm">
            {/* Nav */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-muted">Navigation</h3>
              <ul className="space-y-2.5">
                {[
                  { name: 'Selected Work', path: '/work' },
                  { name: 'Capabilities & Services', path: '/services' },
                  { name: 'Studio & Philosophy', path: '/studio' },
                  { name: 'Editorial Insights', path: '/insights' },
                  { name: 'Contact & Inquiry', path: '/contact' },
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-ink-secondary hover:text-accent-coral transition-colors flex items-center gap-1 group"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disciplines */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-muted">Disciplines</h3>
              <ul className="space-y-2.5 text-ink-secondary text-xs">
                <li>Brand Strategy & Positioning</li>
                <li>Variable Visual Identity</li>
                <li>Digital Systems & UI/UX</li>
                <li>3D Motion Choreography</li>
                <li>WebGL & Creative Code</li>
              </ul>
            </div>

            {/* Locations */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-muted">Global Presence</h3>
              <div className="space-y-3 text-xs text-ink-secondary">
                <div>
                  <p className="font-semibold text-ink-primary">Zurich (Studio Hub)</p>
                  <p>Neugasse 29, 8005 Zürich</p>
                </div>
                <div>
                  <p className="font-semibold text-ink-primary">Tokyo</p>
                  <p>Minami-Aoyama, Minato-ku</p>
                </div>
                <div>
                  <p className="font-semibold text-ink-primary">London</p>
                  <p>Clerkenwell Close, EC1R</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-muted">Connect</h3>
              <ul className="space-y-2.5">
                {[
                  { name: 'Instagram', url: 'https://instagram.com' },
                  { name: 'Twitter / X', url: 'https://twitter.com' },
                  { name: 'LinkedIn', url: 'https://linkedin.com' },
                  { name: 'Awwwards', url: 'https://awwwards.com' },
                  { name: 'GitHub', url: 'https://github.com' },
                ].map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-secondary hover:text-accent-coral transition-colors flex items-center gap-1 group"
                    >
                      <span>{s.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} VALENCE CREATIVE STUDIO.</span>
              <span className="hidden sm:inline">ALL RIGHTS RESERVED.</span>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setLegalModal('privacy')}
                className="hover:text-ink-primary transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setLegalModal('terms')}
                className="hover:text-ink-primary transition-colors underline-offset-4 hover:underline"
              >
                Terms of Engagement
              </button>
              <button
                onClick={scrollToTop}
                className="hover:text-accent-coral transition-colors uppercase flex items-center gap-1"
                aria-label="Scroll back to top"
              >
                <span>TOP ↑</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Information Modal */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-primary/50 backdrop-blur-sm"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="w-full max-w-lg glass-panel-strong rounded-2xl p-6 shadow-glass-elevated border border-ink-border space-y-4 animate-scaleUp max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-ink-border pb-3">
              <h4 className="font-display font-bold uppercase text-lg text-ink-primary">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Engagement'}
              </h4>
              <button
                onClick={() => setLegalModal(null)}
                className="text-ink-muted hover:text-ink-primary font-mono text-xs"
              >
                CLOSE [X]
              </button>
            </div>
            <div className="text-xs text-ink-secondary space-y-3 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    VALENCE Studio respects client and visitor confidentiality. We collect minimal telemetry strictly to maintain high frame-rate performance and deliver project brief responses.
                  </p>
                  <p>
                    All project briefs submitted through our platform are encrypted in transit and stored locally on your device or in our secure client CRM. We do not sell or broker personal data.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All intellectual property, bespoke typography matrices, and design guidelines become client property upon full milestone completion as stipulated in our Master Services Agreement (MSA).
                  </p>
                  <p>
                    Sprint bookings require a 50% commitment deposit prior to workshop kickoff. Retainers are billed monthly with 30-day notice.
                  </p>
                </>
              )}
            </div>
            <MagneticButton
              variant="outline"
              size="sm"
              className="w-full justify-center"
              onClick={() => setLegalModal(null)}
            >
              UNDERSTOOD
            </MagneticButton>
          </div>
        </div>
      )}
    </>
  );
};

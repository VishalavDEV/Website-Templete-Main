import React, { useEffect } from 'react';
import { Sparkles, MapPin, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { ProjectBriefForm } from '../components/forms/ProjectBriefForm';
import { useInquiries } from '../hooks/useInquiries';

export const ContactPage: React.FC = () => {
  const { inquiries } = useInquiries();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-10 pt-32 sm:pt-40 pb-24 px-6 sm:px-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CONTACT & PROJECT INITIATION</span>
        </div>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-ink-primary uppercase leading-[0.95]">
          LET&rsquo;S BUILD <br />
          <span className="text-stroke-strong">TOGETHER.</span>
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-ink-secondary leading-relaxed">
          Tell us about your brand challenge, timeline, and vision. We will review your submission and reply with initial thoughts and availability within 24 hours.
        </p>
      </div>

      {/* Main Grid: Form + Studio Particulars */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <ProjectBriefForm />
        </div>

        {/* Sidebar: Studio Hubs & Info */}
        <div className="lg:col-span-4 space-y-6">
          {/* Direct Channels */}
          <div className="glass-panel p-6 rounded-2xl border border-ink-border space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-coral font-semibold block">
              DIRECT CHANNELS
            </span>
            <div className="space-y-3 text-xs font-mono">
              <a
                href="mailto:hello@valence.studio"
                className="flex items-center gap-2.5 text-ink-primary hover:text-accent-coral transition-colors"
              >
                <Mail className="w-4 h-4 text-accent-coral" />
                <span>hello@valence.studio</span>
              </a>
              <div className="flex items-center gap-2.5 text-ink-secondary">
                <Clock className="w-4 h-4 text-accent-coral" />
                <span>Response Time: &lt; 24h (Mon–Fri)</span>
              </div>
            </div>
          </div>

          {/* Global Locations */}
          <div className="glass-panel p-6 rounded-2xl border border-ink-border space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-coral font-semibold block">
              STUDIO HUBS
            </span>
            <div className="space-y-4 text-xs font-mono text-ink-secondary">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-coral shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-ink-primary block">ZURICH (HEADQUARTERS)</span>
                  <span>Neugasse 29, 8005 Zürich, Switzerland</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-coral shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-ink-primary block">TOKYO (LAB)</span>
                  <span>Minami-Aoyama 4-chome, Minato-ku, Tokyo</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-coral shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-ink-primary block">LONDON</span>
                  <span>Clerkenwell Close, London EC1R 0AT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Past Submissions Tracker (LocalStorage) */}
          {inquiries.length > 0 && (
            <div className="glass-panel p-6 rounded-2xl border border-ink-border space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-muted block">
                YOUR RECENT INQUIRIES ({inquiries.length})
              </span>
              <div className="space-y-2">
                {inquiries.slice(0, 3).map((inq) => (
                  <div key={inq.id} className="p-3 rounded-lg bg-paper border border-ink-border text-xs font-mono space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-accent-coral">{inq.id}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-warm-white text-ink-primary">
                        {inq.status}
                      </span>
                    </div>
                    <p className="text-ink-secondary truncate">{inq.projectType} • {inq.budget}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

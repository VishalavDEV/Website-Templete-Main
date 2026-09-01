import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, X, ExternalLink } from 'lucide-react';
import teamData from '../../data/team.json';
import { TeamMember } from '../../types';
import { MagneticButton } from '../common/MagneticButton';

export const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const team = teamData as TeamMember[];

  return (
    <section id="team" className="relative z-10 py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto border-t border-ink-border">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 border-b border-ink-border gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 — LEADERSHIP</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-ink-primary uppercase">
            DIRECTORS & <span className="text-stroke-strong">MASTERS</span>
          </h2>
        </div>
        <p className="max-w-md text-sm text-ink-secondary leading-relaxed">
          Led by award-winning practitioners across brand strategy, spatial interaction, and creative engineering.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
        {team.map((member) => (
          <div
            key={member.id}
            onClick={() => setSelectedMember(member)}
            className="group glass-panel rounded-2xl p-4 border border-ink-border cursor-pointer hover:border-accent-coral/40 transition-all duration-300"
            data-cursor="VIEW"
            data-cursor-text="BIO"
          >
            <div className="overflow-hidden rounded-xl aspect-[4/5] bg-paper relative">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-mono text-warm-white flex items-center gap-1">
                  <span>VIEW FULL BIO</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-coral" />
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-xl uppercase text-ink-primary group-hover:text-accent-coral transition-colors">
                  {member.name}
                </h3>
              </div>
              <p className="text-xs font-mono text-ink-secondary">{member.role}</p>
              <p className="text-[11px] font-mono text-accent-coral">{member.specialty}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Team Member Bio Modal */}
      {selectedMember && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-primary/60 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="w-full max-w-xl glass-panel-strong rounded-3xl p-6 sm:p-8 shadow-glass-elevated border border-ink-border space-y-6 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent-coral"
                />
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase text-ink-primary">
                    {selectedMember.name}
                  </h3>
                  <p className="text-xs font-mono text-accent-coral">{selectedMember.role}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="p-1 rounded-full text-ink-muted hover:text-ink-primary"
                aria-label="Close bio modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-sm text-ink-secondary leading-relaxed border-y border-ink-border py-4">
              <p className="font-medium text-ink-primary">{selectedMember.bio}</p>
              <p className="text-xs font-mono text-ink-muted">Specialty Discipline: {selectedMember.specialty}</p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                {selectedMember.socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-ink-secondary hover:text-accent-coral flex items-center gap-1"
                  >
                    <span>{s.platform}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>

              <MagneticButton
                variant="outline"
                size="sm"
                onClick={() => setSelectedMember(null)}
              >
                CLOSE
              </MagneticButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

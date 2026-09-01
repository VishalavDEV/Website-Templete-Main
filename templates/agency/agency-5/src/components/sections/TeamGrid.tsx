import React, { useState } from 'react';
import { team } from '../../data/team';
import { SectionHeading } from '../ui/SectionHeading';
import { Modal } from '../ui/Modal';
import type { TeamMember } from '../../types';
import { Globe, Share2, ExternalLink, Code, ArrowUpRight } from 'lucide-react';
import { useCustomCursor } from '../../hooks/useCustomCursor';

export const TeamGrid: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const { setCursorHover, resetCursor } = useCustomCursor();

  return (
    <section className="py-24 bg-[var(--bg-color)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <SectionHeading
          number="07"
          badge="LEADERSHIP & CREATIVE ARCHITECTS"
          title="MEET THE CRAFTSMEN BEHIND BYTEORA."
          align="split"
          description="A tight-knit collective of senior designers, WebGL engineers, and brand strategists with backgrounds at Apple, Pentagram, and McKinsey."
        />

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              onMouseEnter={() => setCursorHover('VIEW BIO')}
              onMouseLeave={resetCursor}
              className="group cursor-pointer space-y-4 rounded-2xl p-4 bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all duration-300"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-black">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-mono font-bold text-[var(--accent-color)] flex items-center gap-1 uppercase">
                    <span>Read Full Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors uppercase font-display">
                  {member.name}
                </h3>
                <p className="text-xs text-[var(--secondary-color)] font-mono">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Member Bio Modal */}
      {selectedMember && (
        <Modal
          isOpen={Boolean(selectedMember)}
          onClose={() => setSelectedMember(null)}
          title={selectedMember.name}
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-5 aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold text-[var(--accent-color)] uppercase block">
                {selectedMember.role}
              </span>
              <p className="text-base text-[var(--text-color)] leading-relaxed font-light">
                {selectedMember.bio}
              </p>

              {/* Social Links */}
              <div className="flex gap-4 pt-4 border-t border-[var(--border-color)]">
                {selectedMember.socials.linkedin && (
                  <a href={selectedMember.socials.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className="p-2 rounded-full border border-[var(--border-color)] hover:border-[var(--accent-color)] text-[var(--text-color)]">
                    <Globe className="w-4 h-4" />
                  </a>
                )}
                {selectedMember.socials.twitter && (
                  <a href={selectedMember.socials.twitter} target="_blank" rel="noreferrer" title="Twitter" className="p-2 rounded-full border border-[var(--border-color)] hover:border-[var(--accent-color)] text-[var(--text-color)]">
                    <Share2 className="w-4 h-4" />
                  </a>
                )}
                {selectedMember.socials.github && (
                  <a href={selectedMember.socials.github} target="_blank" rel="noreferrer" title="GitHub" className="p-2 rounded-full border border-[var(--border-color)] hover:border-[var(--accent-color)] text-[var(--text-color)]">
                    <Code className="w-4 h-4" />
                  </a>
                )}
                {selectedMember.socials.dribbble && (
                  <a href={selectedMember.socials.dribbble} target="_blank" rel="noreferrer" title="Dribbble" className="p-2 rounded-full border border-[var(--border-color)] hover:border-[var(--accent-color)] text-[var(--text-color)]">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

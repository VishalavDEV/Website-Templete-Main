import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'motion/react';
import { ArrowUpRight, ChevronDown, Sparkles, MapPin, Award, ExternalLink, X } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../../data/teamData';
import { CursorType } from '../../types';

interface TeamIndexProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const TeamIndex: React.FC<TeamIndexProps> = ({ setCursorType }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);
  const [expandedMemberId, setExpandedMemberId] = useState<string | null>(null);
  const [selectedMemberModal, setSelectedMemberModal] = useState<TeamMember | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Motion springs for smooth cursor-following floating portrait on desktop
  const springConfig = { damping: 24, stiffness: 220, mass: 0.5 };
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop) return;
    const x = e.clientX;
    const y = e.clientY;
    setMousePos({ x, y });
    springX.set(x + 28);
    springY.set(y - 180);
  };

  const disciplines = ['ALL', 'Creative', 'Strategy', 'Design', 'Technology', 'Motion', 'Content', 'Production'];

  const filteredMembers = activeFilter === 'ALL'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter((m) => m.discipline.toLowerCase() === activeFilter.toLowerCase());

  const toggleAccordion = (id: string) => {
    setExpandedMemberId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="team-index-section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-24 sm:py-36 bg-[#080808] border-t border-[#ffffff10] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-[#0066FF]/[0.025] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        {/* Header & Filter Controls */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between gap-4 border-b border-[#ffffff15] pb-6"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
                TEAM DIRECTORY // INDEX
              </span>
            </div>

            <span className="font-mono text-xs text-[#888888] tracking-widest uppercase">
              {filteredMembers.length} PRACTITIONERS
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#FAF9F6] leading-none"
              >
                THE STUDIO <br />
                <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.1em]">
                  index.
                </span>
              </motion.h2>
            </div>

            {/* Discipline Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 pt-4 md:pt-0"
            >
              {disciplines.map((disc) => {
                const count = disc === 'ALL'
                  ? TEAM_MEMBERS.length
                  : TEAM_MEMBERS.filter((m) => m.discipline.toLowerCase() === disc.toLowerCase()).length;

                const isActive = activeFilter === disc;

                return (
                  <button
                    key={disc}
                    onClick={() => setActiveFilter(disc)}
                    onMouseEnter={() => setCursorType('pointer')}
                    onMouseLeave={() => setCursorType('default')}
                    className={`px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-[#FAF9F6] text-black font-semibold'
                        : 'bg-white/[0.03] text-[#888888] hover:text-[#FAF9F6] border border-[#ffffff10] hover:border-white/20'
                    }`}
                  >
                    <span>{disc}</span>
                    <span className={`text-[9px] ${isActive ? 'text-black/60' : 'text-[#888888]'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Interactive Editorial Hover Index with Floating Portrait     */}
        {/* ========================================================================= */}
        <div className="hidden lg:block space-y-0 border-t border-[#ffffff15]">
          {filteredMembers.map((member, idx) => {
            const isHovered = hoveredMember?.id === member.id;
            const hasAnyHover = hoveredMember !== null;

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.03 }}
                onMouseEnter={() => {
                  setHoveredMember(member);
                  setCursorType('project', 'PROFILE ↗');
                }}
                onMouseLeave={() => {
                  setHoveredMember(null);
                  setCursorType('default');
                }}
                onClick={() => setSelectedMemberModal(member)}
                className={`group relative py-7 border-b border-[#ffffff15] transition-all duration-300 cursor-pointer flex items-center justify-between ${
                  hasAnyHover && !isHovered ? 'opacity-25 blur-[0.4px]' : 'opacity-100'
                }`}
              >
                {/* Left: Number & Name */}
                <div className="flex items-center gap-8 xl:gap-12">
                  <span className="font-mono text-xs text-[#888888] tracking-widest uppercase transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0066FF]">
                    {member.number}
                  </span>

                  <h3 className="font-display text-3xl xl:text-4xl font-extrabold uppercase tracking-tight text-[#FAF9F6] transition-colors duration-300 group-hover:text-white">
                    {member.name}
                  </h3>
                </div>

                {/* Center: Role & Discipline Tag */}
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-[#888888] uppercase tracking-wider group-hover:text-[#FAF9F6] transition-colors">
                    {member.role}
                  </span>

                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase border border-white/10 text-[#888888] group-hover:border-[#0066FF]/40 group-hover:text-[#0066FF] transition-colors">
                    {member.discipline}
                  </span>
                </div>

                {/* Right: Location & Hover Arrow */}
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-[#888888] tracking-wider uppercase">
                    {member.location}
                  </span>

                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#888888] group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Portrait Reveal Canvas (Desktop Follower) */}
        {isDesktop && (
          <AnimatePresence>
            {hoveredMember && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.85, rotate: 2 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'fixed',
                  left: springX,
                  top: springY,
                  pointerEvents: 'none',
                  zIndex: 50,
                }}
                className="w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-[#111111]"
              >
                <img
                  src={hoveredMember.image}
                  alt={hoveredMember.name}
                  className="w-full h-full object-cover grayscale-[10%] contrast-[115%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#0066FF] font-bold block">
                    {hoveredMember.discipline} &bull; {hoveredMember.experienceYears}
                  </span>
                  <p className="text-xs text-white font-medium truncate mt-0.5">
                    {hoveredMember.role}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* ========================================================================= */}
        {/* MOBILE / TABLET VIEW: Elegant Accordion List with Tap Expansion          */}
        {/* ========================================================================= */}
        <div className="lg:hidden space-y-3 border-t border-[#ffffff15] pt-4">
          {filteredMembers.map((member) => {
            const isExpanded = expandedMemberId === member.id;

            return (
              <div
                key={member.id}
                className="border border-[#ffffff15] rounded-xl bg-white/[0.02] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(member.id)}
                  onMouseEnter={() => setCursorType('pointer')}
                  onMouseLeave={() => setCursorType('default')}
                  className="w-full p-5 flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#0066FF] font-bold">
                        {member.number}
                      </span>
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#FAF9F6]">
                        {member.name}
                      </h3>
                    </div>
                    <p className="text-xs font-mono text-[#888888] tracking-wide uppercase pl-7">
                      {member.role}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest uppercase border border-white/10 text-[#888888]">
                      {member.discipline}
                    </span>
                    <div className={`p-1.5 rounded-full bg-white/5 text-white transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-[#0066FF]' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-white/5 space-y-6">
                        {/* Member Portrait */}
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden mt-4 border border-white/10">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white">
                            {member.experienceYears}
                          </div>
                        </div>

                        {/* Bio */}
                        <p className="text-sm text-[#A1A1AA] leading-relaxed">
                          {member.bio}
                        </p>

                        {/* Specialties Chips */}
                        <div className="space-y-2">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888] block">
                            Key Competencies
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {member.specialties.map((spec) => (
                              <span
                                key={spec}
                                className="px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider text-white/90 bg-white/5 border border-white/10"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Meta strip & Action */}
                        <div className="flex items-center justify-between pt-2 text-xs font-mono text-[#888888]">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
                            <span>{member.location}</span>
                          </div>

                          <button
                            onClick={() => setSelectedMemberModal(member)}
                            className="inline-flex items-center gap-1 text-[#0066FF] hover:underline"
                          >
                            <span>Full Profile</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Member Profile Modal (Accessible for both Desktop and Mobile) */}
      <AnimatePresence>
        {selectedMemberModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMemberModal(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-[#0F0F12] border border-white/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMemberModal(null)}
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
                className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white z-20 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                {/* Left Portrait Column */}
                <div className="md:col-span-5 relative aspect-[3/4] md:aspect-auto min-h-[320px] bg-[#1a1a1f]">
                  <img
                    src={selectedMemberModal.image}
                    alt={selectedMemberModal.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12] md:bg-gradient-to-r md:from-transparent md:to-[#0F0F12] opacity-80" />

                  <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-widest text-[#0066FF]">
                    {selectedMemberModal.number} // {selectedMemberModal.discipline}
                  </div>
                </div>

                {/* Right Details Column */}
                <div className="md:col-span-7 p-6 sm:p-8 md:p-10 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                        {selectedMemberModal.name}
                      </h3>
                      <p className="text-sm font-mono text-[#0066FF] uppercase tracking-wider mt-1">
                        {selectedMemberModal.role}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                      {selectedMemberModal.bio}
                    </p>

                    {/* Competencies */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888] block">
                        Core Competencies & Expertise
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedMemberModal.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="px-3 py-1 rounded-full text-xs font-mono tracking-wider text-white bg-white/5 border border-white/10"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Meta stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
                      <div>
                        <span className="text-[10px] text-[#888888] uppercase block tracking-wider">Base Studio</span>
                        <span className="text-white font-medium">{selectedMemberModal.location}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#888888] uppercase block tracking-wider">Industry Track</span>
                        <span className="text-white font-medium">{selectedMemberModal.experienceYears}</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Social link */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#888888]">Direct Connectivity</span>
                    <a
                      href={selectedMemberModal.social.linkedin || 'https://linkedin.com'}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#0066FF] hover:underline"
                    >
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

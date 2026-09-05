import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Globe, Share2, ExternalLink, MessageCircle } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

export default function Team() {
  const { setCursorState } = useCursor();

  const members = [
    {
      name: 'Alex Carter',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Maya Chen',
      role: 'UI/UX Lead Designer',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Daniel Lee',
      role: 'Lead Frontend Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Sofia Martin',
      role: 'Brand Strategist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Ryan Walker',
      role: 'Motion Graphics Designer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Emma Taylor',
      role: 'Head of Growth & Marketing',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const socialIcons = [Globe, Share2, ExternalLink, MessageCircle];

  return (
    <section id="team" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#05070f] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="MEET THE CREATORS"
          title="THE MINDS BEHIND THE EXPERIENCES"
          description="A multidisciplinary team of designers, engineers, and strategists obsessed with perfection."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {members.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => setCursorState('button')}
              onMouseLeave={() => setCursorState('default')}
              className="group relative glass-panel rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 h-[360px] sm:h-[420px] flex flex-col justify-between p-5 sm:p-6 cursor-pointer"
            >
              {/* Portrait Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${member.image})` }}
              />

              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] via-[#05070f]/50 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-90" />

              {/* Top Role Badge */}
              <div className="relative z-10">
                <span className="text-[10px] sm:text-xs font-mono tracking-widest text-cyan-400 bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-cyan-500/30">
                  {member.role}
                </span>
              </div>

              {/* Bottom Details & Sliding Social Icons */}
              <div className="relative z-10 space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-syne font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h3>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2 opacity-90 sm:opacity-0 sm:translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {socialIcons.map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-cyan-400 hover:text-black text-white flex items-center justify-center transition-all duration-300"
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

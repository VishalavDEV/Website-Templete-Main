import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from '../motion/MagneticButton';
import { MotionTiltCard } from '../cards/MotionTiltCard';
import { Globe, BookOpen, Sparkles, ArrowUpRight, Share2, ExternalLink } from 'lucide-react';

export function AuthorProfileCard({ author, className = '' }) {
  return (
    <MotionTiltCard tiltStrength={12} className={`w-full ${className}`}>
      {({ isHovered }) => (
        <div className="glass-card rounded-3xl p-6 sm:p-8 bg-white/95 border border-white/80 flex flex-col justify-between h-full group relative overflow-hidden">
          {/* Top Avatar with 3D Pop-out Extrusion */}
          <div className="flex items-start justify-between mb-6">
            <div className="relative perspective-[600px]">
              <motion.div
                animate={{
                  scale: isHovered ? 1.12 : 1,
                  y: isHovered ? -6 : 0,
                }}
                transition={{ type: 'spring', damping: 15, stiffness: 200 }}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-[3px] bg-gradient-to-tr from-[#0055FF] via-[#7000FF] to-[#FF5E3A] shadow-xl relative z-10"
              >
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-full h-full object-cover rounded-[13px]"
                />
              </motion.div>
              {/* Diffused Underglow Shadow */}
              <div className="absolute inset-0 bg-[#0055FF]/20 rounded-2xl blur-xl transition-opacity duration-300 group-hover:opacity-100 opacity-40 -z-10" />
            </div>

            <div className="flex items-center gap-1.5 bg-[#F3F4F6] px-3 py-1 rounded-full text-[0.6875rem] font-mono font-bold text-[#111827]">
              <BookOpen className="w-3.5 h-3.5 text-[#0055FF]" />
              <span>{author.articlesCount} Monographs</span>
            </div>
          </div>

          {/* Author Bio & Details */}
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0055FF]">
              {author.role}
            </span>

            <h3 className="font-heading font-black text-xl sm:text-2xl text-[#111827] group-hover:text-[#0055FF] transition-colors">
              {author.name}
            </h3>

            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              {author.bio}
            </p>
          </div>

          {/* Magnetic Social Icons */}
          <div className="flex items-center justify-between pt-6 border-t border-[#F3F4F6] mt-6">
            <span className="font-mono text-[0.6875rem] text-[#9CA3AF]">
              {author.location}
            </span>

            <div className="flex items-center gap-2">
              <MagneticButton strength={0.3}>
                <a
                  href="#x"
                  className="w-8 h-8 rounded-full bg-[#F3F4F6] hover:bg-[#0055FF] hover:text-white text-[#6B7280] flex items-center justify-center transition-colors shadow-xs"
                  title="Social Wire"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <a
                  href="#folio"
                  className="w-8 h-8 rounded-full bg-[#F3F4F6] hover:bg-[#0055FF] hover:text-white text-[#6B7280] flex items-center justify-center transition-colors shadow-xs"
                  title="Academic Portfolio"
                >
                  <Globe className="w-3.5 h-3.5" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <a
                  href="#archive"
                  className="w-8 h-8 rounded-full bg-[#F3F4F6] hover:bg-[#0055FF] hover:text-white text-[#6B7280] flex items-center justify-center transition-colors shadow-xs"
                  title="Monograph Archive"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      )}
    </MotionTiltCard>
  );
}

export function AuthorsSection() {
  const authors = [
    {
      id: 'elena-vance',
      name: 'Dr. Elena Rostova-Vance',
      role: 'Lead Spatial Critic',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
      bio: 'Investigating bio-fabricated architecture, acoustic mycelium envelopes, and post-digital urban ecology in Kyoto and Zurich.',
      location: 'Zurich & Kyoto',
      articlesCount: 38,
    },
    {
      id: 'marcus-thorne',
      name: 'Marcus Thorne',
      role: 'Computational Fellow',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      bio: 'Theoretical physicist focusing on photonic quantum light circuits, silicon geopolitics, and synthetic cognitive architectures.',
      location: 'Grenoble & Oxford',
      articlesCount: 29,
    },
    {
      id: 'clara-lindqvist',
      name: 'Clara Lindqvist',
      role: 'Material Culture Columnist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
      bio: 'Writing on the tactile revival of Flemish cold-water flax looms, manual horological anglage, and sustainable luxury craftsmanship.',
      location: 'Stockholm & Milan',
      articlesCount: 34,
    },
  ];

  return (
    <section className="space-y-8 my-24">
      <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-5 h-5 text-[#0055FF]" />
          <h2 className="font-heading font-black text-2xl uppercase tracking-tight text-[#111827]">
            Editorial Critics & Fellows
          </h2>
        </div>
        <span className="text-xs font-mono text-[#6B7280]">Independent Masthead</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {authors.map((author) => (
          <AuthorProfileCard key={author.id} author={author} />
        ))}
      </div>
    </section>
  );
}

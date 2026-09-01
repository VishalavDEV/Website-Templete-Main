import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Volume2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export function CinematicFeature({
  image = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
  category = 'Visual Monograph / Architecture & Sound',
  title = 'The Concrete Cathedral: Acoustic Geometries of Post-War Sacred Brutalism',
  description = 'How sculpted monolithic volumes and asymmetrical acoustic chambers challenged 500 years of ecclesiastical architectural history in Central Europe.',
  slug = 'brutalist-acoustic-sanctuaries',
  author = 'Elena Rostova-Vance',
  readingTime = '11 min read',
}) {
  const shouldReduceMotion = useReducedMotion();

  const containerFade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.12 },
    },
  };

  const itemReveal = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="my-20 relative w-full overflow-hidden bg-[#141413] text-white border-y-2 border-[#141413]">
      {/* Background Image Container with Subtle Zoom on Hover */}
      <div className="relative min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden">
        <motion.img
          initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/80" />

        {/* Content Box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerFade}
          className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 py-16 text-center space-y-5"
        >
          {/* Category Tag */}
          <motion.div variants={itemReveal} className="inline-flex items-center gap-2">
            <span className="px-3 py-1 bg-white/15 backdrop-blur-md border border-white/30 text-white text-[0.6875rem] uppercase tracking-widest font-bold">
              {category}
            </span>
          </motion.div>

          {/* Grand Headline */}
          <motion.h2
            variants={itemReveal}
            className="font-serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.14] tracking-tight"
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemReveal}
            className="font-serif-reading text-lg sm:text-xl text-[#D1CDC4] max-w-2xl mx-auto leading-relaxed italic"
          >
            "{description}"
          </motion.p>

          {/* Metadata Row */}
          <motion.div
            variants={itemReveal}
            className="flex items-center justify-center gap-3 text-xs font-mono text-[#A1A19A]"
          >
            <span>By {author}</span>
            <span>&bull;</span>
            <span>{readingTime}</span>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemReveal} className="pt-4">
            <Link
              to={`/article/${slug}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D43825] hover:bg-[#B32717] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              <span>Explore Monograph</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

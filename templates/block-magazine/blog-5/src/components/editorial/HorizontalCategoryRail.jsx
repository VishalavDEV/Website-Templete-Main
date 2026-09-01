import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useVelocity, useSpring, useReducedMotion } from 'framer-motion';
import { MediumGridCard } from '../cards/StoryCardVariants';
import { Sparkles, ArrowRight, Layers, Compass, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HorizontalCategoryRail({ articles = [] }) {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll Progress across the pinned section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Calculate Velocity for dynamic card skewing
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 30,
    stiffness: 200,
    mass: 0.1,
  });

  // Skew cards based on scroll velocity (between -7deg and +7deg)
  const skewX = useTransform(smoothVelocity, [-1, 1], [-8, 8]);

  // Horizontal translation for the cards track
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-58%']);

  // Parallax translation for the massive background outlined typography
  const bgTextX = useTransform(scrollYProgress, [0, 1], ['0%', '-35%']);

  const hubs = [
    {
      name: 'FUTURE TECH',
      description: 'Quantum photonic computing, neural interfaces, and the new physics of computation.',
      tagline: 'SYNTHETIC FRONTIERS',
      accentColor: '#0055FF',
      article: articles[1] || articles[0],
    },
    {
      name: 'BIO-SPACES',
      description: 'Biophilic mycelium composites, mass-timber towers, and circadian living architecture.',
      tagline: 'SPATIAL NEURO-DESIGN',
      accentColor: '#10B981',
      article: articles[0],
    },
    {
      name: 'HYPER-STYLE',
      description: 'The renaissance of manual anglage horology, Flanders cold-water flax, and slow luxury.',
      tagline: 'TACTILE RIGOR',
      accentColor: '#FF5E3A',
      article: articles[2] || articles[0],
    },
    {
      name: 'Z-CULTURE',
      description: 'Duration cinema, spatial audio installations, and philosophical counter-currents.',
      tagline: 'POST-DIGITAL ESSAYS',
      accentColor: '#7000FF',
      article: articles[3] || articles[0],
    },
    {
      name: 'AVANT-SOUND',
      description: 'Acoustic brutalism, modular synthesizers, and spatial field recordings.',
      tagline: 'SONIC ARCHITECTURE',
      accentColor: '#C28B38',
      article: articles[11] || articles[4] || articles[0],
    },
    {
      name: 'KINETIC DESIGN',
      description: 'Auxetic metamaterials, negative Poisson ratios, and passive environmental mechanical canopies.',
      tagline: 'ADAPTIVE MECHANICS',
      accentColor: '#00D2FF',
      article: articles[13] || articles[0],
    },
  ];

  return (
    <div ref={sectionRef} className="relative h-[280vh] sm:h-[300vh] my-16">
      {/* Sticky Pinned Container */}
      <div className="sticky top-20 h-[85vh] flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-b from-white/95 to-[#F8F9FA]/90 border border-[#E5E7EB] p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,85,255,0.05)]">
        {/* Massive Background Parallax Outlined Typography */}
        <motion.div
          style={{ x: shouldReduceMotion ? 0 : bgTextX }}
          className="absolute top-1/2 -translate-y-1/2 left-0 pointer-events-none whitespace-nowrap select-none z-0"
        >
          <span
            className="font-heading font-black text-[16vw] uppercase text-transparent tracking-tighter block leading-none opacity-20"
            style={{
              WebkitTextStroke: '2px #0055FF',
            }}
          >
            HYPER &bull; SPATIAL &bull; HUBS &bull; Z-MAG
          </span>
        </motion.div>

        {/* Top Header of Pinned Rail */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#E5E7EB] pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0055FF] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0055FF]">
              Phase 06 &bull; Horizontal Category Hubs
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#6B7280]">
            <Compass className="w-4 h-4 text-[#0055FF]" />
            <span>Scroll vertically to glide through thematic hubs</span>
          </div>
        </div>

        {/* Horizontal Moving Cards Track with Velocity Skew */}
        <div className="relative z-10 flex-1 flex items-center overflow-visible">
          <motion.div
            style={{
              x: shouldReduceMotion ? 0 : x,
              skewX: shouldReduceMotion ? 0 : skewX,
            }}
            className="flex gap-8 sm:gap-10 items-stretch py-4"
          >
            {hubs.map((hub, idx) => (
              <div
                key={idx}
                className="w-[340px] sm:w-[420px] shrink-0 glass-card rounded-3xl p-6 sm:p-8 bg-white/95 border border-white/90 shadow-xl flex flex-col justify-between space-y-6 group"
              >
                {/* Hub Header Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full inline-block"
                      style={{ backgroundColor: hub.accentColor }}
                    />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#111827]">
                      {hub.tagline}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#9CA3AF]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Hub Category Title */}
                <div>
                  <h3 className="font-heading font-black text-3xl sm:text-4xl text-[#111827] group-hover:text-[#0055FF] transition-colors uppercase tracking-tight">
                    {hub.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5563] mt-2 leading-relaxed">
                    {hub.description}
                  </p>
                </div>

                {/* Embedded Motion Card Feature */}
                {hub.article && (
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#F3F4F6]">
                    <img
                      src={hub.article.image}
                      alt={hub.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                      <span className="text-white text-xs font-heading font-bold line-clamp-1">
                        {hub.article.title}
                      </span>
                    </div>
                  </div>
                )}

                {/* Bottom Hub CTA Link */}
                <Link
                  to={`/category/${hub.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center justify-between pt-4 border-t border-[#F3F4F6] text-xs font-heading font-bold text-[#0055FF] group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore {hub.name} Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Progress Bar Indicator */}
        <div className="relative z-10 flex items-center justify-between pt-4 border-t border-[#E5E7EB] text-xs font-mono text-[#6B7280]">
          <span>Track 01 &bull; 05</span>
          <div className="w-40 sm:w-64 h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
              className="h-full bg-[#0055FF]"
            />
          </div>
          <span className="text-[#0055FF] font-bold">100% Light Spatial Engine</span>
        </div>
      </div>
    </div>
  );
}

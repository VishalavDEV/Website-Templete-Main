import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Code2, Palette, Lightbulb } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { CursorType } from '../types';

interface AboutPreviewProps {
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType) => void;
  onNavigate?: (path: string) => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({
  onOpenProjectModal,
  setCursorType,
  onNavigate,
}) => {
  const pillars = [
    {
      icon: Lightbulb,
      title: 'Strategy First',
      desc: 'Uncovering distinct market leverage before designing solutions.',
    },
    {
      icon: Palette,
      title: 'Obsessive Craft',
      desc: 'Editorial typography, spatial fluidity, and pixel perfection.',
    },
    {
      icon: Code2,
      title: 'Engineering Rigor',
      desc: 'Ultra-fast, accessible code and experimental WebGL shaders.',
    },
  ];

  return (
    <section id="about" className="py-28 sm:py-36 relative overflow-hidden bg-[#080808]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0066FF]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-8 sm:mb-12"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
            WHO WE ARE
          </span>
        </motion.div>

        {/* Large Editorial Statement */}
        <div className="space-y-12 lg:space-y-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#FAF9F6] leading-[1.08] tracking-tight max-w-5xl uppercase"
          >
            We turn ambitious ideas into{' '}
            <span className="font-editorial italic font-normal text-[#0066FF] lowercase">
              meaningful digital experiences.
            </span>
          </motion.h2>

          {/* Two-Column Supporting Narrative & Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6 border-t border-[#ffffff10]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-6 space-y-6"
            >
              <p className="text-xl sm:text-2xl text-[#FAF9F6] font-light leading-relaxed">
                We combine strategy, creative direction, design and technology to help brands build digital experiences that people remember.
              </p>
              <p className="text-base text-[#888888] leading-relaxed">
                Founded on the belief that digital products should evoke genuine emotion, our studio operates at the bleeding edge of interactive design and creative technology. We partner with visionaries from day one to launch products that redefine their categories.
              </p>

              <div className="pt-4">
                <MagneticButton
                  id="about-more-us-btn"
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('/about');
                    } else {
                      onOpenProjectModal();
                    }
                  }}
                  onCursorEnter={() => setCursorType('button')}
                  onCursorLeave={() => setCursorType('default')}
                  className="group inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FAF9F6] hover:text-[#0066FF] transition-colors py-2 cursor-pointer"
                >
                  <span>More About Us</span>
                  <span className="text-sm text-[#0066FF] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">&nearr;</span>
                </MagneticButton>
              </div>
            </motion.div>

            {/* Strategic Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 space-y-4"
            >
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-white/[0.02] border border-[#ffffff10] hover:border-[#0066FF]/40 transition-colors group"
                  >
                    <div className="flex items-center gap-3.5 mb-2">
                      <div className="p-2 rounded-lg bg-[#0066FF]/10 text-[#0066FF] group-hover:bg-[#0066FF]/20 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-display text-lg font-bold text-[#FAF9F6] group-hover:text-white">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-sm text-[#888888] pl-11 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { TextReveal } from '../ui/TextReveal';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-8 pb-12 overflow-hidden">
      {/* Background Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-grid-line bg-[length:40px_40px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full my-auto z-10">
        {/* Headlines & CTAs */}
        <div className="max-w-3xl space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Badge variant="accent" size="md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Independent Digital Agency · 2026</span>
            </Badge>
          </motion.div>

          {/* Headline Reveal */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-[var(--text-color)] font-display">
              <TextReveal text="WE BUILD" delay={0.2} as="span" className="block" />
              <span className="block text-[var(--accent-color)]">
                <TextReveal text="WHAT'S NEXT." delay={0.35} as="span" />
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-[var(--secondary-color)] leading-relaxed font-light max-w-2xl"
          >
            Byteora crafts high-throughput spatial web interfaces, 3D brand identity systems, and enterprise software platforms for market challengers.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Button href="/portfolio" variant="primary" size="lg">
              Explore Work
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Start A Project
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between pt-8 border-t border-[var(--border-color)] text-xs font-mono uppercase tracking-widest text-[var(--secondary-color)]"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-color)] animate-ping" />
          <span>Available for Q4 Engagements</span>
        </div>

        <a
          href="#clients"
          className="flex items-center gap-2 hover:text-[var(--text-color)] transition-colors duration-200"
        >
          <span>Scroll to Discover</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

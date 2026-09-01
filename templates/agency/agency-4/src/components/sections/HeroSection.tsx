import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { STUDIO_INFO } from '../../data/studio';
import { BrandLogos } from '../ui/BrandLogos';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 flex flex-col justify-between overflow-hidden bg-[#FAF8F5]">
      {/* Subtle Background Glow Circles */}
      <div className="absolute top-20 right-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#D96B43]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#1A1918]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2.5 bg-white border border-[#EAE6DF] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#D96B43] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#1A1918]">
                Independent Creative Studio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight leading-[1.08] text-[#1A1918]"
            >
              Ideas Designed to <span className="font-serif italic font-normal text-[#D96B43]">Move</span> the Future.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#6B6863] leading-relaxed max-w-2xl font-normal"
            >
              {STUDIO_INFO.subheadline}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => navigate('/work')}
                className="w-full sm:w-auto"
              >
                Explore Our Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto"
              >
                Start a Conversation
              </Button>
            </motion.div>

            {/* Micro Stats Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 sm:pt-8 border-t border-[#EAE6DF] grid grid-cols-3 gap-4 sm:gap-6 max-w-lg"
            >
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-[#1A1918]">48+</p>
                <p className="text-[11px] sm:text-xs text-[#6B6863]">Projects Shipped</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-[#1A1918]">21</p>
                <p className="text-[11px] sm:text-xs text-[#6B6863]">Global Brands</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-[#1A1918]">100%</p>
                <p className="text-[11px] sm:text-xs text-[#6B6863]">Client Satisfaction</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#EAE6DF] aspect-[4/3] sm:aspect-[4/5] bg-white group"
            >
              <img
                src="images/pexels-fotografiarqmx-9511923.jpg"
                alt="AURELIA Hero Editorial Composition"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918]/70 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white p-4 sm:p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#D96B43]">
                  Featured Spotlight
                </span>
                <h4 className="text-lg sm:text-xl font-bold font-display text-white mt-0.5 sm:mt-1">Northline Spatial Brand</h4>
                <p className="text-[11px] sm:text-xs text-gray-300 mt-0.5 sm:mt-1 line-clamp-1">International Rebrand & Digital Flagship — Copenhagen, Denmark</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Marquee Partner Brands Banner */}
      <BrandLogos />
    </section>
  );
};

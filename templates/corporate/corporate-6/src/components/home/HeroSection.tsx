import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Shield, Clock, Building2, ChevronRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#FBF9F6]">
      {/* Editorial geometric decorative lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#1A1A1A]/10 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1A1A1A]/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 space-y-8">
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#1A1A1A]/10 text-[#0D4433] text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#0D4433] animate-pulse" />
              CORPORATE TRAVEL • GLOBAL MOBILITY • EXPERIENCES
            </motion.div>

            {/* Large Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl xl:text-7xl font-normal text-[#1A1A1A] leading-[1.06] tracking-tight"
            >
              Move your business.{' '}
              <span className="italic font-normal text-[#0D4433] block mt-1">
                Experience the world.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#424D48] leading-relaxed max-w-xl"
            >
              End-to-end corporate travel solutions designed around your people, your priorities and the places that matter. Combining global reach, white-glove human care, and unified intelligence.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                id="hero-plan-journey-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0D4433] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#083024] active:scale-95 transition-all shadow-md hover:shadow-xl cursor-pointer group"
              >
                <span>Plan Your Journey</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                to="/corporate-travel"
                id="hero-explore-solutions-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/80 backdrop-blur-sm border border-[#1A1A1A]/20 text-[#1A1A1A] text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:border-[#0D4433]/40 active:scale-95 transition-all"
              >
                <span>Explore Our Solutions</span>
                <ChevronRight className="w-4 h-4 text-[#0D4433]" />
              </Link>
            </motion.div>

            {/* Trust Micro-Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex items-center gap-6 text-xs text-[#65726D] border-t border-[#1A1A1A]/10"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#0D4433]" />
                <span>ISO 31030 Duty of Care</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0D4433]" />
                <span>&lt; 90s Incident Response</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Large Cinematic Editorial Image & Floating Stats */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Image Container with Elegant Frosted Border Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#1A1A1A]/10 aspect-[4/5] sm:aspect-[5/6] max-h-[580px] w-full">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
                  alt="Corporate executive travelers arriving in modern international hub"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Subtle dark gradient overlay on bottom for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#051A14]/75 via-transparent to-transparent pointer-events-none" />

                {/* Bottom image caption */}
                <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                  <div className="font-serif text-lg italic text-[#F4EFEA]">Tokyo Haneda VIP Concierge Terminal</div>
                  <div className="text-white/80 text-[10px] uppercase tracking-widest mt-0.5">Private tarmac transfer & fast-track customs</div>
                </div>
              </div>

              {/* Floating Info 1: 120+ Countries */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-4 -left-4 sm:top-8 sm:-left-8 p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-black/5 max-w-[160px] select-none"
              >
                <div className="flex items-center gap-2 text-[#0D4433] mb-1">
                  <Globe className="w-4 h-4 text-[#0D4433]" />
                  <span className="font-serif text-2xl font-bold text-[#1A1A1A]">120+</span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#424D48]">
                  Countries Active
                </div>
              </motion.div>

              {/* Floating Info 2: 24/7 Travel Support */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute top-1/3 -right-4 sm:-right-8 p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-black/5 max-w-[180px] select-none"
              >
                <div className="flex items-center gap-2 text-[#0D4433] mb-1">
                  <Clock className="w-4 h-4 text-[#0D4433]" />
                  <span className="font-serif text-2xl font-bold text-[#1A1A1A]">24/7</span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#424D48]">
                  Travel Support
                </div>
                <div className="text-[10px] text-[#65726D] mt-0.5">Sub-2m concierge desk</div>
              </motion.div>

              {/* Floating Info 3: 1,500+ Corporate Clients */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-10 p-4.5 rounded-2xl bg-[#0D4433] text-white shadow-2xl border border-white/10 select-none min-w-[210px]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-serif text-2xl font-normal text-white">1,500+</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                      Corporate Clients
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <Building2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

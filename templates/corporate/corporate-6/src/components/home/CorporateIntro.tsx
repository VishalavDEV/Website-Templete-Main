import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function CorporateIntro() {
  return (
    <section className="py-20 sm:py-28 bg-[#FBF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Asymmetrical Frame & Floating Badge */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Decorative back border */}
              <div className="absolute -inset-3 rounded-3xl border border-[#1A1A1A]/10 -rotate-1 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none border border-black/5">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
                  alt="Executive traveler inside premier airport lounge"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111815]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                  <div className="font-serif text-lg text-white italic">The First Class Sanctuary</div>
                  <div className="text-white/80 text-[10px] uppercase tracking-widest mt-0.5">
                    Pre-board dining, biometric entry & sleep pods
                  </div>
                </div>
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-black/5 max-w-[240px]">
                <div className="flex items-center gap-2 text-[#0D4433] mb-1.5">
                  <Sparkles className="w-4 h-4 text-[#0D4433]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">Excellence Standard</span>
                </div>
                <p className="text-xs text-[#424D48] leading-relaxed">
                  "Every leg coordinated with the precision of a Swiss timepiece."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Text & 4 Key Stats */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#1A1A1A]/10 text-[#0D4433] text-[10px] font-bold uppercase tracking-[0.25em]">
              Strategic Advantage
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-[1.12] tracking-tight">
              Travel is more than getting from A to B.
            </h2>

            <p className="text-base sm:text-lg text-[#424D48] leading-relaxed">
              We help organizations turn business travel into a strategic advantage — combining global reach, human expertise and intelligent technology. In high-stakes business, how your executives and teams arrive directly influences the outcome of every deal, conference, and client encounter.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#1A1A1A]">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#1A1A1A]/5 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#0D4433] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#1A1A1A] block">Intelligent Cost Discipline</span>
                  <span className="text-xs text-[#65726D]">Preferred supplier pricing reduces annual corporate travel spend by 28%.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#1A1A1A]/5 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#0D4433] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#1A1A1A] block">Elevated Traveler Well-Being</span>
                  <span className="text-xs text-[#65726D]">Circadian hotels, lie-flat cabins, and fast-track clearance prevent executive fatigue.</span>
                </div>
              </div>
            </div>

            {/* Key Statistics Grid */}
            <div className="pt-6 border-t border-[#1A1A1A]/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <AnimatedCounter value="25+" label="Years of Heritage" sublabel="Since 2001" />
              <AnimatedCounter value="120+" label="Countries" sublabel="Direct coverage" />
              <AnimatedCounter value="24/7" label="Traveler Support" sublabel="Sub-2m response" />
              <AnimatedCounter value="98%" label="Satisfaction" sublabel="Client retention" />
            </div>

            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0D4433] hover:text-[#083024] group"
              >
                <span>Learn more about our philosophy and heritage</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

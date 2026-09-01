import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play, X, CheckCircle } from 'lucide-react';
import { fadeUp, fadeIn } from '../../utils/animations';

export const Hero: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-white">
      {/* Subtle clean background gradient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-slate-50 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Hero Copy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Top Technology Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold tracking-wider uppercase mb-6 shadow-2xs">
              <span>AI • CLOUD • SOFTWARE • DATA</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Engineering Solutions.<br />
              <span className="text-slate-900 underline decoration-slate-300 decoration-4 underline-offset-4">Elevating</span> Businesses.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
              Straventa helps ambitious companies build innovative digital products, streamline operations, and accelerate growth with technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-950 px-5 py-3.5 rounded-xl font-semibold text-sm border border-slate-200 shadow-xs transition-all duration-200 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>

            {/* Social Proof / Avatars */}
            <div className="flex items-center gap-3 pt-6 border-t border-slate-100 w-full">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Client avatar"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Client avatar"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80"
                  alt="Client avatar"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Client avatar"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-xs sm:text-sm text-slate-600">
                <span className="font-semibold text-slate-900">Trusted by 500+</span> global clients
              </div>
            </div>

          </motion.div>

          {/* Right Column: Modern Architecture Image with Centered Play Button */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
                alt="Straventa Innovation HQ"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
              />
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

              {/* Centered Play Button */}
              <button
                onClick={() => setVideoModalOpen(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group/btn focus:outline-none focus:ring-4 focus:ring-zinc-900/20 cursor-pointer"
                title="Watch company introduction"
              >
                {/* Outer animated pulse ring */}
                <div className="absolute inset-0 rounded-full bg-white/40 animate-ping pointer-events-none" />
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-slate-900 text-slate-900 ml-1 group-hover/btn:scale-105 transition-transform" />
              </button>

              {/* Bottom Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-slate-900">Enterprise Ready</span>
                </div>
                <span className="text-slate-500 font-medium">Global AI &amp; Cloud Delivery</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Interactive Video / Showcase Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md"
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-2xl w-full text-slate-900 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <h3 className="font-bold text-lg text-slate-900">Straventa Story &amp; Capabilities</h3>
                </div>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-4">
                <div className="aspect-video w-full rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center mb-3 border border-slate-200">
                    <Play className="w-8 h-8 fill-slate-900 text-slate-900 ml-1" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">Building What's Next</h4>
                  <p className="text-xs text-slate-600 max-w-sm">
                    Discover how Straventa engineers full-stack architectures, high-concurrency cloud systems, and generative AI platforms.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center pt-2">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                    <div className="text-lg font-bold text-slate-900">10+ Years</div>
                    <div className="text-[11px] text-slate-500">Engineering Excellence</div>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                    <div className="text-lg font-bold text-slate-900">500+</div>
                    <div className="text-[11px] text-slate-500">Delivered Platforms</div>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                    <div className="text-lg font-bold text-slate-900">99.9%</div>
                    <div className="text-[11px] text-slate-500">Enterprise Uptime SLA</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold shadow-xs"
                >
                  Close Showcase
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

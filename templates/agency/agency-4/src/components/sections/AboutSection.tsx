import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { ABOUT_TABS, STUDIO_STATS } from '../../data/studio';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export const AboutSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('strategy');
  const navigate = useNavigate();

  const activeTab = ABOUT_TABS.find((tab) => tab.id === activeTabId) || ABOUT_TABS[0];

  return (
    <section id="about" className="py-20 sm:py-28 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Studio Philosophy"
          title="We turn ambitious ideas into meaningful experiences."
          subtitle="AURELIA operates at the intersection of strategic clarity, modern art direction, and high-performance digital engineering."
        />

        {/* Narrative & Tab Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-20 md:mb-28">
          
          {/* Left Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-lg border border-[#EAE6DF] min-h-[320px] sm:min-h-[400px] lg:min-h-[500px]"
          >
            <img
              src="images/pexels-andreaedavis-3653849.jpg"
              alt="AURELIA Studio Space & Architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#D96B43] mb-1">Copenhagen HQ</p>
              <h4 className="text-lg sm:text-xl font-bold font-display text-white">Spatial Minimalism & Focus</h4>
              <p className="text-xs text-gray-300 mt-1">Our physical workspace is designed to foster deep uninterrupted creative thinking.</p>
            </div>
          </motion.div>

          {/* Right Discipline Tabs Container */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8">
            <div>
              {/* Tab Selector Buttons */}
              <div className="flex items-center space-x-2 border-b border-[#EAE6DF] pb-4 overflow-x-auto scrollbar-none">
                {ABOUT_TABS.map((tab) => {
                  const isActive = tab.id === activeTabId;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? 'bg-[#D96B43] text-white shadow-sm'
                          : 'bg-[#FAF8F5] text-[#6B6863] hover:text-[#1A1918]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Active Tab Panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 sm:mt-8 space-y-6"
                >
                  <h3 className="text-2xl font-bold font-display text-[#1A1918]">
                    {activeTab.title}
                  </h3>

                  <p className="text-sm sm:text-base md:text-lg text-[#1A1918] leading-relaxed font-normal">
                    {activeTab.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {activeTab.points.map((point, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm text-[#6B6863] bg-[#FAF8F5] p-3 sm:p-3.5 rounded-xl border border-[#EAE6DF]">
                        <CheckCircle2 className="w-4 h-4 text-[#D96B43] flex-shrink-0" />
                        <span className="font-medium text-[#1A1918]">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Action */}
            <div className="pt-6 border-t border-[#EAE6DF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-[#6B6863]">
                Want to learn more about our operational process and team?
              </span>
              <Button
                variant="outline"
                size="md"
                icon={ArrowRight}
                onClick={() => navigate('/about')}
                className="w-full sm:w-auto"
              >
                Read Full Studio Story
              </Button>
            </div>

          </div>

        </div>

        {/* Animated Statistics Bar */}
        <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#EAE6DF] shadow-xs">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#EAE6DF]">
            {STUDIO_STATS.map((stat, idx) => (
              <div key={idx} className={`space-y-2 ${idx > 0 ? 'pt-6 sm:pt-0' : ''}`}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#1A1918] flex items-center justify-center">
                  <AnimatedCounter
                    to={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#D96B43]">
                  {stat.label}
                </p>
                <p className="text-[11px] sm:text-xs text-[#6B6863] max-w-[200px] mx-auto">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

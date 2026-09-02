import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { EDITORIAL_TOPICS, InsightCategory } from '../../data/insightsData';
import { CursorType } from '../../types';

interface TopicsSectionProps {
  setCursorType: (type: CursorType, text?: string) => void;
  onSelectCategory?: (category: InsightCategory) => void;
}

export const TopicsSection: React.FC<TopicsSectionProps> = ({
  setCursorType,
  onSelectCategory,
}) => {
  const [activeTopicIndex, setActiveTopicIndex] = useState<number | null>(null);

  const handleTopicClick = (topicName: string) => {
    let category: InsightCategory = 'ALL';
    if (topicName.includes('DESIGN')) category = 'DESIGN';
    else if (topicName.includes('AI') || topicName.includes('CULTURE')) category = 'CULTURE';
    else if (topicName.includes('BRANDING')) category = 'BRANDING';
    else if (topicName.includes('TECHNOLOGY')) category = 'TECHNOLOGY';

    onSelectCategory?.(category);

    const el = document.getElementById('article-archive');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#060608] border-b border-[#ffffff10] overflow-hidden relative">
      {/* Background Accent Lines */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20 pb-6 border-b border-[#ffffff10]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
                03 / INTELLECTUAL AXES
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#FAF9F6] uppercase tracking-tight">
              WHAT WE'RE THINKING ABOUT
            </h2>
          </div>

          <span className="font-mono text-xs text-[#888888] uppercase tracking-widest">
            CORE RESEARCH CLUSTERS
          </span>
        </div>

        {/* Oversized Interactive Topics Stack */}
        <div className="space-y-4 sm:space-y-6">
          {EDITORIAL_TOPICS.map((topic, i) => {
            const isHovered = activeTopicIndex === i;
            const formattedIndex = i < 9 ? `0${i + 1}` : `${i + 1}`;

            return (
              <div
                key={topic.id}
                onMouseEnter={() => {
                  setActiveTopicIndex(i);
                  setCursorType('project', 'EXPLORE ↗');
                }}
                onMouseLeave={() => {
                  setActiveTopicIndex(null);
                  setCursorType('default');
                }}
                onClick={() => handleTopicClick(topic.name)}
                className="group relative border-b border-[#ffffff10] pb-6 sm:pb-8 pt-2 cursor-pointer transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Left Topic Name with Index */}
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs sm:text-sm text-[#555555] group-hover:text-[#0066FF] transition-colors">
                      /{formattedIndex}
                    </span>

                    <h3
                      className={`font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter transition-all duration-300 ${
                        isHovered
                          ? 'text-white translate-x-2 sm:translate-x-4'
                          : 'text-white/40 group-hover:text-white/80'
                      }`}
                    >
                      {topic.name}
                    </h3>
                  </div>

                  {/* Right Subtitle, Count & Arrow */}
                  <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-8 font-mono text-xs">
                    <div className="text-left lg:text-right hidden sm:block">
                      <div className="text-[#FAF9F6]/80 text-xs tracking-wide">
                        {topic.subtitle}
                      </div>
                      <div className="text-[#0066FF] text-[11px] tracking-widest uppercase mt-0.5">
                        {topic.articleCount} ESSAYS IN ARCHIVE
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-[#0066FF] group-hover:bg-[#0066FF] flex items-center justify-center text-white/40 group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Expanded editorial topic narrative on hover (Desktop) */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden pt-4 max-w-2xl"
                    >
                      <p className="font-body text-xs sm:text-sm text-[#888888] font-light leading-relaxed">
                        {topic.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

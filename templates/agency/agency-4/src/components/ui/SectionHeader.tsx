import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  lightMode?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'left',
  className = '',
  lightMode = false
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="inline-flex items-center space-x-2 mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-[#D96B43]"></span>
          <span className={`text-xs font-semibold uppercase tracking-widest ${lightMode ? 'text-[#D96B43]' : 'text-[#D96B43]'}`}>
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-[1.1] ${
          lightMode ? 'text-white' : 'text-[#1A1918]'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className={`mt-4 text-base sm:text-lg md:text-xl font-normal leading-relaxed ${
            lightMode ? 'text-gray-300' : 'text-[#6B6863]'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

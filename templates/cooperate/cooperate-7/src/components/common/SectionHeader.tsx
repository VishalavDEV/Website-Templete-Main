import React from 'react';
import { motion } from 'motion/react';
import { Badge } from './Badge';
import { fadeUp } from '../../utils/animations';

export interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleAs?: 'h1' | 'h2' | 'h3';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeIcon,
  title,
  highlightText,
  subtitle,
  align = 'center',
  className = '',
  titleAs = 'h2'
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  }[align];

  const TitleTag = titleAs;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`flex flex-col max-w-3xl ${alignClass} ${className}`}
    >
      {badge && (
        <div className="mb-4">
          <Badge variant="slate" icon={badgeIcon}>
            {badge}
          </Badge>
        </div>
      )}
      
      <TitleTag className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
        {title}{' '}
        {highlightText && (
          <span className="text-slate-900 underline decoration-slate-400/60 decoration-2 underline-offset-8">
            {highlightText}
          </span>
        )}
      </TitleTag>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

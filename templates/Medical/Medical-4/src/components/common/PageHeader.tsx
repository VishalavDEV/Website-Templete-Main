import React from 'react';
import { Breadcrumb } from './Breadcrumb';
import { ScrollReveal } from './ScrollReveal';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbItems?: { label: string; path?: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumbItems }) => {
  return (
    <div className="pt-4 sm:pt-6 pb-2 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <ScrollReveal animation="pop" duration={700} className="relative text-white py-12 sm:py-16 px-6 sm:px-12 overflow-hidden floating-window-dark">
        {/* Photo Background with Rich Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/90 to-indigo-950/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        
        {/* Ambient Lighting Orbs */}
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
        <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="mb-4 inline-block">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight text-white drop-shadow-sm">{title}</h1>
          {subtitle && (
            <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed text-balance">{subtitle}</p>
          )}
        </div>
      </ScrollReveal>
    </div>
  );
};


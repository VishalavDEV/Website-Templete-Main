import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Lightbulb, Shield, ArrowRight } from 'lucide-react';

const featureList = [
  {
    id: 1,
    icon: Camera,
    title: 'Photo Sessions',
    description:
      'High-end bespoke portrait and editorial sessions tailored to reveal your authentic character in studio or natural light settings.',
    linkText: 'Explore Works',
    href: '#portfolio',
  },
  {
    id: 2,
    icon: Lightbulb,
    title: 'Occasions & Rates',
    description:
      'Comprehensive artistic storytelling for weddings, private celebrations, galas, and momentous cultural milestones.',
    linkText: 'View Packages',
    href: '#services',
  },
  {
    id: 3,
    icon: Shield,
    title: 'Global Coverage',
    description:
      'Worldwide destination and documentary field coverage for commercial brands, lifestyle campaigns, and editorial publishers.',
    linkText: 'Inquire Now',
    href: '#contact',
  },
];

export default function Features() {
  return (
    <section 
      id="features"
      className="relative w-full bg-white text-[#111111] py-24 sm:py-32 overflow-hidden scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {featureList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.15, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/5 bg-white border border-gray-100"
              >
                {/* Circular Icon in Coral Red */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#fdf2f0] border-2 border-[#e74c3c]/20 flex items-center justify-center text-[#e74c3c] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#e74c3c] group-hover:text-white shadow-lg shadow-[#e74c3c]/10">
                    <IconComponent className="w-8 h-8 stroke-[1.75]" />
                  </div>
                </div>

                {/* Bold Title */}
                <h3 
                  className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-3.5 group-hover:text-[#e74c3c] transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </h3>

                {/* Readable Paragraph */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* "Read More" Link with Underline / Arrow Hover */}
                <a
                  href={item.href}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#111111] group-hover:text-[#e74c3c] transition-all relative py-1"
                >
                  <span className="relative">
                    {item.linkText}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#e74c3c] transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#e74c3c] transform transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { statsData } from '../../data/stats';
import { IconHelper } from '../common/IconHelper';
import { fadeUp } from '../../utils/animations';

interface StatsSectionProps {
  showTitle?: boolean;
  className?: string;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ showTitle = true, className = '' }) => {
  const displayStats = [
    { id: '1', value: '500+', label: 'Projects Delivered', iconName: 'Code2' },
    { id: '2', value: '120+', label: 'Global Clients', iconName: 'Users' },
    { id: '3', value: '15+', label: 'Countries Served', iconName: 'Globe' },
    { id: '4', value: '98%', label: 'Client Satisfaction', iconName: 'Star' },
    { id: '5', value: '20+', label: 'Tech Experts', iconName: 'Cpu' }
  ];

  return (
    <section className={`py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80 relative ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Powering Digital Transformation Worldwide
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl mx-auto">
              Delivering quantifiable engineering impact and enterprise performance at scale.
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {displayStats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-6 text-center transition-all duration-300 group shadow-xs hover:shadow-md flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center mb-4 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-200">
                <IconHelper name={stat.iconName} className="w-5 h-5" />
              </div>

              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 group-hover:text-zinc-700 transition-colors tracking-tight">
                {stat.value}
              </div>

              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1.5 leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

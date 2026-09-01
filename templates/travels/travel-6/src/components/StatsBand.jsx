import React from 'react';
import { motion } from 'framer-motion';
import { Users, Compass, Globe, Star } from 'lucide-react';

const statsData = [
  {
    id: 1,
    value: '18K+',
    label: 'Happy Travelers',
    Icon: Users,
    color: 'text-brand-coral'
  },
  {
    id: 2,
    value: '250+',
    label: 'Expert Tours',
    Icon: Compass,
    color: 'text-brand-orange'
  },
  {
    id: 3,
    value: '75+',
    label: 'Destinations',
    Icon: Globe,
    color: 'text-brand-coral'
  },
  {
    id: 4,
    value: '4.95',
    label: 'Top Rating',
    Icon: Star,
    color: 'text-brand-orange'
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15
    }
  }
};

export default function StatsBand() {
  return (
    <section className="bg-near-black py-16 px-6 md:px-12 border-y border-white/5 relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-brand-coral/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {statsData.map((stat) => {
          const Icon = stat.Icon;
          return (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left group"
            >
              {/* Animated Icon container */}
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                <Icon className={`w-6 h-6 ${stat.color} transition-transform duration-300 group-hover:rotate-12`} />
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-none mb-1">
                  {stat.value}
                </h3>
                <p className="text-white/50 text-xs md:text-sm font-light uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

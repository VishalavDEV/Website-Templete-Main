import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, TrendingUp } from 'lucide-react';

const iconMap = {
  Users: Users,
  BookOpen: BookOpen,
  Award: Award,
  TrendingUp: TrendingUp,
};

export default function StatsCounter({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, idx) => {
        const IconComponent = iconMap[stat.icon] || Users;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="glass-card p-6 md:p-8 rounded-2xl border border-slate-100 text-center hover:shadow-card-hover transition-all duration-300 group"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
              <IconComponent className="w-7 h-7" />
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">
              {stat.value}
            </h3>
            <p className="text-sm md:text-base text-slate-600 font-medium">{stat.label}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

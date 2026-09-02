import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../../data/services';
import { IconHelper } from '../common/IconHelper';
import { fadeUp } from '../../utils/animations';

interface ServiceCardProps {
  service: ServiceItem;
  variant?: 'compact' | 'detailed';
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, variant = 'compact' }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col justify-between bg-white hover:bg-white border border-slate-200/90 hover:border-slate-400/80 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300"
    >
      <div>
        {/* Icon wrapper */}
        <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-800 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300 mb-5">
          <IconHelper name={service.iconName} className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-zinc-800 transition-colors mb-2.5">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {service.shortDescription}
        </p>

        {/* Feature list if detailed variant */}
        {variant === 'detailed' && service.features && (
          <ul className="space-y-2 mb-6 pt-3 border-t border-slate-100">
            {service.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start text-xs text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-800 mr-2 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer Link */}
      <div className="pt-4 mt-auto border-t border-slate-100 flex items-center justify-between">
        <Link
          to={`/services/${service.slug}`}
          className="text-xs font-semibold text-slate-900 hover:text-zinc-700 inline-flex items-center gap-1.5 group/link"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
        {service.featured && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
            Core
          </span>
        )}
      </div>
    </motion.div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudyItem } from '../../data/caseStudies';
import { fadeUp } from '../../utils/animations';

interface CaseStudyCardProps {
  caseStudy: CaseStudyItem;
  variant?: 'grid' | 'featured';
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group flex flex-col bg-white border border-slate-200/90 hover:border-slate-300 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 relative text-slate-900"
    >
      {/* Banner Image */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <img
          src={caseStudy.bannerImage}
          alt={caseStudy.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Industry Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold text-slate-900 bg-white/90 backdrop-blur-md rounded-full border border-slate-200 shadow-xs">
            {caseStudy.industry}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between bg-white">
        <div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-zinc-700 transition-colors mb-2.5 line-clamp-1">
            {caseStudy.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-6 leading-relaxed">
            {caseStudy.summary}
          </p>
        </div>

        {/* Bottom Bar with Metric & Circular Arrow Button */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {caseStudy.heroMetric.value}
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              {caseStudy.heroMetric.label}
            </div>
          </div>

          <Link
            to={`/case-studies/${caseStudy.slug}`}
            className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-zinc-900 text-slate-800 group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs group-hover:scale-105"
            title="Read case study"
          >
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

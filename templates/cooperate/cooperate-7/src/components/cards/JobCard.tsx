import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Clock, ArrowRight, Briefcase } from 'lucide-react';
import { JobItem } from '../../data/jobs';
import { fadeUp } from '../../utils/animations';

interface JobCardProps {
  job: JobItem;
  onApplyClick?: (job: JobItem) => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onApplyClick }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-slate-900"
    >
      <div>
        {/* Department Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
            {job.department}
          </span>
          <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
            <Clock className="w-3 h-3" /> {job.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-zinc-700 transition-colors mb-2">
          {job.title}
        </h3>

        {/* Location & Experience */}
        <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-600 mb-4">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400" /> {job.location}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Briefcase className="w-3.5 h-3.5 text-slate-400" /> {job.experience}
          </span>
        </div>

        <p className="text-xs text-slate-600 line-clamp-2 mb-6">
          {job.summary}
        </p>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          to={`/careers/${job.jobId}`}
          className="text-xs font-semibold text-slate-900 hover:text-zinc-700 inline-flex items-center gap-1 group/link"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>

        {onApplyClick && (
          <button
            onClick={() => onApplyClick(job)}
            className="text-xs font-medium bg-slate-100 hover:bg-zinc-900 text-slate-800 hover:text-white px-3 py-1.5 rounded-lg border border-slate-200 transition cursor-pointer"
          >
            Quick Apply
          </button>
        )}
      </div>
    </motion.div>
  );
};

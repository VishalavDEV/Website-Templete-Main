import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Briefcase, DollarSign, Calendar, CheckCircle2 } from 'lucide-react';
import { Job } from '../../types';

interface JobCardProps {
  job: Job;
  onApply?: (job: Job) => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onApply }) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all flex flex-col justify-between">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300/60 uppercase tracking-wider">
            {job.department}
          </span>
          <span className="text-xs font-semibold text-slate-500">{job.type}</span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
          <Link to={`/careers/${job.id}`}>
            {job.title}
          </Link>
        </h3>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 my-3">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            {job.location}
          </span>
          <span className="flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            <DollarSign className="w-3.5 h-3.5" />
            {job.salaryRange}
          </span>
        </div>

        <p className="text-slate-600 text-sm mt-3 line-clamp-3 leading-relaxed">
          {job.description}
        </p>

        {/* Requirements Snippet */}
        <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4 text-xs text-slate-700">
          {job.requirements.slice(0, 2).map((req, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          to={`/careers/${job.id}`}
          className="text-xs font-bold text-slate-900 group-hover:text-amber-600 flex items-center gap-1.5 transition-colors"
        >
          <span>Role Details</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
        </Link>

        {onApply ? (
          <button
            onClick={() => onApply(job)}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
          >
            Apply Now
          </button>
        ) : (
          <Link
            to={`/careers/${job.id}#apply`}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-colors"
          >
            Apply Now
          </Link>
        )}
      </div>
    </div>
  );
};

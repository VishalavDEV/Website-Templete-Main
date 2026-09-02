import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Download,
  CheckCircle2
} from 'lucide-react';
import { TIMELINE } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { MagneticButton } from '../common/MagneticButton';
import { soundFx } from '../../utils/audio';
import { cn } from '../../utils/cn';

export const ResumeSection: React.FC = () => {
  const [timelineFilter, setTimelineFilter] = useState<'all' | 'experience' | 'education'>('all');

  const filteredTimeline = timelineFilter === 'all'
    ? TIMELINE
    : TIMELINE.filter((item) => item.type === timelineFilter);

  const handleFilter = (filter: 'all' | 'experience' | 'education') => {
    soundFx.playClick();
    setTimelineFilter(filter);
  };

  return (
    <section id="resume" className="relative py-24 md:py-32 overflow-hidden bg-slate-50/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Resume & Trajectory"
          title="A proven track record of engineering leadership."
          highlightedWord="proven track record"
          description="A chronological timeline of career milestones, leadership roles, and academic foundations in Human-Computer Interaction."
        />

        {/* Controls: Filter Pills & Download CV Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-16">
          <div className="flex items-center gap-1.5 p-1 rounded-full glass-card border border-slate-200 bg-white shadow-sm">
            <button
              onClick={() => handleFilter('all')}
              className={cn(
                'px-4 py-2 rounded-full text-xs font-semibold transition-all outline-none',
                timelineFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              )}
            >
              All Milestones
            </button>
            <button
              onClick={() => handleFilter('experience')}
              className={cn(
                'flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all outline-none',
                timelineFilter === 'experience'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              )}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experience</span>
            </button>
            <button
              onClick={() => handleFilter('education')}
              className={cn(
                'flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all outline-none',
                timelineFilter === 'education'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              )}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
          </div>

          <MagneticButton
            size="sm"
            variant="outline"
            onClick={() => {
              soundFx.playClick();
              window.print();
            }}
            icon={<Download className="w-3.5 h-3.5 text-blue-600" />}
          >
            Download Formal CV (PDF)
          </MagneticButton>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {filteredTimeline.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Timeline Glowing Node Dot */}
              <div
                className={cn(
                  'absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-125 bg-white shadow-md',
                  item.type === 'experience'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-indigo-600 text-indigo-600'
                )}
              >
                {item.type === 'experience' ? (
                  <Briefcase className="w-3 h-3" />
                ) : (
                  <GraduationCap className="w-3 h-3" />
                )}
              </div>

              {/* Milestone Card */}
              <div className="rounded-3xl p-6 sm:p-8 glass-card border border-slate-200 bg-white hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-xl group-hover:-translate-y-1">
                {/* Header with Title & Date */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-display font-extrabold text-slate-900">
                        {item.title}
                      </h3>
                      {item.status && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {item.status}
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-bold text-blue-700">
                      {item.organization}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-5">
                  {item.achievements.map((ach) => (
                    <div key={ach} className="flex items-start gap-2.5 text-xs text-slate-700 leading-normal font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-slate-100 border border-slate-200 text-slate-700 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

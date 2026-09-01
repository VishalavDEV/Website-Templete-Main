import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, MapPin, Briefcase, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { jobsData } from '../../data/jobs';
import SectionHeading from '../../components/ui/SectionHeading';

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [appliedJob, setAppliedJob] = useState<string | null>(null);

  const departments = ['All', 'Travel Operations', 'Client Solutions', 'Product & Tech', 'Security & Risk'];

  const filtered = selectedDept === 'All'
    ? jobsData
    : jobsData.filter((j) => j.department === selectedDept);

  return (
    <div className="pt-24 pb-20 bg-[#FBF9F5]">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-[#0A261F] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#165042] text-[#DFBA58] text-xs font-semibold uppercase tracking-widest border border-[#C29B38]/30">
              <Compass className="w-3.5 h-3.5" />
              Careers at Aurelia
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              Architect the future of global mobility.
            </h1>
            <p className="text-base sm:text-xl text-[#D8C3A8]/90 leading-relaxed font-light">
              Join an international team of travel directors, platform engineers, and security analysts in 8 global hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Opportunities"
          title="Current Open Positions"
          subtitle="Explore careers across our London, New York, Geneva, Singapore, and Tokyo offices."
          align="left"
        />

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-[#D8C3A8]/50">
          {departments.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDept(d)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedDept === d
                  ? 'bg-[#0F382E] text-white shadow-md'
                  : 'bg-white text-[#3E5049] border border-[#D8C3A8]/60 hover:bg-[#F8F5EE]'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Jobs list */}
        <div className="space-y-4">
          {filtered.map((job) => (
            <div
              key={job.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8C3A8]/60 shadow-sm hover:border-[#0F382E]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F382E]">
                  <span>{job.department}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#0E1412]">{job.title}</h3>
                <p className="text-xs text-[#62756D] leading-relaxed">{job.description}</p>
                <div className="flex items-center gap-1 text-xs text-[#8FA29A] pt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{job.location}</span>
                </div>
              </div>

              <button
                onClick={() => setAppliedJob(job.title)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0F382E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#165042] transition-colors cursor-pointer flex-shrink-0"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Quick Modal Notification when applied */}
        {appliedJob && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center space-y-4 border border-[#D8C3A8]">
              <div className="w-12 h-12 rounded-full bg-[#0F382E]/10 text-[#0F382E] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#0E1412]">Application Received</h4>
              <p className="text-xs text-[#62756D]">
                Thank you for your interest in the <strong className="text-[#0E1412]">{appliedJob}</strong> position. Our global talent team will review your qualifications and reach out within 3 business days.
              </p>
              <button
                onClick={() => setAppliedJob(null)}
                className="w-full py-3 rounded-xl bg-[#0F382E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#165042]"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

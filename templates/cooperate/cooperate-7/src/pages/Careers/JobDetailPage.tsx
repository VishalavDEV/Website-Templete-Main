import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ChevronRight, 
  MapPin, 
  Clock, 
  Briefcase, 
  DollarSign, 
  CheckCircle2, 
  Send,
  Building,
  GraduationCap
} from 'lucide-react';
import { jobsData } from '../../data/jobs';
import { Button } from '../../components/common/Button';
import { JobApplicationModal } from '../../components/forms/JobApplicationModal';

export const JobDetailPage: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const job = jobsData.find((j) => j.jobId === jobId || j.id === jobId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  return (
    <div className="pt-28 pb-16 bg-white text-slate-900">
      
      {/* Header Banner */}
      <section className="pb-12 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <Link to="/" className="hover:text-slate-800">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/careers" className="hover:text-slate-800">Careers</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-semibold">{job.title}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full border border-slate-200 mb-3 inline-block">
                {job.department}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                {job.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-700" /> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-700" /> {job.type}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-slate-700" /> {job.experience}
                </span>
                <span className="font-mono text-emerald-600 font-semibold">
                  {job.salaryRange}
                </span>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsModalOpen(true)}
              icon={<Send className="w-4 h-4" />}
              className="shrink-0"
            >
              Apply for this Role
            </Button>
          </div>

        </div>
      </section>

      {/* Main Role Details */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            
            {/* Overview */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Role Overview</h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {job.summary}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Key Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Qualifications &amp; Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Apply Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to make an impact?</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Join our world-class engineering team and accelerate your professional trajectory.
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsModalOpen(true)}
              >
                Submit Your Application
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Application Modal */}
      <JobApplicationModal
        job={job}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
};

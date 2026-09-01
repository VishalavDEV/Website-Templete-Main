import React, { useState } from 'react';
import { JOBS } from '../data/mockData';
import { JobPosition } from '../types';
import { Modal } from '../components/common/Modal';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { ArrowUpRight, CheckCircle2, Briefcase, MapPin, Sparkles } from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !applicantEmail.includes('@')) {
      setErrorMsg('Please provide a valid name and email address.');
      return;
    }
    setErrorMsg('');
    setApplicationSubmitted(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setApplicationSubmitted(false);
    setApplicantName('');
    setApplicantEmail('');
    setPortfolioUrl('');
    setErrorMsg('');
  };

  return (
    <div className="pt-32 pb-20 bg-[#f8f7f4] min-h-screen">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-black/10">
        <ScrollReveal animation="fade-up">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-lime-700 font-bold block mb-3">
            JOIN VANTA FORM // CAREERS
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif font-black uppercase text-[#121316] tracking-tight leading-[0.95]">
            BUILD WHAT <br />
            <span className="text-lime-600 italic font-light">BUSINESS</span> BECOMES.
          </h1>
          <p className="max-w-3xl text-lg sm:text-xl font-sans text-[#626670] leading-relaxed pt-6">
            We are looking for elite WebGL developers, brand directors, and AI strategists who operate at the bleeding edge of technology and Swiss design.
          </p>
        </ScrollReveal>
      </div>

      {/* Perks Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-black/10">
        <h2 className="text-2xl font-serif font-bold uppercase text-[#121316] mb-8">
          THE VANTA FORM ENVIRONMENT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
          <div className="p-6 bg-white border border-black/10 rounded-2xl space-y-2">
            <div className="text-lime-700 font-mono text-xs font-bold uppercase">01 // AUTONOMY</div>
            <h3 className="text-xl font-serif font-bold text-[#121316]">Compact Strike Teams</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Zero bureaucracy. Direct collaboration with client executive boards and founding partners.
            </p>
          </div>

          <div className="p-6 bg-white border border-black/10 rounded-2xl space-y-2">
            <div className="text-lime-700 font-mono text-xs font-bold uppercase">02 // STACK</div>
            <h3 className="text-xl font-serif font-bold text-[#121316]">No Legacy Debt</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Work with hardware-accelerated 3D shaders, multi-agent LLM systems, and cutting-edge React architectures.
            </p>
          </div>

          <div className="p-6 bg-white border border-black/10 rounded-2xl space-y-2">
            <div className="text-lime-700 font-mono text-xs font-bold uppercase">03 // COMPENSATION</div>
            <h3 className="text-xl font-serif font-bold text-[#121316]">Top-Tier Equity & Pay</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Global tier-1 compensation, profit share bonuses, and full flexible hybrid work setups in NYC, London, Zurich.
            </p>
          </div>
        </div>
      </div>

      {/* Open Positions List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between pb-8">
          <h2 className="text-3xl font-serif font-bold uppercase text-[#121316]">
            OPEN POSITIONS ({JOBS.length})
          </h2>
          <span className="font-mono text-xs text-lime-700 font-bold uppercase">HIRING NOW</span>
        </div>

        <div className="space-y-6">
          {JOBS.map((job) => (
            <div
              key={job.id}
              className="bg-[#121316] text-[#f8f7f4] rounded-2xl p-8 border border-white/10 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-3 font-mono text-xs text-lime-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                  <span>•</span>
                  <span>{job.department}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold uppercase text-white">
                  {job.title}
                </h3>

                <p className="text-xs font-sans text-gray-300 leading-relaxed">
                  {job.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedJob(job)}
                className="px-6 py-3 bg-lime-400 text-black font-mono text-xs font-bold uppercase rounded-full hover:bg-white transition-colors cursor-pointer flex items-center justify-center gap-2 shrink-0"
              >
                <span>APPLY NOW</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      <Modal
        isOpen={!!selectedJob}
        onClose={closeModal}
        title={selectedJob ? `Application // ${selectedJob.title}` : ''}
      >
        {selectedJob && (
          <div>
            {applicationSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-lime-400 text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-serif font-bold text-white uppercase">
                  APPLICATION RECEIVED
                </h3>
                <p className="text-xs font-sans text-gray-300 max-w-md mx-auto">
                  Thank you, {applicantName}. Our talent directors will review your portfolio and reach out within 48 hours.
                </p>
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 bg-lime-400 text-black font-mono text-xs font-bold uppercase rounded-full mt-4 cursor-pointer"
                >
                  CLOSE WINDOW
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                <div className="p-4 bg-white/5 rounded-xl text-xs font-mono text-gray-300 space-y-1">
                  <div>DEPARTMENT: <span className="text-lime-400">{selectedJob.department}</span></div>
                  <div>LOCATION: <span className="text-white">{selectedJob.location}</span></div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-gray-400 mb-1">YOUR FULL NAME *</label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Alexander Vane"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-lime-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-gray-400 mb-1">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-lime-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-gray-400 mb-1">PORTFOLIO / GITHUB / LINKEDIN URL</label>
                  <input
                    type="url"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="https://github.com/username"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-lime-400"
                  />
                </div>

                {errorMsg && <p className="text-xs text-red-400 font-mono">{errorMsg}</p>}

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-5 py-2.5 bg-white/10 text-white rounded-full font-mono text-xs uppercase cursor-pointer"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-lime-400 text-black font-mono text-xs font-bold uppercase rounded-full hover:bg-white transition-colors cursor-pointer"
                  >
                    SUBMIT APPLICATION
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </Modal>

      <CTASection />
    </div>
  );
};

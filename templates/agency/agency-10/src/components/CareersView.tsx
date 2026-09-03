import React, { useState } from 'react';
import { CAREER_ROLES_DATA, AGENCY_BENEFITS } from '../data/careers';
import { CareerRole } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Upload,
  Check
} from 'lucide-react';

export const CareersView: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<CareerRole | null>(null);
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantGithub, setApplicantGithub] = useState('');
  const [applicantNote, setApplicantNote] = useState('');

  const handleApplyClick = (role: CareerRole) => {
    setSelectedRole(role);
    setApplicationModalOpen(true);
    setFormSubmitted(false);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // simulate receipt
    }, 500);
  };

  return (
    <div id="careers-page" className="pt-24 pb-20 bg-white">
      {/* Header */}
      <div className="bg-slate-950 text-white pt-14 pb-16 relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs border border-blue-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>We Are Actively Hiring</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white mt-4 max-w-3xl leading-tight">
            Build Systems That Redefine Computational Scale.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Join an elite engineering culture where you collaborate directly with world-class peers, ship real production architectures, and enjoy maximum autonomy.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Culture & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="font-mono text-xs text-blue-600 font-bold uppercase">Principle 01</span>
            <h3 className="text-lg font-bold text-slate-900 mt-2">Zero Red Tape or Bureaucracy</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Engineers have direct authority to propose and implement architectural decisions. No multi-tier committees or endless approval cycles.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="font-mono text-xs text-blue-600 font-bold uppercase">Principle 02</span>
            <h3 className="text-lg font-bold text-slate-900 mt-2">Relentless Craftsmanship</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              We care about deterministic latency, memory efficiency, and mathematical rigor. We reject fragile hacks in favor of rock-solid foundations.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="font-mono text-xs text-blue-600 font-bold uppercase">Principle 03</span>
            <h3 className="text-lg font-bold text-slate-900 mt-2">Asynchronous By Default</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              We respect maker time. Minimal meetings, comprehensive written documentation, and total schedule flexibility for deep focus.
            </p>
          </div>
        </div>

        {/* Benefits & Perks */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Total Rewards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mt-2 font-display">
              Designed for Sustainable High Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENCY_BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <DynamicIcon name={benefit.icon} className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">{benefit.title}</h4>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions List */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                Opportunities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mt-2 font-display">
                Open Engineering Roles
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              {CAREER_ROLES_DATA.length} active openings &bull; Global Remote
            </span>
          </div>

          <div className="space-y-4">
            {CAREER_ROLES_DATA.map((role) => (
              <div
                key={role.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-medium">
                      {role.department}
                    </span>
                    <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {role.location}
                    </span>
                    <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {role.employmentType}
                    </span>
                    <span className="text-xs font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                      {role.salaryRange}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">{role.title}</h3>
                  <p className="text-xs text-slate-600 max-w-3xl leading-relaxed">{role.summary}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => handleApplyClick(role)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {applicationModalOpen && selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setApplicationModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Application Dispatched
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, {applicantName}. Our engineering hiring leads review every portfolio personally. Expect a response within 48 business hours.
                </p>
                <button
                  onClick={() => setApplicationModalOpen(false)}
                  className="mt-4 px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <span className="text-xs font-mono text-blue-600 uppercase font-bold">
                  Role Application &bull; {selectedRole.department}
                </span>
                <h3 className="text-xl font-bold text-slate-950 font-display mt-1">
                  Apply for {selectedRole.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {selectedRole.location} &bull; {selectedRole.salaryRange}
                </p>

                <form onSubmit={handleSubmitApplication} className="mt-6 space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="jane@domain.com"
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">GitHub / Portfolio URL *</label>
                    <input
                      type="url"
                      required
                      value={applicantGithub}
                      onChange={(e) => setApplicantGithub(e.target.value)}
                      placeholder="https://github.com/username or portfolio"
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Most Technically Challenging System You Built</label>
                    <textarea
                      rows={3}
                      required
                      value={applicantNote}
                      onChange={(e) => setApplicantNote(e.target.value)}
                      placeholder="Briefly describe the concurrency, throughput, or mathematical bottleneck you solved..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-xs"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors cursor-pointer shadow-sm"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

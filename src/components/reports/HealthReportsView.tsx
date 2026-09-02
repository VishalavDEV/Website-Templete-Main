import React, { useState } from 'react';
import { 
  FlaskConical, 
  UploadCloud, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Download, 
  ChevronRight, 
  Search, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  FileText,
  User,
  Activity,
  Plus
} from 'lucide-react';
import { HealthReport, Biomarker, NavigationTab } from '../../types';

interface HealthReportsViewProps {
  reports?: HealthReport[];
  onOpenUploadModal: () => void;
  onNavigate: (tab: NavigationTab) => void;
}

export const HealthReportsView: React.FC<HealthReportsViewProps> = ({
  reports = [],
  onOpenUploadModal,
  onNavigate,
}) => {
  const [selectedReportId, setSelectedReportId] = useState<string>(reports[0]?.id || '');
  const [phlebotomyModalOpen, setPhlebotomyModalOpen] = useState(false);
  const [phlebotomySuccess, setPhlebotomySuccess] = useState(false);
  const [homeAddress, setHomeAddress] = useState('742 Evergreen Terrace, Palo Alto, CA 94301');
  const [sampleDate, setSampleDate] = useState('Tomorrow (7:30 AM - 8:30 AM Fasting)');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const selectedReport = reports.find(r => r.id === selectedReportId) || reports[0];

  const handleBookHomeSample = (e: React.FormEvent) => {
    e.preventDefault();
    setPhlebotomySuccess(true);
    setTimeout(() => {
      setPhlebotomySuccess(false);
      setPhlebotomyModalOpen(false);
    }, 1800);
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <div className="space-y-6 pb-16">
      
      {/* Top Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2E8F0] shadow-xs relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6F7F3] border border-[#00A884]/20 text-[#00A884] text-xs font-semibold">
            <FlaskConical className="w-3.5 h-3.5 text-[#00A884]" />
            <span>CLIA-Certified Diagnostic Center</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Diagnostic Tests & Lab Reports
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed">
            Track biomarker trajectories, schedule home phlebotomy sample pickups, and receive AI clinical interpretations in plain English.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 relative z-10">
          <button
            onClick={onOpenUploadModal}
            className="px-4 py-2.5 bg-[#00A884] hover:bg-[#009272] text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all flex items-center space-x-2 cursor-pointer"
          >
            <UploadCloud className="w-4 h-4" />
            <span>Upload Lab PDF</span>
          </button>
          
          <button
            onClick={() => setPhlebotomyModalOpen(true)}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs sm:text-sm font-semibold border border-slate-200 transition-all flex items-center space-x-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#00A884]" />
            <span>Book Home Blood Draw</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Left List + Right Report Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Report Selectors */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Diagnostic Records ({reports.length})
            </h2>
            <button 
              onClick={onOpenUploadModal}
              className="text-xs font-bold text-[#00A884] hover:text-[#009272] flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> Upload
            </button>
          </div>

          <div className="space-y-3">
            {reports.map((rep) => {
              const isSelected = rep.id === selectedReportId;
              return (
                <div
                  key={rep.id}
                  onClick={() => setSelectedReportId(rep.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-left space-y-2 ${
                    isSelected
                      ? 'bg-[#E6F7F3] border-[#00A884] shadow-xs'
                      : 'bg-white border-[#E2E8F0] hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                      {rep.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">{rep.reportDate}</span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-800 leading-snug">
                    {rep.testName}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
                    <span className="text-[11px] font-medium">{rep.labName}</span>
                    <span className="text-[#00A884] font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#00A884]" /> Complete
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 2 Columns: Detailed Interactive Report Viewer */}
        {selectedReport ? (
          <div className="lg:col-span-2 space-y-6">
            
            {/* 1. Report Status Tracker Bar */}
            <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {selectedReport.testName}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Issued by <strong>{selectedReport.labName}</strong> • Requisitioned by {selectedReport.doctorRecommended || 'Dr. Specialist'}
                  </p>
                </div>
                <button
                  onClick={handleDownload}
                  className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold border border-slate-200 transition-colors flex items-center space-x-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#00A884]" />
                  <span>{downloadSuccess ? 'Downloaded!' : 'Download PDF'}</span>
                </button>
              </div>

              {/* 4-Step Visual Tracker */}
              <div className="pt-2">
                <div className="grid grid-cols-4 gap-2 text-center text-xs">
                  <div className="space-y-1.5">
                    <div className="h-2 rounded-full bg-[#00A884]" />
                    <span className="font-bold text-slate-800 text-[11px]">1. Booked</span>
                    <span className="block text-[10px] text-slate-400">{selectedReport.bookedDate}</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="h-2 rounded-full bg-[#00A884]" />
                    <span className="font-bold text-slate-800 text-[11px]">2. Sample Drawn</span>
                    <span className="block text-[10px] text-slate-400">{selectedReport.collectedDate}</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="h-2 rounded-full bg-[#00A884]" />
                    <span className="font-bold text-slate-800 text-[11px]">3. Lab Analysis</span>
                    <span className="block text-[10px] text-slate-400">Verified</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="h-2 rounded-full bg-[#00A884] shadow-xs" />
                    <span className="font-bold text-[#00A884] text-[11px]">4. Report Ready</span>
                    <span className="block text-[10px] text-[#00A884] font-semibold">{selectedReport.reportDate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. AI Plain English Clinical Interpretation */}
            <div className="bg-[#F8FAFC] p-6 rounded-3xl border border-[#E2E8F0] shadow-xs space-y-3">
              <div className="flex items-center space-x-2 text-slate-800 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-[#00A884]" />
                <span>Aura AI Clinical Interpretation (Plain English)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedReport.aiAnalysis || selectedReport.summary}
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-slate-200 text-xs text-slate-500">
                <span className="text-[11px] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00A884]" /> AI verified against clinical pathology standards
                </span>
                <button
                  onClick={() => onNavigate('ai')}
                  className="font-bold text-[#00A884] hover:text-[#009272] cursor-pointer"
                >
                  Ask Aura AI Follow-up →
                </button>
              </div>
            </div>

            {/* 3. Biomarkers Table */}
            {selectedReport.biomarkers && selectedReport.biomarkers.length > 0 && (
              <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-xs overflow-hidden">
                <div className="p-5 border-b border-[#E2E8F0] flex items-center justify-between">
                  <h4 className="font-bold text-sm text-slate-800">
                    Biomarker Panel Breakdown ({selectedReport.biomarkers.length} Parameters)
                  </h4>
                  <span className="text-xs text-slate-400">Normal Reference Ranges</span>
                </div>

                <div className="divide-y divide-slate-100">
                  {selectedReport.biomarkers.map((bio, idx) => (
                    <div key={idx} className="p-4 hover:bg-[#F8FAFC] transition-colors space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-xs text-slate-800">{bio.name}</span>
                          <span className="text-[11px] text-slate-400 ml-2">Ref: {bio.referenceRange} {bio.unit}</span>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className="text-right">
                            <span className="text-sm font-bold text-slate-800">
                              {bio.value}
                            </span>
                            <span className="text-[10px] text-slate-400 ml-1">{bio.unit}</span>
                          </div>

                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase border ${
                            bio.status === 'optimal'
                              ? 'bg-[#E6F7F3] text-[#00A884] border-[#00A884]/20'
                              : bio.status === 'borderline'
                                ? 'bg-amber-50 text-amber-700 border-amber-200'
                                : 'bg-rose-50 text-rose-700 border-rose-200'
                          }`}>
                            {bio.status}
                          </span>
                        </div>
                      </div>

                      {bio.interpretation && (
                        <p className="text-[11px] text-slate-500 leading-snug">
                          {bio.interpretation}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Next Steps Recommendations */}
            <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-800">Discuss Results With a Specialist</h4>
                <p className="text-xs text-slate-500 mt-0.5">Book a 15-minute telehealth follow-up to review your metabolic markers.</p>
              </div>
              <button
                onClick={() => onNavigate('appointments')}
                className="px-4 py-2 bg-[#00A884] hover:bg-[#009272] text-white font-bold rounded-xl text-xs shadow-xs cursor-pointer shrink-0"
              >
                Book Review
              </button>
            </div>

          </div>
        ) : (
          <div className="lg:col-span-2 bg-white rounded-3xl border border-[#E2E8F0] p-12 text-center space-y-3">
            <FlaskConical className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">Select a Diagnostic Report</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Choose a report from the list on the left to view comprehensive biomarker breakdowns and AI plain-English analysis.
            </p>
          </div>
        )}

      </div>

      {/* Home Phlebotomy Modal */}
      {phlebotomyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <FlaskConical className="w-5 h-5 text-[#00A884]" />
                <h3 className="font-bold text-base text-slate-800">Schedule Home Blood Draw</h3>
              </div>
              <button
                onClick={() => setPhlebotomyModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {phlebotomySuccess ? (
              <div className="p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#00A884] mx-auto animate-bounce" />
                <h4 className="font-bold text-base text-slate-800">Sample Pickup Scheduled!</h4>
                <p className="text-xs text-slate-500">
                  Certified HealthPlus phlebotomist will visit your residence on <strong>{sampleDate}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookHomeSample} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Home Address
                  </label>
                  <input
                    type="text"
                    value={homeAddress}
                    onChange={(e) => setHomeAddress(e.target.value)}
                    className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-slate-800 focus:bg-white focus:border-[#00A884] outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={sampleDate}
                    onChange={(e) => setSampleDate(e.target.value)}
                    className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-slate-800 focus:bg-white focus:border-[#00A884] outline-none"
                  >
                    <option>Tomorrow (7:30 AM - 8:30 AM Fasting)</option>
                    <option>Tomorrow (8:30 AM - 9:30 AM Fasting)</option>
                    <option>Day After Tomorrow (7:00 AM - 8:00 AM)</option>
                    <option>Weekend Special (8:00 AM - 10:00 AM)</option>
                  </select>
                </div>

                <div className="p-3 bg-[#E6F7F3] rounded-xl text-[11px] text-[#00A884] space-y-1 border border-[#00A884]/20">
                  <span className="font-bold block">Fasting Instructions:</span>
                  <span>10-12 hours fasting required before sample collection. Plain water is permitted.</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setPhlebotomyModalOpen(false)}
                    className="flex-1 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-200 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-[#00A884] hover:bg-[#009272] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                  >
                    Confirm Pickup ($0 Co-pay)
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

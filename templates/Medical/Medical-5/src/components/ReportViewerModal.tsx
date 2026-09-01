import React from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Printer,
  Download,
  Share2,
  FileText,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Calendar,
  User,
  Stethoscope,
  Building,
} from 'lucide-react';

export const ReportViewerModal: React.FC = () => {
  const { selectedReport, closeReport, showToast } = useApp();

  if (!selectedReport) return null;

  const rep = selectedReport;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text/pdf representation download
    const reportText = `
=====================================================
AURA HEALTH - CLINICAL DIAGNOSTIC REPORT
=====================================================
Report ID: ${rep.id}
Patient Name: ${rep.patientName}
Department: ${rep.department}
Consulting Physician: ${rep.doctorName}
Date of Examination: ${rep.date}
Status: ${rep.status}

SUMMARY:
${rep.summary}

MEASUREMENTS & BIOMARKERS:
${rep.measurements
  .map(
    (m) =>
      `- ${m.parameter}: ${m.value} ${m.unit} (Ref: ${m.referenceRange}) [${m.status}]`
  )
  .join('\n')}

CLINICAL OBSERVATIONS:
${rep.observations.map((o) => `* ${o}`).join('\n')}

DOCTOR NOTES:
${rep.doctorNotes}

RECOMMENDATIONS:
${rep.recommendations.map((r) => `> ${r}`).join('\n')}

=====================================================
Digital Signature: Dr. Verified Aura Healthcare
=====================================================
    `.trim();

    const blob = new Blob([reportText], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${rep.id}-${rep.patientName.replace(/\s+/g, '_')}.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Downloaded ${rep.reportType} report`, 'success');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `https://auramedical.internal/portal/reports/${rep.id}`
      );
      showToast('Secure report link copied to clipboard', 'info');
    } else {
      showToast('Secure sharing link generated', 'info');
    }
  };

  return (
    <div
      id="report-viewer-overlay"
      className="fixed inset-0 z-50 bg-[#3E3445]/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={closeReport}
    >
      <div
        className="w-full max-w-3xl bg-[#FFFDFC] rounded-3xl shadow-[0_30px_70px_rgba(90,70,110,0.22)] border border-[#3E3445]/10 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-5 border-b border-[#3E3445]/8 bg-[#F9F7FB] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#E8DDF2] flex items-center justify-center text-[#665080]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-[#8B6FAE] uppercase tracking-wider">
                {rep.id} • {rep.category}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#3E3445] leading-tight">
                {rep.reportType}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              id="report-print-btn"
              onClick={handlePrint}
              className="p-2 text-[#756B7C] hover:text-[#3E3445] hover:bg-[#E8DDF2]/40 rounded-full transition-colors"
              title="Print report"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              id="report-download-btn"
              onClick={handleDownload}
              className="p-2 text-[#756B7C] hover:text-[#3E3445] hover:bg-[#E8DDF2]/40 rounded-full transition-colors"
              title="Download report"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              id="report-share-btn"
              onClick={handleShare}
              className="p-2 text-[#756B7C] hover:text-[#3E3445] hover:bg-[#E8DDF2]/40 rounded-full transition-colors"
              title="Share report securely"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              id="close-report-modal-btn"
              onClick={closeReport}
              className="p-2 text-[#756B7C] hover:text-[#3E3445] hover:bg-[#E8DDF2]/40 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Report Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#F9F7FB] border border-[#3E3445]/6 text-xs">
            <div>
              <span className="text-[#756B7C] block">Patient Name</span>
              <span className="font-bold text-[#3E3445]">{rep.patientName}</span>
            </div>
            <div>
              <span className="text-[#756B7C] block">Date Reviewed</span>
              <span className="font-bold text-[#3E3445]">{rep.date}</span>
            </div>
            <div>
              <span className="text-[#756B7C] block">Reviewing Specialist</span>
              <span className="font-bold text-[#665080]">{rep.doctorName}</span>
            </div>
            <div>
              <span className="text-[#756B7C] block">Report Status</span>
              <span className="inline-flex items-center gap-1 font-bold text-[#739B82]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{rep.status}</span>
              </span>
            </div>
          </div>

          {/* Clinical Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B6FAE] mb-2">
              Clinical Executive Summary
            </h4>
            <div className="p-4 rounded-2xl bg-[#E8DDF2]/30 border border-[#8B6FAE]/15 text-sm text-[#3E3445] leading-relaxed font-medium">
              {rep.summary}
            </div>
          </div>

          {/* Quantitative Measurements Table */}
          {rep.measurements && rep.measurements.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B6FAE] mb-3">
                Biomarkers & Diagnostic Measurements
              </h4>
              <div className="overflow-x-auto rounded-2xl border border-[#3E3445]/10">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F9F7FB] text-[#756B7C] border-b border-[#3E3445]/8">
                    <tr>
                      <th className="p-3 font-bold">Biomarker / Metric</th>
                      <th className="p-3 font-bold">Measured Value</th>
                      <th className="p-3 font-bold">Reference Range</th>
                      <th className="p-3 font-bold text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#3E3445]/6 bg-white">
                    {rep.measurements.map((m, idx) => {
                      const isOpt = m.status === 'Optimal' || m.status === 'Normal';
                      return (
                        <tr key={idx} className="hover:bg-[#F9F7FB]/50">
                          <td className="p-3 font-semibold text-[#3E3445]">{m.parameter}</td>
                          <td className="p-3 font-bold text-[#665080]">
                            {m.value} <span className="font-normal text-[#756B7C]">{m.unit}</span>
                          </td>
                          <td className="p-3 text-[#756B7C]">{m.referenceRange}</td>
                          <td className="p-3 text-right">
                            <span
                              className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                                isOpt
                                  ? 'bg-[#739B82]/15 text-[#739B82]'
                                  : m.status === 'Low'
                                  ? 'bg-[#C99A62]/20 text-[#C99A62]'
                                  : 'bg-[#C77C83]/20 text-[#C77C83]'
                              }`}
                            >
                              {m.status}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Observations & Physician Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#F9F7FB] border border-[#3E3445]/6 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B6FAE]">
                Diagnostic Observations
              </h4>
              <ul className="space-y-1.5 text-xs text-[#3E3445]">
                {rep.observations.map((obs, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6FAE] mt-1.5 shrink-0" />
                    <span>{obs}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#F9F7FB] border border-[#3E3445]/6 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B6FAE]">
                Physician Recommendations
              </h4>
              <ul className="space-y-1.5 text-xs text-[#3E3445]">
                {rep.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#739B82] mt-0.5 shrink-0" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-[#3E3445]/8 bg-[#F9F7FB] flex items-center justify-between">
          <span className="text-xs text-[#756B7C]">
            Verified Diagnostic Laboratory • Aura Health Central
          </span>
          <div className="flex items-center gap-2">
            <button
              id="report-download-bottom-btn"
              onClick={handleDownload}
              className="px-5 py-2 text-xs font-semibold bg-[#8B6FAE] text-white rounded-full hover:bg-[#665080] transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

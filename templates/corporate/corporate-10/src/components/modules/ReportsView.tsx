import React, { useState } from 'react';
import {
  FileText,
  Download,
  Search,
  Filter,
  Calendar,
  ShieldCheck,
  Building2,
  FileSpreadsheet,
  Layers,
  ArrowDownToLine,
  CheckCircle2
} from 'lucide-react';
import { ActiveTab, ReportDocument } from '../../types';
import { REPORT_DOCUMENTS } from '../../data/mockData';
import { triggerDownload } from '../../utils/formatters';

interface ReportsViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  openBookingModal: () => void;
}

export const ReportsView: React.FC<ReportsViewProps> = ({ setActiveTab, openBookingModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');

  const filteredDocs = REPORT_DOCUMENTS.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesYear = selectedYear === 'All' || doc.year.toString() === selectedYear;
    return matchesSearch && matchesCategory && matchesYear;
  });

  const handleDownload = (doc: ReportDocument) => {
    const fileContent = `APEX WEALTH MANAGEMENT OFFICIAL REGULATORY FILING\n===================================================\nDocument: ${doc.title}\nCategory: ${doc.category}\nDate of Issue: ${doc.date}\nFile Size: ${doc.size}\nStatus: SEC / FINMA Certified & Qualified Custodian Audited.\n\nInstitutional Disclosures:\nAll figures verified under Global Investment Performance Standards (GIPS).\nPast performance is no guarantee of future returns.`;
    triggerDownload(`${doc.title.replace(/[^a-zA-Z0-9]/g, '_')}.${doc.fileType.toLowerCase()}`, fileContent);
  };

  return (
    <div className="w-full py-10 space-y-10">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                Statutory &amp; Investor Disclosures
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                GIPS Certified
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
              Reports, Prospectuses &amp; Filings
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Access official quarterly performance factsheets, fund prospectuses, annual shareholder reports, and regulatory filings.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                filteredDocs.forEach((d) => handleDownload(d));
              }}
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl transition-colors"
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>Download Filtered Bundle ({filteredDocs.length})</span>
            </button>
          </div>
        </div>

        {/* Toolbar & Filters */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative md:col-span-2">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search filings, prospectuses, tax guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50"
              />
            </div>

            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-medium"
              >
                <option value="All">All Categories</option>
                <option value="Annual Report">Annual Shareholder Reports</option>
                <option value="Factsheet">Monthly Performance Factsheets</option>
                <option value="Prospectus">Fund Prospectuses &amp; SID</option>
                <option value="Tax Guide">Tax &amp; Regulatory Guides</option>
                <option value="Audit">GIPS Verification &amp; Compliance</option>
              </select>
            </div>

            <div>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-medium"
              >
                <option value="All">All Filing Years</option>
                <option value="2026">2026 Filings</option>
                <option value="2025">2025 Filings</option>
                <option value="2024">2024 Filings</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
            <span>Showing {filteredDocs.length} Official Documents</span>
            <span>All downloads formatted in standardized secure PDF format</span>
          </div>
        </div>
      </section>

      {/* Documents Grid / Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-amber-300 shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-amber-700 shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                      {doc.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">{doc.date}</span>
                  </div>
                  <h3 className="font-display text-sm font-bold text-slate-900 leading-snug">
                    {doc.title}
                  </h3>
                  <div className="text-[11px] text-slate-500 flex items-center gap-3">
                    <span>Format: <strong>{doc.fileType}</strong></span>
                    <span>Size: <strong>{doc.size}</strong></span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                      <CheckCircle2 className="w-3 h-3" /> Certified
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleDownload(doc)}
                className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-amber-300 transition-colors shrink-0"
                title="Download Document"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

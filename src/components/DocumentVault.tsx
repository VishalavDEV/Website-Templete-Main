import React, { useState } from 'react';
import {
  FileText,
  UploadCloud,
  Search,
  Filter,
  Download,
  Eye,
  CheckCircle2,
  Clock,
  Tag,
  Calendar,
  Building,
  Plus,
  Trash2,
  FileCheck,
  FileSpreadsheet,
  FileImage,
  ShieldCheck,
  X,
} from 'lucide-react';
import { MedicalDocument, DocumentCategory } from '../types';

interface DocumentVaultProps {
  documents: MedicalDocument[];
  onUploadDocument: () => void;
  onDeleteDocument: (id: string) => void;
}

export const DocumentVault: React.FC<DocumentVaultProps> = ({
  documents,
  onUploadDocument,
  onDeleteDocument,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDoc, setSelectedDoc] = useState<MedicalDocument | null>(null);

  const categories = [
    { id: 'all', label: 'All Documents', count: documents.length },
    { id: 'lab_reports', label: 'Lab Reports', count: documents.filter(d => d.category === 'lab_reports').length },
    { id: 'prescriptions', label: 'Prescriptions', count: documents.filter(d => d.category === 'prescriptions').length },
    { id: 'vaccinations', label: 'Certificates', count: documents.filter(d => d.category === 'vaccinations').length },
    { id: 'insurance', label: 'Insurance', count: documents.filter(d => d.category === 'insurance').length },
    { id: 'records', label: 'Medical Records', count: documents.filter(d => d.category === 'records').length },
    { id: 'other', label: 'Other', count: documents.filter(d => d.category === 'other').length },
  ];

  const filteredDocuments = documents.filter((doc) => {
    const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.facility.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (doc.doctor && doc.doctor.toLowerCase().includes(searchQuery.toLowerCase())) ||
      doc.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryBadgeColor = (cat: DocumentCategory) => {
    switch (cat) {
      case 'lab_reports':
        return 'bg-[#E3EFE6] text-[#225035] border-[#C2DEC9]';
      case 'prescriptions':
        return 'bg-[#F9ECE7] text-[#933725] border-[#EFC6BC]';
      case 'vaccinations':
        return 'bg-[#EAF0F8] text-[#1E4B7A] border-[#C7D9ED]';
      case 'insurance':
        return 'bg-[#FBF0D9] text-[#8C6212] border-[#EAD5A0]';
      case 'records':
        return 'bg-[#EDE7F6] text-[#553C9A] border-[#D1C4E9]';
      default:
        return 'bg-[#F0EBE1] text-[#4F5E52] border-[#DDD5C5]';
    }
  };

  const getCategoryLabel = (cat: DocumentCategory) => {
    switch (cat) {
      case 'lab_reports': return 'Lab Report';
      case 'prescriptions': return 'Prescription';
      case 'vaccinations': return 'Vaccine Cert';
      case 'insurance': return 'Insurance';
      case 'records': return 'Medical Record';
      default: return 'Document';
    }
  };

  const handleDownloadDoc = (doc: MedicalDocument) => {
    const content = `NUVITA HEALTH VAULT\nDocument: ${doc.title}\nCategory: ${doc.category}\nDate: ${doc.date}\nFacility: ${doc.facility}\nDoctor: ${doc.doctor || 'N/A'}\nStatus: ${doc.status}\n\nClinical Summary:\n${doc.summary || 'Verified authentic encrypted health document.'}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${doc.title.replace(/\s+/g, '_')}_${doc.date.replace(/[\s,]+/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#E5E2DD]">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#A8904F] uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#A8904F]" />
            <span>Encrypted Health Storage</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-[#2D3A2D] mt-1">
            Your Health Documents
          </h1>
          <p className="text-sm text-[#5A5A40] mt-1 max-w-2xl">
            Everything important, safely organized. All medical reports, prescriptions, and insurance records are protected by zero-knowledge encryption.
          </p>
        </div>

        {/* Upload Action Button */}
        <button
          id="upload-new-document-btn"
          onClick={onUploadDocument}
          className="px-5 py-2.5 rounded-xl bg-[#2D3A2D] hover:bg-[#1F2B1F] text-xs font-semibold text-white flex items-center space-x-2 shadow-sm transition-all shrink-0"
        >
          <UploadCloud className="w-4 h-4 text-[#A8904F]" />
          <span>Upload Document</span>
        </button>
      </div>

      {/* Search & Category Filter Toolbar */}
      <div className="space-y-4">
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#5A5A40]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search documents by title, facility, doctor, or biomarker tag..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-[#E5E2DD] rounded-xl text-xs sm:text-sm text-[#2D3A2D] placeholder-[#5A5A40]/70 focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20 focus:border-[#2D3A2D] transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#5A5A40] hover:text-[#2D3A2D]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`doc-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center space-x-1.5 border ${
                  isActive
                    ? 'bg-[#2D3A2D] text-white border-[#2D3A2D] shadow-xs'
                    : 'bg-white text-[#5A5A40] border-[#E5E2DD] hover:bg-[#F5F2ED]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                  isActive ? 'bg-white/20 text-white' : 'bg-[#F5F2ED] text-[#5A5A40]'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Document Grid Cards */}
      {filteredDocuments.length === 0 ? (
        <div className="p-12 rounded-2xl bg-white border border-[#E5E2DD] text-center space-y-3 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-[#F5F2ED] text-[#5A5A40] flex items-center justify-center mx-auto border border-[#E5E2DD]">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold font-serif text-[#2D3A2D]">No documents match your query</h3>
          <p className="text-xs text-[#5A5A40] max-w-sm mx-auto">
            Try adjusting your search keywords or select another category filter.
          </p>
          <button
            onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
            className="text-xs text-[#A8904F] font-bold underline"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredDocuments.map((doc) => (
            <div
              key={doc.id}
              className="group relative rounded-2xl bg-white border border-[#E5E2DD] hover:border-[#2D3A2D] p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              
              {/* Card Top */}
              <div>
                
                {/* Header Badge & File Type */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${getCategoryBadgeColor(doc.category)}`}>
                    {getCategoryLabel(doc.category)}
                  </span>
                  <div className="flex items-center space-x-1 text-[11px] text-[#5A5A40] font-mono">
                    <span className="font-semibold">{doc.fileType}</span>
                    <span>•</span>
                    <span>{doc.fileSize}</span>
                  </div>
                </div>

                {/* Document Title */}
                <h3 className="text-base font-bold font-serif text-[#2D3A2D] line-clamp-2 group-hover:text-[#2D3A2D] transition-colors">
                  {doc.title}
                </h3>

                {/* Date & Facility Metadata */}
                <div className="mt-3 space-y-1 text-xs text-[#5A5A40]">
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#A8904F] shrink-0" />
                    <span>{doc.date}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Building className="w-3.5 h-3.5 text-[#A8904F] shrink-0" />
                    <span className="truncate">{doc.facility}</span>
                  </div>
                </div>

                {/* Summary Snippet */}
                {doc.summary && (
                  <p className="mt-3 text-[11px] text-[#5A5A40] line-clamp-2 bg-[#F5F2ED] p-2 rounded-xl border border-[#E5E2DD]">
                    {doc.summary}
                  </p>
                )}

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {doc.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-[#F5F2ED] text-[#5A5A40] border border-[#E5E2DD]">
                      #{t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="mt-5 pt-3.5 border-t border-[#E5E2DD] flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-[10px] text-[#2D3A2D] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A8904F]" />
                  <span>{doc.status}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedDoc(doc)}
                    className="px-3 py-1.5 rounded-xl bg-[#F5F2ED] hover:bg-[#E5E2DD] text-xs font-semibold text-[#2D3A2D] flex items-center space-x-1 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View</span>
                  </button>
                  <button
                    onClick={() => handleDownloadDoc(doc)}
                    className="p-1.5 rounded-xl text-[#5A5A40] hover:bg-[#F5F2ED] transition-colors"
                    title="Download document copy"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onDeleteDocument(doc.id)}
                    className="p-1.5 rounded-xl text-red-600 hover:bg-red-50 transition-colors"
                    title="Archive or delete document"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Document View Preview Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-[#E5E2DD] p-6 sm:p-8 shadow-2xl space-y-6 text-[#2D3A2D]">
            
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E2DD]">
              <div className="flex items-center space-x-2">
                <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider border ${getCategoryBadgeColor(selectedDoc.category)}`}>
                  {getCategoryLabel(selectedDoc.category)}
                </span>
                <span className="text-xs font-mono text-[#5A5A40]">
                  {selectedDoc.fileType} • {selectedDoc.fileSize}
                </span>
              </div>
              <button
                onClick={() => setSelectedDoc(null)}
                className="p-2 rounded-xl hover:bg-[#F5F2ED] text-[#5A5A40] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Document Header */}
            <div>
              <h2 className="text-2xl font-bold font-serif text-[#2D3A2D]">
                {selectedDoc.title}
              </h2>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-[#5A5A40]">
                <p><strong>Issuing Center:</strong> {selectedDoc.facility}</p>
                <p><strong>Recorded Date:</strong> {selectedDoc.date}</p>
                {selectedDoc.doctor && <p><strong>Physician:</strong> {selectedDoc.doctor}</p>}
                <p><strong>Verification:</strong> Encrypted SHA-256 Validated</p>
              </div>
            </div>

            {/* Simulated Medical Document Body */}
            <div className="p-5 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#E5E2DD] text-[#2D3A2D] font-bold">
                <span>LAB / CLINICAL REPORT SUMMARY</span>
                <span>STATUS: VERIFIED</span>
              </div>
              <p className="text-[#2D3A2D] leading-relaxed">
                {selectedDoc.summary || 'Authentic clinical record registered in Nuvita Health Ledger.'}
              </p>
              <div className="pt-2 text-[11px] text-[#5A5A40]">
                Tags: {selectedDoc.tags.map(t => `#${t}`).join(' ')}
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={() => setSelectedDoc(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-[#5A5A40] hover:bg-[#F5F2ED]"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  handleDownloadDoc(selectedDoc);
                  setSelectedDoc(null);
                }}
                className="px-5 py-2 rounded-xl bg-[#2D3A2D] text-white text-xs font-semibold hover:bg-[#1F2B1F] flex items-center space-x-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download File</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

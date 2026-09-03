import React, { useState } from 'react';
import { X, UploadCloud, FileText, CheckCircle2, AlertCircle, Plus } from 'lucide-react';
import { MedicalDocument, DocumentCategory } from '../../types';

interface UploadDocModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (newDoc: MedicalDocument) => void;
}

export const UploadDocModal: React.FC<UploadDocModalProps> = ({
  isOpen,
  onClose,
  onUpload,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<DocumentCategory>('lab_reports');
  const [facility, setFacility] = useState('');
  const [doctor, setDoctor] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [summary, setSummary] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('1.8 MB');
  const [isDragging, setIsDragging] = useState(false);

  if (!isOpen) return null;

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFileName(file.name);
      setFileSize(`${(file.size / (1024 * 1024)).toFixed(1)} MB`);
      if (!title) {
        setTitle(file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '));
      }
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      setFileSize(`${(file.size / (1024 * 1024)).toFixed(1)} MB`);
      if (!title) {
        setTitle(file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newDoc: MedicalDocument = {
      id: `doc_${Date.now()}`,
      title: title || 'New Health Document',
      category,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      fileType: fileName.endsWith('.png') || fileName.endsWith('.jpg') ? 'PNG' : 'PDF',
      fileSize: fileSize || '1.5 MB',
      facility: facility || 'Apex Diagnostics Center',
      doctor: doctor || undefined,
      status: 'Verified',
      tags: tagsInput ? tagsInput.split(',').map(t => t.trim()).filter(Boolean) : ['Uploaded Record'],
      summary: summary || 'Encrypted record securely indexed in Nuvita Health Vault.',
    };

    onUpload(newDoc);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-2xl border border-[#E5E2DD] p-6 sm:p-8 shadow-2xl space-y-5 text-[#2D3A2D]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E2DD]">
          <div className="flex items-center space-x-2">
            <UploadCloud className="w-5 h-5 text-[#A8904F]" />
            <h2 className="text-xl font-bold font-serif text-[#2D3A2D]">
              Upload Medical Document
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[#F5F2ED] text-[#5A5A40]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drag & Drop Area */}
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleFileDrop}
          className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors cursor-pointer ${
            isDragging ? 'border-[#2D3A2D] bg-[#F5F2ED]' : 'border-[#E5E2DD] bg-[#F5F2ED]/60 hover:bg-[#F5F2ED]'
          }`}
          onClick={() => document.getElementById('file-upload-input')?.click()}
        >
          <input
            id="file-upload-input"
            type="file"
            className="hidden"
            accept=".pdf,.png,.jpg,.jpeg,.dicom"
            onChange={handleFileInput}
          />
          <UploadCloud className="w-8 h-8 text-[#A8904F] mx-auto mb-2" />
          <p className="text-xs font-bold text-[#2D3A2D]">
            {fileName ? fileName : 'Drag & drop your medical file here, or browse'}
          </p>
          <p className="text-[11px] text-[#5A5A40] mt-0.5">
            Supported formats: PDF, DICOM, PNG, JPG (Max 25MB) • Zero-Knowledge Encrypted
          </p>
        </div>

        {/* Form Details */}
        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          
          <div>
            <label className="block font-semibold text-[#2D3A2D] mb-1">Document Title</label>
            <input
              type="text"
              required
              placeholder="e.g. Annual Blood Lipid & Metabolic Panel"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#2D3A2D] mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as DocumentCategory)}
                className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
              >
                <option value="lab_reports">Lab Report</option>
                <option value="prescriptions">Prescription</option>
                <option value="vaccinations">Vaccination Certificate</option>
                <option value="insurance">Insurance Policy / E-Card</option>
                <option value="records">Clinical / Dental Record</option>
                <option value="other">Other Health Record</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-[#2D3A2D] mb-1">Issuing Health Center</label>
              <input
                type="text"
                placeholder="e.g. Apex Diagnostics Center"
                value={facility}
                onChange={(e) => setFacility(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#2D3A2D] mb-1">Prescribing Doctor (Optional)</label>
              <input
                type="text"
                placeholder="e.g. Dr. Anita Desai"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#2D3A2D] mb-1">Tags (comma-separated)</label>
              <input
                type="text"
                placeholder="e.g. Blood Test, Cholesterol, HbA1c"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#2D3A2D] mb-1">Clinical Highlights / Summary</label>
            <textarea
              rows={2}
              placeholder="Key diagnostic observations, normal biomarker findings, or doctor instructions..."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
            />
          </div>

          {/* Actions */}
          <div className="pt-3 border-t border-[#E5E2DD] flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-[#5A5A40] hover:bg-[#F5F2ED]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#2D3A2D] hover:bg-[#1F2B1F] text-white text-xs font-bold shadow-sm flex items-center space-x-1.5"
            >
              <UploadCloud className="w-3.5 h-3.5 text-[#A8904F]" />
              <span>Encrypt & Store Document</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

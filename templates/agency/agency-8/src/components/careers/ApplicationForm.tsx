import React, { useState, useRef } from 'react';
import { ArrowUpRight, UploadCloud, FileText, Check, AlertCircle, X } from 'lucide-react';
import { JobApplicationState, CursorType } from '../../types';

interface ApplicationFormProps {
  initialJobId: string | number;
  initialJobTitle: string;
  onSubmitSuccess: () => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  introduction?: string;
  portfolio?: string;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  initialJobId,
  initialJobTitle,
  onSubmitSuccess,
  setCursorType,
}) => {
  const [formData, setFormData] = useState<JobApplicationState>({
    jobId: initialJobId,
    jobTitle: initialJobTitle,
    name: '',
    email: '',
    portfolio: '',
    linkedin: '',
    introduction: '',
    resumeFileName: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.introduction.trim()) {
      newErrors.introduction = 'Please include a brief note about yourself and your work.';
    } else if (formData.introduction.trim().length < 20) {
      newErrors.introduction = 'Please write at least a couple sentences (20+ chars).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitSuccess();
    }, 800);
  };

  const handleSimulatedFileUpload = (file: File) => {
    setFormData((prev) => ({
      ...prev,
      resumeFileName: file.name,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleSimulatedFileUpload(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleSimulatedFileUpload(e.dataTransfer.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name & Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="applicant-name" className="block font-mono text-xs uppercase tracking-widest text-[#888888]">
            YOUR NAME <span className="text-[#0066FF]">*</span>
          </label>
          <input
            id="applicant-name"
            type="text"
            placeholder="e.g. Maya Lin"
            value={formData.name}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, name: e.target.value }));
              if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
            }}
            className={`w-full px-4 py-3.5 bg-white/[0.03] border ${
              errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-[#0066FF]'
            } text-[#FAF9F6] placeholder-[#555555] font-body text-sm outline-none transition-colors`}
          />
          {errors.name && (
            <p className="font-mono text-[11px] text-red-400 flex items-center gap-1.5 pt-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="applicant-email" className="block font-mono text-xs uppercase tracking-widest text-[#888888]">
            EMAIL ADDRESS <span className="text-[#0066FF]">*</span>
          </label>
          <input
            id="applicant-email"
            type="email"
            placeholder="e.g. maya@domain.com"
            value={formData.email}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }));
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            className={`w-full px-4 py-3.5 bg-white/[0.03] border ${
              errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-[#0066FF]'
            } text-[#FAF9F6] placeholder-[#555555] font-body text-sm outline-none transition-colors`}
          />
          {errors.email && (
            <p className="font-mono text-[11px] text-red-400 flex items-center gap-1.5 pt-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      {/* Portfolio URL & LinkedIn URL Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="applicant-portfolio" className="block font-mono text-xs uppercase tracking-widest text-[#888888]">
            PORTFOLIO / SITE URL
          </label>
          <input
            id="applicant-portfolio"
            type="url"
            placeholder="https://yourwork.design"
            value={formData.portfolio}
            onChange={(e) => setFormData((prev) => ({ ...prev, portfolio: e.target.value }))}
            className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/15 focus:border-[#0066FF] text-[#FAF9F6] placeholder-[#555555] font-body text-sm outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="applicant-linkedin" className="block font-mono text-xs uppercase tracking-widest text-[#888888]">
            LINKEDIN / GITHUB / X
          </label>
          <input
            id="applicant-linkedin"
            type="text"
            placeholder="e.g. linkedin.com/in/..."
            value={formData.linkedin}
            onChange={(e) => setFormData((prev) => ({ ...prev, linkedin: e.target.value }))}
            className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/15 focus:border-[#0066FF] text-[#FAF9F6] placeholder-[#555555] font-body text-sm outline-none transition-colors"
          />
        </div>
      </div>

      {/* Introduction */}
      <div className="space-y-2">
        <label htmlFor="applicant-intro" className="block font-mono text-xs uppercase tracking-widest text-[#888888]">
          SHORT INTRODUCTION & PERSPECTIVE <span className="text-[#0066FF]">*</span>
        </label>
        <textarea
          id="applicant-intro"
          rows={4}
          placeholder="Tell us what you care about, what kind of work excites you, or what you want to build next..."
          value={formData.introduction}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, introduction: e.target.value }));
            if (errors.introduction) setErrors((prev) => ({ ...prev, introduction: undefined }));
          }}
          className={`w-full p-4 bg-white/[0.03] border ${
            errors.introduction ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-[#0066FF]'
          } text-[#FAF9F6] placeholder-[#555555] font-body text-sm outline-none transition-colors resize-none`}
        />
        {errors.introduction && (
          <p className="font-mono text-[11px] text-red-400 flex items-center gap-1.5 pt-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.introduction}</span>
          </p>
        )}
      </div>

      {/* Simulated Resume Upload */}
      <div className="space-y-2">
        <span className="block font-mono text-xs uppercase tracking-widest text-[#888888]">
          RESUME / CURRICULUM VITAE (PDF / DOC)
        </span>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
        />

        {formData.resumeFileName ? (
          <div className="flex items-center justify-between p-4 bg-[#0066FF]/10 border border-[#0066FF]/40 font-mono text-xs text-[#FAF9F6]">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#0066FF]" />
              <span className="font-semibold">{formData.resumeFileName}</span>
              <span className="text-[#888888]">(Ready for review)</span>
            </div>

            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, resumeFileName: null }))}
              className="text-[#888888] hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`p-6 border border-dashed text-center cursor-pointer transition-colors ${
              isDragging
                ? 'border-[#0066FF] bg-[#0066FF]/5'
                : 'border-white/20 bg-white/[0.01] hover:border-white/40 hover:bg-white/[0.02]'
            }`}
          >
            <UploadCloud className="w-6 h-6 text-[#888888] mx-auto mb-2" />
            <p className="font-mono text-xs text-[#FAF9F6] uppercase tracking-wider">
              DRAG & DROP YOUR RESUME OR <span className="text-[#0066FF] underline">BROWSE</span>
            </p>
            <p className="font-mono text-[10px] text-[#666666] mt-1">
              PDF, DOC, or DOCX up to 10MB (Simulated client-side demo)
            </p>
          </div>
        )}
      </div>

      {/* Submission Button */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="font-mono text-[10px] text-[#666666] uppercase tracking-wider">
          PRIVACY RESPECTED &bull; NO SPAM
        </span>

        <button
          type="submit"
          disabled={isSubmitting}
          onMouseEnter={() => setCursorType('button')}
          onMouseLeave={() => setCursorType('default')}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#0066FF] hover:brightness-110 disabled:opacity-50 text-white font-mono text-xs uppercase tracking-widest font-bold border border-[#0066FF]/50 transition-all cursor-pointer shadow-lg shadow-[#0066FF]/20"
        >
          <span>{isSubmitting ? 'PROCESSING...' : 'SUBMIT APPLICATION'}</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};

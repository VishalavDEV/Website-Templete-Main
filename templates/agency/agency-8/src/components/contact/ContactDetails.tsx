import React from 'react';
import { InquiryData, CursorType } from '../../types';
import { User, Mail, Building, Globe, MessageSquare, AlertCircle } from 'lucide-react';

interface ContactDetailsProps {
  formData: InquiryData;
  onChange: (field: keyof InquiryData, value: string) => void;
  errors: Partial<Record<keyof InquiryData, string>>;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ContactDetails: React.FC<ContactDetailsProps> = ({
  formData,
  onChange,
  errors,
  setCursorType,
}) => {
  return (
    <div className="space-y-6 pt-2">
      {/* 2-Column Grid for Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label
            htmlFor="inquiry-name"
            className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#888888]"
          >
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>Your Name *</span>
            </span>
            {errors.name && (
              <span className="text-rose-400 text-[11px] font-mono lowercase flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </span>
            )}
          </label>
          <input
            id="inquiry-name"
            type="text"
            value={formData.name}
            onChange={(e) => onChange('name', e.target.value)}
            placeholder="e.g. Alex Morgan"
            onFocus={() => setCursorType('text')}
            onBlur={() => setCursorType('default')}
            className={`w-full px-5 py-4 rounded-xl bg-white/[0.03] border text-[#FAF9F6] placeholder-[#888888]/60 focus:outline-none transition-all duration-300 ${
              errors.name
                ? 'border-rose-500/60 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                : 'border-white/15 focus:border-[#0066FF] focus:bg-white/[0.06]'
            }`}
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="inquiry-email"
            className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#888888]"
          >
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>Email Address *</span>
            </span>
            {errors.email && (
              <span className="text-rose-400 text-[11px] font-mono lowercase flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </span>
            )}
          </label>
          <input
            id="inquiry-email"
            type="email"
            value={formData.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="alex@company.com"
            onFocus={() => setCursorType('text')}
            onBlur={() => setCursorType('default')}
            className={`w-full px-5 py-4 rounded-xl bg-white/[0.03] border text-[#FAF9F6] placeholder-[#888888]/60 focus:outline-none transition-all duration-300 ${
              errors.email
                ? 'border-rose-500/60 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                : 'border-white/15 focus:border-[#0066FF] focus:bg-white/[0.06]'
            }`}
          />
        </div>
      </div>

      {/* 2-Column Grid for Company & Website */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Company */}
        <div className="space-y-2">
          <label
            htmlFor="inquiry-company"
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#888888]"
          >
            <Building className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>Company / Studio (Optional)</span>
          </label>
          <input
            id="inquiry-company"
            type="text"
            value={formData.company}
            onChange={(e) => onChange('company', e.target.value)}
            placeholder="e.g. Acme Studio"
            onFocus={() => setCursorType('text')}
            onBlur={() => setCursorType('default')}
            className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/15 text-[#FAF9F6] placeholder-[#888888]/60 focus:outline-none focus:border-[#0066FF] focus:bg-white/[0.06] transition-all duration-300"
          />
        </div>

        {/* Website */}
        <div className="space-y-2">
          <label
            htmlFor="inquiry-website"
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#888888]"
          >
            <Globe className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>Website / URL (Optional)</span>
          </label>
          <input
            id="inquiry-website"
            type="url"
            value={formData.website}
            onChange={(e) => onChange('website', e.target.value)}
            placeholder="https://"
            onFocus={() => setCursorType('text')}
            onBlur={() => setCursorType('default')}
            className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/15 text-[#FAF9F6] placeholder-[#888888]/60 focus:outline-none focus:border-[#0066FF] focus:bg-white/[0.06] transition-all duration-300"
          />
        </div>
      </div>

      {/* Message Area */}
      <div className="space-y-2">
        <label
          htmlFor="inquiry-message"
          className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#888888]"
        >
          <span className="flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>Project Overview *</span>
          </span>
          {errors.message && (
            <span className="text-rose-400 text-[11px] font-mono lowercase flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.message}
            </span>
          )}
        </label>
        <textarea
          id="inquiry-message"
          rows={4}
          value={formData.message}
          onChange={(e) => onChange('message', e.target.value)}
          placeholder="Tell us what you're trying to achieve..."
          onFocus={() => setCursorType('text')}
          onBlur={() => setCursorType('default')}
          className={`w-full px-5 py-4 rounded-xl bg-white/[0.03] border text-[#FAF9F6] placeholder-[#888888]/60 focus:outline-none transition-all duration-300 resize-none ${
            errors.message
              ? 'border-rose-500/60 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
              : 'border-white/15 focus:border-[#0066FF] focus:bg-white/[0.06]'
          }`}
        />
      </div>
    </div>
  );
};

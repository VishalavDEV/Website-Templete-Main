import React from "react";
import { ArrowUpRight, Mail, Phone, MapPin, ShieldCheck, Cpu } from "lucide-react";
import { companyInfo } from "../../data/companyInfo";
import { Button } from "../common/Button";

export interface FinalCtaSectionProps {
  onOpenScoping: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenScoping }) => {
  return (
    <section className="py-24 md:py-36 bg-[#0A2E23] text-[#FAF8F5] relative overflow-hidden">
      {/* Abstract Architectural Line Grid Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#CCF34A" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Monospace Tag */}
        <div className="flex items-center gap-3 font-mono-tech text-[11px] uppercase tracking-widest text-[#CCF34A] mb-8">
          <span className="font-bold border border-[#CCF34A]/60 px-1.5 py-0.5 rounded-xs">14</span>
          <span>Direct Executive Engagement</span>
        </div>

        {/* Massive Headline & CTA Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light text-[#FAF8F5] leading-[1.04] tracking-tight">
              Have a difficult problem? <br />
              <span className="italic font-normal text-[#CCF34A]">
                Let's solve it.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#E6E2D8] font-normal leading-relaxed max-w-xl">
              Whether you are architecting a next-generation AI platform, modernizing monolithic legacy infrastructure, or scaling multi-region cloud services, our systems architects are ready to assist.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
            <Button
              variant="lime"
              size="xl"
              onClick={onOpenScoping}
              withDiagonalArrow
              className="w-full text-center"
            >
              Start a Conversation
            </Button>

            <Button
              variant="dark"
              size="lg"
              to="/contact"
              withArrow
              className="w-full text-center border-[#114535]"
            >
              Direct Office Inquiries
            </Button>
          </div>
        </div>

        {/* Direct Contact & Assurance Bar */}
        <div className="mt-16 pt-10 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-tech text-xs text-[#E6E2D8]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xs bg-[#114535] text-[#CCF34A]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-[#A1A7B4] uppercase">Principal Inquiries</div>
              <a href={`mailto:${companyInfo.email}`} className="text-white hover:text-[#CCF34A] transition-colors">
                {companyInfo.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xs bg-[#114535] text-[#CCF34A]">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-[#A1A7B4] uppercase">Global Switchboard</div>
              <a href={`tel:${companyInfo.phone}`} className="text-white hover:text-[#CCF34A] transition-colors">
                {companyInfo.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xs bg-[#114535] text-[#CCF34A]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-[#A1A7B4] uppercase">Confidentiality Standard</div>
              <span className="text-white">Mutual NDA Executed Prior to Discovery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

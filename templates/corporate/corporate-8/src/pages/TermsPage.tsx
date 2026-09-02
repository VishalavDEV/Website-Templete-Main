import React from "react";
import { Breadcrumb } from "../components/common/Breadcrumb";

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Terms of Engagement" }]} />

        <div className="space-y-6 mb-12">
          <div className="font-mono-tech text-xs uppercase tracking-widest text-[#0A2E23]">
            LEGAL FRAMEWORK & MASTER SERVICES
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-light text-[#121316] tracking-tight">
            Terms of Master Engagement
          </h1>

          <p className="text-sm font-mono-tech text-[#7C828D]">
            LAST REVISED: FEBRUARY 2026 // VERSION 4.0
          </p>
        </div>

        <div className="bg-white border border-[#E6E2D8] p-8 sm:p-12 rounded-xs space-y-8 text-sm text-[#5E636E] leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-serif-editorial text-2xl text-[#121316]">
              1. Master Services Agreement (MSA)
            </h2>
            <p>
              All engineering engagements, architecture reviews, and dedicated team staffing provided by Vertexa Technologies Inc. are governed by executed Statements of Work (SOW) referencing our standard Master Services Agreement and Mutual Non-Disclosure Agreement.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-editorial text-2xl text-[#121316]">
              2. Intellectual Property (IP) Ownership
            </h2>
            <p>
              Upon receipt of final payment as stipulated in the relevant Statement of Work, all bespoke source code, database architectures, algorithmic pipelines, and custom designs created exclusively for the client vest 100% in the client organization as work-for-hire.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-editorial text-2xl text-[#121316]">
              3. Service Level Agreements (SLAs) & High-Availability
            </h2>
            <p>
              For clients enrolled in our 24/7 Follow-the-Sun SRE and Infrastructure Management tier, Vertexa guarantees response times and uptime thresholds up to 99.999% as detailed in individual enterprise SLA schedules.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-editorial text-2xl text-[#121316]">
              4. Governing Law & Dispute Resolution
            </h2>
            <p>
              Unless otherwise agreed in writing via specialized regional schedules, these terms and all associated engagement contracts are governed by the laws of the State of New York, USA.
            </p>
          </div>

          <div className="pt-6 border-t border-[#E6E2D8] font-mono-tech text-xs text-[#7C828D]">
            Legal inquiries or redline requests can be directed to legal@vertexatech.com.
          </div>
        </div>
      </div>
    </div>
  );
};

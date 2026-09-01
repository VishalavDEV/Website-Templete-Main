import React from "react";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} />

        <div className="space-y-6 mb-12">
          <div className="font-mono-tech text-xs uppercase tracking-widest text-[#0A2E23]">
            DATA PROTECTION & COMPLIANCE
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-light text-[#121316] tracking-tight">
            Privacy Policy & Data Sovereign Standards
          </h1>

          <p className="text-sm font-mono-tech text-[#7C828D]">
            LAST REVISED: FEBRUARY 2026 // VERSION 4.2
          </p>
        </div>

        <div className="bg-white border border-[#E6E2D8] p-8 sm:p-12 rounded-xs space-y-8 text-sm text-[#5E636E] leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-serif-editorial text-2xl text-[#121316]">
              1. Institutional Commitment to Privacy
            </h2>
            <p>
              Vertexa Technologies Inc. ("Vertexa", "we", "us") operates as a global enterprise systems consultancy and digital engineering firm. We are dedicated to maintaining the highest standards of confidentiality, data integrity, and regulatory compliance (including GDPR, CCPA/CPRA, and HIPAA).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-editorial text-2xl text-[#121316]">
              2. Data We Ingest & Process
            </h2>
            <p>
              We collect corporate contact information provided during RFP inquiries, client discovery scoping, and career applications. We do not sell, rent, or trade enterprise telemetry or personal identifiable information (PII) to any third parties.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-editorial text-2xl text-[#121316]">
              3. Sovereign VPC & Zero-Retention AI Pipelines
            </h2>
            <p>
              In delivering custom artificial intelligence architectures, Vertexa adheres strictly to client VPC boundary isolation. Models fine-tuned on client proprietary datasets are deployed entirely within client tenant boundaries and never shared across instances or used to train third-party foundational models.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-editorial text-2xl text-[#121316]">
              4. Security Audits & Certifications
            </h2>
            <p>
              Our infrastructure and internal policies undergo continuous annual audits under SOC 2 Type II, ISO/IEC 27001, and FedRAMP High control standards. All communications and code repositories are secured using end-to-end encryption (TLS 1.3 in transit and AES-256 at rest).
            </p>
          </div>

          <div className="pt-6 border-t border-[#E6E2D8] font-mono-tech text-xs text-[#7C828D]">
            For inquiries regarding enterprise Data Protection Agreements (DPAs) or mutual NDA execution, contact our Data Protection Officer at dpo@vertexatech.com.
          </div>
        </div>
      </div>
    </div>
  );
};

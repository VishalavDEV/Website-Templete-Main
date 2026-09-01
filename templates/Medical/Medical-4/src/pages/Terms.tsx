import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { siteSettings } from '../data/siteData';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const Terms: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
      <PageHeader 
        title="Terms of Service" 
        subtitle="Please read these terms carefully before using our hospital website and services."
        breadcrumbItems={[{ label: 'Terms of Service' }]}
      />

      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14 max-w-4xl mx-auto">
        <div className="flex flex-col gap-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">1. Introduction</h3>
            <p>Welcome to {siteSettings.organization} ("MediCare"). By accessing our website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms, please do not use our website.</p>
          </div>

          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">2. Use of Website</h3>
            <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice. Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</p>
          </div>

          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">3. Medical Information & Disclaimer</h3>
            <p>Information provided on this website is for educational and informational purposes only and does not substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions regarding a medical condition.</p>
          </div>

          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">4. Appointment Requests</h3>
            <p>Online appointment requests submitted through our website are subject to confirmation by our scheduling desk. Submitting a request does not constitute a confirmed medical appointment until verified via phone or email confirmation.</p>
          </div>

          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">5. Intellectual Property</h3>
            <p>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with copyright notices.</p>
          </div>

          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">6. Limitation of Liability</h3>
            <p>{siteSettings.organization} shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your access to or use of this website or reliance on any information provided herein.</p>
          </div>

          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">7. Contact Information</h3>
            <p>If you have any questions about these Terms of Service, please contact us at {siteSettings.email} or call {siteSettings.phone}.</p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

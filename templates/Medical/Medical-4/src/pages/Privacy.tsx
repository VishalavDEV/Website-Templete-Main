import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { siteSettings } from '../data/siteData';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
      <PageHeader 
        title="Privacy Policy" 
        subtitle="How we collect, use, and protect your personal and medical information."
        breadcrumbItems={[{ label: 'Privacy Policy' }]}
      />

      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14 max-w-4xl mx-auto">
        <div className="flex flex-col gap-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">1. Information We Collect</h3>
            <p>We collect personal and health-related information when you fill out appointment booking forms, contact forms, or register for medical services. This may include your name, email address, phone number, medical history notes, and preferred consultation times.</p>
          </div>

          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">2. How We Use Information</h3>
            <p>The information we collect is used strictly to process appointment requests, coordinate medical care, communicate with you regarding your healthcare visits, and improve our hospital services.</p>
          </div>

          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">3. Appointment & Contact Data</h3>
            <p>Data submitted through appointment and contact forms is encrypted and securely stored in compliance with medical privacy standards. We do not sell or share your personal data with third-party marketers.</p>
          </div>

          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">4. Cookies & Analytics</h3>
            <p>Our website uses standard cookies to enhance user experience, analyze site traffic, and understand how visitors interact with our pages. You can choose to disable cookies through your browser settings.</p>
          </div>

          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">5. Data Security</h3>
            <p>We implement robust administrative, technical, and physical security measures to protect your personal and health information from unauthorized access, alteration, disclosure, or destruction.</p>
          </div>

          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">6. Policy Updates</h3>
            <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
          </div>

          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">7. Contact Us</h3>
            <p>If you have any questions or concerns regarding our privacy practices, please contact us at {siteSettings.email} or call {siteSettings.phone}.</p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

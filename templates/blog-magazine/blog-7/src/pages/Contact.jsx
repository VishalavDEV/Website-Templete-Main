import React from 'react';
import { Breadcrumbs } from '../components/utility/Breadcrumbs';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { Building2 } from 'lucide-react';

export function Contact() {
  const breadcrumbItems = [{ label: 'Contact Bureau' }];

  return (
    <div className="contact-page max-w-7xl mx-auto px-4 md:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Header */}
      <header className="py-10 border-b-2 border-[#141413] bg-white p-6 sm:p-10 mb-10 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D43825] mb-2">
          <Building2 className="w-4 h-4" />
          <span>Editorial Offices & Dispatch Desks</span>
        </div>
        <h1 className="font-serif-headline text-3xl sm:text-5xl font-black text-[#141413] uppercase tracking-tight mb-4">
          Contact The Bureau
        </h1>
        <p className="font-serif-reading text-lg sm:text-xl text-[#52524E] max-w-3xl italic">
          For correspondence with our editors, manuscript submissions, print subscription inquiries, or press credentials.
        </p>
      </header>

      {/* Main 2-Column Spread: ContactForm (7 cols) + ContactInfo (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <div className="lg:col-span-5">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

// Export ContactPage alias
export const ContactPage = Contact;

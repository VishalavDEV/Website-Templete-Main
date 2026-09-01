import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, FileText, Lock, Image as ImageIcon, CheckCircle2, AlertCircle } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const Legal: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'copyright' | 'privacy' | 'terms' | 'licensing'>('copyright');

  useEffect(() => {
    if (location.pathname.includes('privacy')) {
      setActiveTab('privacy');
    } else if (location.pathname.includes('terms')) {
      setActiveTab('terms');
    } else if (location.pathname.includes('licensing')) {
      setActiveTab('licensing');
    } else {
      setActiveTab('copyright');
    }
  }, [location.pathname]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      <Breadcrumbs
        items={[
          { label: 'Legal & Compliance' },
          {
            label:
              activeTab === 'copyright'
                ? 'Copyright & IP'
                : activeTab === 'privacy'
                ? 'Privacy Policy'
                : activeTab === 'terms'
                ? 'Terms of Service'
                : 'Media Licensing'
          }
        ]}
      />

      {/* Page Header */}
      <div className="py-6 sm:py-8 border-b border-[#E8E2D5] dark:border-[#3A342E]">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32] dark:text-[#E27453] mb-2 block">
          Transparency & Legal Framework
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-[#1C1917] dark:text-[#F7F4EE] tracking-tight">
          Copyright, Privacy & Licensing
        </h1>
        <p className="text-base text-[#44403C] dark:text-[#D7D1C6] mt-2 max-w-2xl leading-relaxed font-normal">
          Comprehensive disclosures regarding intellectual property, open media licensing, non-affiliation, and privacy protection.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 my-8 border-b border-[#E8E2D5] dark:border-[#3A342E] pb-4">
        <button
          onClick={() => setActiveTab('copyright')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center space-x-1.5 ${
            activeTab === 'copyright'
              ? 'bg-[#1C1917] dark:bg-[#C85A32] text-white'
              : 'bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] text-[#44403C] dark:text-[#D7D1C6] hover:border-[#C85A32]'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Copyright & IP Notice</span>
        </button>

        <button
          onClick={() => setActiveTab('licensing')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center space-x-1.5 ${
            activeTab === 'licensing'
              ? 'bg-[#1C1917] dark:bg-[#C85A32] text-white'
              : 'bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] text-[#44403C] dark:text-[#D7D1C6] hover:border-[#C85A32]'
          }`}
        >
          <ImageIcon className="w-4 h-4" />
          <span>Media & Image Licensing</span>
        </button>

        <button
          onClick={() => setActiveTab('terms')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center space-x-1.5 ${
            activeTab === 'terms'
              ? 'bg-[#1C1917] dark:bg-[#C85A32] text-white'
              : 'bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] text-[#44403C] dark:text-[#D7D1C6] hover:border-[#C85A32]'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Terms of Service</span>
        </button>

        <button
          onClick={() => setActiveTab('privacy')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center space-x-1.5 ${
            activeTab === 'privacy'
              ? 'bg-[#1C1917] dark:bg-[#C85A32] text-white'
              : 'bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] text-[#44403C] dark:text-[#D7D1C6] hover:border-[#C85A32]'
          }`}
        >
          <Lock className="w-4 h-4" />
          <span>Privacy Policy</span>
        </button>
      </div>

      {/* Tab 1: Copyright & IP Notice */}
      {activeTab === 'copyright' && (
        <div className="space-y-8 text-[#44403C] dark:text-[#D7D1C6] leading-relaxed">
          <section className="p-6 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] space-y-4">
            <h2 className="font-display font-black text-2xl text-[#1C1917] dark:text-[#F7F4EE] flex items-center space-x-2">
              <ShieldCheck className="w-6 h-6 text-[#C85A32] dark:text-[#E27453]" />
              <span>1. Intellectual Property & Original Editorial Works</span>
            </h2>
            <p className="text-sm">
              All written editorial texts, analytical frameworks, article structures, branding assets, custom interface elements, and original publication designs featured on <strong>STORIVA</strong> are protected under international copyright law.
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} STORIVA Magazine / STORIVA Media Group. All rights reserved. No part of this publication’s original editorial articles or layouts may be reproduced, distributed, or transmitted in any form without prior written authorization from the publisher, except in the case of brief citations embodied in critical reviews and certain other non-commercial uses permitted by copyright law.
            </p>
          </section>

          <section className="p-6 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] space-y-4">
            <h2 className="font-display font-black text-xl text-[#1C1917] dark:text-[#F7F4EE]">
              2. Fictional Persona & Non-Affiliation Statement
            </h2>
            <p className="text-sm">
              STORIVA is an independent editorial design and publication template. Contributor names, bylines, biographical notes, and editorial organizations depicted herein are original editorial creations and personae. Any resemblance to real persons, living or deceased, or actual corporate entities is purely coincidental.
            </p>
            <p className="text-sm">
              All product names, logos, trademarks, and registered trademarks mentioned in technological commentary remain the property of their respective owners. Their identification is used solely for editorial identification, descriptive context, and analytical commentary under fair use doctrines, without implying endorsement, sponsorship, or affiliation.
            </p>
          </section>

          <section className="p-6 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] space-y-4">
            <h2 className="font-display font-black text-xl text-[#1C1917] dark:text-[#F7F4EE]">
              3. Digital Millennium Copyright Act (DMCA) Notice
            </h2>
            <p className="text-sm">
              If you believe that any content, image, or text appearing on STORIVA infringes upon your copyright or intellectual property rights, please contact our legal desk directly via our <Link to="/contact" className="text-[#C85A32] dark:text-[#E27453] underline font-bold">Contact Page</Link> with relevant identification details, and we will promptly investigate and take appropriate remedial action.
            </p>
          </section>
        </div>
      )}

      {/* Tab 2: Media & Image Licensing */}
      {activeTab === 'licensing' && (
        <div className="space-y-8 text-[#44403C] dark:text-[#D7D1C6] leading-relaxed">
          <section className="p-6 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] space-y-4">
            <h2 className="font-display font-black text-2xl text-[#1C1917] dark:text-[#F7F4EE] flex items-center space-x-2">
              <ImageIcon className="w-6 h-6 text-[#C85A32] dark:text-[#E27453]" />
              <span>1. Image Licensing & Usage Rights</span>
            </h2>
            <p className="text-sm">
              All editorial photography and visual assets showcased throughout this website are sourced from high-quality creative open repositories (including <strong>Unsplash</strong>) and are published in full compliance with permissive commercial and non-commercial licensing terms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] dark:bg-[#282420] border border-[#E8E2D5] dark:border-[#3A342E] flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <span className="font-bold text-[#1C1917] dark:text-[#F7F4EE]">Free Commercial & Editorial Use</span>
                  <p>All photography is cleared for free editorial reproduction, display, and publication without trademark encumbrance.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] dark:bg-[#282420] border border-[#E8E2D5] dark:border-[#3A342E] flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <span className="font-bold text-[#1C1917] dark:text-[#F7F4EE]">Zero Proprietary Logos or Trademarks</span>
                  <p>Images depict conceptual technology, architectural geometry, science, and nature, avoiding proprietary product marks.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="p-6 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] space-y-4">
            <h2 className="font-display font-black text-xl text-[#1C1917] dark:text-[#F7F4EE]">
              2. Open Source Iconography & Typography
            </h2>
            <p className="text-sm">
              The user interface employs open-source typefaces and iconographic packages licensed under permissive open licenses:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs">
              <li><strong>Lucide Icons:</strong> Distributed under the ISC License.</li>
              <li><strong>Google Web Fonts (Inter, Space Grotesk):</strong> Distributed under the SIL Open Font License (OFL).</li>
              <li><strong>Tailwind CSS Framework:</strong> Distributed under the MIT License.</li>
            </ul>
          </section>
        </div>
      )}

      {/* Tab 3: Terms of Service */}
      {activeTab === 'terms' && (
        <div className="space-y-8 text-[#44403C] dark:text-[#D7D1C6] leading-relaxed">
          <section className="p-6 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] space-y-4">
            <h2 className="font-display font-black text-2xl text-[#1C1917] dark:text-[#F7F4EE] flex items-center space-x-2">
              <FileText className="w-6 h-6 text-[#C85A32] dark:text-[#E27453]" />
              <span>Terms of Service & Acceptable Use</span>
            </h2>
            <p className="text-sm">
              By accessing and interacting with STORIVA, you agree to comply with these terms of service and all applicable laws and regulations.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="p-3.5 rounded-2xl bg-[#FAF7F2] dark:bg-[#282420] border border-[#E8E2D5] dark:border-[#3A342E]">
                <h4 className="font-bold text-[#1C1917] dark:text-[#F7F4EE] mb-1">User Conduct & Integrity</h4>
                <p>You agree not to disrupt website operations, introduce malicious code, or engage in automated mass scraping that degrades performance for other readers.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF7F2] dark:bg-[#282420] border border-[#E8E2D5] dark:border-[#3A342E]">
                <h4 className="font-bold text-[#1C1917] dark:text-[#F7F4EE] mb-1">Editorial Commentary & Advice Disclaimer</h4>
                <p>Articles published on STORIVA are for informational, cultural, and analytical purposes only. Nothing herein constitutes certified legal, financial, or investment advice.</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Tab 4: Privacy Policy */}
      {activeTab === 'privacy' && (
        <div className="space-y-8 text-[#44403C] dark:text-[#D7D1C6] leading-relaxed">
          <section className="p-6 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] space-y-4">
            <h2 className="font-display font-black text-2xl text-[#1C1917] dark:text-[#F7F4EE] flex items-center space-x-2">
              <Lock className="w-6 h-6 text-[#C85A32] dark:text-[#E27453]" />
              <span>Privacy Policy & Data Sovereignty</span>
            </h2>
            <p className="text-sm">
              We respect your digital sovereignty. STORIVA does not monetize, sell, or trade personal data to third-party ad networks or data brokers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] dark:bg-[#282420] border border-[#E8E2D5] dark:border-[#3A342E] space-y-1.5">
                <span className="font-bold text-[#1C1917] dark:text-[#F7F4EE]">Local Storage Only</span>
                <p>Saved articles and theme preferences are stored locally on your device browser without server tracking cookies.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] dark:bg-[#282420] border border-[#E8E2D5] dark:border-[#3A342E] space-y-1.5">
                <span className="font-bold text-[#1C1917] dark:text-[#F7F4EE]">Voluntary Communication</span>
                <p>Any email submitted via our contact desk is used exclusively to respond to your inquiry and is never shared.</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Contact Legal Desk */}
      <div className="mt-12 p-6 rounded-3xl bg-[#FAF7F2] dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <AlertCircle className="w-5 h-5 text-[#C85A32] dark:text-[#E27453] shrink-0" />
          <span className="text-xs text-[#44403C] dark:text-[#D7D1C6]">
            Questions regarding licensing, syndication rights, or compliance?
          </span>
        </div>
        <Link
          to="/contact"
          className="px-4 py-2 rounded-xl bg-[#1C1917] dark:bg-[#C85A32] text-white text-xs font-bold hover:bg-[#C85A32] dark:hover:bg-[#B34722] transition-colors whitespace-nowrap cursor-pointer"
        >
          Contact Legal Desk
        </Link>
      </div>
    </div>
  );
};

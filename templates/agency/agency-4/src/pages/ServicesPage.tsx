import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { CtaSection } from '../components/sections/CtaSection';
import { SERVICES } from '../data/services';
import { CheckCircle2, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

const FAQS = [
  {
    q: 'How long does a typical full studio engagement last?',
    a: 'Complete brand identity and web flagship engagements typically span 8 to 12 weeks. Sprint-based UI/UX product redesigns range between 4 to 6 weeks.'
  },
  {
    q: 'What is your typical project investment budget range?',
    a: 'Our full multidisciplinary engagements start at $25,000. We also offer strategic retainer partnerships for ongoing brand direction and development support starting at $10,000/month.'
  },
  {
    q: 'Do you provide ongoing development & support post-launch?',
    a: 'Yes. Every project includes 60 days of guaranteed post-launch QA support, plus optional quarterly retainer agreements for feature development and optimization.'
  },
  {
    q: 'How do you handle collaboration across different global timezones?',
    a: 'While our main studio is in Copenhagen (CET), our senior team works asynchronously with clients across London, New York, San Francisco, and Tokyo via Slack, Figma, and weekly video syncs.'
  }
];

export const ServicesPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="pt-32 pb-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Full Capabilities"
          title="End-to-end design & technology disciplines."
          subtitle="Discover how our specialized service tiers combine to take your brand from strategic positioning to digital market dominance."
        />

        {/* Embedded Core Services Grid */}
        <ServicesSection />

        {/* Detailed Service Tier Breakdown */}
        <div className="my-24 space-y-16">
          <SectionHeader
            badge="Deliverable Matrix"
            title="What you get with every AURELIA engagement."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                id={`service-${s.id}`}
                className="bg-white p-8 rounded-3xl border border-[#EAE6DF] shadow-sm hover:border-[#D96B43]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#D96B43]">
                      Tier {s.number}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-gray-400">
                      {s.tagline}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-[#1A1918] mb-3">{s.title}</h3>
                  <p className="text-xs text-[#6B6863] leading-relaxed mb-6">{s.fullDescription}</p>

                  <div className="pt-4 border-t border-[#EAE6DF] space-y-2">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-2">Core Deliverables</p>
                    {s.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-[#1A1918]">
                        <CheckCircle2 className="w-4 h-4 text-[#D96B43] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAE6DF]">
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    icon={ArrowRight}
                    onClick={() => navigate(`/contact?service=${encodeURIComponent(s.title)}`)}
                  >
                    Inquire About {s.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <ProcessSection />

        {/* FAQ Accordion */}
        <div className="my-24 max-w-4xl mx-auto">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Everything you need to know before initiating a project."
            align="center"
          />

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#EAE6DF] overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between font-display font-bold text-lg text-[#1A1918] focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#D96B43] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-sm text-[#6B6863] leading-relaxed border-t border-[#FAF8F5] pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              onClick={() => navigate('/contact')}
            >
              Have More Questions? Talk to Us
            </Button>
          </div>
        </div>

      </div>

      <CtaSection />
    </div>
  );
};

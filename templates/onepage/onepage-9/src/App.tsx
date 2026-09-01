import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoCloud } from './components/LogoCloud';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Team } from './components/Team';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { Modal } from './components/Modal';
import { NotificationToast, ToastMessage } from './components/NotificationToast';

import { ServiceItem, CaseStudyItem, PricingPlanItem } from './types';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function App() {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const [activeModal, setActiveModal] = useState<{
    type: 'service' | 'caseStudy' | 'plan' | 'about' | 'legal' | 'consultation' | null;
    data?: any;
  }>({ type: null });

  const [preselectedContactService, setPreselectedContactService] = useState<string>('Digital Transformation');

  const addToast = (title: string, message: string, type: 'success' | 'info' | 'warning' = 'info') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, title, message, type }]);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'strategy', 'performance', 'case-studies', 'testimonials', 'team', 'pricing', 'faq', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenServiceModal = (service: ServiceItem) => {
    setActiveModal({ type: 'service', data: service });
  };

  const handleOpenCaseStudyModal = (caseStudy: CaseStudyItem) => {
    setActiveModal({ type: 'caseStudy', data: caseStudy });
  };

  const handleOpenPlanModal = (plan: PricingPlanItem) => {
    setActiveModal({ type: 'plan', data: plan });
  };

  const handleOpenAboutModal = () => {
    setActiveModal({ type: 'about' });
  };

  const handleOpenConsultationModal = () => {
    setActiveModal({ type: 'consultation' });
  };

  const handleOpenLegalModal = (title: string, typeKey: string) => {
    setActiveModal({ type: 'legal', data: { title, typeKey } });
  };

  const handleSocialClick = (platform: string, personName?: string) => {
    addToast(
      `${platform} Link Triggered`,
      personName
        ? `Opening ${personName}'s executive ${platform} profile.`
        : `Connecting to Vertex Official ${platform} Channel.`,
      'info'
    );
  };

  const handleServiceSelectForContact = (serviceName: string) => {
    setPreselectedContactService(serviceName);
    setActiveModal({ type: null });
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-emerald-200 selection:text-slate-950">
      
      {/* Toast Notification Layer */}
      <NotificationToast toasts={toasts} onDismiss={dismissToast} />

      {/* Top Executive Index Bar */}
      <AnnouncementBar
        isVisible={isAnnouncementVisible}
        onDismiss={() => {
          setIsAnnouncementVisible(false);
          addToast('Status Bar Dismissed', 'Re-enable via footer control.');
        }}
        onExplore={() => {
          handleOpenLegalModal('2026 Enterprise Digital Transformation Benchmark', 'insights');
        }}
      />

      {/* Executive Command Navbar */}
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Executive Command Center Content */}
      <main>
        {/* Hero Executive Business Dashboard */}
        <Hero
          onNavigate={scrollToSection}
          onOpenConsultationModal={handleOpenConsultationModal}
        />

        {/* Editorial Partner Grid */}
        <LogoCloud />

        {/* 01 / ABOUT — Executive Operating Framework */}
        <About
          onOpenAboutModal={handleOpenAboutModal}
          onNavigate={scrollToSection}
        />

        {/* 02 / SERVICES — Strategic Capability Matrix */}
        <Services
          onSelectService={handleOpenServiceModal}
          onNavigate={scrollToSection}
        />

        {/* 03 / STRATEGY — The Growth Engine Flow */}
        <Process />

        {/* 04 / PERFORMANCE — Executive KPI Telemetry */}
        <PerformanceDashboard />

        {/* 05 / CASE STUDIES — Executive Case Briefs */}
        <CaseStudies onSelectCaseStudy={handleOpenCaseStudyModal} />

        {/* 06 / TESTIMONIALS — Executive Voice & Reviews */}
        <Testimonials />

        {/* 07 / TEAM — Executive Leadership Board */}
        <Team onSocialClick={handleSocialClick} />

        {/* 08 / SCALE — Business Scale Model */}
        <Pricing
          onSelectPlan={handleOpenPlanModal}
          onNavigate={scrollToSection}
        />

        {/* 09 / FAQ — Executive Knowledge Base */}
        <FAQ />

        {/* 10 / INTAKE — Guided Business Intake System */}
        <Contact
          onSuccessToast={(title, msg) => addToast(title, msg, 'success')}
          preselectedService={preselectedContactService}
        />
      </main>

      {/* Executive Command Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenLegalModal={(title, type) => handleOpenLegalModal(title, type)}
        onSocialClick={(platform) => handleSocialClick(platform)}
      />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* ================= REUSABLE EXECUTIVE MODALS SYSTEM ================= */}

      {/* Service Modal */}
      {activeModal.type === 'service' && activeModal.data && (
        <Modal
          isOpen={true}
          onClose={() => setActiveModal({ type: null })}
          title={activeModal.data.title}
          subtitle={`CAPABILITY CODE: ${activeModal.data.code}`}
          maxWidth="2xl"
        >
          <div className="space-y-6 font-mono text-xs">
            <p className="font-sans text-sm text-slate-800 leading-relaxed">
              {activeModal.data.fullDesc}
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-200">
              <span className="text-slate-500 font-bold uppercase block">TECHNICAL CAPABILITIES:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeModal.data.features.map((feat: string, idx: number) => (
                  <div key={idx} className="p-2.5 bg-[#FAF9F6] border border-slate-300 font-sans text-xs text-slate-900 flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-slate-500">READY TO INTEGRATE POD?</span>
              <button
                onClick={() => handleServiceSelectForContact(activeModal.data.title)}
                className="px-6 py-3 bg-slate-950 text-white font-bold uppercase hover:bg-slate-800"
              >
                REQUEST DISCOVERY INTAKE
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Case Study Brief Modal */}
      {activeModal.type === 'caseStudy' && activeModal.data && (
        <Modal
          isOpen={true}
          onClose={() => setActiveModal({ type: null })}
          title={activeModal.data.title}
          subtitle={`CASE BRIEF ${activeModal.data.code} — ${activeModal.data.clientIndustry}`}
          maxWidth="3xl"
        >
          <div className="space-y-6 font-mono text-xs">
            <div className="bg-slate-950 text-white p-6 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-slate-400 text-[10px] uppercase">IMPACT METRIC VERIFIED</span>
                <div className="text-3xl font-extrabold text-emerald-400 mt-1">{activeModal.data.metric}</div>
              </div>
              <div className="text-right">
                <span className="text-slate-400 text-[10px] uppercase">BENCHMARK TYPE</span>
                <div className="text-sm font-bold text-white uppercase mt-1">{activeModal.data.metricLabel}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-[#FAF9F6] border border-slate-300 space-y-2">
                <span className="text-rose-700 font-bold uppercase">ARCHITECTURAL CHALLENGE</span>
                <p className="font-sans text-xs text-slate-800 leading-relaxed">{activeModal.data.challenge}</p>
              </div>

              <div className="p-4 bg-[#FAF9F6] border border-slate-300 space-y-2">
                <span className="text-emerald-700 font-bold uppercase">DEPLOYED SOLUTION</span>
                <p className="font-sans text-xs text-slate-800 leading-relaxed">{activeModal.data.solution}</p>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-slate-500 font-bold uppercase block">VERIFIED QUANTIFIABLE OUTCOMES:</span>
              <ul className="space-y-2 font-sans text-xs text-slate-800">
                {activeModal.data.results.map((res: string, idx: number) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => handleServiceSelectForContact(activeModal.data.title)}
                className="px-6 py-3 bg-slate-950 text-white font-bold uppercase hover:bg-slate-800"
              >
                REQUEST SIMILAR ARCHITECTURE BRIEF
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Capacity Model Modal */}
      {activeModal.type === 'plan' && activeModal.data && (
        <Modal
          isOpen={true}
          onClose={() => setActiveModal({ type: null })}
          title={`CAPACITY MODEL: ${activeModal.data.name}`}
          subtitle={`SCALE INVESTMENT: ${activeModal.data.price} ${activeModal.data.period}`}
          maxWidth="lg"
        >
          <div className="space-y-6 font-mono text-xs">
            <p className="font-sans text-xs text-slate-700 leading-relaxed">
              Selected pod model: <strong className="text-slate-950 font-bold">{activeModal.data.name}</strong> ({activeModal.data.targetScale}).
            </p>

            <div className="p-4 bg-[#FAF9F6] border border-slate-300 space-y-2">
              <span className="text-slate-500 font-bold uppercase block">POD INCLUSIONS:</span>
              <ul className="space-y-1.5 font-sans text-xs text-slate-800">
                {activeModal.data.features.map((feat: string, idx: number) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setActiveModal({ type: null })}
                className="text-slate-600 font-bold uppercase"
              >
                CANCEL
              </button>
              <button
                onClick={() => handleServiceSelectForContact(`${activeModal.data.name} Engagement`)}
                className="px-6 py-3 bg-slate-950 text-white font-bold uppercase hover:bg-slate-800"
              >
                PROCEED TO INTAKE FORM
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* About Modal */}
      {activeModal.type === 'about' && (
        <Modal
          isOpen={true}
          onClose={() => setActiveModal({ type: null })}
          title="VERTEX STRATEGY & ADVISORY OVERVIEW"
          subtitle="EXECUTIVE FRAMEWORK & INFRASTRUCTURE HERITAGE"
          maxWidth="2xl"
        >
          <div className="space-y-4 font-mono text-xs text-slate-700 leading-relaxed">
            <p className="font-sans text-sm text-slate-800">
              Founded in 2016, Vertex Strategy LLC operates as an elite technical advisory and enterprise software pod partner. We serve 150+ multinational clients across fintech, logistics, health, and enterprise SaaS.
            </p>
            <div className="grid grid-cols-2 gap-4 p-4 bg-[#FAF9F6] border border-slate-300">
              <div>
                <span className="text-slate-950 font-bold uppercase block">HEADQUARTERS</span>
                <span className="font-sans text-xs">San Francisco, CA (USA)</span>
              </div>
              <div>
                <span className="text-slate-950 font-bold uppercase block">COMPLIANCE</span>
                <span className="font-sans text-xs">SOC2 Type II, ISO 27001, HIPAA</span>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Consultation Modal */}
      {activeModal.type === 'consultation' && (
        <Modal
          isOpen={true}
          onClose={() => setActiveModal({ type: null })}
          title="EXECUTIVE ARCHITECTURE DISCOVERY SESSION"
          subtitle="30-MINUTE DISCOVERY BRIEFING WITH VP OF ENGINEERING"
          maxWidth="md"
        >
          <div className="space-y-4 font-mono text-xs">
            <p className="font-sans text-xs text-slate-700 leading-relaxed">
              Schedule an executive discovery call to receive a preliminary cloud architecture evaluation and migration roadmap.
            </p>
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => handleServiceSelectForContact('Architecture Discovery')}
                className="px-6 py-3 bg-slate-950 text-white font-bold uppercase"
              >
                PROCEED TO DISCOVERY INTAKE
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Legal Policy Modal */}
      {activeModal.type === 'legal' && activeModal.data && (
        <Modal
          isOpen={true}
          onClose={() => setActiveModal({ type: null })}
          title={activeModal.data.title}
          subtitle="CORPORATE GOVERNANCE & NDA AUDIT"
          maxWidth="2xl"
        >
          <div className="space-y-4 font-mono text-xs text-slate-700 leading-relaxed">
            <p>
              Vertex Strategy LLC maintains strict compliance with ISO 27001, SOC2 Type II, and GDPR European Union data residency rules.
            </p>
            <div className="p-4 bg-[#FAF9F6] border border-slate-300 space-y-2">
              <p>1. 100% Client Intellectual Property Ownership upon milestone completion.</p>
              <p>2. Mutual Non-Disclosure Agreement active on all initial discovery intakes.</p>
              <p>3. Zero customer code retention for LLM training or third-party models.</p>
            </div>
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setActiveModal({ type: null })}
                className="px-5 py-2.5 bg-slate-950 text-white font-bold uppercase"
              >
                ACKNOWLEDGE
              </button>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
}

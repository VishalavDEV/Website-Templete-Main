import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Shield, 
  Sparkles,
  Zap,
  Code
} from 'lucide-react';
import { servicesData } from '../../data/services';
import { caseStudiesData } from '../../data/caseStudies';
import { IconHelper } from '../../components/common/IconHelper';
import { Button } from '../../components/common/Button';
import { CaseStudyCard } from '../../components/cards/CaseStudyCard';
import { ContactForm } from '../../components/forms/ContactForm';
import { fadeUp } from '../../utils/animations';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find related case study
  const relatedCaseStudy = caseStudiesData.find(
    (cs) => cs.serviceSlug === service.slug || cs.slug === service.caseStudySlug
  );

  return (
    <div className="pt-28 pb-16 bg-white text-slate-900">
      
      {/* Header Banner */}
      <section className="pb-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <Link to="/" className="hover:text-slate-800">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-slate-800">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-semibold">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 mb-4">
                <IconHelper name={service.iconName} className="w-6 h-6" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                {service.fullDescription}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button to="/contact" variant="primary" size="lg" className="w-full">
                Request Architecture Consultation
              </Button>
              <Button to="/case-studies" variant="secondary" size="md" className="w-full">
                View Case Studies
              </Button>
            </div>
          </div>

          {/* ROI Metric Highlight Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-slate-200">
            {service.benefits.map((b, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{b.metric}</div>
                <div className="text-xs text-slate-600 mt-1">{b.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Capabilities & Deliverables */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Key Capabilities */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-slate-700" />
                  Key Capabilities
                </h2>
                <div className="space-y-3">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-800">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What We Deliver */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-slate-700" />
                  Architectural Deliverables
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.deliverables.map((deliv, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="text-xs font-mono text-slate-500 mb-1">0{idx + 1}.</div>
                      <div className="text-sm text-slate-800 font-medium">{deliv}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Code className="w-5 h-5 text-slate-700" />
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-mono text-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Case Study */}
              {relatedCaseStudy && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured Engagement</h2>
                  <CaseStudyCard caseStudy={relatedCaseStudy} />
                </div>
              )}

            </div>

            {/* Right Column: Embedded Inquiry Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

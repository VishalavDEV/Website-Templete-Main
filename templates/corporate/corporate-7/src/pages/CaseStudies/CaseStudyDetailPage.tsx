import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  TrendingUp, 
  CheckCircle2, 
  Building2, 
  Calendar, 
  ArrowRight, 
  Cpu, 
  ShieldCheck,
  Quote
} from 'lucide-react';
import { caseStudiesData } from '../../data/caseStudies';
import { Button } from '../../components/common/Button';
import { ContactForm } from '../../components/forms/ContactForm';
import { fadeUp } from '../../utils/animations';

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = caseStudiesData.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="pt-28 pb-16 bg-white text-slate-900">
      
      {/* Header Banner */}
      <section className="pb-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <Link to="/" className="hover:text-slate-800">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/case-studies" className="hover:text-slate-800">Case Studies</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-semibold">{caseStudy.title}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-semibold text-slate-800 bg-slate-100 rounded-full border border-slate-200">
                {caseStudy.industry}
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-slate-700 bg-slate-100 rounded-full border border-slate-200">
                {caseStudy.service}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                Client: {caseStudy.client}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              {caseStudy.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {caseStudy.summary}
            </p>
          </div>

          {/* Hero Results Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 pt-8 border-t border-slate-200">
            {caseStudy.keyResults.map((res, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                <div className="text-3xl font-extrabold text-slate-900 mb-1">{res.metric}</div>
                <div className="text-sm font-bold text-slate-900 mb-1">{res.label}</div>
                <div className="text-xs text-slate-600 leading-normal">{res.description}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Main Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Featured Image */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
                <img
                  src={caseStudy.bannerImage}
                  alt={caseStudy.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] object-cover"
                />
              </div>

              {/* The Challenge */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h2>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* The Solution */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Solution &amp; Architecture</h2>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-6">
                  {caseStudy.solution}
                </p>

                <h3 className="text-base font-bold text-slate-900 mb-3">Key Technical Pillars:</h3>
                <ul className="space-y-3">
                  {caseStudy.architectureDetails.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-800">
                      <CheckCircle2 className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client Quote */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 relative">
                <Quote className="w-10 h-10 text-slate-200 absolute top-6 right-6" />
                <blockquote className="text-base sm:text-lg italic text-slate-800 mb-6 leading-relaxed">
                  "{caseStudy.clientQuote.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <img
                    src={caseStudy.clientQuote.avatar}
                    alt={caseStudy.clientQuote.author}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="font-bold text-slate-900">{caseStudy.clientQuote.author}</div>
                    <div className="text-xs text-slate-600">
                      {caseStudy.clientQuote.title}, <span className="text-slate-900 font-semibold">{caseStudy.clientQuote.company}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Meta & Form */}
            <div className="lg:col-span-4 space-y-6">
              {/* Engagement Meta */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-slate-900">Project Information</h3>
                
                <div className="text-xs space-y-3 border-t border-slate-200 pt-3">
                  <div>
                    <span className="text-slate-500 block mb-1 font-mono uppercase">Client</span>
                    <span className="text-slate-900 font-medium">{caseStudy.client}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-1 font-mono uppercase">Industry</span>
                    <span className="text-slate-900 font-medium">{caseStudy.industry}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-1 font-mono uppercase">Service Area</span>
                    <span className="text-slate-900 font-medium">{caseStudy.service}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-2 font-mono uppercase">Tech Stack</span>
                    <div className="flex flex-wrap gap-1.5">
                      {caseStudy.technology.map((t) => (
                        <span key={t} className="px-2.5 py-1 bg-slate-100 text-slate-800 border border-slate-200 rounded-md text-[11px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Build a similar architecture?</h4>
                <p className="text-xs text-slate-600 mb-5">Our architects can walk you through the blueprints.</p>
                <Button to="/contact" variant="primary" size="md" className="w-full">
                  Schedule Technical Call
                </Button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

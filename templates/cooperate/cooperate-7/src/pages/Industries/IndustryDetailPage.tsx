import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';
import { industriesData } from '../../data/industries';
import { caseStudiesData } from '../../data/caseStudies';
import { IconHelper } from '../../components/common/IconHelper';
import { Button } from '../../components/common/Button';
import { CaseStudyCard } from '../../components/cards/CaseStudyCard';
import { ContactForm } from '../../components/forms/ContactForm';

export const IndustryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = industriesData.find((ind) => ind.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  // Find related case studies
  const relatedCaseStudies = caseStudiesData.filter(
    (cs) => cs.slug === industry.caseStudyId ||
            cs.industry.toLowerCase().includes(industry.name.toLowerCase().split(' ')[0])
  );

  return (
    <div className="pt-28 pb-16 bg-white text-slate-900">
      
      {/* Header Banner */}
      <section className="pb-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <Link to="/" className="hover:text-slate-800">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/industries" className="hover:text-slate-800">Industries</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-semibold">{industry.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 mb-4">
                <IconHelper name={industry.iconName} className="w-6 h-6" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                {industry.name}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                {industry.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Button to="/contact" variant="primary" size="lg">
                Discuss Industry Architecture
              </Button>
            </div>
          </div>

          {/* Compliance & Outcomes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-slate-200">
            {industry.metrics.map((out, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                <div className="text-3xl font-extrabold text-slate-900">{out.value}</div>
                <div className="text-xs text-slate-600 mt-1 font-medium">{out.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Main Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Industry Solutions */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Tailored Solutions Provided</h2>
                <div className="space-y-3">
                  {industry.solutionsProvided.map((sol, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-800">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Challenges Addressed */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  Key Industry Challenges Solved
                </h2>
                <div className="space-y-3">
                  {industry.challenges.map((ch, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                      <span className="text-slate-900 font-bold font-mono">0{idx + 1}.</span>
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Case Studies */}
              {relatedCaseStudies.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Proven Industry Case Studies</h2>
                  <div className="space-y-6">
                    {relatedCaseStudies.map((cs) => (
                      <CaseStudyCard key={cs.id} caseStudy={cs} />
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Consultation Form */}
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

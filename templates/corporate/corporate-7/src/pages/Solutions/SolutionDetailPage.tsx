import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ChevronRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { solutionsData } from '../../data/solutions';
import { IconHelper } from '../../components/common/IconHelper';
import { Button } from '../../components/common/Button';
import { ContactForm } from '../../components/forms/ContactForm';

export const SolutionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = solutionsData.find((s) => s.slug === slug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <div className="pt-28 pb-16 bg-white text-slate-900">
      
      {/* Header Banner */}
      <section className="pb-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <Link to="/" className="hover:text-slate-800">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/solutions" className="hover:text-slate-800">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-semibold">{solution.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 mb-4">
                <IconHelper name={solution.iconName} className="w-6 h-6" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                {solution.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                {solution.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Button to="/contact" variant="primary" size="lg">
                Schedule Architecture Review
              </Button>
              <Button to="/case-studies" variant="secondary" size="md">
                Review Client Deployments
              </Button>
            </div>
          </div>

          {/* ROI Metric Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-slate-200">
            {solution.roiStats.map((roi, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                <div className="text-3xl font-extrabold text-slate-900">{roi.metric}</div>
                <div className="text-xs text-slate-600 mt-1 font-medium">{roi.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Main Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Solution Architecture */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Architecture Components */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-slate-700" />
                  Architecture Layers
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {solution.architectureComponents.map((comp, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="text-xs font-mono text-slate-500 mb-1">Layer 0{idx + 1}</div>
                      <div className="text-sm font-semibold text-slate-900">{comp}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Outcomes */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Strategic Outcomes</h2>
                <div className="space-y-3">
                  {solution.keyOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Target Deployment Profile</h2>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-slate-700 text-sm leading-relaxed">
                  {solution.targetAudience}
                </div>
              </div>

            </div>

            {/* Right Column: Inquiry Form */}
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

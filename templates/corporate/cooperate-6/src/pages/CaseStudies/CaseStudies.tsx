import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Building, CheckCircle2, TrendingUp } from 'lucide-react';
import { caseStudiesData } from '../../data/caseStudies';
import SectionHeading from '../../components/ui/SectionHeading';

export default function CaseStudies() {
  return (
    <div className="pt-24 pb-20 bg-[#FBF9F5]">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-[#0A261F] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#165042] text-[#DFBA58] text-xs font-semibold uppercase tracking-widest border border-[#C29B38]/30">
              Enterprise Results
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              Measurable Business Travel Impact.
            </h1>
            <p className="text-base sm:text-xl text-[#D8C3A8]/90 leading-relaxed font-light">
              Detailed case studies demonstrating how leading multinational organizations optimize spend, elevate traveler safety, and streamline global mobility.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {caseStudiesData.map((study, idx) => (
          <div
            key={study.id}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-[#D8C3A8]/70 shadow-sm hover:shadow-md transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[16/11]">
                  <img
                    src={study.heroImage}
                    alt={study.clientName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F382E]">
                  <span>{study.industry}</span>
                  <span>•</span>
                  <span>{study.region}</span>
                </div>

                <h2 className="font-serif text-3xl font-semibold text-[#0E1412]">
                  {study.clientType}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#3E5049]">
                  <div className="p-4 rounded-xl bg-[#F8F5EE]">
                    <span className="font-bold text-[#0E1412] block mb-1 uppercase tracking-wider text-[10px] text-[#8FA29A]">Challenge</span>
                    <p>{study.challenge}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8F5EE]">
                    <span className="font-bold text-[#0E1412] block mb-1 uppercase tracking-wider text-[10px] text-[#8FA29A]">Solution</span>
                    <p>{study.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {study.results.map((res, rIdx) => (
                    <div key={rIdx} className="p-3 rounded-xl bg-[#0F382E]/5 border border-[#0F382E]/10">
                      <div className="font-serif text-2xl font-bold text-[#0F382E]">{res.value}</div>
                      <div className="text-[10px] font-semibold uppercase text-[#25332E] mt-0.5">{res.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#D8C3A8]/40 flex justify-between items-center">
                  <span className="text-xs text-[#62756D] italic">"{study.quote.text.slice(0, 80)}..."</span>
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#0F382E] hover:text-[#165042] flex-shrink-0"
                  >
                    <span>Read Full Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

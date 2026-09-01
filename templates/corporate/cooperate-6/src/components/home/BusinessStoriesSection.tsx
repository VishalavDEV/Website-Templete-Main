import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, CheckCircle2, TrendingUp, Building } from 'lucide-react';
import { caseStudiesData } from '../../data/caseStudies';
import SectionHeading from '../ui/SectionHeading';

export default function BusinessStoriesSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8F5EE] border-t border-[#D8C3A8]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            badge="Proven Impact"
            title="Enterprise Business Travel Stories"
            subtitle="Explore how leading global organizations partner with Aurelia to unlock measurable ROI, improve executive satisfaction, and safeguard teams worldwide."
            align="left"
            className="mb-0"
          />

          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#0F382E] hover:text-[#165042] flex-shrink-0 group"
          >
            <span>View All Enterprise Case Studies</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Large Case Studies Grid */}
        <div className="space-y-12">
          {caseStudiesData.map((study, index) => (
            <div
              key={study.id}
              className="p-6 sm:p-10 rounded-3xl bg-[#FBF9F5] border border-[#D8C3A8]/70 shadow-sm hover:shadow-md transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Photo & Quote */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[16/11]">
                    <img
                      src={study.heroImage}
                      alt={study.clientName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1412]/80 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0F382E]/90 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider border border-[#C29B38]/30">
                      Case Study 0{index + 1}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                      <div className="font-semibold text-white">{study.clientName}</div>
                      <div className="text-[#D8C3A8]/90 text-[11px]">{study.industry}</div>
                    </div>
                  </div>
                </div>

                {/* Right Content & Key Metrics */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0F382E]">
                      {study.travelType} • {study.region}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0E1412] mt-1">
                      {study.clientType}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#3E5049]">
                    <div className="p-3.5 rounded-xl bg-white border border-[#D8C3A8]/50">
                      <span className="font-bold text-[#0E1412] block mb-1 uppercase tracking-wider text-[10px] text-[#8FA29A]">The Challenge</span>
                      <p>{study.challenge}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-[#D8C3A8]/50">
                      <span className="font-bold text-[#0E1412] block mb-1 uppercase tracking-wider text-[10px] text-[#8FA29A]">The Aurelia Solution</span>
                      <p>{study.solution}</p>
                    </div>
                  </div>

                  {/* Measurable Results Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    {study.results.map((res, rIndex) => (
                      <div key={rIndex} className="p-3 rounded-xl bg-[#0F382E]/5 border border-[#0F382E]/10">
                        <div className="font-serif text-2xl font-bold text-[#0F382E] leading-tight">
                          {res.value}
                        </div>
                        <div className="text-[10px] font-semibold uppercase tracking-wider text-[#25332E] mt-0.5">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quote & CTA Link */}
                  <div className="pt-3 border-t border-[#D8C3A8]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs italic text-[#62756D] max-w-md">
                      "{study.quote.text}" — <span className="font-semibold text-[#0E1412]">{study.quote.author}</span>, {study.quote.title}
                    </p>

                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F382E] hover:text-[#165042] flex-shrink-0 group"
                    >
                      <span>Read Full Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

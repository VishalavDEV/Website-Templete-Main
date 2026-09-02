import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Briefcase, DollarSign } from "lucide-react";
import { jobsData } from "../../data/jobs";
import { SectionHeader } from "../common/SectionHeader";
import { Button } from "../common/Button";

export const CareersSection: React.FC = () => {
  const featuredJobs = jobsData.slice(0, 4);

  return (
    <section className="py-20 md:py-32 border-b border-[#E6E2D8] bg-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="13"
          tag="Talent & Culture"
          title="Build systems that matter."
          description="We are a collective of distributed systems engineers, machine learning scientists, and technical leaders tackling the world's most demanding computational challenges."
          actionText="All 5 Open Positions"
          actionTo="/careers"
        />

        {/* 2-Column Layout: Left Culture Narrative & Imagery, Right Open Roles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Culture Manifesto & Visual (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative h-64 sm:h-72 rounded-xs overflow-hidden border border-[#E6E2D8] bg-[#121316]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Vertexa Engineering Culture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-[#0A2E23]/20" />
              <div className="absolute bottom-3 left-3 px-2 py-1 bg-[#121316]/90 text-[#FAF8F5] text-[10px] font-mono-tech rounded-xs">
                VERTEXA LABS // DISTRIBUTED AUTONOMY
              </div>
            </div>

            <div className="space-y-3 font-mono-tech text-xs text-[#5E636E]">
              <div className="text-[#121316] font-bold uppercase">
                Why Senior Engineers Choose Vertexa:
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A2E23] mt-1.5 shrink-0" />
                  <span>High density of senior and staff engineers—no junior layer handoffs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A2E23] mt-1.5 shrink-0" />
                  <span>$10,000 annual continuous research & personal compute stipend.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A2E23] mt-1.5 shrink-0" />
                  <span>Fully sovereign remote-first environment with global physical hubs.</span>
                </li>
              </ul>
            </div>

            <Button variant="secondary" size="md" to="/careers" withArrow>
              Explore Engineering Culture
            </Button>
          </div>

          {/* Right: Open Roles List (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {featuredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-[#E6E2D8] p-5 sm:p-6 rounded-xs hover:border-[#0A2E23] transition-colors group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 font-mono-tech text-[10px] uppercase text-[#0A2E23]">
                    <span className="font-bold">{job.department}</span>
                    <span className="text-[#C4BFB2]">/</span>
                    <span className="text-[#7C828D]">{job.type}</span>
                  </div>

                  <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#121316] group-hover:text-[#0A2E23] transition-colors">
                    <Link to={`/careers/${job.slug}`}>
                      {job.title}
                    </Link>
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono-tech text-[#7C828D]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#0A2E23]" />
                      {job.location}
                    </span>
                    <span>{job.compensation}</span>
                  </div>
                </div>

                <Link
                  to={`/careers/${job.slug}`}
                  className="inline-flex items-center gap-1.5 font-mono-tech text-xs uppercase font-bold text-[#0A2E23] group-hover:translate-x-1 transition-transform self-start sm:self-center shrink-0 px-3 py-2 bg-[#FAF8F5] border border-[#E6E2D8] rounded-xs group-hover:bg-[#0A2E23] group-hover:text-[#CCF34A]"
                >
                  <span>Apply</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

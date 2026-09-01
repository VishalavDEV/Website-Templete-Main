import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Briefcase, DollarSign, CheckCircle2, Heart, Award, Cpu, BookOpen, ShieldCheck } from "lucide-react";
import { jobsData, engineeringBenefits } from "../data/jobs";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Button } from "../components/common/Button";

export const CareersPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>("All");

  const departments = ["All", "Core Engineering", "AI Research", "Cloud & Infra", "Product Design"];

  const filteredJobs = jobsData.filter(
    (j) => selectedDept === "All" || j.department.toLowerCase().includes(selectedDept.toLowerCase().split(" ")[0])
  );

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Careers" }]} />

        {/* Hero Header */}
        <div className="mb-16 md:mb-20 max-w-4xl space-y-6">
          <div className="font-mono-tech text-xs uppercase tracking-widest text-[#0A2E23] flex items-center gap-2">
            <span className="w-2 h-2 rounded-xs bg-[#0A2E23]" />
            <span>TALENT & ENGINEERING CULTURE</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-light text-[#121316] tracking-tight leading-[1.05]">
            Build systems that matter.
          </h1>

          <p className="text-base sm:text-xl text-[#5E636E] font-normal leading-relaxed max-w-3xl">
            We are looking for seasoned distributed systems engineers, ML researchers, and technical architects who love solving hard mathematical and computational problems without corporate fluff.
          </p>
        </div>

        {/* Culture & Stipend Highlight Banner */}
        <div className="bg-[#111315] text-[#FAF8F5] p-8 sm:p-12 rounded-xs border border-[#24282F] mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="font-mono-tech text-xs uppercase text-[#CCF34A]">
                THE VERTEXA FELLOWSHIP & AUTONOMY MODEL
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#FAF8F5] leading-snug">
                $10,000 Annual Unrestricted Research Stipend
              </h2>
              <p className="text-sm sm:text-base text-[#A1A7B4] leading-relaxed max-w-2xl">
                Every full-time engineer at Vertexa receives dedicated compute credits, hardware allowances, and conference access to pursue open-source distributed systems work or original research.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 font-mono-tech text-xs text-[#CCF34A]">
              <div className="p-3 bg-[#181A1D] border border-[#24282F] rounded-xs">
                • 100% Remote-First or Hub Based
              </div>
              <div className="p-3 bg-[#181A1D] border border-[#24282F] rounded-xs">
                • Zero Bureaucracy / Flat Architecture
              </div>
              <div className="p-3 bg-[#181A1D] border border-[#24282F] rounded-xs">
                • Equity Participation in Vertexa Labs
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-24 space-y-8">
          <div className="border-b border-[#E6E2D8] pb-4">
            <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
              ENGINEER-FIRST COMPENSATION & PERKS
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#121316] mt-1">
              Engineered for Sustainable High Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringBenefits.map((b) => (
              <div key={b.title} className="bg-white border border-[#E6E2D8] p-6 rounded-xs space-y-2">
                <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
                  {b.title}
                </div>
                <p className="text-xs text-[#5E636E] leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions List */}
        <div id="open-roles" className="mb-24 space-y-8 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E6E2D8] pb-4">
            <div>
              <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
                OPEN ROLES ({jobsData.length} ACTIVE)
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#121316] mt-1">
                Current Opportunities
              </h2>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {departments.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1 font-mono-tech text-xs rounded-xs border transition-colors cursor-pointer ${
                    selectedDept === dept
                      ? "bg-[#0A2E23] text-[#CCF34A] border-[#0A2E23] font-bold"
                      : "bg-white text-[#5E636E] border-[#E6E2D8] hover:border-[#121316]/40"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-[#E6E2D8] p-6 sm:p-8 rounded-xs hover:border-[#0A2E23] transition-colors group flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3 font-mono-tech text-xs uppercase text-[#0A2E23]">
                    <span className="font-bold">{job.department}</span>
                    <span className="text-[#C4BFB2]">/</span>
                    <span className="text-[#7C828D]">{job.type}</span>
                  </div>

                  <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#121316] group-hover:text-[#0A2E23] transition-colors">
                    <Link to={`/careers/${job.slug}`}>
                      {job.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5E636E] max-w-2xl leading-relaxed">
                    {job.shortOverview}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 pt-2 font-mono-tech text-xs text-[#7C828D]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#0A2E23]" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-[#0A2E23]" />
                      {job.compensation}
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  <Button variant="primary" size="md" to={`/careers/${job.slug}`} withDiagonalArrow>
                    View Job & Apply
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

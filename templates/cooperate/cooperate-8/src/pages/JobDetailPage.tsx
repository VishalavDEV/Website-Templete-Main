import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, MapPin, Briefcase, DollarSign, CheckCircle2, ShieldCheck } from "lucide-react";
import { jobsData } from "../data/jobs";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { JobApplicationForm } from "../components/forms/JobApplicationForm";

export const JobDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const job = jobsData.find((j) => j.slug === slug);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Careers", to: "/careers" },
            { label: job.title }
          ]}
        />

        {/* Role Header */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-3 font-mono-tech text-xs uppercase text-[#0A2E23]">
            <span className="font-bold border border-[#0A2E23] px-2 py-0.5 rounded-xs">
              {job.department}
            </span>
            <span>{job.type}</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-light text-[#121316] tracking-tight leading-[1.08]">
            {job.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-2 font-mono-tech text-xs text-[#5E636E] border-t border-[#E6E2D8] pt-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#0A2E23]" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-[#0A2E23]" />
              {job.compensation}
            </span>
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-4 mb-12">
          <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#121316]">
            Role Objective & Context
          </h2>
          <p className="text-base sm:text-lg text-[#5E636E] leading-relaxed">
            {job.shortOverview}
          </p>
        </div>

        {/* Responsibilities */}
        <div className="space-y-4 mb-12 bg-white border border-[#E6E2D8] p-6 sm:p-8 rounded-xs">
          <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#121316]">
            Key Responsibilities
          </h2>
          <ul className="space-y-3 font-mono-tech text-xs text-[#121316]">
            {job.responsibilities.map((resp) => (
              <li key={resp} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0A2E23] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Qualifications */}
        <div className="space-y-4 mb-12 bg-white border border-[#E6E2D8] p-6 sm:p-8 rounded-xs">
          <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#121316]">
            Qualifications & Track Record
          </h2>
          <ul className="space-y-3 font-mono-tech text-xs text-[#121316]">
            {job.qualifications.map((qual) => (
              <li key={qual} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0A2E23] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{qual}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="space-y-4 mb-16 bg-[#F5F2EB] border border-[#E6E2D8] p-6 sm:p-8 rounded-xs">
          <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
            PRIMARY TECH STACK
          </div>
          <div className="flex flex-wrap gap-2">
            {job.technologies.map((t) => (
              <span key={t} className="px-3 py-1 bg-white border border-[#E6E2D8] font-mono-tech text-xs text-[#121316] rounded-xs font-semibold">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div id="apply" className="mb-16 scroll-mt-28">
          <JobApplicationForm
            jobTitle={job.title}
            jobDepartment={job.department}
          />
        </div>

        {/* Return link */}
        <div className="pt-8 border-t border-[#E6E2D8]">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase text-[#5E636E] hover:text-[#121316] font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Open Roles</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

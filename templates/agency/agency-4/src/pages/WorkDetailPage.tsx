import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Quote, Award } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { Button } from '../components/ui/Button';

export const WorkDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const projectIndex = PROJECTS.findIndex((p) => p.id === id);
  const project = PROJECTS[projectIndex] || PROJECTS[0];

  const nextProjectIndex = (projectIndex + 1) % PROJECTS.length;
  const nextProject = PROJECTS[nextProjectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="pt-28 sm:pt-32 pb-20 sm:pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/work"
          className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-[#6B6863] hover:text-[#D96B43] mb-6 sm:mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to All Work</span>
        </Link>

        {/* Project Title Header */}
        <div className="space-y-4 mb-8 sm:mb-12">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-[#D96B43] font-bold">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display text-[#1A1918] tracking-tight leading-[1.1]">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-[#6B6863] font-normal max-w-3xl leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Main Editorial Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] sm:aspect-[16/9] mb-12 sm:mb-16 bg-[#EAE6DF]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Metadata Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 bg-white rounded-3xl border border-[#EAE6DF] shadow-xs mb-12 sm:mb-16">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Client</p>
            <p className="text-xs sm:text-sm font-bold text-[#1A1918]">{project.client}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Category</p>
            <p className="text-xs sm:text-sm font-bold text-[#1A1918]">{project.category}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Year</p>
            <p className="text-xs sm:text-sm font-bold text-[#1A1918]">{project.year}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Location</p>
            <p className="text-xs sm:text-sm font-bold text-[#1A1918]">Copenhagen / Global</p>
          </div>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 sm:mb-20">
          {/* Left: Content */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-12">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#1A1918] flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#D96B43] mr-3"></span>
                The Challenge
              </h3>
              <p className="text-sm sm:text-base text-[#6B6863] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#1A1918] flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#D96B43] mr-3"></span>
                The Strategic Solution
              </h3>
              <p className="text-sm sm:text-base text-[#6B6863] leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Testimonial Quote inside Case Study */}
            {project.testimonial && (
              <div className="p-6 sm:p-8 bg-[#1A1918] text-white rounded-3xl relative overflow-hidden space-y-4">
                <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-[#D96B43]/30 absolute top-4 right-4" />
                <p className="text-base sm:text-lg font-serif italic leading-relaxed text-gray-200 relative z-10">
                  "{project.testimonial.quote}"
                </p>
                <div className="pt-2 border-t border-white/10">
                  <p className="text-sm font-bold text-white">{project.testimonial.author}</p>
                  <p className="text-xs text-gray-400">{project.testimonial.role}</p>
                </div>
              </div>
            )}
          </div>

          {/* Right: Deliverables Sidebar */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE6DF] shadow-xs space-y-4 sm:space-y-6">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1A1918]">
                Key Deliverables
              </h4>
              <ul className="space-y-3">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-xs sm:text-sm font-medium text-[#1A1918]">
                    <CheckCircle2 className="w-4 h-4 text-[#D96B43] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Metrics Card */}
            <div className="bg-[#D96B43] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
              <div className="flex items-center space-x-2 text-white">
                <Award className="w-5 h-5" />
                <h4 className="text-xs uppercase tracking-widest font-bold">Business Impact</h4>
              </div>

              <div className="space-y-4">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="border-b border-white/20 pb-3 last:border-b-0 last:pb-0">
                    <p className="text-2xl sm:text-3xl font-extrabold font-display">{m.value}</p>
                    <p className="text-xs text-white/80">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Showcase */}
        <div className="space-y-6 sm:space-y-8 mb-16 sm:mb-24">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-[#1A1918]">
            Visual Artifacts & Touchpoints
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {project.gallery.map((imgUrl, idx) => (
              <div key={idx} className="rounded-3xl overflow-hidden aspect-[4/3] bg-[#EAE6DF] shadow-xs">
                <img
                  src={imgUrl}
                  alt={`${project.title} artifact ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Project Navigator */}
        <div className="pt-10 sm:pt-12 border-t border-[#EAE6DF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#6B6863] font-semibold">Next Case Study</span>
            <h4 className="text-2xl sm:text-3xl font-bold font-display text-[#1A1918]">{nextProject.title}</h4>
            <p className="text-xs text-[#6B6863]">{nextProject.category}</p>
          </div>

          <Button
            variant="primary"
            size="md"
            icon={ArrowRight}
            onClick={() => navigate(`/work/${nextProject.id}`)}
            className="w-full sm:w-auto"
          >
            View Next Project
          </Button>
        </div>

      </div>
    </div>
  );
};

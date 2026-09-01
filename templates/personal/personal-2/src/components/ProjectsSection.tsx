import { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import CaseStudyModal from './CaseStudyModal';
import ProjectDemoModal from './ProjectDemoModal';
import { ExternalLink, Github, Sparkles, FileText, ArrowUpRight } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('ALL');
  const [activeCaseStudyProject, setActiveCaseStudyProject] = useState<Project | null>(null);
  const [activeDemoProject, setActiveDemoProject] = useState<Project | null>(null);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All', value: 'ALL' },
    { label: 'AI', value: 'AI' },
    { label: 'ML', value: 'ML' },
    { label: 'Generative AI', value: 'GENERATIVE AI' },
    { label: 'Computer Vision', value: 'COMPUTER VISION' },
    { label: 'Web', value: 'WEB' },
  ];

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    if (selectedCategory === 'ALL') return true;
    return proj.categories.includes(selectedCategory);
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'LIVE':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'PROTOTYPE':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'EXPERIMENT':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-white border-t border-slate-200/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 tracking-wider uppercase font-sans">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>FEATURED PROJECTS</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            THINGS I'VE BUILT
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
            A selection of projects where AI meets real-world applications.
          </p>

          {/* Categories Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                id={`project-category-${cat.value.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat.value
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-slate-300"
            >
              <div>
                {/* Top Image Preview with Badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs flex items-center gap-1 backdrop-blur-sm ${getStatusBadge(
                        project.status
                      )}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons in Footer */}
              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  id={`project-github-${project.id}`}
                  className="text-slate-600 hover:text-slate-900 flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <button
                  onClick={() => setActiveDemoProject(project)}
                  id={`project-demo-${project.id}`}
                  className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setActiveCaseStudyProject(project)}
                  id={`project-case-study-${project.id}`}
                  className="text-indigo-600 hover:text-indigo-700 flex items-center gap-0.5"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={activeCaseStudyProject}
        onClose={() => setActiveCaseStudyProject(null)}
        onOpenDemo={(p) => {
          setActiveCaseStudyProject(null);
          setActiveDemoProject(p);
        }}
      />

      {/* Live Interactive Sandbox Modal */}
      <ProjectDemoModal
        project={activeDemoProject}
        onClose={() => setActiveDemoProject(null)}
      />

    </section>
  );
}


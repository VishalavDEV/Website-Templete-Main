import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Globe, Star } from 'lucide-react';
import { api } from '../utils/api';
import AnimatedPage from '../components/AnimatedPage';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const fallbackProjects = [
    { 
      id: 1, 
      name: 'SaaS Analytics Dashboard', 
      category: 'Web Development', 
      description: 'A real-time data visualization dashboard designed for cloud business monitoring, featuring beautiful charts, real-time alerts, and highly customizable UI widgets.', 
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800', 
      techStack: 'React, Tailwind, Recharts, Spring Boot', 
      projectUrl: 'https://example.com' 
    },
    { 
      id: 2, 
      name: 'FinTech Mobile Wallet', 
      category: 'Mobile App Development', 
      description: 'A high-performance digital wallet and crypto trading application featuring biometric authentication, instant bank transfers, and automated budget analytics.', 
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800', 
      techStack: 'React Native, Node.js, PostgreSQL', 
      projectUrl: 'https://example.com' 
    },
    { 
      id: 3, 
      name: 'Creative Studio Portfolio', 
      category: 'UI/UX Design', 
      description: 'Minimalist visual portfolio design and premium smooth-scrolling experience crafted for a luxury design and architecture studio.', 
      imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800', 
      techStack: 'Figma, Framer Motion, Next.js', 
      projectUrl: 'https://example.com' 
    },
    { 
      id: 4, 
      name: 'Microservices Cloud Orchestration', 
      category: 'Cloud Solutions', 
      description: 'A containerized e-commerce infrastructure deployment handling over 10,000 requests per second with high availability and load-balancing configurations.', 
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800', 
      techStack: 'Spring Boot, Docker, AWS, Kubernetes, Terraform', 
      projectUrl: 'https://example.com' 
    }
  ];

  useEffect(() => {
    setLoading(true);
    api.getProjectById(id)
      .then(res => {
        setProject(res);
        setLoading(false);
      })
      .catch(() => {
        const found = fallbackProjects.find(p => p.id === parseInt(id, 10)) || fallbackProjects[0];
        setProject(found);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="pt-32 text-center text-secondaryText min-h-screen">
        <span className="inline-block animate-pulse text-sm">Loading project specifications...</span>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-32 text-center text-secondaryText min-h-screen">
        Project not found.
      </div>
    );
  }

  return (
    <AnimatedPage>
      <div className="pt-24 pb-20 overflow-hidden">
        {/* HEADER BAR */}
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-sm text-secondaryText hover:text-primaryText font-semibold transition-colors"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </div>

        {/* DETAILS GRID */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Columns (Image & Full Description) */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-md border border-slate-100 bg-slate-50">
              <img 
                src={project.imageUrl} 
                alt={project.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-primaryText leading-tight">
                {project.name}
              </h1>
              <span className="text-sm font-bold text-primaryAccent bg-indigo-50 px-3.5 py-1 rounded-full w-fit uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <div className="prose prose-slate max-w-none text-secondaryText text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-6">
              <p>{project.description}</p>
            </div>
          </div>

          {/* Right Column (Specifications Panel) */}
          <div className="lg:col-span-1">
            <div className="glass-panel border border-slate-100 rounded-3xl p-6.5 shadow-sm flex flex-col gap-6 sticky top-28">
              <h2 className="text-lg font-bold text-primaryText uppercase tracking-wider border-b border-slate-100 pb-3">Project Specs</h2>
              
              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-xs font-bold text-secondaryText uppercase tracking-widest block mb-1.5">Category</span>
                  <span className="text-sm font-bold text-primaryText">{project.category}</span>
                </div>

                {project.techStack && (
                  <div>
                    <span className="text-xs font-bold text-secondaryText uppercase tracking-widest block mb-1.5">Stack Deployed</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.split(',').map((tech) => (
                        <span key={tech} className="text-xs font-mono bg-indigo-50 text-indigo-600 px-3 py-1 rounded-md">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.projectUrl && (
                  <div className="pt-4 border-t border-slate-100">
                    <a 
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-bg text-white py-3 rounded-xl font-semibold text-sm hover:opacity-95 shadow-md flex items-center justify-center gap-2 group transition-all"
                    >
                      Visit Live Website
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default ProjectDetails;

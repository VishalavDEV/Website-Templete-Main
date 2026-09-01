import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, ArrowRight } from 'lucide-react';
import { api } from '../utils/api';
import AnimatedPage from '../components/AnimatedPage';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const fallbackProjects = [
    { 
      id: 1, 
      name: 'SaaS Analytics Dashboard', 
      category: 'Web Development', 
      description: 'A real-time data visualization dashboard designed for cloud business monitoring, featuring beautiful charts, real-time alerts, and highly customizable UI widgets.', 
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800', 
      techStack: 'React, Tailwind, Recharts, Spring Boot' 
    },
    { 
      id: 2, 
      name: 'FinTech Mobile Wallet', 
      category: 'Mobile App Development', 
      description: 'A high-performance digital wallet and crypto trading application featuring biometric authentication, instant bank transfers, and automated budget analytics.', 
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800', 
      techStack: 'React Native, Node.js, PostgreSQL' 
    },
    { 
      id: 3, 
      name: 'Creative Studio Portfolio', 
      category: 'UI/UX Design', 
      description: 'Minimalist visual portfolio design and premium smooth-scrolling experience crafted for a luxury design and architecture studio.', 
      imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800', 
      techStack: 'Figma, Framer Motion, Next.js' 
    },
    { 
      id: 4, 
      name: 'Microservices Cloud Orchestration', 
      category: 'Cloud Solutions', 
      description: 'A containerized e-commerce infrastructure deployment handling over 10,000 requests per second with high availability and load-balancing configurations.', 
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800', 
      techStack: 'Spring Boot, Docker, AWS, Kubernetes, Terraform' 
    }
  ];

  useEffect(() => {
    api.getProjects()
      .then(res => {
        const data = res.length ? res : fallbackProjects;
        setProjects(data);
        setFilteredProjects(data);
        
        const distinct = ['All', ...new Set(data.map(p => p.category))];
        setCategories(distinct);
      })
      .catch(() => {
        setProjects(fallbackProjects);
        setFilteredProjects(fallbackProjects);
        setCategories(['All', 'Web Development', 'Mobile App Development', 'UI/UX Design', 'Cloud Solutions']);
      });
  }, []);

  useEffect(() => {
    let result = projects;

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) || 
        (p.techStack && p.techStack.toLowerCase().includes(q))
      );
    }

    setFilteredProjects(result);
  }, [selectedCategory, searchQuery, projects]);

  return (
    <AnimatedPage>
      <div className="pt-24 pb-20 overflow-hidden">
        {/* HEADER */}
        <section className="relative max-w-7xl mx-auto px-6 py-12 text-center flex flex-col items-center gap-6">
          <div className="absolute top-[-30%] left-[10%] w-96 h-96 bg-indigo-100/40 rounded-full blur-[100px] -z-10" />
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-xs font-semibold text-primaryAccent"
          >
            <Star size={12} className="fill-primaryAccent" />
            <span>Portfolio Showcase</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-primaryText leading-tight max-w-2xl"
          >
            Explore Our Digital <span className="gradient-text">Masterpieces</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondaryText text-sm sm:text-base max-w-lg leading-relaxed"
          >
            Browse through our portfolio of high-performing web platforms, interactive designs, and reliable cloud solutions.
          </motion.p>
        </section>

        {/* SEARCH AND FILTERS */}
        <section className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'gradient-bg text-white shadow-md'
                    : 'bg-white border border-slate-200 text-secondaryText hover:text-primaryText hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search project name or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-full pl-10 pr-4 py-2 text-sm text-primaryText placeholder-slate-400 focus:outline-none focus:border-primaryAccent focus:ring-1 focus:ring-primaryAccent"
            />
          </div>
        </section>

        {/* PORTFOLIO GRID */}
        <section className="max-w-7xl mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={p.id}
                  className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={p.imageUrl} 
                      alt={p.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1 rounded-full text-[10px] font-bold uppercase text-primaryAccent tracking-wider border border-slate-100">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-6.5 flex flex-col flex-1 gap-3">
                    <h3 className="font-extrabold text-lg text-primaryText group-hover:text-primaryAccent transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-secondaryText text-sm leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                    {p.techStack && (
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {p.techStack.split(',').map((tech) => (
                          <span key={tech} className="text-[10px] font-mono bg-slate-50 text-secondaryText px-2 py-0.5 rounded">
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-auto pt-5 border-t border-slate-50">
                      <Link 
                        to={`/projects/${p.id}`} 
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase text-primaryText hover:text-primaryAccent transition-colors"
                      >
                        View Project Details
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-secondaryText">
              No projects found matching your selection.
            </div>
          )}
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Projects;

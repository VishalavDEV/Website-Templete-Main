import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Search, Filter, X } from 'lucide-react';
import { caseStudiesData } from '../../data/caseStudies';
import { CaseStudyCard } from '../../components/cards/CaseStudyCard';
import { CtaBanner } from '../../components/sections/CtaBanner';
import { staggerContainer } from '../../utils/animations';

export const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const industries = ['all', 'Banking & Finance', 'Healthcare', 'Retail & E-Commerce', 'Manufacturing & Smart IoT'];
  const services = ['all', 'AI & Machine Learning', 'Cloud Solutions', 'Data Analytics', 'Software Development'];
  const technologies = ['all', 'PyTorch', 'Kafka', 'React', 'Snowflake', 'Kubernetes', 'Go'];

  const filteredCaseStudies = useMemo(() => {
    return caseStudiesData.filter((cs) => {
      const matchIndustry = selectedIndustry === 'all' || cs.industry === selectedIndustry;
      const matchService = selectedService === 'all' || cs.service === selectedService;
      const matchTech = selectedTech === 'all' || cs.technology.some((t) => t.toLowerCase().includes(selectedTech.toLowerCase()));
      const matchSearch = !searchQuery.trim() || 
        cs.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        cs.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.summary.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchIndustry && matchService && matchTech && matchSearch;
    });
  }, [selectedIndustry, selectedService, selectedTech, searchQuery]);

  const handleResetFilters = () => {
    setSelectedIndustry('all');
    setSelectedService('all');
    setSelectedTech('all');
    setSearchQuery('');
  };

  return (
    <div className="pt-28 pb-16 bg-white text-slate-900">
      
      {/* Header */}
      <section className="pb-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <Link to="/" className="hover:text-slate-800">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-semibold">Case Studies</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Case Studies
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore how we've helped businesses solve complex challenges and achieve remarkable results.
            </p>
          </div>

        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 bg-slate-50 border-b border-slate-200 sticky top-[68px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            
            {/* Industry filter */}
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-800"
            >
              <option value="all">All Industries</option>
              <option value="Banking & Finance">Banking &amp; Finance</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Retail & E-Commerce">Retail &amp; E-Commerce</option>
              <option value="Manufacturing & Smart IoT">Manufacturing &amp; IoT</option>
            </select>

            {/* Service filter */}
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-800"
            >
              <option value="all">All Services</option>
              <option value="AI & Machine Learning">AI &amp; Machine Learning</option>
              <option value="Cloud Solutions">Cloud Solutions</option>
              <option value="Data Analytics">Data Analytics</option>
              <option value="Software Development">Software Development</option>
            </select>

            {/* Technology filter */}
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-800"
            >
              <option value="all">All Technologies</option>
              <option value="PyTorch">PyTorch / AI</option>
              <option value="Kafka">Apache Kafka</option>
              <option value="React">React 19</option>
              <option value="Snowflake">Snowflake</option>
              <option value="Kubernetes">Kubernetes</option>
              <option value="Go">Golang</option>
            </select>

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search case studies..."
                className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-8 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-3 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

          {(selectedIndustry !== 'all' || selectedService !== 'all' || selectedTech !== 'all' || searchQuery) && (
            <div className="flex items-center justify-between mt-3 pt-2 text-xs text-slate-600">
              <span>Showing {filteredCaseStudies.length} matching engagements</span>
              <button
                onClick={handleResetFilters}
                className="text-slate-900 font-semibold hover:underline flex items-center gap-1"
              >
                <X className="w-3 h-3" /> Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">No matching case studies</h3>
              <p className="text-sm text-slate-600 mb-4">Try clearing filters or adjusting your search query.</p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredCaseStudies.map((cs) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} />
              ))}
            </motion.div>
          )}

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <CtaBanner
        title="Ready to achieve similar results?"
        subtitle="Let's build a customized solution for your enterprise."
      />

    </div>
  );
};

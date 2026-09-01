import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Briefcase, 
  MapPin, 
  Clock, 
  Sparkles, 
  Send, 
  Heart, 
  Zap, 
  Award, 
  Coffee 
} from 'lucide-react';
import { jobsData, JobItem } from '../../data/jobs';
import { JobCard } from '../../components/cards/JobCard';
import { JobApplicationModal } from '../../components/forms/JobApplicationModal';
import { Button } from '../../components/common/Button';
import { staggerContainer, fadeUp } from '../../utils/animations';

export const CareersPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState('all');
  const [activeJobForModal, setActiveJobForModal] = useState<JobItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const departments = ['all', 'Engineering', 'AI & Data', 'Cloud Engineering', 'Security & Governance'];

  const filteredJobs = selectedDept === 'all'
    ? jobsData
    : jobsData.filter((j) => j.department.toLowerCase().includes(selectedDept.toLowerCase()));

  const handleOpenModal = (job?: JobItem) => {
    setActiveJobForModal(job || null);
    setIsModalOpen(true);
  };

  const culturePerks = [
    { title: "Remote-First Flexibility", desc: "Work from our global tech hubs or your preferred location with home office stipends.", icon: Coffee },
    { title: "Generous Learning Budget", desc: "$2,500 annual allowance for books, certifications, conferences, and courses.", icon: Award },
    { title: "Comprehensive Health", desc: "Top-tier medical, dental, vision, and mental wellness coverage for you and dependents.", icon: Heart },
    { title: "Cutting-Edge Tech Stack", desc: "Work with modern tools: React 19, PyTorch, Kubernetes, Kafka, and GPU clusters.", icon: Zap }
  ];

  return (
    <div className="pt-28 pb-16 bg-white text-slate-900">
      
      {/* 1. Header & Hero Banner */}
      <section className="pb-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <Link to="/" className="hover:text-slate-800">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-semibold">Careers</span>
          </nav>

          <div className="max-w-3xl mb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Build Your Career with Straventa
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Join a team of passionate people building technology that changes the world.
            </p>
          </div>

          {/* Team Collaboration Banner */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
              alt="Straventa Engineering Team"
              referrerPolicy="no-referrer"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-lg font-bold text-white">Innovation Without Ego</div>
                <div className="text-xs text-slate-200">Empowering engineers to ship high-impact code.</div>
              </div>
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleOpenModal()}
                icon={<Send className="w-3.5 h-3.5" />}
              >
                Send Open Resume
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Perks & Culture */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why Engineers Love Straventa</h2>
            <p className="text-sm text-slate-600 mt-2">Built by engineers, for engineers. We invest deeply in your growth.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturePerks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{perk.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{perk.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Open Positions */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Open Positions</h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">Explore current openings across our engineering practices</p>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                    selectedDept === dept
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {dept === 'all' ? 'All Roles' : dept}
                </button>
              ))}
            </div>
          </div>

          {/* Jobs Grid */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onApplyClick={(j) => handleOpenModal(j)}
              />
            ))}
          </motion.div>

          {/* "Don't see the right role? Send Resume" Banner */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                Don't see the right role?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Send us your resume and we'll reach out when a suitable opening comes up.
              </p>
            </div>

            <Button
              variant="primary"
              size="md"
              onClick={() => handleOpenModal()}
              icon={<Send className="w-3.5 h-3.5" />}
              className="shrink-0 w-full sm:w-auto"
            >
              Send Resume
            </Button>
          </motion.div>

        </div>
      </section>

      {/* Application Modal */}
      <JobApplicationModal
        job={activeJobForModal}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
};

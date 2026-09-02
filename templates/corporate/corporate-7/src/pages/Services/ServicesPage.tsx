import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { ServiceCard } from '../../components/cards/ServiceCard';
import { Button } from '../../components/common/Button';
import { servicesData } from '../../data/services';
import { staggerContainer, fadeUp } from '../../utils/animations';

export const ServicesPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredServices = selectedFilter === 'all'
    ? servicesData
    : servicesData.filter((s) => selectedFilter === 'core' ? s.featured : !s.featured);

  return (
    <div className="pt-28 pb-16 bg-white text-slate-900">
      
      {/* Top Banner Header */}
      <section className="pb-12 sm:pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <Link to="/" className="hover:text-slate-800">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-semibold">Services</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Our Services
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Comprehensive technology solutions designed to help your business innovate, scale, and succeed.
            </p>
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {servicesData.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} variant="detailed" />
            ))}
          </motion.div>

          {/* "Looking for a custom solution?" Banner */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Looking for a custom solution?
              </h3>
              <p className="text-sm text-slate-600">
                We can help you build exactly what you need with dedicated engineering squads.
              </p>
            </div>

            <Button
              to="/contact"
              variant="primary"
              size="md"
              className="shrink-0 w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

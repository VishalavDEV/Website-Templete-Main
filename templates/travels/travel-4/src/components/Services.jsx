import React from 'react';
import { Truck, Ship, Plane, Warehouse, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const servicesList = [
    {
      id: 1,
      title: 'Road Transport',
      description: 'Flexible FTL and LTL trucking services across all major national and regional highway corridors.',
      icon: Truck,
      tag: 'Land'
    },
    {
      id: 2,
      title: 'Ocean Freight',
      description: 'Reliable container shipping (FCL/LCL), chartering, and harbor customs clearance operations.',
      icon: Ship,
      tag: 'Sea'
    },
    {
      id: 3,
      title: 'Air Freight',
      description: 'Priority overnight cargo delivery, air charters, and secure expedited global supply chains.',
      icon: Plane,
      tag: 'Air'
    },
    {
      id: 4,
      title: 'Warehousing & Storage',
      description: 'Temperature-controlled facilities, inventory management, and regional distribution centers.',
      icon: Warehouse,
      tag: 'Storage'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 85,
        damping: 15
      }
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50 pt-[140px] md:pt-[180px]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="font-display font-extrabold text-[10px] tracking-widest text-accent uppercase flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-accent" />
            Our Services
            <span className="w-8 h-[2px] bg-accent" />
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary tracking-tight leading-tight uppercase">
            Multimodal Supply <br />
            Chain Solutions
          </h2>
          <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed">
            From industrial manufacturing distribution to local retail storage, we configure transportation that fits your cargo specifications.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {servicesList.map((srv) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.id}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(13, 27, 42, 0.05), 0 10px 10px -5px rgba(13, 27, 42, 0.02)' }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100/80 shadow-sm flex flex-col justify-between group cursor-pointer h-full transition-all"
              >
                <div className="space-y-6">
                  {/* Icon with orange bg highlight */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary border border-slate-100 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">{srv.tag}</span>
                    <h3 className="font-display font-extrabold text-lg text-primary group-hover:text-accent transition-colors">
                      {srv.title}
                    </h3>
                    <p className="font-sans text-slate-500 text-xs md:text-sm leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 group-hover:text-accent transition-colors">Learn details</span>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-accent group-hover:translate-x-1.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import client from '../api/client';
import { lumoraData } from '../lumoraData';
import TiltCard from '../components/TiltCard';

// Component to dynamically resolve and render Lucide Icons by name
const DynamicIcon = ({ name, size = 22, className }) => {
  const IconComponent = Icons[name] || Icons.HelpCircle;
  return <IconComponent size={size} className={className} />;
};

export default function Services() {
  const [services, setServices] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    client.get('/services')
      .then((res) => {
        if (res.data && res.data.success) {
          setServices(res.data.data);
        }
      })
      .catch((err) => {
        console.error('Failed to load services, fallback to local', err);
        // Map local data into compatible shape
        const fallback = [
          ...lumoraData.whatWeBuild.map((w, idx) => ({
            name: w.title,
            type: 'CORE CAPABILITY',
            description: w.desc,
            iconName: ['Layers', 'Rocket', 'Globe'][idx] || 'Layers'
          })),
          ...lumoraData.products.map(p => ({
            name: p.name,
            type: p.type,
            description: p.desc,
            iconName: 'Settings'
          }))
        ];
        setServices(fallback);
      });
  }, []);

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 15 } 
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-28 pb-20 bg-white text-slate-800 relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-[-10%] right-[-15%] w-[50%] aspect-square rounded-full bg-purple-100/30 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[50%] aspect-square rounded-full bg-indigo-100/20 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title Header */}
        <section className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-extrabold tracking-[0.25em] text-purple-600 uppercase mb-3 block font-mono">
            STUDIO ENGINE
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-mono uppercase mb-6">
            WHAT WE CO-BUILD
          </h1>
          <p className="text-slate-500 leading-relaxed text-sm md:text-base">
            We provide full-stack architecture, high-fidelity UI design files, and capital connections. Click any card below to reveal the full scope and tech specs.
          </p>
        </section>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <motion.div key={service.name} variants={cardVariants} layout="position">
                <TiltCard className="bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer select-none">
                  <div 
                    onClick={() => toggleExpand(idx)}
                    className="p-8 flex flex-col justify-between min-h-[180px]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                        <DynamicIcon name={service.iconName} />
                      </div>
                      <span className="text-[8px] font-mono font-bold bg-purple-100/50 text-purple-600 px-2.5 py-1 rounded">
                        {service.type}
                      </span>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-lg font-extrabold text-slate-900 mb-2">{service.name}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{service.description}</p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-200/40 flex items-center justify-between text-[10px] font-mono font-bold text-purple-600">
                      <span>{isExpanded ? 'COLLAPSE SPECIFICATIONS' : 'EXPAND SPECIFICATIONS'}</span>
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        ▼
                      </motion.span>
                    </div>
                  </div>

                  {/* Accordion Expandable Area */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="bg-purple-50/30 border-t border-slate-200/30 font-mono text-[11px] text-slate-500 overflow-hidden"
                      >
                        <div className="p-8 space-y-4">
                          <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[10px]">Cohort Deliverables:</h4>
                          <ul className="list-disc list-inside space-y-2 text-slate-500">
                            <li>Complete Vite-based React interface with responsive mobile styling</li>
                            <li>Spring Boot core controller logic serving APIs at sub 8ms latency</li>
                            <li>Automated schema pipelines and validation configurations</li>
                            <li>Mock deployment scripts and ready-to-scale infrastructure templates</li>
                          </ul>
                          <div className="bg-white p-3 rounded-lg border border-slate-100 mt-2 flex items-center justify-between">
                            <span className="font-bold text-slate-800 text-[10px]">ESTIMATED COHORT SPEED:</span>
                            <span className="font-extrabold text-emerald-600">30 DAYS MVP</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </motion.div>
  );
}

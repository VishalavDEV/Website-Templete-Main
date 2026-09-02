import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Tractor, 
  Globe, 
  Droplet, 
  Leaf, 
  TrendingUp,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { impactMetrics } from '../data/content';

const iconMap = {
  Tractor,
  Globe,
  Droplet,
  Leaf,
  TrendingUp,
};

// Animated Number Counter component
function Counter({ value, prefix = '', suffix = '' }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const steps = 50;
    const increment = value / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start * 10) / 10);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display font-extrabold tracking-tight">
      {prefix}
      {typeof value === 'number' && Number.isInteger(value)
        ? Math.floor(displayValue).toLocaleString()
        : displayValue.toFixed(1)}
      {suffix}
    </span>
  );
}

export default function ImpactMetrics() {
  return (
    <section id="impact" className="py-24 bg-forest-950 text-white relative overflow-hidden scroll-mt-20 md:scroll-mt-28">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-wheat-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-800/80 border border-forest-600/60 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-wheat-400" />
            <span>Verifiable Ecological & Economic Footprint</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-5"
          >
            Real Impact Across <br />
            <span className="text-gradient-gold italic">Global Soil Ecosystems</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-forest-200"
          >
            Our satellite MRV algorithms and in-ground IoT telemetry track every drop of preserved water and every pound of sequestered carbon.
          </motion.p>
        </div>

        {/* 5-Column Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {impactMetrics.map((metric, index) => {
            const IconComponent = iconMap[metric.icon] || Leaf;
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-forest-900/70 border border-forest-700/60 rounded-3xl p-6 backdrop-blur-md hover:border-emerald-500/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-forest-800 text-wheat-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-forest-700 transition-all">
                    <IconComponent className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  {/* Counter Value */}
                  <div className="text-3xl sm:text-4xl text-white font-bold mb-2">
                    <Counter 
                      value={metric.value} 
                      prefix={metric.prefix} 
                      suffix={metric.suffix} 
                    />
                  </div>

                  {/* Label */}
                  <h3 className="text-sm font-bold text-emerald-300 uppercase tracking-wider mb-2">
                    {metric.label}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-forest-300 leading-relaxed">
                    {metric.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-forest-800/80 flex items-center gap-1 text-[11px] text-forest-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Telemetry verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 p-6 rounded-2xl bg-forest-900/90 border border-forest-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">ISO 14064 Carbon Protocol Verification</div>
              <div className="text-xs text-forest-300">All carbon sequestration claims are audited via Sentinel-2 SAR radar and certified third-party lab cores.</div>
            </div>
          </div>
          <a
            href="#calculator"
            className="px-5 py-2.5 rounded-full bg-wheat-500 text-forest-950 font-bold text-xs hover:bg-wheat-400 transition-colors whitespace-nowrap"
          >
            Calculate Your Acreage Impact
          </a>
        </motion.div>

      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Compass, MessageCircle, Award } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value, 10);
      if (isNaN(end)) {
        setCount(value);
        return;
      }
      
      const duration = 1800; // ms
      const startTime = performance.now();

      const animateCount = (timestamp) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function WhyChooseUs() {
  const stats = [
    { value: '10000', suffix: '+', label: 'Happy Travelers' },
    { value: '50', suffix: '+', label: 'Landmark Destinations' },
    { value: '120', suffix: '+', label: 'Certified Tour Guides' },
    { value: '99', suffix: '%', label: 'Satisfaction Rate' }
  ];

  const features = [
    {
      icon: Award,
      title: 'Best Price Guarantee',
      desc: 'We match any price for equivalent city landmark Excursions. Save more on flights and hotels.'
    },
    {
      icon: Compass,
      title: 'Certified Local Guides',
      desc: 'Our multilingual guides are certified history and adventure experts in each destination.'
    },
    {
      icon: MessageCircle,
      title: '24/7 Client Support',
      desc: 'Get immediate support from our travel team during your trip via active messaging hotlines.'
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      
      {/* Background Graphic elements */}
      <div className="absolute right-[-100px] top-[10%] w-[300px] h-[300px] rounded-full bg-blue-100/40 blur-[100px] pointer-events-none" />
      <div className="absolute left-[-150px] bottom-[10%] w-[400px] h-[400px] rounded-full bg-yellow-100/30 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Feature Blocks */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <span className="font-sans font-black text-xs tracking-wider text-[#2563EB] uppercase flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#2563EB]" />
                Why Choose Exploria
              </span>
              <h2 className="font-sans font-black text-3xl md:text-5xl text-[#0F172A] tracking-tight uppercase leading-tight">
                Crafting Perfect Journeys
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                We handle the details so you can focus on the memories. Explore why thousands of adventure seekers choose us for their world tours.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-8">
              {features.map((feat, index) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: index * 0.12, duration: 0.5 }}
                    className="flex gap-5"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] shrink-0 shadow-sm">
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-sans font-black text-base text-[#0F172A]">{feat.title}</h3>
                      <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed max-w-md">{feat.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 select-none">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center space-y-2 flex flex-col justify-center items-center aspect-square"
              >
                <div className="text-3xl sm:text-4xl font-black text-[#2563EB] tracking-tight">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

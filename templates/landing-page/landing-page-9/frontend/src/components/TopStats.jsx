import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fetchStats } from '../services/api';

function CounterItem({ endValue, suffix, label, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const isThousands = endValue >= 1000;
    const target = isThousands ? Math.round(endValue / 1000) : endValue;
    
    const duration = 1600;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOut * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(updateCounter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, endValue, delay]);

  const displayString = endValue >= 1000 
    ? `${count}K${suffix}` 
    : `${count}${suffix}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay * 0.3 }}
      className="flex flex-col items-start"
    >
      <div className="text-2xl sm:text-3xl lg:text-[36px] font-display font-semibold text-[#F2994A] tracking-tight leading-none mb-1">
        {displayString}
      </div>
      <div className="text-[11px] sm:text-xs font-normal text-[#8E8E93] tracking-wide">
        {label}
      </div>
    </motion.div>
  );
}

export default function TopStats() {
  const [stats, setStats] = useState({
    vehiclePremium: 200,
    vehiclePremiumSuffix: "+",
    happyClients: 4000,
    happyClientsSuffix: "+",
    awardsWon: 87,
    awardsWonSuffix: "",
    globalOffices: 30,
    globalOfficesSuffix: "+"
  });

  useEffect(() => {
    fetchStats().then(data => {
      if (data) setStats(data);
    });
  }, []);

  return (
    <div className="w-full bg-[#070709] border-b border-white/[0.05] py-3.5 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          <CounterItem
            endValue={stats.vehiclePremium}
            suffix={stats.vehiclePremiumSuffix}
            label="Vehicle Premium"
            delay={0.05}
          />
          <CounterItem
            endValue={stats.happyClients}
            suffix={stats.happyClientsSuffix}
            label="Happy Client"
            delay={0.1}
          />
          <CounterItem
            endValue={stats.awardsWon}
            suffix={stats.awardsWonSuffix}
            label="Awwards Winning"
            delay={0.15}
          />
          <CounterItem
            endValue={stats.globalOffices}
            suffix={stats.globalOfficesSuffix}
            label="Office In The World"
            delay={0.2}
          />
        </div>
      </div>
    </div>
  );
}

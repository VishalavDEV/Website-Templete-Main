import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Users, PlayCircle, Star } from 'lucide-react';

const icons = { BookOpen, Users, PlayCircle, Star };

function useCountUp(target, isInView, duration = 1800) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;
    const startTime = performance.now();
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return count;
}

export default function StatCard({ stat }) {
  const { value, suffix, label, icon, color } = stat;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp(value, isInView);
  const Icon = icons[icon];

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="stat-icon-wrap">
        {Icon && <Icon size={24} color="white" aria-hidden="true" />}
      </div>
      <div className="stat-number" aria-live="polite">
        {value >= 1000 ? `${(count / 1000).toFixed(count >= value ? 0 : 1)}K` : count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
}

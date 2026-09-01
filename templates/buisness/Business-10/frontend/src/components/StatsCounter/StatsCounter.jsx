import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import './StatsCounter.css';

/**
 * Animated count-up number that triggers when entering the viewport.
 *
 * @param {number} value     - target number to count to
 * @param {string} suffix    - text to append (e.g. '+', '%')
 * @param {string} label     - label below the number
 * @param {number} duration  - animation duration in ms
 */
const StatsCounter = ({ value, suffix = '', label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(easeOut(progress) * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  return (
    <div ref={ref} className="stat-item">
      <span className="stat-value">
        {count}
        <span className="stat-suffix">{suffix}</span>
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

export default StatsCounter;

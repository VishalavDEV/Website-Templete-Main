import { useState } from "react";
import { useReducedMotion } from "motion/react";

interface MarqueeProps {
  items: string[];
  className?: string;
}

/** The single sanctioned marquee on the site (home services strip).
 *  Static under reduced motion; pauses on hover / focus-within. */
export function Marquee({ items, className = "" }: MarqueeProps) {
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);

  if (reduce) {
    return (
      <ul className={`flex flex-wrap gap-x-8 gap-y-3 ${className}`}>
        {items.map((item) => (
          <li key={item} className="display-md whitespace-nowrap">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className={`flex w-max items-baseline gap-12 ${
          paused ? "[animation-play-state:paused]" : "animate-marquee"
        }`}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="display-md flex items-baseline gap-12 whitespace-nowrap text-ink/85"
          >
            {item}
            <span
              aria-hidden="true"
              className="inline-block size-3 shrink-0 rounded-full bg-coral"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

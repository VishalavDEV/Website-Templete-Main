import React from 'react';

interface MarqueeProps {
  items?: string[];
  speed?: string;
  className?: string;
}

const DEFAULT_ITEMS = [
  'STRATEGY',
  'BRAND IDENTITY',
  'DIGITAL TRANSFORMATION',
  'AI & AUTOMATION',
  'PRODUCT ENGINEERING',
  'BUSINESS GROWTH',
  '3D EXPERIENCES',
];

export const Marquee: React.FC<MarqueeProps> = ({
  items = DEFAULT_ITEMS,
  className = '',
}) => {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative w-full overflow-hidden py-4 bg-[#121316] text-[#f8f7f4] border-y border-white/10 ${className}`}>
      <div className="animate-marquee flex whitespace-nowrap items-center gap-8 text-xs sm:text-sm font-mono tracking-[0.3em] uppercase">
        {repeatedItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="hover:text-lime-400 transition-colors cursor-default">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-lime-400 inline-block opacity-80" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

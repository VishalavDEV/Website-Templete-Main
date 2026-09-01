import React from 'react';
import { TICKER_HEADLINES } from '../../utils/constants';
import clsx from 'clsx';

export function KineticRibbon({
  items = TICKER_HEADLINES,
  direction = 'left',
  bgColor = 'bg-[#FFE600]',
  textColor = 'text-[#0A0A0E]',
  className = '',
  speed = 'normal'
}) {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={clsx(
        'w-full overflow-hidden border-y-2 border-[#0A0A0E] py-2 select-none z-20 relative shadow-[0_2px_0_#0A0A0E]',
        bgColor,
        textColor,
        className
      )}
    >
      <div
        className={clsx(
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right',
          'flex items-center whitespace-nowrap'
        )}
      >
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center mx-4">
            <span className="font-y2k text-xs sm:text-sm font-black uppercase tracking-wider">
              {item}
            </span>
            <span className="mx-4 text-xs font-bold opacity-75">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KineticRibbon;

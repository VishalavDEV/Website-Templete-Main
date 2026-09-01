import React from 'react';
import { motion } from 'framer-motion';
import { useMagazine } from '../../context/MagazineContext';
import clsx from 'clsx';

export function InteractiveTagPill({ tag, variant = 'pink', onClick }) {
  const { triggerDopamineConfetti } = useMagazine();

  const variantStyles = {
    pink: 'bg-[#FFEBF3] text-[#FF007A] border-[#FF007A] hover:bg-[#FF007A] hover:text-white',
    blue: 'bg-[#EBF4FF] text-[#0047FF] border-[#0047FF] hover:bg-[#0047FF] hover:text-white',
    lime: 'bg-[#F2FFE6] text-[#0A0A0E] border-[#10FF70] hover:bg-[#10FF70] hover:text-[#0A0A0E]',
    yellow: 'bg-[#FFFBE6] text-[#0A0A0E] border-[#FFE600] hover:bg-[#FFE600] hover:text-[#0A0A0E]',
    orange: 'bg-[#FFF0E6] text-[#FF5500] border-[#FF5500] hover:bg-[#FF5500] hover:text-white',
    purple: 'bg-[#F6EEFF] text-[#9D00FF] border-[#9D00FF] hover:bg-[#9D00FF] hover:text-white'
  };

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    triggerDopamineConfetti(rect.left / window.innerWidth, rect.top / window.innerHeight);
    if (onClick) onClick(tag);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.08, rotate: Math.random() > 0.5 ? 2 : -2 }}
      whileTap={{ scale: 0.92 }}
      onClick={handleClick}
      className={clsx(
        "inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs font-black uppercase border-2 shadow-[2px_2px_0px_#0A0A0E] cursor-pointer transition-colors select-none",
        variantStyles[variant] || variantStyles.pink
      )}
    >
      <span>#{tag}</span>
    </motion.button>
  );
}

export default InteractiveTagPill;

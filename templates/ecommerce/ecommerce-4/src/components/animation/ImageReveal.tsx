import React from 'react';
import { motion } from 'framer-motion';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  aspectRatio?: string;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  className = '',
  style = {},
  aspectRatio = '4/3'
}) => {
  return (
    <motion.div
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio,
        borderRadius: 'var(--radius-md)',
        ...style
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </motion.div>
  );
};

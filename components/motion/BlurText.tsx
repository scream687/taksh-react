'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  stepDelay?: number;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  className = '',
  delay = 0,
  stepDelay = 0.05,
  animateBy = 'words',
  direction = 'bottom',
  threshold = 0.15,
  onAnimationComplete,
  style = {},
  as: Component = 'span',
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stepDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      filter: 'blur(12px)',
      opacity: 0,
      y: direction === 'bottom' ? 18 : -18,
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Component className={`blur-text ${className}`.trim()} style={{ display: 'inline', ...style }}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: threshold }}
        onAnimationComplete={onAnimationComplete}
        style={{ display: 'inline', willChange: 'transform, filter, opacity' }}
      >
        {elements.map((element, index) => (
          <motion.span
            key={`${element}-${index}`}
            variants={itemVariants}
            style={{
              display: 'inline-block',
              whiteSpace: 'pre',
              willChange: 'transform, filter, opacity',
            }}
          >
            {element}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
};

export default BlurText;
